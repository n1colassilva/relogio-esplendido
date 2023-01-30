const time = document.getElementById("time");
const date = document.getElementById("date");



function addZeroBeforeDate(number) {
    if (parseInt(number) < 10) {
        number = "0" + number;
    }
    return number
}


function setTime() {
    const browserTime = new Date();

    const day = addZeroBeforeDate(browserTime.getDate());
    const month = addZeroBeforeDate((browserTime.getMonth() + 1));
    const year = browserTime.getFullYear();

    const hour = addZeroBeforeDate(browserTime.getHours());
    const minute = addZeroBeforeDate(browserTime.getMinutes());
    const second = addZeroBeforeDate(browserTime.getSeconds());

    time.innerHTML = `${hour} : ${minute} : ${second}`;
    date.innerHTML = `${day} - ${month} - ${year}`;

    console.log("amogus")
}


setInterval("setTime()", 1000);