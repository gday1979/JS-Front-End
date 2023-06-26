function vacation(people,typeOfGroup,dayOfWeek){
    let price=0;
    if (typeOfGroup==='Students')
     {
        
        if (dayOfWeek==='Friday') {
            price=people*8.45;
        }
        else if(dayOfWeek==='Saturday'){
            price=people*9.80;
        }
        else if(dayOfWeek==='Sunday'){
            price=people*10.46;
        }
        if ( people>=30) {
        price=price*0.85;
    }
    }
   else if (typeOfGroup==='Business') {
        
    
        if (dayOfWeek==='Friday') {
            price=people*10.90;
        }
        else if(dayOfWeek==='Saturday'){
            price=people*15.60;
        }
        else if(dayOfWeek==='Sunday'){
            price=people*16;
        }
        if(people>=100){
        price=price*0.90;
    }
    }
    else if (typeOfGroup==='Regular') {
        
        if (dayOfWeek==='Friday') {
            price=people*15;
        }
        else if(dayOfWeek==='Saturday'){
            price=people*20;
        }
        else if(dayOfWeek==='Sunday'){
            price=people*22.50;
        }
         if(people>=10 && people<=20){
        price=price*0.95;
    }
    }
    
    
   
    console.log(`Total price: ${price.toFixed(2)}`)
}
vacation(40,'Regular','Saturday')