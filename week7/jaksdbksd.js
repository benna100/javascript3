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


