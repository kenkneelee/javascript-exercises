const fibonacci = function(n) {
if (n <0) {
    return "OOPS";
}
let fib = [0, 1];
for (i=2; i<=n; i++) {
fib.push(fib[i-1] + fib[i-2]);
}
return fib[n];
};

// Do not edit below this line
module.exports = fibonacci;
