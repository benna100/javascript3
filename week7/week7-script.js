// Map, reduce and filter exercise

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
    console.log(redditResponse.data.children);
    const redditPosts = redditResponse.data.children;

    const redditPostsSuccessful = redditPosts.filter(function(redditPost) {
        return redditPost.data.ups > 100;
    });

    
     const redditPostsSuccessfulMapped1 = redditPostsSuccessful.map(function(redditPost) {
        return redditPost.data.thumbnail;
    });

    console.log(redditPostsSuccessfulMapped1);

    const redditPostsSuccessfulMapped = redditPostsSuccessful.map(function(redditPost) {
        return {
           title: redditPost.data.title,
           ups: redditPost.data.ups,
           downs: redditPost.data.downs,
        };
    });


    console.log(redditPostsSuccessfulMapped);
    let sum = 0;
    redditPostsSuccessfulMapped.forEach(function(redditPost) {
        sum += redditPost.ups;
    });
    console.log(sum);
    // show with normal for loop and the accumulator
    const totalUps = redditPostsSuccessfulMapped.reduce(function(accumulator, redditPost, i , arr) {
        return accumulator + redditPost.ups;
    }, 0);

    console.log(totalUps);

    const averageUps = totalUps / redditPostsSuccessfulMapped.length;

    console.log(averageUps);

    console.log(redditPostsSuccessfulMapped);
    // Descending
    const test = [43, 87, 12, 100].sort(function(a, b) {
        if (a > b) {
            return 1
        } else {
            return -1;
        }
    });

    console.log(test);
});

