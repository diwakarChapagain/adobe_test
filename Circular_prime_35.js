
/*Resources used
 https://en.wikipedia.org/wiki/Circular_prime
 https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
 */
var logValue = Math.log(10);
// Rotates the least-significant base-10 digit to the front
function bringFrontByTen(number) {
    return (number / 10 >> 0) +(number % 10) * Math.pow(10, Math.floor(Math.log(number) / logValue));
}

// Returns an array where element [n] is falsy if n is prime.
function primeOrNotPrime(range) {
    var notAprimeNumber = [];
    // let's Assign the Array all at once so we dont have to worry about again and again.
    notAprimeNumber.length = range;
    notAprimeNumber[0] = notAprimeNumber[1] = true;
    for (var i = 2; i < notAprimeNumber.length; i++) {
        if (!notAprimeNumber[i]) {
            for (var j = i * i; j < notAprimeNumber.length; j += i) {
                notAprimeNumber[j] = true;
            }
        }
    }
    return notAprimeNumber;
}

// the Circular Prime Range must be prower of 10
function getCircularPrimeNumbers(range) {
    // true  if the n is not a prime number and also let's remove the numbers that are not circular
    var removedNumbers = primeOrNotPrime(range);
    var circularPrimeCount = 0;
    for (var i = 0; i < removedNumbers.length; ++i) {
        if (!removedNumbers[i]) {
            var count = 1;
            for (var j = bringFrontByTen(i); j != i; j = bringFrontByTen(j)) {
                if (removedNumbers[j]) {
                    count = 0;
                    break;
                }
                count++;
                removedNumbers[j] = true;
            }
            circularPrimeCount += count;
        }
    }
    return circularPrimeCount;
}

// lets run an Anonymous function to calculate the total values
(function() {
    var then = new Date().getTime()/1000;
   document.getElementById('result').innerHTML= getCircularPrimeNumbers(1000000);
    var now = new Date().getTime()/1000;
    document.getElementById('time').innerHTML = now- then + "  seconds"
})();


