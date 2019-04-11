$.get('http://api.openweathermap.org/data/2.5/weather?zip=10003&appid=0a1f10e1496e0fb16bdc8e0d78940ea5', function(data) {
  // The get request fires a callback function when the API request finishes
  console.log(data);
  window.data
  // The data object contains all the information returned in the API
  var weather = data.weather[0];
  // In this case, the most interesting bit of data is in the weather key
  // Now do something interesting with the data!
  $('body').html('The weather is ' + weather.description);

  var temp = data.main.temp;
  var hotKelvin = 316;
  var rgbTemp = temp / hotKelvin
  console.log('temp', temp);

  var icon = data.weather[0].icon;
  var image = '<img src="./assets/' + icon + '.gif">';
  console.log(icon);


  $('body').append(image);
});