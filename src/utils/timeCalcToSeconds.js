export function timeCalcToSeconds(string) {
  if (string.endsWith("s")) {
    return parseInt(string) * 1000;
  }
  if (string.endsWith("m")) {
    return parseInt(string) * 1000 * 60;
    
  }
  if (string.endsWith("h")) {
    return parseInt(string) * 1000 * 60 * 60;
    
  }
}

