const fs = require('fs');

const part1 = (input) => {  
    return input.split('\n').reduce((acc, line) => {
        const pairs = line.split(',');
        const pair1Range = pairs[0].split('-').map(num => parseInt(num));
        const pair2Range = pairs[1].split('-').map(num => parseInt(num));

        let pair1ContainsPair2 = true;
        for (let i = pair1Range[0]; i <= pair1Range[1]; i++) {
            if (i < pair2Range[0] || pair2Range[1] < i) {
                pair1ContainsPair2 = false;
                break;
            }
        }

        let pair2ContainsPair1 = true;
        for (let i = pair2Range[0]; i <= pair2Range[1]; i++) {
            if (i < pair1Range[0] || pair1Range[1] < i) {
                pair2ContainsPair1 = false;
                break;
            }
        }

        return  (pair1ContainsPair2 || pair2ContainsPair1) ? (acc + 1) : acc;
    }, 0);
};

const part2 = (input) => {
    return input.split('\n').reduce((acc, line) => {
        const pairs = line.split(',');
        const pair1Range = pairs[0].split('-').map(num => parseInt(num));
        const pair2Range = pairs[1].split('-').map(num => parseInt(num));
        let overlap = pairsOverlap(pair1Range, pair2Range);
        return overlap ? (acc + 1) : acc;
    }, 0);
};

const pairsOverlap = (pair1Range, pair2Range) => {
    for (let i = pair1Range[0]; i <= pair1Range[1]; i++) {
        for (let j = pair2Range[0]; j <= pair2Range[1]; j++) {
            if (i === j) {
                return true;
            }
        }
    }

    for (i = pair2Range[0]; i <= pair2Range[1]; i++) {
        for (j = pair1Range[0]; j <= pair1Range[1]; j++) {
            if (i === j) {
                return true;
            }
        }
    }

    return false;
}


// const input = fs.readFileSync('./input.example.txt', 'utf8');
const input = fs.readFileSync('./input.txt', 'utf8');

console.log(`Part 1: ${part1(input)}`);
console.log(`part 2: ${part2(input)}`);
