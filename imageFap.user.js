// ==UserScript==
// @name            ImageFap Links
// @namespace       http://tampermonkey.net/
// @version         20200404
// @description     Make it easier to share images from imageFap
// @require         https://gist.githubusercontent.com/raw/2625891/waitForKeyElements.js
//                  The previous require is from a script of Brock Adams (Thanks to him!)
// @require         https://cdn.jsdelivr.net/npm/jszip/dist/jszip.min.js
// @require         https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js
// @author          nindogo
// @match           http*://*.imagefap.com/*
// @grant           GM_openInTab
// @grant           GM_xmlhttpRequest
// @run-at          document-start
// @downloadURL     https://github.com/nindogo/test_repo/raw/master/imageFap.user.js
// ==/UserScript==

// Image Gallary search
waitForKeyElements('img[src^="https://cdn.imagefap.com/"', do_function);
waitForKeyElements('img[src^="https://images.imagefap.com/"', do_function);

// Search page results
waitForKeyElements('a.gal_title[href*="gallery.php"]', set_title)


function open_in_tab(node) {
    var clickHandler = function(e) {
        GM_openInTab(node.href, 'loadInBackground');
        e.preventDefault();
    };
    node.addEventListener('click', clickHandler, false);
}


function do_function(jNode) {
    var this_url = new URL(jNode[0].src)

    if (jNode[0].parentNode.href) {
        jNode[0].src = 'https://images.imagefap.com' + this_url.pathname;
        jNode[0].parentNode.target = '_blank';
        jNode[0].parentNode.href = 'https://images.imagefap.com' + this_url.pathname;
        open_in_tab(jNode[0].parentNode);
    }
}

function set_title(jNode) {
    jNode[0].target = '_blank';
    open_in_tab(jNode[0]);

    GM_xmlhttpRequest({
        method: 'GET',
        url: jNode[0].href,
        context: jNode,
        onload: function(response){
            response.context[0].href = response.finalUrl + '?view=2';
        }
    })
}
