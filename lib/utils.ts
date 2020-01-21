export function classes(...arr: any[]): string {
  // Remove blank classes, and concat
  return arr.filter(a => a).join(' ');
}
