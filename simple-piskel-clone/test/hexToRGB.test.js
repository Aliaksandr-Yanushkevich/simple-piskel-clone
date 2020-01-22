import { hexToRGB } from "../src/js/floodFill/hexToRGB";
describe("hex to rgb", function() {
    it("convert hex red to rgb", function() {
      expect(hexToRGB('#ff0000')).toEqual([255, 0, 0]);
    });
    
    it("convert hex orange to rgb", function() {
      expect(hexToRGB('#ffdb00')).toEqual([255, 219, 0]);
    });
  
    it("convert hex blue to rgb", function() {
      expect(hexToRGB("#40e0d0")).toEqual([64, 224, 208]);
    });
  });