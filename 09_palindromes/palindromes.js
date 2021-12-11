const palindromes = function (string) {
    newString = string.replace(/[^A-Za-z]/g, "").toLowerCase();
    return (
        newString
            .split("")
            .reverse()
            .join("") == newString
    )
};

// Do not edit below this line
module.exports = palindromes;
