const reverseString = function(str) {
const strArray=str.split("");
let outputArray = [];
let outputString = "";

for (i=strArray.length-1; i>=0; i--){
    outputArray.push(strArray[i])
}

for (i=0; i<outputArray.length; i++) {
    outputString += outputArray [i];
}

return outputString;
}

// Do not edit below this line
module.exports = reverseString;
