const root = document.querySelector('.about__images');
const el1 = document.querySelector('.layer1');
const el2 = document.querySelector('.layer2');

root.addEventListener('mousemove', (e) => {
  const width  = window.innerWidth || document.documentElement.clientWidth || 
document.body.clientWidth;
  const height = window.innerHeight|| document.documentElement.clientHeight|| 
document.body.clientHeight;
  const moveX = el1.offsetWidth * e.offsetX / width;
  const moveY = el2.offsetHeight * e.offsetY / height;
  el1.style.transform = `translate3d(${-moveX}px, ${-moveY}px, 0)`;
  el2.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
});

const menu = document.querySelector('.menu__box');
const sections = document.querySelectorAll('.section');
menu.addEventListener('click', (e) => {
  document.querySelector('.menu__active').classList.remove('menu__active');
  e.target.classList.add('menu__active');
  sections.forEach((section) => section.classList.add('hidden'));
  sections[e.target.id - 1].classList.remove('hidden');
});

const closeBtn = document.querySelector('.close-form');
closeBtn.addEventListener('click', (e) => {
  e.target.parentElement.classList.remove('show');
  document.querySelectorAll('.project-info').forEach((pr) => pr.classList.add('hide'));
});

const works = document.querySelector('.project-works');
works.addEventListener('click', (e) => {
  if (e.target.classList.contains('lightbox-image') || e.target.classList.contains('search')) {
    let id = 1;
    if (e.target.id) {
      id = e.target.id.split('-').pop();
    } else {
      id = e.target.parentElement.id.split('-').pop();
    }
    document.querySelector('.details').classList.add('show');
    document.querySelector(`#project-${id}`).classList.remove('hide');
  }
});