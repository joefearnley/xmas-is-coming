const fs = require('fs');

const part1 = (input) => {
    const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return input.split('\n').reduce((acc, line) => {
        const half = Math.floor(line.length / 2);
        const firstHalf = line.slice(0, half).split('');
        const secondHalf = line.slice(half, line.length).split('');
        let sharedItem = firstHalf.filter(char => secondHalf.includes(char))[0];
        return acc + (alpha.indexOf(sharedItem) + 1);
    }, 0);
};

const part2 = (input) => {
    const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return group(input.split('\n'), 3).reduce((acc, group) => acc + (alpha.indexOf(findSharedItem(group)) + 1), 0);
};

const findSharedItem = (group) => {
    for(let i = 0; i < group[0].length; i++) {
        for(let j = 0; j < group[1].length; j++) {
            for(let k = 0; k < group[2].length; k++) {
                if (group[0][i] === group[1][j] && group[0][i] === group[2][k]) {
                    return group[0][i];
                }
            }
        }
    }
}

const group = (arr, size) => {
  return arr.reduce((acc, _, i) =>
      (i % size)
        ? acc
        : [...acc, arr.slice(i, i + size)]
    , []);
}

// const input = fs.readFileSync('./input.example.txt', 'utf8');
const input = fs.readFileSync('./input.txt', 'utf8');

console.log(`Part 1: ${part1(input)}`);
console.log(`part 2: ${part2(input)}`);
