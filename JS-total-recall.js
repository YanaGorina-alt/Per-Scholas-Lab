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
 * it is your plan (step by step explanation what you are going to do) in human language
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
//console.log(secondVariable); // -> word
// Create a variable called yourName and set it equal to your name as a string.
let yourName = "Yana";
// Then, write an expression that takes the string "Hello, my name is "
//  and the variable yourName so that it returns a new string with them concatenated.
//console.log(`Hello, my name is ${yourName}.`);//using template literals
//console.log("hello, my name is "+yourName+".");//using plus sign to concatinate
//  */
// C. BOOLEANS

//Using the provided variable definitions, replace the blanks so that all log statements print true
const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

//   console.log(a < b);
//   console.log(c > d);
//   console.log('Name' === 'Name');

  // FOR THE NEXT TWO, USE ONLY && OR ||
//   console.log(true || false);
//   console.log(false && false || false || false || false || true);
//   console.log(false === false)
//   console.log(e === 'Kevin');
//   console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
//   console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
//   console.log(48 == '48');

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
// cowSound(animal);
// cowSound("dog");
//    3.Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
//    4.Commit
/**
 *1. $ git status -> fatal: not a git repository (or any of the parent directories): .git
 *2.$ git init ->Initialized empty Git repository in C:/Users/Learner_LZH4Z111/software_classwork/W4D1/.git/
  3.$ git status ->On branch master, No commits yet
    Untracked files:
    (use "git add <file>..." to include in what will be committed)JS-total-recall.js
    nothing added to commit but untracked files present (use "git add" to track)
    Learner_LZH4Z111 MINGW64 ~/software_classwork/W4D1 (master)
  4.$ git add -A
    Learner_LZH4Z111 MINGW64 ~/software_classwork/W4D1 (master)
  5.$ git commit -m "My first commit"
    [master (root-commit) 31c86e0] My first commit
    1 file changed, 136 insertions(+)
    create mode 100644 JS-total-recall.js
  6. go to git hub account and make a new repository
     give it a name
     make it public -> create
     copy "add origin http......git"
  7.$ git remote add origin https://github.com/YanaGorina-alt/Per-Scholas-Lab.git
  8.$ git branch -M main
  9.$ git push origin main
  10.go back to git hub and check my new commit there
 */


//E. Driver's Ed

// 1.Make a variable that holds a person's age; be semantic
let personAge = 11;
// 2.Write code that will print out "Here are the keys!",
// if the age is 16 years or older, or,
if(personAge>=16){
    //console.log("Here are the keys!");
// if the age is younger than 16, a message should print "Sorry, you're too young."
}else{
   // console.log("Sorry, you're too young.");
}
// LOOPS

// A. The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive
for(let i = 0; i<=10; i++){
    //console.log(i)
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
        //console.log(i+"<-- is an even number");
    }else{
       // console.log(i)
    }
    
}

// C. Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
for(let i = 0; i<=100; i++){
    //Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
    if(i%3===0){
        //console.log(`I found a ${i}. Three is a crowd`);
    }

    if(i%5===0){
        //console.log(`I found a ${i}. High five!`);
    }
    
    //For numbers divisible by both three and five, be sure your code prints both messages
}

// D. Savings account

// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.
let bank_account = 0;
for(let i = 0; i<=10; i++){
    bank_account+=i;
}
//console.log("my bank_account has "+ bank_account);

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.
let myPay =0;
for(let i = 1; i<=100; i++){
   myPay+=i*2; 
}
//console.log("my pay is "+ myPay);

//ARRAIS & CONTROL FLOW

// A. Talk about it:
// What are the things in an array called?-> ELEMENTS
// Do Arrays guarantee those things will be in order?->YES
// What real-life thing could you model with an array?-> ordered list of steps

// B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes
const quotes = ["The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "The way to get started is to quit talking and begin doing.",
    "Your time is limited, so don't waste it living someone else's life."];

// C. Accessing elements
// Given the following array 
const randomThings = [1, 10, "Hello", true];   
// How do you access the 1st element in the array?
randomThings[0];
// Change the value of "Hello" to "World"
randomThings[2]="World";
// Check the value of the array to make sure it updated the array. 
//console.log(randomThings);

// D. Change values
// Given the following array 
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
// What would you write to access the 3rd element of the array?
ourClass[2];
// Change the value of "Github" to "Octocat"
ourClass[4]="Octocat";
// Add a new element, "Cloud City" to the array
ourClass.push("Cloud City");
//console.log(ourClass);

// E. Mix It Up

// Note: You don't really need .splice()for these. You could use it, 
//but there are simpler array methods that are more appropriate.

// Given the following array: 
const myArray = [5, 10, 500, 20];
// Add the string "Aegon"to the end of the array.
myArray.push("Aegon"); 
//Add another string of your choice to the end of the array.
myArray.push("Yana");
// Remove the 5 from the beginning of the array.
myArray.shift();
// Add the string "Bob Marley" to the beginning of the array.
myArray.unshift("Bob Marley");
// Remove the string of your choice from the end of the array.
myArray.pop();
// Reverse this array using Array.prototype.reverse().
myArray.reverse();
// Did you mutate the array? Yes, the reverse() method transposes the elements in place
// What does mutate mean? changes that were made will remain
// Did the .reverse()method return anything? the rerference to the mutated array

// F. Biggie Smalls

// Create a variable that contains an integer.
let number = 9;
// Write an if ... elsestatement that:
// console.log()s "little number" if the number is entered is less than 100
if(number<100){
    //console.log( "little number"); 
// console.log()s big numberif the number is greater than or equal to 100. 
}else{
    //console.log("big number");
}

// G. Monkey in the Middle

// Write an if ... else if ... else statement:
// console.log()little numberif the number entered is less than 5.
if(number < 5){
   // console.log( "little number"); 
// console.log()s big number if the number is greater than 10. 
}else if(number > 10){
   // console.log("big number");
// Otherwise, log "monkey".
}else{
    //console.log("monkey");
}

//H. What's in Your Closet?
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];
 // What's Kristyn wearing today? 
 // 1.log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
 //console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);
 //2.Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
 kristynsCloset.splice(6,0,"raybans");
 //console.log(kristynsCloset);

//3.Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
kristynsCloset[5]= "stained knit hat";
//4. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
//console.log(thomsCloset[0][0]);
//5.In the same way, access one item from Thom's pants array.
//console.log(thomsCloset[1][0]);
//6.Access one item from Thom's accessories array.
//console.log(thomsCloset[2][0]);
//7.Log a sentence about what Thom's wearing.
//console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]} and ${thomsCloset[2][2]}!`);
//8.Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.






