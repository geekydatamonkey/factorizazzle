(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var factorazzle = require('./factorazzle.js');

$(document).ready(function(){
  var $input = $('#number-to-factorize');
  var $output = $('.factor-list');

  var updateFactorList = function($input, $output){
    var n = parseInt($input.val(), 10);
    try {
      var factorList = factorazzle.generate(n);;
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
});


},{"./factorazzle.js":2}],2:[function(require,module,exports){
/**
* Factorazzle generates an array of prime factors
* given an non-negative integer.
*/

'use strict';

module.exports = function(){

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

};
},{}]},{},[1]);
