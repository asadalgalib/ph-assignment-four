

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
            }
            else{
                result = false;
            }
        }
        return result;
    }
  
}


const ans = checkDigitsInName("suman");
console.log(ans);