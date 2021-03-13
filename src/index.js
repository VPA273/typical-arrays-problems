
exports.min = function min (array) {
  if (!array ) return 0;
  if (array.length == 0 ) return 0;
let m = array[0];
for( let i=1 ; i < array.length ; i++ ) {
  if (m > array[i] ) {m = array[i]}
}
  return (m);
return 0
}

exports.max = function max (array) {
  if (!array ) return 0;
  if (array.length == 0) return 0;
  let mx = array[0];
  for( let i=1 ; i < array.length ; i++ ) {
    if (mx < array[i] ) {mx = array[i]}
  }
    return (mx);
  return 0;
}

exports.avg = function avg (array) {
  if (!array ) return 0;
  if (array.length == 0 ) return 0;
  let sum = 0;
  for (item of array ) { sum += item }
  return (sum / array.length );
  return 0
}
