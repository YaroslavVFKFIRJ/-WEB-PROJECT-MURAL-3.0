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
console.log(arrhref);
console.log(arrname);
arrhref.forEach(el =>
    el.onclick = () => {
        let classb = el.className;
        mwind.classList.toggle('vis');
        blur.classList.toggle('vis');
        image.classList.add(classb);
        for (let q = 0; q <= arrhref.length; q++) {
            if (el == arrhref[q]) arrname[q].classList.toggle('vis')
            else continue;
        }
        crossdate.onclick = () => {
            mwind.classList.remove('vis');
            blur.classList.remove('vis');
            image.classList.remove(classb);
            for (let q = 0; q <= arrhref.length; q++) {
                if (el == arrhref[q]) arrname[q].classList.remove('vis')
                else continue;
            }
        }
    }
);   
