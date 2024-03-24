'use strict';
document.querySelector(".burger-but").onclick=( )=> {
    background.classList.add("visback");
    document.querySelector(".burger-menu").classList.add("visback");

}
document.querySelector(".burger-close").onclick=( )=> {
    background.classList.remove("visback");
    document.querySelector(".burger-menu").classList.remove("visback");
}