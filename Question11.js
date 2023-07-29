const numbers = [1, 2, 3, 4, 5];

const result = numbers.reduce((acc, num) => {
  if (num % 2 === 0) {
    acc.evens.push(num);
  } else {
    acc.odds.push(num);
  }
  return acc;
}, { odds: [], evens: [] }); 

console.log(result);

//Explaination - The reduce function was not properly written. It was corrected in the above code.
