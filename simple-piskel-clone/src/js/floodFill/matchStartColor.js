export function matchStartColor(pixelPos, colorLayer, startColorRGB) {
    return (colorLayer.data[pixelPos] === startColorRGB[0]
        && colorLayer.data[pixelPos + 1] === startColorRGB[1]
        && colorLayer.data[pixelPos + 2] === startColorRGB[2]
        && colorLayer.data[pixelPos + 3] === startColorRGB[3]);
}
