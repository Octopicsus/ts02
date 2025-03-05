

const TASK: number = 1

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
}