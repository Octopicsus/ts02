"use strict";
const TASK = 1;
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
}
