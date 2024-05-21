let arrname = [];
let arrhref = [];
let crossdate = document.querySelector('.crossdate0');
let image = document.querySelector('.image');
let mwind = document.querySelector('.mwind');
let blur = document.querySelector('.blur');
arrname[0] = document.querySelector('.life_bag');
arrname[1] = document.querySelector('.good_morning');
arrname[2] = document.querySelector('.we');
arrname[3] = document.querySelector('.fireman');
arrhref[0] = document.querySelector('.hr1');
arrhref[1] = document.querySelector('.hr2');
arrhref[2] = document.querySelector('.hr3');
arrhref[3] = document.querySelector('.hr4');
arrhref.forEach(el =>
    el.forEach(element=>{
        element.onclick = () => {
            mwind.classList.toggle('vis');
            blur.classList.toggle('vis');
            document.querySelector(".main-prev").classList.toggle('vis');
            document.querySelector(".main-next").classList.toggle('vis');
            document.querySelector(".main-indicators").classList.toggle('vis');
            image.classList.add(element.className);
            arrname[element.className.substring(2)].classList.toggle('vis');
            crossdate.onclick = () => {
            mwind.classList.remove('vis');
            blur.classList.remove('vis');
            document.querySelector(".main-prev").classList.remove('vis');
            document.querySelector(".main-next").classList.remove('vis');
            document.querySelector(".main-indicators").classList.toggle('vis');
            image.classList.remove(element.classList);
            arrname[element.className.substring(2)].classList.remove('vis')
    }
    }
    }));
