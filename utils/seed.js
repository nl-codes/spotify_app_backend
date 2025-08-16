// helper functions
function seededRandom(seed) {
    let value = seed % 2147483647;
    if (value <= 0) value += 2147483646;
    return function () {
        value = (value * 16807) % 2147483647;
        return (value - 1) / 2147483646;
    };
}

export function shuffleWithSeed(array, seed = 42) {
    const random = seededRandom(seed);
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
