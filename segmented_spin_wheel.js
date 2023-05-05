let theWheel = new Winwheel({
        'numSegments' : 4,
        'segments'    :
        [
            {'fillStyle' : '#eae56f', 'text' : 'p1'},
            {'fillStyle' : '#89f26e', 'text' : 'p2'},
            {'fillStyle' : '#7de6ef', 'text' : 'p3'},
            {'fillStyle' : '#e7706f', 'text' : 'p4'}
        ]
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

function deleteSegment(index)
{
    // Call function to remove a segment from the wheel, by default the last one will be
    // removed; you can pass in the number of the segment to delete if desired.
    theWheel.deleteSegment(index);

    // The draw method of the wheel object must be called to render the changes.
    theWheel.draw();
    }