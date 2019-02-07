var app = new Framework7({
  root: "#app"
})

var mainView = app.views.create('.view-main');

var swiper = app.swiper.create('.swiper-container', {
  speed: 400,
  spaceBetween: 100
});

// Having the yesterdays photo be on the left seems more intuative to me 
// therefore this calls swipes to todays slide (on the right) when it loads
swiper.slideNext();
