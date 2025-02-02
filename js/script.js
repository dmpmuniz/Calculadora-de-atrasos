document.getElementById("atrasoForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const dataRetirada = new Date(document.getElementById("dataRetirada").value);
  const dataPrevista = new Date(document.getElementById("dataPrevista").value);
  const dataEntrega = new Date(document.getElementById("dataEntrega").value);
  const resultadoDiv = document.getElementById("resultado");

  if (dataEntrega > dataPrevista) {
    const atrasoEmMilissegundos = dataEntrega - dataPrevista;
    const atrasoEmDias = Math.ceil(atrasoEmMilissegundos / (1000 * 60 * 60 * 24));

    const dataSuspensao = new Date(dataEntrega);
    dataSuspensao.setDate(dataSuspensao.getDate() + atrasoEmDias);

    const dataLimite = new Date(dataEntrega);
    dataLimite.setMonth(dataLimite.getMonth() + 3);

    if (dataSuspensao > dataLimite) {
      resultadoDiv.innerHTML = `Tempo de atraso: ${atrasoEmDias} dias.<br>Suspenso até: ${dataLimite.toLocaleDateString()} (limite máximo de 3 meses).`;
    } else {
      resultadoDiv.innerHTML = `Tempo de atraso: ${atrasoEmDias} dias.<br>Suspenso até: ${dataSuspensao.toLocaleDateString()}.`;
    }
  } else {
    resultadoDiv.innerHTML = "Sem atraso. Obrigado por devolver no prazo!";
  }

  // Exibir a área de resultado
  resultadoDiv.style.display = "block";
});
