function encriptar() {
  let mensaje = document.getElementById("texto");
  document.getElementById("imagen").style.display = "none";
  document.getElementById("button-copy").disabled = false;
  let codigo = mensaje.value
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat");
  document.getElementById("outTexto").value = codigo;
}

function desencriptar() {
  let mensaje = document.getElementById("texto");
  document.getElementById("imagen").style.display = "none";
  document.getElementById("button-copy").disabled = false;
  let original = mensaje.value
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");
  document.getElementById("outTexto").value = original;
}

function copiar() {
  let mensaje = document.getElementById("outTexto");

  navigator.clipboard.writeText(mensaje.value);
  alert("El texto ha sido copiado al portapapeles");
  document.getElementById("texto").value = "";
  document.getElementById("button-encrypt").disabled = true;
  document.getElementById("button-no-encrypt").disabled = true;
}

function validinput(event) {
  document.getElementById("outTexto").value = "";
  document.getElementById("button-copy").disabled = true;
  document.getElementById("button-encrypt").disabled = false;
  document.getElementById("button-no-encrypt").disabled = false;
  console.log(event.data);
  if (event.data !== null) {
    let key = event.data.charCodeAt(0);
    if (!((key >= 97 && key <= 122) || key == 8 || key == 32)) {
      document.getElementById("texto").value = document
        .getElementById("texto")
        .value.substring(0, document.getElementById("texto").value.length - 1);
    }
  }
  if (document.getElementById("texto").value.length == 0) {
    document.getElementById("imagen").style.display = "block";
    document.getElementById("button-encrypt").disabled = true;
    document.getElementById("button-no-encrypt").disabled = true;
  }
}
