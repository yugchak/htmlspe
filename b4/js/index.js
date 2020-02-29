var btn = document.getElementById('dybtn')
var btn2 = document.getElementById('dybtn2')
var btn3 = document.getElementById('dybtn3')
var father = document.getElementById('father')
 
// val 作为正弦函数的一个角度值，逐渐增大，最终输出的值是0 - 1无限循环
var val = Math.random() * 360  // 控制颜色变化
var angle = 0 //渐变角度
var val_for_angle = Math.random() * 360

setInterval(function(){
  angle = Math.sin(val_for_angle * 2* Math.PI/360) * 360
  val_for_angle++
},200)
setInterval(function(){
  var colorH = Math.sin(val * 2* Math.PI/360) * 360;
  var colorH2 = Math.sin((val+20) * 2* Math.PI/360) * 360;
  console.log(colorH + '  ' + colorH2)
  
  val++
  var linearGradient = 'linear-gradient('+angle+'deg,hsl('+colorH+',100%, 50%) ,hsl('+colorH2+',100%, 50%))'  
  btn.style.backgroundImage = linearGradient
  btn2.style.backgroundImage = linearGradient
  btn3.style.backgroundImage = linearGradient
},120)