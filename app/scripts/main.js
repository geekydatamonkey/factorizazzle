'use strict';

(function($){
  var $input = $('#number-to-factorize');
  var $output = $('.factor-list');

  var updateFactorList = function($input, $output){
    var n = parseInt($input.val(), 10);
    try {
      var factorList = FACTORIZAZZLE.generate(n);
      $output.each(function(){
        $(this).html(factorList.join(' &bull; '));
      });
    } catch(err) {
      $output.html(err.message);
    }
  };

  $input.keyup(function(){
    updateFactorList($(this), $output);
  });

  // run on load
  updateFactorList($input, $output);

})(jQuery);
// Main


