let stars = document.getElementById('stars1');
let moon = document.getElementById('moon2');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river5');
let boat = document.getElementById('boat6');
let mountains7 = document.getElementById('mountains7');
let nouvil = document.querySelector('.nouvil');

window.onscroll = function() {
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value * 3 + 'px';
    nouvil.style.fontSize = value + 'px';
    if (scrollY >= 67) {
        nouvil.style.fontSize = 67 + 'px';
        nouvil.style.position = 'fixed';
        if (scrollY >= 600) {
            nouvil.style.display = 'none';
        }
        else {
            nouvil.style.display = 'block';
        }
        if (scrollY >= 156) {
            document.querySelector('.main').style.background = 'linear-gradient(#376281,#273746)';
        }
        else {
            document.querySelector('.main').style.background = 'linear-gradient(#581845,#273746)';
        }
    }




}