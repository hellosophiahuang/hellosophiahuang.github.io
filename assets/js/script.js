$(document).ready(function() {

  var navbar = $("#navbar").offset().top;
  $(window).scroll(function(){
    var currentScroll = $(window).scrollTop();
    console.log(currentScroll);

    if (currentScroll < navbar) {
      console.log("navbar");
      $("#navbar").removeClass("navbar-fixed");
    } else {
      $("#navbar").addClass("navbar-fixed");
    }
});

  $(".bottom-arrow").click(function() {

  });


  $(".smooth").click(function() {

  });

});
