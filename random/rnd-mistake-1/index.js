/*
* @source
*   https://unpkg.com/@georgedoescode/houdini-fleck@1.0.1/fleck-worklet.bundle.js
* @source
*   https://www.youtube.com/watch?v=ALKqavp9Fg0
* */
function mulberry32(seed) {
  let state = seed;

  function next(from = 0, to = 1) {
    state |= 0;
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    const val = ((t ^ (t >>> 14)) >>> 0) / 4294967296;

    return val * (to - from) + from;
  }

  return {
    next,
    fork: () => mulberry32(next(0, 2 ** 32)),
  }
}

const seed = 123;
const width = 100;
const height = 100;
const cellSize = 50;
const perCell = 10;

const random = mulberry32(seed);

for(let x = 0; x < width; x += cellSize){
  const xRandom = random.fork();

  for(let y = 0; y < height; y += cellSize){
    const cellRandom = xRandom.fork();

    for (let i = 0; i < perCell; i++){
      const xVal = cellRandom.next(x, x + cellSize);
      const yVal = cellRandom.next(y, y + cellSize);

      console.log(xVal, yVal);
    }
  }
}
