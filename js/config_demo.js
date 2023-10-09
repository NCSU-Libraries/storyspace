function config() {
  var conf = new StoryspaceConfig();

// *** No edits above here ***  

  conf.audioFilePath = 'media/audio/demo/fivetones.mp3';

  conf.addScene({
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/demo/flowers.png' },
      { zone: 2, contentType: 'image', filePath: 'media/images/demo/demo1.png' },
      { zone: 3, contentType: 'video', filePath: 'media/video/demo/teddy.mp4' },
      { zone: 4, contentType: 'image', filePath: 'media/images/demo/demo1.png' },
      { zone: 5, contentType: 'image', filePath: 'media/images/demo/flowers.png' },
      { zone: 6, contentType: 'image', filePath: 'media/images/demo/demo1.png' },
      { zone: 7, contentType: 'video', filePath: 'media/video/demo/teddy.mp4' },
      { zone: 8, contentType: 'image', filePath: 'media/images/demo/demo1.png' }
    ]
  })


  conf.addScene({
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/demo/demo2.png' },
      { zone: 2, contentType: 'image', filePath: 'media/images/demo/prarie.png' },
      { zone: 3, contentType: 'image', filePath: 'media/images/demo/demo2.png' },
      { zone: 4, contentType: 'image', filePath: 'media/images/demo/fly.png' },
      { zone: 5, contentType: 'image', filePath: 'media/images/demo/demo2.png' },
      { zone: 6, contentType: 'image', filePath: 'media/images/demo/prarie.png' },
      { zone: 7, contentType: 'image', filePath: 'media/images/demo/demo2.png' },
      { zone: 8, contentType: 'image', filePath: 'media/images/demo/fly.png' }
    ],
    startTime: 3.875
  })


  conf.addScene({
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/demo/tundra.png' },
      { zone: 2, contentType: 'image', filePath: 'media/images/demo/demo3.png' },
      { zone: 3, contentType: 'video', filePath: 'media/video/demo/pearl.mp4' },
      { zone: 4, contentType: 'image', filePath: 'media/images/demo/demo3.png' },
      { zone: 5, contentType: 'image', filePath: 'media/images/demo/tundra.png' },
      { zone: 6, contentType: 'image', filePath: 'media/images/demo/demo3.png' },
      { zone: 7, contentType: 'video', filePath: 'media/video/demo/pearl.mp4' },
      { zone: 8, contentType: 'image', filePath: 'media/images/demo/demo3.png' }
    ],
    startTime: 7.875
  })


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
