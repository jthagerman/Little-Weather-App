const stateTimeOffSet = {
  AL: 2,
  AK: -1,
  AZ: 1,
  AR: 2,
  CA: 0,
  CO: 1,
  CT: 3,
  DE: 3,
  FL: 3,
  GA: 3,
  HI: -2,
  ID: 1,
  IL: 2,
  IN: 3,
  IA: 2,
  KS: 2,
  KY: 3,
  LA: 2,
  ME: 3,
  MD: 3,
  MA: 3,
  MI: 3,
  MN: 2,
  MS: 2,
  MO: 2,
  MT: 1,
  NE: 2,
  NV: 0,
  NH: 3,
  NJ: 3,
  NM: 1,
  NY: 3,
  NC: 3,
  ND: 2,
  OH: 3,
  OK: 2,
  OR: 0,
  PA: 3,
  RI: 3,
  SC: 3,
  SD: 2,
  TN: 3,
  TX: 2,
  UT: 1,
  VT: 3,
  VA: 3,
  WA: 0,
  WV: 3,
  WI: 2,
  WY: 1,
};

const timeParser = (time, stateCode, zeros = true) => {
  let date = new Date(Date.parse(time));
  let hour = date.getHours();
  let offset = stateTimeOffSet[stateCode];

  const key = {
    0: 3,
    1: 2,
    2: 1,
    3: 0,
  };
  hour = hour - key[offset];

  if (hour > 24) hour = hour - 24;
  if (hour === 0) hour = 24;
  if (zeros) return hour > 12 ? `${hour - 12}:00 PM ` : `${hour}:00 AM `;
  else return hour > 12 ? `${hour - 12}PM ` : `${hour}AM `;
};

export default timeParser;
