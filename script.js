import { DTICKET,TARIFSTUFEN,LEISTUNGSPREIS } from "./constants.js";
import {calcDT,calcEinzelundTag,calcEGON,calcMitnahmeEgon} from "./calc.js";
let einzelArray=[];
let tagArray=[];
let DTArray=[];
let EgonArray=[];
let myChart;
let checkbox=document.getElementById("Mitnahme");
checkbox.addEventListener("change", ()=>{
if(checkbox.checked){
document.getElementById("additionalFields").style.display = "block"; 
}else{
document.getElementById("additionalFields").style.display = "none"; 
}});
function rechnen(){
einzelArray=[];
 tagArray=[];
 DTArray=[];
 EgonArray=[];
calcEinzelundTag(einzelArray,tagArray);
calcDT(DTArray);
calcEGON(EgonArray);
calcMitnahmeEgon();
showdig();
document.getElementById("chart").scrollIntoView({
behavior: "smooth"
});
}
window.rechnen = rechnen;



function showdig(){
    document.getElementById("chartCard").style.display = "block";
	 if (myChart) {
        myChart.destroy();
    }
myChart=new Chart(document.getElementById("chart"), {
        type: "line",

        data: {
            labels: [...Array(31).keys()].map(i => i + 1),

            datasets: [
                {
                    label: "Einzeltickets",
                    data: einzelArray,
                    borderColor: "#0A6ED1",
                    borderWidth: 3,
                    tension: 0.3,
                    fill: false
                },
                {
                    label: "Tagesticket",
                    data: tagArray,
                    borderColor: "#28A745",
                    borderWidth: 3,
                    tension: 0.3,
                    fill: false
                },
				{
                    label: "Egon",
                    data: EgonArray,
                    borderColor: "#D71920",
                    borderWidth: 3,
                    tension: 0.3,
                    fill: false
                },
                {
                    label: "Deutschlandticket",
                    data: DTArray,
                    borderColor: "#555555",
                    borderWidth: 3,
                    tension: 0.3,
                    fill: false
                }
            ]
        }
    });	
	
}

