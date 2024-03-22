'use strict';
let arr1 = [];
arr1[0] = document.querySelector('.kozhar');
arr1[1] = document.querySelector('.borodyn');
arr1[2] = document.querySelector('.barikin');
arr1[3] = document.querySelector('.rokoss');
arr1[4] = document.querySelector('.mazur');
arr1[5] = document.querySelector('.golovach');
arr1[6] = document.querySelector('.shabun');
arr1[7] = document.querySelector('.skorina');
arr1[8] = document.querySelector('.zhizninniy');
arr1[9] = document.querySelector('.goodmorning');
arr1[10] = document.querySelector('.we');
arr1[11] = document.querySelector('.mchc');
let arr2 = [];
arr2[0] = document.querySelector('#path1');
arr2[1] = document.querySelector('#path2');
arr2[2] = document.querySelector('#path3');
arr2[3] = document.querySelector('#path4');
arr2[4] = document.querySelector('#path5');
arr2[5] = document.querySelector('#path6');
arr2[6] = document.querySelector('#path7');
arr2[7] = document.querySelector('#path8');
arr2[8] = document.querySelector('#path9');
arr2[9] = document.querySelector('#path9');
arr2[10] = document.querySelector('#path11');
arr2[11] = document.querySelector('#path12');
arr1.forEach(el =>
    el.onclick = () => {
        for (let i = 0; i <= arr2.length; i++) {
            if (el == arr1[i]) {
                arr2[i].classList.add('ani');
                setTimeout(() => { arr2[i].classList.remove('ani') }, 3000);
            }
        }
    })
