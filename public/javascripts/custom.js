function validarCampo() {
  var cidade = document.getElementById("cidade");

  if (cidade.value == "") {
    var teste = $(cidade).css('backgroud-color');
    console.log(teste);
 
    cidade.focus();
    return;
  }
}

function AddTableRow() {
  var newRow = $("<tr>");
  var cols = "";

  cols += '<td><img class="custom-img" id="logo"></td>';
  cols += '<td><p id="curso"></p></td>';
  cols += '<td id="cidade"></td>';
  cols += '<td id="preco"></td>';
  cols += '<td><button class="btn btn-primary btn-custom" onclick="" type="button">Detalhes</button></td>';
  cols += '</td>';

  newRow.append(cols);
  $("#table-course").append(newRow);

  return false;
}

//Função parar ler api e trazer apenas os valor Enable = true
window.onload = function carregarDados() {
  var link = "https://testapi.io/api/Jonas-buriti/scholarships";
  $.ajax({
    url: link,
    type: 'GET',
    dataType: 'json',
    success: function (data) {
      var isEnabled = data.filter(resultfilter => {
        return resultfilter.enabled === true;
      })
      console.log(isEnabled[0].university.logo_url);
      console.log(isEnabled[0].course.name);
      console.log(isEnabled[0].campus.city);
      console.log(isEnabled[0].full_price);

      AddTableRow();
      $("#logo").attr("src", isEnabled[0].university.logo_url);
      $("#curso").text(isEnabled[0].course.name);
      $("#cidade").text(isEnabled[0].campus.city);
      $("#preco").text(isEnabled[0].full_price);

      AddTableRow();
      $("#logo").attr("src", isEnabled[1].university.logo_url);
      $("#curso").text(isEnabled[1].course.name);
      $("#cidade").text(isEnabled[1].campus.city);
      $("#preco").text(isEnabled[1].full_price);

    }
  })
}
