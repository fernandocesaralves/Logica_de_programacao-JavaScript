// Fibonacci 
// 1 1 2 3 5 8 13

var chamou1 = 0;
var chamou2 = 0;
var chamou3 = 0;

function fibonacci(n) {
    chamou1++;
    var a = 1;
    var b = 0;
    var temp;

    while(n--) {
        
        temp = a; 
        a = a + b;
        b = temp;
    }
    return b;

}

// n = 2, tem = 1, a = 1, b = 1; 
// n = 1, temp = 1, a = 2, b = 1; 
// n = 0;

// console.log(fibonacci(3)); // 2
console.log(fibonacci(30)); // 8
console.log('chamou 1', chamou1);


function fibonacci2(n) {
    chamou2++;
    if(n <= 2) return 1;
    return fibonacci2(n - 1) + fibonacci2(n - 2);
}

console.log('-----');
// console.log(fibonacci2(3));
console.log(fibonacci2(30));
console.log('chamou 2', chamou2);

function fibonacci3(n, cache) {
    chamou3++;
    cache = cache || {};
    if(cache[n]) return cache[n];

    if(n <= 2) return 1;
    return cache[n] = fibonacci3(n - 1, cache) + fibonacci3(n - 2, cache);
}
console.log('-----');
console.log(fibonacci3(60));
console.log('chamou 3', chamou3);