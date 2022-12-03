const fs = require('fs');

const part1 = (input) => {
    let currentTotal = 0;
    let highestNumber = 0;
    
    input.trim().split('\n').forEach(line => {
        if (line === '') {
            if (currentTotal > highestNumber) {
                highestNumber = currentTotal;
            }

            currentTotal = 0;
        } else {
            currentTotal += parseInt(line);
        }
    });

    return highestNumber;
}

const part2 = () => {
    let currentTotal = 0;
    let elves = [];
    
    input.trim().split('\n').forEach(line => {
        if (line === '') {
            elves.push(currentTotal);
            currentTotal = 0;
        } else {
            currentTotal += parseInt(line);
        }
    });

    elves = elves.sort().reverse();

    return elves[0] + elves[1] + elves[2];
}

const input = fs.readFileSync('./input.txt', 'utf8');

console.log(`Part 1: ${part1(input)}`);
console.log(`Part 2: ${part2(input)}`);
