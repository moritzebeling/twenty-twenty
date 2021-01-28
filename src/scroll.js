import throttle from 'just-throttle';

export function scrollListen(callback) {

  let start = 0;
  let touchstart = (event) => {
    start = event.touches[0].pageY;
  };

  let touchmove = throttle( (event) => {
    var delta = start - event.touches[0].pageY || 0;
    if( delta ) {
      return callback(delta);
    }
  }, 10);

  let wheel = throttle( (event) => {
    var delta = event.deltaY || 0;
    if( delta ) {
      return callback(delta);
    }
  }, 10);

  window.addEventListener('touchstart', touchstart);
  window.addEventListener('touchmove', touchmove);
  window.addEventListener('wheel', wheel);

}