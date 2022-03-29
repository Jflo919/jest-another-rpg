const Potion = require('../lib/Potion.js');

test('creates a health potion object', () => {
    const potion = new Potion('health');

    expect(potion.name).toBe('health');
    expect(potion.value).toEqual(expect.any(Number));
})

// function Car(make, model) {
// this.make = make;
// this.model = model;   
//}

// new Car('Honda', 'Civic');
// const car = new Car('Honda', 'Civic');
// console.log(car);