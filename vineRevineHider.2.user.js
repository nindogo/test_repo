// ==UserScript==
// @name         vine Revine Hider on Feed
// @namespace    http://nindogo.tumblr.com
// @version      0.1.1
// @description  On Vine Feed show only vines that are original. No Revines.
// @author       nindogo
// @match      https://vine.co/feed*
// @downloadURL https://github.com/nindogo/test_repo/raw/master/vineRevineHider.2.user.js
// @grant         GM_addStyle
// @grant       unsafeWindow
// @require     //ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @run-at        document-start
// ==/UserScript==

(function () {
    
    jQuery(".post-byline").parent().remove();
    // class is . and id is #
    //GM_addStyle('.post-byline ~ .card  { background-color: #b0c4de; }');
    //GM_addStyle('.post-byline ~ .card  { display:none !important; }');
    //GM_addStyle('.post-byline  { display:none !important; }');
}) ();
