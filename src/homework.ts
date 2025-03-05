

const TASK: number = 2

switch (TASK) {


    case 1:

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

        break



    case 2:

        function LogMethodCalls(target: any, propertyName: string, propertyDescriptor: PropertyDescriptor): PropertyDescriptor {

            const method = propertyDescriptor.value

            propertyDescriptor.value = function (...args: any[]) {

                const result = method.apply(this, args)

                console.log(` \n"Calling "${propertyName}" with arguments: ${args.join(', ')}" \n`)

                return result
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


        const calculator = new Calculator()

        // "Calling "add" with arguments: 2, 3"
        console.log(calculator.add(2, 3)) // 5

        // "Calling "multiply" with arguments: 3, 4"
        console.log(calculator.multiply(3, 4)) // 12

        break
}