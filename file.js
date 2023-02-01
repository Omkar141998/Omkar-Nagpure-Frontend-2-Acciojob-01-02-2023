img1 = document.getElementById('image-1');
img2 = document.getElementById('image-2');
img3 = document.getElementById('image-3');
img4 = document.getElementById('image4');

img1.style.pointerEvents = 'none';
img2.style.pointerEvents = 'none';
img3.style.pointerEvents = 'none';
const btn = document.getElementById('btn-2');
btn.style.pointerEvents = 'none';

let main = [];

function img1() {
  locald();
}

function img2() {
  const btn = document.querySelector('.image-form2');
  btn.style.display = 'flex';
  hostdP();
}

function hostdp() {
  const image1 = document.getElementById('head-1');
  image1.innerText = main[0].name;
  const image3 = document.getElementById('head-2');
  image3.innerText = main[0].username;
  img3.style.pointerEvents = 'auto';
  img2.style.pointerEvents = 'none';
}

function img3() {
  const name = document.querySelector('.image-formv');
  email.style.display = 'none';
  email.onlclick = 'none';
  const username = document.querySelector('.image-formv');
  username.style.display = 'flex';
}

function fact() {
  const btn2 = document.querySelector('.btn-2');
  btn2.style.display = 'flex';
}

function submit() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const username = document.getElementById('username').value;

  ValidateEmail(name, email, username);
}





