// ES6 -> class

export class Person {

    private static _lastId = 0
    private static get lastId(): number {
        return ++Person._lastId;
    }
    static getLastId(): number {
        return Person._lastId;
    }

    id: number; 
    //name: string;
     #region
    constructor(public name: string, private _age: number, region: string ) {
        this.id = Person.lastId
        //this.name = name;
        this.#region = region;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        if (value < 0) {
            throw new Error('Age cannot be negative');
        }
        this._age = value;
    }

    greeting(): string {
        return `Hello, my name is ${this.name} and I am ${this._age} years old. Soy de ${this.#region}`;
    }
}

const person = new Person('John Doe', 30, 'Argentina');
console.log(person.name); // John Doe
console.log(person.age); // 30
person.name = 'Jane Doe'; 
person.age = 13; 
console.log(person.greeting()); // Hello, my name is Jane Doe and I am 13 years old. Soy de Argentina

class Student extends Person {
    constructor(name: string, _age: number, _region: string, public studentId: number) {
        super(name, _age, _region);
           }

    override greeting(): string {
        return super.greeting() + ` y mi id es ${this.studentId}`;
    }
}

const student = new Student('John Doe', 30, 'Argentina', 12345);
console.log(student.name); // John Doe