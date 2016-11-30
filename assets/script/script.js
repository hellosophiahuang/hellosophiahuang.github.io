$(document).ready(function() {


var navbarPosition = $("#navbar").offset().top;

$(window).scroll(function() {

 var currentScroll = $(window).scrollTop();
 console.log(currentScroll);

 if (currentScroll < navbarPosition) {
   $("#navbar").removeClass("navbar-fixed");
 } else {
   $("#navbar").addClass("navbar-fixed");
 }
 });

 $(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 600);
});

});
