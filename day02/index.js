const { DEBUG, getRaw, toTrimmedLines } = require('../util');

function part1(lines) {
    return lines.map(line => {
            const [l,w,h] = line.split('x').map(Number);
            const faces = [
                l*w,
                w*h,
                h*l
            ];
            const totalArea = 2*faces[0] + 2*faces[1] + 2*faces[2];
            const minFace = faces.reduce((p,c) => Math.min(p, c));
            return totalArea + minFace;
        })
        .reduce((p,c) => p+c);
}

function part2(lines) {
    return lines.map(line => {
            const [l,w,h] = line.split('x').map(Number).sort((a, b) => a-b);
            const wrap = 2*l+2*w;
            const bow = l*w*h;
            return wrap + bow;
        })
        .reduce((p,c) => p+c);
}

let raw = getRaw();
let lines = toTrimmedLines(raw);

console.log(part1(lines));
console.log(part2(lines));