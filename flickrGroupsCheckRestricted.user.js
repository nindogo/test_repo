// ==UserScript==
// @name            flickrGroupsCheckRestricted
// @namespace       http://tampermonkey.net/
// @version         0.2
// @description     try to take over the world!
// @author          You
// @match           https://www.flickr.com/groups/*/pool/*
// @grant           GM_xmlhttpRequest
// @require         https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
//                  Selectors and the following script require jQuery.
// @require         https://gist.githubusercontent.com/raw/2625891/waitForKeyElements.js
//                  The previous require is from a script of Brock Adams (Thanks to him!)
// ==/UserScript==

waitForKeyElements(".view.photo-list-photo-view.awake", showHiddenOrOpen, bWaitOnce=false);

function showHiddenOrOpen(jNode){

    var t = jNode
    var u = jNode[0]["style"]["backgroundImage"];
    var v = u.split("/");
    var w = v[5];
    var x = w.split("_");
    var y = x[0]

    var protocol = window.location.protocol;
    var api_key = "9f7fba1e66c150084f948ab8df0ce3a9"

    var url = protocol+'//api.flickr.com/services/rest/'
    +'?method=flickr.photos.getFavorites'
    +'&api_key=' + api_key
    +'&format=json&nojsoncallback=1'
    +'&photo_id=' + y;

    GM_xmlhttpRequest({
        method: 'GET',
        url: url,
        context: jNode,
        onload: function(response){
            var b = (JSON.parse(response.responseText));
            var x = b.stat;
            var z = response.context[0];

            if (x == 'ok') {
                z.style.border = "5px solid #39ff14";
            }
            else if (x == 'fail'){
                z.style.border = "5px solid #f70000";
            }

        }

    })
}

