/**
* factorizazzle.js
* Factorizazzle generates an array of prime factors
* given an non-negative integer.
*/

'use strict';
var FACTORIZAZZLE = (function(){

  /**
  * checks if a number is an integer
  */
  var _isInt = function(n){
    return (typeof n === 'number' && (n % 1) === 0);
  };


  /**
   * checks if input is too big, or not an 
   * integer larger than 1
   */
  var _checkInput = function(n) {
    // limit of 11 digit
    if (n.toString().length > 16) {
      throw new Error('Number is too large');
    }

    // Check if positive integer
    if (! ( _isInt(n) && (n > 1))) {
      throw new Error('Not an integer > 1');
    }
  };

  /**
   * Returns the smallest factor of a given integer.
   * Optionally allows to start looking at a particular value.
   * e.g.
   *   _smallestFactor(35) = 5
   *   _smallestFactor(100,3) = 5
   *   _smallestFactor(60,3) = 3
   */
  function _smallestFactor(n, startWith) {
    var highestPossible = Math.floor(Math.sqrt(n));

    // startWith optional. Defaults to 2.
    startWith = (typeof startWith === 'undefined') ? 2 : startWith;

    if (n % 2 === 0) {
      return 2;
    }
    for(var candidate = startWith; candidate <= highestPossible; candidate++) {
      if (n % candidate === 0) {
        return candidate;
      }
    }
    return n;
  }

  /* *
   * Returns an array of prime factors for a given integer.
   */
  var generate = function(n) {
    var primes = [],
      factor,
      startWith = 2;

    _checkInput(n);
    while (n !== 1) {
      factor = _smallestFactor(n, startWith);
      startWith = factor;  // Remember where we left off
      primes.push(factor);
      n /= factor;
    }
    return primes;
  };
  
  // public methods
  return {
    generate: generate,
  };

})();