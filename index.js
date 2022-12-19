function encriptar() {
  alert("Encriptando...");
  var texto = document.getElementById("texto").value;
  texto = texto.toLowerCase();
  var resultado = "";
  console.log(texto);
  for (var i = 0; i < texto.length; i++) {
    if (texto[i] == "a") {
      resultado += "ai";
    } else if (texto[i] == "e") {
      resultado += "enter";
    } else if (texto[i] == "i") {
      resultado += "imes";
    } else if (texto[i] == "u") {
      resultado += "ufat";
    } else if (texto[i] == "o") {
      resultado += "ober";
    } else {
      resultado += texto[i];
    }
  }
  //imprime el resultado en el div con id resultado
  document.getElementById("resultado").innerHTML = resultado;
  if (resultado != "") {
    document.getElementById("resultado").innerHTML +=
      "<button onclick='copiar()'>Copiar</button>";
  }
}

function desencriptar() {
  alert("Desencriptando...");
  var texto = document.getElementById("texto").value;
  var resultado = "";
  var i = 0;
  console.log(texto);
  while (i < texto.length) {
    if (texto[i] == "a" && texto[i + 1] == "i") {
      console.log("encontro la a");
      resultado += "a";
      i += 2;
    } else if (
      texto[i] == "e" &&
      texto[i + 1] == "n" &&
      texto[i + 2] == "t" &&
      texto[i + 3] == "e" &&
      texto[i + 4] == "r"
    ) {
      resultado += "e";
      i += 5;
    } else if (
      texto[i] == "i" &&
      texto[i + 1] == "m" &&
      texto[i + 2] == "e" &&
      texto[i + 3] == "s"
    ) {
      resultado += "i";
      i += 4;
    } else if (
      texto[i] == "u" &&
      texto[i + 1] == "f" &&
      texto[i + 2] == "a" &&
      texto[i + 3] == "t"
    ) {
      resultado += "u";
      i += 4;
    } else if (
      texto[i] == "o" &&
      texto[i + 1] == "b" &&
      texto[i + 2] == "e" &&
      texto[i + 3] == "r"
    ) {
      resultado += "o";
      i += 4;
    } else {
      resultado += texto[i];
      i++;
      console.log("no encontro nada");
    }
  }
  document.getElementById("resultado").innerHTML = resultado;
  //si hay resultado un boton para copiar el texto
  if (resultado != "") {
    document.getElementById("resultado").innerHTML +=
      "<button onclick='copiar()'>Copiar</button>";
  }
}

//funcion para copiar el texto
function copiar() {
  var texto = document.getElementById("resultado").innerText;
  texto = texto.replace("COPIAR", "");
  var aux = document.createElement("input");
  aux.setAttribute("value", texto);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
  alert("Texto copiado");
}
