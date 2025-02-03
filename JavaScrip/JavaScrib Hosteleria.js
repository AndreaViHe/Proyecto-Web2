let modal = document.getElementById("Modal");
let modalImg = document.getElementById("imgM");
let captionText = document.getElementById("caption");

function mostrar(img){
  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;
}

var span = document.getElementsByClassName("close")[0];

function cerrar() {
  const span=document.getElementsByClassName("close");
  modal.style.display = "none";
}