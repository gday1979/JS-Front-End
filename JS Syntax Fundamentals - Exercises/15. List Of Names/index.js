function printSortedNames(names) {
  // Sort the names array alphabetically
  names.sort();

  // Print the numbered list of names
  for (var i = 0; i < names.length; i++) {
    console.log(`${i + 1}.${names[i]}`);
  }
}
printSortedNames(["John",
"Bob",
"Christina",
"Ema"]
)