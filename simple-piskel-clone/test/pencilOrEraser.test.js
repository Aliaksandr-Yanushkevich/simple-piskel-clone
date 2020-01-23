import { pencilorEraser } from "../src/js/tools/pencilOrEraser";
describe("choose between pencil or eraser", function() {
  it("switch mode for pencil", function() {
    localStorage.currentTool = "pencil";
    expect(pencilorEraser()).toEqual("source-over");
  });
  it("switch mode for eraser", function() {
    localStorage.currentTool = "eraser";
    expect(pencilorEraser()).toEqual("destination-out");
  });
  it("switch mode for stroke", function() {
    localStorage.currentTool = "stroke";
    expect(pencilorEraser()).toEqual("source-over");
  });
});
