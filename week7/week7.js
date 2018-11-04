fetch('https://www.reddit.com/r/ProgrammerHumor.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const children = data.data.children;

        console.log(children);
        
        const longWordedPosts = children.filter(post => post.data.title.split(' ').length > 6);
        console.log(longWordedPosts.map(post => post.data.title));
        

        const successFulPosts = children.filter((parameter1) => {
            return parameter1.data.ups > 1000;
        });

        console.log(successFulPosts);

        const successfulPostsUpvotes = successFulPosts.map(post => post.data.ups);
        console.log(successfulPostsUpvotes);
        
        const totalupvotes = successfulPostsUpvotes.reduce((arr, upvote) => arr + upvote);

        console.log(totalupvotes);
    });
/*
getAjaxData('https://www.reddit.com/r/ProgrammerHumor.json', function(redditResponse) {
    const redditPosts = redditResponse.data.children;
    console.log(redditPosts);
    const successfulPosts = redditPosts.filter(function(post) {
        return post.data.ups > 1000;
    });

    //console.log(successfulPosts);

    const upvotes = successfulPosts.map(function(post) {
        //console.log(post);
        return post.data.ups;
    });
    console.log(upvotes);

    let sum = 0;
    upvotes.forEach(function(upvote) {
        sum = sum + upvote;
    });
    //console.log(sum);
    
    const totalUpvotes = upvotes.reduce(function(accumulator, upvote, i) {
        //console.log(i);

        return accumulator + upvote;
    });

    //console.log(totalUpvotes);

    const getSuccesfulPosts = function(post) {
        return post.data.ups > 1000;
    };

    function getUpvotes(post) {
        return post.data.ups;
    }

    // javascript functional programming. Here we work on a higher abstraction level
    const successfulPostsFunctional = redditPosts
        .filter(getSuccesfulPosts)
        .map(getUpvotes);

    //console.log(successfulPostsFunctional);
});



getAjaxData('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json', function(movies) {
    //console.log(movies[0]);
    const totalvotes = movies.reduce(function(accumulator, movie) {
        return accumulator + movie.votes;
    }, 0);

    //console.log(totalvotes);

    const sortedMovies = movies.sort(function(a, b) {
        if (a.votes < b.votes) {
            return -1;
        } else if (a.votes > b.votes) {
            return 1;
        } else {
            return 0;
        }
    });

    //console.log(sortedMovies);
});


*/


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