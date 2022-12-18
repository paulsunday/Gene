class MyClass {
    // static property
    static myStaticProp = 'static property';
  
    // static method
    static myStaticMethod() {
      console.log('I am a static method');
    }
  
    // instance property
    myProp = 'instance property';
  
    // instance method
    myMethod() {
      console.log('I am an instance method');
    }
  }
console.log(MyClass.myStaticProp); // output: "static property"
MyClass.myStaticMethod(); // output: "I am a static method"
const myClassInstance = new MyClass();

console.log(myClassInstance.myProp); // output: "instance property"
myClassInstance.myMethod(); // output: "I am an instance method"
