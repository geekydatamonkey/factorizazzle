'use strict';

/**
* Factorazzle generates an array of prime factors
* given an non-negative integer.
*/

var FACTORAZZLE = (function(){

  /**
  * checks if a number is an integer
  */
  var _isInt = function(n){
    return (typeof n === 'number' && (n % 1) === 0);
  };

  /**
  * generate factors given a positive integer
  */
  var generate = function(n) {

    var primes = [],
      candidate;
    
    // limit of 11 digit
    if (n.toString().length > 16) {
      throw new Error('Number is too large');
    }

    // Check if positive integer
    if (! ( _isInt(n) && (n > 0))) {
      throw new Error('Number is not a positive integer');
    }

    // Loop throw possible candidates
    for(candidate = 2; candidate <= n; candidate++){
      // keep sucking out prime factors as many times as possible
      while(n % candidate === 0){
        primes.push(candidate);
        n = n / candidate;
      }
    }

    return primes;

  };
  
  // public methods
  return {
    generate: generate
  };

})();

(function($){
  var $input = $('#number-to-factorize');
  var $output = $('.factor-list');

  var updateFactorList = function($input, $output){
    var n = parseInt($input.val(), 10);
    try {
      var factorList = FACTORAZZLE.generate(n);
      $output.each(function(){
        $(this).html(factorList.join(', '));
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


