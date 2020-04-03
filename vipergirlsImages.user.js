// ==UserScript==
// @name         ViperGirls Images
// @namespace    https://nindogo.tumblr.com/
// @version      20200402
// @description  Link to the actual image in vipergirls.
// @require         https://gist.githubusercontent.com/raw/2625891/waitForKeyElements.js
//                  The previous require is from a script of Brock Adams (Thanks to him!)
// @author       nindogo
// @match        http://vipergirls.to/*
// @match        https://vipergirls.to/*
// @grant           GM_xmlhttpRequest
// @connect         turboimagehost.com
// @connect         imagebam.com
// @connect         imx.to
// @downloadURL     https://github.com/nindogo/test_repo/raw/master/vipergirlsImages.user.js
// ==/UserScript==

// imx.to
waitForKeyElements('a>img[src^="https://imx.to/u/t/"', process_imx_to);
waitForKeyElements('a>img[src^="http://imx.to/u/t/"', process_imx_to);
waitForKeyElements('a>img[src^="https://imx.to/upload/small/"', process_imxto_2);
waitForKeyElements('a>img[src^="http://imx.to/upload/small/"', process_imxto_2);


// TurboImageHost
waitForKeyElements('a[href^="https://www.turboimagehost.com/"', process_turboimage);
waitForKeyElements('a[href^="http://www.turboimagehost.com/"', process_turboimage);

// ImageBam
waitForKeyElements('a[href^="http://www.imagebam.com/image/"', process_imagebam);

// AcidImg
waitForKeyElements('a[href^="https://acidimg.cc/"', process_acidimg);

// PimpAndHost
waitForKeyElements('a[href^="https://pimpandhost.com/image/"', process_pimpandhost);

// PixHost
waitForKeyElements('a[href^="https://pixhost.to/show/"', process_pixhost);


function process_imx_to(jNode){
    jNode[0].parentNode.href = jNode[0].src.replace('/t/', '/i/');
}

function process_imxto_2(jNode){
//     console.log(jNode[0].src)
/*     console.log(jNode[0].parentNode.href) */
    var site_url = jNode[0].src
    GM_xmlhttpRequest({
        method: 'GET',
        url: site_url,
        context: jNode,
        onload: function(response){
            response.context[0].parentNode.href = response.finalUrl.replace('/t/', '/i/')
        }
    })
}

function process_turboimage(jNode){
    var img_page = jNode[0].childNodes[0].src;
    var site_url = jNode[0].href;
    var re_link = '<meta property="og:image" content="(.*?)"'

    GM_xmlhttpRequest({
        method: 'GET',
        url: site_url,
        context: jNode,
        onload: function(response){
//             var this_page = response.responseText;
//             var img_url = this_page.match(re_link)[1]
//             response.context[0].href = img_url
            response.context[0].href = response.responseText.match(re_link)[1]
        }
    })
}

function process_imagebam(jNode){
    var img_page = jNode[0].childNodes[0].src;
    var site_url = jNode[0].href;
    var re_link = '<meta property="og:image" content="(.*?)"'

    GM_xmlhttpRequest({
        method: 'GET',
        url: site_url,
        context: jNode,
        onload: function(response){
//             var this_page = response.responseText;
//             var img_url = this_page.match(re_link)[1]
//             response.context[0].href = img_url
            response.context[0].href = response.responseText.match(re_link)[1]
        }
    })
}

function process_acidimg(jNode) {
//     console.log(jNode[0])
    jNode[0].href = jNode[0].childNodes[0].src.replace('/upload/small/', '/upload/big/')
//     console.log(jNode[0].childNodes)

}

function process_pimpandhost(jNode) {
    function replace_url(match, p1, offset, string){
        return string.replace('_s.', '_l.')
    }

    var replacer = jNode[0].childNodes[0].src.replace(/http.*?\/pimpandhost\.com\/.*?\/[0-9]+?(_s\.).../, replace_url)
    if (replacer) {
        jNode[0].href = replacer
    }
}

function process_pixhost(jNode) {
    function replace_url(match, p1, p2, offset, string) {
        return p1 + 'img' + p2
    }
    var img_url = jNode[0].childNodes[0].src.replace('/thumbs/', '/images/').match(/http.*?t[0-9]*?\.pixhost\.to.*/)
    jNode[0].href = img_url.input.replace(/(http.*?)t([0-9]*?\.pixhost.to.*)/, replace_url)
}
