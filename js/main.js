// Basic JavaScript



/*
    -- Variable Declaration --
    Primative types in JavaScript - strings,integers,floats,arrays,objects
*/

// String variables
var name = 'Bill';

console.log(name)

// Integer Variable
var some_number = 30;

console.log(some_number)

// Float Variable
some_float = 3.14;

console.log(some_float);

// Array Variable
some_array = [1,2,3,4];

console.log(some_array)

// Object variable
some_object = {'test':'Play this please!'}

console.log(some_object)

// String Concatination
full_statement = name + ' how are you doing?';

console.log(full_statement);

// Basic Math Operations
// Addition
sum = 5 + 5;

console.log(sum)

// Multiplication
product = 5 * 5;

console.log(product)

// Subtraction
difference = 5 - 5;

console.log(difference)

// Division
divide = 5 / 5;

console.log(divide);

// More math operations (slightly advanced)
square = 5 ** 2;

console.log(square)

// Finding the floor of a decimal
find_floor = Math.floor(25.8)
find_floor_2 = Math.floor(25/3)

console.log(find_floor)
console.log(find_floor_2)

// Finding the ceiling of a decimal (Rounding Up)
find_ceil = Math.ceil(25.5)



console.log(find_ceil)

// Mind Bender
more_crazy_stuff = some_float + '4'

console.log(more_crazy_stuff)

// JavaScript Hoisting Example
var basketball_player;
console.log('BEFORE DECLARATION: ', "Currently playing face of NBA" + basketball_player)
var basketball_player = 'LeBron James';
console.log('AFTER DECLARATION: ',basketball_player)


console.log(Math.floor(another_number))

var another_number =  40.5

console.log(Math.floor(another_number))


// JavaScript let keyword - ES6 JavaScript Variable Creation (Safer)
// console.log(nba_goat)
let nba_goat = 'Micheal Jordan';
console.log(nba_goat)

nba_goat = 'Kobe' // redeclaration

console.log(nba_goat)



first_name = 'Joel'

console.log(first_name)

// JavaScript const keyword - ES6+ JavaScript Variable Creation(Safer)
const fav_football_team = 'Philly Eagles';

console.log(fav_football_team)

// fav_football_team = 'Chicago Bears';

// console.log(fav_football_team)

/*
    JavaScript Function Creation
    -- There are multiple ways of making a function in JavaScript --
*/

// Regular Named Function
function addNums(){
    let num = 4;
    let num2 = 5;

    return num + num2

}

console.log(addNums())

// ES6 Arrow Function
let addNums2 = () => {
    let num = 4;
    let num2 = 5;

    return num + num2
}

console.log(addNums2())

// Variable named functions
let addNums3 = function(){
    let num = 4;
    let num2 = 5;

    return num + num2
}

console.log(addNums3())

// Functions with parameters
function multipyNums(num,num2){
    return num * num2
}

console.log(multipyNums(4,8))

// Arrow Function with parameters
let multiplyNums2 = (num,num2) => {
    return num * num2
}

console.log(multiplyNums2(4,8))

// Variable function with parameters
let multiplyNums3 = function(num,num2){
    return num * num2
}

console.log(multiplyNums3(4,8))

// Self-invoking function
console.log((function (name) {
    let hello = 'Hello World' + name;
    return hello
})('Joel'))

// JavaScript Control Flow 
// If Statements
function determineAge(age){
    if(age < 18){
        return 'Minor'
    } else if ( age >= 18 && age <= 65){
        return 'Adult not retired'
    } else {
        return 'Elderly person retired'
    }
}

console.log(determineAge(30))

// Ternary Operator - JavaScript
function determineAge2(age){
    return (age < 18) ? 'Minor' : (age >= 18 && age <= 65 ) ? 
    'Adult not yet Retired' : 'Elderly person Retired'
}

console.log(determineAge2(67))


//Loops in JavaScript - For Loop
// For Loop Syntax -- for keyword(counter; expression; incremenation/decrementation)

function countByOne(){
    for(let i = 0; i < 20; i++){
        console.log(i)
    }
    return 'Counting Stopped'
}

console.log(countByOne())

function decreaseByOne(){
    for(let i = 20; i > 0; i--){
        console.log(i)
    }

    return 'Decreasing Stopped'
}

console.log(decreaseByOne())

// While loop
function countWithWhile(){
    let i = 0 // Counter
    let text = '';

    while(i < 10){
        text += "This number is..." + i + "\n"
        i++
    }

    return text
}

console.log(countWithWhile())

// Do While Loop

function countWithDoWhile(){
    let i = 0 // Counter
    let text = '';

    do {
        text += 'This number is now...' + i + '\n'
        i++
    }
    while (i > 10)
    return text
}

console.log(countWithDoWhile())

// JavaScript Array Methods

let groupOfNames = ['Terry','Ben','Ash','Brock','Misty']
console.log(groupOfNames[1]) // == "Ben"

//toString()
console.log(groupOfNames.toString())

// join()
console.log(groupOfNames.join(", "))

//Loop through array with a for loop
for(let i = 0; i < groupOfNames.length; i++){
    console.log(groupOfNames[i])
}

// ForEach()
console.log(groupOfNames
            .forEach(element => {return element}))

// Use an Array to produce a String -- Then use a String Method(s) on the result
console.log(groupOfNames[0].search('T'))
console.log(groupOfNames[1].slice(0,3))


// Array Method - Slice()
console.log(groupOfNames.slice(0,3))

// Array Method - Splice()
console.log(groupOfNames.splice(3,2,'Freddie','Bob')) // Returned value == "Brock"
console.log(groupOfNames)

for(let i = 0; i < groupOfNames.length; i++){
    if(i % 2 == 0){
        groupOfNames.splice(i,1,'Goku')
    }
    console.log(groupOfNames)
}

