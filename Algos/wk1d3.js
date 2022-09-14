var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];

for (var ii = 0; ii < numbers.length; ii++) {
    if (numbers[ii] >= 0) {
        countPositives++;
    }
}

console.log("there are " + countPositives + " positive values");
