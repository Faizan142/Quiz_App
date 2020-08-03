var dt =new Date(new Date().setTime(0))
var time = dt.getTime();
var seconds = Math.floor((time %(100*60))/1000)
var minutes = Math.floor((time %(1000*60*60))/(1000*60))
var timex = 0;
var  mytime = setInterval(function(){
    if(seconds < 59){
        seconds++;
    } else{
        seconds = 0;
        minutes++;
    }
   
    let format_sec = seconds < 10 ? `0${seconds}`: `${seconds}`;
    let format_min = minutes < 10 ? `0${minutes}`: `${minutes}`
    document.querySelector("span.time").innerHTML = `${format_min} : ${format_sec}`;
},1000);