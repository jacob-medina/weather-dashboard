const searchHistoryMax = 8;  // max number of items that can be held in search history

// returns search history items in an array
function getSearchHistory() {
    var searchHistory = JSON.parse(localStorage.getItem('searchHistory'));

    if (searchHistory === null) { return []; }

    else { return searchHistory; }
}


// adds a search item to search history in local storage
function addToSearchHistory(search) {
    var searchHistory = getSearchHistory();

    // cancel action if search is already in search history
    if (searchHistory.includes(search)) { return; }

    // keep a maximum length of search history
    while (searchHistory.length >= searchHistoryMax) {
        searchHistory.shift();
    }
    searchHistory.push(search);

    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
}


function generateSearchHistoryButtons() {
    const searchHistorySection = $('#search-history');

    for (const search of getSearchHistory()) {
        var button = $('<button>');
        button.text(search);

        searchHistorySection.append(button);
    }
}


// redirects to the search results page with the inputted city
function getSearchResults(city) {
    // create query parameter
    const queryParam = `?city=${city}`;

    // redirect to search results page
    document.location.assign("./search-results.html" + queryParam);
}


// attempts to search for the city the user inputted into the search bar
function handleSearchFormSubmit(event) {
    event.preventDefault();

    const city = $('#city').val();

    // search won't occur if no city is inputted
    if (city === '') { return; }

    addToSearchHistory(city);
    getSearchResults(city);
}


// searches results for whichever city was clicked on in the search history
function handleSearchHistoryButtonClick(event) {
    const city = $(this).text();

    getSearchResults(city);
}


// init function for search results page
function searchResultsInit() {
    generateSearchHistoryButtons();

    $('#search-history').on('click', 'button', handleSearchHistoryButtonClick);
}


// executes once when any page loads
function init() {
    if (document.location.pathname.endsWith("search-results.html")) {
        searchResultsInit();
    }

    $('#form-search-bar').on('submit', handleSearchFormSubmit);
}


$(init);