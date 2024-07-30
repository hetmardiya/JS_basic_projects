const second = 1000,
minute = 60 * second,
hour = 60 * minute,
day = 24 * hour;

let f_days = document.querySelectorAll('.days p');    //f meance frontend shown days 
let f_hours = document.querySelectorAll('.hours p');
let f_minutes = document.querySelectorAll('.minutes p');
let f_seconds = document.querySelectorAll('.seconds p');

function two_digit(value){
    return String(value).padStart(2 , "0")
}
let timerFunction = ()=>{
        let inputed_date = document.getElementById('date').value;
        let that_date = new Date(`${inputed_date}`).getTime();                          // that day's date
        let today_date = new Date().getTime();                                    // today's date and time
        let differences = that_date - today_date;                                 // differences between that day and today's time
        let left_day = Math.floor(differences / day);                             //day remaining to reach that date
        let left_hour = Math.floor((differences % day) / hour);                    //hour remaining to reach that date
        let left_minutes = Math.floor((differences % hour) / minute);              //minutes remaining to reach that date according to hour
        let left_seconds = Math.floor((differences % minute) / second);            //seconds remaining to reach that date  accoding to hour

        f_days[0].textContent = two_digit(left_day);
        f_hours[0].textContent = two_digit(left_hour);
        f_minutes[0].textContent = two_digit(left_minutes);
        f_seconds[0].textContent = String(left_seconds).padStart(2 , "0");
    }

let interval_id;

function start_timer(){
    clearInterval(interval_id);
    interval_id = setInterval(() => {
        timerFunction()
    }, 1000);
}
    document.querySelector('input').addEventListener('change',()=>{
        start_timer()       
    })

let inputed_date = document.getElementById('date')
inputed_date.addEventListener('keydown',(e)=>{
    e.preventDefault()
})
inputed_date.addEventListener('paste',(e)=>{
    e.preventDefault()
})