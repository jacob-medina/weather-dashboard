const countries = [ 
    {name: 'Afghanistan', code: 'AF'}, 
    {name: 'Åland Islands', code: 'AX'}, 
    {name: 'Albania', code: 'AL'}, 
    {name: 'Algeria', code: 'DZ'}, 
    {name: 'American Samoa', code: 'AS'}, 
    {name: 'AndorrA', code: 'AD'}, 
    {name: 'Angola', code: 'AO'}, 
    {name: 'Anguilla', code: 'AI'}, 
    {name: 'Antarctica', code: 'AQ'}, 
    {name: 'Antigua and Barbuda', code: 'AG'}, 
    {name: 'Argentina', code: 'AR'}, 
    {name: 'Armenia', code: 'AM'}, 
    {name: 'Aruba', code: 'AW'}, 
    {name: 'Australia', code: 'AU'}, 
    {name: 'Austria', code: 'AT'}, 
    {name: 'Azerbaijan', code: 'AZ'}, 
    {name: 'Bahamas', code: 'BS'}, 
    {name: 'Bahrain', code: 'BH'}, 
    {name: 'Bangladesh', code: 'BD'}, 
    {name: 'Barbados', code: 'BB'}, 
    {name: 'Belarus', code: 'BY'}, 
    {name: 'Belgium', code: 'BE'}, 
    {name: 'Belize', code: 'BZ'}, 
    {name: 'Benin', code: 'BJ'}, 
    {name: 'Bermuda', code: 'BM'}, 
    {name: 'Bhutan', code: 'BT'}, 
    {name: 'Bolivia', code: 'BO'}, 
    {name: 'Bosnia and Herzegovina', code: 'BA'}, 
    {name: 'Botswana', code: 'BW'}, 
    {name: 'Bouvet Island', code: 'BV'}, 
    {name: 'Brazil', code: 'BR'}, 
    {name: 'British Indian Ocean Territory', code: 'IO'}, 
    {name: 'Brunei Darussalam', code: 'BN'}, 
    {name: 'Bulgaria', code: 'BG'}, 
    {name: 'Burkina Faso', code: 'BF'}, 
    {name: 'Burundi', code: 'BI'}, 
    {name: 'Cambodia', code: 'KH'}, 
    {name: 'Cameroon', code: 'CM'}, 
    {name: 'Canada', code: 'CA'}, 
    {name: 'Cape Verde', code: 'CV'}, 
    {name: 'Cayman Islands', code: 'KY'}, 
    {name: 'Central African Republic', code: 'CF'}, 
    {name: 'Chad', code: 'TD'}, 
    {name: 'Chile', code: 'CL'}, 
    {name: 'China', code: 'CN'}, 
    {name: 'Christmas Island', code: 'CX'}, 
    {name: 'Cocos (Keeling) Islands', code: 'CC'}, 
    {name: 'Colombia', code: 'CO'}, 
    {name: 'Comoros', code: 'KM'}, 
    {name: 'Congo', code: 'CG'}, 
    {name: 'Congo, The Democratic Republic of the', code: 'CD'}, 
    {name: 'Cook Islands', code: 'CK'}, 
    {name: 'Costa Rica', code: 'CR'}, 
    {name: 'Cote D\'Ivoire', code: 'CI'}, 
    {name: 'Croatia', code: 'HR'}, 
    {name: 'Cuba', code: 'CU'}, 
    {name: 'Cyprus', code: 'CY'}, 
    {name: 'Czech Republic', code: 'CZ'}, 
    {name: 'Denmark', code: 'DK'}, 
    {name: 'Djibouti', code: 'DJ'}, 
    {name: 'Dominica', code: 'DM'}, 
    {name: 'Dominican Republic', code: 'DO'}, 
    {name: 'Ecuador', code: 'EC'}, 
    {name: 'Egypt', code: 'EG'}, 
    {name: 'El Salvador', code: 'SV'}, 
    {name: 'Equatorial Guinea', code: 'GQ'}, 
    {name: 'Eritrea', code: 'ER'}, 
    {name: 'Estonia', code: 'EE'}, 
    {name: 'Ethiopia', code: 'ET'}, 
    {name: 'Falkland Islands (Malvinas)', code: 'FK'}, 
    {name: 'Faroe Islands', code: 'FO'}, 
    {name: 'Fiji', code: 'FJ'}, 
    {name: 'Finland', code: 'FI'}, 
    {name: 'France', code: 'FR'}, 
    {name: 'French Guiana', code: 'GF'}, 
    {name: 'French Polynesia', code: 'PF'}, 
    {name: 'French Southern Territories', code: 'TF'}, 
    {name: 'Gabon', code: 'GA'}, 
    {name: 'Gambia', code: 'GM'}, 
    {name: 'Georgia', code: 'GE'}, 
    {name: 'Germany', code: 'DE'}, 
    {name: 'Ghana', code: 'GH'}, 
    {name: 'Gibraltar', code: 'GI'}, 
    {name: 'Greece', code: 'GR'}, 
    {name: 'Greenland', code: 'GL'}, 
    {name: 'Grenada', code: 'GD'}, 
    {name: 'Guadeloupe', code: 'GP'}, 
    {name: 'Guam', code: 'GU'}, 
    {name: 'Guatemala', code: 'GT'}, 
    {name: 'Guernsey', code: 'GG'}, 
    {name: 'Guinea', code: 'GN'}, 
    {name: 'Guinea-Bissau', code: 'GW'}, 
    {name: 'Guyana', code: 'GY'}, 
    {name: 'Haiti', code: 'HT'}, 
    {name: 'Heard Island and Mcdonald Islands', code: 'HM'}, 
    {name: 'Holy See (Vatican City State)', code: 'VA'}, 
    {name: 'Honduras', code: 'HN'}, 
    {name: 'Hong Kong', code: 'HK'}, 
    {name: 'Hungary', code: 'HU'}, 
    {name: 'Iceland', code: 'IS'}, 
    {name: 'India', code: 'IN'}, 
    {name: 'Indonesia', code: 'ID'}, 
    {name: 'Iran, Islamic Republic Of', code: 'IR'}, 
    {name: 'Iraq', code: 'IQ'}, 
    {name: 'Ireland', code: 'IE'}, 
    {name: 'Isle of Man', code: 'IM'}, 
    {name: 'Israel', code: 'IL'}, 
    {name: 'Italy', code: 'IT'}, 
    {name: 'Jamaica', code: 'JM'}, 
    {name: 'Japan', code: 'JP'}, 
    {name: 'Jersey', code: 'JE'}, 
    {name: 'Jordan', code: 'JO'}, 
    {name: 'Kazakhstan', code: 'KZ'}, 
    {name: 'Kenya', code: 'KE'}, 
    {name: 'Kiribati', code: 'KI'}, 
    {name: 'Korea, Democratic People\'S Republic of', code: 'KP'}, 
    {name: 'Korea, Republic of', code: 'KR'}, 
    {name: 'Kuwait', code: 'KW'}, 
    {name: 'Kyrgyzstan', code: 'KG'}, 
    {name: 'Lao People\'S Democratic Republic', code: 'LA'}, 
    {name: 'Latvia', code: 'LV'}, 
    {name: 'Lebanon', code: 'LB'}, 
    {name: 'Lesotho', code: 'LS'}, 
    {name: 'Liberia', code: 'LR'}, 
    {name: 'Libyan Arab Jamahiriya', code: 'LY'}, 
    {name: 'Liechtenstein', code: 'LI'}, 
    {name: 'Lithuania', code: 'LT'}, 
    {name: 'Luxembourg', code: 'LU'}, 
    {name: 'Macao', code: 'MO'}, 
    {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'}, 
    {name: 'Madagascar', code: 'MG'}, 
    {name: 'Malawi', code: 'MW'}, 
    {name: 'Malaysia', code: 'MY'}, 
    {name: 'Maldives', code: 'MV'}, 
    {name: 'Mali', code: 'ML'}, 
    {name: 'Malta', code: 'MT'}, 
    {name: 'Marshall Islands', code: 'MH'}, 
    {name: 'Martinique', code: 'MQ'}, 
    {name: 'Mauritania', code: 'MR'}, 
    {name: 'Mauritius', code: 'MU'}, 
    {name: 'Mayotte', code: 'YT'}, 
    {name: 'Mexico', code: 'MX'}, 
    {name: 'Micronesia, Federated States of', code: 'FM'}, 
    {name: 'Moldova, Republic of', code: 'MD'}, 
    {name: 'Monaco', code: 'MC'}, 
    {name: 'Mongolia', code: 'MN'}, 
    {name: 'Montserrat', code: 'MS'}, 
    {name: 'Morocco', code: 'MA'}, 
    {name: 'Mozambique', code: 'MZ'}, 
    {name: 'Myanmar', code: 'MM'}, 
    {name: 'Namibia', code: 'NA'}, 
    {name: 'Nauru', code: 'NR'}, 
    {name: 'Nepal', code: 'NP'}, 
    {name: 'Netherlands', code: 'NL'}, 
    {name: 'Netherlands Antilles', code: 'AN'}, 
    {name: 'New Caledonia', code: 'NC'}, 
    {name: 'New Zealand', code: 'NZ'}, 
    {name: 'Nicaragua', code: 'NI'}, 
    {name: 'Niger', code: 'NE'}, 
    {name: 'Nigeria', code: 'NG'}, 
    {name: 'Niue', code: 'NU'}, 
    {name: 'Norfolk Island', code: 'NF'}, 
    {name: 'Northern Mariana Islands', code: 'MP'}, 
    {name: 'Norway', code: 'NO'}, 
    {name: 'Oman', code: 'OM'}, 
    {name: 'Pakistan', code: 'PK'}, 
    {name: 'Palau', code: 'PW'}, 
    {name: 'Palestinian Territory, Occupied', code: 'PS'}, 
    {name: 'Panama', code: 'PA'}, 
    {name: 'Papua New Guinea', code: 'PG'}, 
    {name: 'Paraguay', code: 'PY'}, 
    {name: 'Peru', code: 'PE'}, 
    {name: 'Philippines', code: 'PH'}, 
    {name: 'Pitcairn', code: 'PN'}, 
    {name: 'Poland', code: 'PL'}, 
    {name: 'Portugal', code: 'PT'}, 
    {name: 'Puerto Rico', code: 'PR'}, 
    {name: 'Qatar', code: 'QA'}, 
    {name: 'Reunion', code: 'RE'}, 
    {name: 'Romania', code: 'RO'}, 
    {name: 'Russian Federation', code: 'RU'}, 
    {name: 'RWANDA', code: 'RW'}, 
    {name: 'Saint Helena', code: 'SH'}, 
    {name: 'Saint Kitts and Nevis', code: 'KN'}, 
    {name: 'Saint Lucia', code: 'LC'}, 
    {name: 'Saint Pierre and Miquelon', code: 'PM'}, 
    {name: 'Saint Vincent and the Grenadines', code: 'VC'}, 
    {name: 'Samoa', code: 'WS'}, 
    {name: 'San Marino', code: 'SM'}, 
    {name: 'Sao Tome and Principe', code: 'ST'}, 
    {name: 'Saudi Arabia', code: 'SA'}, 
    {name: 'Senegal', code: 'SN'}, 
    {name: 'Serbia and Montenegro', code: 'CS'}, 
    {name: 'Seychelles', code: 'SC'}, 
    {name: 'Sierra Leone', code: 'SL'}, 
    {name: 'Singapore', code: 'SG'}, 
    {name: 'Slovakia', code: 'SK'}, 
    {name: 'Slovenia', code: 'SI'}, 
    {name: 'Solomon Islands', code: 'SB'}, 
    {name: 'Somalia', code: 'SO'}, 
    {name: 'South Africa', code: 'ZA'}, 
    {name: 'South Georgia and the South Sandwich Islands', code: 'GS'}, 
    {name: 'Spain', code: 'ES'}, 
    {name: 'Sri Lanka', code: 'LK'}, 
    {name: 'Sudan', code: 'SD'}, 
    {name: 'Suriname', code: 'SR'}, 
    {name: 'Svalbard and Jan Mayen', code: 'SJ'}, 
    {name: 'Swaziland', code: 'SZ'}, 
    {name: 'Sweden', code: 'SE'}, 
    {name: 'Switzerland', code: 'CH'}, 
    {name: 'Syrian Arab Republic', code: 'SY'}, 
    {name: 'Taiwan, Province of China', code: 'TW'}, 
    {name: 'Tajikistan', code: 'TJ'}, 
    {name: 'Tanzania, United Republic of', code: 'TZ'}, 
    {name: 'Thailand', code: 'TH'}, 
    {name: 'Timor-Leste', code: 'TL'}, 
    {name: 'Togo', code: 'TG'}, 
    {name: 'Tokelau', code: 'TK'}, 
    {name: 'Tonga', code: 'TO'}, 
    {name: 'Trinidad and Tobago', code: 'TT'}, 
    {name: 'Tunisia', code: 'TN'}, 
    {name: 'Turkey', code: 'TR'}, 
    {name: 'Turkmenistan', code: 'TM'}, 
    {name: 'Turks and Caicos Islands', code: 'TC'}, 
    {name: 'Tuvalu', code: 'TV'}, 
    {name: 'Uganda', code: 'UG'}, 
    {name: 'Ukraine', code: 'UA'}, 
    {name: 'United Arab Emirates', code: 'AE'}, 
    {name: 'United Kingdom', code: 'GB'}, 
    {name: 'United States', code: 'US'}, 
    {name: 'United States Minor Outlying Islands', code: 'UM'}, 
    {name: 'Uruguay', code: 'UY'}, 
    {name: 'Uzbekistan', code: 'UZ'}, 
    {name: 'Vanuatu', code: 'VU'}, 
    {name: 'Venezuela', code: 'VE'}, 
    {name: 'Viet Nam', code: 'VN'}, 
    {name: 'Virgin Islands, British', code: 'VG'}, 
    {name: 'Virgin Islands, U.S.', code: 'VI'}, 
    {name: 'Wallis and Futuna', code: 'WF'}, 
    {name: 'Western Sahara', code: 'EH'}, 
    {name: 'Yemen', code: 'YE'}, 
    {name: 'Zambia', code: 'ZM'}, 
    {name: 'Zimbabwe', code: 'ZW'} 
];

const searchHistoryMax = 8;  // max number of items that can be held in search history
var weatherSection;
var loadingSection;
var cityChoiceSection;
var errorSection;


function hideElement(element) {
    element.addClass('hidden');
}


function showElement(element) {
    element.removeClass('hidden');
}


// returns country name from country code
function getCountryName(countryCode) {
    return countries.find(country => country.code === countryCode).name;
}


// returns query parameters as an object
function getQueryParams() {
    const params = new URLSearchParams(document.location.search);
    return {
        city: params.get("city"),
        country: params.get("country"),
        lat: params.get('lat'),
        lon: params.get('lon')
    };
}


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


function setWeatherIcon(imageElement, weatherData) {
    // make sure icon name ends in "d.png"
    const iconName = weatherData.weather[0].icon.slice(0, -1) + "d.png";

    imageElement.attr('src', `./assets/images/weather-icons/${iconName}`);
    imageElement.attr('alt', weatherData.weather[0].description);
}


function displayWeatherCurrentData(city, country, weatherData) {
    // console.log('------------ CURRENT WEATHER ------------');
    // console.log(weatherData);

    // display date and location data
    $('#current-date').text(dayjs().format('dddd, MMMM D'));
    $('#weather-city').text(city);
    $('#weather-country').text(country);
    
    // display weather icon
    setWeatherIcon($('#current-weather-icon'), weatherData);
    
    // display weather stats
    $('#current-temperature').text(Math.round(weatherData.main.temp) + "°F");
    $('#current-weather-description').text(weatherData.weather[0].main);
    $('#current-humidity').text(Math.round(weatherData.main.humidity) + "%");
    $('#current-wind-speed').text(Math.round(weatherData.wind.speed) + " mph");

    // hide loading screen and show weather
    hideElement(loadingSection);
    hideElement(cityChoiceSection);
    showElement(weatherSection);
}


function generateWeatherForecastCard(weatherData) {
    // create elements
    const cardElement = $('<div class="forecast weather-card row align-items-center my-3 py-5 px-3">');
    const dateElement = $('<span class="col-2 col-sm-3 col-md-4">');

    const tempContainerElement = $('<div class="d-flex align-items-center col">');
    const iconElement = $('<img class="forecast-icon">');
    const tempElement = $('<span>');

    const humidityContainerElement = $('<div class="d-flex align-items-center col">');
    const humidityIconElement = $('<span class="material-symbols-outlined">humidity_percentage</span>');
    const humidityElement = $('<span>');

    const windSpeedContainerElement = $('<div class="d-flex align-items-center col">');
    const windSpedIconElement = $('<span class="material-symbols-outlined">air</span>');
    const windSpeedElement = $('<span>');

    // get values from weather data
    const dayOfWeek = dayjs(weatherData.dt_txt).format("ddd");
    const temperature = Math.round(weatherData.main.temp);
    const humidity = Math.round(weatherData.main.humidity);
    const windSpeed = Math.round(weatherData.wind.speed);

    // set values in elements
    dateElement.text(dayOfWeek);
    setWeatherIcon(iconElement, weatherData);
    tempElement.text(temperature + "°");
    humidityElement.text(humidity + "%");
    windSpeedElement.text(windSpeed + " mph");

    // append elements to document
    tempContainerElement.append(iconElement, tempElement);
    humidityContainerElement.append(humidityIconElement, humidityElement);
    windSpeedContainerElement.append(windSpedIconElement, windSpeedElement);
    cardElement.append(dateElement, tempContainerElement, humidityContainerElement, windSpeedContainerElement);
    $('#forecast-weather').append(cardElement);
}


function displayWeatherForecastData(allWeatherData) {
    // console.log('------------ FORECAST WEATHER ------------');
    // get weatherData for only 12 PM
    for (weatherData of allWeatherData) {
        const forecastTime = weatherData.dt_txt.slice(11);

        if (forecastTime.includes("12:")) {
            generateWeatherForecastCard(weatherData);
        }
    }
}


function fetchWeatherData(lat, lon, city, country, apiKey) {
    // get current weather
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            displayWeatherCurrentData(city, country, data);
        });
    
    // get 5 day forecast
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            // data gives 40 timestamps, 8 per day
            // console.log(data);
            displayWeatherForecastData(data.list);
        });
}


function displayNoFindCity(city) {
    $('#error-city-name').text(city);
    hideElement(loadingSection);
    hideElement(weatherSection);
    hideElement(cityChoiceSection);
    showElement(errorSection);
}


function addLocationParameter(city, country, lat, lon) {
    const queryParam = `?city=${city}&country=${country}&lat=${lat}&lon=${lon}`;

    // redirect to search results page
    document.location.assign("./search-results.html" + queryParam);
}


function generateCitySearchResults(searchedCity, cities) {
    hideElement(loadingSection);

    $('#possible-city-name').text(searchedCity);

    for (const city of cities) {
        const cityLinkElement = $('<li class="city-link my-2">');

        const countryName = getCountryName(city.country);

        var stateText = "";
        if (city.state !== undefined) { stateText = ` ${city.state},`;}

        cityLinkElement.text(`${city.name},${stateText} ${countryName}`);

        cityLinkElement.on("click", function() {
            hideElement(cityChoiceSection);
            showElement(loadingSection);

            addLocationParameter(city.name, countryName, city.lat, city.lon);
            // fetchWeatherData(city.lat, city.lon, city.name, countryName, apiKey);
        });

        $('#section-city-choice ul').append(cityLinkElement);
    }
}


function generateWeatherInfo(apiKey) {
    // get city from query string in URL
    const limit = 5;
    const location = getQueryParams();
    const city = location.city;

    console.log(location);
    
    if (location.lat !== null && location.lon !== null) {
        fetchWeatherData(location.lat, location.lon, location.city, location.country, apiKey);
        return;
    }

    // fetch geographic data from openweathermap
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${limit}&appid=${apiKey}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            // if no data was found
            if (data.length === 0) {
                console.error('Could not find city:', city);
                displayNoFindCity(city);
                return;
            }

            console.log(data);

            if (data.length === 1) {
                data = data[0];
                const countryName = getCountryName(data.country);
                addLocationParameter(data.name, countryName, data.lat, data.lon);
                // fetchWeatherData(data.lat, data.lon, data.name, countryName, apiKey);
            }

            else {
                generateCitySearchResults(city, data);
            }
        }); 
}


// searches results for whichever city was clicked on in the search history
function handleSearchHistoryButtonClick(event) {
    const city = $(this).text();
    getSearchResults(city);
}


// init function for search results page
function searchResultsInit() {
    weatherSection = $('#section-weather');
    loadingSection = $('#section-loading');
    cityChoiceSection = $('#section-city-choice');
    errorSection = $('#section-error');

    hideElement(weatherSection);
    hideElement(errorSection);
    showElement(loadingSection);

    generateSearchHistoryButtons();
    generateWeatherInfo('a74f6906ebee4cca4079ea0cc2015a94');

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