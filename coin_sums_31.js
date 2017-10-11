/* In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
It is possible to make £2 in the following way:

    1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
How many different ways can £2 be made using any number of coins?*/
//Solution:
// we have an end Result to achieve which is
var target = 200;
var coins = [1, 2, 5, 10, 20, 50, 100, 200]
var ways = [];
ways[0] = 1;
var then = new Date().getTime()/1000;
for (var x = 1; x <=target; x++) {
    ways[x] = 0;
}
//lets loop through all the possible coins values and in turn loop each of the possible coin values to target and assign it back to no of ways
coins.forEach(function (c) {
    for (var i = c; i < target+1; i++) {
        ways[i] += ways[i-c]
    }
})

console.log('The No. different ways can £2 be made using any number of coins:', ways[ways.length-1]);
var now = new Date().getTime()/1000;
console.log('Time it took to compute :', now-then, "  seconds ");