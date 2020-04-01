// ==UserScript==
// @name         ViperGirls Images
// @namespace    https://nindogo.tumblr.com/
// @version      20200401
// @description  Link to the actual image in vipergirls.
// @require         https://gist.githubusercontent.com/raw/2625891/waitForKeyElements.js
//                  The previous require is from a script of Brock Adams (Thanks to him!)
// @author       nindogo
// @match        http*://vipergirls.to/*
// @grant        none
// @downloadURL     https://github.com/nindogo/test_repo/raw/master/vipergirlsImages.user.js
// ==/UserScript==

waitForKeyElements('a[href^="https://imx.to/"]', process_imx_to);

function process_imx_to(jNode){
    jNode[0].href = jNode[0].childNodes[0].src.replace('/t/', '/i/')
}
