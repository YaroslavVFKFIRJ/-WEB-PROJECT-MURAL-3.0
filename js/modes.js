"use strict";
function shutter_mode () {
    document.querySelector("#scroll-main").style.display="none";
    document.querySelector("#shutter-main").style.display="flex";
    localStorage.setItem('MODE', "shutter");
}
function scrolling_mode () {
    document.querySelector("#shutter-main").style.display="none";
    document.querySelector("#scroll-main").style.display="block";
    localStorage.setItem('MODE', "scroll");
}
if($("html").width()<=700){
    document.querySelector("#scroll-main").style.display="block";
    document.querySelector("#shutter-main").style.display="none";
}
else {
    let startMode=localStorage.getItem('MODE');
    console.log(startMode);
    let Mode;
    if(!startMode) {
    shutter_mode();
}
    else {
        if(startMode==="scroll") {
            scrolling_mode();
        }
    else shutter_mode();
};
}   
document.querySelector("#shutter").onclick=()=> {
    console.log("lol1");
    if(document.querySelector("#shutter-main").style.display==="none") {
     shutter_mode();
    }
}
document.querySelector("#scrolling").onclick=()=> {
    console.log("lol2");
    if(document.querySelector("#scroll-main").style.display==="none") {
        scrolling_mode();
    }
}