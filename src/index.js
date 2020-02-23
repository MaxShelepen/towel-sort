
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let array = []

  if(arguments.length === 0 || matrix.length === 0 ) {
    return []
  } 
  matrix.map((el, indx) => {
   if(indx % 2 !== 0) {
     array.push(el.sort((a, b) => a > b ? -1 : 1)); 
   } else {
     array.push(el)
   }
 });

 return [].concat(...array);
}
