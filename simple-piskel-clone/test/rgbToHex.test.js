import { rgbToHex } from "../src/js/floodFill/rgbToHex";

describe("rgb to hex", function() {
  it("convert rgb red to hex", function() {
    expect(rgbToHex(255, 0, 0)).toBe("#ff0000");
  });
  
  it("convert rgb orange to hex", function() {
    expect(rgbToHex(255, 219, 0)).toBe("#ffdb00");
  });

  it("convert rgb blue to hex", function() {
    expect(rgbToHex(9, 163, 222)).toBe("#09a3de");
  });
});
