import statesDataIndia from '@/lib/countries/country/india';
import karnatakaData from '@/lib/countries/country/states/karnataka';

import { unstable_noStore as noStore } from 'next/cache';

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
  return karnatakaData;
}

export async function fetchParlimentData(params) {
  const data = [
    ['NDA', 353, '#FF9650', ''],
    ['UPA', 90, '#1EB4FF', ''],
    ['MGB', 15, '#00C86E', ''],
    ['OTH', 84, '#8489BB', ''],
  ];
  return data;
}

export async function fetchParlimentDataByState(params) {
  const data = [
    ['NDA', 353, '#FF9650', ''],
    ['UPA', 90, '#1EB4FF', ''],
    ['MGB', 15, '#00C86E', ''],
    ['OTH', 84, '#8489BB', ''],
  ];
  return data;
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
