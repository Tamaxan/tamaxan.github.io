'use strict';

const myS = document.getElementById("myscript");
const myS1 = document.getElementById("myscript1");
const myS2 = document.getElementById("myscript2");
function changeAllParagraph() {
myS.innerHTML = "Paragraph hid.";
myS1.innerHTML = "Text hid.";
myS2.innerHTML = "Paragraph hid.";
}
const changeAllParagraphElem = document.querySelector('#changeallparagraph');
changeAllParagraphElem.addEventListener('click', changeAllParagraph)

const myS3 = () => alert('Hello World!!!');
const myS3Elem = document.querySelector('#mys3');
myS3Elem.addEventListener('click', myS3)


// простейшая анимация:
function myMove() {
    let id = null;
    const elem = document.getElementById("animate");
    let pos = 10;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
    if (pos == 106) {
        clearInterval(id);
    } else {
        pos++;
        elem.style.top = pos + "px";
        elem.style.left = pos + "px";
    }
    }
}
const myMoveElem = document.querySelector('#mymove');
myMoveElem.addEventListener('click', myMove, false);

let timerId;
function update() {
    let clock = document.getElementById('clock');
    let date = new Date();
    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    clock.children[0].innerHTML = hours;
    let minutes = date.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;
    clock.children[1].innerHTML = minutes;
    let seconds = date.getSeconds();
    if (seconds < 10) seconds = '0' + seconds;
    clock.children[2].innerHTML = seconds;
}
function startTime()
{
const today=new Date();
let h=today.getHours();
let m=today.getMinutes();
let s=today.getSeconds();
m=checkTime(m);
s=checkTime(s);
document.getElementById('showtime').innerHTML=h+":"+m+":"+s;
//let  t = setTimeout('startTime()',500);
}
function checkTime(i)
{
if (i<10)
    {i="0" + i}
    return i
}
startTime();

function clockStart() {
timerId = setInterval(update, 1000);
update();
}
function clockStop() {
clearInterval(timerId);
timerId = null;
}
const clockStartElem = document.querySelector('#clockstart');
clockStartElem.addEventListener('click', clockStart, false);
const clockStoptElem = document.querySelector('#clockstop');
clockStoptElem.addEventListener('click', clockStop, false);

const showTime = document.querySelector('#showcurrenttime');
const displayTime = () => showTime.innerHTML = Date();
const hideTime = () => showTime.innerHTML = 'This Time';
showTime.addEventListener('mouseover', displayTime);
showTime.addEventListener('mouseout', hideTime);


function myFunction() { //ID demo2 на onclick JavaScript do something
    window.open("https://ru.kinorium.com/","_blank", "top=100, left=100, width=400, height=500, scrollbars=yes, resizable=yes");
    window.moveBy(750, 1000);
}
const demo2 = document.querySelector('#demo2');
demo2.addEventListener('click', myFunction)

console.log('работает или нет?')

