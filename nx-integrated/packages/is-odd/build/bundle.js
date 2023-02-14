import { string } from 'lodash/string';

function hello() {
  console.log(string.capitalize('hello from a.js '));
}

function goodbye$1() {
  console.log('__GOODBYE__ from a.js');
}

function goodbye() {
  console.log('goodbye from b.js');
}

hello();
goodbye();
goodbye$1();
