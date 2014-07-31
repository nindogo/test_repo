// ==UserScript==
// @name       Open Closed Vines 
// @namespace  http://nindogo.tumblr.com/
// @version    0.1.0.2
// @description  vine Auto Scroll
// @match      https://vine.co/*
// @downloadURL https://github.com/nindogo/test_repo/raw/master/openClosedVines.user.js
// @run-at  document-end
// @copyright  2014+, Nindogo
// ==/UserScript==

var x,i;

window.onscroll = openVines;


function openVines() {
    x= document.getElementsByClassName("small");
    for (i = (x.length-1); i > -1; i--) {
        console.log(i);
        console.log(x[i]);
        try{
            x[i].click();  
        }
        catch (error){
            console.log("during "+i+" I caught error: "+error.type+" with message: "+error.message);
        }
    }
}
