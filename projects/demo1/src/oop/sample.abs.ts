// ES6 -> class

export abstract class Person {

    private static _lastId = 0
    private static get lastId(): number {
        return ++Person._lastId;
    }

    id: number; ;
    constructor(public name: string, private _age: number  ) {
        this.id = Person.lastId
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

    greet(): string {
        return `Hello, my name is ${this.name} and I am ${this._age} years old.`;
    }

    abstract register(): Record<string, number>

}


class Student extends Person {
    constructor(name: string, _age: number, public course: string) {
        super(name, _age,);
           }

    override greet(): string {
        return super.greet() + ` y mi curso es ${this.course}`;
    }

    register(): Record<string, number> {
        return {student: this.id};
    }
}

class Teacher extends Person {
    constructor(name: string, _age: number, public course: string) {
        super(name, _age,);
           }

    override greet(): string {
        return super.greet() + ` y mi curso es ${this.course}`;
    }

    register(): Record<string, number> {
        return {teacher: this.id};
    }
}

const student = new Student('John Doe', 30, 'Typescript');
console.log(student.name); // John Doe
const teacher = new Teacher('John Doe', 30, 'Typescript');
console.log(teacher.name); // John Doe