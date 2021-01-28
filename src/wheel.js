import throttle from 'just-throttle';

export function wheelListen(callback) {

  let listener = throttle( (event) => {
    console.log('tick');

    var delta = event.deltaY || 0;

    if( delta ) {
      return callback(delta);
    }

  }, 10);

  window.addEventListener('wheel', listener);
  window.addEventListener('touchmove', listener);
  return listener;
}
