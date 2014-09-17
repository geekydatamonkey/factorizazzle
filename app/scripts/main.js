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
    
    // Check if non-negative integer
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

  // $('#number-to-factorize').change(function(){
  //   console.log('Changed sensed');
  // });

console.log('Loaded.')

})(jQuery);
// Main


