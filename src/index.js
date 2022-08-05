
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined)
  return [];

  matrix = matrix.reduce((res, item, i) => {
      return res.concat(((i % 2 === 0) ? item : item.reverse()));
}, []);
return matrix;
}
