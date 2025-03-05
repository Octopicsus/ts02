"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const TASK = 2;
switch (TASK) {
    case 1:
        function createPerson(name, age, isActive) {
            return {
                name,
                age,
                isActive
            };
        }
        const newPerson = createPerson('Олександр', 31, false);
        console.log(newPerson);
        break;
    case 2:
        function LogMethodCalls(target, propertyName, propertyDescriptor) {
            const descriptor = propertyDescriptor.value;
            console.log(`log -->  ${descriptor}`);
            propertyDescriptor.value = function (...inputArgs) {
                const result = descriptor.apply(this, inputArgs);
                console.log(` \n"Calling "${propertyName}" with arguments: ${inputArgs.join(', ')}" `);
                return `\nResult: ${result}\n`;
            };
            return propertyDescriptor;
        }
        class Calculator {
            add(a, b) {
                return a + b;
            }
            multiply(a, b) {
                return a * b;
            }
        }
        __decorate([
            LogMethodCalls
        ], Calculator.prototype, "add", null);
        __decorate([
            LogMethodCalls
        ], Calculator.prototype, "multiply", null);
        console.log('\n---------------------------------------------------\n');
        const calculator = new Calculator();
        // "Calling "add" with arguments: 2, 3"
        console.log(calculator.add(2, 3)); // 5
        // "Calling "multiply" with arguments: 3, 4"
        console.log(calculator.multiply(3, 4)); // 12
        console.log('\n---------------------------------------------------\n');
        break;
}
