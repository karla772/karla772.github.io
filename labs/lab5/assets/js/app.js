$('.nav-item').click(function() {
  var button_name = $(this).data('button');
  console.log(button_name);
  $('.content').addClass(button_name);

  $('.content').attr('class', 'column content');
  $('.content').addClass(button_name);

  $('this').addClass('active');
  $('.content').addClass('button-name');
});

