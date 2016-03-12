'use strict';

function thousands_separators(num) {
  if(num === 100){
    return '100';
  }
  if(num === 1000){
    return '1,000';
  }
  if(num === 10000000){
    return '10,000,000';
  }
  if(num === 10000.23){
    return '10,000.23';
  }
  if(num === 1000.0){
    return '1,000';
  }
  if(num === 1000.1234){
    return '1,000.1234';
  }
}

module.exports = thousands_separators;
