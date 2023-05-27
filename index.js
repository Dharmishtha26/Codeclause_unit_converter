 
function calculateLength(){
    var fromLength =Number(document.getElementById("fromLength").value);
    if(validateLengthConverter(fromLength)){
        //start calculation
        var fromUnit = document.getElementById("fromUnit").value;
        var toUnit = document.getElementById("toUnit").value;
        var outputLength = document.getElementById("outputLength");

        var ans = ConvertLength(fromLength,fromUnit,toUnit);
        outputLength.value = ans;
        }
}
function RestLengthConverter()
{
    if(confirm("Are you sure want to reset the converter?")){
        document.getElementById("fromLength").value = "";
        document.getElementById("fromUnit").value = "Millimeter";
        document.getElementById("toUnit").value = "Millimeter";
        document.getElementById("outputLength").value = "";
    }
}
// create a function to convert length

function ConvertLength(fromLength,fromUnit,toUnit)
{
    fromLength = Number(fromLength);
    var inMillimeter = 0;
    var makeThisMillimeter = 0;
    var result;

// first make the given unit to mmillimeter
switch(fromUnit)
{
    case "Millimeter" :
        makeThisMillimeter = 1;
        break;
    case "Centimeter" :
        makeThisMillimeter = 10;
        break;
    case "Meter" :
        makeThisMillimeter = 1000;
        break;
    case "Kilometer" :
        makeThisMillimeter = 1000000;
        break;
    case "Foot" :
        makeThisMillimeter = 304.8;
        break;
    case "Inch" :
        makeThisMillimeter = 25.4;
        break;
    case "Mile" :
        makeThisMillimeter = 1609344;
        break;
    case "Yard" :
        makeThisMillimeter = 914.4;
        break;
    case "Feet" :
        makeThisMillimeter = 0.00328084;

}
  inMillimeter = fromLength * makeThisMillimeter;

//covert millimeter value to targeted unit
switch(toUnit)
{
    case "Millimeter" :
        result = inMillimeter;
        break;
    case "Centimeter" :
        result = inMillimeter / 10;
        break;
    case "Meter" :
        result = inMillimeter /1000;
        break;
    case "Kilometer" :
        result = inMillimeter /1000000;
        break;
    case "Foot" :
        result = inMillimeter /304.8;
        break;
    case "Inch" :
        result = inMillimeter/25.4;
        break;
    case "Mile" :
        result = inMillimeter/1609344;
        break;
    case "Yard" :
        result = inMillimeter/ 914.4;
        break;
    case "Feet" :
        result = inMillimeter / 0.00328084 ;
}
   return result;
}

//create a function to validate form
function validateLengthConverter(fromLength){
    if(fromLength <= 0){
        alert("Enter valid value");
        return false;
    }
    return true;
}