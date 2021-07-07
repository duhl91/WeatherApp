var city;
var cityInputEl = document.querySelector('#city');
var userFormEl = document.querySelector('#user-form');
var userSearchTerm = document.querySelector('#user-search-term');
var weatherContainerEl = document.querySelector('#weather-container');
var APIKey = '46354962add59f4df4d35e27f80c47ea';
var apiUrl = /*"https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;*/

'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=' + APIKey;

var formSubmitHandler = function (event) {
    event.preventDefault();
  
    var city = cityInputEl.value.trim();
  
    if (city) {
      getWeather(city);
  
      /* weatherContainerEl.textContent = '';
      cityInputEl.value = city;
    } else {
      alert('Please enter a valid city.');*/
    }
  };
  
    
var getWeather = function () {
  
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            displayWeather(city, data);
          });
        } else {
          alert('Please enter a valid city. ');
        }
      })

};

  var displayWeather = function (weather, city) {
    
    userSearchTerm.textContent = city;
  
    for (var i = 0; i < 6; i++) {
      
  
      var weatherEl = document.createElement('card');
      weatherEl.classList = 'list-item flex-row justify-space-between align-center';
      
      userSearchTerm.textContent = city;
  
      userSearchTerm.append(city);
  
      //var statusEl = document.createElement('span');
      //statusEl.classList = 'flex-row align-center';
    }
  };



  userFormEl.addEventListener('submit', formSubmitHandler);