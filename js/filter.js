var filters = {};

$(window).load(
  function() {
    var $container = $('.optionContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    }
  );

  $('.filters-select').on( 'change', function() {
    // get filter value from option value
    var selector = this.value;

    $container.isotope({
        filter: selector,
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
     });
  });

});
