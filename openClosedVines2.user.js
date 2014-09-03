// ==UserScript==
// @name       Auto open sensitive Vines
// @namespace  http://nindogo.tumblr.com/
// @version    0.1.0.5
// @description  open vines that are hidden due to sensitivity.
// @match      https://vine.co/*
// @downloadURL https://github.com/nindogo/test_repo/raw/master/openClosedVines2.user.js
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
    console.log(summay[0].added);
    openVines2(summay[0].added);
}

function openVines2(u) {
    var i, x;
    //x = document.getElementsByClassName("small");
    x=u;
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
