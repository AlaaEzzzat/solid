export const Lexample = {
  ts1: `interface Animal {
    makeSound(): void;
  }
  
  class Dog implements Animal {
    makeSound() {
      console.log('Bark!');
    }
  }
  
  class Cat implements Animal {
    makeSound() {
      console.log('Meow!');
    }
  }
  `,
  ts2: ` function makeAnimalSound(animal: Animal) {
    animal.makeSound();
  }`,
  ts3: `  const myDog = new Dog();
  const myCat = new Cat();
  
  makeAnimalSound(myDog); // Output: "Bark!"
  makeAnimalSound(myCat); // Output: "Meow!"`,
};
