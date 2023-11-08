function minDigit(x) {
    let str = x.toString();
    let min = parseInt(str[0]);
    for (let i = 1; i < str.length; i++) {
      let digit = parseInt(str[i]);
      if (digit < min) {
        min = digit;
      }
    }
    return min;
  }

console.log(minDigit(228337))