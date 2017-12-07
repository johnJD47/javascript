var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
slider.oninput = function myfunction() {
document.getElementById('imageemo').src='./images/2.png'
  output.innerHTML = this.value;
}


var slider1 = document.getElementById("myRange1");
var output1 = document.getElementById("demo1");
output1.innerHTML = slider1.value;
slider1.oninput = function() {
  document.getElementById('imageemo').src='./images/4.png'
  output1.innerHTML = this.value;
}


var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("demo2");
output2.innerHTML = slider2.value;
slider2.oninput = function() {
  document.getElementById('imageemo').src='./images/5.png'
  output2.innerHTML = this.value;
}


var slider3 = document.getElementById("myRange3");
var output3 = document.getElementById("demo3");
output3.innerHTML = slider3.value;
slider3.oninput = function() {
  document.getElementById('imageemo').src='./images/6.png'
   output3.innerHTML = this.value;
}


var slider4 = document.getElementById("myRange4");
var output4 = document.getElementById("demo4");
output4.innerHTML = slider4.value;
slider4.oninput = function() {
  document.getElementById('imageemo').src='./images/7.png'
  output4.innerHTML = this.value;
};
