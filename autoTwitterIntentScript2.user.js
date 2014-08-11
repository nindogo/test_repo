// ==UserScript==
// @name      Auto Twitter Intent Script 2 - removing via
// @namespace  http://nindogo.tumblr.com/
// @version    0.1.0.1
// @run-at document-start
// @description  Change the redirections by vineapp to stop them having the last part
// @match      https://twitter.com/intent/tweet?*
// @downloadURL https://github.com/nindogo/test_repo/raw/master/autoTwitterIntentScript2.user.js
// @copyright  2014+ Nindogo
// @author nindogo
// ==/UserScript==
// @require https://github.com/medialize/URI.js/raw/gh-pages/src/URI.min.js


var x,y,z,uri;
x = document.location.href;
uri = new URI(x);

if (x.search("via=vineapp") > -1){
    uri.removeSearch("via");
    uri.removeSearch("text");
    uri.removeSearch("related");
    y=uri.toString();
    //y=x.replace("via=vineapp","");
    //document.location.replace(y);
    alert(y);
}
/*
if (!(x.search("via=vineapp") > -1)){
    z=document.getElementById("update-form");
    console.log(z);
    z.submit();
}
*/