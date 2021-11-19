const removeFromArray = function () {
let inputArray = arguments[0];  //store first argument (array) in variable
console.log("The input array is "+inputArray)
let deleteArray = []; // create variable to store values to delete
for (i=1; i<arguments.length;i++) { // for every argument other than the first array
    deleteArray.push(arguments[i]); // store it in the delete array
    console.log("The delete array is " + deleteArray);
} 
console.log("Input array length is " + inputArray.length)



for (i=0; i<inputArray.length;i++) { // for every position in the input array
    console.log("Checking input array position "+ i)
    for (j=0; j<deleteArray.length;j++) { // check each element in the delete array
        console.log("Checking delete array position "+j)
        if (inputArray[i]===deleteArray[j]) { // delete that position in the array
            inputArray.splice(i,1);
            i--; // decrement counter because inputarray is 1 shorter now (retest same position because it has been shifted)
            console.log("Found and deleted "+ deleteArray[j]);
        }
    }
}

return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
