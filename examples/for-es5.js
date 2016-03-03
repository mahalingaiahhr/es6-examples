'use strict';

var arr = [1, 3, 5, 7];

for (var i = 0; i < arr.length; i++) {
    var value = arr[i];
    console.log(value);
}

arr.forEach(function(value, key) {
    console.log(value);
});

arr.aProperty = 'Some property';

for ( var key in arr) {
    var value = arr[key];
    console.log(value);
}
