


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


const obj = { name: "Rajib", testScore: 40,  schoolGrade: 25, isFFamily : false };
const ans = calculateFinalScore(obj)
console.log(ans);