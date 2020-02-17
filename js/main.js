$(function () {
  $('.filter').click(function (e) {
    e.preventDefault();
    $this = $(this);
    $('body').attr('class', '').addClass($this.attr('href'));
  });
});
