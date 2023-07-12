function makeADictionary(input) {
    let dictionary = {};
    for (let i = 0; i < input.length; i++) {
        let current = JSON.parse(input[i]);
        let tuple = Object.entries(current);
        let term = tuple[0][0];
        let definition = tuple[0][1];
        dictionary[term] = definition;
    }
    let sorted = Object.entries(dictionary).sort((a, b) => a[0].localeCompare(b[0]));
    for (let i = 0; i < sorted.length; i++) {
        console.log(`Term: ${sorted[i]  
        [0]} => Definition: ${sorted[i][1]}`);
    }
}
makeADictionary(['{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',