function updateTime(){
    let dateTime = new Date();
    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();
    let am_pm = document.getElementById('am-pm');
    
    if(hours == 12){
        am_pm.innerHTML = "PM";
    }
    else if(hours > 12){
        am_pm.innerHTML = "PM";
        hours -= 12;
    }
    else {
        am_pm.innerHTML = "AM";
    }
    
    document.getElementById('hr').innerHTML = hours;
    document.getElementById('min').innerHTML = minutes;
    document.getElementById('sec').innerHTML = seconds;

}

setInterval(updateTime, 1000);