function analyzeArray(array) {
  if (!Array.isArray(array) || array.length === 0)
    return {
      average: null,
      min: null,
      max: null,
      length: 0,
    };

  let min = array[0];
  let max = array[0];
  let amount = array[0];

  for (let i = 1; i < array.length; i += 1) {
    if (array[i] > max) max = array[i];
    if (array[i] < min) min = array[i];

    amount += array[i];
  }

  return {
    average: amount / array.length,
    min,
    max,
    length: array.length,
  };
}

export default analyzeArray;
