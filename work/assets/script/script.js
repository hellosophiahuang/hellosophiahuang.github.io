// $(document).ready(function() {
//
//   $('.my-slider').unslider();
//
//  $("a[href='#top']").click(function() {
//   $("html, body").animate({ scrollTop: 0 }, "medium");
//   return false;
// });
//
//     setTimeout(function(){
//         $('body').addClass('loaded');
//     3000;
//
// });
//
// // maybe work on having the images bounce as you scroll
//
// });

$(document).ready(function() {

  setTimeout(function(){
      $('body').addClass('loaded');
  2000;

});

  $("a[href='#top']").click(function(){
      $("html, body").animate({ scrollTop: 0 }, 250);
      return false;
  });

});
