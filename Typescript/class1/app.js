"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
//Question 2
console.log("\nQ2: Personal Message\n");
var personName = "naVeed";
var output = "hello ".concat(personName, ", would you like to learn some Python today?");
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
var famous_person = 'Albert Einstein';
var message = "".concat(famous_person, " once said, \u201CA person who never made a mistake never tried anything new.\u201D");
console.log(message);
//Question 6
console.log("\nQ6:Stripping Names\n");
var person = "   \tNaveed is a good boy   \t\n";
console.log(person);
console.log(person.trim()); //Trim remove extra space from both end of string
//Question 7 and 8
console.log("\nQ7 and Q8 Number Eight\n");
console.log(5 + 3);
// Subtraction
console.log(10 - 2);
// Multiplication
console.log(4 * 2);
// Division
console.log(16 / 2);
//Question 9
console.log("\nQ9: Favorite Number\n");
var favoriteNumber = 24;
message = "My favorite number is ".concat(favoriteNumber, ".");
console.log(message);
//Question 10  //I already comment Question Number with each solution
//Question 11
console.log("\nQ11:Names\n");
var friends = ["Waqas", "Zaheer", "Sufyan", "Naseem", "Asim"];
for (var i = 0; i < friends.length; i++) {
    console.log(friends[i]);
}
//Question 12
console.log("\nQ12:Greetings\n");
for (var i = 0; i < friends.length; i++) {
    message = "Hello, ".concat(friends[i], "! Have a great day.");
    console.log(message);
}
//Question 13
console.log("\nQ13: Your Own Array\n");
var favoriteMotorcycles = ["Honda", "Yamaha", "Suzuki"];
for (var i = 0; i < favoriteMotorcycles.length; i++) {
    console.log("I like to use ".concat(favoriteMotorcycles[i], " motorcycle."));
}
//Question 14 and 15,16 and 17
console.log("\nQ14 to Q17: Guest List,Changing Guest List,More Guests,Shrinking Guest List\n");
var guestList = ["Waqas", "Zaheer", "Sufyan"];
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are  invited to dinner. Please join us."));
}
console.log("\nNew List\n");
var cancelGuest = "Sufyan";
var indexOfCanceledGuest = guestList.indexOf(cancelGuest);
guestList.splice(indexOfCanceledGuest);
var newGuest = "Naseem";
guestList.push(newGuest);
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are  invited to dinner. Please join us."));
}
var newGuests = ["Umar", "Asim", "Mazber"];
guestList.unshift(newGuests[0]);
guestList.push(newGuests[2]);
guestList.splice(2, 0, newGuests[1]);
console.log("\nGreat news! We've found a bigger dinner table.\n");
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are  invited to dinner. Please join us."));
}
console.log("\nI can invite only two people for dinner.\n");
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can\u2019t invite you to dinner."));
}
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are  still invited to dinner."));
}
while (guestList.length > 0) {
    guestList.pop();
}
if (guestList.length > 0)
    console.log("Still have guest in the list");
else
    console.log("List is clean");
//Question 18
console.log("\nQ18. List of five places in the world\n");
var favoritePlaces = ["United Kingdom", "America", "Australia", "Canada", "Saudia Arabia"];
console.log("Orignal order of places are ".concat(favoritePlaces.join(', ')));
console.log("Orignal order of places are  ".concat(__spreadArray([], favoritePlaces, true).sort().join(', ')));
console.log("Orignal order of place is still ".concat(favoritePlaces.join(', ')));
console.log("Orignal order of place is ".concat(__spreadArray([], favoritePlaces, true).sort().reverse().join(', ')));
console.log("Orignal order of place is still ".concat(favoritePlaces.join(', ')));
favoritePlaces.reverse();
console.log("Orignal order of place is reverse ".concat(favoritePlaces.join(', ')));
favoritePlaces.reverse();
console.log("Reverse array to obtain Orignal order ".concat(favoritePlaces.join(', ')));
favoritePlaces.sort();
console.log("Sorted places ".concat(favoritePlaces.join(', ')));
favoritePlaces.sort().reverse();
console.log("Reverse sorted places ".concat(favoritePlaces.join(', ')));
//Question 19
console.log("\nQ19. Total friends inviting to a dinner\n");
friends = ["Waqas", "Zaheer", "Sufyan", "Naseem", "Asim"];
console.log("Total friends inviting to a dinner are ".concat(friends.length));
//Question 20
console.log("\nQ20: List of Famous Rivers:\n");
var rivers = ["Jahelum", "Chenab", "satluj", "Sindh", "Ravi"];
console.log("".concat(rivers.join(', ')));
//Question 21
console.log("\nQ21: Information about Countries:\n");
var countriesInfo = [
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
for (var _i = 0, countriesInfo_1 = countriesInfo; _i < countriesInfo_1.length; _i++) {
    var country = countriesInfo_1[_i];
    console.log("Country: ".concat(country.name));
    console.log("Capital: ".concat(country.capital));
    console.log("Population: ".concat(country.population));
}
//Question 22
console.log("\nWrong index  and Correct index access\n");
var numbers = [1, 2, 3, 4, 5];
var index = 10;
console.log(numbers[index]);
index = 2;
console.log("Corrected access: ".concat(numbers[index]));
//Question 23
console.log('\nQ23: Evaluate True or False\n');
var city1 = 'Karachi';
var city2 = 'Lahore';
var city3 = 'Rawalpindi';
var city4 = 'Multan';
var city5 = 'Noshera';
console.log("city1 == 'Karachi'? I predict True.");
console.log(city1 == 'Karachi');
console.log("city2 == 'Lahore'? I predict True.");
console.log(city2 == 'Lahore');
console.log("city3 == 'Rawalpindi'? I predict True.");
console.log(city3 == 'Rawalpindi');
console.log("city4 == 'Multan'? I predict True.");
console.log(city4 == 'Multan');
console.log("city5 == 'Noshera'? I predict True.");
console.log(city5 == 'Noshera');
console.log("city1 == 'Lahore'? I predict True.");
console.log(city1 == 'Lahore');
console.log("city2 == 'Karachi'? I predict True.");
console.log(city2 == 'Karachi');
console.log("city3 == 'Peshawar'? I predict True.");
console.log(city3 == 'Peshawar');
console.log("city4 == 'Noshera'? I predict True.");
console.log(city4 == 'Noshera');
console.log("city5 == 'Multan'? I predict True.");
console.log(city5 == 'Multan');
//Question 24
console.log("\nQ24: Multiple equality and inequality\n");
var string1 = "Karachi";
var string2 = "Pakistan";
var string3 = "pakistan";
console.log("Equality Test: " + (string1 == string2)); // False
console.log("Inequality Test: " + (string1 != string2)); // True
console.log("Equality Test: " + (string2 == string3)); // False
// Tests using the lowercase function
var originalString = "Hello World";
var lowerCaseString = originalString.toLowerCase();
console.log("Lowercase Test: " + (lowerCaseString == "hello world")); // True
// Numerical tests
var x = 5;
var y = 10;
console.log("Equality Test: " + (x == y)); // False
console.log("Inequality Test: " + (x != y)); // True
console.log("Greater Than Test: " + (x > y)); // False
console.log("Less Than Test: " + (x < y)); // True
console.log("Greater Than or Equal To Test: " + (x >= y)); // False
console.log("Less Than or Equal To Test: " + (x <= y)); // True
// Tests using "and" and "or" operators
var isSunny = true;
var isWarm = true;
console.log("AND Test: " + (isSunny && !isWarm)); // False
console.log("OR Test: " + (isSunny || isWarm)); // True
// Test whether an item is in an array
var fruits = ["apple", "banana", "cherry", "date"];
var fruitToFind = "banana";
var fruitNottoFind = "Mango";
for (var i = 0; i < fruits.length; i++) {
    if (fruitToFind == fruits[i]) {
        console.log("Fruit found!");
    }
    if (fruitNottoFind != fruits[i]) {
        if (i == fruits.length - 1)
            console.log("Fruit Not found!");
    }
}
//Question 25
console.log("\nQ25: Alien Colors #1\n");
var alien_color = "green";
if (alien_color == "green")
    console.log("You just earned 5 points");
alien_color = "red";
if (alien_color == "green")
    console.log("You just earned 5 points");
//Question 26
console.log("\nQ25: Alien Colors #2\n");
alien_color = "green";
if (alien_color == "green")
    console.log("You  just earned 5 points for shooting the alien.");
alien_color = "red";
if (alien_color == "green")
    console.log("You  just earned 5 points for shooting the alien.");
else
    console.log("You just earned 5 points");
//Question 27
console.log("\nQ27: Alien Colors #3\n");
alien_color = "red";
if (alien_color == "green")
    console.log("You earned 5 points");
else if (alien_color == "red")
    console.log("You earned 15 points");
else if (alien_color == "yellow")
    console.log("You earned 10 points");
//Question 28
console.log("\nQ28: Stages of Life\n");
var age = 2;
if (age < 2)
    console.log("the person is a baby.");
else if (age >= 2 && age < 4)
    console.log(" the person is a toddler.");
else if (age >= 4 && age < 13)
    console.log("that the person is a kid.");
else if (age >= 13 && age < 20)
    console.log("the person is a teenager.");
else if (age >= 20 && age < 65)
    console.log("the person is an adult.");
else if (age >= 65)
    console.log("the person is an older.");
else
    console.log("Invalid Data");
//Question 29
console.log("\nQ29: Favorite Fruit:\n");
var favoriteFruits = ["apple", "banana", "mango"];
for (var i = 0; i < favoriteFruits.length; i++) {
    if (favoriteFruits[i] == "apple")
        console.log("You really like apples!");
    if (favoriteFruits[i] == "banana")
        console.log("You really like banana!");
    if (favoriteFruits[i] == "mango")
        console.log("You really like mango!");
    if (favoriteFruits[i] == "Stawberry")
        console.log("You really like Stawberry!");
    if (favoriteFruits[i] == "Grapes")
        console.log("You really like Grapes!");
}
//Question 30
console.log("\nQ30: Hello Admin:\n");
var usernames = ["admin", "Naseem", "Waqas", "Sufyan", "Zaheer"];
for (var _a = 0, usernames_1 = usernames; _a < usernames_1.length; _a++) {
    var username = usernames_1[_a];
    if (username == "admin") {
        console.log("Hello ".concat(username, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
}
//Question 31
console.log("\nQ31: No Users:\n");
if (usernames.length == 0) {
    console.log("We need to find some users!");
}
else {
    usernames.length = 0;
    console.log("All users removed successfully ".concat(usernames));
}
//Question 32
console.log("\nQ32: Checking Username:\n");
var current_users = ["admin", "Naseem", "Waqas", "Sufyan", "Zaheer"];
var new_users = ["admin1", "naseem", "Waqas1", "Sufyan1", "Zaheer1"];
var _loop_1 = function (new_user) {
    var isUsernameTaken = current_users.some(function (current_user) { return current_user.toLowerCase() == new_user.toLowerCase(); });
    if (isUsernameTaken) {
        console.log("The username '".concat(new_user, "' is not available. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(new_user, "' is available."));
    }
};
for (var _b = 0, new_users_1 = new_users; _b < new_users_1.length; _b++) {
    var new_user = new_users_1[_b];
    _loop_1(new_user);
}
//Question 33
console.log("\nQ33: Ordinal Number\n");
var numbers_list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _c = 0, numbers_list_1 = numbers_list; _c < numbers_list_1.length; _c++) {
    var number = numbers_list_1[_c];
    var ordinalEnding = void 0;
    if (number === 1)
        ordinalEnding = "st";
    else if (number === 2)
        ordinalEnding = "nd";
    else if (number === 3)
        ordinalEnding = "rd";
    else
        ordinalEnding = "th";
    console.log("".concat(number).concat(ordinalEnding));
}
//Question 34
console.log("\nQ34: Pizzas\n");
var favoritePizzas = ["Pepperoni", "Margherita", "Hawaiian"];
for (var _d = 0, favoritePizzas_1 = favoritePizzas; _d < favoritePizzas_1.length; _d++) {
    var pizza = favoritePizzas_1[_d];
    console.log("I like ".concat(pizza, " pizza."));
}
console.log("I really love pizza!");
//Question 35
console.log("\nQ35: Animals:\n");
var animals = ["Dog", "Cat", "Rabbit"];
for (var _e = 0, animals_1 = animals; _e < animals_1.length; _e++) {
    var animal = animals_1[_e];
    console.log("A ".concat(animal, " would make a great pet."));
}
console.log("Any of these animals would make a great pet!");
//Question 36
console.log("\nQ36: Tshirt:\n");
make_Shirt("Large", "Hello, World! TypeScript T-shirt");
function make_Shirt(size, message) {
    console.log("Size: ".concat(size));
    console.log("Message: ".concat(message));
}
//Question 37
console.log("\nQ37: Large Shirts:\n");
console.log(make_Shirt1());
console.log(make_Shirt1("Medium"));
console.log(make_Shirt1("Small", "This is me who can touch the sky"));
function make_Shirt1(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    return "Size: ".concat(size, ", Message: ").concat(message);
}
//Question 38
console.log("\nQ38: Cities:\n");
function describe_City(city, country) {
    if (country === void 0) { country = "Default Country"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_City("New York");
describe_City("Karachi", "Pakistan");
describe_City("Paris", "France");
//Question 39
console.log("\nQ39: City Names:\n");
function city_Country(city, country) {
    return "".concat(city, ", ").concat(country);
}
console.log(city_Country("Lahore", "Pakistan"));
console.log(city_Country("Paris", "France"));
console.log(city_Country("New York", "USA"));
//Question 40
console.log("\nQ40: Album:\n");
function make_Album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks != undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_Album("Artist1", "Album Title 1", 10);
var album2 = make_Album("Artist2", "Album Title 2");
var album3 = make_Album("Artist3", "Album Title 3", 12);
console.log(album1);
console.log(album2);
console.log(album3);
//Question 41
console.log("\nQ41: Magicians:\n");
var magician_Names = ["Alvi", "Nawaz", "Bilawal", "Mulana"];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
show_magicians(magician_Names);
//Question 42
console.log("\nQ42: Great Magicians:\n");
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = 'the Great ' + magicians[i];
    }
    return (magicians);
}
console.log(make_great(magician_Names)); // Get mafician name from Q41
//Question 43
console.log("\nQ43: Unchanged Magicians:\n");
var great_magacians = make_great(__spreadArray([], magician_Names, true)); //Fnction already define in Q42
console.log("Original Magicians:");
show_magicians(magician_Names); //Function already defined in Q41
console.log("Great Magicians:");
show_magicians(great_magacians);
//Question 44
console.log("\nQ44: Sandwitches:\n");
function orderSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Order Summary:");
    if (items.length == 0) {
        console.log("No items selected.");
    }
    else {
        console.log("Sandwich includes:");
        for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
            var item = items_1[_a];
            console.log("- ".concat(item));
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
function createCar(manufacturer, modelName, options) {
    var carInfo = __assign({ manufacturer: manufacturer, modelName: modelName }, options);
    return carInfo;
}
// Call the function with required information and additional properties
var car = createCar("Toyota", "Camry", {
    color: "Silver",
    year: 2022,
    features: ["Navigation", "Sunroof"]
});
// Print the object to verify the information
console.log(car);
