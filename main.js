// kallas pa nar .json() ar fardig.
function whenJsonIsDone(data) {
    console.log(data.image);
}


// kallas pa nar fetch ar fardig.
function whenFetchIsDone(response) {
    response.json().then(whenJsonIsDone);
}


// anropar vi fetch.
fetch("https://randomfox.ca/floof/").then(whenFetchIsDone);