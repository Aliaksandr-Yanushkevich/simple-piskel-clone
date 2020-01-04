export function matchStartColor(pixelPos, colorLayer, startColorRGB) {
    // console.log(colorLayer.data[pixelPos], startColorRGB[0])
    // console.log(colorLayer.data[pixelPos + 1], startColorRGB[1])
    // console.log(colorLayer.data[pixelPos + 2], startColorRGB[2])
    // console.log(colorLayer.data[pixelPos + 3], startColorRGB[3])
    return (colorLayer.data[pixelPos] === startColorRGB[0] &&
        colorLayer.data[pixelPos + 1] === startColorRGB[1] &&
        colorLayer.data[pixelPos + 2] === startColorRGB[2] &&
        colorLayer.data[pixelPos + 3] === startColorRGB[3])
}