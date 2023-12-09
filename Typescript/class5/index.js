import inquirer from "inquirer";
const answers = await inquirer.prompt([{
        name: "fruits",
        type: "expand",
        mesage: "What is your age?",
        choices: ['apple', 'banana', 'mango']
    }]);
