import { unstable_noStore as noStore } from 'next/cache';

import karnatakaState from './map-karnataka';

export function fetchStateData(stateId) {
  noStore();

  return karnatakaState;

  //   const statePath = Object.fromEntries(
  //     Object.entries(statesDataIndia).filter(([key, _]) => key === stateId)
  //   );

  //   return statePath[stateId];
}
