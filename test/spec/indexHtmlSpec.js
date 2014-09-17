/* global describe, it */

(function () {
    'use strict';

    describe('index.html page', function () {
        it('has a field for input', function () {
          expect($('#number-to-factorize')).toExist();
        });
        describe('has a <div> for factorization', function(){

        });
        describe('automatically updates factorization upon change to input field', function(){

        });
        describe('displays the proper factorization for a given number', function(){

        });
        describe('Shows a cutesy error if input is not a number', function(){

        });
    });
})();
