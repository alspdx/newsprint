$(document).ready(function() {
  $('.sidenav').sidenav();

  $('.materialboxed').materialbox();

  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });

  $('.collapsible').collapsible();

  $('.fixed-action-btn').floatingActionButton({
    direction: 'top', // Direction menu comes out
    hoverEnabled: true, // Hover enabled
    toolbarEnabled: false // Toolbar transition enabled
  });
});
