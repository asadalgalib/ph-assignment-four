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


 
 function sendNotification(email) {
    if(email.includes("@")){
       const newEmail = email.split("@");
       let result = newEmail[0] + " sent you an email from " + newEmail[1];
       return result;
    }
    else{
        const result =  "Invalid Email";
        return result;
    }
}