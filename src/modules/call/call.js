$('.constructor__slider .slider').slider({
  min: 0,
  max: 500,
  value: 0,
  range: 'min',
  animate: 'fast',
  slide(event, ui) {
    if (ui.value > 1 && ui.value < 500) {
      $('.constructor__slider .count').css('opacity', 1);
    } else {
      $('.constructor__slider .count').css('opacity', 0);
    }
    $('.constructor__slider .count').html(ui.value).css('left', $('.constructor__slider span').css('left'));
  },
  stop(event, ui) {
    setTimeout(() => {
      $('.constructor__slider .count').html(ui.value).css('left', $('.constructor__slider span').css('left'));
    }, 100);
  },
});
