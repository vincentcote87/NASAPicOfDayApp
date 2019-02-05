var app = new Framework7({
  root: "#app",
  // routes: [
  //   {
  //     path: '/home/',
  //     url: '../index.html'
  //   },
  //   { path: '/page2/',
  //     url: '../pages/page2.html'
  //   }
  // ]
})

var mainView = app.views.create('.view-main');

var swiper = app.swiper.create('.swiper-container', {
  speed: 400,
  spaceBetween: 100
});

swiper.slideNext();
