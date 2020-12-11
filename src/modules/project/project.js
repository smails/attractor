let options = {};
if ($('.swiper-container').find('swiper-slide').length > 1) {
  options = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };
} else {
  $('.swiper-button-prev, .swiper-button-next').addClass('dis');
  options = {
    loop: false,
    autoplay: false,
  };
}
const project = new Swiper('.project__slider', options);
$('.project__toggle').click(function () {
  $('.project__toggle').css('border-color', '#e3e1e6');
  $('.project__slider').hide();
  $('.project__box').hide();
  $(`[data-content="${this.dataset.toggle}"]`).fadeIn();
  $(`[data-slider="${this.dataset.toggle}"]`).fadeIn();
  $(`[data-toggle="${this.dataset.toggle}"]`).css('border-color', '#20133f');
});
