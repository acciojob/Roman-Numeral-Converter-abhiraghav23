function convertToRoman(num) {
  const obj = {
    0: ['M', 1000],
    1: ['D', 500],
    2: ['C', 100],
    3: ['L', 50],
    4: ['X', 10],
    5: ['V', 5],
    6: ['I', 1]
  };

  let result = "";

  // Iterate over the Roman numeral mapping
  for (let i = 0; i < 7; i++) {
    const [symbol, value] = obj[i];
    
    // Append as many of the current symbol as possible
    while (num >= value) {
      result += symbol;
      num -= value;
    }
    
    // Handle subtractive notation
    if (i < 6) { // Ensure there's a next smaller symbol to check
      const [nextSymbol, nextValue] = obj[i + 2]; // Look two steps ahead (e.g., C for 900)
      if (num >= value - nextValue) {
        result += nextSymbol + symbol; // Append subtractive notation (e.g., 'CM')
        num -= (value - nextValue);
      }
    }
  }

  return result;
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(36));

// do not edit below this line
module.exports = convertToRoman;

