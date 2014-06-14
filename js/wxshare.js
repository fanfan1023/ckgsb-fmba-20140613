(function() {
  var onBridgeReady = function() {
    WeixinJSBridge.call("hideToolbar");

    var appId = "", //$('#txt-wx').data('appid'),
      link = window.location.href, //$('#txt-wx').data('link'),
      title = htmlDecode($('title').text()), // htmlDecode($('#txt-wx').data('title')),
      desc = $('meta[name="sub-title"]').attr('content') || htmlDecode($('title').text() + ""), //<br/>官网地址：" + window.location.href),  // htmlDecode($('#txt-wx').data('desc')),
      desc = $('meta[name="sub-title"]').attr('content') || link,
      imgUrl = "";


    var image = $('link[data-logo]')[0]; //$('#txt-wx').data('img')
    if ( !image ) {
      image = $('img[data-share-logo]')[0]
    }
    if ( !image ) {
      image = $('#wx-share-img')[0];
    }
    if ( !image ) {
      image = $('img:first')[0];
    }

    imgUrl = image.src;


    // 发送给好友;
    WeixinJSBridge.on('menu:share:appmessage', function(argv) {
      WeixinJSBridge.invoke('sendAppMessage', {
          //"appid"      : appId,
          "img_url": imgUrl,
          //"img_width"  : "640",
          //"img_height" : "640",
          "link": link,
          "desc": desc,
          "title": title
        },
        function(res) {});
    });

    // 分享到朋友圈;
    WeixinJSBridge.on('menu:share:timeline', function(argv) {
      WeixinJSBridge.invoke('shareTimeline', {
        "img_url": imgUrl,
        "link": link,
        "desc": desc,
        "title": title
      }, function(res) {});
    });

    // 分享到微博;
    var weiboContent = '';
    WeixinJSBridge.on('menu:share:weibo', function(argv) {
      WeixinJSBridge.invoke('shareWeibo', {
          "content": title + link,
          "url": link,
        },
        function(res) {});
    });
  };

  if (document.addEventListener) {
    document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
  } else if (document.attachEvent) {
    document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
    document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
  }


  function htmlDecode(e) {
    return e.replace(/&#39;/g, "'").replace(/<br\s*(\/)?\s*>/g, "\n").replace(/&nbsp;/g, " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&amp;/g, "&");
  }
})();