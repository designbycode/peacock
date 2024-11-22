import { extend, colord } from "colord";
import mixPlugin from "colord/plugins/mix";
extend([mixPlugin]);
function peacock({
  baseColor,
  upSteps = 5,
  downSteps = 5,
  stepAmount = 0.1,
  hueShift = 0
}) {
  const base = colord(baseColor);
  const result = { DEFAULT: base.toHex().toUpperCase() };
  for (let i = 1; i <= upSteps; i++) {
    const key = i * 100;
    const color = base.mix("white", i * stepAmount).rotate(i * hueShift);
    result[key] = color.toHex().toUpperCase();
  }
  for (let i = 1; i <= downSteps; i++) {
    const key = 500 + i * 100;
    const color = base.mix("black", i * stepAmount).rotate(-i * hueShift);
    result[key] = color.toHex().toUpperCase();
  }
  result["50"] = colord(result["100"]).mix("white", 0.5).toHex().toUpperCase();
  result["950"] = colord(result["900"]).mix("black", 0.5).toHex().toUpperCase();
  return result;
}
export {
  peacock
};
