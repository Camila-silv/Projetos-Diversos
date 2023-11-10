const ticketType = document.querySelector("[data-ticket-type]");
const ticketAmount = document.querySelector("[data-ticket-amount]");
const buyTicketButton = document.querySelector("[data-buy-ticket-button]");

let pista = document.querySelector("[data-pista]");
let cadeiraSuperior = document.querySelector("[data-cadeira-superior]");
let cadeiraInferior = document.querySelector("[data-cadeira-inferior]");

buyTicketButton.addEventListener("click", (ev) => {
  ev.preventDefault();

  if (isNaN(parseInt(ticketAmount.value))) {
    alert("Esse campo aceita apenas números.");
  } else {
    switch (ticketType.value) {
      case "Pista":
        pista.innerText = buyTicket(pista.innerText, ticketAmount.value);
        break;
      case "Cadeira superior":
        cadeiraSuperior.innerText = buyTicket(
          cadeiraSuperior.innerText,
          ticketAmount.value
        );

        break;
      case "Cadeira inferior":
        cadeiraInferior.innerText = buyTicket(
          cadeiraInferior.innerText,
          ticketAmount.value
        );

        break;
    }
  }

  ticketAmount.value = "";
});

function buyTicket(ticketType, ticketAmount) {
  let newQuantity = null;
  if (parseInt(ticketAmount) > parseInt(ticketType)) {
    alert(
      "Quantidade de ingressos maior que a quantidade disponivel para venda, escolha uma quantidade menor."
    );
    return ticketType;
  } else {
    newQuantity = parseInt(ticketType) - parseInt(ticketAmount);
    alert("Compra efetuada com sucesso, bom show!!");
    return newQuantity;
  }
}


