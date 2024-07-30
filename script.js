const second = 1000,
minute = 60 * second,
hour = 60 * minute,
day = 24 * hour;

let timerFunction = ()=>{
    setInterval(() => {
        let that_date = new Date('08/3/2024').getTime();                          // that day's date
        let today_date = new Date().getTime();                                    // today's date and time
        let differences = that_date - today_date;                                 // differences between that day and today's time
        let left_day = Math.floor(differences / day)                              //day remaining to reach that date
        let left_hour = Math.floor((differences % day) / hour)                    //hour remaining to reach that date
        let left_minutes = Math.floor((differences % hour) / minute)              //minutes remaining to reach that date according to hour
        let left_seconds = Math.floor((differences % minute) / second)            //seconds remaining to reach that date  accoding to hour
    }, 1000);
}
timerFunction()