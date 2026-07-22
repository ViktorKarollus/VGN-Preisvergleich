import { DTICKET,TARIFSTUFEN,LEISTUNGSPREIS } from "./constants.js";
//Deutschlandticket Berechnen
export function calcDT(DTArray){
    for (let tag = 1; tag <= 31; tag++) {
    DTArray.push(DTICKET);
}
console.log("Deutschlandticket:")
console.log(DTArray);
}
//Einzelfahrt und Tagesticket berechnen
export function calcEinzelundTag(einzelArray,tagArray){
    let fahrten=document.getElementById("fahrten").value;
    let stufe=document.getElementById("stufe").value;
    let einzelTarif=TARIFSTUFEN[stufe].einzelnOnline;
    let tagTarif=TARIFSTUFEN[stufe].tag;
    let gesamtTarif=einzelTarif*fahrten;
    console.log("Tagestarif:");
    console.log(tagTarif);
    console.log("Einzelfahrt-Tarif:");
    console.log(einzelTarif);
    console.log("Einzelfahrt-Tarif*Anzahl der Fahrten");
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
    console.log("Einzelfahrten:");
    console.log(einzelArray);
console.log("Tagesticket:");
    console.log(tagArray);
}
// Egon Berechnen
export function calcEGON(EgonArray){
let strecke=document.getElementById("strecke").value;
let fahrten=document.getElementById("fahrten").value;
let sonderfall=document.getElementById("egonsonder").value==="true";
let TagesgrundPreis=1.5;
let distanz=fahrten*strecke;
if(distanz>=2&&sonderfall){
TagesgrundPreis=3.0;
}
console.log("EGON Berechnen:");
console.log("Tagesgrundpreis:");
console.log(TagesgrundPreis);
let sumPreisEgon=0;
const Fahrpreis=(((strecke*LEISTUNGSPREIS)*fahrten)+TagesgrundPreis);
console.log("Normaler Fahrpreis "+Fahrpreis);
    for (let tag = 1; tag <= 31; tag++) {
    let aktuellerFahrpreis=Fahrpreis;
    if(sumPreisEgon>=70){
    aktuellerFahrpreis=0;
    console.log("Fahrpreis mit Rabatt: "+aktuellerFahrpreis+" an tag "+tag);
    }else if(sumPreisEgon>=50){
    aktuellerFahrpreis*=0.25;
    console.log("Fahrpreis mit Rabatt: "+aktuellerFahrpreis+" an tag "+tag);
    }else if(sumPreisEgon>=18){
    aktuellerFahrpreis*=0.5;
    console.log("Fahrpreis mit Rabatt: "+aktuellerFahrpreis+" an tag "+tag);
    }else{
    console.log("Fahrpreis ohne Rabatt "+aktuellerFahrpreis+" an tag "+tag);
    }
    if(sumPreisEgon+aktuellerFahrpreis>70){
    sumPreisEgon=70;
    console.log("Aktueller Gesamtpreis: "+sumPreisEgon);
    }else{
    sumPreisEgon+=aktuellerFahrpreis;
    console.log("Aktueller Gesamtpreis: "+sumPreisEgon);
    }
    EgonArray.push(sumPreisEgon);
    }
    console.log("EGON:");
    console.log(EgonArray);
}
