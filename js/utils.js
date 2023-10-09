// Fade

function fadeIn(element, duration, callback) {
  fade('in',element, duration, callback);
}

function fadeOut(element, duration, callback) {
  fade('out',element, duration, callback);
}




function fade(direction, element, duration, callback) {
  direction = (direction == 'in') ? 'in' : 'out';
  var opacityInterval = 0.034;

  if (duration !== 0) {
    duration ||= 1000;
  }
  // else {
  //   opacityInterval = 1;
  // }

  var stepInterval = duration > 30 ? Math.ceil(duration / 30) : duration;
  var op = (direction == 'in') ? 0 : 1;  // initial opacity
  element.style.display = 'block';

  // duration = duration < 20 ? 20 : duration;
  var timer = setInterval(function () {
    if ((direction == 'in' && op >= 1) || (direction == 'out' && op <= 0)) {
      clearInterval(timer);
      executeCallback(callback, element);
    }

    element.style.opacity = op;
    // element.style.filter = 'alpha(opacity=' + op * 100 + ")";
    op = (direction == 'in') ? (op + opacityInterval) : (op - opacityInterval);

  }, stepInterval);
}




// function fade(direction, element, duration, callback) {

//   element.addEventListener('transitionend', (event) => {
//     element.style.transition = null;
//     executeCallback(callback, element);
//   });

//   direction = (direction == 'in') ? 'in' : 'out';

//   if (duration !== 0) {
//     duration ||= 1000;
//   }

//   let op = (direction == 'in') ? 1 : 0;  // end opacity
//   let transitionValue = 'opacity ' + duration + 'ms ease-' + direction;
//   element.style.transition = transitionValue;
//   element.style.opacity = op;
// }



// DOM manipulation

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function htmlToElement(html) {
  var template = document.createElement('template');
  html = html.trim(); // Never return a text node of whitespace as the result
  template.innerHTML = html;
  return template.content.firstChild;
}

function generateElement(name, classes) {
  var el = document.createElement(name);
  if (typeof classes == 'string') {
    classes = [ classes ];
  }
  if (classes) {
    classes.forEach(function(c) { el.classList.add(c) });
  }
  return el;
}


// Media

function playPause(element) {
  if (element) {
    if (element.ended || element.paused || element.classList.contains('paused')) {
      element.play();
      element.classList.remove('paused');
    }
    else {
      element.pause();
      element.classList.add('paused');
    }
  }
}

function play(element) {
  if (element) {
    element.play();
    if (element.classList.contains('paused')) {
      element.classList.remove('paused');
    }
  }
}

function pause(element) {
  if (element) {
    element.pause();
    if (!element.classList.contains('paused')) {
      element.classList.add('paused');
    }
  }
}


// Misc.

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function executeCallback(callback) {
  if (typeof callback !== 'undefined') {
    callback();
  }
}

function increment(value, length) {
  return (value + 1) % length;
}

function modulo(a,n) {
  return ((a % n ) + n ) % n;
}

function precise(number, precision) {
  let p = Math.floor(precision);
  return Number.parseFloat(number).toPrecision(p);
}


// Domain specific element methods

function zoneSpanFromElement(el) {
  let span = 1;
  for (i = 0; i < el.classList.length; i++) {
    let testClass = el.classList[i];
    if (testClass.match(/span\-\d+$/)) {
      span = parseInt(testClass.replace('span-', ''));
      break;
    }
  }
  return span;
}


function zoneNumberFromElement(el) {
  let zone;
  for (i = 0; i < el.classList.length; i++) {
    let testClass = el.classList[i];
    if (testClass.match(/zone\-\d+$/)) {
      zone = parseInt(testClass.replace('zone-', ''));
      break;
    }
  }
  return zone;
}

