// ==UserScript==
// @name      Auto Twitter Intent Script 2 - removing via
// @namespace  http://nindogo.tumblr.com/
// @version    0.1.0.5
// @run-at document-start
// @description  Change the redirections by vineapp to stop them having the last part
// @match      https://twitter.com/intent/tweet?*
// @downloadURL https://github.com/nindogo/test_repo/raw/master/autoTwitterIntentScript2.user.js
// @require https://github.com/medialize/URI.js/raw/gh-pages/src/URI.js
// @copyright  2014+ Nindogo
// @author nindogo
// ==/UserScript==



var u,w,x,y,z,uri;
x = document.location.href;
uri = new URI(x);
w = URI.parseQuery(uri.query().toString());
console.log(w);

if (w.url == w.original_referer){
    z=w.url;
    if (!(z.search("https://vine.co/v/") > -1)){
        window.close();
    }
}

if (x.search("via=vineapp") > -1){
    u = new URI("https://twitter.com/intent/tweet");
    u.addSearch("url", w.url);
    //u.addSearch("text", w.url);
    u.addSearch("original_referer", w.original_referer);
    y=u.toString();
    document.location.replace(y);
}


if (!(x.search("via=vineapp") > -1)){
    z=document.getElementById("update-form");
    console.log(z);
    z.submit();
}
