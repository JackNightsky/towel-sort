
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return (matrix !== undefined && arguments.length 
            ? matrix.map((el,indx)=>indx%2==1 ? el.reverse() : el).flat() 
            : []);
}
