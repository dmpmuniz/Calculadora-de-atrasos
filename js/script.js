document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("calcForm");
  const resultadoDiv = document.getElementById("resultado");
  const botaoModoEscuro = document.getElementById("modoEscuro");

  // Alternar Modo Escuro
  botaoModoEscuro.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
  });

  // Aplicar Modo Escuro salvo
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
  }

  // Cálculo do atraso
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    calcularAtraso();
  });

  function calcularAtraso() {
    const dataRetirada = new Date(document.getElementById("dataRetirada").value);
    const dataPrevista = new Date(document.getElementById("dataPrevista").value);
    const dataEntrega = new Date(document.getElementById("dataEntrega").value);

    if (dataEntrega > dataPrevista) {
      const atrasoEmDias = Math.ceil((dataEntrega - dataPrevista) / (1000 * 60 * 60 * 24));
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
  }
});
