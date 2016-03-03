'use strict';

function makeCar(maker, model, value) {
    const valueKey = 'value';
    const appreciateKey = 'appreciate';

    var getPropertyName = function() {
        return 'price';
    };

    function getModel() {
        return model;
    }

    return {
        __proto__: {owner: 'Tom from proto'},
        maker,  // same as maker: maker
        model, // same as model: model
        _value: value,
        getModel,

        // computed property keys
        ['dynamic' + (1 + 2)]: true,
        [getPropertyName()]: value,
        [appreciateKey]() {
            this.value += 1000;
        },

        get value() {
            return this._value;
        },

        // computed property keys also work with getters and setter
        set [valueKey](val) {
            this._value = val;
        },

        // duplicate property
        prop: 1,
        prop: 2
    };
}

var car = makeCar('Maruti', 'Suzuki', 40000);

console.log(JSON.stringify(car));
console.log('Car.owner: ' + car.owner); // inherited from __proto__
console.log('Car.getModel: ' + car.getModel());
car.appreciate();
console.log('Price after appreciation: ' + car.value); // 41000
