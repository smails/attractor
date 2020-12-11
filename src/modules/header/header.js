const headerFix = (scroll) => {
  document.querySelector('.header').style.transform = `translateY(${scroll}px)`;
};

$('.nav__link').on('mouseenter', (e) => {
  if ($(e.target).next('.nav__dropdown').length || $(e.target).parents('.nav__dropdown').length) {
    $('.header').append('<div class="overlay"></div>');
    $('.overlay').height(85);
  }
});

$('.nav__item').on('mouseleave', (e) => {
  if (!$(this).parents('.header').length) {
    $('.overlay').remove();
    $('.nav__dropdown').height(0);
  }
});

$('.header__burger').click(() => {
  if ($('.header__menu').hasClass('open')) {
    $('.header__menu').hide();
    $('main').removeClass('open');
    $('.burger').removeClass('open');
    setTimeout(() => {
      $('.header__menu').removeAttr('style');
      $('.header__menu').removeClass('full');
      $('.header__menu').removeClass('open');
    }, 400);
  } else {
    $('.header__menu').addClass('open');
    $('main').addClass('open');
    $('.burger').addClass('open');
    setTimeout(() => {
      $('.header__menu').addClass('full');
    }, 300);
  }
});
