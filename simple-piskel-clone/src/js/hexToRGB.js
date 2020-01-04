export function hexToRGB(hex) {
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        let rgb = [];
        rgb.push(parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16));
        // console.log(rgb);
        return rgb
      }