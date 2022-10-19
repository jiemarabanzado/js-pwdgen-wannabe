document.querySelector('#buy').addEventListener('click', genera);
function genera(){   
    const nome = prompt("inserisci il nome");
    document.getElementById('nome').innerHTML= nome;

    const cognome = prompt("inserisci il cognome");
    document.getElementById('cognome').innerHTML= cognome;

    const colore = prompt("inserisci il colore preferito");
    document.getElementById('colore').innerHTML= colore;

    const password = `${nome}${cognome}${colore}76 `;
    document.getElementById('password').innerHTML= password;
}