//Simple Inheritance

class A {
    constructor(name) {
        this.name = name;
    }
}

class B extends A {
    getDetails() {
        return `Here is ${this.name}`;
    }
}

const obj = new B("RKCH");
console.log(obj.getDetails());

//Multiple Inheritance -> it is not achievable in JS and can be achieved using mixins
//Below is the example

class Animal {
    eat() {
        console.log("Eating");
    }
}

const Flying = (Base) => class extends Base {
    fly() {
        console.log("flying");
    }
}

class Bird extends Flying(Animal) {
    bird() {
        console.log("Bird is flying");
    }
}

const myBird = new Bird();
myBird.fly();
myBird.eat();
myBird.bird();

//Multi-level Inheritance

class A {
    sayA(){
        console.log("A class");
    }
}

class B extends A {
    sayB() {
        console.log("B class");
    }
}

class C extends B {
    sayC() {
        console.log("C class");
    }
}

const obj = new C();
obj.sayA();
obj.sayB();
obj.sayC();