// Exercise


// Exercise 1
// Do Q1, Q2, Q4, Q7, Q8
// https://github.com/C4Q/AC3.1/blob/master/lessons/javascript-advanced/object-prototypes/this-keyword-exercises.md

// Exercise 2
// We continue with the createClass example
// Now instead of students just being represented by a name
// They should be represented by an object with the following properties:
/*
Name, age, wallet, grade

And the following methods:
AddMoneyToBalance
changeName
changeAge
checkBalance

And another object:
Wallet properties
balance
transactions
*/

const wallet1 = {
    balance: 
}

const wallet2 = {
    balance: 
}

const student1 = {
    name: 'benjamin',
    wallet: wallet,
    changeName() {

    }
}

const student2 = {
    name: 'benjamin',
    wallet: wallet,
    changeName() {

    }
}

createClass([student1, student2])

function createClass(students, roomNumber, time) {
    return {
        addStudent(name) {
            students.push(name);
        },
        removeStudent(name) {

        },
        removeAllStudents() {
            
        },
        getStudents() {
            return students;
        },
        getNumberOfStudents() {
            return students.length;
        },
        getTime() {
            return time;
        },
        changeTime() {

        },
        isStudentInClass() {

        },
        checkIfStudentHasEnoughMoney() {

        },
        sendWarningIfNotEnoughBalance() {
            // go through all students and check their balance. 
        },
        getTotalGrading() {

        },
    }
}

// Add some students


/*
Exercise 3

ONLY using promises!

Send a fetch request to https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json the same time you send a request to https://www.reddit.com/r/ProgrammerHumor.json

When they have both returned log out the results and then wait for 3 seconds. Using chaining.

*/
