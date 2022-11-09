const currentTime = new Date().toLocaleTimeString("pt-BR", {
  hour: "numeric",
  minute: "numeric",
  hour12: true,
});

const clock = document.getElementById("clock");
clock.innerHTML = currentTime;

const startYear = 2019;
const currentYear = new Date().getFullYear();
const yearsWorking = document.getElementById("years-working");

yearsWorking.innerHTML = `${currentYear - startYear} years`;
