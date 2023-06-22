function calculateTicketPrice(day,age){
    if (day==='Weekday') {
        if (age>=0 && age<=18) {
            return '12$';
        }
        else if(age>18 && age <=64){
           return '18$';
        }
        else if(age>64 && age<=122){
           return '12$';
        }
    }
    else if(day===`Weekend`){
         if (age>=0 && age<=18) {
            return '15$';
        }
        else if(age>18 && age <=64){
           return '20$';
        }
        else if(age>64 && age<=122){
           return '15$';
        }
    }
    else if(day===`Holiday`){
        if (age>=0 && age<=18) {
            return '5$';
        }
        else if(age>18 && age <=64){
           return '12$';
        }
        else if(age>64 && age<=122){
           return '10$';
        }

    }
    
        return 'Error!';
    
}