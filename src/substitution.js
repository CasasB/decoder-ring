const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26 || new Set(alphabet).size !== 26) {
      return false;
    }

    const inputArr = input.toLowerCase().split('');

    const sourceAlphabet = encode ? 'abcdefghijklmnopqrstuvwxyz' : alphabet;
    const targetAlphabet = encode ? alphabet : 'abcdefghijklmnopqrstuvwxyz';

    const result = inputArr.map((char) => {
      if (char === ' ') {
        return char;
      } else {
        const index = sourceAlphabet.indexOf(char);
        if (index !== -1) {
          return targetAlphabet[index];
        } else {
          return char;
        }
      }
    });

    return result.join('');
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
