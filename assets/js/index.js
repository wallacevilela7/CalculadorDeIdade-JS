let myForm = document.querySelector("#form");
let respDay = document.querySelecto("#days");
let respMonth = document.querySelecto("#months");
let respYear = document.querySelecto("#years");

myForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let days = myForm.day.value;

    respDay.innerHTML = `${days}`;
});