
export interface Component {
state?: object,

/*TODO: hooks
mount?: function,
update?: function,
unmount?: function,
*/

/**
 * Markup examples:
 * ```javascript
 *markup: {
Hello: e(p, {
innerhtml: "Hello World!"
 }

 * ```
 */
dom?: string,
markup: string,
}

export function render(obj: object) {
document.querySelector(obj.dom).innerHTML = obj.markup