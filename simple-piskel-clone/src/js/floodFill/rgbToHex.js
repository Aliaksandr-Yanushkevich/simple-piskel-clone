export function rgbToHex(R, G, B) {
    let red = R.toString(16);
    let green = G.toString(16);
    let blue = B.toString(16);

    if (red.length === 1) red = `0${red}`;
    if (green.length === 1) green = `0${green}`;
    if (blue.length === 1) blue = `0${blue}`;


    return `#${R}${G}${B}`;
}
