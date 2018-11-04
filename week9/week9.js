console.log('script loaded');

const hej = "asd";



/*
Feedback for homework
const movies = [{
        name: 'Angry Men ',
        rating: 1,
    }, {
        name: '12 suns',
        rating: 6,
    }, {
        name: 'Sunshine',
        rating: 3,
    },
];

// use the right function
movies.forEach((movie) => {
    movie.tag = 'Good';
});

const taggedMovies = movies.map((movie) => {
    return {
        ...movie,
        tag: 'good', 
    };
});

console.log(taggedMovies);

console.log(movies);

// no side effects in functions
function renderList(list) {
    const body = document.querySelector('body');

    let movieNames = '';
    list.forEach((listElement) => {
        movieNames += listElement.name;
    });

    body.innerHTML = movieNames;

}


function removeInnerHtmlOnClik(text) {
    
    body.addEventListener('click', () => {
        body.innerHTML = text;
    });
}

renderList(movies);
removeInnerHtmlOnClik('hello');

*/






//hello = 'hello';
//var hello = 'hello';


console.log(this);


/*
The this keyword evaluates to:
1. Global scope: window
2. Function scope: 
2.1 If called on an object this evaluates to the object
2.2 called thorugh special functions like bind, call, apply, see documentation
2.3 In other cases this evalueates to window
2.4 arrow function: this keyword is taken from the enclosing scope
*/

/*
function setBodyTextColor(color) {
  this.body.style.color = color;
}

document.setBodyTextColor = setBodyTextColor;
document.setBodyTextColor("green");
document.setBodyTextColor("blue");

function getBodyTextColor(){
  return this.body.style.color;
}
/*
const testObj = {
    body: {
        style: {
            color: 'red',
        }
    }
    getBodyTextColor: getBodyTextColor,
}
*/
/*
getBodyTextColor();
document.getBodyTextColor = getBodyTextColor;
//console.log(document.getBodyTextColor());

*/
var Counter = {
   count: 0,
   add: () => {
     this.count++;
   }
}

Counter.add();
//console.log(Counter.count);
var addToCount = function(){
 this.count++;
};
addToCount();
//console.log(Counter.count);

// 1
if (true) {
    //console.log(this);
}


// 2
const obj = {
    myMethod: function() {
        return this;
    }
}

const myFun = obj.myMethod;
//console.log(myFun());

// 3
const obj2 = {
    someData: 'a string',
}

function myFun2() {
    return this;
}

obj2.staticFunction = myFun2;

//console.log(obj2.staticFunction());


const wheels = {
    number: 4,
    make: 'Good year',
    getNumberOfWheels() {
        return this.number;
    }
}


//console.log(wheels.getNumberOfWheels());


const car2 = {
    getWheels(wheels) {
        const wheelFunction = wheels.getNumberOfWheels;
        return wheelFunction;
    }
}



function logSound() {
    //console.log(this.sound);
}

const obj3 = {
    sound: 'honk',
}

logSound();

const boundLogSound = logSound;
boundLogSound();


const nameObject = {
    surname: 'hughes',
    names: ['ben', 'sam', 'ahmad'],
    logOutNames() {
        //console.log(this);
        this.names.forEach((name) => {
            //console.log(`${name} ${this.surname}`);
        });
    }
}

nameObject.logOutNames();

const car = {
    doors: 5,
    color: "white",
    topSpeed: 110,
    currentSpeed: 0,
    increaseSpeed: function(increase) {
        this.currentSpeed += increase;
    },
    describe: function() {
        return `the color is ${this.color}`;
    }
}

console.log(car.describe());
car.increaseSpeed(10);
console.log(car.currentSpeed);


// promises further
const resolveFunction = () => {
    resolve();
}

const oneSecondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('one second timeout');
    }, 1000);
});
oneSecondPromise
    .then((data) => {
        console.log(data);
    })

const twoSecondsPromise = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000);
});

const threeSecondsPromise = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000);
});

Promise.all([oneSecondPromise, twoSecondsPromise, threeSecondsPromise])
    .then((data) => {
        console.log(data);
        console.log('all promises have resolved');
    });

