export function assertNotNull<T>(object: T, errorText: string): void {
  if (!object) {
    throw new Error(errorText);
  }
}
