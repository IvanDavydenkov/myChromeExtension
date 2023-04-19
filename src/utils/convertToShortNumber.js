export function convertToShortNumber(number) {
  if (typeof number === "number") {
    number = number.toString();
  }
  
  if (typeof number !== "string") {
    throw new Error("Input must be a number or a string");
  }
  
  const isNegative = number.startsWith("-");
  const absNumber = Math.abs(parseFloat(number));
  
  if (absNumber < 1000) {
    return (isNegative ? "-" : "") + absNumber.toFixed();
  } else if (absNumber < 1000000) {
    const value = absNumber / 1000;
    const unit = "k";
    return (isNegative ? "-" : "") + value.toFixed(1).replace(/\.0$/, "") + unit;
  } else if (absNumber < 1000000000) {
    const value = absNumber / 1000000;
    const unit = "m";
    return (isNegative ? "-" : "") + value.toFixed(1).replace(/\.0$/, "") + unit;
  } else {
    const value = absNumber / 1000000000;
    const unit = "mm";
    return (isNegative ? "-" : "") + value.toFixed(1).replace(/\.0$/, "") + unit;
  }
}
