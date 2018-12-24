'use strict';
/* global $, odkTables */
/* exported display */

/**
 * Responsible for rendering the home screen.
 */
function display() {
	
    var body = $('#main');
    // Set the background to be a picture.
    body.css('background-image', 'url(img/teaBackground.jpg)');

    var viewHousesButton = $('#view-houses');
    viewHousesButton.on(
        'click',
        function() {
            odkTables.openTableToListView(
				null,
                'Tea_houses',
                null,
                null,
                'config/tables/Tea_houses/html/Tea_houses_list.html');
        }
    );

    var viewTeasButton = $('#view-teas');
    viewTeasButton.on(
        'click',
        function() {
            odkTables.openTableToListView(
				null,
                'Tea_inventory',
                null,
                null,
                'config/tables/Tea_inventory/html/Tea_inventory_list.html');
        }
    );

    var viewTeaTypesButton = $('#view-types');
    viewTeaTypesButton.on(
        'click',
        function() {
            odkTables.openTableToListView(
				null,
                'Tea_types',
                null,
                null,
                'config/tables/Tea_types/html/Tea_types_list.html');
        }
    );
}
