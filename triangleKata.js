exports.validTriangles = (arrOfTriangle) => {
  

  const countOfValid = arrOfTriangle.filter((triangle) => {
    if (triangle.length !== 3) {
      return false
    }
    if (triangle[0] + triangle[1] <= triangle[2]) {
      return false
    } else if (triangle[1] + triangle[2] <= triangle[0]) {
      return false
    } else if (triangle[0] + triangle[2] <= triangle[1]) {
      return false
    } else  return true
  });
  return countOfValid.length
};
