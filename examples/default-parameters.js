// Not supported in Chrome yet

'use strict';
var x = 10;

function getParam() {
    return x++;
}

function defaultExample(a, b = 2, c = a * 3, d = getParam(), e = this) {
    // ES5, b = (b !== 'undefined') ? b: 2;
    console.log(`a=${a}, b=${b}, c=${c}, d=${d}, e=${e}`);
}

defaultExample(2);                // a=2, b=2, c=6, d=10, e=this
defaultExample(2, 3);             // a=2, b=3, c=6, d=11, e=this
defaultExample(2, 3, 4);          // a=2, b=3, c=4, d=12, e=this
defaultExample(2, 3, 4, 5);       // a=2, b=3, c=4, d=5, e=this
defaultExample(2, 3, 4, 5, 6);    // a=2, b=3, c=4, d=5, e=6
