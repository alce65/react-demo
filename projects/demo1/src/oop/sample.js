// ES6 -> class

export class Person {
    name
    #age
    constructor(name) {
        this.name = name;
    }

     get age()  {
        return this.#age;
    }

    set age(value) {
        if (value < 0) {
            throw new Error('Age cannot be negative');
        }
        this.#age = value;
    }
}

const person = new Person('John Doe');
// console.log(person.name); // John Doe
