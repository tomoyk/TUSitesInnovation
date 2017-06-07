setTimeout(function(){
  var foo = document.getElementById("mbYTP_bgndVideo");
  foo.setAttribute("src", "https://www.youtube.com/embed/xkMdLcB_vNU?autoplay=0&modestbranding=1&controls=0&showinfo=0&rel=0&enablejsapi=1&version=3&playerapiid=mbYTP_bgndVideo&origin=http%3A%2F%2Fwww.teu.ac.jp&allowfullscreen=true&wmode=transparent&iv_load_policy=3&html5=1&widgetid=1");

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

