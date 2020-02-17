$(function () {
  $('.filter.city').click(function (e) {
    e.preventDefault();
    $this = $(this);
    $('body').attr('class', '');
    if ($this.attr('href') !== 'all') {
      $('body').addClass($this.attr('href')).addClass('show-city')
    }
  });

  $('.filter.type').click(function (e) {
    e.preventDefault();
    $this = $(this);
    $('body').attr('class', '');
    if ($this.attr('href') !== 'all') {
      $('body').addClass($this.attr('href')).addClass('show-type')
    }
  });

});
