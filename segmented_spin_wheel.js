let theWheel = new Winwheel({
        'canvasId' : 'nameWheelCanvas',
        'numSegments' : 4,
        'innerRadius'   : 20,
        'textFontFamily' : 'Courier',
        'segments'    :
        [
            {'fillStyle' : '#4ed4c6', 'text' : 'Amy'},
            {'fillStyle' : '#baf4ee', 'text' : 'p2'},
            {'fillStyle' : '#4ed4c6', 'text' : 'p3'},
            {'fillStyle' : '#baf4ee', 'text' : 'p4'}
        ],
        'animation' :                   // Note animation properties passed in constructor parameters.
    {
        'type'     : 'spinToStop',  // Type of animation.
        'duration' : 8,             // How long the animation is to take in seconds.
        'spins'    : 10              // The number of complete 360 degree rotations the wheel is to do.
    }
    });

function addSegment(wheel, text_value, index)
{
    let seg_colour = "#baf4ee";
    if (index % 2 === 0) {
        seg_colour = "#4ed4c6";
    }

    // The Second parameter in the call to addSegment specifies the position,
    // in this case 1 meaning the new segment goes at the start of the wheel.
    wheel.addSegment({
        'text' : text_value,
        'fillStyle' : seg_colour
    }, 1);

    // The draw method of the wheel object must be called to render changes
    wheel.draw();
}

function deleteSegment(wheel, value)
{
    // Call function to remove a segment from the wheel
    // if in the value passed in is equal to the segment text value
    for (let i = 1; i <= wheel.numSegments; i++) {
      if (wheel.segments[i].text === value) wheel.deleteSegment(i);
    }

    // Call function to remove a segment from the wheel, by default the last one will be
    // removed; you can pass in the number of the segment to delete if desired.
    // theWheel2.deleteSegment(right_index);

    // The draw method of the wheel object must be called to render the changes.
    wheel.draw();
    }