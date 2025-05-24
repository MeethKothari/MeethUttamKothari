function generateSeries (input){
    let result = [];

    if (input % 2 != 0){
        for (let i=0; i<input; i++){
            result.push(i * 2 + 1);
        }
    }
    else {
        // Adjust input to generate odd series
        for (let i=0; i<input - 1; i++){
            result.push(i * 2 + 1);
        }
    }
    return result;
}

// Test cases 

const series1 = generateSeries(1);
const series2 = generateSeries(2);
const series3 = generateSeries(3);
const series4 = generateSeries(4);
const series5 = generateSeries(5);
const series6 = generateSeries(6);

console.log(series1);
console.log(series2);
console.log(series3);
console.log(series4);
console.log(series5);
console.log(series6);
