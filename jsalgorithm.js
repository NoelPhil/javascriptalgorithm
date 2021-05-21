
function FahrToCelsius(fahrenheit) 
{
  var fahrTemp = fahrenheit;
  var convertFahrToCelsius = (fahrTemp - 32) * 5 / 9;
  var n = convertFahrToCelsius.toFixed(4)
  var message = fahrTemp+'\xB0F is ' + n + '\xB0C.';
    console.log(message);
} 
FahrToCelsius(50);

if (fToC!==Number){
    var message = is not a valid number;
    console.log(message)
}