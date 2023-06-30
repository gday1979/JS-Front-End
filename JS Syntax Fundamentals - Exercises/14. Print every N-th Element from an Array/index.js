function printNthElement(array, step) {
  var result = [];
  
  for (var i = 0; i < array.length; i += step) {
    result.push(array[i]);
  }
  
  return result;
}