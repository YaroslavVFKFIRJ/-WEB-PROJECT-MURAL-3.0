"use strict";
let startMode=localStorage.getItem('MODE');
let Mode;
if(!startMode) 
    Mode="shutter"
else Mode=startMode;

document.querySelector("#shutter-main").onclick=()=> {
    if(document.querySelector("#shutter").style.display==="none") {
        document.querySelector("#scrolling").style.display="none";
        document.querySelector("#shutter").style.display="block";
        localStorage.setItem('MODE', Mode);
    }
}
document.querySelector("#scroll-main").onclick=()=> {
    if(document.querySelector("#scrolling").style.display==="none") {
        document.querySelector("#shutter").style.display="none";
        document.querySelector("#scrolling").style.display="block";
    }
}