// ==UserScript==
// @name      Auto Twitter Intent Script - removing via
// @namespace  http://nindogo.tumblr.com/
// @version    0.2.0.5
// @run-at document-start
// @description  Change the redirections by vineapp to stop them having the last part
// @match      https://twitter.com/intent/tweet?*
// @downloadURL https://github.com/nindogo/test_repo/raw/master/autoTwitterIntentScript2.user.js
// @copyright  2014+ Nindogo
// @author nindogo
// ==/UserScript==

var x,y,z;
x = document.location.href;

if (x.search("via=vineapp") > -1){
    y=x.replace("via=vineapp","");
    document.location.replace(y);
}

if (!(x.search("via=vineapp") > -1)){
    z=document.getElementById("update-form");
    console.log(z);
    z.submit();
}
