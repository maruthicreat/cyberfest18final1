function timer(){
  var _second = 1000;
  var _minute = _second * 60;
  var _hour = _minute * 60;
  var _day = _hour * 24;
  var _year = _day * 365;
  var hoje =  new Date();
  var data_jogo = new Date("01/25/2018 00:00:00 AM");
  tempo = data_jogo - hoje;
  if(tempo>0){
	$(".conteiner span").eq(0).html(("0" + Number(Math.floor((tempo % _year) / _day))).slice(-2));
    $(".conteiner span").eq(1).html(("0" + Number(Math.floor((tempo % _day) / _hour))).slice(-2));
    $(".conteiner span").eq(2).html(("0" + Number(Math.floor((tempo % _hour) / _minute))).slice(-2));
    $(".conteiner span").eq(3).html(("0" + Number(Math.floor((tempo % _minute) / _second))).slice(-2));
  } else {
    $("#timer").html("<h2></h2>");
    $(".star").show();
  }
}
setInterval(function(){
  timer();
},1000)

function myMove() {
  var elem = document.getElementById("vs");
  var pos = 0;
  elem.style.display="block";
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos=pso+5;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}
