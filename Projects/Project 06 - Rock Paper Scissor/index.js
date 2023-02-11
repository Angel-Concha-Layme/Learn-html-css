var eleccionJugador = document.getElementsByClassName("opcion");

function eleccionMaquina() {
  var eleccionMaquina = Math.random();
  if (eleccionMaquina < 0.34) {
    eleccionMaquina = "Rock";
  } else if (eleccionMaquina <= 0.67) {
    eleccionMaquina = "Paper";
  } else {
    eleccionMaquina = "Scissor";
  }
  return eleccionMaquina;
}

for (var i = 0; i < eleccionJugador.length; i++) {
  eleccionJugador[i].addEventListener("click", function () {
    var election = this.id;
    console.log("Jugador elige: " + election);
    var computer = eleccionMaquina();
    console.log("Maquina elige: " + computer);

    // class menu-eleccion append class state-off
    var menuEleccion = document.getElementsByClassName("menu-eleccion");
    menuEleccion.item(0).classList.add("state-off");

    var menuResultado = document.getElementsByClassName("result");
    menuResultado.item(0).classList.remove("state-off");

    //imagen de la eleccion del jugador
    var imgJugador = document.getElementsByClassName("eleccion-jugador");
    //agrega <img> a la clase eleccion-jugador
    imgJugador.item(0).innerHTML =
      "<span>Player</span><img src='img/" + election + ".jpg' alt='Eleccion-jugador'>";
    //imagen de la eleccion de la maquina
    var imgMaquina = document.getElementsByClassName("eleccion-computadora");
    //agrega <img> a la clase eleccion-maquina
    imgMaquina.item(0).innerHTML = 
      "<span>Computer</span> <img src='img/" + computer + ".jpg' alt='Eleccion-maquina'>";

    //determina el ganador
    var ganador = winner(election, computer);
    var resultado = document.getElementsByClassName("determina-ganador");
    if (ganador === 0) {
      resultado.item(0).innerHTML = "Empate";
      resultado.item(0).classList.add("tie");
    } else if (ganador === 1) {
      resultado.item(0).innerHTML = "Ganaste";
        resultado.item(0).classList.add("win");
    } else {
      resultado.item(0).innerHTML = "Perdiste";
        resultado.item(0).classList.add("lose");
    }
  });
}

// determine winner, return 0 if tie, 1 if player wins, 2 if computer wins
function winner(player, computer) {
  if (player === computer) {
    return 0;
  } else if (player === "Rock") {
    if (computer === "Scissor") {
      return 1;
    } else {
      return 2;
    }
  } else if (player === "Paper") {
    if (computer === "Rock") {
      return 1;
    } else {
      return 2;
    }
  } else if (player === "Scissor") {
    if (computer === "Rock") {
      return 2;
    } else {
      return 1;
    }
  }
}
