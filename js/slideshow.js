function Slideshow(options) {
  if (options.element && options.playlist) {
    this.element = options.element;
    this.options = options;
    if (!this.element.classList.contains('slideshow')) {
      this.element.classList.add('slideshow')
    }
    this.playlist = options.playlist;
    this.playlistCurrentIndex = 0;
    this.transDuration = options.transDuration || 1000;
    this.displayInterval = options.displayInterval || 10000;
    this.initialize();
  }
}


Slideshow.prototype.initialize = function() {
  // add 2 wrappers
  let wrapper1 = htmlToElement('<div class="slide-wrapper" id="#slide-wrapper1"></div>');
  let wrapper2 = htmlToElement('<div class="slide-wrapper" id="#slide-wrapper2"></div>');
  this.topZ = 200;
  this.bottomZ = 100;
  wrapper1.style.zIndex = this.bottomZ;
  wrapper2.style.zIndex = this.topZ;
  wrapper2.style.opacity = 0;
  this.element.appendChild(wrapper1);
  this.element.appendChild(wrapper2);
  this.currentWrapper = wrapper1;
  this.nextWrapper = wrapper2;
  // load first image
  this.loadImage(wrapper1);
  this.running = false;
  if (this.options.autoStart !== false) {
    //start cycling
    this.cycleImages();
  }
}


Slideshow.prototype.loadImage = function(wrapper) {
  let src = this.nextImage();
  removeAllChildNodes(wrapper);
  let img = generateElement('img');
  img.setAttribute('src', src);
  wrapper.appendChild(img)
}


Slideshow.prototype.nextImage = function() {
  let image = this.playlist[this.playlistCurrentIndex];
  if (this.playlistCurrentIndex >= (this.playlist.length - 1)) {
    this.playlistCurrentIndex = 0;
  }
  else {
    this.playlistCurrentIndex++;
  }
  return image;
}


Slideshow.prototype.cycleImages = function() {
  if (!this.running) {
    var _this = this;
    var swapImage = function() {
      let wrapperIn = _this.nextWrapper;
      let wrapperOut = _this.currentWrapper;
      _this.loadImage(wrapperIn);
      fadeOut(wrapperOut, _this.transDuration * 0.8);
      fadeIn(wrapperIn, _this.transDuration, function() {
        _this.nextWrapper = wrapperOut;
        _this.currentWrapper = wrapperIn;
        _this.nextWrapper.style.zIndex = _this.topZ;
        _this.currentWrapper.style.zIndex = _this.bottomZ;
      });
    }
    setInterval(swapImage, this.displayInterval);
    this.running = true;
  }
}

