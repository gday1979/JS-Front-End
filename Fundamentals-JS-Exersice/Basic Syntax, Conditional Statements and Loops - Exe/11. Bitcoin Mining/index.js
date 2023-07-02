function bitcoinMininig(){
    let daylyGold = arguments[0].map(Number);
    let goldPerDay = 0;
    let totalMoney = 0;
    let firstDay = 0;
    let bitcoin = 0;
    let day = 0;
    let firstBitcoin = 0;
    let money = 0;
    let daylyMoney = 0;
    let bitcoinPrice = 11949.16;
    let goldPrice = 67.51;
    let totalGold = 0;
    let totalDay = 0;
    let totalMoneyDay = 0;
    let totalBitcoin = 0;
    let totalDayBitcoin = 0;

    for (let i = 0; i < daylyGold.length; i++) {
        day++;
        goldPerDay = daylyGold[i];
        if (day % 3 === 0){
            goldPerDay = goldPerDay * 0.7;
        }
        totalGold += goldPerDay;
        totalDay++;
        totalMoneyDay = totalGold * goldPrice;
        if (totalMoneyDay >= bitcoinPrice){
            totalBitcoin = Math.floor(totalMoneyDay / bitcoinPrice);
            totalDayBitcoin = totalDay;
            totalMoneyDay = totalMoneyDay - (totalBitcoin * bitcoinPrice);
        }
        totalMoney += totalMoneyDay;
        totalMoneyDay = 0;
        if (totalMoney >= bitcoinPrice){
            bitcoin = Math.floor(totalMoney / bitcoinPrice);
            money = totalMoney - (bitcoin * bitcoinPrice);
            if (firstBitcoin === 0){
                firstBitcoin = day;
            }
            totalMoney = money;
        }
    }
    console.log(`Bought bitcoins: ${totalBitcoin}`);
    if (totalBitcoin > 0){
        console.log(`Day of the first purchased bitcoin: ${totalDayBitcoin}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}
bitcoinMininig(['100', '200', '300']);