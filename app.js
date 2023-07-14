(function() {
var time = new Date(), //we get this time from our pc time not from server
second = time.getSeconds() / 60 * 360,
minute = time.getMinutes() / 60 * 360 + time.getSeconds() / 60 *6,
hour = time.getHours() / 12 * 360 + time.getMinutes() /60 * 30,
animation = [
"@keyframes sec-hand{from{transform: rotate(" + second + "deg);}to{transform: rotate(" + (second  + 360) + "deg);}}",
"@keyframes min-hand{from{transform: rotate(" + minute + "deg);}to{transform: rotate(" + (minute + 360) + "deg);}}",
"@keyframes hr-hand{from{transform: rotate(" + hour + "deg);}to{transform: rotate(" + (hour + 360) + "deg);}}"
].join("");
document.querySelector("#clock-animate").innerHTML = animation;
})();

setInterval(function(){
    const clock = document.querySelector(".display");
    let time = new Date();
    let sec = time.getSeconds();
    let min = time.getMinutes();
    let hr = time.getHours();
    let day = 'AM';
    if(hr > 12){
      day = 'PM';
      hr = hr - 12;
    }
    if(hr == 0){
      hr = 12;
    }
    if(sec < 10){
      sec = '0' + sec;
    }
    if(min < 10){
      min = '0' + min;
    }
    if(hr < 10){
      hr = '0' + hr;
    }
    clock.textContent = hr + ':' + min + ':' + sec + " " + day;
  });