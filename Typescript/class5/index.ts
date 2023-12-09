import inquirer from "inquirer"
import { type } from "os";
const answers= await inquirer.prompt([{
    name: "fruits",
    type:"list",
    mesage: "What is your age?",
    choices: ['apple', 'banana','mango']
}])

/*Objects*/ 
let teacher = {
    name: "Zeeshan",
    experience: "10"
}
console.log(teacher.name);
console.log(teacher["name"]);

// Object Declaration
// first method
let student : {
    name: string,
    age: number
}={
    name: "Naveed",
    age: 18
}
// Object Declaration
// second method
interface university{
    id:string,
    courses:number,
    department:number
}
let university:university={
    id:"air01",
    courses:10,
    department:15
}
console.log(university.courses);
// Object Declaration
// second method
type Manager = {
    name: string,
    age: number
} 
let manager: Manager={
    name:"naved",
    age: 32
}

// Structural Typing
interface Ball{
    diameter:number;
}
let cricket_ball:Ball={
    diameter:10
}
interface Sphere{
    diameter:number,
    color:string
}
let sphere:Sphere={
    diameter:10,
    color: "eee"
}
sphere=cricket_ball; //cricket ball does not contain every property of sphere object
cricket_ball=sphere; //sphere contain all properties of cricket_ball


// Nested type
type Author={
    firstName:string,
    lastName:string
}
type Book={
    author:Author,
    publishedDate:string
}
let book: Book={
    author:{
        firstName:"Naveed",
        lastName:"Azam"
    },
    publishedDate:"29 May",
}
console.log(book.author.firstName);