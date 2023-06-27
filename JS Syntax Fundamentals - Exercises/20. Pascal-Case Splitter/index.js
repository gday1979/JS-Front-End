function splitPascalCase(input) {
  // Using regular expression to split the string by each capital letter
  var words = input.split(/(?=[A-Z])/);
  
  // Joining the words with comma and space
  var result = words.join(", ");
  
  return result;
}