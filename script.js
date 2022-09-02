const hourElement = document.getElementById("hour")

const minuteElement = document.getElementById("minute")

const secondElement = document.getElementById("second")

const ampmElement = document.getElementById("ampm")
const pmElement = document.getElementById("pm")


function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"
    let pm = "PM"

    if(h>12){
        h = h -12
        ampm = "PM"
    }


    h =  h<10? "0" +h : h;
    m =  m<10? "0" +m : m;
    s =  s<10? "0" +s : s;


    hourElement.innerText = h;
    minuteElement.innerText = m;
    secondElement.innerText = s;
    ampmElement, (innerText = ampm);
    pmElement, (innerText = pm);
    setTimeout(()=>{
        updateClock()
    },1000)
}

updateClock()