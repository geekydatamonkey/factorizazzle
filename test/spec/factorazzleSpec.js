/* global describe, it */

(function () {
    'use strict';

    describe('FACTORAZZLE is a factoring module that', function () {
        describe('generates prime factors', function () {

            it('should only take positive integers', function () {

              var message = 'Not an integer > 1';

              expect(function(){ 
                FACTORAZZLE.generate('Forty-Two');
              }).toThrow(new Error(message));

              expect(function(){
                FACTORAZZLE.generate(-1);
              }).toThrow(new Error(message));

              expect(function(){
                FACTORAZZLE.generate(2.5);
              }).toThrow(new Error(message));

              expect(function(){
                FACTORAZZLE.generate(NaN);
              }).toThrow(new Error(message));
            });

            it('returns 2 for 2', function(){
              expect(FACTORAZZLE.generate(2)).toEqual([2]);
            });
            it('returns 3 for 3', function(){
              expect(FACTORAZZLE.generate(3)).toEqual([3]);
            });
            it('returns [2,2] for 4', function(){
              expect(FACTORAZZLE.generate(4)).toEqual([2,2]);
            });
            it('returns [2,2,3,3] for 36', function(){
              expect(FACTORAZZLE.generate(36)).toEqual([2,2,3,3]);
            });
            it('returns [2,2,3,5] for 60', function(){
              expect(FACTORAZZLE.generate(60)).toEqual([2,2,3,5]);
            });
            it('throws an error if the number is larger than 12 digits',function(){
              expect(function(){
                FACTORAZZLE.generate(12345678901234567);
              }).toThrow(new Error('Number is too large'));
            });
        });

    });
})();
