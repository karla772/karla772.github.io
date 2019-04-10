$.get('http://api.openweathermap.org/data/2.5/weather?q=New+York&appid=0a1f10e1496e0fb16bdc8e0d78940ea5', function(data) {
  // The get request fires a callback function when the API request finishes
  console.log(data);
  // The data object contains all the information returned in the API
  var weather = data.weather[0];
  // In this case, the most interesting bit of data is in the weather key
  // Now do something interesting with the data!
  $('body').html('The weather is ' + weather.description);
});