// ==UserScript==
// @name         Auto Scroll Daft Sex
// @version      20200501
// @description  autoscroll daftsex
// @author       nindogo
// @require      https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js
// @require      https://daftsex.com/js/common.js
// @match        http*://daftsex.com/*
// @grant        none
// ==/UserScript==

var i=200;

$(window).scroll(function() {
    if ($(window).scrollTop() + $(window).height() >= ($(document).height() - i)) {
        var hapa = $('div.more')
        if(hapa.length != 0) {
            more(hapa);
        }
    }
})
