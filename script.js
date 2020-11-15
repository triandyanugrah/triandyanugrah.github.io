document.getElementById('judul').setAttribute('class', 'makassarcoding');
const kotak = document.querySelector('#kotak');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');

// btn.onclick = function () {
//     kotak.style.backgroundColor = 'red';
// }

// bisa juga ditulis lain
btn1.onclick = ubahwarnamerah;
btn2.onclick = ubahwarnabiru;

function ubahwarnamerah() {
    kotak.style.backgroundColor = 'red';
}
function ubahwarnabiru() {
    kotak.style.backgroundColor = 'blue';
}