const immutable = {};

function define(name, value) {
    Object.defineProperty(immutable, name, {
        value: value,
        writable: false,
        enumerable: true,
    });
}

define("OPEN", "OPEN");
define("SINGLE", "SINGLE");
define("MULTI", "MULTI");

Object.freeze(immutable);

export const types = immutable;
