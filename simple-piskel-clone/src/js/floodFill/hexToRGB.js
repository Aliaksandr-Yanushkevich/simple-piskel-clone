export function hexToRGB(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  const rgb = [];
  rgb.push(parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16));
  return rgb;
}
