// class Person {
//     #name; //defined Private Variable
//     constructor(name) {
//         this.#name = name;
//     }
//     get name() {
//         return this.#name;
//     }
//     set setName(newName) {
//         if(newName) {
//             this.#name = newName;
//         } else {
//             console.log("New name cannot be empty");
//         }
//     }
// }

// //console.log(#name); -> cannot be accessed outside class - gives SyntaxError.

// const person = new Person('Chetan');
// console.log(person.name);

// person.setName = '';
// console.log(person.name);

class User {
    #logAccess() {
        console.log("Private Logging...");
    }

    showProfile() {
        console.log("showProfile...");
        this.#logAccess();
    }
}

const u = new User();
u.showProfile();


