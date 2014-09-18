(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
  var primeFactorList = function(n) {
    var primes = [],
      factor,
      startWith = 2
      ;

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
    generate: primeFactorList,
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



},{}]},{},[1]);
