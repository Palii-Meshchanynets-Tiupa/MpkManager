
export type Constructor<T = {}> = new(...args: any[]) => T;

export class MixinBase {}

// export function Mixin(...baseCtors: Function[]) {
//   return function (derivedCtor: Function) {
//     baseCtors.forEach((baseCtor) => {
//       const fieldCollector = {};
//       baseCtor.apply(fieldCollector);
//       Object.getOwnPropertyNames(fieldCollector).forEach((name) => {
//         derivedCtor.prototype[name] = fieldCollector[name];
//       });
//
//       Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
//         if (name !== 'constructor') {
//           derivedCtor.prototype[name] = baseCtor.prototype[name];
//         }
//       });
//     });
//   };
// }
