window.console && console.log && console.log('源码在这里 https://github.com/ingbaobeigroup/ckgsb-fmba-20140613 ');


// location.hash = "#1";
$(function() {
  // location.hash = "#1";
  $(document).ready(function() {
    $('#fullpage').fullpage({
      navigation: false,
      // navigation: true,
      navigationPosition: 'right',
      scrollingSpeed: 400,
      touchSensitivity: 3,
      afterResize: function() {
        reCountImgSize();
      },
      onLeave: function(anchorLink, index, slideAnchor, slideIndex) {}
    });
  });

  // 点击进行其他页面跳转
  $('.slide-tip.up').on('click', function() {
    $.fn.fullpage.moveSectionUp();
  })
  $('.slide-tip.down').on('click', function() {
    $.fn.fullpage.moveSectionDown();
  })
  // |点击进行其他页面跳转


  /**
   * @name reCountImgSize
   * @desc 计算二维码位置及大小
   * @depend ['jQuery']
   * @return null
   **/
  function reCountImgSize() {
    var bodyHeight = window.innerHeight;
    var bodyWidth = window.innerWidth;
    if (bodyWidth > bodyHeight) {
      // alert('系统检测到为横屏，请使用竖屏进行查看页面。');
    }

    // qr-img
    var qrImage = $('.page8-qr');
    // 二维码高宽比例，当他为正方形
    var qeIdWH = 1; // 261 / 260;

    // 下面的 261 为 psd 文件二维码的宽度，1920 为画布高度， 1080为画布宽度。
    var qrImageWidth, qrImageWidthCount, qrImageHeightCount;
    qrImageWidthCount = 261 * bodyWidth / 1080;
    qrImageHeightCount = 261 * bodyHeight / 1920;
    qrImageWidth = qrImageWidthCount > qrImageHeightCount ? qrImageHeightCount : qrImageWidthCount;

    qrImage.css({
      width: qrImageWidth * qeIdWH,
      height: qrImageWidth,
      marginLeft: -(qrImageWidth * qeIdWH / 2),
      marginTop: -(qrImageWidth / 2)
    })
    // |qr-img



  }

  reCountImgSize();
  var ii = 0;

  var clickEventType = ((document.ontouchstart !== null) ? 'click' : 'touchstart');
  $('.audio-button-box').on(clickEventType, function() {
    var self = $(this);
    var audio = $audio.get(0);
    // self.toggleClass("stop");
    if (self.hasClass("stop")) {
      audio && audio.play && audio.play();
    } else {
      audio && audio.stop && audio.stop();
      audio && audio.pause && audio.pause();
    }
  })
  var $audio = $('audio');
  var audio = $audio.get(0);
  audio && audio.play && audio.play();


  $audio.on('ended', function() {
    $('.audio-button-box').addClass('stop');
  });
  $audio.on('stop', function() {
    $('.audio-button-box').addClass('stop');
  });
  $audio.on('pause', function() {
    $('.audio-button-box').addClass('stop');
  });
  $audio.on('play', function() {
    $('.audio-button-box').removeClass('stop');
  });

  // 点击进行其他页面跳转
  $('.slide-tip.up').on('click', function() {
    $.fn.fullpage.moveSectionUp();
  })
  $('.slide-tip.down').on('click', function() {
    $.fn.fullpage.moveSectionDown();
  })
  // |点击进行其他页面跳转

  $(document.body).one(clickEventType, function() {
    audio && audio.play && audio.play();
  })

  if($audio.length < 1){
    $('.audio-button-box').hide();
  }

  /**
   * @name stopAudio
   * @desc 停止所有音频
   * @depend ['jQuery']
   * @return {null}
   **/
  function stopAllAudio() {
    var audio = $('audio');
    audio.each(function(index, elem) {
      if (elem && elem.pause) {
        elem.pause();
        // elem.load();
      }
    })
  }
  function closeAudio(){
    stopAllAudio();
    // return false;
  }
  window.onbeforeunload = closeAudio;
  window.onunload = closeAudio;


})


/*
  进行 高质量 jpg加载，
  如果低质量的 jpg 都加载不成功，就不加载高质量的 jpg。
  记得释放内存
*/
var imgs = document.getElementsByTagName('img');
for (var i = imgs.length; i--;) {
  (function() {
    var imgOlrSrc = imgs[i];
    // 进行高质量 jpg 创建加载
    var newImage = function() {
      var img;
      var src = imgOlrSrc.getAttribute('high-src');

      if (src !== undefined && src !== null && src !== "") {
        img = document.createElement('img');
        img.onload = function() {
          if (img.width > 0) {
            imgOlrSrc.src = src;
            img = null;
            imgOlrSrc = null;
            src = null;
          }
        }
        img.src = src;
      }
    }

    // 监控加载信息
    imgOlrSrc.onload = function() {
      if (imgOlrSrc && imgOlrSrc.src === imgOlrSrc.getAttribute('high-src')) {
        imgOlrSrc.onload = null;
        newImage = null;
      } else {
        newImage && newImage();
        newImage = null;
      }
    }

    // 如果低质量的 jpg 都加载不成功，就不加载高质量的 jpg。
    if (imgOlrSrc.width > 0) {
      imgOlrSrc.onload && imgOlrSrc.onload();
    } else {
      imgOlrSrc.src = imgOlrSrc.src + "?&" + (new Date()).getTime();
    }
  })();
}