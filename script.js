const TARIFSTUFEN = {
    "A": { einzelnOnline: 3.65, tag: 10.60 },
    "B": { einzelnOnline: 2.91, tag: 7.10 },
    "C": { einzelnOnline: 2.65, tag: 6.20 },
    "D": { einzelnOnline: 2.27, tag: 5.60 },
    "E": { einzelnOnline: 1.87, tag: 4.50 },
    "F": { einzelnOnline: 1.51, tag: 3.70 },

    "1":   { einzelnOnline: 2.21, tag: 5.60 },
    "2":   { einzelnOnline: 3.06, tag: 7.20 },
    "2+T": { einzelnOnline: 4.46, tag: 16.70 },
    "3":   { einzelnOnline: 4.46, tag: 16.70 },
    "3+T": { einzelnOnline: 6.04, tag: 16.70 },
    "4":   { einzelnOnline: 6.04, tag: 16.70 },
    "4+T": { einzelnOnline: 6.04, tag: 16.70 },
    "5":   { einzelnOnline: 7.44, tag: 21.90 },
    "5+T": { einzelnOnline: 7.44, tag: 21.90 },
    "6":   { einzelnOnline: 9.02, tag: 21.90 },
    "6+T": { einzelnOnline: 9.02, tag: 21.90 },
    "7":   { einzelnOnline: 10.50, tag: 21.90 },
    "7+T": { einzelnOnline: 10.50, tag: 21.90 },
    "8":   { einzelnOnline: 11.99, tag: 26.50 },
    "8+T": { einzelnOnline: 11.99, tag: 26.50 },
    "9":   { einzelnOnline: 13.48, tag: 26.50 },
    "9+T": { einzelnOnline: 13.48, tag: 26.50 },
    "10":  { einzelnOnline: 14.88, tag: 26.50 },
    "10+T":{ einzelnOnline: 14.88, tag: 26.50 }
};

const DTICKET=63.0;
let einzelArray=[];
let tagArray=[];
let DTArray=[];
let EgonArray=[];
let myChart;
const LEISTUNGSPREIS=0.3;

function rechnen(){
	 einzelArray=[];
 tagArray=[];
 DTArray=[];
 EgonArray=[];
calcEinzelundTag();
calcDT();
calcEGON();
showdig();
}




function calcDT(){
	for (let tag = 1; tag <= 31; tag++) {
	DTArray.push(DTICKET);
}
console.log(DTArray);
}

function calcEinzelundTag(){
		let fahrten=document.getElementById("fahrten").value;
	let stufe=document.getElementById("stufe").value;
	let einzelTarif=TARIFSTUFEN[stufe].einzelnOnline;
	let tagTarif=TARIFSTUFEN[stufe].tag;
	let gesamtTarif=einzelTarif*fahrten;
	console.log("einzel");
	console.log(einzelTarif);
	console.log("tag");
	console.log(tagTarif);
	console.log("gesamt");
	console.log(gesamtTarif);
	
	let sumeinzel=0;
	let sumtag=0;
	for (let tag = 1; tag <= 31; tag++) {
	let preisEinzel = gesamtTarif;
    let preisTag = tagTarif;
sumeinzel+=preisEinzel;
sumtag+=preisTag;
einzelArray.push(sumeinzel);
tagArray.push(sumtag);
	}
console.log("tagalle");
	console.log(tagArray);
	console.log("gesamt");
	console.log(einzelArray);
}
function calcEGON(){
let strecke=document.getElementById("strecke").value;
let fahrten=document.getElementById("fahrten").value;
let sonderfall=document.getElementById("egonsonder").value==="true";
let TagesgrundPreis=1.5;
let distanz=fahrten*strecke;
if(distanz>=2&&sonderfall){
TagesgrundPreis=3.0;
}
let sumPreisEgon=0;
const Fahrpreis=(((strecke*LEISTUNGSPREIS)*fahrten)+TagesgrundPreis);
	for (let tag = 1; tag <= 31; tag++) {
	let aktuellerFahrpreis=Fahrpreis;
	if(sumPreisEgon>=70){
	aktuellerFahrpreis=0;
	}else if(sumPreisEgon>=50){
	aktuellerFahrpreis*=0.25;
	}else if(sumPreisEgon>=18){
	aktuellerFahrpreis*=0.5;
	}
	if(sumPreisEgon+aktuellerFahrpreis>70){
	sumPreisEgon=70;
	}else{
	sumPreisEgon+=aktuellerFahrpreis;
	}
	EgonArray.push(sumPreisEgon);
	}
	console.log(EgonArray);
}


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

