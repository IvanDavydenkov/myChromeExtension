export function normalizeTime(time) {
  const newTime = new Date(time);
  return `${newTime.getHours()}:${newTime.getMinutes()}`;
}