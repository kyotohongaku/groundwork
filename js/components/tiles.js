(function() {
  $(function() {
    $('.tiles').each(function() {
      $(this).find('.tile').attr('role', 'button');
      return $(this).find('.tile[data-value=' + $(this).find('input.value, select.value').val() + ']').addClass('active');
    });
    $('body').on('click', '.tiles .tile', function(e) {
      var tiles;

      if (!$(this).hasClass('disabled')) {
        tiles = $(this).parents('.tiles');
        tiles.find('.tile').removeClass('active');
        tiles.find('input.value, select.value').val($(this).data('value')).change();
        $(this).addClass('active');
      }
      e.preventDefault();
      return false;
    });
    return $('body').on('change', '.tiles input.value, .tiles select.value', function(e) {
      var tiles;

      tiles = $(this).parents('.tiles');
      tiles.find('.tile').removeClass('active');
      return tiles.find('.tile[data-value=' + $(this).val() + ']').addClass('active');
    });
  });

}).call(this);
