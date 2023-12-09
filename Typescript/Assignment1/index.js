import inquirer from "inquirer";
/**************************************************************************/
/*                              Question No 2                             */
/**************************************************************************/
/*
let fruits: string[][] = [["Apple", "Banana", "Orange"],["250","150","100"]];
let vegetables: string[][] = [["Carrot", "Raddish", "Potato"],["250","150","100"]];
let groceries: string[][] = [["Rice", "Pasta", "Milk"],["250","150","100"]];
// Declare global variable
let bill:number=0;
let cart:string='';
let entry=1;
while(entry!=0){
    let answer = await inquirer.prompt([{
            name: "choice",
            type: "number",
            message: "What you want to buy? Press 1 for fruits, 2 for vegetables and 3 for groceries",
        }
    ]);

    if(answer.choice==1)
        await buyingType("fruits",fruits);
    else if(answer.choice==2)
        await buyingType("vegetables",vegetables);
    else if(answer.choice==3)
        await buyingType("groceries",groceries);
    else
        console.log("Invalid Entry");
    let continue_cart = await inquirer.prompt([{
        name: "choice",
        type: "number",
        message: "Press any key to continue shopping OR 0 to exit"
    }]);
    if(continue_cart.choice==0){
        entry=0;
        console.log("\n"+cart);
        console.log("Your total bill is "+ bill + "\nThankyou for shopping");
        discount(bill);
        paymentMethods(bill);
    }
}


//Function which receive a choice value and array according to that choice
async function buyingType(getType:string,getValues:string[][]){
    console.log(`We have following ${getType}:`);
    for(let i=0;i<getValues[0].length;i++){
        console.log(i+1+":" + getValues[0][i] + " price: " + getValues[1][i] + "/kg");
    }
    let answers = await inquirer.prompt([{
        name: "choice",
        type: "number",
        message: "Enter serial number which you want to buy"},{
        name: "kgs",
        type: "number",
        message: "Enter number of kgs which you want to buy"
        }
    ]);
    cart= cart+ answers.kgs+ " kgs " + getValues[0][answers.choice-1]+ " added to the cart\n";
    bill= bill + (answers.kgs) * parseInt(getValues[1][answers.choice-1]);
    console.log("You total bill is "+bill);
}

//Function which apply discount if bill is greator or equal to specific value
function discount(bill:number){
    //Apply 10% discount on fruits if bill>=1000/
    if(bill>=1000){
        console.log("Congratulations, you avail 10% discount because your amount of buying is greator than 1000");
        bill= bill-(bill*.1);
        console.log(`You total bill after 10% discount is ${bill}`);
    }
    //Apply 15% discount on vegetables if bill >=1500
    else if(bill>=1500){
        console.log("Congratulations, you avail 10% discount because your amount of buying is greator than 1500");
        bill= bill-(bill*.15);
        console.log(`You total bill after 10% discount is ${bill}`);
    }
    //Apply 5% discount on groceries if bill >=2000
    else if(bill>=2000){
        console.log("Congratulations, you avail 20% discount because your amount of buying is greator than 2000");
        bill= bill-(bill*.2);
        console.log(`You total bill after 20% discount is ${bill}`);
    }
}

//Payment Method
async function paymentMethods(bill:number){
    let paymentMethodsAvailable:string[]=["Easy Paisa","Jazz Cash", "Bank Account"]
    console.log("Which Payment Method you want to choose for payment");
    for(let i=0;i<paymentMethodsAvailable.length;i++){
        console.log(i+1 + ": "+ paymentMethodsAvailable[i]);
    }
    let answers = await inquirer.prompt([{
        name: "choice",
        type: "number",
        message: "Enter serial number of payment method through which you want pay:"
        }
    ]);
    if(answers.choice!=null){
        let answers = await inquirer.prompt([{
            name: "accountNumber",
            type: "number",
            message: "Enter Account Number:"
            },
            {
            name: "otp",
            type: "number",
            message: "Enter OTP:"
            }
        ]);
        if(answers.accountNumber!=null && answers.otp!=null)
            console.log("Transaction successfull");
    }
}
*/
/**************************************************************************/
/*                              Question No 2                             */
/**************************************************************************/
let answers = await inquirer.prompt([{
        name: "num1",
        type: "number",
        message: "Enter first number"
    },
    {
        name: "num2",
        type: "number",
        message: "Enter second number"
    }
]);
//Function definition started from here
// Sum Function
function add(num1, num2) {
    return (num1 + num2);
}
// Even or Odd Function
function even_odd(num1) {
    if (num1 % 2 == 0)
        return "even";
    else
        return "odd";
}
// Calculate Area Function
function area(length, width) {
    return (length * width);
}
//String Reversal Function
function reverseString(str) {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse = reverse + str[i];
    }
    return (reverse);
}
//Temperature Conversion Function
function forenheight(num1) {
    let f = (9 / 5) * num1 + 32;
    return f;
}
//Function calls statred from here
// Scenario 1: Sum numbers
console.log("Sum = " + add(answers.num1, answers.num2));
// Scenario 2: Check Even or Odd
console.log("Even/Odd  ist number is  " + even_odd(answers.num1));
//Scenario 3: Calculate Area
console.log("Area= " + area(answers.num1, answers.num2));
//Scenario 4: String Reversal
console.log("Reverse String= " + reverseString("Hello"));
//Scenario 5: Temperature Conversion
console.log("temperature-conversion " + forenheight(answers.num1));
//********** TASK 3 ****************
let myArray = [2, 4, 6, 8, 10];
// push: Add new elements to the end of the array
myArray.push(100);
console.log("After push:", myArray); // Output: [2, 4, 6, 8, 10,]
// pop: Remove the last element from the array
let popN = myArray.pop();
console.log("After pop:", myArray); // Output: [2, 4, 6, 8, 10,100]
console.log("Popped Element:", popN); // Output: 100
// shift: Remove the first element from the array
let shiftN = myArray.shift();
console.log("After shift:", myArray); // Output:[4, 6, 8, 10,]
console.log("Shifted Element:", shiftN); // Output: 2
// unshift: Add new elements to the beginning of the array
myArray.unshift(500, 700);
console.log("After unshift:", myArray); // Output: [ 500, 700, 4, 6, 8, 10 ]
//pop method using string
let str = ['waqas', 'usman', 'ali', 'haider'];
let popS = str.pop();
console.log("after pop elements:", str); // output: [waqas,usman,ali]
console.log("pop Element:", popS); // Output: haider
// shift: Remove the first element from the  string array
let shiftS = str.shift();
console.log("After shift:", str); // // output: [usman,ali]
console.log("Shifted Element:", shiftS); // Output: waqas
let unshiftS = str.unshift('naveed', 'zia', 'wania');
console.log("after unshift method :", str);
//TASK 3 Scenario 2 - Subarray Creation:
// Initialize an array with some initial elements
let originalSubarray = [12, 24, 36, 48, 60, 72, 84];
// splice: Create a subarray by removing elements from the originalSubarray 
let remElement = originalSubarray.splice(2, 3); // Remove 3 elements starting from index 2
console.log("After splice:", originalSubarray); // Output: [12,24,72,84]
console.log("Removed Elements:", remElement); // Output: [36, 48, 60]
// slice: Create a subarray without modifying the original array
let subArray = originalSubarray.slice(1, 3); // Create a subarray from index 1 to 2 (3 is exclusive)
console.log("Original subArray:", originalSubarray); // Output:  [ 12, 24, 72, 84 ]
console.log("Subarray using slice:", subArray); // Output: [24, 72]
