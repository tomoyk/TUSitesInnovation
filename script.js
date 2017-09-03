setTimeout(function(){
  var foo = document.getElementById("mbYTP_bgndVideo");
  var hoge = document.getElementById("bgndVideo");
  foo.setAttribute("src", "https://www.youtube.com/embed/PnnQlEQMIbs?autoplay=0&modestbranding=1&controls=0&showinfo=0&rel=0&enablejsapi=1&version=3&playerapiid=mbYTP_bgndVideo&origin=http%3A%2F%2Fwww.teu.ac.jp&allowfullscreen=true&wmode=transparent&iv_load_policy=3&html5=1&widgetid=1");
  hoge.setAttribute("mute", false);

}, 1000);
  var nyaan = document.getElementsByClassName("mark");
  nyaan[0].setAttribute("src","https://download.homirun.pw/data/tut.png");
  nyaan[0].setAttribute("height","94px");
  nyaan[0].setAttribute("width","300px");
  var hoge =document.getElementsByClassName("sitename typesquare_tags"); 
  hoge[0].parentNode.removeChild(hoge[0]);
  var style = document.createElement('link');
  style.rel = 'stylesheet';
  style.type = 'text/css';
  style.href = chrome.extension.getURL('add.css');
  (document.head||document.documentElement).appendChild(style);

$(function(){
    $("a").each(function(){
        var value = $(this).html();
        
        if(!value) {
            return true;
        }
        
        if(value.indexOf('大学概要') == -1) {
            return true;
        }
        
        $(this).html('がいよー');

    });
});

$(function(){
    $("a").each(function(){
        var value = $(this).html();
        
        if(!value) {
            return true;
        }
        
        if(value.indexOf('学部･大学院案内') == -1) {
            return true;
        }
        
        $(this).html('がくぶあんあい');

    });
});

$(function(){
    $("a").each(function(){
        var value = $(this).html();
        
        if(!value) {
            return true;
        }
        
        if(value.indexOf('入試・入学案内') == -1) {
            return true;
        }
        
        $(this).html('にゅーしあんない');

    });
});

$(function(){
    $("a").each(function(){
        var value = $(this).html();
        
        if(!value) {
            return true;
        }
        
        if(value.indexOf('キャンパスライフ') == -1) {
            return true;
        }
        
        $(this).html('きゃんぱすらいふ');

    });
});

$(function(){
    $("a").each(function(){
        var value = $(this).html();
        
        if(!value) {
            return true;
        }
        
        if(value.indexOf('就職･キャリア支援') == -1) {
            return true;
        }
        
        $(this).html('しゅーしょくしえん');

    });
});

$(function(){
    $("a").each(function(){
        var value = $(this).html();
        
        if(!value) {
            return true;
        }
        
        if(value.indexOf('研究案内') == -1) {
            return true;
        }
        
        $(this).html('けんきゅー');

    });
});

$(function(){
    $("a").each(function(){
        var value = $(this).html();
        
        if(!value) {
            return true;
        }
        
        if(value.indexOf('受験生') == -1) {
            return true;
        }
        
        $(this).html('じゅけんせー');

    });
});

$(function(){
    $("a").each(function(){
        var value = $(this).html();
        
        if(!value) {
            return true;
        }
        
        if(value.indexOf('在学生') == -1) {
            return true;
        }
        
        $(this).html('ざいがくせー');

    });
});

$(function(){
    $("a").each(function(){
        var value = $(this).html();
        
        if(!value) {
            return true;
        }
        
        if(value.indexOf('卒業生') == -1) {
            return true;
        }
        
        $(this).html('そつぎょーせー');

    });
});

$(function(){
    $("a").each(function(){
        var value = $(this).html();
        
        if(!value) {
            return true;
        }
        
        if(value.indexOf('教職員') == -1) {
            return true;
        }
        
        $(this).html('せんせー');

    });
});
$(function(){
    $("a").each(function(){
        var value = $(this).html();
        
        if(!value) {
            return true;
        }
        
        if(value.indexOf('研究者の方') == -1) {
            return true;
        }
        
        $(this).html('けんきゅーしゃ');

    });
});
$(function(){
    $("a").each(function(){
        var value = $(this).html();
        
        if(!value) {
            return true;
        }
        
        if(value.indexOf('採用担当者の方') == -1) {
            return true;
        }
        
        $(this).html('さいよーたんとー');

    });
});
$(function(){
    $("a").each(function(){
        var value = $(this).html();
        
        if(!value) {
            return true;
        }
        
        if(value.indexOf('お問い合わせ') == -1) {
            return true;
        }
        
        $(this).html('おといあわせ');

    });
});
$(function(){
    $("a").each(function(){
        var value = $(this).html();
        
        if(!value) {
            return true;
        }
        
        if(value.indexOf('交通案内') == -1) {
            return true;
        }
        
        $(this).html('あくせす');

    });
});
$(function(){
    $("a").each(function(){
        var value = $(this).html();
        
        if(!value) {
            return true;
        }
        
        if(value.indexOf('サイトマップ') == -1) {
            return true;
        }
        
        $(this).html('さいとまっぷ');

    });
});
$(function(){
    $("a").each(function(){
        var value = $(this).html();
        
        if(!value) {
            return true;
        }
        
        if(value.indexOf('ネット出願') == -1) {
            return true;
        }
        
        $(this).html('しゅつがん');

    });
});
$(function(){
    $("a").each(function(){
        var value = $(this).html();
        
        if(!value) {
            return true;
        }
        
        if(value.indexOf('資料請求') == -1) {
            return true;
        }
        
        $(this).html('しりょー');

    });
});$(function(){
    $("a").each(function(){
        var value = $(this).html();
        
        if(!value) {
            return true;
        }
        
        if(value.indexOf('採用') == -1) {
            return true;
        }
        
        $(this).html('さいよー');

    });
});$(function(){
    $("a").each(function(){
        var value = $(this).html();
        
        if(!value) {
            return true;
        }
        
        if(value.indexOf('担当者の方') == -1) {
            return true;
        }
        
        $(this).html('たんとー');

    });
});
