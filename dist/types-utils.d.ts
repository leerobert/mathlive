/* v0.50.7-17-g3470679-dirty */
 * @internal
 */
declare type Filter<T, Cond, U extends keyof T = keyof T> = {
    [K in U]: T[K] extends Cond ? K : never;
}[U];
/**
 * @internal
 */
export declare type Keys<T> = Filter<T, Function> & string;
export {};