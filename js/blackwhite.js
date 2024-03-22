function BlackTheme() {
  document.documentElement.style.setProperty("--main-color0", "#121212");
  document.documentElement.style.setProperty("--main-color1", "#121212");
  document.documentElement.style.setProperty("--main-color2", "#b0d9d9");
  document.documentElement.style.setProperty("--main-color3", "#121212");
  document.documentElement.style.setProperty("--main-color4", "#858a8a");
  document.documentElement.style.setProperty("--main-color5", "rgb(255 255 255 / 53%)");
  document.documentElement.style.setProperty("--main-color6", "#b0d9d9");
}
function WhiteTheme() {
  document.documentElement.style.setProperty("--main-color0", "#51737338");
  document.documentElement.style.setProperty("--main-color1", "#F8F5F5");
  document.documentElement.style.setProperty("--main-color2", "#4F2626");
  document.documentElement.style.setProperty("--main-color3", "#ffffff");
  document.documentElement.style.setProperty("--main-color4", "#7A7575");
  document.documentElement.style.setProperty("--main-color5", "#80808094");
  document.documentElement.style.setProperty("--main-color6", "white");
}
function CheckTheme() {
  if (theme == "white") {
    theme = "black";
    BlackTheme();
  }
  else {
    theme = "white";
    WhiteTheme();
  }
}
const CurrTheme = localStorage.getItem("theme");
const Checked = document.querySelector(".checkbox");
const Info = document.querySelector(".img0");
const Logo = document.querySelector(".logo");
const Brush = document.querySelectorAll(".brush_img");
const Nav = document.querySelectorAll(".but-nav");
let BrushWindow1 = document.querySelector(".wind_author");
let theme = CurrTheme;
if (!CurrTheme) {
  theme = "white"
}
console.log(theme);
if (CurrTheme == "black") {
  $('.checkbox').attr("checked", "checked");
  Info.classList.add("black");
  Logo.classList.add("black");
  Brush.forEach(el => { el.classList.add("black") });
  Nav.forEach(el => { el.classList.add("black") });
  BrushWindow1.classList.add("black");
  BlackTheme();
}
else {
  $('.checkbox').removeAttr("checked");
  Info.classList.remove("black");
  Logo.classList.remove("black");
  Brush.forEach(el => { el.classList.remove("black") });
  Nav.forEach(el => { el.classList.remove("black") });
  BrushWindow1.classList.remove("black");
  WhiteTheme();
}
Checked.onclick = () => {
  CheckTheme();
  Info.classList.toggle('black');
  Logo.classList.toggle("black");
  Brush.forEach(el => { el.classList.toggle("black") });
  Nav.forEach(el => { el.classList.toggle("black") });
  BrushWindow1.classList.toggle("black");
  localStorage.setItem("theme", theme);
  console.log(theme);
}
