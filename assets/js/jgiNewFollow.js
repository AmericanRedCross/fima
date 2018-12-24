/* global $, odkData, odkCommon, util */
/* exported display */
'use strict';

function cbSuccess(result) {
    console.log('jgiNewFollow: cbSuccess addRow with result: ' + result);

    var date = $('#FOL_date').val();
    var focalChimpId = $('#FOL_B_AnimID').val().toLowerCase();
    var beginTime = $('#FOL_begin_time').val();

    // Now we'll launch the follow screen. The follow screen needs to know
    // what date we're on, as well as the time it should be using.
    var queryString = util.getKeysToAppendToURL(
        date,
        beginTime,
        focalChimpId);
    var url = odkCommon.getFileAsUrl(
            'config/assets/followScreen.html' + queryString);

    // There seems to be an issue with the way window.location is set here
    window.location.href = url;
	// perhaps?  odkTables.launchHTML(null, url);
}

function cbFailure(error) {
    console.log('jgiNewFollow: cbFailure failed with error: ' + error);
}
function display() {

    // Here we are expecting just to add a row with the data elements into
    // the FOLLOW table and go to the first follow screen.
    
    /**
     * Write the follow data into the database.
     */
    var writeNewFollow = function(
            date,
            focalChimpId,
            communityId,
            beginTime,
            researcher) {
		
        var struct = {};
        struct.FOL_date = date;
        struct.FOL_B_AnimID = focalChimpId;
        struct.FOL_CL_community_id = communityId;
        struct.FOL_time_begin = beginTime;
        struct.FOL_am_observer1 = researcher;

        // Now we'll write it into the database.

        var rowId = util.genUUID();
        odkData.addRow('follow', struct, rowId, cbSuccess, cbFailure);
    };

    $('#begin-follow').on('click', function() {
        // First retrieve the information from the form.
        var date = $('#FOL_date').val();
        var focalChimpId = $('#FOL_B_AnimID').val().toLowerCase();
        var communityId = $('#FOL_CL_community_id').val();
        var beginTime = $('#FOL_begin_time').val();
        var researcher = $('#FOL_am_observer_1').val();

        // Update the database.
        writeNewFollow(
            date,
            focalChimpId,
            communityId,
            beginTime,
            researcher);
    });

}
