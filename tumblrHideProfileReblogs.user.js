// ==UserScript==
// @name          Tumblr.com - Hide reblogs from Other Profiles
// @namespace     https://greasyfork.org
// @description	  This will hide any reblogs on your Tumblr dashboard.
// @author        nindogo
// @downloadURL https://github.com/nindogo/test_repo/raw/master/tumblrHideProfileReblogs.user.js
// @exclude       http://www.tumblr.com/dashboard
// @exclude       https://www.tumblr.com/dashboard
// @include       http://*.tumblr.com/*
// @include       https://*.tumblr.com/*
// @grant         GM_addStyle 
// @run-at        document-start
// @version       0.03
// ==/UserScript==
(function () {
    GM_addStyle('#posts.content .reblogged {display:none !important; }');
}) ();
