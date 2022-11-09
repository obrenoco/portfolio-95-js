const currentTime = new Date().toLocaleTimeString("pt-BR", {
  hour: "numeric",
  minute: "numeric",
  hour12: true,
});

const clock = document.getElementById("clock");
clock.innerHTML = currentTime;
