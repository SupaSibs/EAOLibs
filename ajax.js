"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ajax = void 0;
exports.ajax = {
    get: (url, callback) => {
        return (fetch(url)
            .then(callback()));
    },
    post: (url, header, body, callback) => {
        return (fetch(url, {
            method: "POST",
            headers: header,
            body: JSON.parse(body),
        })
            .then(callback));
    },
    json: (url) => {
        return (fetch(url)
            .then(res => res.json())
            .then(json => JSON.parse(json)));
    }
};
