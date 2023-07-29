const arr = [1, 2, 3, 4, 5];

const reversedArr = arr.reduce((acc, num) => {
  return [num, ...acc];
}, []);

console.log(reversedArr);
