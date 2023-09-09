
var enableButton = document.getElementById("enable");
var valvePositioning = document.getElementsByClassName("flow-rate-slider");
var svg = document.getElementById("Layer_1")
var valvePositioningText = document.getElementById("valve-positioning-text")


var count = 0;

function power(){
    if(count==0){
        enableButton.style.backgroundColor = "#4cae4c"
        document.getElementById("steps").innerHTML = "Step2: Select Valve Positioning"
        count=1
    }else{
        enableButton.style.backgroundColor = "#ca2222"
        document.getElementById("steps").innerHTML = "Step1: Turn Power On"
        count = 0
    }
}

updateValvePositioning();
console.log(valvePositioning)

function updateValvePositioning() {
    var selectedValue = valvePositioning.value;
    console.log("test")
    console.log(selectedValue)
    // Change the text content of the valvePositioningText element
    valvePositioningText.textContent = selectedValue;
}


valvePositioning.addEventListener("change", updateValvePositioning);



// function showTube(){
//     if(count==1){
//         //code svg image of tube here
//         chokeImg.src = "./images/inductor.svg"
//         chokeImg.onload = function(){ 
//             ctx.drawImage(chokeImg,50,50,50,50) 
//         }
//         //
//         document.getElementById("steps").innerHTML="Instructions : Click on Starter Button"
//         starterButton.disabled=false;
//         count+=1
//     }
// }

// function showStarter(){
//     if(count==2){
//         //code svg image of starter here

//         //
//         document.getElementById("steps").innerHTML="Instructions : Click on Choke Button"
//         chokeButton.disabled=false;
//         count+=1
//     }
// }

// function showChoke(){
//     if(count==3){
//         //code svg image of chock here

//         //
//         document.getElementById("steps").innerHTML="Instructions : Click on Ammeter Button"
//         ammeterButton.disabled=false;
//         count+=1
//     }
// }

// function showAmmeter(){
//     if(count==4){
//         //code svg image of ammeter here

//         //
//         document.getElementById("steps").innerHTML="Instructions : Click on Voltmeter Button"
//         voltmeterButton.disabled=false;
//         count+=1
//     }
// }

// function showVoltmeter(){
//     if(count==5){
//         //code svg image of voltmeter here

//         //
//         document.getElementById("steps").innerHTML="Instructions : Click on Wattmeter Button"
//         wattmeterButton.disabled=false;
//         count+=1
//     }
// }

// function showWattmeter(){
//     if(count==6){
//         //code svg image of wattmeter here

//         //
//         document.getElementById("steps").innerHTML="Instructions : Click on 1-phase supply Button"
//         supplyButton.disabled=false;
//         count+=1
//     }
// }

// function showSupply(){
//     if(count==7){
//         //code svg image of supply here
        
//         //
//         document.getElementById("steps").innerHTML="Instructions : Click on Connect Button to connect all apparatus"
//         connectButton.disabled=false;
//         count+=1
//     }
// }

// function showWires(){
//     if(count==8){
//         //code svg image of wires here

//         //
//         factorButton1.disabled=false;
//         factorButton2.disabled=false;
//         document.getElementById("steps").innerHTML="Instructions : Select Wattmeter Multiplying Factor"
//         document.getElementById("readings").innerHTML="Voltmeter : 220V    Ammeter : 0.3A"
//         connectButton.disabled=false;
//         count+=1
//     }
// }

