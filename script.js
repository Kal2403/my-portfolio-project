const nav = document.querySelector('.nav');
const open = document.querySelector('#open');
const close = document.querySelectorAll('.btn-close');

open.addEventListener('click', () => {
  nav.classList.add('visible');
});

close.forEach((element) => {
  element.addEventListener('click', () => {
    nav.classList.remove('visible');
  });
});