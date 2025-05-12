function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

const convertToCelsius = function(currentTemp) {
  const result = (currentTemp - 32) * (5/9);
  return round(result, 1);
};

const convertToFahrenheit = function(currentTemp) {
  const result = currentTemp * (9/5) + 32;
  return round(result, 1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
