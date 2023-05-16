let theWheel2 = new Winwheel({
        'canvasId' : 'thingWheelCanvas',
        'numSegments' : 4,
        'innerRadius'   : 20,
        'textFontFamily' : 'Courier',
        'segments'    :
        [
            {'fillStyle' : '#4ed4c6', 'text' : 'doc1'},
            {'fillStyle' : '#baf4ee', 'text' : 'doc2'},
            {'fillStyle' : '#4ed4c6', 'text' : 'doc3'},
            {'fillStyle' : '#baf4ee', 'text' : 'doc4'}
        ],
        'animation' :                   // Note animation properties passed in constructor parameters.
    {
        'type'     : 'spinToStop',  // Type of animation.
        'duration' : 8,             // How long the animation is to take in seconds.
        'spins'    : 10              // The number of complete 360 degree rotations the wheel is to do.
    }
    });
