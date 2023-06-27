function fruit(typeOfFruit,weightOfGrams,pricePerKilograms){
    const weightInKilograms=weightOfGrams/1000;
    const totalPrice=weightInKilograms*pricePerKilograms;
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightInKilograms.toFixed(2)} kilograms ${typeOfFruit}. `)
}
fruit('orange', 2500,1.80)