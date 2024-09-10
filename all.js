function calculateTax(income, expenses) {
    let difference = income - expenses;
    if((0<=income) && (0<=expenses)){
     let tax = parseFloat(difference * 0.2) ;
     return tax;
    }
    else{
     let result ="Invalid Input";
     return result;
    }
 }


 