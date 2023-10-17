function config() {
  var conf = new StoryspaceConfig();
  // *** No edits above here ***  
  


  // ** SECTION 1: GLOBAL SETTINGS **

  // This first section is for setting global variables
  //   (i.e. settings that apply to the entire presentation)
  // In each case, the value provided in the commented code is the default.

  // Specify path to audio file - this is the only one that is required
  conf.audioFilePath = 'media/audio/demo/fivetones.mp3';

  // Set transition interval (fade time) in MILLISECONDS
  // conf.transitionInterval = 300;

  // Set default grid
  // conf.defaultGrid = 8;

  // Set default background color
  // conf.backgroundColor = '#000';

  // Specify if video content should loop
  // conf.loopMedia = true;

  // Set gap time (between story end and restart or next story) in SECONDS
  // conf.gapTime = 2;

  

  // ** SECTION 2: SCENES **

  // Define scenes here via conf.addScene()
  // Copy the examples below to get started
  // Note that it does not include

  // This scene alternates between a video and an image
  /*
  conf.addScene({
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/demo/demo1.png' },
      { zone: 2, contentType: 'video', filePath: 'media/video/demo/turnstile.mp4' },
      { zone: 3, contentType: 'image', filePath: 'media/images/demo/demo1.png' },
      { zone: 4, contentType: 'video', filePath: 'media/video/demo/turnstile.mp4' },
      { zone: 5, contentType: 'image', filePath: 'media/images/demo/demo1.png' },
      { zone: 6, contentType: 'video', filePath: 'media/video/demo/turnstile.mp4' },
      { zone: 7, contentType: 'image', filePath: 'media/images/demo/demo1.png' },
      { zone: 8, contentType: 'video', filePath: 'media/video/demo/turnstile.mp4' }
    ]
  })
  */

  // This scene alternates between a video and an image
  /*
  conf.addScene({
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/demo/demo1.png' },
      { zone: 2, contentType: 'video', filePath: 'media/video/demo/turnstile.mp4' },
      { zone: 3, contentType: 'image', filePath: 'media/images/demo/demo1.png' },
      { zone: 4, contentType: 'video', filePath: 'media/video/demo/turnstile.mp4' },
      { zone: 5, contentType: 'image', filePath: 'media/images/demo/demo1.png' },
      { zone: 6, contentType: 'video', filePath: 'media/video/demo/turnstile.mp4' },
      { zone: 7, contentType: 'image', filePath: 'media/images/demo/demo1.png' },
      { zone: 8, contentType: 'video', filePath: 'media/video/demo/turnstile.mp4' }
    ],
  })
  */



  // *** No edits below here ***
  return conf;
}
