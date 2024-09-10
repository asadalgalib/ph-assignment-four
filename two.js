


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


const ans = sendNotification("asadalg.alibgmail.com");
console.log(ans);
