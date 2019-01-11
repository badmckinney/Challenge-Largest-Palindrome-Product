/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function (digits) {
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;
  let string = "";

  for (let i = 0; i < digits; i++) {
    string += "9";
  };

  factor_0 = parseInt(string);
  factor_1 = parseInt(string);

  const checkForPalindrome = (number) => {
    if (number === parseInt(number.toString().split('').reverse().join(''))) {
      return true;
    } else {
      return false;
    }
  }

  for (let x = factor_0; x > 1; x--) {
    // if (x < 994 && y > 800) {
    //   console.log(x, y);
    // }
    for (let y = factor_1; y > 1; y--) {
      let number = x * y;
      // if (x === 993 && y === 913) {
      //   console.log(number, checkForPalindrome(number));
      // }
      if (checkForPalindrome(number) && number > palindromeNumber) {
        palindromeNumber = number;
        factor_0 = x;
        factor_1 = y;
      }
    }
  };

  return {
    factor_0: factor_0,
    factor_1: factor_1,
    palindromeNumber: palindromeNumber
  };
};