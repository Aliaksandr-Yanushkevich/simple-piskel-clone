import { matchStartColor } from "../src/js/floodFill/matchStartColor";
describe("compare pixel color with start color", function() {
  const colorLayer = { data: [0, 0, 0, 0, 42, 42, 42, 42, 255, 0, 0, 0] };
  const startColorRGB = [255, 0, 0, 0];
  it("compare first pixel color with start color", function() {
    expect(matchStartColor(0, colorLayer, startColorRGB)).toEqual(false);
  });
  it("compare second pixel color with start color", function() {
    expect(matchStartColor(4, colorLayer, startColorRGB)).toEqual(false);
  });
  it("compare third pixel color with start color", function() {
    expect(matchStartColor(8, colorLayer, startColorRGB)).toEqual(true);
  });
});
