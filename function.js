function calculateArea(length, width){
    // return (length * width);
    console.log (length * width);
}
calculateArea(2, 3)


let globalVar = 5;
function spaceExploration(){
    let localVar = 3;
    console.log ("Global variable is: ", globalVar);
    console.log ("Local variable is: ", localVar);
}
spaceExploration();
// Global variables are accessible everywhere even inside a function
// Local variables are only acccessible within the function where it is declared


function counter(){
    function newCounter(){
        let count = 0;
        count++;
        console.log(count);
    }
    newCounter();
    newCounter();
}
counter();



function calculate(num1, num2){
    let sum = num1 + num2;
    let difference = num1 - num2;
    let product = num1 * num2;
    let quotient = num1 % num2;
    console.log("Sum is: ", sum);
    console.log("Difference is: ", difference);
    console.log("Product is: ", product);
    console.log("Quotient: ", quotient);
}
calculate(10, 5)
