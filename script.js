const bodySelector = document.querySelector('body');
const ul = document.querySelector('ul');
const hamburger = document.querySelector('.menubar');
const closeBtn = document.querySelector('.close');
const menuBtn = document.querySelector('.menu')

hamburger.addEventListener('click', function () {
    bodySelector.classList.toggle('changeBgColor');
    ul.classList.toggle('showTheNav');
    closeBtn.classList.toggle('menushow');
    menuBtn.classList.toggle('menushow');
});