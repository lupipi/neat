window.onload = function () {
  var leftDistance = document.getElementById("carousel-img");
  var words = document.getElementsByClassName("carousel-word");
  // var newleftDistance = leftDistance.style.left;
  var buttons = document.getElementById("buttons").getElementsByTagName("a");
  var index = 0;
  var time = 1000;
  var high = null;

//小圆点的样式变化
  function buttonsdeschange() {
    for (var i = 0; i < buttons.length; i++) {
      if (buttons[i].className = "on") {
        buttons[i].className = "";
        buttons[i].onmouseover = stop;
      }
    }
  }


//    点击每个小圆点时背景切换
  function carousel() {
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].onclick = (function (i) {
        return function () {
          if (high) {
            clearInterval(high);
          }
          fade(leftDistance,100);
          buttonsdeschange();
          leftDistance.style.left = i * -1060 + "px";
          buttons[i].className = "on";
          index = i;
        }
      }(i));
    }
  }

//背景透明度变化
  function fade(ele,loop) {
    var op = 0;
    ele.style.opacity = op;
    high = setInterval(function () {
      op += 0.1;
      ele.style.opacity= op;
      if (op >= 1 ) {
        clearInterval(high);
      }
    },loop)
  }
//背景自动变化
  function autoplay() {
    timer = setInterval (function () {
      if (index == 3) {
          index = 0;
          buttons[index].onclick();
        }else {
          index += 1;
          buttons[index].onclick();
        }
      },2000)
    }
//停止变化
  function stop() {
    clearInterval(timer);
  }
//鼠标移入移出时的事件
  leftDistance.onmouseover = stop;
  leftDistance.onmouseout = function () {
    clearInterval(timer);
    autoplay();
  };
  carousel();
  autoplay();



  //指定元素动画
  var t;
  function fup(eve) {
    eve.style.top = 20 + "px";
    eve.style.opacity = 0;
    t = setInterval(function functionName() {
      if (parseInt(eve.style.top) <= 0 ) {
        clearInterval(t);
      }else {
        eve.style.top = parseInt(eve.style.top) - 2 +"px";
        eve.style.opacity = parseFloat(eve.style.opacity) + 0.1;
      }
    },40)
  }

//元素顺序执行
  var item1 = document.getElementById("item1");
  var item2 = document.getElementById("item2");
  var item3 = document.getElementById("item3");
  function rec() {
    setTimeout(function() {
      fup(item1);
      setTimeout(function() {
        fup(item2);
        setTimeout(function() {
          fup(item3);
        },450)
      },450)
    },10)
  }
  var work1 = document.getElementById("work1");
  var work2 = document.getElementById("work2");
  var work3 = document.getElementById("work3");
  function rec1() {
    setTimeout(function() {
      fup(work1);
      setTimeout(function() {
        fup(work2);
        setTimeout(function() {
          fup(work3);
        },450)
      },450)
    },10)
  }


//滚轮滑动到指定距离执行一次动画
  var ft = true;
  var ft1 = true;
  var top;
  var top1;
  window.onscroll = function() {
    top = document.documentElement.clientHeight - (document.getElementById("allitem").offsetTop - document.body.scrollTop);
    top1 = document.documentElement.clientHeight - (document.getElementById("project-item-content").offsetTop - document.body.scrollTop);
    if (top >= 80 && ft) {
      rec();
      ft = false;
    }
  }
}
