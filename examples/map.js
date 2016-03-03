'use strict';

let map = new Map();
map.set('name', 'Maha');
map.set('age', 25);

console.log('Size of map: ' + map.size);

for (let value of map.values()) {
    console.log(value);
}

for (let key of map.keys()) {
    console.log(key);
}

console.log(map.has('age'));    // true
console.log(map.get('age'));    // 25

map.delete('name');
console.log(map.has('name'));   // false
console.log(map.get('name'));   // undefined
console.log('Size after delete: ' + map.size);        // 1
map.clear();
console.log('Size after clear: ' + map.size);
