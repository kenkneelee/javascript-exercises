const sumAll = function (first, second) {
    if (first < 0 || second < 0 || typeof first !== "number" || typeof second !== "number") {
        return "ERROR";
    }

    if (first > second) {
        higher = first;
        lower = second;
    }
    else if (second > first) {
        higher = second;
        lower = first;
    }
    else {
        return "Numbers are equal!";
    }

    let oneToHigher = (higher * (higher + 1)) / 2;
    let oneToLowerMinusOne = ((lower - 1) * lower) / 2;
    let endSum = oneToHigher - oneToLowerMinusOne;
    return endSum;
};

// Do not edit below this line
module.exports = sumAll;
