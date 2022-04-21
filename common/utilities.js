// Converts an array to a 2D array with n elements in each sub array
export const to2DArray = (array, n) => {
  const result = [];

  while (array.length) {
    result.push(array.splice(0, n));
  }

  return result;
};
