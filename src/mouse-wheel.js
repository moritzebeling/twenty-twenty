'use strict'

import throttle from 'just-throttle';

export function mouseWheelListen(callback) {

  let listener = throttle( (event) => {
    console.log('tick');

    var delta = event.deltaY || 0;

    if( delta ) {
      return callback(delta);
    }

  }, 10);

  window.addEventListener('wheel', listener);
  return listener;
}
