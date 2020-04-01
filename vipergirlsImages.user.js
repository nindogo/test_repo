// ==UserScript==
// @name         ViperGirls Images
// @namespace    https://nindogo.tumblr.com/
// @version      20200401b
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
// waitForKeyElements('a>img[src^="https://imx.to/upload/small/"', process_imxto_2);

// TurboImageHost
waitForKeyElements('a[href^="https://www.turboimagehost.com/"', process_turboimage);
waitForKeyElements('a[href^="http://www.turboimagehost.com/"', process_turboimage);

// ImageBam
waitForKeyElements('a[href^="http://www.imagebam.com/image/"', process_imagebam);

// AcidImg
waitForKeyElements('a[href^="https://acidimg.cc/"', process_acidimg);

function process_imx_to(jNode){
    jNode[0].parentNode.href = jNode[0].src.replace('/t/', '/i/');
}

function process_imxto_2(cNode){
    var jNode = cNode[0].parentNode;
    var site_url = jNode.href;
    var cookie_re = /set-cookie:(.*?)$/m
    var cookie_text = ""

    GM_xmlhttpRequest({
        method: 'GET',
        url: site_url,
        context: jNode,
        onload: function(response){
            console.log('First')
            console.log(response.responseHeaders)
        }
    })

    GM_xmlhttpRequest({
        method: 'POST',
        url: site_url,
        data: "imgContinue=Continue to image ... ",
        context: jNode,
        onload: function(response){
            console.log('Second')
            console.log(response.responseHeaders)
            if (response.responseHeaders.match(cookie_re)) {
                cookie_text = response.responseHeaders.match(cookie_re)[1]
                console.log(cookie_text)

                }
//             console.log(response.responseText)
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


function process_imxto_3(jNode){
    var img_page = jNode[0].childNodes[0].src;
    var site_url = jNode[0].href;
    var re_link = '<img class="centred" src="(.*?)"'
    var cookie_re = /set-cookie:(.*?)$/m
    var this_cookie = ""

    GM_xmlhttpRequest({
        method: 'GET',
        url: site_url,
        context: jNode,
        onload: function(response){
//             console.log(response.responseHeaders)
            if (response.responseHeaders.match(cookie_re)){
                this_cookie = response.responseHeaders.match(cookie_re)[1]
            }
//             console.log(response.finalUrl)
//             console.log(response.status)
//             console.log(response.statusText)
//             console.log(response.responseText)
//             console.log(this_cookie)
        }
    })

//     console.log(this_cookie)

    GM_xmlhttpRequest({
        method: 'POST',
        url: site_url,
        data: "imgContinue=Continue+to+image+...+",
        context: jNode,
        onload: function(response){
            var this_page = response.responseText;
/*             var img_url = this_page.match(re_link)[1] */
//             console.log(this_page);
//             console.log(response.responseHeaders)
            if (response.responseHeaders.match(cookie_re)){
                this_cookie = response.responseHeaders.match(cookie_re)[1]
            }
//             response.context[0].href = img_url
//             response.context[0].href = response.responseText.match(re_link)[1]
//             console.log(response.responseText)
        }
    })

    console.log(this_cookie)
}


function process_acidimg(jNode) {
//     console.log(jNode[0])
    jNode[0].href = jNode[0].childNodes[0].src.replace('/upload/small/', '/upload/big/')
//     console.log(jNode[0].childNodes)

}
