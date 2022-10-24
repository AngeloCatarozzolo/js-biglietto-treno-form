const ticketForm = document.getElementById("ticket-form");
const btnTicketReset = document.getElementById("reset");
const ticketContainer = document.querySelector('.ticket-container');
ticketForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const km = Number(document.getElementById('km').value);
    const age = document.getElementById('age').value;
    let price = km * 0.21;
    let offert = "Biglietto Standard";
    if( age === 'underage' ) {
        price = price * 0.8;
        offert = "Biglietto minorenni";
    } else if ( age === 'over' ) {
        price = price * 0.6;
        offert = "Biglietto over 65";
    }
    document.getElementById('ticket-name').innerHTML = name;
    document.getElementById('ticket-offert').innerHTML = offert;
    document.getElementById('ticket-wagon').innerHTML = Math.floor(Math.random() * 10) + 1;
    document.getElementById('ticket-cp').innerHTML = Math.floor(Math.random() * 10000) + 90000;
    document.getElementById('ticket-price').innerHTML = `${price.toFixed(2)}€`;
    ticketContainer.classList.add('show');
});
btnTicketReset.addEventListener('click', function() {
    ticketContainer.classList.remove('show');
});