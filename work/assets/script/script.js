$(document).ready(function() {

  $('.my-slider').unslider();

 $("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "medium");
  return false;
});

    setTimeout(function(){
        $('body').addClass('loaded');
    3000;

});

// work on making the animation ease out
// work on making the animation not jump up
// maybe work on having the images bounce as you scroll

});
