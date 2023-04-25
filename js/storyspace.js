// ** StoryspaceConfig **
// StoryspaceConfig handles configuration for Storyspace

function StoryspaceConfig() {
  this.scenes = [];
  this.transitionInterval = null;
  // We can add more config attributes later
}

StoryspaceConfig.prototype.addScene = function(sceneConfig) {
  if (sceneConfig.layouts) {
    sceneConfig.layouts.sort(function(a,b) { return a.zone - b.zone });
  }
  this.scenes.push(sceneConfig);
}


// ** Storyspace **
// Storyspace is the presentation proper

function Storyspace(selector, config) {
  this.root = document.querySelector(selector);

  if (!this.root) {
    console.log("Root element '" + selector + "' element does not exist!");
  }
  else if (!config) {
    console.log('config is required!');
  }
  else if (!config.scenes) {
    console.log("config must include at least one scene in config['scenes']!");
  }
  else {
    this.config = config;
    this.initialize();
  }

  return this;
}


// configuration and initialization

Storyspace.prototype.initialize = function() {
  this.setDefaults();
  this.setRootStyles();
  this.initializeZoneWrappers();
  this.initializeScenes();
  this.enableKeyboardConrol();
}


Storyspace.prototype.restart = function() {
  this.initialize();
  this.start();
}


Storyspace.prototype.setDefaults = function() {
  this.started = false;
  this.transitioning = false;
  this.sceneIndex = 0;
  this.zoneWrapperTopIndex = 0;
  this.zoneWrapperNextIndex = 1;
  this.grids = [12,10,8];
  this.defaultGrid = this.config.defaultGrid || null; // null default will use 12-zone grid
  this.loopMedia = (this.config.loopMedia !== false) ? true : false;
  this.queuedSlideshows = [];
  if (this.config.transitionInterval === 0) {
    this.transitionInterval = 0;
  }
  else {
    this.transitionInterval = this.config.transitionInterval || 1000;
  }

  let minGap = this.transitionInterval / 1000;

  if (this.config.gapTime && this.config.gapTime >= minGap) {
    this.gapTime = this.config.gapTime
  }
  else {
    this.gapTime = 2;
  }

  this.fadeColor = this.config.fadeColor || '#000000'

  this.initializeMainAudio();
  
  // deep copy config.scenes to this.scenes
  this.scenes = [];
  for (const scene of this.config.scenes) {
    this.scenes.push(scene);
  }

  this.processScenes();
  // console.log(this.scenes);
}


Storyspace.prototype.setRootStyles = function() {
  // if (this.config.backgroundColor) {
  //   this.root.style.background = this.config.backgroundColor;
  // }

  if (this.config.fontColor) {
    this.root.style.color = this.config.fontColor;
  }
}


Storyspace.prototype.initializeMainAudio = function() {
  this.mainAudio = null;

  if (this.config.audioFilePath) {
    this.mainAudioWrapper = document.querySelector("#main-audio");
    let audioElementHtml = '<audio src="' + this.config.audioFilePath + '" class="paused">';
    this.mainAudio = htmlToElement(audioElementHtml);
    this.mainAudio.id = this.config.mainAudioId || 'main-audio-element';
    this.mainAudioWrapper.appendChild(this.mainAudio);
  }
}


Storyspace.prototype.initializeZoneWrappers = function() {
  // Delete everything in this.root first
  removeAllChildNodes(this.root);
  this.zoneWrappers = this.root.querySelectorAll('.zone-wrapper');
  this.zoneWrapperTop = htmlToElement('<div class="zone-wrapper to-fade-in" id="zone-wrapper-1"></div>');
  this.zoneWrapperNext = htmlToElement('<div class="zone-wrapper to-fade-in" id="zone-wrapper-2"></div>');
  this.root.appendChild(this.zoneWrapperTop);
  this.root.appendChild(this.zoneWrapperNext);
  this.zoneWrapperTop.style.zIndex = 1;
  this.zoneWrapperNext.style.zIndex = 0;
}


Storyspace.prototype.initializeScenes = function() {
  let scene1 = this.scenes[this.sceneIndex];
  this.initializeLayout(this.zoneWrapperTop, scene1);
  this.loadContent(this.zoneWrapperTop, scene1);
  this.incrementSceneIndex();
  let scene2 = this.scenes[this.sceneIndex];
  this.initializeLayout(this.zoneWrapperNext, scene2);
  this.loadContent(this.zoneWrapperNext, scene2);
  this.nextScene = scene2;
  this.incrementSceneIndex();
}


Storyspace.prototype.processScenes = function() {
  this.scenes.forEach(function(scene) {
    if (!scene.startTime) {
      scene.startTime = 0;
    }
  });

  function sceneSort(a, b) {
    return a.startTime - b.startTime;
  }

  this.scenes = this.scenes.sort(sceneSort);

  for (let i = 0; i < this.scenes.length; i++) {
    let thisScene = this.scenes[i];
    let nextScene = this.scenes[i + 1];
    thisScene.autoAdvanceMediaTime = nextScene ? nextScene.startTime : null;
    thisScene.autoAdvanceMediaId = this.mainAudio.id;
  }

  // add blank scene at end
  let tailScene = {
    layout: [
      { zone: 1, span: 12, contentType: 'html', content: '<div></div>'}
    ],
    backgroundColor: this.fadeColor,
    autoAdvanceTime: this.gapTime
  }

  this.scenes.push(tailScene);
}


// Presentation control

Storyspace.prototype.incrementSceneIndex = function() {
  // this.sceneIndex = increment(this.sceneIndex, this.scenes.length - 1);
  this.sceneIndex = this.sceneIndex + 1;
  if (this.sceneIndex >= this.scenes.length) {
    // setting this.sceneIndex = null here triggers restart at the end of the story
    this.sceneIndex = null;
  }
  console.log(this.sceneIndex);
}


Storyspace.prototype.loadNext = function() {
  this.restartOnAdvance = (this.sceneIndex === null) ? true : false;
  console.log(this.restartOnAdvance);
  if (!this.restartOnAdvance) {
    var scene = this.scenes[this.sceneIndex];
    this.initializeLayout(this.zoneWrapperNext, scene);
    this.loadContent(this.zoneWrapperNext, scene);
    this.nextScene = scene;
    this.incrementSceneIndex();
  }
}


Storyspace.prototype.loadPrev = function() {
  // At this point the next scene has already been loaded, and this.sceneIndex has been incremented to the one after
  // That means that this.sceneIndex is 2 past the current scene's index
  // So to load the previous one, you need to set that number back by 3
  var indexMinus2 = modulo((this.sceneIndex - 3), this.scenes.length);
  this.sceneIndex = (indexMinus2 >= 0) ? indexMinus2 : ((this.scenes.length - 1) + indexMinus2);
  
  // console.log("loadPrev " + this.sceneIndex);

  var scene = this.scenes[this.sceneIndex];
  this.initializeLayout(this.zoneWrapperNext, scene);
  this.loadContent(this.zoneWrapperNext, scene);
  this.nextScene = scene;
  this.incrementSceneIndex();
}


Storyspace.prototype.start = function() {
  var _this = this;
  // this.loadNext();
  this.restartChildVideoPlayers(this.zoneWrapperTop);
  this.transitioning = true;

  fadeIn(this.zoneWrapperTop, this.transitionInterval, function() {
    let top = _this.zoneWrapperTop;
    top.classList.remove('to-fade-in');
    _this.transitioning = false;
    _this.checkElementAutoAdvance(top);
    _this.root.style.background = _this.fadeColor;
  });

  this.startQueuedSlideshows();
  
  if (this.mainAudio) {
    // console.log(this.mainAudio);
    this.playPause(this.mainAudio);
  }

  this.started = true;
}


// NOTE: this.sceneIndex at this point is the index of the scene to be loaded in the background, not the one about to be displayed.
// the current scene use modulo(this.sceneIndex -1, this.scenes.length)
Storyspace.prototype.advance = function(options) {
  options ||= {};
  var skip = options.skip || false;
  var back = options.back || false;

  console.log('advance');
  console.log(this.sceneIndex);

  this.transitioning = true;
  var _this = this;

  let transitionInterval = this.transitionInterval;

  if (this.nextScene.transitionInterval === 0) {
   transitionInterval = 0;
  }
  else if (this.nextScene.transitionInterval) {
   transitionInterval = this.nextScene.transitionInterval;
  }

  this.zoneWrapperNext.style.opacity = 0;
  this.zoneWrapperNext.style.zIndex = 1000;
  this.zoneWrapperTop.style.zIndex = 0;
  
  this.restartChildVideoPlayers(this.zoneWrapperNext);

  if (skip) {
    console.log('skip');
    console.log(this.nextScene.startTime);
    
    if (this.mediaTimeAdvanceInterval) {
      clearInterval(this.mediaTimeAdvanceInterval);
    }

    if (this.mainAudio && this.nextScene.startTime) {
      this.mainAudio.currentTime = this.nextScene.startTime;
    }
  }

  let currentSceneIndex = modulo(this.sceneIndex - 1, this.scenes.length);

  if (currentSceneIndex == 0) {
    pause(this.mainAudio);
    this.mainAudio.currentTime = 0;
    play(this.mainAudio);
  }

  fadeIn(this.zoneWrapperNext, transitionInterval, function() {
    var newNext = _this.zoneWrapperTop;
    var newTop = _this.zoneWrapperNext;
    _this.zoneWrapperTop = newTop;
    _this.zoneWrapperNext = newNext;

    //
    _this.zoneWrapperNext.style.opacity = 0;
    _this.zoneWrapperNext.style.zIndex = 1000;
    _this.zoneWrapperTop.style.zIndex = 0;
    //

    _this.transitioning = false;

    if (!_this.restartOnAdvance) {
      _this.loadNext();
    }
    
    _this.checkElementAutoAdvance(newTop);
  });
  this.startQueuedSlideshows();
}


Storyspace.prototype.reverse = function() {
  console.log('reverse');
  this.loadPrev();
  this.advance({skip: true});
}


Storyspace.prototype.enableKeyboardConrol = function() {
  var _this = this;

  var keyboardControlMapping = function(event) {
    // var _this = this;
    var keyCode = event.keyCode;
    // s for start
    if (!_this.started) {
      _this.start();
    }
    else if (_this.started) {
      switch(keyCode) {
        // spacebar
        case 32:
          _this.playPause();
          console.log('spacebar');
          break;
        // n
        case 78:
          if (!_this.transitioning) {
            _this.advance({skip: true});
          }
        // b
        case 66:
          if (!_this.transitioning) {
            _this.reverse();
          }
          break;
        // p
        case 80:
          break;
        // arrow right
        case 39:
          break;
        // arrow left
        case 37:
          break;
      }
    }
  }

  document.removeEventListener('keydown', keyboardControlMapping);
  document.addEventListener('keydown', keyboardControlMapping);
}


// Scene controls

Storyspace.prototype.initializeLayout = function(zoneWrapper, scene) {
  var layout = scene.layout;

  layout = layout.sort(function(a,b) { return a.zone - b.zone });
  
  // TODO: Support modification scenes (replace content in specific zones rather than replacing the entire scene)
  removeAllChildNodes(zoneWrapper);

  if (!scene.grid) {
    scene.grid = this.defaultGrid;
  }

  if (scene.backgroundColor) {
    zoneWrapper.style.backgroundColor = scene.backgroundColor;
  }
  else if (this.config.backgroundColor) {
    zoneWrapper.style.background = this.config.backgroundColor;
  }
  else {
    zoneWrapper.style.backgroundColor = null;
  }

  if (scene.backgroundImage) {
    zoneWrapper.style.backgroundImage = "url('" + scene.backgroundImage + "')";
  }
  
  // Reset zone wrapper classes
  for (var i = 0; i < this.grids.length; i++) {
    let classname = 'grid-' + this.grids[i];
    zoneWrapper.classList.remove(classname);
  }

  if (scene.grid && this.grids.indexOf(scene.grid) >= 0) {
    zoneWrapper.classList.add('grid-' + scene.grid);
  }

  for (i = 0; i < layout.length; i++) {
    let zoneConf = layout[i];
    let zoneId = "zone-" + zoneConf.zone;
    let zoneClasses = ['zone', zoneId];
    if (zoneConf.span) {
      zoneClasses.push("span-" + zoneConf.span);
    }
    let zone = generateElement('div', zoneClasses);
    // zone.id = zoneId;
    let wrapper = generateElement('div', 'wrapper');
    zone.appendChild(wrapper);
    zoneWrapper.appendChild(zone);
  }
}

Storyspace.prototype.loadContent = function(zoneWrapper, scene) {
  var layout = scene.layout;
  layout = layout.sort(function(a,b) { return a.zone - b.zone });
  
  zoneWrapper.removeAttribute('data-auto-advance-media-id');
  zoneWrapper.removeAttribute('data-auto-advance-time');
  zoneWrapper.removeAttribute('data-auto-advance-media-time');

  if (scene.autoAdvanceTime) {
    zoneWrapper.setAttribute('data-auto-advance-time', scene.autoAdvanceTime);
  }
  else if (scene.autoAdvanceMediaId) {
    zoneWrapper.setAttribute('data-auto-advance-media-id', scene.autoAdvanceMediaId);
    if (scene.autoAdvanceMediaTime) {
      zoneWrapper.setAttribute('data-auto-advance-media-time', scene.autoAdvanceMediaTime);
    }
  }

  var imgHtml = '<img src="">';
  var videoHtml = '<video src="" class="paused"></video>';
  var divHtml = '<div class="zone-content-html"></div>';

  for (var i = 0; i < layout.length; i++) {
    var zoneConf = layout[i];
    zoneConf.loop ||= this.loopMedia;
    var zoneId = "zone-" + zoneConf.zone;
    var zoneSelector = '.zone.' + zoneId;
    var zone = zoneWrapper.querySelector(zoneSelector);

    if (zone) {
      var wrapper = zone.querySelector('.wrapper');
      var el;

      switch (zoneConf.contentType) {
      case 'video':
        el = htmlToElement(videoHtml);
        el.src = zoneConf.filePath;
        
        if (zoneConf.loop !== false) {
          el.setAttribute('loop','loop');
        }

        if (zoneConf.muted !== false) {
          // el.setAttribute('muted',1);
          el.muted = "muted";
        }
        break;
      case 'image':
        el = htmlToElement(imgHtml);
        el.src = zoneConf.filePath;
        break;
      case 'slideshow':
        el = htmlToElement('<div class="slideshow" id="slideshow"></div>');
        break;
      case 'html':
        el = htmlToElement(divHtml);
        if (zoneConf.content) {
          el.innerHTML = zoneConf.content;
        }
        break;
      }

      if (zoneConf.id) {
        el.setAttribute('id', zoneConf.id);
      }

      if (el) {
        if (zoneConf.caption) {
          let contentEl = generateElement('div','content');
          contentEl.appendChild(el);
          let caption = generateElement('div','caption');
          caption.innerHTML = zoneConf.caption;
          wrapper.classList.add('with-caption');
          wrapper.appendChild(contentEl);
          wrapper.appendChild(caption);
        }
        else {
          wrapper.appendChild(el);
        }
      }

      if (zoneConf.contentType == 'slideshow') {
        let list = zoneConf.fileList;
        let interval = zoneConf.interval ? (parseFloat(zoneConf.interval) * 1000) : null;
        let slideshow = new Slideshow({ element: el, playlist: list, displayInterval: interval, autoStart: false });
        this.queuedSlideshows.push(slideshow)
      }

      if (zoneConf.backgroundColor) {
        wrapper.style.backgroundColor = zoneConf.backgroundColor;
      }

      if (zoneConf.callback) {
        executeCallback(zoneConf.callback);
      }
    }
  }
}


// Scene auto-advance controls 

Storyspace.prototype.checkElementAutoAdvance = function(element) {

  // console.log(element);

  if (element.hasAttribute('data-auto-advance-time')) {
    let time = parseFloat(element.getAttribute('data-auto-advance-time'));

    if (time && !Number.isNaN(time)) {
      this.intervalAdvance(time * 1000);
    }
    
  }
  else if (element.hasAttribute('data-auto-advance-media-id')) {
    let mediaObject;

    mediaObject = this.mainAudio;

    if (mediaObject) {
      if (element.hasAttribute('data-auto-advance-media-time')) {
        let time = parseFloat(element.getAttribute('data-auto-advance-media-time'));
        this.mediaTimeAdvance(mediaObject,time * 1000);
      }
      else {
        this.mediaAdvance(mediaObject);
      }
    }
  }
}


Storyspace.prototype.advanceOrRestart = function() {
  if (this.restartOnAdvance) {
    this.restartOnAdvance = false;
    this.restart();
  }
  else {
    this.advance();
  }
}


Storyspace.prototype.mediaTimeAdvance = function(mediaObject, time) {
  // console.log('mediaTimeAdvance');
  // console.log(mediaObject);

  var _this = this;

  time = time / 1000;
  // console.log(time);
 
  this.mediaTimeAdvanceInterval = setInterval(function() {
    if (mediaObject.currentTime >= time) {
      clearInterval(_this.mediaTimeAdvanceInterval);
      _this.advanceOrRestart();
    }
  }, 10);
}


Storyspace.prototype.intervalAdvance = function(interval) {
  var _this = this;
  setTimeout(function() {
    _this.advanceOrRestart();
  }, interval);
}


Storyspace.prototype.mediaAdvance = function(mediaObject) {
  var _this = this;
  mediaObject.addEventListener('ended', function() {
    this.classList.add('paused');
    _this.advanceOrRestart();
  });
}


// Content controls

Storyspace.prototype.loadVideo = function(wrapper, src) {
  var player = wrapper.querySelector('video');
  player.src = src;
}


Storyspace.prototype.loadImage = function(wrapper, src) {
  var img = wrapper.querySelector('img');
  img.src = src;
}


Storyspace.prototype.restartChildVideoPlayers = function(element) {
  var players = element.querySelectorAll('video');
  players.forEach(function(player) { pause(player); });
  players.forEach(function(player) { player.currentTime = 0; });
  players.forEach(function(player) { play(player); });
}


Storyspace.prototype.startQueuedSlideshows = function() {
  if (this.queuedSlideshows.length > 0) {
    this.queuedSlideshows.forEach(function(slideshow) {
      slideshow.cycleImages();
    });
    this.queuedSlideshows = [];
  }
}


Storyspace.prototype.playPause = function(element) {
  var players;
  
  console.log('playPause. element:');
  console.log(element ? element : 'NULL');

  if (element) {

    let name = element.tagName.toLowerCase();
    if (name == 'audio' || element.tagName == 'video') {
      // console.log(element);
      players = [element];
    }
    else {
      players = element.querySelectorAll('video,audio');
    }
  }
  else {
    players = this.zoneWrapperTop.querySelectorAll('video,audio');
    players = Array.prototype.slice.call(players);
    if (this.mainAudio) {
      players.push(this.mainAudio);
    }
  }

  players.forEach(function(player) {
    playPause(player);
  });
}
