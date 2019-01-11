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

  const initialValue = parseInt(string);
  factor_0 = initialValue;
  factor_1 = initialValue;


  const checkForPalindrome = (number) => {
    if (number === parseInt(number.toString().split('').reverse().join(''))) {
      return true;
    } else {
      return false;
    }
  }

  for (let x = initialValue; x > 1; x--) {
    for (let y = initialValue; y > 1; y--) {
      let number = x * y;
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