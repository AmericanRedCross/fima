/**
 * Responsible for rendering the home screen.
 */
/* global $, odkTables */
/* exported display */
'use strict';

function display() {

    var body = $('#main');
    // Set the background to be a picture.
    body.css('background-image', 'url(img/teaBackground.jpg)');

    var viewHousesButton = $('<button>');
    viewHousesButton.text('View Tea Houses');
    viewHousesButton.on(
        'click',
        function() {
            odkTables.openTableToListView(null,'Tea_houses', null, null, null);
        }
    );
    $('#wrapper').append(viewHousesButton);

    var viewTeasButton = $('<button>');
    viewTeasButton.text('View Teas');
    viewTeasButton.on(
        'click',
        function() {
            odkTables.openTable(null, 'Tea_inventory', null, null);
        }
    );
    $('#wrapper').append(viewTeasButton);

    var viewTeaTypesButton = $('<button>');
    viewTeaTypesButton.text('Tea Types');
    viewTeaTypesButton.on(
        'click',
        function() {
            odkTables.openTable(null, 'Tea_types', null, null);
        }
    );
    $('#wrapper').append(viewTeaTypesButton);

}
