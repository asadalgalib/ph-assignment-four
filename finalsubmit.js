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



 function checkDigitsInName(name) {
    if(typeof(name) !== "string"){
    let output = "Invalid Input";
    return output;
    }
    else{
    let result;
    for(let i = 0 ; i < name.length; i++){
    if(name[i] >= "0" && name[i] <= "9"){
    result = true;
    return result;
    }
    }
    return false;
    }
 }



 function calculateFinalScore(obj) {
    if(typeof(obj) !== "object"){
        let result = "Invalid Input";
        return result;
    }
    else{
        if((typeof(obj.name) === "string") && (typeof(obj.testScore) === "number" && obj.testScore <= 50) && 
        (typeof(obj.schoolGrade) === "number" && obj.schoolGrade <= 30) && (typeof(obj.isFFamily) === "boolean")){
            if(obj.isFFamily === true){
                let sum = obj.testScore + obj.schoolGrade + 20; 
                if(sum >= 80){
                    result = true;
                    return result;
                }
                else{
                    result = false;
                    return result;
                }
            }
            else{
                let sum = obj.testScore + obj.schoolGrade; 
                if(sum >= 80){
                    result = true;
                    return result;
                }
                else{
                    result = false;
                    return result;
                }
            }
        }
        else{
            result = false;
            return result;
        }
    }
 }



 function  waitingTime(waitingTimes , serialNumber) {
    let result;
    let sum = 0;
    let timeAvg;
    let serial;
    if(Array.isArray(waitingTimes) !== false && typeof serialNumber === "number"){
        for(let i = 0; i < waitingTimes.length; i++){
            sum += waitingTimes[i];
            timeAvg = sum / waitingTimes.length;
            serial = serialNumber - waitingTimes.length - 1;
            result = Math.round(timeAvg) * serial;
        }
    }
    else{
        result = "Invalid Input";
    }
    return result;
 }

 