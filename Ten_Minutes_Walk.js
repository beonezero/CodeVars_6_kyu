function isValidWalk(walk) {
  if (!walk || walk.length !== 10) return false;
  let x = 0,
      y = 0
  for (const direction of walk) {
  const steps = {
    n: () => y--,
    s: () => y++,
    w: () => x--,
    e: () => x++,
  }
  steps[direction]() 
  }
  return x === 0 && y === 0
}
