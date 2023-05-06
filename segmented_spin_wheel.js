let theWheel = new Winwheel({
        'numSegments' : 4,
        'segments'    :
        [
            {'fillStyle' : '#4ed4c6', 'text' : 'Amy'},
            {'fillStyle' : '#4ed4c6', 'text' : 'p2'},
            {'fillStyle' : '#4ed4c6', 'text' : 'p3'},
            {'fillStyle' : '#4ed4c6', 'text' : 'p4'}
        ],
        'animation' :                   // Note animation properties passed in constructor parameters.
    {
        'type'     : 'spinToStop',  // Type of animation.
        'duration' : 8,             // How long the animation is to take in seconds.
        'spins'    : 10              // The number of complete 360 degree rotations the wheel is to do.
    }
    });

function addSegment(text_value)
{

    // The Second parameter in the call to addSegment specifies the position,
    // in this case 1 meaning the new segment goes at the start of the wheel.
    theWheel.addSegment({
        'text' : text_value,
        'fillStyle' : 'aqua'
    }, 1);

    // The draw method of the wheel object must be called in order for the changes
    // to be rendered.
    theWheel.draw();
}

function deleteSegment(value)
{
    // Call function to remove a segment from the wheel
    // if in the value passed in is equal to the segment text value
    for (let i = 1; i <= theWheel.numSegments; i++) {
      if (theWheel.segments[i].text === value) theWheel.deleteSegment(i);
    }

    // Call function to remove a segment from the wheel, by default the last one will be
    // removed; you can pass in the number of the segment to delete if desired.
    // theWheel.deleteSegment(right_index);

    // The draw method of the wheel object must be called to render the changes.
    theWheel.draw();
    }