(function() {
  var equalizeColumns;

  $(window).load(function() {
    return equalizeColumns();
  });

  $(window).resize(function() {
    return equalizeColumns();
  });

  equalizeColumns = function() {
    return $('.row.equalize').each(function() {
      var $row, collapsed, tallest;

      $row = $(this);
      tallest = 0;
      collapsed = false;
      $(this).children('*').each(function(i) {
        $(this).css('min-height', '1px');
        collapsed = $(this).outerWidth() === $row.outerWidth();
        if (!collapsed) {
          if (!$(this).hasClass('equal')) {
            $(this).addClass('equal');
          }
          if ($(this).outerHeight() > tallest) {
            return tallest = $(this).outerHeight();
          }
        }
      });
      if (!collapsed) {
        return $(this).children('*').css('min-height', tallest);
      }
    });
  };

}).call(this);
