// VARIABLES & DATATYPES
/**
 * A. Q + A
 * 
 * 1.How do we assign a value to a variable?
 * Using assignment operator (=). Exp: let val = 5; (also it could be const, var, or nothing)
 * 
 * 2.How do we change the value of a variable?
 * we reassign a new value to this variable (if it w not defined as constant): val = 6; 
 * 
 * 3.How do we assign an existing variable to a new variable?
 * let newVar = val;
 * 
 * 4.Remind me, what are declare, assign, and define?
 * const dog; -> declaration
 * dog = "Tobick"; -> assigning value
 * const dog = 'Tobick' -> definition
 * 
 * 5.What is pseudocoding and why should you do it?
 * it is your paln (step by step explanation what you are going to do) in human language
 * which you will translate into programm language using, for instance, JS sintax
 * 
 * 6.What percentage of time should be spent thinking about how you're going to solve a problem 
 * vs actually typing in code to solve it?
 * 70%
 * 
 * B. STRINGS
 */
//Create a variable called firstVariable
let firstVariable;
// Assign it the value of the string "Hello World"
firstVariable = "Hello world";
// Change the value of this variable to some number
firstVariable = 21;
// Store the value of firstVariablein a new variable called secondVariable
let secondVariable = firstVariable;
// Change the value of secondVariable to any string.
secondVariable = "word";
// What is the value of firstVariable?
console.log(secondVariable); // -> word
// Create a variable called yourName and set it equal to your name as a string.
let yourName = "Yana";
// Then, write an expression that takes the string "Hello, my name is "
//  and the variable yourName so that it returns a new string with them concatenated.
console.log(`Hello, my name is ${yourName}.`);//using template literals
console.log("hello, my name is "+yourName+".");//using plus sign to concatinate
//  */
// C. BOOLEANS

//Using the provided variable definitions, replace the blanks so that all log statements print true
const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');

  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false && false || false || false || false || true);
  console.log(false === false)
  console.log(e === 'Kevin');
  console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');

  //D. The farm

//    1.Declare a variable animal. Set it to be either "cow" or something else
let animal = 'cow';
//    2.Write code that will print out "mooooo" if the it is equal to cow
function cowSound(it){
    if(it === 'cow'){
        console.log("mooooo");
    }else {
        console.log("Hey! You're not a cow.");
    }
}
cowSound(animal);
cowSound("dog");
//    3.Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
//    4.Commit

//E. Driver's Ed

// 1.Make a variable that holds a person's age; be semantic
let personAge = 11;
// 2.Write code that will print out "Here are the keys!",
// if the age is 16 years or older, or,
if(personAge>=16){
    console.log("Here are the keys!");
// if the age is younger than 16, a message should print "Sorry, you're too young."
}else{
    console.log("Sorry, you're too young.");
}
// LOOPS

// A. The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive
for(let i = 0; i<=10; i++){
    console.log(i)
}
// Write a loop that will print out all the numbers from 10 up to and including 400
// for(let i = 10; i<=400; i++){
//     console.log(i)
// }
// Write a loop that will print out every third number starting with 12 and going no higher than 4000
// for(let i = 12; i<=4000; i+=3){
//     console.log(i)
// }

// B. Get even
// Print out the numbers that are within the range of 1 - 100
for(let i = 1; i<=100; i++){
    // Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
    if(i%2===0){
        console.log(i+"<-- is an even number");
    }else{
        console.log(i)
    }
    
}

// C. Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
for(let i = 0; i<=100; i++){
    if(i%5===0){
        console.log(`I found a ${i}. High five!`);
    }
}



