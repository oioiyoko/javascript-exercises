const convertToCelsius = function(fah) {
  let cel = 0;
  cel = (fah - 32)*(5/9);
  console.log("THIS IS CEL: " + cel);
  if (Number.isInteger(cel)) {
    return Number(cel);
  }
  else {
    cel = cel.toFixed(1);
  }
  return Number(cel);
};

const convertToFahrenheit = function(cel) {
  let fah = 0;
  fah = (cel * 9/5) + 32;
  if (Number.isInteger(cel)) {
    return Number(fah);
  }
  else {
    fah = fah.toFixed(1);
  }
  return Number(fah);

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
