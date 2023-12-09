const { DEBUG, raw } = require('../util');

function part1(raw) {
    let floor = 0;
    for(let i=0; i<raw.length; i++) {
        if (raw[i] === '(') floor++;
        else floor--;
    }
    return floor;
}

function part2(raw) {
    let floor = 0;
    for(let i=0; i<raw.length; i++) {
        if (raw[i] === '(') floor++;
        else floor--;

        if (floor === -1) return i+1;
    }
}

console.log(part1(raw));
console.log(part2(raw));