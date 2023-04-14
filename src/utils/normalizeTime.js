export function normalizeTime(time) {
  const newTime = new Date(time);
  const hours = newTime.getHours().toString().padStart(2, "0");
  const minutes = newTime.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}
