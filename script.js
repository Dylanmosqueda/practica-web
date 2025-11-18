let contador = 1;



function cambiarImagen() {
  const banner = document.getElementById("banner");
  banner.style.opacity = 1;
  
  setTimeout(() => {
    alert("¡Jaeger activado! Prepárate para la batalla.");
  }, 300);

  
  setTimeout(() => {
    header.classList.remove("encendido");
  }, 1000);
}

function mostrarJaeger() {
  const jaegers = [
    "Gipsy Danger",
    "Cherno Alpha",
    "Striker Eureka",
    "Saber Athena",
    "Bracer Phoenix",
    "Guardian Bravo"
  ];
  const random = jaegers[Math.floor(Math.random() * jaegers.length)];
  alert("Tu Jaeger asignado es: " + random);
}