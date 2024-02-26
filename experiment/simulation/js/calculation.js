var h1 = document.getElementById("H1")
var h2 = document.getElementById("H2")
var h3 = document.getElementById("H3")

var t1 = document.getElementById("T1")
var t2 = document.getElementById("T2")
var t3 = document.getElementById("T3")

var H1 = document.getElementById("h1")
var H2 = document.getElementById("h2")
var H3 = document.getElementById("h3")

var qact1 = document.getElementById("Qact1")
var qact2 = document.getElementById("Qact2")
var qact3 = document.getElementById("Qact3")

var qt1 = document.getElementById("Qt1")
var qt2 = document.getElementById("Qt2")
var qt3 = document.getElementById("Qt3")

var cd1 = document.getElementById("Cd1")
var cd2 = document.getElementById("Cd2")
var cd3 = document.getElementById("Cd3")

var cdAvg = document.getElementById("avg-cd")

function calculate(){

    if(h1.querySelector("input").value=="" || h2.querySelector("input").value=="" || h3.querySelector("input").value=="" || H1.querySelector("input").value=="" || H2.querySelector("input").value=="" || H3.querySelector("input").value=="" || t1.querySelector("input").value=="" || t2.querySelector("input").value=="" || t3.querySelector("input").value=="" || qt1.querySelector("input").value=="" || qt2.querySelector("input").value=="" || qt3.querySelector("input").value=="" || qact1.querySelector("input").value=="" || qact2.querySelector("input").value=="" || qact3.querySelector("input").value=="" ){
        alert("Please Fill all input fields or Enter valid values in all input fields.");
    }else{
        cd1.querySelector("input").value = (qact1.querySelector("input").value/qt1.querySelector("input").value).toFixed(4)

        cd2.querySelector("input").value = (qact2.querySelector("input").value/qt2.querySelector("input").value).toFixed(4)
    
        cd3.querySelector("input").value = (qact3.querySelector("input").value/qt3.querySelector("input").value).toFixed(4)
    
        cdAvg.querySelector("input").value = (((qact1.querySelector("input").value/qt1.querySelector("input").value) + (qact2.querySelector("input").value/qt2.querySelector("input").value) + (qact3.querySelector("input").value/qt3.querySelector("input").value)) / 3).toFixed(4)
    
        document.querySelector("#check-button").disabled = false
    }

    
}


function checkYourResult() {

    let flag = true

    if(h1.querySelector("input").value!=37){
        h1.querySelector("input").style.color = "red"
        flag= false
    }

    if(h2.querySelector("input").value!=50){
        h2.querySelector("input").style.color = "red"
        flag= false
  
    }

    if(h3.querySelector("input").value!=72){
        h3.querySelector("input").style.color = "red"
        flag= false
        
    }

    if(t1.querySelector("input").value!=35){
        t1.querySelector("input").style.color = "red"
        flag= false
        
    }

    if(t2.querySelector("input").value!=27.74){
        t2.querySelector("input").style.color = "red"
        flag= false
    }


    if(t3.querySelector("input").value!=24){
        t3.querySelector("input").style.color = "red"
        flag= false
    }

    if(H1.querySelector("input").value!=37*12.6){
        H1.querySelector("input").style.color = "red"
        flag= false
    }else{
        H1.querySelector("input").style.color = "black"
    }

    if(H2.querySelector("input").value!=50*12.6){
        H2.querySelector("input").style.color = "red"
        flag= false
  
    }else{
        H2.querySelector("input").style.color = "black"
    }
    if(H3.querySelector("input").value!=72*12.6){
        H3.querySelector("input").style.color = "red"
        flag= false
    }else{
        H3.querySelector("input").style.color = "black"
    }

    if(qact1.querySelector("input").value> 3.249 && qact1.querySelector("input").value< 3.59){
        qact1.querySelector("input").style.color = "black"
        flag= true
    }else{
        qact1.querySelector("input").style.color = "red"
        flag= false
    }

    if(qact2.querySelector("input").value >4.104  && qact2.querySelector("input").value<4.536){
        qact2.querySelector("input").style.color = "black"
        flag= true
    }else{
        qact2.querySelector("input").style.color = "red"
        flag= false
    }
    
    if(qact3.querySelector("input").value > 4.75 && qact3.querySelector("input").value< 5.25){
        qact3.querySelector("input").style.color = "black"
        flag= true
    }else{
        qact3.querySelector("input").style.color = "red"
        flag= false
    }


    if(qt1.querySelector("input").value>3.65 && qt1.querySelector("input").value<3.99){
        qt1.querySelector("input").style.color = "black"
        flag= true
    }else{
        qt1.querySelector("input").style.color = "red"
        flag= false
    }

    if(qt2.querySelector("input").value>4.22 && qt2.querySelector("input").value<4.66){
        qt2.querySelector("input").style.color = "black"
        flag= true
    }else{
        qt2.querySelector("input").style.color = "red"
        flag= false
    }

    if(qt3.querySelector("input").value>5.073 && qt3.querySelector("input").value<5.607){
        qt3.querySelector("input").style.color = "black"
        flag= true
    }else{
        qt3.querySelector("input").style.color = "red"
        flag= false
    }


    if(cd1.querySelector("input").value>0.850 && cd1.querySelector("input").value<0.94){
        cd1.querySelector("input").style.color = "black"
        flag= true
    }else{
        cd1.querySelector("input").style.color = "red"
        flag= false
    }

    if(cd2.querySelector("input").value>0.924 && cd2.querySelector("input").value<1){
        cd2.querySelector("input").style.color = "black"
        flag= true
    }else{
        cd2.querySelector("input").style.color = "red"
        flag= false
    }

    if(cd3.querySelector("input").value>0.89 && cd3.querySelector("input").value<0.983){
        cd3.querySelector("input").style.color = "black"
        flag= true
    }else{
        cd3.querySelector("input").style.color = "red"
        flag= false
    }

    if(cdAvg.querySelector("input").value >0.90 && cdAvg.querySelector("input").value <0.99){
        console.log(cdAvg.querySelector("input"))
        cdAvg.querySelector("input").style.color = "black"
        if(flag){
            flag = true
        }
    }else{
        console.log(cdAvg.querySelector("input").value)
        cdAvg.querySelector("input").style.color = "red"
        flag= false
    }
    // }


    if(flag){
        
        for (let i = 0; i < 5; i++) {
            document.querySelector(".result-table").style.display = "none"
            confetti();
          }
        
        alert("Congratulations! You have successfully completed the experiment.");
    }else{
        document.querySelector(".result-table").style.display = "flex"
    }
}


function saveData() {
    var table = document.getElementById("table-data");
    var rows = table.getElementsByTagName("tr");
    var csvContent = [];

    for (var i = 0; i < rows.length; i++) {
        var row = [], cols = rows[i].querySelectorAll("td, th");

        for (var j = 0; j < cols.length; j++) {
            row.push(cols[j].innerText);
        }

        csvContent.push(row.join(","));
    }

    var csvString = csvContent.join("\n");
    var blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
    var link = document.createElement("a");

    if (link.download !== undefined) {
        var url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", "table.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

function exportToExcel() {
    var wb = XLSX.utils.book_new();

    /* Observation Table */
    var observationTable = document.querySelector('.observationTable');
    var observationSheetData = [];
    var observationRows = observationTable.querySelectorAll('tr');
    observationRows.forEach(function (row) {
        var rowData = [];
        row.querySelectorAll('th, td').forEach(function (cell) {
            if (cell.querySelector('input')) {
                rowData.push(cell.querySelector('input').value);
            } else {
                rowData.push(cell.textContent);
            }
        });
        observationSheetData.push(rowData);
    });
    var observationSheet = XLSX.utils.aoa_to_sheet(observationSheetData);
    XLSX.utils.book_append_sheet(wb, observationSheet, "Observation Table");

    

    /* Save workbook to file */
    XLSX.writeFile(wb, "table_data.xlsx");
}