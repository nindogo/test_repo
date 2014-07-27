// ==UserScript==
// @name      test Twitter UserScript
// @namespace  http://nindogo0.tumblr.com/
// @version    0.2.0.3
// @run-at document-start
// @description  Change the redirections by vineapp to stop them having the last part
// @match      https://twitter.com/intent/tweet?*
// @downloadURL https://github.com/nindogo/test_repo/raw/master/testTwitterScript.user.js
// @copyright  2014+ Nindogo
// @author nindogo
// ==/UserScript==

var x,y;
x = document.location.href;

if (x.search("via=vineapp") > -1){
    y=x.replace("vineapp","");
    document.location.replace(y);
}
