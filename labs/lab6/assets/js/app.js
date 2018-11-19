
$('.nav-item').click(function() {
  var target = $(this);

  if ($ (target).html() == 'apple') {
  $('.apple').removeclass('hide');
  } else if (target == 'nike'){
    $('.nike'). removeclass ('hide');
   } else if (target == 'disney') {
      $('.disney').removeclass ('hide');
    } else if (target == 'vogue'){
        $('.vogue').removeclass('hide');
      }
});

$('nav-item').click(function() {
  var target = $(this).hmtl ();
  var image_to_show = '<img src="assets/img/' + img + '"/></div';

  console.log(target);

  $('.content').append(target);
  $('.content').prepend(image_to_show);
});
