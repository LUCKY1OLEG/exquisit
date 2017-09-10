$(function() {
	// play&pause variable
var play = [
  function() {
    $('.myVideo').get(0).play();
    $('.playicon').attr('src',"images/pause.png")
  },
  function() {
    $('.myVideo').get(0).pause();
    $('.playicon').attr('src',"images/play.png")  
  }
];
var playcounter = 0;
	// video play
  $('.playbutton').click(function(){
  	$('.myVideo').get(0).play();
  	play[playcounter++].apply(this);
    playcounter %= play.length;
  	$('.bg-header').css("background-image","none");
	});
  // navbar scroll, active
 $(document).on("scroll", onScroll);
  $('.links').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");
  
    $('a').each(function () {
    		$(this).removeClass('active');
    })
    		$(this).addClass('active');
  
  var target = this.hash,
  menu = target;
  $target = $(target);
  $('html, body').stop().animate({
	  'scrollTop': $target.offset().top-40
 		}, 500, 'swing', function () {
  window.location.hash = target;
  $(document).on("scroll", onScroll);
  	});
  });
  //navbar position detect
  function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('.navbar a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
  if (refElement.position().top <= scrollPos &&
  	refElement.position().top + refElement.height() > scrollPos) {
    $('.navbar a').removeClass("active");
 	  currLink.addClass("active");
  }
  else{
    currLink.removeClass("active");
  }
  });
}
 // newsletter success on submit
	$(".submitform").submit(function( event ) {
	  alert( "SUCCESS, thank you for subscribing!" );
	  event.preventDefault();
	});
 // send trial code on submit
	$(".trialform").submit(function( event ) {
	  alert( '"I am on my way to your e-mail" - trial code' );
	  event.preventDefault();
	});
	// preventdefault for non-working buttons
	$('a').on('click', function (e) {
		event.preventDefault();
	});
});