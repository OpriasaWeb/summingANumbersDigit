// June 25, 2023
// CodeWars: Summing A Number's Digits (7 kyu challenge)
// Description: Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

function sumDigits(number) {
  
//   Make it absolute value first and convert it to string
  var splitNumber = Math.abs(number).toString();

  var resultValue = 0;
  
  for(let i = 0; i < splitNumber.length; i++){
    const digit = parseInt(splitNumber[i]);

    resultValue += Math.abs(digit);
  }
  
  return resultValue;
  
}


console.log(sumDigits(99));

// ----- Best Practices ----- //
// function sumDigits(number) {
//   var i = 0;
//   var sum = 0;
//   number = Math.abs(number)
//   while(number != 0)
//   {
//       sum += number % 10
//       number = Math.floor(number/10)
//   }
//   return sum
// }

// console.log(sumDigits(99));
// ----- Best Practices ----- //