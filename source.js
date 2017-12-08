var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
slider.oninput = function myfunction() {
  output.innerHTML = this.value;
  if(this.value>2){
    document.getElementById('imageemo').src='./images/2.png'
  }
  if(this.value>4){
    document.getElementById('imageemo').src='./images/3.png'
  }
  if(this.value>6){
    document.getElementById('imageemo').src='./images/4.png'
  }
  if(this.value>8){
    document.getElementById('imageemo').src='./images/43.png'
  }
  if(this.value>10){
    document.getElementById('imageemo').src='./images/33.png'
  }
}


var slider1 = document.getElementById("myRange1");
var output1 = document.getElementById("demo1");
output1.innerHTML = slider1.value;
slider1.oninput = function() {
  document.getElementById('imageemo').src='./images/5.png'
  output1.innerHTML = this.value;
  if(this.value>20){
    document.getElementById('imageemo').src='./images/6.png'
  }
  if(this.value>40){
    document.getElementById('imageemo').src='./images/7.png'
  }
  if(this.value>60){
    document.getElementById('imageemo').src='./images/8.png'
  }
  if(this.value>80){
    document.getElementById('imageemo').src='./images/9.png'
  }
  if(this.value>90){
    document.getElementById('imageemo').src='./images/10.png'
  }
}


var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("demo2");
output2.innerHTML = slider2.value;
slider2.oninput = function() {
  document.getElementById('imageemo').src='./images/42.png'
  output2.innerHTML = this.value;

  if(this.value>30000){
    document.getElementById('imageemo').src='./images/12.png'
  }
  if(this.value>40000){
    document.getElementById('imageemo').src='./images/13.png'
  }
  if(this.value>50000){
    document.getElementById('imageemo').src='./images/14.png'
  }
  if(this.value>60000){
    document.getElementById('imageemo').src='./images/15.png'
  }
  if(this.value>70000){
    document.getElementById('imageemo').src='./images/16.png'
  }
  if(this.value>80000){
    document.getElementById('imageemo').src='./images/17.png'
  }
}


var slider3 = document.getElementById("myRange3");
var output3 = document.getElementById("demo3");
output3.innerHTML = slider3.value;
slider3.oninput = function() {
  document.getElementById('imageemo').src='./images/18.png'
   output3.innerHTML = this.value;

     if(this.value>10){
       document.getElementById('imageemo').src='./images/19.png'
     }
     if(this.value>20){
       document.getElementById('imageemo').src='./images/20.png'
     }
     if(this.value>40){
       document.getElementById('imageemo').src='./images/21.png'
     }
     if(this.value>60){
       document.getElementById('imageemo').src='./images/22.png'
     }
     if(this.value>80){
       document.getElementById('imageemo').src='./images/23.png'
     }
     if(this.value>=100){
       document.getElementById('imageemo').src='./images/24.png'
     }
}


var slider4 = document.getElementById("myRange4");
var output4 = document.getElementById("demo4");
output4.innerHTML = slider4.value;
slider4.oninput = function() {
  document.getElementById('imageemo').src='./images/25.png'
  output4.innerHTML = this.value;

    if(this.value>1){
      document.getElementById('imageemo').src='./images/26.png'
    }
    if(this.value>2){
      document.getElementById('imageemo').src='./images/27.png'
    }
    if(this.value>4){
      document.getElementById('imageemo').src='./images/28.png'
    }
    if(this.value>6){
      document.getElementById('imageemo').src='./images/29.png'
    }
    if(this.value>8){
      document.getElementById('imageemo').src='./images/30.png'
    }
    if(this.value>=10){
      document.getElementById('imageemo').src='./images/31.png'
    }
};
