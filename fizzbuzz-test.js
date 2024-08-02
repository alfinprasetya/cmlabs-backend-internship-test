function fizzbuzz(loop) {
  for (let i = 1; i <= loop; i++) {
    let output = '';
    if (i % 3 == 0) {
      output += 'Fizz';
    }
    if (i % 5 == 0) {
      output += 'Buzz';
    }
    console.log(output.length == 0 ? i : output)
  }
}

fizzbuzz(100)