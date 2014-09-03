// ==UserScript==
// @name       Auto open sensitive Vines
// @namespace  http://nindogo.tumblr.com/
// @version    0.1.0.4
// @description  open vines that are hidden due to sensitivity.
// @match      https://vine.co/*
// @downloadURL https://github.com/nindogo/test_repo/raw/master/openClosedVines.user.js
// @run-at  document-end
// @copyright  2014+, Nindogo
// ==/UserScript==


window.onload = openVines;

function openVines() {
    var i, j, x, y, z;
    x = document.getElementsByClassName("small");
    console.log(x.length);
    for (i = (x.length - 1); i > -1; i--) {
        console.log(i);
        console.log(x[i]);
        try {
            x[i].click();
        } catch (error) {
            console.log("during " + i + " I caught error: " + error.type + " with message: " + error.message);
        }
    }
}
