

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



const ans = waitingTime([7, 8, 3, 4, 5], "9");
console.log(ans);