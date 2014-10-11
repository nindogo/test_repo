// ==UserScript==
// @name		vine Revine Hider on Feed
// @namespace	http://nindogo.tumblr.com
// @version		0.1.5
// @description	On Vine Feed show only vines that are original. No Revines.
// @author		nindogo
// @match		*://vine.co/*
// @downloadURL	https://github.com/nindogo/test_repo/raw/master/vineRevineHider.2.user.js
// @require     https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @require 	https://github.com/nindogo/test_repo/raw/master/mutation-summary.js
// @run-at      document-end
// ==/UserScript==

var observer = new MutationSummary({
    callback: chuckRevines,
    queries: [{
        element: '.post-byline',
    }]
});

function chuckRevines(summary) {
    //$(".post-byline").parent().next().next().remove();
    $(".post-byline").parent().next("script").remove();
    $(".post-byline").parent().prev("script").remove();
    $(".post-byline").parent().remove();
    console.log("should be done now!");
}
