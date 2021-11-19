const repeatString = function(string, num) {
let returnString="";
for (i=0; i<num; i++) {
    returnString+=string;
}
if (num<0){
    return "ERROR";
}
else {
return returnString;
}
};

// Do not edit below this line
module.exports = repeatString;
