import { unstable_noStore as noStore } from 'next/cache';

import StatesById from './state-by-id';

export async function fetchCountryData(params) {
  noStore();
  const countryData = await import(`@/lib/countries/country/${params.country}`);
  return countryData.default;
}

export async function fetchStateData(params) {
  noStore();
  try {
    const stateData = await import(
      `@/lib/countries/country/states/${params.state}`
    );
    if (stateData.default instanceof Error) {
      throw stateData.default; // Throw the error
    }
    return stateData.default;
  } catch (error) {
    return error;
  }
}

export async function fetchConstituencyData(params) {
  noStore();
  return [];
}

export async function fetchParlimentData(params) {
  const data = [
    ['National Democratic Alliance', 353, '#FF9650', 'NDA'],
    ['United Progressive Alliance', 90, '#1EB4FF', 'UPA'],
    ['Mahagathbandhan', 15, '#00C86E', 'MGB'],
    ['Others', 84, '#8489BB', 'OTH'],
  ];
  return data;
}

//BJP, SS, AIADMK, JD(U), SAD, PMK, LJP, BDJS, DMDK, AGP, AD(S), AJSU, PT, TMC, PNK, AINRC, BPF, NDPP, KC(T), RLP

export async function fetchParlimentDataByState(params) {
  const counts = {
    NDA: 0,
    UPA: 0,
    MGB: 0,
    OTH: 0,
  };
  try {
    const stateData = await import(
      `@/lib/countries/country/states/${params.state}`
    );
    Object.entries(stateData).forEach(([key, value]) => {
      Object.entries(value.data).forEach(([key, value]) => {
        counts[value.party]++;
      });
    });
    const data = [
      ['National Democratic Alliance', counts['NDA'], '#FF9650', 'NDA'],
      ['United Progressive Alliance', counts['UPA'], '#1EB4FF', 'UPA'],
      ['Mahagathbandhan', counts['MGB'], '#00C86E', 'MGB'],
      ['Others', counts['OTH'], '#8489BB', 'OTH'],
    ].filter((party) => party[1] > 0);
    return data;
  } catch (error) {
    return error;
  }
}

export async function fetchParlimentDataByStateConst(params) {
  const data = [
    ['NDA', 353, '#FF9650', ''],
    ['UPA', 90, '#1EB4FF', ''],
    ['MGB', 15, '#00C86E', ''],
    ['OTH', 84, '#8489BB', ''],
  ];
  return data;
}

export async function fetchElectedByState() {
  noStore();
  try {
    const data = await import(`@/lib/countries/country/ElectedCountByState`);
    return data.default;
  } catch (error) {
    return error;
  }
}

export async function fetchElectedAllianceCountByState() {
  noStore();
  try {
    const data = await import(
      `@/lib/countries/country/ElectedCountOfAllianceByState`
    );
    return data.default;
  } catch (error) {
    return error;
  }
}
