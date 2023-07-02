function vacation(people,typeOfGroup,dayOfWeek){
    let price = 0;
    if(typeOfGroup==='Students'){
        if(dayOfWeek==='Friday'){
            price = 8.45;
        }else if(dayOfWeek==='Saturday'){
            price = 9.80;
        }else if(dayOfWeek==='Sunday'){
            price = 10.46;
        }
        if(people>=30){
            price = price*0.85;
        }
    }
    else if(typeOfGroup==='Business'){
        if(dayOfWeek==='Friday'){
            price = 10.90;
        }else if(dayOfWeek==='Saturday'){
            price = 15.60;
        }else if(dayOfWeek==='Sunday'){
            price = 16;
        }
        if(people>=100){
            people-=10;
        }

    }
    else if(typeOfGroup==='Regular'){
        if(dayOfWeek==='Friday'){
            price = 15;
        }else if(dayOfWeek==='Saturday'){
            price = 20;
        }else if(dayOfWeek==='Sunday'){
            price = 22.50;
        }
        if(people>=10 && people<=20){
            price = price*0.95;
        }
    }
    console.log(`Total price: ${(people*price).toFixed(2)}`);
}
    