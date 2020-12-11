/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
const parent_block = $('.work__box');
const target_block = $('.work__item');
const step_block = $('.work__step span');
const blockStatus = true;

function initWork(scroll) {
  // eslint-disable-next-line camelcase
  if (parent_block.length) {
    const se = scroll > parent_block.position().top - $(window).height();
    if (se && blockStatus) {
      target_block.each((index, elem) => {
        if (scroll > parent_block.position().top + elem.offsetTop - $(window).height() / 2) {
          elem.style.opacity = 1;
          step_block[index].classList.add('visible');
        }
      });
    }
  }
}

$('.faq__line').click(function() {
  $(this).toggleClass('open');
  $(this).find('.faq__title').slideToggle();
  $(this).find('.faq__body').slideToggle();
})