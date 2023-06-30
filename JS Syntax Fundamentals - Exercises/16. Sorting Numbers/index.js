function sortNumbers(array) {
  // Sort the array in ascending order
  array.sort(function(a, b) {
    return a - b;
  });

  var result = [];
  var left = 0;
  var right = array.length - 1;

  while (left <= right) {
    if (left === right) {
      // Add the middle element if the array has odd length
      result.push(array[left]);
    } else {
      // Add the left and right elements in pairs
      result.push(array[left]);
      result.push(array[right]);
    }

    left++;
    right--;
  }

  return result;
}
