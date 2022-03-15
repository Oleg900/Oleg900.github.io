let date = new Date();

let dateControl = new Date();
dateControl.setMonth(1, 5);

let date2;

let n = 1209600000;
let n2 = 604800000;

let ms = (date - dateControl) / n2;

ms = Math.floor(ms);
date2 = dateControl - 1;
date2 = new Date(date2 + n2 * ms + n);

let dateMonth = date2.getMonth();
let dateDay = date2.getDate();

if (dateMonth === 0) {dateMonth = "января"}
else if (dateMonth === 1) {dateMonth = "февраля"}
else if (dateMonth === 2) {dateMonth = "марта"}
else if (dateMonth === 3) {dateMonth = "апреля"}
else if (dateMonth === 4) {dateMonth = "мая"}
else if (dateMonth === 5) {dateMonth = "июня"}
else if (dateMonth === 6) {dateMonth = "июля"}
else if (dateMonth === 7) {dateMonth = "августа"}
else if (dateMonth === 8) {dateMonth = "сентября"}
else if (dateMonth === 9) {dateMonth = "октября"}
else if (dateMonth === 10) {dateMonth = "ноября"}
else if (dateMonth === 11) {dateMonth = "декабря"}


let action = document.querySelectorAll(".action");

for (let i = 0; i <= action.length; i++) {
  action[i].innerHTML = dateDay + " " + dateMonth;
}
