class Calculator {
    constructor(a, b, operation) {
        this.a = a;
        this.b = b;
        this.operation = operation;
    }


    calculate() {

        if (this.operation === "addition") {
            return this.a + this.b;
        }
        else if (this.operation === "subtraction") {
            return this.a - this.b
        }
        else if (this.operation === "multiplication") {
            return this.a * this.b
        }
        else if (this.operation === "division") {
            return this.a / this.b;
        }

    }
}


// Test cases

const addition = new Calculator(2, 2, "addition");
console.log(addition.calculate());

const subtraction = new Calculator(2, 2, "subtraction");
console.log(subtraction.calculate());

const multiplication = new Calculator(2, 2, "multiplication");
console.log(multiplication.calculate());

const division = new Calculator(2, 2, "division");
console.log(division.calculate());