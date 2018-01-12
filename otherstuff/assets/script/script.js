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
