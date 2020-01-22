import { rgbToHex } from "../src/js/floodFill/rgbToHex";

describe("rgb to hex", function() {
  it("convert rgb red to hex", function() {
    expect(rgbToHex(255, 0, 0)).toBe("#ff0000");
  });
  
  it("convert rgb orange to hex", function() {
    expect(rgbToHex(255, 219, 0)).toBe("#ffdb00");
  });

  it("convert rgb blue to hex", function() {
    expect(rgbToHex(64, 224, 208)).toBe("#40e0d0");
  });
});
