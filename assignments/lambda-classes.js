// CODE here for your Lambda Classes

// Person
// First we need a Person class. This will be our base-class
// Person receives name age location all as props
// Person receives speak as a method.
// This method logs out a phrase Hello my name is Fred, I am from Bedrock where name and location are the object's own props

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

// Instructor
// Now that we have a Person as our base class, we'll build our Instructor class.
// Instructor uses the same attributes that have been set up by Person
// Instructor has the following unique props:
// specialty what the Instructor is good at i.e. 'redux'
// favLanguage i.e. 'JavaScript, Python, Elm etc.'
// catchPhrase i.e. Don't forget the homies
// Instructor has the following methods:
// demo receives a subject string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
// grade receives a student object and a subject string as arguments and logs out '{student.name} receives a perfect score on {subject}'

class Instructor extends Person {
    constructor(attributes) {
        super(attributes)
        this.speciality = attributes.speciality;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

// Student
// Now we need some students!
// Student uses the same attributes that have been set up by Person
// Student has the following unique props:
// previousBackground i.e. what the Student used to do before Lambda School
// className i.e. CS132
// favSubjects. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// Student has the following methods:
// listsSubjects a method that logs out all of the student's favoriteSubjects one by one.
// PRAssignment a method that receives a subject as an argument and logs out that the student.name has submitted a PR for {subject}
// sprintChallenge similar to PRAssignment but logs out student.name has begun sprint challenge on {subject}

class Student extends Person {
    constructor(attributes) {
        super(attributes)
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }
    listsSubjects() {
        console.log(`My favorite subjects are: ${this.favSubjects}.`);
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    }
}

// Project Manager
// Now that we have instructors and students, we'd be nowhere without our PM's
// ProjectManagers are extensions of Instructors
// ProjectManagers have the following unique props:
// gradClassName: i.e. CS1
// favInstructor: i.e. Sean
// ProjectManagers have the following Methods:
// standUp a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
// debugsCode a method that takes in a student object and a subject and logs out {name} debugs {student.name}'s code on {subject}

class ProjectManagers extends Instructor {
    constructor(attributes) {
        super(attributes)
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(slackChannel) {
        console.log(`${this.name} announces to ${slackChannel}, @channel "standy times!"`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const brett = new Instructor({
    name: 'Brett',
    location: 'Santa Barbara',
    age: 24,
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `Suppp fam`
});

const anahita = new Instructor({
    name: 'Anahita',
    location: 'Isla Vista',
    age: 20,
    favLanguage: 'Farsi',
    specialty: 'Physics',
    catchPhrase: `OOOOOOOOO`
});

const tyler = new Student({
    name: 'Tyler',
    location: 'Isla Vista',
    age: 25,
    previousBackground: 'worked as a dishwasher',
    className: 'CS101',
    favSubjects: ['crypto', ' business', ' economics']
});

const marissa = new Student({
    name: 'Marissa',
    location: 'Isla Vista',
    age: 19,
    previousBackground: 'lived at home',
    className: 'Econ105',
    favSubjects: ['writing', ' art', ' music']
});

const miguel = new ProjectManagers({
    name: 'Miguel',
    location: 'orange county',
    age: 26,
    favLanguage: 'C++',
    specialty: 'Sales',
    catchPhrase: `That's not awful`,
    gradClassName: 'cs19',
    favInstructor: 'Fred'
});

const jeff = new ProjectManagers({
    name: 'Jeff',
    location: 'Underrock',
    age: 25,
    favLanguage: 'Gibberish',
    specialty: 'HaDoop',
    catchPhrase: `Where yall at?`,
    gradClassName: 'cs7',
    favInstructor: 'Anahita'
});

jeff.speak();
brett.speak();
fred.demo('Chemistry');
anahita.demo('Physics');
brett.grade(marissa, 'Economics');
marissa.listsSubjects();
tyler.PRAssignment('crypto');
tyler.sprintChallenge('compSci');
jeff.standUp('Web25');
miguel.debugsCode(tyler, 'crypto');



