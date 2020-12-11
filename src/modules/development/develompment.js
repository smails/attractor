$('[data-figure]').click(function () {
  $('[data-item]').css('opacity', '0');
  $(`[data-item="${this.dataset.figure}"]`).css('opacity', '1');
});
