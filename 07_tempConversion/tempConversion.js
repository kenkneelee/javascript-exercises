// C = (F - 32) / 1.8
// F = (C * 1.8) + 32

const ftoc = function(temp) {
  let output=((temp-32)/1.8)
  return Number(output.toFixed(1));
};

const ctof = function(temp) {
  let output=((temp*1.8)+32);
  return Number(output.toFixed(1));
};

console.log(ftoc(78));
console.log(ctof(25));

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
