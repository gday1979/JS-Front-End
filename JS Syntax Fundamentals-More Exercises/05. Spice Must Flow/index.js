function spiceMustFlow(){
    let startingYield = Number(document.getElementById('spice').value);
    let days = 0;
    let totalAmount = 0;
    while(startingYield >= 100){
        totalAmount += startingYield;
        totalAmount -= 26;
        days++;
        startingYield -= 10;
    }
    if(totalAmount >= 26){
        totalAmount -= 26;
    }
    document.getElementById('output').textContent = `${days}\n${totalAmount}`;
}