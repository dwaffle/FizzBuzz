function FizzBuzz(
    startNumber: number,
    endNumber: number,
    fizzNumber: number,
    buzzNumber: number
) {
    for (let i = startNumber; i <= endNumber; i++) {
        let fizzBuzzOutput = "";
        if (i % fizzNumber == 0) {
            fizzBuzzOutput = "Fizz";
        }
        if (i % buzzNumber == 0) {
            fizzBuzzOutput += "Buzz";
        }
        if (i % fizzNumber != 0 && i % buzzNumber != 0) {
            console.log(i);
        } else {
            console.log(fizzBuzzOutput);
        }
    }
}

FizzBuzz(1, 20, 3, 5);