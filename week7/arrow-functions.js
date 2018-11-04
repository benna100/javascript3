function getAjaxData(url, callback) {
    // Create new ajax call with the js function called XMLHttpRequest
    const request = new XMLHttpRequest();
    request.addEventListener('load', function () {
        // This in here is our callback function
        // Check our server responsecode, 200 means ok, success: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes 
        if (this.status === 200) {
            callback(JSON.parse(request.responseText));
        } else {
            console.log('Something is probably wrong with the url');
        }
    });

    request.addEventListener('error', function () {
        console.log('Server error like timeout');
    });

    // initializes a request with an http method
    request.open("GET", url);
    // Sends the request 
    request.send();
}

getAjaxData('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json', function(movies) {

    const releaseYearsOldWay = movies.map(function(movie) {
        return movie.year;
    });
    const releaseYears = movies.map(movie => movie.year);

    // find title of all movies released after 1990
    // with a rating > 8 and number votes > 5000
    console.log(releaseYears);

    const goodMoviesAfter80s = movies
        .filter(movie => movie.year > 1990)
        .filter(movie => movie.rating > 8)
        .filter(movie => movie.votes > 5000)
        .map(movie => movie.title);

    console.log(goodMoviesAfter80s);

});

function calculateSquare(n) {
    return n * n;
}

const calculateSquareBetter = n => n * n;


const calculateSum = (a, b) => a + b;

const doSomethingComplex = (m, n) => {
    // do something here
    return m + n;
}

const sayHello = () => console.log('Hello!');