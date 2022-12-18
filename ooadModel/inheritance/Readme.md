Learning Management System (LMS)
This is a Learning Management System (LMS) that allows users to subscribe or be gifted a course prepared by a tutor or a business.

Classes
The following classes are defined in the code:

Person
The Person class is the base class for the User, Tutor, and Learnableclasses. It has a single attribute, name, which represents the name of the person.

User
The User class represents a user of the LMS. It inherits from the Person class and has a single method, viewCourse, which allows a user to view a course.

Tutor
The Tutor class represents a tutor who uploads and teaches courses on the LMS. It inherits from the Person class and has three methods:

uploadCourse, which allows a tutor to upload a new course
teachCourse, which allows a tutor to teach a course
gradeQuiz, which allows a tutor to grade a quiz
Business
The Learnableclass represents a Learnablethat can gift courses to users on the LMS. It inherits from the Person class and has a single method, giftCourse, which allows a Learnableto gift a course to a user.

Course
The Course class represents a course on the LMS. It has three attributes:

title, which represents the title of the course
description, which represents the description of the course
tutor, which represents the tutor
