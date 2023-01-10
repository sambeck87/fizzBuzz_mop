module.exports = function () {
  const arr = [];
  for (number = 1; number <= 100; number++) {
    if (number % 3 === 0 && number % 5 === 0) {
        arr.push('FizzBuzz');
        continue;
    } else if(number % 3 === 0){
      arr.push('Fizz');
      continue;
    }else if(number % 5 === 0){
      arr.push('Buzz');
      continue;
    }
    arr.push(number);
  }
  return arr;
}
