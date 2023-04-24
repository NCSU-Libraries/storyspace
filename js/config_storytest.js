function config() {
  var conf = new StoryspaceConfig();

// *** No edits above here ***

  conf.storyMode = true;
  
  // Set transition interval (fade time) in milliseconds
  conf.transitionInterval = 1000;
  conf.defaultGrid = 8;
  conf.loopMedia = false;
  // conf.backgroundColor = '#8bad38';
  conf.masterAudioFilePath = 'media/audio/demo/fivetones.mp3';
  // conf.masterAudioId = 'urban-bees';


  conf.addScene({
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/demo/demo1.png' },
      { zone: 3, contentType: 'image', filePath: 'media/images/demo/demo1.png' },
      { zone: 5, contentType: 'image', filePath: 'media/images/demo/demo1.png' },
      { zone: 7, contentType: 'image', filePath: 'media/images/demo/demo1.png' }
    ],
    backgroundColor: '#00feff'

  })


  conf.addScene({
    layout: [
      { zone: 2, contentType: 'image', filePath: 'media/images/demo/demo2.png' },
      { zone: 4, contentType: 'image', filePath: 'media/images/demo/demo2.png' },
      { zone: 6, contentType: 'image', filePath: 'media/images/demo/demo2.png' },
      { zone: 8, contentType: 'image', filePath: 'media/images/demo/demo2.png' }
    ],
    startTime: 4,
    backgroundColor: '#0000ff'
  })


  conf.addScene({
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/demo/demo3.png' },
      { zone: 3, contentType: 'image', filePath: 'media/images/demo/demo3.png' },
      { zone: 5, contentType: 'image', filePath: 'media/images/demo/demo3.png' },
      { zone: 7, contentType: 'image', filePath: 'media/images/demo/demo3.png' }
    ],
    startTime: 8,
    backgroundColor: '#ff00fd'
  })


  conf.addScene({
    layout: [
      { zone: 2, contentType: 'image', filePath: 'media/images/demo/demo4.png' },
      { zone: 4, contentType: 'image', filePath: 'media/images/demo/demo4.png' },
      { zone: 6, contentType: 'image', filePath: 'media/images/demo/demo4.png' },
      { zone: 8, contentType: 'image', filePath: 'media/images/demo/demo4.png' }
    ],
    startTime: 12,
    backgroundColor: '#fcff00'
  })


  conf.addScene({
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/demo/demo5.png' },
      { zone: 3, contentType: 'image', filePath: 'media/images/demo/demo5.png' },
      { zone: 5, contentType: 'image', filePath: 'media/images/demo/demo5.png' },
      { zone: 7, contentType: 'image', filePath: 'media/images/demo/demo5.png' }
    ],
    startTime: 16,
    backgroundColor: '#00ff03'
  })


  conf.addScene({
    layout: [
      { zone: 1, span: 12, contentType: 'html', content: '<div></div>'}
    ],
    startTime: 20,
    backgroundColor: '#000'
  })



  // *** No edits below here ***
  return conf;
}
