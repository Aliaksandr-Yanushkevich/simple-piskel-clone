import { setCellSize } from "../src/js/setCellSize";
describe("set canvas cell size", function() {
  it("set size of cell value = 16", function() {
    localStorage.canvasSlider = "0";
    expect(setCellSize()).toEqual(16);
  });
  it("set default value of canvasSlider = 8", function() {
    localStorage.canvasSlider = "1";
    expect(setCellSize()).toEqual(8);
  });
  it("set default value of canvasSlider = 4", function() {
    localStorage.canvasSlider = "2";
    expect(setCellSize()).toEqual(4);
  });
  it("set default value of canvasSlider = ", function() {
    localStorage.canvasSlider = "42"; // negative scenario
    expect(setCellSize()).toEqual(8);
  });
});
