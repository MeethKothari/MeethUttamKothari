function generateOdd (input){
    let result = [];
    for (let i = 0; i<input; i++){
        result.push(i * 2 + 1);
    }
    return result;
}




// Test cases

const result1 = generateOdd(2);
const result2 = generateOdd(3);
const result3 = generateOdd(5);
const result4 = generateOdd(10);

console.log(result1); 
console.log(result2); 
console.log(result3);
console.log(result4);