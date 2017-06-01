/**
 * This file is for test the call(), apply(), bind() of EA5-6.
 * Elliot Liu (aisnote@gmail.com)
 * :)- using visual studio code, Node.js to debug.
 */

function printName(label) {
    console.log(label + ":" + this.name);
}

var person1 = {
    name: "person1.name"
}

var person2 = {
    name: "person2.name"
}

var name = "globalName";

printName.call(person1, "person1"); // will print person1:person1.name
printName.call(person2, "person2"); // will print person2:person2.name
printName.call(this, "globalName"); // will print on Chrome and FF: globalName:globalName

/**
 * test apply(): arguments need passed by [] 
 */
printName.apply(person1, ["person1"]); // will print person1:person1.name
printName.apply(person2, ["person2"]); // will print person2:person2.name
printName.apply(this, ["globalName"]); // will print on Chrome and FF: globalName:globalName

/**
 * test bind()
 */
var printNameForPerson1 = printName.bind(person1);
printNameForPerson1("person1"); // print: person1:person1.name

var printNameForPerson2 = printName.bind(person2);
printNameForPerson2(); // print: undefined:person2.name

var printNameForPerson22 = printName.bind(person2, "persion2"); // add param
printNameForPerson22(); // print: persion2:person2.name

person2.printName = printNameForPerson1;
person2.printName("person2"); // print: persion2:persion1.name