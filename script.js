var data = new Date();
var hora = data.getHours();
var minutos = data.getMinutes();

var msg = window.document.getElementById("msg");
var img = window.document.getElementById("foto");
var titulo = window.document.getElementById("titulo");
var btnAuto = window.document.getElementById("automatico");
var btnManual = window.document.getElementById("manual");

btnManual.addEventListener("click", clicou);
btnAuto.addEventListener("click", () => {
  window.location.reload();
});

if (hora < 10 && minutos < 10) {
  msg.innerHTML = `Agora são 0${hora}:0${minutos}`;
} else if (hora >= 10 && minutos < 10) {
  msg.innerHTML = `Agora são ${hora}:0${minutos}`;
} else if (hora < 10 && minutos > 10) {
  msg.innerHTML = `Agora são 0${hora}:${minutos}`;
} else {
  msg.innerHTML = `Agora são ${hora}:${minutos}`;
}

if (hora >= 6 && hora < 12) {
  titulo.innerText = "Bom Dia!";
  img.src = "manha.png";
  document.body.style.background = "#fee453";
} else if (hora >= 12 && hora < 18) {
  //boa tarde
  titulo.innerText = "Boa Tarde!";
  img.src = "tarde.png";
  document.body.style.background = "#b4def6";
} else if (hora >= 18 && hora < 24) {
  titulo.innerText = "Boa Noite!";
  img.src = "noite.png";
  document.body.style.background = "#0a0e21";
} else {
  titulo.innerText = "Boa Madrugada!";
  img.src = "madrugada.png";
  document.body.style.background = "#000000";
}

function clicou() {
  var relogio = window.document.getElementById("relogio");
  hora = `${relogio.value[0]}${relogio.value[1]}`;
  minutos = `${relogio.value[3]}${relogio.value[4]}`;
  msg.innerHTML = `Agora são ${hora}:${minutos}`;

  if (hora >= 6 && hora < 12) {
    titulo.innerText = "Bom Dia!";
    img.src = "manha.png";
    document.body.style.background = "#fee453";
  } else if (hora >= 12 && hora < 18) {
    //boa tarde
    titulo.innerText = "Boa Tarde!";
    img.src = "tarde.png";
    document.body.style.background = "#b4def6";
  } else if (hora >= 18 && hora < 24) {
    titulo.innerText = "Boa Noite!";
    img.src = "noite.png";
    document.body.style.background = "#0a0e21";
  } else if (hora == 3 && minutos == 0) {
    titulo.innerText = "Vou te Pegar!";
    img.src = "madrugada_3.png";
    document.body.style.background = "#000000";
  } else {
    titulo.innerText = "Boa Madrugada!";
    img.src = "madrugada.png";
    document.body.style.background = "#000000";
    console.log("Teste");
  }
}
