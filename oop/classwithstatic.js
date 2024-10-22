class Person {
    constructor(name, age, email, phoneNumber) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
    print(){
        console.log(`I am ${this.name}, my age is ${this.age}, my email is ${this.email} and phoneNumber is ${this.phoneNumber}`);
    }
    changeName (name){
        this.name = name;
    }
    static create (str) {
        let person = JSON.parse(str)
        return new Person(person.name, person.age, person.email, person.phoneNumber);
    }
}

// let p1 = new Person("Jahirul Islam", 20, "jahirulislam@gmail.com", 1773427087);
// console.log(p1)
// p1.print();
// p1.changeName("Jahirul Islam Jantu");
let str = '{"name":"Jahirul Islam Jantu", "age": "32", "email":"unchangedjahir@gmail.com", "phoneNumber":"01773427087"}'
let p2 = Person.create(str)
console.log(p2)