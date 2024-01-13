export function delay(time: number = 10000) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
