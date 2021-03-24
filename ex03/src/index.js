class Person {
    static display() {
    console.log("Static method is invoked from Person class");
  }
  
}

var message = new Person();
message.show();
module.exports = Person;
