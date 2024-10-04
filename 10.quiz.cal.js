function cal(numbers) {
  let filteredNums = numbers.filter((num) => num % 3 == 0);

  let mappedNums = filteredNums.map((num) => num * 2);

  let result = mappedNums.reduce((acc, curr) => acc + curr);

  return result;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(cal(numbers));
