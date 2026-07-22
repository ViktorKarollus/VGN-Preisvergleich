import { DTICKET,TARIFSTUFEN,LEISTUNGSPREIS } from "./constants.js";
import {calcDT,calcEinzelundTag,calcEGON} from "./calc.js";
let einzelArray=[];
let tagArray=[];
let DTArray=[];
let EgonArray=[];
let myChart;
function rechnen(){
einzelArray=[];
 tagArray=[];
 DTArray=[];
 EgonArray=[];
calcEinzelundTag(einzelArray,tagArray);
calcDT(DTArray);
calcEGON(EgonArray);
showdig();
}
window.rechnen = rechnen;



function showdig(){
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
                    borderColor: "blue",
                    fill: false
                },
                {
                    label: "Tagesticket",
                    data: tagArray,
                    borderColor: "green",
                    fill: false
                },
				{
                    label: "Egon",
                    data: EgonArray,
                    borderColor: "yellow",
                    fill: false
                },
                {
                    label: "Deutschlandticket",
                    data: DTArray,
                    borderColor: "red",
                    fill: false
                }
            ]
        }
    });	
	
}

