function reverseArray(n, arr) {
  // Create a new array with n numbers from the original array
  const newArray = arr.slice(0, n);

  // Reverse the new array
  const reversedArray = newArray.reverse();

  // Print the elements of the reversed array on a single line
  console.log(reversedArray.join(' '));
}