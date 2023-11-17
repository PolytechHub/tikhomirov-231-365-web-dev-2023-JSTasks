function minDigit(x) {
  let miniDigit = 9;
  if (x == 0) {
    return 0;
  }
  while (x != 0) {
    let lastDigit = x % 10;
    if (lastDigit < miniDigit) {
      miniDigit = lastDigit;
    }
    x -= lastDigit;
    x /= 10;
  }
  return miniDigit;
}
console.log(minDigit(228337))