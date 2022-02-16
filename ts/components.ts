export function e(type: string, props: object) {
	let el: HTMLElement = document.createElement(type);
	let keys: Array<string> = Object.keys(props)
for (let i = 0; i < keys.length; i++) {
el[props[keys[i]]] = props[keys[i]];
}

return el;
}

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
dom: string
markup: object,
}

export function render(obj: any) {
	let keys = Object.keys(obj.markup)
for(let i = 0; i < keys.length; i++) {
document.querySelector(obj.dom).appendChild(obj.markup[keys[i]])
}
}


