'use strict';
var iterable = {
    [Symbol.iterator]() {
        return {
            count: 5,
            next: function() {
                return this.count > 0 ? {done: false, value: this.count--} : {done: true, value: undefined};
            }
        };
    }
};

for (let val of iterable) {
    console.log(val);
}
