"use strict";
// ----------------------------------------------------------- Abstract Class - Example 01
// abstract class AbstractUser {
//     name: string = ''
//     login: string = ''
//     password: string = ''
//     abstract getUserName(): string
//     abstract showUserInfo(): void
// }
// class User extends AbstractUser {
//     getUserName(name?: string): string {
//         if (name !== undefined) {
//             this.name = name
//         }
//         return this.name
//     }
//     showUserInfo(): void { }
// }
// const user = new User()
// console.log(user.getUserName('Octo').toUpperCase())
// ----------------------------------------------------------- Abstract Class - Example 02
// abstract class AbstractUser {
//     name: string = ''
//     login: string = ''
//     password: string = ''
//     role: string = ''
//     abstract getUserName(): string
//     abstract showUserInfo(): void
//     abstract editMainEntity(): void
// }
// class User extends AbstractUser {
//     getUserName(): string {
//         return ''
//     }
//     showUserInfo(): void { }
//     editMainEntity(): boolean {
//         return false
//     }
// }
// class Admin extends AbstractUser {
//     getUserName(): string {
//         return ''
//     }
//     showUserInfo(): void { }
//     editMainEntity(): boolean {
//         return false
//     }
//     editCustomEntity() { }
// }
// const user = new User()
// -----------------------------------------------------------  Interface
// interface IPerson {
//     name: string
//     age: number
//     greet(): void
// }
// class Employee implements IPerson {
//     name: string
//     age: number
//     position: string
//     constructor(
//         name: string,
//         age: number,
//         position: string
//     ) {
//         this.name = name
//         this.age = age
//         this.position = position
//     }
//     greet() {
//         console.log(this.name, this.position, this.age)
//     }
// }
// const employee = new Employee('Octo', 38, 'admin')
// employee.greet()
// -----------------
// interface IPerson {
//     name: string
//     age: number
//     greet(): void
// }
// class Employee implements IPerson {
//     constructor(
//         public name: string,
//         public age: number,
//         private position: string  // private state
//     ) { }
//     greet() {
//         console.log(this.name, this.position, this.age, this.position)
//     }
// }
// const employee = new Employee('Octo', 38, 'admin')
// console.log(employee.name); 
// // console.log(employee.position); // <- private status [Error]
// employee.greet()
// ----------------------------------------------------------- Generics
// type PayloadType<T> = {
//     payload: T
// }
// type StringPayload = PayloadType<string>
// type User = { id: string, login: string }
// type UserPayload = PayloadType<User>
// -----------------
// type User = { id: number, name: string }
// type StringPayload = {
//     payload: string
// }
// type UserPayload = {
//     payload: User
// }
// type UsersPayload = {
//     payload: User[]
// }
// const getNameResponse: StringPayload = { payload: 'Jack Daniels' }
// const getMyUserResponse: UserPayload = { payload: { id: 1, name: 'Boss' } }
// const getMyUsersResponse: UsersPayload = {
//     payload: [
//         { id: 1, name: 'Boss' },
//         { id: 2, name: 'Employee' }
//     ]
// }
// -----------------
// type User = { id: number, name: string }
// type ErrorHandling = {
//     success: boolean,
//     error?: { message: string }
// }
// type PayloadType<XZ, N> = {
//     payload: XZ
//     numberOfTransaction: N
// } & ErrorHandling
// type StringPayload = PayloadType<string, number>
// type UserPayload = PayloadType<User, number>
// type UsersPayload = PayloadType<User[], bigint>
// const getNameResponse: StringPayload = { payload: 'Jack Daniels', success: true, numberOfTransaction: 1 }
// const getMyUserResponse: UserPayload = { payload: { id: 1, name: 'Boss' }, success: true, numberOfTransaction: 2 }
// const getMyUsersResponse: UsersPayload = {
//     payload: [
//         { id: 1, name: 'Boss' },
//         { id: 2, name: 'Employee' },
//         { id: 3, name: 'Octo' }
//     ], success: true,
//     numberOfTransaction: 3n
// }
// -----------------
// function identity<T>(items: T[]): T[] {
//     return items
// }
// const numbers = identity<number>([1, 2, 3, 4])
// console.log(numbers)
// const string = identity<string>(['a', 'b', 'c', 'd'])
// console.log(string)
// -----------------
// function modifyArr<T>(args: T[], concatValues: T[]): T[] {
//     return [...args, ...concatValues]
// }
// const numbers: number[] = [1, 2, 3, 4]
// console.log(modifyArr(numbers, [7, 7, 7, 7]))
// const names: string[] = ['Name #1', 'Name #2', 'Name #3']
// console.log(modifyArr(names, ['a', 's', 'df', 'fd']))
// ----------------------------------------------------------- Decorators
// function logClass(target: Function) {
//     console.log(`Target decoration is: ${target.name}`)
// }
// @logClass
// class Person {
//     constructor(
//         public name: string,
//         public age: number
//     ) { }
// }
// const person = new Person('Octo', 14)
// const personOther = new Person('Octo', 14)
// -----------------
// function uppercase(target: any, propertyKey: string) {
//     let value: string;
//     const getter = () => value;
//     const setter = (newValue: string) => {
//         value = newValue.toUpperCase();
//     };
//     Object.defineProperty(target, propertyKey, {
//         get: getter,
//         set: setter,
//         enumerable: true,
//         configurable: true,
//     });
// }
// class Person {
//     @uppercase
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
// }
// const person = new Person("Stacie");
// console.log(person.name);
// ----------------------------------------------------------- Namespace
// namespace Utilities {
//     export function maxArray(numbers: number[]): number {
//       return Math.max(...numbers);
//     }
//     export interface Logger {
//       log: (msg: string) => void;
//     }
//     export class ConsoleLogger implements Logger {
//       log(msg: string) {
//         console.log(msg);
//       }
//     }
//    }
//    const numbers: number[] = [1, 2, 3, 4, 5];
//    console.log(Utilities.maxArray(numbers));
//    const logger: Utilities.Logger = new Utilities.ConsoleLogger();
//    logger.log("Logging using method from namespace");
