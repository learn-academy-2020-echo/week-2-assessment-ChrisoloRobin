// ASSESSMENT 2: Coding Practical Questions

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// Use the test variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisble by three"

//create a function
const divide = (num) => {
//divide a num by 3 if true return divisble
  if (num % 3 === 0){
    return `${num} is divisble by three`
    //if NOT divisible return not divisible
  } else {
    return `${num} is not divisble by three`
  }
}
//output
console.log(divide(num1));
console.log(divide(num2));
console.log(divide(num3));



// --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

// declare a function that takes in an array
const capitalize = (array) => {
  // create a local variable that maps through the array
  let nouns = array.map(value => {
    // with each value access the first index and capitalize the letter then concatenate the remainder of the word
    return value[0].toUpperCase() + value.substring(1)
  })
  // return the local variable
  return nouns
}
// logging the function and pass in the array
console.log(capitalize(randomNouns))



// --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.

var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 90, 107]
//let numbers = mixedDataArray.filter(numbersOnly);

// const numbersOnly = (value) => {
//   if (typeof (value) === 'number'){
//     return value;
//   }
// }
// console.log(numbersOnly(numbers))

// const onlyNums = (array) => {
//   return array.filter(index => index === 'number')
// }
//console.log(onlyNums(mixedDataArray))

const numSort = (array) => {

  let filterArray = array.filter(value => {typeof value === "number"})

   return filterArray.sort(function(a, b){return a - b})
 }
console.log(numSort(mixedDataArray))


// --------------------4) Create a function that takes in a string and logs the index of the first vowel.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "throw"
// Expected output: 3


//let vowels = 'aeiou'

//function that gets the length of the strings => find the index of the string

//.map?? or .indexOf()

//console.log()



// --------------------5) Create a function that takes three arguments - two numbers and a mathematical operation (+, -, *, /) and performs the given calculation. If the input tries to divide by 0, return: "Can't divide by 0!"

//Create a function that takes three arguments - two numbers and a mathematical operation
const calculator = (num1, symbol, num2) => {

//performs the given calculation
  if(symbol === "+"){
    return num1 + num2
  } else if(symbol === "-"){
    return num1 - num2
  } else if (symbol === "*"){
    return num1 * num2
  } else if (symbol === "/"){
    return num1 / num2
    //If the input tries to divide by 0 return: CAN'T!
  }else (num2 === 0)
    return "Can't divide by 0!"


}


// Uncomment and use the following console logs to test your function
console.log(calculator(3, "*", 9))
// Expected output: 27

// console.log(calculator(16, "+", 3))
// Expected output: 19

// console.log(calculator(89, "/", 0))
// Expected output: "Can't divide by 0!"
