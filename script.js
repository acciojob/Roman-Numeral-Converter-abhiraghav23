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

  for (let i = 0; i < 7; i++) {
    const [symbol, value] = obj[i];
    
    while (num >= value) {
      result += symbol;
      num -= value;
    }
    
  
    if (i < 6) { 
      const [nextSymbol, nextValue] = obj[i + 2]; 
        result += nextSymbol + symbol; 
        num -= (value - nextValue);
      }
    }
  }

  return result;
}


console.log(convertToRoman(14));

module.exports = convertToRoman;

