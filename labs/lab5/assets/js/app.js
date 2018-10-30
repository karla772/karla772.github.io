$('.nav-item').click(function() {
  var button_name = $(this).data('button');

  $('.about-text').addClass('.hide');
  $('.nav-item').removeClass('active');
  $('.content').attr('class', 'column content');
  $(this).addClass('active');
  $('.content').addClass('button-name');

  if (button-name == 'beyonce') {
$('.slay').removeClass('hide');
$('audio')[0].play();
} else if (button-name == about) {
$('.about-text').removeClass('.hide');
} else {
 
}

});

$('.close').click(function() {
  $('.slay').addClass('hide')
  $('audio')[0].pause();
  $('.nav-item').removeClass('active');
});
