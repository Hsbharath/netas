import statesDataIndia from '@/lib/countries/country/india';
import karnatakaData from '@/lib/countries/country/states/karnataka';

import { unstable_noStore as noStore } from 'next/cache';

export async function fetchCountryData(params) {
  noStore();
  return statesDataIndia;
}

export async function fetchStateData(params) {
  noStore();

  const stateData = await import(
    `@/lib/countries/country/states/${params.state}`
  );
  console.log(stateData);
  return stateData.default;
}

export async function fetchConstituencyData(params) {
  noStore();
  return karnatakaData;
}
