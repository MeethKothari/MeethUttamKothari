function generateMultiples(input, range){
    let result = {};

    for (let i=1; i<=range; i++){
        let count = 0;
        for (let j=0; j<input.length; j++){
            let number = input[j];
            if (number % i === 0){
                count++;
            }
        }
        result[i] = count;
    }
    return result;
}




// Test cases

let input1 = [1,2,8,9,12,46,76,82,15,20,30];
let range1 = 9;
const multiples1 = generateMultiples(input1, range1);
console.log(multiples1); 



let input2 = [1,2,8,9,12,46,76,82,15,20,30];
let range2 = 5;
const multiples2 = generateMultiples(input2, range2);
console.log(multiples2); 

