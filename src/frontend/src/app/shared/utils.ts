export function assertNotNull<T>(object: T, errorText: string): void {
  if (!object) {
    throw new Error(errorText);
  }
}

export function instantiate<T>(ctor: new () => T): T {
  return new ctor();
}
