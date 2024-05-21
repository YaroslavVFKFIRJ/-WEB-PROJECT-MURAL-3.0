let arr = [];
arr[0] = document.querySelector('.g1');
arr[1] = document.querySelector('.g2');
arr[2] = document.querySelector('.g3');
arr[3] = document.querySelector('.g4');
arr[4] = document.querySelector('.g5');
arr[5] = document.querySelector('.g6');
arr.forEach(el =>
    el.onclick = () => {
        for (let i = 0; i <= arr.length; i++) {
            arr[i].classList.remove('down');
            arr[i].classList.remove('up');
            arr[i].classList.remove('anim');
            if (arr[i] == el) {
                arr[i].classList.add('up')
                arr[i].classList.add('anim')
            }
            else {
                arr[i].classList.add('down')
            }
        }
    }
)
