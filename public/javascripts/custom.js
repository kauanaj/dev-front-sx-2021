function validarCampo() {
  var cidade = document.getElementById("cidade");

  if(cidade.value ==""){
    alert("Nome não informado");

    cidade.focus();
    return;
  }
}