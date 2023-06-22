function handleSearchFormSubmit(event) {
    event.preventDefault();

    const city = $('#city').val();

    // search won't occur if no city is inputted
    if (city === '') { return; }

    // create query parameter
    const queryParam = `?city=${city}`;

    // redirect to search results page
    document.location.assign("./search-results.html" + queryParam)
}

function init() {
    $('#form-search-bar').on('submit', handleSearchFormSubmit);
}

$(init);