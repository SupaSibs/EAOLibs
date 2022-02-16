"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = exports.e = void 0;
function e(type, props) {
    let el = document.createElement(type);
    let keys = Object.keys(props);
    for (let i = 0; i < keys.length; i++) {
        el[props[keys[i]]] = props[keys[i]];
    }
    return el;
}
exports.e = e;
function render(obj) {
    let keys = Object.keys(obj.markup);
    for (let i = 0; i < keys.length; i++) {
        document.querySelector(obj.dom).appendChild(obj.markup[keys[i]]);
    }
}
exports.render = render;
