const { DEBUG, getRaw, log } = require('../util');

let raw = getRaw();
if (DEBUG) {
    raw = `^>v<`;
}

function part1(raw) {
    let pos = [0,0];
    const visited = [pos];

    for(let i=0; i<raw.length; i++) {
        const dir = raw[i];
        if (dir === '>') {
            pos[0]++;
        } else if (dir === '<') {
            pos[0]--;
        } else if (dir === '^') {
            pos[1]--;
        } else {
            pos[1]++;
        }
        visited.push([...pos]);
    }

    log(visited);

    const unique = new Set(visited.map(([x,y]) => `${x},${y}`));
    return unique.size;
}

function part2(raw) {
    let positions = [[0,0], [0,0]];
    const visited = [[0,0]];

    for(let i=0; i<raw.length; i++) {
        const dir = raw[i];
        const pi = i%2;
        if (dir === '>') {
            positions[pi][0]++;
        } else if (dir === '<') {
            positions[pi][0]--;
        } else if (dir === '^') {
            positions[pi][1]--;
        } else {
            positions[pi][1]++;
        }
        visited.push([...positions[pi]]);
    }

    log(visited);

    const unique = new Set(visited.map(([x,y]) => `${x},${y}`));
    return unique.size;
}

console.log(part1(raw));
console.log(part2(raw));