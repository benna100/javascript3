console.log('Script loaded');

/*
setTimeout(() => {
    //console.log('2 seconds has elapsed');
}, 2000);



const promise = new Promise((resolve) => {
    setTimeout(() => {
        //console.log('resolve');
        resolve();
    }, 2000);
});

promise
    .then(() => {
        //console.log('.then');
        //console.log('2 seconds has elapsed');
    });


// there are two sides of a promise:
// We promise to give something back
// Creation part:
const waitTwoSecondsPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 2000);
});


// Usage part
waitTwoSecondsPromise
    .then(() => {

    })
    .catch(() => {

    });

const bringMeSomePizza = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('🍕');
    }, 2000);
});

bringMeSomePizza
    .then((data) => {
        // console.log(`${data} has arrived`);
    });

const moviesUrl = 'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json';
const getMoviesPromise = fetch(moviesUrl);
// console.log(getMoviesPromise);

getMoviesPromise
    .then((data) => {
        data
            .json()
            .then((movieList) => {
                bringMeSomePizza
                    .then((data) => {
                        // console.log(data);
                        getMoviesPromise
                            .then((data) => {
                                data
                            });
                    });

            });
    })
    .catch((error) => {
        // console.log(error);
    });



const bringmeFood = function(food) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(food);
        }, 5000);
    });
}


const bringMeBread = bringmeFood('bread');
//console.log(bringMeBread);
/*
const test = bringMeBread
    .then((food) => {
        console.log(food);
        const bringMePotato = bringmeFood('Potato');
        
        return bringMePotato;
    })
    .then(() => {
        const bringMeStrawberry = bringmeFood('Strawberry');
        
        return bringMeStrawberry;
    })
    .then(() => {
        console.log(2);
    })
    .then(() => {
        console.log(3);
    });
    */
/*
waitTwoSecondsPromise
    .then(() => {
        const moviesPromise = fetch(moviesUrl);
        console.log(moviesPromise);
    
        return moviesPromise;
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);

        return bringMeSomePizza;
    })
    .then((pizza) => {
        console.log(pizza);
    });


/*

    .then((potato) => {
        console.log(potato);
    });
*/


// Closures


function adderFactory(x) {
    return n => n + x;
}

const divisibleByFive = divisibleByFactory(5);
console.log(divisibleByFive(3));


const addFive = adderFactory(5);
console.log(addFive(3));

function createCounter(initialValue) {
    let counter = initialValue;
    
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


const counterTen = createCounter(10);

console.log(counterTen.get());
counterTen.decrease();
console.log(counterTen.get());
counterTen.decrease();
counterTen.decrease();
counterTen.decrease();
console.log(counterTen.get());

counterTen.increase();
console.log(counterTen.get());




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
console.log(javascript3.getStudents());