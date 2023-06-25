function censorWords(text, word) {
  const regex = new RegExp(word, 'gi');
  const asterisks = '*'.repeat(word.length);
  const censoredText = text.replace(regex, asterisks);
  return censoredText;
}