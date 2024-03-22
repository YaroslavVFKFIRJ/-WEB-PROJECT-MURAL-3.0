let themen = "";
let check = document.querySelector('.checkbox');
function Save(themen) {
    var Request = new XMLHttpRequest();
    Request.open("GET", "./index.php?theme=" + themen, true);
    Request.send();
}
function change_themes() {
    if (themen === "white") {
        document.documentElement.style.setProperty('--main-color1', '#F8F5F5');
        themen = "black";
        // return themen;
    }
    else {
        themen = "white";
        document.documentElement.style.setProperty('--main-color1', '#070a0a');
        // return themen;
    }
    Save(themen);
}
check.onclick = () => {
    change_themes();
}