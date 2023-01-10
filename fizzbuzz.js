module.exports = function () {
  const arr = [];
  for (number = 1; number <= 100; number++) {
    if (number % 3 === 0) {
      if (number % 5 === 0) {
        arr.push('FizzBuzz');
        continue;
      } else {
        arr.push('Fizz');
        continue;
      }
    } else if(number % 5 === 0){
      arr.push('Buzz');
      continue;
    }
    arr.push(number);
  }
  return arr;
}
