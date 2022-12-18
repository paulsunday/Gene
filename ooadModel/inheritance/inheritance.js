class Person {
    constructor(name) {  // Constructor function to set the name property of a Person object
      this.name = name;
    }
  }
  
  class User extends Person {  // User class that inherits from the Person class
    constructor(name) {
      super(name);  // Call the constructor of the parent class (Person) using the super keyword
    }
  
    viewCourse(course) {  // Method to allow a user to view a course
      console.log(`${this.name} is viewing ${course.title}`);  // Output a message indicating which user is viewing which course
    }
  }
  
  class Tutor extends Person {  // Tutor class that inherits from the Person class
    constructor(name) {
      super(name);  // Call the constructor of the parent class (Person) using the super keyword
    }
  
    uploadCourse(title, description) {  // Method to allow a tutor to upload a new course
      return new Course(title, description, this);  // Create a new Course object and return it
    }
  
    teachCourse(course) {  // Method to allow a tutor to teach a course
      console.log(`${this.name} is teaching ${course.title}`);  // Output a message indicating which tutor is teaching which course
    }
  
    gradeQuiz(quiz) {  // Method to allow a tutor to grade a quiz
      console.log(`${this.name} is grading ${quiz.title}`);  // Output a message indicating which tutor is grading which quiz
    }
  }
  
  class Learnable extends Person {  // Learnableclass that inherits from the Person class
    constructor(name) {
      super(name);  // Call the constructor of the parent class (Person) using the super keyword
    }
  
    giftCourse(course, user) {  // Method to allow a Learnableto gift a course to a user
      console.log(`${this.name} is gifting ${course.title} to ${user.name}`);  // Output a message indicating which Learnableis gifting which course to which user
    }
  }
  
  class Course {  // Class to represent a course
    constructor(title, description, tutor) {  // Constructor function to set the title, description, and tutor properties of a Course object
      this.title = title;
      this.description = description;
      this.tutor = tutor;
    }
  }
  
  class Quiz {  // Class to represent a quiz
    constructor(title, questions) {  // Constructor function to set the title and questions properties of a Quiz object
      this.title = title;
      this.questions = questions;
    }
  }
  
  const student = new User('Paul');  // Create a new User object with the name "Paul"
  const tutor = new Tutor('Jane');  // Create a new Tutor object with the name "Jane"
  const Learnable= new Business('Genesys');  // Create a new Learnableobject with the name "Genesys"
  
  const course = tutor.uploadCourse('JavaScript Fundamentals', 'Learn the basics of JavaScript');  // Create a new Course object using the uploadCourse method of the Tutor class
  student.viewCourse(course);  // Call the viewCourse method of the User class to allow
  

// Why I Used Abstraction
// In object-oriented programming, abstraction is a technique used to focus on essential features and hide unnecessary details. It is useful for simplifying complex systems and making them more modular and maintainable.

// In the code you provided, the constructor functions of the Person, Course, and Quiz classes are marked as private, which means that they are only accessible within the class itself. This is an example of abstraction, as it hides the implementation details of these classes from other parts of the system and allows them to be used in a more modular and flexible way.

// By using abstraction in this way, you can ensure that the internal details of these classes are not tightly coupled with other parts of the system, which makes it easier to change or modify them without affecting the rest of the system. This can help make your code more maintainable and scalable over time.

// Overall, the decision to use abstraction in this code was likely made in order to make the system more modular and flexible, and to reduce the risk of changes in one part of the system cascading to other parts.