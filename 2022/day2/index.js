const fs = require('fs');

const part1 = (input) => {
    const strategyGuide = {
        'A X': 1 + 3,
        'A Y': 2 + 6,
        'A Z': 3 + 0,
        'B X': 1 + 0,
        'B Y': 2 + 3,
        'B Z': 3 + 6,
        'C X': 1 + 6,
        'C Y': 2 + 0,
        'C Z': 3 + 3,
    };

    return input.split('\n').reduce((acc, line) => acc + strategyGuide[line], 0);
};

const part2 = (input) => {
    const strategyGuide = {
        'A Y': 3 + 1,
        'A X': 0 + 3,
        'A Z': 6 + 2,
        'B Y': 3 + 2,
        'B Z': 6 + 3,
        'B X': 0 + 1,
        'C Y': 3 + 3,
        'C Z': 6 + 1,
        'C X': 0 + 2,
    };

    return input.split('\n').reduce((acc, line) => acc + strategyGuide[line], 0);
};

// const input = fs.readFileSync('./input.example.txt', 'utf8');
const input = fs.readFileSync('./input.txt', 'utf8');

console.log(`part2: ${part1(input)}`);
console.log(`part 2: ${part2(input)}`);
