function config() {
  var conf = new StoryspaceConfig();

// *** No edits above here ***  
  // Set transition interval (fade time) in MILLISECONDS
  conf.transitionInterval = 250
  conf.defaultGrid = 8
  conf.loopMedia = true

  // Set gap time (between story end and restart or next story) in SECONDS
  // conf.gapTime = 5;

  // conf.backgroundColor = '#8bad38';
  conf.audioFilePath = 'media/audio/demo/fivetones.mp3';


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


  conf.addScene({
    modScene: true,
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/demo/demo2.png' },
      { zone: 3, contentType: 'image', filePath: 'media/images/demo/demo2.png' },
      { zone: 5, contentType: 'image', filePath: 'media/images/demo/demo2.png' },
      { zone: 7, contentType: 'image', filePath: 'media/images/demo/demo2.png' }
    ],
    startTime: 3.875,
  })


  conf.addScene({
    modScene: true,
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/demo/demo3.png' },
      { zone: 3, contentType: 'image', filePath: 'media/images/demo/demo3.png' },
      { zone: 5, contentType: 'image', filePath: 'media/images/demo/demo3.png' },
      { zone: 7, contentType: 'image', filePath: 'media/images/demo/demo3.png' }
    ],
    startTime: 7.875
  })


  conf.addScene({
    modScene: true,
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/demo/demo4.png' },
      { zone: 3, contentType: 'image', filePath: 'media/images/demo/demo4.png' },
      { zone: 5, contentType: 'image', filePath: 'media/images/demo/demo4.png' },
      { zone: 7, contentType: 'image', filePath: 'media/images/demo/demo4.png' }
    ],
    startTime: 11.875
  })


  conf.addScene({
    modScene: true,
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/demo/demo5.png' },
      { zone: 3, contentType: 'image', filePath: 'media/images/demo/demo5.png' },
      { zone: 5, contentType: 'image', filePath: 'media/images/demo/demo5.png' },
      { zone: 7, contentType: 'image', filePath: 'media/images/demo/demo5.png' }
    ],
    startTime: 15.875
  })


  conf.addScene({
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/demo/stripes.png' },
      { zone: 2, contentType: 'image', filePath: 'media/images/demo/stripes.png' },
      { zone: 3, contentType: 'image', filePath: 'media/images/demo/stripes.png' },
      { zone: 4, contentType: 'image', filePath: 'media/images/demo/stripes.png' },
      { zone: 5, contentType: 'image', filePath: 'media/images/demo/stripes.png' },
      { zone: 6, contentType: 'image', filePath: 'media/images/demo/stripes.png' },
      { zone: 7, contentType: 'image', filePath: 'media/images/demo/stripes.png' },
      { zone: 8, contentType: 'image', filePath: 'media/images/demo/stripes.png' }
    ],
    startTime: 20
  })



  // *** No edits below here ***
  return conf;
}
