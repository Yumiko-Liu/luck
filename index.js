function isMobile(){
	if( navigator.userAgent.match(/Android/i)
		|| navigator.userAgent.match(/webOS/i)
		|| navigator.userAgent.match(/iPhone/i)
		|| navigator.userAgent.match(/iPad/i)
		|| navigator.userAgent.match(/iPod/i)
		|| navigator.userAgent.match(/BlackBerry/i)
		|| navigator.userAgent.match(/Windows Phone/i)
	) return true;
	return false;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  var context = "";
  if (r != null)
    context = r[2];
  reg = null;
  r = null;
  return context == null || context == "" || context == "undefined" ? "" : context;
}

if (!isMobile()) {
  document.getElementById('mask').style.display = 'none';
}

var clientWidth = document.documentElement.clientWidth;
var clientHeight = document.documentElement.clientHeight;
var falseBtn = document.getElementById('false-btn');
var trueBtn = document.getElementById('true-btn');

if (!getQueryString('cheat')) {
  falseBtn.onmouseover = function() {
    console.log(clientHeight);
    falseBtn.setAttribute('class', 'abs');
    falseBtn.style.top = getRandomArbitrary(1, clientHeight) + 'px';
    falseBtn.style.left = getRandomArbitrary(1, clientWidth) + 'px';
  }
}

falseBtn.onclick = function() {
  alert('你作弊！')
}

trueBtn.onclick = function() {
  alert('嗯~，拉勾勾~')
}
