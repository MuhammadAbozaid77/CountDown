
let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let countt = setInterval(function(){
    let NowDate = new Date().getTime();
    let ReachDate = new Date("December 30, 2023 00:00:00").getTime();
    let TimeDifference = ReachDate - NowDate ;
   /* --------------- Time HTML ---------------*/
    let DaysFun = Math.floor(TimeDifference / (1000 * 60 * 60 * 24) );
    let HoursFun = Math.floor((TimeDifference % (1000 * 60 * 60 * 24)) / (1000 *60 *60));
    let MinutesFun = Math.floor((TimeDifference % (1000 * 60 * 60)) / (1000 *60) );
    let SecondsFun = Math.floor((TimeDifference % (1000 * 60) / (1000)));

    /* --------------- Inner HTML ---------------*/
    days.innerHTML = DaysFun ;
    seconds.innerHTML = SecondsFun ;
    minutes.innerHTML = MinutesFun ;
    hours.innerHTML = HoursFun ;

    if(TimeDifference < 0){
        days.innerHTML = "00" ;
        seconds.innerHTML = "00" ;
        minutes.innerHTML = "00" ;
        hours.innerHTML = "00" ;
        clearInterval(countt);
    }
} , 1000)