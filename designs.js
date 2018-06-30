// Select color input
const $clrPikr = $('#colorPicker');

// Select size input
const $numOfRows = $('#input_height');
const $numOfCols = $('#input_width');

// Select table grid
const $grid = $('#pixel_canvas');

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    $grid.html('');
    for (let i = 0; i < $numOfRows.val(); i++) {
        const $row = $('<tr></tr>');
        for (let j = 0; j < $numOfCols.val(); j++) {
            const $cell = $('<td></td>');
            $row.append($cell);
        }
        $grid.append($row);
    }
}

// Set on click event listener
$grid.on('click','td',function(){
    $(this).css('background-color', $clrPikr.val());
});