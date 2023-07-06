function printObjectProperties(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`${key} -> ${obj[key]}`);
    }
  }
}
city("Sofia"," 492", "1238438", "Bulgaria", "1000")