// First explain the callback queue with http://latentflip.com and a simple setTimeout
setTimeout(() => {
    //console.log('hello');
}, 2000);

// promises
// Promises are a software abstraction that makes working with asynchronous operations much more pleasant.
// The point of promises is to give us back functional composition and error bubbling in the async world
// The Promise object represents the eventual completion (or failure) 
// of an asynchronous operation, and its resulting value.

// no reject! Focus
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve();
    }, 2000);
});

promise.then(() => {
    console.log('2 seconds have elapsed');
});


// There are two sides to a promise. The creation part and the usage part:
// This is like with functions. There is a creation part and a usage part. 
// How does the creation part of a function look like? And what about the usage part?

// 1. The creation part of a promise:
const promise = new Promise((resolve) => {

});

// 2. The usage part of a promise:
promise.then(() => {

});


// explain reject function and returns.
const bringMeSomePizza = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('🍕');
        // resolve('pizza');
    }, 2000);
});


bringMeSomePizza
    .then((result) => {
        //console.log(result);
    })
    .catch(() => {
        //console.log('error');
    });

const test = fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json', {
    method: 'get'
});
test.then((data) => {
    const convertToJson = data.json();
    convertToJson.then((data) => {
        console.log(data);
    });
});


// What if we want more promises after each other. NO CHAINING! First manually
/* Exercise 1 */

// Teenager function
function bringMeFood(food) {
    //console.log(`Bring me some ${food}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(food);
        }, 1000);
    });
}

const bringMeBread = bringMeFood('bread');


// A call to promise.then returns a promise, so that we can call the next .then on it.
bringMeBread
    .then((food) => {
        //console.log(`Eating delicious ${food}`);
        return bringMeFood('cake');
    })
    .then((food) => {
        //console.log(`Eating delicious ${food}`);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 3000);
        })
    })
    .then(() => {
        throw 1;
        //console.log('stuff');
    })
    .catch(() => {
        //console.log('error');
    });


setTimeout(() => {
    //console.log('3');

    setTimeout(() => {
        //console.log('3');

        setTimeout(() => {
            //console.log('3');

            setTimeout(() => {
                //console.log('3');

                setTimeout(() => {
                    //console.log('3');
                }, 3000);
            }, 3000);
        }, 3000);
    }, 3000);
}, 3000);


function promiseTimeout() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //console.log('3 promise');
            resolve();
        }, 3000);
    })
}


// optimize
promiseTimeout()
    .then(() => {
        return promiseTimeout();
    })
    .then(() => {
        return promiseTimeout();
    })
    .then(() => {
        return promiseTimeout();
    })
    .then(() => {
        return promiseTimeout();
    });








function getAjaxDataPromise(url) {
    return new Promise((resolve, reject) => {
        // Create new ajax call with the js function called XMLHttpRequest
        const request = new XMLHttpRequest();
        request.addEventListener('load', function () {
            // This in here is our callback function
            // Check our server responsecode, 200 means ok, success: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes 
            if (this.status === 200) {
                resolve(JSON.parse(request.responseText));
            } else {
                reject('Something is probably wrong with the url');
            }
        });

        request.addEventListener('error', function () {
            reject('Server error like timeout');
        });

        // initializes a request with an http method
        request.open("GET", url);
        // Sends the request 
        request.send();
    });
}



getAjaxDataPromise('https://api.spacexdata.com/v2/launches')
    .then((data) => {
        console.log(data);
        return data;
    })
    .then((data) => {
        return promiseTimeout();
    })
    .then(() => bringMeFood('shrimp'))
    .then((food) => {
        console.log(food);
        console.log('done');
    });

fetch('https://api.spacexdata.com/v2/launches')
    .then(function(response) {
        console.log(response);
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson);
    });


/*
timeoutPromise1
    .then(getMovies)
    .then(getMovieGifs)
    .then(processMovie);
*/

// maybe mention all











// Closures


// Closures

// global scope
function adderFactory(n) {
    // Scope A
    return number => n + number;
}

// function has finished.
const addFive = adderFactory(5);
//  But js remembers the 5. The remembering part is thanks to closures. The closures give the function access to the variable.
const addFive(10);


function createCounter(initialNumber) {
    let counter = initialNumber;
    return {
        increase: () => {
            counter++;
        },
        decrease: () => {
            counter--;
        },
        get: () => {
            return counter;
        }
    }
}

const counter = createCounter(10);
console.log(counter.get());
counter.increase();
console.log(counter.get());


/* It is smart because we have private variables. Closed scope*/

/*
function Student() {
    let name;
    return {
        getName() {
            return name;
        },
        setName(newName) {
            name = newName;
        },
        age: 9,
    }
}

//const person = makePerson();
//console.log(person);
//console.log(person.getName());


const peter = Student('peter');
console.log(peter.getName());

const benjamin = Student('benjamin');
console.log(benjamin.getName());
console.log(benjamin.setName('julie'));
console.log(benjamin.getName());
benjamin.age = 10;
console.log(benjamin);

// Lets make a Hack your future class factory
// The missing functions are exercises
// Extra exercise use the student factory to use in the createClass function

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
    }
}


const javascript3 = createClass(['Ahmad', 'Jenny', 'Børge'], '3A', '12-16');

console.log(javascript3.getTime());
console.log(javascript3.getNumberOfStudents());
javascript3.addStudent('Birger');
*/