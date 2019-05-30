// ==UserScript==
// @name            flickrGroupsCheckRestricted
// @namespace       http://tampermonkey.net/
// @version         20190530
// @description     try to take over the world!
// @author          nindogo
// @match           https://www.flickr.com/groups/*/pool/*
// @grant           GM_xmlhttpRequest
// @require         https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
//                  Selectors and the following script require jQuery.
// @require         https://gist.githubusercontent.com/raw/2625891/waitForKeyElements.js
//                  The previous require is from a script of Brock Adams (Thanks to him!)
//@downloadURL      https://github.com/nindogo/test_repo/raw/master/flickrGroupsCheckRestricted.user.js
// ==/UserScript==

waitForKeyElements(".view.photo-list-photo-view.awake", showHiddenOrOpen, bWaitOnce=false);

waitForKeyElements(".pool-photo.photo-display-item", showHiddenOrOpen_2);


function showHiddenOrOpen(jNode){

    var photo_id = ((((jNode[0].style.backgroundImage).split("/"))[4]).split("_"))[0];

    var protocol = window.location.protocol;
    var api_key = "9f7fba1e66c150084f948ab8df0ce3a9"

    var url = protocol+'//api.flickr.com/services/rest/'
    +'?method=flickr.photos.getFavorites'
    +'&api_key=' + api_key
    +'&format=json&nojsoncallback=1'
    +'&photo_id=' + photo_id;

    GM_xmlhttpRequest({
        method: 'GET',
        url: url,
        context: jNode,
        onload: function(response){
            var a = (JSON.parse(response.responseText)).stat;
            var b = response.context[0];

            if (a == 'ok') {
                b.style.border = "2.5px solid #39ff14";
            }
            else if (a == 'fail'){
                b.style.border = "2.5px solid #F71F12";
            }

        }

    })
}

function showHiddenOrOpen_2(jNode){

//     var photo_id = ((((jNode[0].style.backgroundImage).split("/"))[5]).split("_"))[0];
    var photo_id = jNode[0]["dataset"]["photoId"];

    var protocol = window.location.protocol;
    var api_key = "9f7fba1e66c150084f948ab8df0ce3a9"

    var url = protocol+'//api.flickr.com/services/rest/'
    +'?method=flickr.photos.getFavorites'
    +'&api_key=' + api_key
    +'&format=json&nojsoncallback=1'
    +'&photo_id=' + photo_id;

    GM_xmlhttpRequest({
        method: 'GET',
        url: url,
        context: jNode,
        onload: function(response){
            var a = (JSON.parse(response.responseText)).stat;
            var b = response.context[0];

            if (a == 'ok') {
                b.style.border = "5px solid #39ff14";
            }
            else if (a == 'fail'){
                b.style.border = "5px solid #F71F12";
            }

        }

    })
}
