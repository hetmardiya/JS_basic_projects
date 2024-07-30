let clock = document.querySelector('h1');
let btns = document.querySelectorAll('button');
console.log(btns[1]);
let sec = 0;
let minutes = 0;
let hours = 0;
let intervalid;
let start = ()=>{
    intervalid = setInterval(() => {
        if (sec < 59) {
            sec++;
        }else if(minutes >= 59){
            minutes = 0;
            hours++;
        }else{
            sec = 0;
            minutes++;
        }
        let seconds = String(sec).padStart(2,"0");
        let minute = String(minutes).padStart(2,"0");
        let hr = String(hours).padStart(2,"0");
        clock.textContent = `${hr}:${minute}:${seconds}`
    }, 1000);
}
btns[0].addEventListener('click',start)

let stop = ()=>{
    clearInterval(intervalid);
}
btns[1].addEventListener('click',stop)