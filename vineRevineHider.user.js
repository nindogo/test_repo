// ==UserScript==
// @name         vine Revine Hider on Feed
// @namespace    http://nindogo.tumblr.com
// @version      0.1
// @description  On Vine Feed show only vines that are original. No Revines.
// @author       nindogo
// @match      https://vine.co/feed*
// @downloadURL https://github.com/nindogo/test_repo/raw/master/vineRevineHider.user.js
// @grant         GM_addStyle 
// @run-at        document-start
// ==/UserScript==

(function () {
    // class is . and id is #
    //GM_addStyle('.post-byline ~ .card  { background-color: #b0c4de; }');
    GM_addStyle('.post-byline ~ .card  { display:none !important; }');
    GM_addStyle('.post-byline  { display:none !important; }');
}) ();
