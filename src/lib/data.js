import karnatakaData from '@/lib/countries/country/states/karnataka';

import { unstable_noStore as noStore } from 'next/cache';

export function fetchStateData(stateId) {
  noStore();

  return karnatakaData;

  //   const statePath = Object.fromEntries(
  //     Object.entries(statesDataIndia).filter(([key, _]) => key === stateId)
  //   );

  //   return statePath[stateId];
}
