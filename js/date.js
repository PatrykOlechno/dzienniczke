let today = document.querySelector('.today');
let date = new Date();
let dd = String(date.getDate()).padStart(2, '0');
let mm = String(date.getMonth() + 1).padStart(2, '0');
let yyyy = date.getFullYear();

currentDate = dd + '.' + mm + '.' + yyyy + " (dzisiaj)";

today.textContent = currentDate;