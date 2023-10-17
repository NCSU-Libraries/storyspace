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

  

  // ** SECTION 2: SCENE DEFINITIONS **

  // Define scenes here via conf.addScene()
  // Copy from the examples below to get started
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


  // This scene alternates between an image and empty zones of different colors, and starts at 10 seconds
  /*
  conf.addScene({
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/demo/demo1.png' },
      { zone: 2, backgroundColor: '#D14905' },
      { zone: 3, contentType: 'image', filePath: 'media/images/demo/demo1.png' },
      { zone: 4, backgroundColor: '#FAC800'},
      { zone: 5, contentType: 'image', filePath: 'media/images/demo/demo1.png' },
      { zone: 6, backgroundColor: '#6F7D1C' },
      { zone: 7, contentType: 'image', filePath: 'media/images/demo/demo1.png' },
      { zone: 8, backgroundColor: '#008473' }
    ],
    startTime: 10
  })
  */


  // This scene has modScene: true set. It will replace the contents of zones 2,4,6 and 8 only,
  //   leaving the rest of the content from the previous scene
  /*
  conf.addScene({
    modScene: true,
    layout: [
      { zone: 2, contentType: 'image', filePath: 'media/images/demo/fly.png' },
      { zone: 4, contentType: 'image', filePath: 'media/images/demo/fly.png' },
      { zone: 6, contentType: 'image', filePath: 'media/images/demo/fly.png' },
      { zone: 8, contentType: 'image', filePath: 'media/images/demo/fly.png' }
    ],
    startTime: 12
  })
  */



  // *** No edits below here ***
  return conf;
}
