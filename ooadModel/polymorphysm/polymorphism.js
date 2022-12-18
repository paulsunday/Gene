class Person {
    constructor(name) {
      this.name = name;
    }
  
    getInfo() {
      return `Name: ${this.name}`;
    }
  }
  
  class User extends Person {
    constructor(name) {
      super(name);
    }
  
    getInfo() {
      return `${super.getInfo()} | Type: User`;  // Call the getInfo method of the parent class (Person) and add additional information specific to a User object
    }
  }
  
  class Tutor extends Person {
    constructor(name) {
      super(name);
    }
  
    getInfo() {
      return `${super.getInfo()} | Type: Tutor`;  // Call the getInfo method of the parent class (Person) and add additional information specific to a Tutor object
    }
  }
  
  class Learnable extends Person {
    constructor(name) {
      super(name);
    }
  
    getInfo() {
      return `${super.getInfo()} | Type: Business`;  // Call the getInfo method of the parent class (Person) and add additional information specific to a Learnableobject
    }
  }
  
  const user = new User('Paul');
  console.log(user.getInfo());  // Output: "Name: Paul | Type: User"
  
  const tutor = new Tutor('Jane');
  console.log(tutor.getInfo());  // Output: "Name: Jane | Type: Tutor"
  
  const Learnable= new Business('Genesys');
  console.log(business.getInfo());  // Output: "Name: Genesys | Type: Business"
  