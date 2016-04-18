/*!
 * ts-polyfills - https://github.com/nabijaczleweli/ts-polyfills
 * MIT license - https://opensource.org/licenses/MIT
 * nabijaczleweli - http://nabijaczleweli.xyz
 * @preserve
 */

interface Array<T> {
  /** Removes the first element for which the predicate is true. Returns the removed item or undefined.
    * @param predicate delete calls predicate once for each element of the array, in ascending
    * order, until it finds one where predicate returns true. If such an element is found, delete
    * immediately removes and returns that element. Otherwise, remove returns undefined.
    * @param thisArg If provided, it will be used as the this value for each invocation of
    * predicate. If it is not provided, undefined is used instead.
    */
  remove(predicate: (value: T, index: number, array: Array<T>) => boolean, thisArg?: any): T;
}
