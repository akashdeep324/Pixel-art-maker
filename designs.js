// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

var submit;

submit = jQuery('input[type="submit"]');

submit.click(function(event) {
    event.preventDefault();
    makeGrid();
});


/**
 * Make height x width grid
 * @param {Number} height
 * @param {Number} width
 */
function makeGrid() {
    var pixelCanvas, position, gridHeight, gridWidth, row;
    pixelCanvas = $('#pixel_canvas');
    gridHeight = $('#input_height').val();
    gridWidth = $('#input_width').val();

    pixelCanvas.children().remove();

    for (i = 0; i < gridHeight; i++) {
        pixelCanvas.append('<tr></tr>');
    }

    row = $('tr');

    for (j = 0; j < gridWidth; j++) {
        row.append('<td></td>');
    }

    //checking the position and adding color to it
    position = pixelCanvas.find('td');

    position.click(function() {
        var color;
        color = $("#colorPicker").val();
        $(this).attr('bgcolor', color);
    });
    
}
