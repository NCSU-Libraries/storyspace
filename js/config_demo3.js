function config() {
  var conf = new StoryspaceConfig();
  // *** No edits above here ***  

  // Specify path to audio file
  conf.audioFilePath = 'media/audio/demo/fivetones.mp3';


  // Scenes are defined here via conf.addScene()

  // Scene 1 does not specify startTime because it's the first scene and starts at 0
  conf.addScene({
    layout: [
      { zone: 2, contentType: 'image', filePath: 'media/images/demo/demo1.png' },
      { zone: 4, contentType: 'image', filePath: 'media/images/demo/demo1.png' },
      { zone: 6, contentType: 'image', filePath: 'media/images/demo/demo1.png' },
      { zone: 8, contentType: 'image', filePath: 'media/images/demo/demo1.png' }
    ],
    backgroundColor: '#cc0000'
  })


  // Scene 2 starts at 3.875 seconds in. You do not need to be this specific – the value could just be an integer (e.g. 3)
  conf.addScene({
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/demo/demo2.png' },
      { zone: 3, contentType: 'image', filePath: 'media/images/demo/demo2.png' },
      { zone: 5, contentType: 'image', filePath: 'media/images/demo/demo2.png' },
      { zone: 7, contentType: 'image', filePath: 'media/images/demo/demo2.png' }
    ],
    startTime: 3.875,
    backgroundColor: '#00cc00'
  })


  // Scene 3 starts at 7.875 seconds
  conf.addScene({
    layout: [
      { zone: 1, backgroundColor: '#00cc00' },
      { zone: 2, contentType: 'image', filePath: 'media/images/demo/demo3.png' },
      { zone: 3, backgroundColor: '#0000cc' },
      { zone: 4, contentType: 'image', filePath: 'media/images/demo/demo3.png' },
      { zone: 5, backgroundColor: '#003300' },
      { zone: 6, contentType: 'image', filePath: 'media/images/demo/demo3.png' },
      { zone: 7, backgroundColor: '#cc0000' },
      { zone: 8, contentType: 'image', filePath: 'media/images/demo/demo3.png' }
    ],
    startTime: 7.875
  })


  // Scene 4 starts at 11.875 seconds
  conf.addScene({
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/demo/demo4.png' },
      { zone: 2, contentType: 'image', filePath: 'media/images/demo/swamp.png' },
      { zone: 3, contentType: 'image', filePath: 'media/images/demo/demo4.png' },
      { zone: 4, contentType: 'image', filePath: 'media/images/demo/flowers.png' },
      { zone: 5, contentType: 'image', filePath: 'media/images/demo/demo4.png' },
      { zone: 6, contentType: 'image', filePath: 'media/images/demo/swamp.png' },
      { zone: 7, contentType: 'image', filePath: 'media/images/demo/demo4.png' },
      { zone: 8, contentType: 'image', filePath: 'media/images/demo/flowers.png' }
    ],
    startTime: 11.875
  })


  // Scene 5 starts at 15.875 seconds
  conf.addScene({
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/demo/tundra.png' },
      { zone: 2, contentType: 'image', filePath: 'media/images/demo/demo5.png' },
      { zone: 3, contentType: 'video', filePath: 'media/video/demo/teddy.mp4' },
      { zone: 4, contentType: 'image', filePath: 'media/images/demo/demo5.png' },
      { zone: 5, contentType: 'image', filePath: 'media/images/demo/tundra.png' },
      { zone: 6, contentType: 'image', filePath: 'media/images/demo/demo5.png' },
      { zone: 7, contentType: 'video', filePath: 'media/video/demo/teddy.mp4' },
      { zone: 8, contentType: 'image', filePath: 'media/images/demo/demo5.png' }
    ],
    startTime: 15.875
  })


  // The last scene starts at 20 seconds and continues to the end of the audio, after which the presention starts over
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
