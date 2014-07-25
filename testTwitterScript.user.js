// ==UserScript==
// @name      test Twitter UserScript
// @namespace  http://nindogo0.tumblr.com/
// @version    0.1
// @description  Change the redirections by vineapp to stop them having the last part
// @match      https://twitter.com/intent/tweet?*
// @downloadURL https://github.com/nindogo/test_repo/raw/master/testTwitterScript.user.js
// @copyright  2014+ Nindogo
// @author nindogo
// ==/UserScript==

var x;
//alert("Hello, World!");

x = document.location.href;
alert(x);
