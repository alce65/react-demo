/* eslint-disable @typescript-eslint/no-unused-vars */
export interface IAnimal {
  name: string;
  age: number;
  species: string;
  talk(): string;
  eat(food: string): void;
}

export type Animal = {
  name: string;
  age: number;
  species: string;
};

export const animal1: IAnimal = {
  name: 'Lion',
  age: 5,
  species: 'Panthera leo',
  talk: () => 'Roar',
  eat: (food: string) => {
    console.log(`Eating ${food}`);
  },
};

export const animal2: Animal = {
  name: 'Lion',
  age: 5,
  species: 'Panthera leo',
};

class Dog implements IAnimal {
  constructor(
    public name: string,
    public age: number,
    public species: string,
  ) {}

  talk(): string {
    return 'Woof';
  }

  eat(food: string): void {
    console.log(`Dod eating ${food}`);
  }
}

class Cat implements IAnimal {
  constructor(
    public name: string,
    public age: number,
    public species: string,
  ) {}

  talk(): string {
    return 'Meow';
  }

  eat(food: string): void {
    console.log(`Cat eating ${food}`);
  }
}

// Tipado estructural

const adopt = (pet: IAnimal): void => {
    console.log(`Adopting a ${pet.species} named ${pet.name}`);
}

adopt(new Dog('Rex', 3, 'Dog'));
adopt(new Cat('Mittens', 2, 'Cat'));

const adoptCat = (pet: Cat): void => {
    console.log(`Adopting a ${pet.species} named ${pet.name}`);
}

adoptCat(new Cat('Mittens', 2, 'Cat'));
adoptCat(new Dog('Rex', 3, 'Dog')); 
// Error: Argument of type 'Dog' is not assignable to parameter of type 'Cat'.
