/* eslint-disable no-plusplus */
document.addEventListener('DOMContentLoaded', () => {
  const { Scrollbar } = window;
  const scrollEvent = Scrollbar.init(document.querySelector('main'), {
    damping: 1,
  });
  scrollEvent.addListener((s) => {
    headerFix(s.offset.y);
    initWork(s.offset.y);
  });
  $('select').select2({
    minimumResultsForSearch: Infinity,
    width: 'style',
    selectOnClose: true,
  });
  $('[data-scroll]').click(function () {
    const { top } = $(this.dataset.scroll).position();
    scrollEvent.scrollTo(0, top, '800');
  });

  let infoAnimate;
  let index = 0;
  const pic = document.querySelector('.info__icon');
  const iconDefault = pic.innerHTML;
  document.querySelector('.info__toggle').addEventListener('mouseenter', (e) => {
    clearInterval(infoAnimate);
    pic.innerHTML = iconDefault;
    e.target.previousElementSibling.style.height = 'fit-content';
    e.target.classList.add('hover');
    pic.classList.remove('hide');
    pic.classList.remove('show');
  });
  document.querySelector('.info__toggle').addEventListener('click', function () {
    this.previousElementSibling.style.height = '0px';
    this.classList.remove('hover');
    clearInterval(infoAnimate);
    infoAnimate = setInterval(animateInfo, 2500);
  });
  const animateInfo = () => {
    const icon = document.querySelectorAll('.info__btn')[index].innerHTML;
    pic.classList.remove('show');
    pic.classList.add('hide');
    setTimeout(() => {
      pic.innerHTML = icon;
    }, 1000);
    setTimeout(() => {
      pic.classList.remove('hide');
      pic.classList.add('show');
    }, 1500);
    if (index <= 1) {
      index++;
    } else {
      index = 0;
    }
  };
  infoAnimate = setInterval(animateInfo, 2500);
  $('[data-toggle="call"]').click(() => {
    $('.modal').css('display', 'flex');
    setTimeout(() => {
      $('.modal').css('opacity', '1');
    }, 300);
    setTimeout(() => {
      $('.modal__container').fadeIn();
    }, 400);
  });
  $('.modal__close').click(() => {
    $('.modal').css('opacity', '0');
    $('.modal__container').fadeOut();
    setTimeout(() => {
      $('.modal').attr('style', '');
      $('.modal__success').attr('style', '');
      $('.modal__form').attr('style', '');
    }, 300);
  });
  $(window).click((e) => {
    if (e.target.classList.contains('modal')) {
      $('.modal').css('opacity', '0');
      $('.modal__container').fadeIn();
      setTimeout(() => {
        $('.modal').attr('style', '');
      }, 300);
    }
  });
});
