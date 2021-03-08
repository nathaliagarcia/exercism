//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const GIGA_MILLISECOND = Math.pow(10, 9) * 1000;
export const gigasecond = (date) => new Date(date.getTime() + GIGA_MILLISECOND);
