export const Dexample = {
  ts1: `interface AnimalInterface {
        speak(): void;
      }
      
      class Dog implements AnimalInterface {
        speak() {
          console.log(Dog barks.);
        }
      }
      
      class Cat implements AnimalInterface {
        speak() {
          console.log(Cat meows.);
        }
      }
      
      class Zoo {
        constructor(private animals: AnimalInterface[]) {}
      
        addAnimal(animal: AnimalInterface) {
          this.animals.push(animal);
        }
      
        makeAllAnimalsSpeak() {
          this.animals.forEach((animal) => animal.speak());
        }
      }`,
  ts2: `class Bird implements AnimalInterface {

        speak() {
          console.log(Tweety tweets.);
        }
      }
      
      const myZoo = new Zoo([]);
      myZoo.addAnimal(new Dog());
      myZoo.addAnimal(new Cat());
      myZoo.addAnimal(new Bird());
      myZoo.makeAllAnimalsSpeak();
      // Output: "Dog barks.", "Cat meows.", "Tweety tweets."`,
};
