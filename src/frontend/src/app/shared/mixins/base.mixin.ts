
export type Constructor<T = {}> = new(...args: any[]) => T;

// export function Mixins(...types: ((Constructor) => Constructor)[]) {
//   return types.reduce((a, b) => b(a), BaseMixin) as Constructor;
// }

export class BaseMixin {}
