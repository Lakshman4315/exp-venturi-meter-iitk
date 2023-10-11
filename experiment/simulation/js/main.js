
var enableButton = document.getElementById("enable");
var purzeButton = document.getElementById("purze")
var valvePositioning = document.querySelector("#flow-rate-slider")
var svg = document.getElementById("Layer_1");
var valvePositioningText = document.getElementById("valve-positioning-text");
var manometerText = document.getElementById("manometer-text")
var count = 0;
var w1 = document.getElementById("Water_1")
var w2 = document.getElementById("Water_2")
var w3 = document.getElementById("Water_3")
var w4 = document.getElementById("Water_4")
var w5 = document.getElementById("Water_5")
var w6 = document.getElementById("Venturimeter_Water_Right")
var w7 = document.getElementById("Manometer_Water_Right_00000080197925184150286820000005080878160067944331_")
var w8 = document.getElementById("Venturimeter_Throat")
var w9 = document.getElementById("Venturimeter_Water_Left")
var w10 = document.getElementById("Manometer_Water_Left")
var w11 = document.getElementById("Water_6")
var w12 = document.getElementById("Water_7")
var w13 = document.getElementById("Water_8")
var w14 = document.getElementById("Water_9")

var waterTankFront = document.getElementById("Tank_Water_Front")
var waterTankBase = document.getElementById("Water_Tank_Base")
var waterTankBack = document.getElementById("Tank_Water_Back");
var waterTankLeft = document.getElementById("Tank_Water_Left");
var ml = document.getElementById("Mercury_Left")
var timerSec = document.getElementById("timer-sec")
var timerMS = document.getElementById("timer-ms")

var arrowRect = document.getElementById("arrow-rect")
var arrowPol = document.getElementById("arrow-pol")

let shouldStop = false;

var svgContainer1 = document.getElementById("svg-container-1");
var svgElements1 = document.querySelectorAll(".arrow-1");

var animationTimeouts = [];

const  audio = document.getElementById("audio")



function displayArrows() {
        svgElements1.forEach(function (element) {
            element.style.animation = "arrowAnimation 1s infinite";       
    });
    
}
function stopAnimation() {
        svgElements1.forEach(function (element) {
            element.setAttribute("opacity","0")
            element.style.animation = "none";
        });
}

//Power Button
function power(){
    if(count==0){
        enableButton.style.backgroundColor = "#4cae4c"
        document.getElementById("steps").innerHTML = "Please wait until the water reaches the Flow Rate Valve."
        enableButton.textContent = "POWER OFF"
        count=1

        // audio.play()
        stopWaterFlow2=false
        stopWaterFlow3=false
        stopWaterFlow4=false
        stopWaterFlow5=false
        stopValvePositioning = false
        stopWaterFlow7=false
        stopWaterFlow7_6=false
        stopWaterFlow10 = false
        stopWaterFlow9 = false
        stopWaterFlow12 = false
        stopWaterFlow13 = false
        shouldStop=false

        waterFlow1()

    }else{
        enableButton.style.backgroundColor = "#ca2222"
        document.getElementById("steps").innerHTML = "Turn Power On"
        enableButton.textContent = "POWER ON"
        count = 0
        audio.pause()
        audio.currentTime = 0;

        valvePositioning.disabled=true
        purzeButton.disabled=true
        stopWaterFlow2=true
        stopWaterFlow3=true
        stopWaterFlow4=true
        stopWaterFlow5=true
        stopWaterFlow7=true
        stopValvePositioning = true
        stopWaterFlow7_6 = true
        stopWaterFlow10 = true
        stopWaterFlow9 = true
        stopWaterFlow12 = true
        stopWaterFlow13 = true

        
        
        resetAll()
        
    }
}

//purze action
function resetAll(){
    valvePositioningText.textContent = '0'
    valvePositioning.value = 0

    w1.setAttribute("opacity","0")
    w2.setAttribute("width","0")
    w2.setAttribute("opacity","0")
    w3.setAttribute("opacity","0")
    w4.setAttribute("width","0")
    w4.setAttribute("opacity","0")

    clearTimeout(timeoutId4)
    valvePositioning.disabled = true

    w5.setAttribute("opacity", "0")
    clearTimeout(timeoutId5)
    w6.style.opacity=0
    w7.setAttribute("height","0")
    w8.setAttribute("opacity", "0")
    w10.setAttribute("height","0")
    w9.setAttribute("opacity", "0")
    
    w11.setAttribute("width","0")
    w11.setAttribute("opacity","0")
    w12.setAttribute("height","0")

    purzeButton.disabled= true;

    stopAnimation()

    arrowRect.setAttribute("y","585.8")
    arrowPol.setAttribute("points","136.4,581.4 144.5,587.4 136.4,593.4 ")
    waterTankBack.setAttribute("points","238,516.2 580.8,516.2 580.8,516.2 238,516.2")
    waterTankFront.setAttribute("opacity","0")
    waterTankLeft.setAttribute("points","238,516.2 580.8,516.2 580.8,516.2 238,516.2")
    waterTankBase.setAttribute("opacity","0")

    manometerText.textContent = "0 mm Hg"

    shouldStop=true
    
    resetTimer()
    
    w13.setAttribute("width","0")
    w14.setAttribute("height","0")

}

valvePositioning.addEventListener("change", updateValvePositioning);

let isWaterFlow1Running = false;
let waterFlow1Timeout;

let stopWaterFlow2 = false; // Initialize a flag
let stopWaterFlow3 = false; // Initialize a flag
let stopWaterFlow4 = false; // Initialize a flag
let stopWaterFlow5 = false;
let stopValvePositioning = false;
let stopWaterFlow7_6 = false;
let stopWaterFlow7 = false;
let stopWaterFlow10 = false;
let stopWaterFlow9 = false;
let stopWaterFlow12 = false;
let stopWaterFlow13 = false;
let stopDisplayArrow = true;




function waterFlow1() {

    w1.setAttribute("opacity","1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "height");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "56.8");
    animateElement.setAttribute("dur", "3s");
    animateElement.setAttribute("begin", "0s");
    animateElement.setAttribute("fill","freeze");
    animateElement.setAttribute("values", "0;56.8");
    animateElement.setAttribute("keyTimes", "0;1");

    w1.appendChild(animateElement)

    if(count==0){
        w1.setAttribute("opacity","0")
        animateElement.endElement()
        w1.remove(animateElement)
    }else{
        animateElement.beginElement();
        setTimeout(function() {
            if(!stopWaterFlow2){
                waterFlow2()
            }
          }, 2500);
    }

    

}



function waterFlow2(){
    w2.setAttribute("opacity","1")
    var currentwidth = parseFloat(w2.getAttribute("width"))
    if (currentwidth < 56.8) {
        currentwidth += 3;
        w2.setAttribute("width", currentwidth);
        if(!stopWaterFlow3){
            setTimeout(waterFlow2, 100); 
            if(currentwidth == 54){
                waterFlow3()
            }
        }
    }
}

function waterFlow3(){    
    w3.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "height");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "263.4");
    animateElement.setAttribute("dur", "3s");
    animateElement.setAttribute("begin", "0s");
    animateElement.setAttribute("fill","freeze");

    w3.appendChild(animateElement)

    if(count==0){
        w3.setAttribute("opacity","0")
        animateElement.endElement()
        w3.remove(animateElement)
    }else{
        animateElement.beginElement();
        setTimeout(function() {
            if(!stopWaterFlow4){
                waterFlow4()
            }
          }, 3000);
    }

}

let timeoutId4;

function waterFlow4(){


    w4.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "width");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "56.8");
    animateElement.setAttribute("dur", "1.5s");
    animateElement.setAttribute("fill","freeze");

    w4.appendChild(animateElement)

    const animateX = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateX.setAttribute("attributeName", "x");
    animateX.setAttribute("from", "995");
    animateX.setAttribute("to", "938.2");
    animateX.setAttribute("dur", "1.5s");
    animateX.setAttribute("fill","freeze");

    w4.appendChild(animateX)

    

    

    if(count==0){
        w4.setAttribute("opacity","0")
        animateElement.endElement()
        animateX.endElement()
        w4.remove(animateElement)
        w4.remove(animateElement)
    }else{
        animateElement.beginElement();
        animateX.beginElement();
        if(!stopValvePositioning){
            timeoutId4 = setTimeout(function() {
                document.getElementById("steps").innerHTML = "Choose a value on the valve positioning slider to regulate the water flow."
                valvePositioning.disabled = false
            }, 1500);
        }else{
            clearTimeout(timeoutId4)
        }
    }
    
}

let timeoutId5;

function waterFlow5(){

    w5.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "width");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "80.5");
    animateElement.setAttribute("dur", "2.5s");
    animateElement.setAttribute("fill","freeze");

    w5.appendChild(animateElement)

    const animateX = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateX.setAttribute("attributeName", "x");
    animateX.setAttribute("from", "915");
    animateX.setAttribute("to", "824.5");
    animateX.setAttribute("dur", "2.5s");
    animateX.setAttribute("fill","freeze");

    w5.appendChild(animateX)

    if(count==0){
        w5.setAttribute("opacity","0")
        animateElement.endElement()
        animateX.endElement()
        w5.remove(animateElement)
        w5.remove(animateElement)
    }else{
        animateElement.beginElement();
        animateX.beginElement();
        
        setTimeout(function() {
            if(!stopWaterFlow7_6){
                waterFlow7()
                waterFlow6()
            }
        }, 2500);

    }
}


function waterFlow7(){
    //manometer water right
    var currentHeight = parseFloat(w7.getAttribute("height"))
    if (currentHeight < 120) {
        currentHeight += 3;
        w7.setAttribute("height", currentHeight);
        if(!stopWaterFlow7){ 
            setTimeout(waterFlow7, 100); 
            if(currentHeight > 100){
                var increament = 38.2
                var currentHeight_m = 32.2
                const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
                animateElement.setAttribute("attributeName", "height");
                animateElement.setAttribute("from", currentHeight_m);
                animateElement.setAttribute("to", increament);
                animateElement.setAttribute("dur", ".5s");
                animateElement.setAttribute("begin", "0s");
                animateElement.setAttribute("fill","freeze");
    
                currentHeight = increament
                increament += 6
    
                ml.appendChild(animateElement)
    
                animateElement.beginElement();
            }
        }
    }

    
}

let isWaterFlow6Running = false;

function waterFlow6(){

    w6.style.opacity=1



    w8.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "width");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "26.3");
    animateElement.setAttribute("dur", "4s");
    animateElement.setAttribute("fill","freeze");

    w8.appendChild(animateElement)

    const animateX = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateX.setAttribute("attributeName", "x");
    animateX.setAttribute("from", "745.5");
    animateX.setAttribute("to", "719.2");
    animateX.setAttribute("dur", "4s");
    animateX.setAttribute("fill","freeze");

    w8.appendChild(animateX)

    

    if(count==0){
        animateElement.endElement()
        animateX.endElement()
        w8.remove(animateElement)
        w8.remove(animateX)
    }else{
        animateElement.beginElement();
        animateX.beginElement();
        setTimeout(function() {
            if(!stopWaterFlow9){
                waterFlow10()
            }
          }, 2000);
        setTimeout(function() {
            if(!stopWaterFlow9){
                w9.setAttribute("opacity", "1")
                waterFlow11()
            }
        }, 4000);
    }
}


//manometer left water
function waterFlow10(){
    var currentHeight = parseFloat(w10.getAttribute("height"))
    if (currentHeight < 97) {
        currentHeight += 3;
        w10.setAttribute("height", currentHeight);
        if(!stopWaterFlow10){
            setTimeout(waterFlow10, 100); 
        }else{
            w10.setAttribute("height","0")
        }
    }
}


function waterFlow11(){
    w11.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "width");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "339.2");
    animateElement.setAttribute("dur", "5s");
    animateElement.setAttribute("fill","freeze");

    w11.appendChild(animateElement)

    const animateX = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateX.setAttribute("attributeName", "x");
    animateX.setAttribute("from", "621.1");
    animateX.setAttribute("to", "281.9");
    animateX.setAttribute("dur", "5s");
    animateX.setAttribute("fill","freeze");

    w11.appendChild(animateX)

    if(count==0){
        animateElement.endElement()
        animateX.endElement()
        w11.remove(animateElement)
        w11.remove(animateX)
    }else{
        animateElement.beginElement();
        animateX.beginElement();
        setTimeout(function(){
            if(!stopWaterFlow12){
                waterFlow12()
            }
          }, 5000);
    }
}


function waterFlow14(){
    var currentHeight = parseFloat(w14.getAttribute("height"))
    if(shouldStop){
        return;
    }else{
        if (currentHeight < 62.7) {
            currentHeight += 3;
            w14.setAttribute("height", currentHeight);
            setTimeout(waterFlow14, 100); 
        }
        setTimeout(function() {

            if(valvePositioning.value==1){
                manometerText.textContent = "37 mm Hg"
            }
            if(valvePositioning.value==2){
                manometerText.textContent = "50 mm Hg"
            }if(valvePositioning.value==3){
                manometerText.textContent = "72 mm Hg"
            }

            document.getElementById("steps").innerHTML = "Take note of the manometer reading, and then close the gate valve using the gate valve button."
            purzeButton.disabled = false;
            
        }, 1000);
    }
}




function waterFlow13(){
    w13.style.opacity="1"
    var currentwidth = parseFloat(w13.getAttribute("width"))
    if(shouldStop){
        return;
    }else{
        if (currentwidth < 87.2) {
            currentwidth += 3;
            w13.setAttribute("width", currentwidth);
            setTimeout(waterFlow13, 100); 
        }
        setTimeout(function() {
            waterFlow14()
          }, 500);
    }
    

    
    
}

function waterFlow12(){
    var currentHeight = parseFloat(w12.getAttribute("height"))
    
    if (currentHeight < 297.1) {
        currentHeight += 3;
        w12.setAttribute("height", currentHeight);
        if(!stopWaterFlow12){
            setTimeout(waterFlow12, 100); 
        }
    }
    setTimeout(function() {
        if(!stopWaterFlow13){
            waterTankBase.setAttribute("opacity","1")
            waterFlow13()
        }else{
            waterTankBase.setAttribute("opacity","0")
            w12.setAttribute("height","0")
        }
      }, 5000);
}







function fillTankFront(){

    waterTankFront.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "height");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "110");
    animateElement.setAttribute("dur","4s")

    animateElement.setAttribute("begin", "0s");
    animateElement.setAttribute("fill","freeze");

    waterTankFront.appendChild(animateElement)

    animateElement.beginElement();


    setTimeout(function() {

        document.getElementById("steps").innerHTML = "Take note of the current time on the timer, and then readjust the gate valve value using the slider for additional readings. Finally, use the provided data to calculate Qact and Qth."
        purzeButton.disabled = false;

      }, 1000);

    setTimeout(function(){
        valvePositioning.disabled= false
    }, 4000)

}   
        
function waterTankBackFlow(y){
    if (y > 407.1) {
        y -= 1;

        // Use template literals to update the points attribute
        waterTankBack.setAttribute("points", `238,${y} 580.8,${y} 580.8,516.2 238,516.2`);
        
        setTimeout(() => waterTankBackFlow(y), 32.9);
    }
}

function waterTankSideFlow(y1,y2){

    if (y1 > 476.7 ) {
        y1 -= 1;
        y2-=1;
        // Use template literals to update the points attribute
        waterTankLeft.setAttribute("points", `238.1,516.1 180.1,586.7 180.1,${y1} 237.7,${y2}`);
        
        setTimeout(() => waterTankSideFlow(y1, y2), 32.9);
    }

}
    


let [milliseconds,seconds] = [0,0];
let int = null;
let timerRunning = true;

function timer(targetsec,targetms){

    if(int!==null){
        clearInterval(int);
    }
    console.log("Timer started with targetsec:", targetsec, "and targetms:", targetms); // Add this line for debugging

    int = setInterval(function() {
        displayTimer(targetsec, targetms); 
    }, 10);
}


function displayTimer(targetsec,targetms){


    if(valvePositioning.value==1){
        if(timerRunning){
            milliseconds+=(11.428571428571429 * 8.75);
            if(milliseconds == (1000)){
                milliseconds = 0;
                seconds++;
                if(seconds == 60){
                    seconds = 0;
                }
            }
        }
        let s = seconds < 10 ? "0" + seconds : seconds;
        let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds < 100 ? "" + milliseconds : milliseconds;
        ms=ms/10
        timerSec.textContent = s;
        timerMS.textContent = ms;
    }

    if(valvePositioning.value==2){
        if(timerRunning){
            milliseconds+=(35*(5/27));
            if(milliseconds >= (100)){
                milliseconds -= 100;
                seconds++;
                if(seconds == 60){
                    seconds = 0;
                }
            }
        }
        let s = seconds < 10 ? "0" + seconds : seconds;
        let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds < 100 ? "" + milliseconds : milliseconds;
        ms=parseInt(ms)
        timerSec.textContent = s;
        timerMS.textContent = ms;
    }

    if(valvePositioning.value==3){
        if(timerRunning){
            milliseconds+=(30*(5/24));
            if(milliseconds >= (100)){
                milliseconds -= 100;
                seconds++;
                if(seconds == 60){
                    seconds = 0;
                }
            }
        }
        let s = seconds < 10 ? "0" + seconds : seconds;
        let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds < 100 ? "" + milliseconds : milliseconds;
        ms=parseInt(ms)
        timerSec.textContent = s;
        timerMS.textContent = ms;
    }


    if(seconds==targetsec ){
        timerRunning = false;
        clearInterval(int);
        timerMS.textContent = targetms;
    }

    
}

function resetTimer() {
    clearInterval(int); 
    [milliseconds, seconds] = [0, 0]; 
    timerRunning = true; 
    timerSec.textContent = "00"; 
    timerMS.textContent = "00";
}

function purzeAction(){

    shouldStop=true
    
    w13.setAttribute("width","0")
    w14.setAttribute("height","0")
   
    console.log("Value:", valvePositioning.value);

    if(valvePositioning.value==1){
        timer(35,"00")
    }
    if(valvePositioning.value==2){
        timer(27,74)

    }if(valvePositioning.value==3){
        timer(24,"00")
    }

    valvePositioning.disabled= false
    fillTankFront()
    waterTankBackFlow(516.2)
    waterTankSideFlow(586.7,516.1)
    arrowMovement()
    arrowMovement2(581.4, 587.4, 593.4 )
}


function updateValvePositioning() {



    // stopAnimations()
    shouldStop=false
    displayArrows()
    reset()
    resetTimer()



    var selectedValue = valvePositioning.value;
    if(selectedValue == 0){
        document.getElementById("steps").innerHTML = "Select the value of Valve Positioning greater than 0!"
        w5.setAttribute("opacity","0")
    }else{
        waterFlow5() 
        valvePositioning.disabled = true;
    }
    
    valvePositioningText.textContent = selectedValue;
}

function reset(){
    w6.style.opacity="0"
    w9.setAttribute("opacity","0")
    w8.setAttribute("opacity","0")

    w7.setAttribute("height","0")
    w10.setAttribute("height","0")
    w11.setAttribute("opacity","0")
    w12.setAttribute("height","0")
    
    arrowRect.setAttribute("y","585.8")
    arrowPol.setAttribute("points","136.4,581.4 144.5,587.4 136.4,593.4 ")
    waterTankBack.setAttribute("points","238,516.2 580.8,516.2 580.8,516.2 238,516.2")
    waterTankFront.setAttribute("opacity","0")
    waterTankLeft.setAttribute("points","238,516.2 580.8,516.2 580.8,516.2 238,516.2")
    waterTankBase.setAttribute("opacity","0")

    manometerText.textContent = "0 mm Hg"
}


function arrowMovement(){
    var currentY = parseFloat(arrowRect.getAttribute("y"))
    if (currentY > 475.8) {
        currentY -= 1;
        arrowRect.setAttribute("y", currentY);
    
        setTimeout(arrowMovement, 32.9); 
    }
}

function arrowMovement2(y1,y2,y3){

    if (y1 > 471.74) {
        y1 -= 1;
        y2-=1;
        y3-=1;
        arrowPol.setAttribute("points", `136.4,${y1} 144.5,${y2} 136.4,${y3} `);
        setTimeout(() => arrowMovement2(y1,y2,y3), 32.9);
    }

}