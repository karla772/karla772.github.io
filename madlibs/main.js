// https://karla772.github.io/api.json
$.get('https://karla772.github.io/api.json', function(data) {
  console.log(data);

$('.button').click(function()) {
  console.log $(this);
  var url = $(this).data('url');
}

$('.randomizer').click(function()) {

});

$(function() {
  var endpoints = [
    "https://kquea402.github.io/api.json",
    "https://glics998.github.io/api.json",
    "https://colindharrington.github.io/api.json",
    "https://hoant626.github.io/api.json",
    "https://karla772.github.io/api.json",
    "https://leeh779.github.io/api.json",
    "https://lis874.github.io/api.json",
    "https://phoebechloee.github.io/api.json",
    "https://luw779.github.io/api.json",
    "https://mullg389.github.io/api.json",
    "https://pana005.github.io/api.json",
    "https://raos130.github.io/api.json",
    "https://samsj948.github.io/api.json",
    "https://shaha129.github.io/api.json",
    "https://Mwedd9.github.io/api.json",
    "https://zhenx804.github.io/api.json",
  
  ];

  $('.button').click(function() {
    console.log( $(this));
    var url = $(this).data('url');
    console.log(url);

    $.get(url, function(data) ;
    console.log(data) ;

    $('.adjective1').html(data.adjective1);
    $('.artsupply').html(data.artSupply);

  });

  $('.randomizer').click(function() {
    var randomEndpoint = endpoints[ Math.floor(Math.random()
    console.log(randomEndpoint);

    $.get(randomEndpoint, function(data) {
      console.log(data);

      $('.adjective1').html(data.adjective1);
      $('.artsupply').html(data.artSupply);

    });
  








  var adjective1 = data.adjective1;
  $('.adjective1').html(adjective1);

  var adjective2 = data.adjective2;
  $('.adjective2').html(adjective2);

  var artsupply = data.artsupply;
  $('.artsupply').html(artsupply);

  var computersoftware = data.computersoftware;
  $('.computersoftware').html(computersoftware);

  var websitename = data.websitename;
  $('.websitename').html(websitename);

  var artistname = data.artistname;
  $('.artistname').html(artistname);
  
  var celebrityname = data.celebrityname;
  $('.celebrityname').html(celebrityname);

  var noun1 = data.noun1;
  $('.noun1').html(noun1);

  var noun2 = data.noun2;
  $('.noun2').html(noun2);

  var pluralnoun1 = data.pluralnoun1;
  $('.pluralnoun1').html(pluralnoun1);

  var computersoftware = data.computersoftware;
  $('.pluralnoun2').html(pluralnoun2);
  $('.pluralnoun3').html(pluralnoun3);
  $('.verbendingining').html(verbendingining);
  $('.placeinnewyork').html(placeinnewyork);
  $('.bodypart').html(bodypart);
  $('.numbers').html(numbers);
  $('.foods').html(foods);

  

}).fail(function() {
  console.log('Error in GET request. Handle the error gracefully.');
});