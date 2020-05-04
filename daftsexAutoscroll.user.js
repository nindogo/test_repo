// ==UserScript==
// @name            Auto Scroll Daft Sex
// @version         20200501
// @description     autoscroll daftsex
// @author          nindogo
// @require         https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js
// @require         https://daftsex.com/js/common.js
// @match           http*://daftsex.com/*
// @grant           none
// @downloadURL     https://github.com/nindogo/test_repo/raw/master/daftsexAutoscroll.user.js
// ==/UserScript==

var sensitivity=200;

$(window).scroll(function() {
    if ($(window).scrollTop() + $(window).height() >= ($(document).height() - sensitivity)) {
        var hapa = $('div.more')
        if(hapa.length != 0) {
            more(hapa);
        }
    }
})
