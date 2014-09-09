// ==UserScript==
// @name       Open Sensitive Vines
// @namespace  http://nindogo.tumblr.com/
// @author     nindogo
// @version    0.1.1.0
// @description  This userscript opens vines that have been hidden due to sensitivity. (Adult, etc)
// @match      https://vine.co/*
// @downloadURL https://github.com/nindogo/test_repo/raw/master/openClosedVines.user.js
// @require https://github.com/nindogo/test_repo/raw/master/mutation-summary.js
// @run-at  document-end
// @copyright  2014+, Nindogo
// ==/UserScript==

var observer = new MutationSummary({
    callback: openVines,
    queries: [{
        element: 'button.small',
        elementAttributes: "button.small" // optional
    }]
});

function openVines(summay) {
    //console.log(summay[0].added);
    openVines2(summay[0].added);
}

function openVines2(u) {
    var i, x;
    //x = document.getElementsByClassName("small");
    x=u;
    //console.log(x.length);
    for (i = (x.length - 1); i > -1; i--) {
        //console.log(i);
        //console.log(x[i]);
        try {
            x[i].click();
        } catch (error) {
            console.log("during " + i + " I caught error: " + error.type + " with message: " + error.message);
        }
    }
}
