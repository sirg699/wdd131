const yearSpan = document.getElementById("currentyear");
yearSpan.textContent = new Date().getFullYear();

document.getElementById("lastModified").innerHTML = "Last Modified: " + document.lastModified;

const menuBtn = document.querySelector('#menuBtn');
const navList = document.querySelector('#navList');

menuBtn.addEventListener('click', () => {
  navList.classList.toggle('open');

  if (navList.classList.contains('open')) {
    menuBtn.textContent = 'X';
  } else {
    menuBtn.textContent = '☰';
  }
});