// ==UserScript==
// @name       Scroll Vine Endlessly
// @namespace  http://nindogo.tumblr.com/
// @version    0.1.0.4
// @description  vine Auto Scroll
// @match      https://vine.co/*
// @downloadURL https://github.com/nindogo/test_repo/raw/master/endlessVineScroll.user.js
// @run-at  document-end
// @copyright  2014+, Nindogo
// ==/UserScript==

var x,i;
i=500;
window.onscroll = scrollMore;

function scrollMore() {
    if (document.body.scrollTop + window.innerHeight >= (document.body.scrollHeight - i)) {
        x = document.getElementsByClassName("pagination");
        if (x.length == 1) {
            x[0].click();}
    }

}
