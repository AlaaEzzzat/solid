// export const Iexample = {
//   ts1: `interface Animal {
//         eat(): void;
//         sleep?(): void;
//         makeSound?(): void;
//       }

//       class Dog implements Animal {
//         eat() {
//           console.log('The dog is eating.');
//         }
//       }

//       class Cat implements Animal {
//         eat() {
//           console.log('The cat is eating.');
//         }

//         makeSound() {
//           console.log('Meow!');
//         }
//       }`,
//   ts2: `function feedAnimal(animal: Animal) {
//     animal.eat();
//   }`,
//   ts3: `const myDog = new Dog();
//   const myCat = new Cat();

//   feedAnimal(myDog); // Output: "The dog is eating."
//   feedAnimal(myCat); // Output: "The cat is eating."`,
// };
export const Iexample = {
  ts: `export interface UnitLocation {
        group: string;
        building: string;
        unit: string;

        paidAmount?: number;
        paymentMethodId?: number;
        paymentTypeId?: number;

        id?: number;
        attachmentDTOList?: Attachment[];
      }`,
  ts1: `export interface UnitLocation {
    group: string;
    building: string;
    unit: string;
  }
      `,
  ts2: `import { UnitLocation } from './unit-location';
      export interface Payment extends UnitLocation {
        paidAmount: number;
        paymentMethodId: number;
        paymentTypeId: number;
      }`,
  ts3: `import {  UnitLocation } from './unit-location';
      export interface UnitRequest extends UnitLocation{
        id: number;
        attachmentDTOList: Attachment[];
      }`,
};
