let n = 512;
let matrix;

function count(matrix, x, y, prevColor, newColor) {
    prevColor = getHex(prevColor);
    newColor = getHex(newColor);
    if (x < 0 || y < 0 || x >= n || y >= n) {
        return;
    }
    if (matrix[x][y] !== prevColor) {
        return;
    }

    matrix[x][y] = newColor;
    count(matrix, x, y + 1, prevColor, newColor);
    count(matrix, x, y - 1, prevColor, newColor);
    count(matrix, x - 1, y, prevColor, newColor);
    count(matrix, x + 1, y, prevColor, newColor);
}

const paintBucket = (event) => {
    const rect = event.target.getBoundingClientRect();
    const x = Math.round(event.clientX - rect.left);
    const y = Math.round(event.clientY - rect.top);
    const prevColor = getHex(ctx.getImageData(x, y, 1, 1).data);

    const n = 512;
    matrix = Array(n).fill(0).map(() => Array(n).fill(0));
    for (let i = 0; i < n; i += 1) {
        for (let j = 0; j < n; j += 1) {
            matrix[i][j] = getHex(ctx.getImageData(i, j, 1, 1).data);
        }
    }
    count(matrix, x, y, prevColor, currentColor);

    for (let i = 0; i < n; i += 1) {
        for (let j = 0; j < n; j += 1) {
            ctx.fillStyle = matrix[i][j];
            ctx.fillRect(i, j, 1, 1);
        }
    }
};

const getHex = (RGBA) => {
    let r = RGBA[0].toString(16);
    let g = RGBA[1].toString(16);
    let b = RGBA[2].toString(16);

    if (r.length == 1)
    r = "0" + r;
    if (g.length == 1)
    g = "0" + g;
    if (b.length == 1)
    b = "0" + b;
    return "#" + r + g + b;
};