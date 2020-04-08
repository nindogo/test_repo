// ==UserScript==
// @name            ImageFap Links
// @namespace       http://tampermonkey.net/
// @version         20200403
// @description     Make it easier to share images from imageFap
// @require         https://gist.githubusercontent.com/raw/2625891/waitForKeyElements.js
//                  The previous require is from a script of Brock Adams (Thanks to him!)
// @require         https://cdn.jsdelivr.net/npm/jszip/dist/jszip.min.js
// @author          nindogo
// @match           http*://*.imagefap.com/*
// @grant           GM_openInTab
// @downloadURL     https://github.com/nindogo/test_repo/raw/master/imageFap.user.js
// ==/UserScript==

waitForKeyElements('img[src^="https://cdn.imagefap.com/"', do_function);
waitForKeyElements('img[src^="https://images.imagefap.com/"', do_function);

function do_function(jNode) {
    var this_url = new URL(jNode[0].src)

    function open_in_tab(node) {
        var clickHandler = function(e) {
            GM_openInTab(node.href, 'loadInBackground');
            e.preventDefault();
        };
        node.addEventListener('click', clickHandler, false);
    }

    if (jNode[0].parentNode.href) {
        jNode[0].src = 'https://images.imagefap.com' + this_url.pathname;
        jNode[0].parentNode.target = '_blank';
        jNode[0].parentNode.href = 'https://images.imagefap.com' + this_url.pathname;
        new open_in_tab(jNode[0].parentNode)
        }
}
