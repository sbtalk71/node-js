function Animal(name) {
    this.name = name;
   /*  this.talk = function () {
        console.log(this.name + " Talking");
    }; */
}

Animal.prototype.talk = function () {
    console.log(this.name + " Talking");
};
let cat = new Animal('Tom');
let dog = new Animal('Fido');

console.log(cat);
console.log(dog);

function Cat(name){
    Animal.call(this,name);
}
Cat.prototype=Object.create(Animal.prototype);

let catalina=new Cat('catalina');
console.log(catalina.talk());
console.log(Cat.prototype);







