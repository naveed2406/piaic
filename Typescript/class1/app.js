/*
//Question 2
console.log("\nQ2: Personal Message\n");
let personName: string = "naVeed";
let output:string=`hello ${personName}, would you like to learn some Python today?`;
console.log(output);

//Question 3
console.log("\nQ3:Name Cases\n");
//Uppercase
console.log(personName.toUpperCase());
//Uppercase
console.log(personName.toLowerCase());
//Uppercase
console.log(personName[0].toUpperCase() + personName.slice(1).toLowerCase());

//Question
console.log("\nQ4:Famous Quote\n");
console.log('Albert Einstein once said, “A person who never made a mistake never tried anything new.”');

//Question 5
console.log("\nQ5Famous Quote 2:\n");
let famous_person:string='Albert Einstein';
let message=`${famous_person} once said, “A person who never made a mistake never tried anything new.”`;
console.log(message);

//Question 6
console.log("\nQ6:Stripping Names\n")
let person:string="   \tNaveed is a good boy   \t\n";
console.log(person);
console.log(person.trim());  //Trim remove extra space from both end of string

//Question 7 and 8
console.log("\nQ7 and Q8 Number Eight\n")
console.log(5+3);
// Subtraction
console.log(10-2);
// Multiplication
console.log(4*2);
// Division
console.log(16/2);


//Question 9
console.log("\nQ9: Favorite Number\n")
let favoriteNumber: number = 24;
message= `My favorite number is ${favoriteNumber}.`;
console.log(message);

//Question 10  //I already comment Question Number with each solution

//Question 11
console.log("\nQ11:Names\n")
let friends:string[]= ["Waqas", "Zaheer", "Sufyan", "Naseem", "Asim"];
for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]);
}

//Question 12
console.log("\nQ12:Greetings\n")
for (let i = 0; i < friends.length; i++) {
    message = `Hello, ${friends[i]}! Have a great day.`;
    console.log(message);
}

//Question 13
console.log("\nQ13: Your Own Array\n")
let favoriteMotorcycles: string[] = ["Honda", "Yamaha", "Suzuki"];
for (let i=0; i < favoriteMotorcycles.length; i++) {
    console.log(`I like to use ${favoriteMotorcycles[i]} motorcycle.`);
}

//Question 14 and 15,16 and 17
console.log("\nQ14 to Q17: Guest List,Changing Guest List,More Guests,Shrinking Guest List\n")
let guestList: string[] = ["Waqas", "Zaheer", "Sufyan"];
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, you are  invited to dinner. Please join us.`);
}

console.log("\nNew List\n")
let cancelGuest: string="Sufyan";
let indexOfCanceledGuest = guestList.indexOf(cancelGuest);
guestList.splice(indexOfCanceledGuest);
let newGuest: string="Naseem";
guestList.push(newGuest);
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, you are  invited to dinner. Please join us.`);
}

let newGuests: string[] = ["Umar", "Asim", "Mazber"];
guestList.unshift(newGuests[0]);
guestList.push(newGuests[2]);
guestList.splice(2,0,newGuests[1]);
console.log("\nGreat news! We've found a bigger dinner table.\n")
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, you are  invited to dinner. Please join us.`);
}

console.log("\nI can invite only two people for dinner.\n");
while (guestList.length > 2) {
    const removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest}, I can’t invite you to dinner.`);
}
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, you are  still invited to dinner.`);
}
while (guestList.length > 0) {
    guestList.pop();
}
if (guestList.length>0)
    console.log("Still have guest in the list")
else
    console.log("List is clean");

//Question 18
console.log("\nQ18. List of five places in the world\n");
let favoritePlaces: string[] = ["United Kingdom", "America", "Australia", "Canada", "Saudia Arabia"];
console.log(`Orignal order of places are ${favoritePlaces.join(', ')}`)
console.log(`Orignal order of places are  ${[...favoritePlaces].sort().join(', ')}`)
console.log(`Orignal order of place is still ${favoritePlaces.join(', ')}`)
console.log(`Orignal order of place is ${[...favoritePlaces].sort().reverse().join(', ')}`)
console.log(`Orignal order of place is still ${favoritePlaces.join(', ')}`)
favoritePlaces.reverse();
console.log(`Orignal order of place is reverse ${favoritePlaces.join(', ')}`);
favoritePlaces.reverse();
console.log(`Reverse array to obtain Orignal order ${favoritePlaces.join(', ')}`);
favoritePlaces.sort();
console.log(`Sorted places ${favoritePlaces.join(', ')}`);
favoritePlaces.sort().reverse();
console.log(`Reverse sorted places ${favoritePlaces.join(', ')}`);

//Question 19
console.log("\nQ19. Total friends inviting to a dinner\n")
friends= ["Waqas", "Zaheer", "Sufyan", "Naseem", "Asim"];
console.log(`Total friends inviting to a dinner are ${friends.length}`);

//Question 20
console.log("\nQ20: List of Famous Rivers:\n");
let lists: Array<Array<string>> = [["Jahelum","Chenab","satluj","Sindh","Ravi"],
                    ["Pakistan", "India", "Indonesia", "China", "SriLanka"],
                    ["Rawalpindi", "Karachi", "Taxila", "Multan", "Lahore"]];

//Question 21
console.log("\nQ21: Information about Countries:\n");
let countriesInfo: { name: string, capital: string, population: number }[] = [
    {
        name: "United States",
        capital: "Washington, D.C.",
        population: 331002651,
    },
    {
        name: "Canada",
        capital: "Ottawa",
        population: 37742154,
    },
    {
        name: "United Kingdom",
        capital: "London",
        population: 67886011,
    },
    {
        name: "Australia",
        capital: "Canberra",
        population: 25499884,
    },
];
for (let country of countriesInfo) {
    console.log(`Country: ${country.name}`);
    console.log(`Capital: ${country.capital}`);
    console.log(`Population: ${country.population}`);
}

//Question 22
console.log("\nWrong index  and Correct index access\n")
let numbers: number[] = [1, 2, 3, 4, 5];
let index = 10;
console.log(numbers[index]);
index = 2;
console.log(`Corrected access: ${numbers[index]}`);

//Question 23
console.log('\nQ23: Evaluate True or False\n');
let city1 = 'Karachi';
let city2 = 'Lahore';
let city3 = 'Rawalpindi';
let city4 = 'Multan';
let city5 = 'Noshera';
console.log(city1 == 'Karachi'? "I predict True.":"Your prediction is wrong");
console.log(city2 == 'Lahore'? "I predict True.":"Your prediction is wrong");
console.log(city3 == 'Rawalpindi'? "I predict True.":"Your prediction is wrong");
console.log(city4 == 'Noshera'? "I predict True.":"Your prediction is wrong");
console.log(city4 == 'Multan'? "I predict True.":"Your prediction is wrong");

//Question 24
console.log("\nQ24: Multiple equality and inequality\n");
let string1: string = "Karachi";
let string2: string = "Pakistan";
let string3: string = "pakistan";
console.log("Equality Test: " + (string1 == string2)); // False
console.log("Inequality Test: " + (string1 != string2)); // True
console.log("Equality Test: " + (string2 == string3)); // False
// Tests using the lowercase function
let originalString: string = "Hello World";
let lowerCaseString: string = originalString.toLowerCase();
console.log("Lowercase Test: " + (lowerCaseString == "hello world")); // True
// Numerical tests
let x: number = 5;
let y: number = 10;
console.log("Equality Test: " + (x == y)); // False
console.log("Inequality Test: " + (x != y)); // True
console.log("Greater Than Test: " + (x > y)); // False
console.log("Less Than Test: " + (x < y)); // True
console.log("Greater Than or Equal To Test: " + (x >= y)); // False
console.log("Less Than or Equal To Test: " + (x <= y)); // True

// Tests using "and" and "or" operators
let isSunny: boolean = true;
let isWarm: boolean = true;

console.log("AND Test: " + (isSunny && !isWarm)); // False
console.log("OR Test: " + (isSunny || isWarm)); // True

// Test whether an item is in an array
let fruits: string[] = ["apple", "banana", "cherry", "date"];
let fruitToFind: string = "banana";
let fruitNottoFind="Mango";
for(let i=0;i<fruits.length;i++){
    if (fruitToFind==fruits[i]){
        console.log("Fruit found!");
    }
    if (fruitNottoFind!=fruits[i]){
        if(i==fruits.length-1)
            console.log("Fruit Not found!");
    }
}


//Question 25
console.log("\nQ25: Alien Colors #1\n");
let alien_color: string ="green";
if(alien_color=="green")
    console.log("You just earned 5 points");
alien_color ="red";
if(alien_color=="green")
    console.log("You just earned 5 points");

//Question 26
console.log("\nQ25: Alien Colors #2\n");
alien_color ="green";
if(alien_color=="green")
    console.log("You  just earned 5 points for shooting the alien.");
alien_color ="red";
if(alien_color=="green")
    console.log("You  just earned 5 points for shooting the alien.");
else
    console.log("You just earned 5 points");

//Question 27
console.log("\nQ27: Alien Colors #3\n");
alien_color ="red";
if(alien_color=="green")
    console.log("You earned 5 points");
else if(alien_color=="red")
    console.log("You earned 15 points");
else if(alien_color=="yellow")
    console.log("You earned 10 points");

//Question 28
console.log("\nQ28: Stages of Life\n");
var age: number = 2;
if(age<2)
    console.log("the person is a baby.");
else if(age>=2 && age<4)
    console.log(" the person is a toddler.");
else if(age>=4 && age<13)
    console.log("that the person is a kid.");
else if(age>=13 && age<20)
    console.log("the person is a teenager.");
else if(age>=20 && age<65)
    console.log("the person is an adult.");
else if(age>=65)
    console.log("the person is an older.");
else
    console.log("Invalid Data");

//Question 29
console.log("\nQ29: Favorite Fruit:\n");
let favoriteFruits: string[] = ["apple", "banana", "mango"];
for(let i=0;i<favoriteFruits.length;i++){
    if (favoriteFruits[i]=="apple")
        console.log("You really like apples!");
    if (favoriteFruits[i]=="banana")
        console.log("You really like banana!");
    if (favoriteFruits[i]=="mango")
        console.log("You really like mango!");
    if (favoriteFruits[i]=="Stawberry")
        console.log("You really like Stawberry!");
    if (favoriteFruits[i]=="Grapes")
        console.log("You really like Grapes!");
}

//Question 30
console.log("\nQ30: Hello Admin:\n");
let usernames: string[] = ["admin", "Naseem", "Waqas", "Sufyan", "Zaheer"];
for (let username of usernames) {
    if (username == "admin") {
        console.log(`Hello ${username}, would you like to see a status report?`);
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}

//Question 31
console.log("\nQ31: No Users:\n");
if(usernames.length==0){
    console.log("We need to find some users!");
}
else{
    usernames.length=0;
    console.log(`All users removed successfully ${usernames}`);
}

//Question 32
console.log("\nQ32: Checking Username:\n");
let current_users: string[]= ["admin", "Naseem", "Waqas", "Sufyan", "Zaheer"];
let new_users: string[]= ["admin1", "naseem", "Waqas1", "Sufyan1", "Zaheer1"];
for (let new_user of new_users) {
    let isUsernameTaken = current_users.some(
        (current_user) => current_user.toLowerCase() == new_user.toLowerCase()
    );
    
    if (isUsernameTaken) {
        console.log(`The username '${new_user}' is not available. Please enter a new username.`);
    } else {
        console.log(`The username '${new_user}' is available.`);
    }
}

//Question 33
console.log("\nQ33: Ordinal Number\n");
let numbers_list: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of numbers_list) {
    let ordinalEnding: string;
    if (number === 1)
        ordinalEnding = "st";
    else if (number === 2)
        ordinalEnding = "nd";
    else if (number === 3)
        ordinalEnding = "rd";
    else
        ordinalEnding = "th";
    console.log(`${number}${ordinalEnding}`);
}

//Question 34
console.log("\nQ34: Pizzas\n");
let favoritePizzas: string[] = ["Pepperoni", "Margherita", "Hawaiian"];
for (let pizza of favoritePizzas) {
    console.log(`I like ${pizza} pizza.`);
}
console.log("I really love pizza!");

//Question 35
console.log("\nQ35: Animals:\n");
let animals: string[] = ["Dog", "Cat", "Rabbit"];
for (let animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}
console.log("Any of these animals would make a great pet!");

//Question 36
console.log("\nQ36: Tshirt:\n");
make_Shirt("Large", "Hello, World! TypeScript T-shirt");
function make_Shirt(size: string, message: string): void {
    console.log(`Size: ${size}`);
    console.log(`Message: ${message}`);
}

//Question 37
console.log("\nQ37: Large Shirts:\n");
console.log(make_Shirt1());
console.log(make_Shirt1("Medium"));
console.log(make_Shirt1("Small", "This is me who can touch the sky"));
function make_Shirt1(size: string = "Large", message: string = "I love TypeScript"): string {
    return `Size: ${size}, Message: ${message}`;
}

//Question 38
console.log("\nQ38: Cities:\n");
function describe_City(city: string, country: string = "Default Country"): void {
    console.log(`${city} is in ${country}.`);
}
describe_City("New York");
describe_City("Karachi", "Pakistan");
describe_City("Paris", "France");

//Question 39
console.log("\nQ39: City Names:\n");
function city_Country(city: string, country: string): string {
    return `${city}, ${country}`;
}
console.log(city_Country("Lahore", "Pakistan"));
console.log(city_Country("Paris", "France"));
console.log(city_Country("New York", "USA"));


//Question 40
console.log("\nQ40: Album:\n");
function make_Album(artist: string, title: string, tracks?: number) {
    let album: { artist: string; title: string; tracks?: number } = {artist,title};
    if (tracks != undefined) {
        album.tracks = tracks;
    }

    return album;
}
const album1 = make_Album("Artist1", "Album Title 1", 10);
const album2 = make_Album("Artist2", "Album Title 2");
const album3 = make_Album("Artist3", "Album Title 3", 12);
console.log(album1);
console.log(album2);
console.log(album3);

//Question 41
console.log("\nQ41: Magicians:\n");
let magician_Names: string[] = ["Alvi", "Nawaz", "Bilawal", "Mulana"];
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}
show_magicians(magician_Names);

//Question 42
console.log("\nQ42: Great Magicians:\n");
function make_great(magicians: string[]): string[] {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = 'the Great '+ magicians[i];
    }
    return(magicians);
}
console.log(make_great(magician_Names)); // Get mafician name from Q41

//Question 43
console.log("\nQ43: Unchanged Magicians:\n");
let great_magacians:string[] =make_great([...magician_Names]); //Fnction already define in Q42
console.log("Original Magicians:");
show_magicians(magician_Names);  //Function already defined in Q41
console.log("Great Magicians:");
show_magicians(great_magacians);

//Question 44
console.log("\nQ44: Sandwitches:\n");
function orderSandwich(...items: string[]): void {  //rest parameter accept many aruguments in form of array
    console.log("Sandwich Order Summary:");
    if (items.length == 0) {
        console.log("No items selected.");
    }
    else {
        console.log("Sandwich includes:");
        for (let item of items) {
            console.log(`- ${item}`);
        }
    }
    console.log("Enjoy your sandwich!\n");
}
orderSandwich("Bread", "Turkey", "Lettuce", "Tomato");
orderSandwich("Bread", "Cheese", "Ham");
orderSandwich("Cheese");
orderSandwich();


//Question 45
console.log("\nQ45: Cars:\n");
function createCar(manufacturer: string, modelName: string, options: Record<string, any>): object {
    const carInfo: Record<string, any> = {
        manufacturer,
        modelName,
        ...options
    };
    return carInfo;
}


// Call the function with required information and additional properties

const car = createCar("Toyota", "Camry", {
    color: "Silver",
    year: 2022,
    features: ["Navigation", "Sunroof"]
});
*/
/*Class 4*/
import inquirer from "inquirer";
let answers = await inquirer.prompt([{
        name: "age",
        type: "number",
        message: "Enter your age:"
    }
]);
console.log("InshAllah, in " + (60 - answers.age) + " years you will be 60 years old");
/*Simple Function*/
function sum1(x, y) {
    return x + y;
}
console.log(sum1(3, 3));
/*Arrow function
let variable_name=(param :string)=>{

}
*/
let sum = (x, y) => {
    return x + y;
};
console.log(sum(3, 5));
