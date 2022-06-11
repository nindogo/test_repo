// ==UserScript==
// @name            ViperGirls Images
// @namespace       https://nindogo.tumblr.com/
// @version         20220601
// @description     Link to the actual image in vipergirls.
// @require         https://gist.githubusercontent.com/raw/2625891/waitForKeyElements.js
//                  The previous require is from a script of Brock Adams (Thanks to him!)
// @require         https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js
//                  jQuery
// @author          nindogo
// @match           http://vipergirls.to/*
// @match           https://vipergirls.to/*
// @grant           GM_openInTab
// @grant           GM_xmlhttpRequest
// @connect         turboimagehost.com
// @connect         imagebam.com
// @connect         imx.to
// @connect         fastpic.ru
// @connect         dpic.me
// @connect         depic.me
// @connect         imagevenue.com
// @downloadURL     https://github.com/nindogo/test_repo/raw/master/vipergirlsImages.user.js
// ==/UserScript==

function open_in_tab(node) {
    var clickHandler = function(e) {
        GM_openInTab(node.href, 'loadInBackground');
        e.preventDefault();
    };
    node.addEventListener('click', clickHandler, false);
}

// imx.to
waitForKeyElements('a>img[src^="https://imx.to/u/t/"', process_imx_to);
waitForKeyElements('a>img[src^="http://imx.to/u/t/"', process_imx_to);
waitForKeyElements('a>img[src^="https://imx.to/upload/small/"', process_imxto_2);
waitForKeyElements('a>img[src^="http://imx.to/upload/small/"', process_imxto_2);


// TurboImageHost
waitForKeyElements('a[href^="https://www.turboimagehost.com/"', process_turboimage);
waitForKeyElements('a[href^="http://www.turboimagehost.com/"', process_turboimage);

// ImageBam
waitForKeyElements('a[href^="https://www.imagebam.com/image/"', process_imagebam);
waitForKeyElements('a[href^="http://www.imagebam.com/image/"', process_imagebam);

// AcidImg
waitForKeyElements('a[href^="https://acidimg.cc/"', process_acidimg);
waitForKeyElements('a[href^="http://acidimg.cc/"', process_acidimg);

// PimpAndHost
waitForKeyElements('a[href^="https://pimpandhost.com/image/"', process_pimpandhost);
waitForKeyElements('a[href^="http://pimpandhost.com/image/"', process_pimpandhost);
waitForKeyElements('a[href~="/pimpandhost.com/"', process_pimpandhost);

// PixHost
waitForKeyElements('a[href^="https://pixhost.to/show/"', process_pixhost);
waitForKeyElements('a[href^="http://pixhost.to/show/"', process_pixhost);

// ImgBox
waitForKeyElements('a[href^="https://imgbox.com/"', process_imgbox);
waitForKeyElements('a[href^="http://imgbox.com/"', process_imgbox);

// Fastpic.ru
waitForKeyElements('a[href^="https://fastpic.ru/"', process_fastpic);
waitForKeyElements('a[href^="http://fastpic.ru/"', process_fastpic);

// dpic.me
waitForKeyElements('a[href^="https://dpic.me/"', process_dpic);
waitForKeyElements('a[href^="http://dpic.me/"', process_dpic);
waitForKeyElements('a[href^="https://depic.me/"', process_dpic);
waitForKeyElements('a[href^="http://depic.me/"', process_dpic);

// imagevenue.com
waitForKeyElements('a[href*="imagevenue.com"', process_imagevenue);

function process_imx_to(jNode){
    jNode[0].parentNode.href = jNode[0].src.replace('/t/', '/i/');
    open_in_tab(jNode[0].parentNode);
}

function process_imxto_2(jNode){
    var site_url = jNode[0].src
    GM_xmlhttpRequest({
        method: 'GET',
        url: site_url,
        context: jNode,
        onload: function(response){
            response.context[0].parentNode.href = response.finalUrl.replace('/t/', '/i/')
            open_in_tab(response.context[0].parentNode);
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
            response.context[0].href = response.responseText.match(re_link)[1]
            open_in_tab(response.context[0]);
        }
    })
}

function process_imagebam(jNode){
    var img_page = jNode[0].childNodes[0].src;
    var site_url = jNode[0].href;
    var re_link = '<a class="text-decoration-none" href="(https://image.*?)"'

    GM_xmlhttpRequest({
        method: 'GET',
        url: site_url,
        context: jNode,
        onload: function(response){
            response.context[0].href = response.responseText.match(re_link)[1]
            open_in_tab(response.context[0]);
        }
    })
}

function process_acidimg(jNode) {
    jNode[0].href = jNode[0].childNodes[0].src.replace('/upload/small/', '/upload/big/')
    open_in_tab(jNode[0]);

}

function process_pimpandhost(jNode) {

    // Test URLS
    // https://vipergirls.to/threads/4566928-Muscular-beauties-show-their-seductive-charms
    // https://vipergirls.to/threads/4562726-Collection-of-porn-scenes-with-sexy-black-girls

    var replacer = null
    if (jNode[0].childNodes[0].src.match(/_s\..{3,4}$/))
    {
        replacer = jNode[0].childNodes[0].src.replace(/_s\./, '_l.')
    } else if (jNode[0].childNodes[0].src.match(/_0\..{3,4}$/)) {
        replacer = jNode[0].childNodes[0].src.replace(/_0\./, '.')
    }

    if (replacer) {
        jNode[0].href = replacer
        open_in_tab(jNode[0]);
    } else { console.log(jNode[0].href) }
}

function process_pixhost(jNode) {
    function replace_url(match, p1, p2, offset, string) {
        return p1 + 'img' + p2
    }
    var img_url = jNode[0].childNodes[0].src.replace('/thumbs/', '/images/').match(/http.*?t[0-9]*?\.pixhost\.to.*/);
    jNode[0].href = img_url.input.replace(/(http.*?)t([0-9]*?\.pixhost.to.*)/, replace_url);
    open_in_tab(jNode[0]);
}

function process_imgbox(jNode) {
    jNode[0].href = jNode[0].childNodes[0].src.replace('_t.', '_o.').replace('/thumbs', '/images');
    open_in_tab(jNode[0]);
}

function process_fastpic(jNode) {
    var site_url = jNode[0].href
    var re_link = /loading_img.*?=.*?('|")(.*?)('|");/

    console.error(site_url);

}

function process_dpic(jNode) {
    var site_url = jNode[0].href
    var re_link = /<img src=['|"](.*?)['|"]/

    GM_xmlhttpRequest({
        method: 'GET',
        url: site_url,
        context: jNode,
        onload: function(response){
            response.context[0].href = response.response.match(re_link)[1]
            open_in_tab(response.context[0])
        }
    })

}

function process_imagevenue(jNode) {
    var site_url = jNode[0].href
    var re_link = /(img|IMG).*?[s|S][R|r][C|c]=["|'](.*?)['|"]/

    GM_xmlhttpRequest({
        method: 'GET',
        url: site_url,
        context: jNode,
        onload: function(response){
            var response_link = response.response.match(re_link);
            try{
                if (response_link[2]) {
                    response.context[0].href = (response.finalUrl).split('img.php')[0] + response_link[2]
                    open_in_tab(response.context[0])
                }
            }
            catch(error)
            {
                typeof Function.prototype === "function"
            }
        }
    })
}
