// ==UserScript==
// @name      Auto Twitter Intent Script
// @namespace  http://nindogo.tumblr.com/
// @version    0.1.0.9
// @run-at document-start
// @description  Automatically twits vines and removes any text in them (including the via)
// @match      https://twitter.com/intent/tweet?*
// @downloadURL https://github.com/nindogo/test_repo/raw/master/autoTwitterIntentScript.user.js
// @require https://github.com/medialize/URI.js/raw/gh-pages/src/URI.js
// @copyright  2014+ Nindogo
// @author nindogo
// ==/UserScript==


var u,w,x,y,z,uri,searchString;
y="";
x = document.location.href;
uri = new URI(x);
w = URI.parseQuery(uri.query().toString());
console.log(w);
searchString = "=vine";

if (w.url == w.original_referer){
    z=w.url;
    if (!(z.search("https://vine.co/v/") > -1)){
        window.close();
    }
}

if (x.search(searchString) > -1){
    u = new URI("https://twitter.com/intent/tweet");
    u.addSearch("url", w.url);
    u.addSearch("text","👍 💦");
    u.addSearch("original_referer", w.original_referer);
    y=u.toString();
    document.location.assign(y);
}


if (!(x.search(searchString) > -1)){
    z=document.getElementById("update-form");
    console.log(z);
    z.submit();
    
}
