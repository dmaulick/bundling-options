import { string } from 'lodash/string';

export function hello() {
  console.log(string.capitalize('hello from a.js '));
}

export function goodbye() {
  console.log('__GOODBYE__ from a.js');
}
