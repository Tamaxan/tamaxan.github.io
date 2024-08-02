const start = performance.now();
function openSite() { 
  window.open("https://ru.kinorium.com/","_blank");
}
const kinorium = document.querySelector('#kinorium');
kinorium.addEventListener('click', openSite);

const buttonUp = {
  el: document.querySelector('.button-up'),
  show() {
    this.el.classList.remove('hidden');
  },
  hide() {
    this.el.classList.add('hidden');
  },
  addEventListener() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 200 ? this.show() : this.hide();
    });
      document.querySelector('.button-up').onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}
buttonUp.addEventListener();


const links = document.querySelectorAll('[data-toggle]');
links.forEach((link) => {
  link.addEventListener('click', () => {
    const nav = link.closest('.main-menu');
    const activeElement = nav.querySelector('.active');
    activeElement.classList.remove('active');
    link.classList.add('active');
    const tab = link.dataset.bsTarget;
    const tabContent = document.querySelector(tab);
    const contentBox = tabContent.closest('.tab-container');
    const activeTabs = contentBox.querySelector('.tab-content.active');
    activeTabs.classList.remove('active');
    tabContent.classList.add('active');
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  });
});

function checkTime(i) {
  if (i < 10) {i = `0${i}`}
  return i;
}
const displayCLock = () => {
  const today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  let date = today.getDate();
  const months = ['January','February','March','April','May.','June','July',' August','September','October','November','December']
  let month = today.getMonth();
  const currentMonth = months[month];
  let year = today.getFullYear();
  minute = checkTime(minute);
  second = checkTime(second);
  const days = ['Monday', 'Tuesday ', 'Wednesday', 'Thursday ', 'Friday', 'Saturday', 'Sunday' ];
  const cuttentDayIndex = today.getDay();
  const currentDay = days[cuttentDayIndex - 1];
  const siteTimeHover = document.getElementById('time-hover');
  const siteTime = document.getElementById('time');
  siteTime.textContent = `${hour} : ${minute}`;
  siteTimeHover.textContent = `${hour} : ${minute} : ${second}, ${currentDay}, ${date} ${currentMonth} ${year}`;
}

displayCLock();
setInterval(displayCLock, 10000);
document.getElementById('clock').addEventListener('mouseover', () => setInterval (displayCLock, 1000));



// document.querySelector(".anchor").addEventListener("click", function(event){
//   event.preventDefault();
 
//   let headerOffset = 50; // высота заголовка
//   let elementPosition = document.querySelector(".anchor").getBoundingClientRect().top;
//   let offsetPosition = elementPosition - headerOffset;
 
//   window.scrollTo({
//      top: offsetPosition,
//      behavior: "smooth"
//   });
// });

const end = performance.now();
console.log(end - start);