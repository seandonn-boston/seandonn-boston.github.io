$(() => {
  $('.intro').addClass('loaded')
  // sidenav is a Materialize function used to make mobile navigation collapse function correctly
  $('.sidenav').sidenav();
  // On scroll, adjust the css transform property
  // $(window).scroll(function(){
  //   const scrolled = ($(window).scrollTop()/5000)-0.05;
  //   console.log('scrolled is ', scrolled);
  //   $(".intro").css({ transform: 'rotate(' + scrolled + 'rad)' });
  // });
  // Hovering over the word "Sean" will make my pictyure appear
  $('.hover-link').hover(
  function() {
    $('.sean').addClass('active')
  }, function() {
    $('.sean').removeClass('active');
  }
);
})
