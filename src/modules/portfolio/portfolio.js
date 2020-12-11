$('.portfolio__mobile-aside').click((e) => {
  $(e.target).toggleClass('open');
  $('.portfolio__aside').toggleClass('open');
});

document.querySelectorAll('.portfolio__slider').forEach((n) => {
  const slider = new Swiper(n.querySelector('.swiper-container'), {
    speed: 1000,
    slidesPerView: 1,
    flipEffect: {
      slideShadows: false,
    },
    spaceBetween: 0,
    allowTouchMove: false,
    navigation: {
      nextEl: n.querySelector('.swiper-button-next'),
      prevEl: n.querySelector('.swiper-button-prev'),
    },
  });
});
