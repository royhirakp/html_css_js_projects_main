console.log("screept loaded")

let timeSTART = 0;
let h = 0;
let m = 0;
let s = 0;
let ms = 0;
let timerStatus = false;
let castData = []
function timerfunction() {
    // timerStatus = true;
    if (timerStatus) {
        ms = ms + 1;
        // ms = ms * 10
        if (ms == 100) {
            s = s + 1;
            ms = 0
        }
        if (s == 60) {
            m = m + 1;
            s = 0;
        }
        if (m > 60) {
            h = h + 1;
            m = 0;
        }

        //Logic for cleating three degit milisecond
        let dummy_ms = ms * 10
        let ThreeDegint_MS = ""
        if (dummy_ms < 10 && dummy_ms >= 0) {
            ThreeDegint_MS = "00" + dummy_ms;
        } else if (dummy_ms < 100 && dummy_ms >= 10) {
            ThreeDegint_MS = "0" + dummy_ms
        } else {
            ThreeDegint_MS = dummy_ms
        }

        document.getElementById('milisec').innerHTML = ThreeDegint_MS;
        document.getElementById('sec').innerHTML = s > 10 ? s : "0" + s
        document.getElementById('munit').innerHTML = m > 10 ? m : "0" + m
        document.getElementById('hour').innerHTML = h > 10 ? h : "0" + h

        setTimeout('timerfunction()', 10)
    }
}

function stopwatchOpration(n){
    console.log(n)
    if(n==="start"){
        let previous_value = timerStatus;
        timerStatus = true;
        if (previous_value !== timerStatus) {
            timerfunction()
        }
    }else if(n==="pause"){
        timerStatus = false;
    }else{
        timerStatus = false;
        document.getElementById('milisec').innerHTML = "000",
            document.getElementById('sec').innerHTML = "00",
            document.getElementById('munit').innerHTML = "00",
            document.getElementById('hour').innerHTML = "00";
        document.getElementById('cast').innerHTML = ""
        m = 0, s = 0, h = 0, ms = 0;
    }
}


function cast() {
    //Logic for cleating three degit milisecond
    let dummy_ms = ms * 10
    let ThreeDegint_MS = ""
    if (dummy_ms < 10 && dummy_ms >= 0) {
        ThreeDegint_MS = "00" + dummy_ms;
    } else if (dummy_ms < 100 && dummy_ms >= 10) {
        ThreeDegint_MS = "0" + dummy_ms
    } else {
        ThreeDegint_MS = dummy_ms
    }
    let obj = {
        h: h > 10 ? h : "0" + h,
        m: m > 10 ? m : "0" + m,
        s: s > 10 ? s : "0" + s,
        ms: ThreeDegint_MS
    }
    castData.push(obj)
    // console.log(castData)

    let htmldata = ""
    for (let i = 0; i < castData.length; i++) {
        // console.log(htmldata)
        htmldata = htmldata + `<li><b><u>CAST ${i + 1}:</u></b> <span id="hour">${castData[i].h}</span>:
        <span id="munit">${castData[i].m}</span>:
         <span id="sec">${castData[i].s}</span>:
          <span id="milisec">${castData[i].ms}</span> </li>`
    }

    document.getElementById('cast').innerHTML = htmldata
}