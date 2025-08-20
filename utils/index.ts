export const repeat = <T>(times: number, value: T): T[] => {
  const arr: T[] = [];
  for (let i = 0; i < times; i++) {
    arr.push(value);
  }
  return arr;
};
