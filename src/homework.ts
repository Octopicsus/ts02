
// ------- TASK 01


interface PersonInterface {
    name: string
    age: number
    isActive: boolean
}

function createPerson(name: string, age: number, isActive: boolean): PersonInterface {
    return {
        name,
        age,
        isActive
    }
}

const newPerson = createPerson('Олександр', 31, false)
console.log(newPerson)





// ------- TASK 02


function LogMethodCalls(target: any, propertyName: string, propertyDescriptor: PropertyDescriptor): PropertyDescriptor {

    const descriptor = propertyDescriptor.value

    // console.log(`log -->  ${descriptor}`)

    propertyDescriptor.value = function (...inputArgs: any[]): string | number {

        const result = descriptor.apply(this, inputArgs)

        console.log(` \n"Calling "${propertyName}" with arguments: ${inputArgs.join(', ')}" `)

        return `\nResult:  ${result}\n\n--- \n`
    }

    return propertyDescriptor
}


class Calculator {

    @LogMethodCalls
    add(a: number, b: number): number {
        return a + b
    }

    @LogMethodCalls
    multiply(a: number, b: number): number {
        return a * b
    }
}


console.log('\n-----------------------------------------\n')

const calculator = new Calculator()

// "Calling "add" with arguments: 2, 3"
console.log(calculator.add(2, 3)) // 5

// "Calling "multiply" with arguments: 3, 4"
console.log(calculator.multiply(3, 4)) // 12

console.log('\n-----------------------------------------\n')





// ------- TASK 03


namespace UserProfile {

    export interface IProfileInterface {
        id: string;
        name: string;
        email: string;
    }

    function generateId(): string {

        // const myNumber = 23345

        // const random = myNumber.toString(2)

        // console.log(random)

        return Math.random().toString(36).substring(2, 13)
    }

    export function createProfile(name: string, email: string): IProfileInterface {
        return {
            id: generateId(),
            name,
            email
        };
    }
}


const profile = UserProfile.createProfile('John Doe', 'john@example.com')
console.log(profile)

// { "id": "e6uvai5egqd", "name": "John Doe", "email": "john@example.com" }


