let myForm = document.querySelector("#form");
let respDay = document.querySelector("#days");
let respMonth = document.querySelector("#months");
let respYear = document.querySelector("#years");

myForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let days = myForm.day.value;

    respDay.innerHTML = `${days}`;
    console.log("Enviou");
});