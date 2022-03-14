const ecran = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

let premierNbr = 0;
let operateur = '';
let valeurSuivante = false;

function sendNumberValue(number) {
    const displaValue = ecran.textContent;
    if (valeurSuivante) {
        ecran.textContent = number;
    } else {
        if (displaValue === '0') {
            ecran.textContent = number;
        } else {
            ecran.textContent = displaValue + number;
        }
    }
}

function addDecimal() {
    //the includes method to check the string to see if there a specific value
    if (!ecran.textContent.includes('.')) {
        ecran.textContent = `${ecran.textContent}.`
    }
}

function operations(operation) {
    const valeurActuelle = Number(ecran.textContent);
    if (!premierNbr) {
        premierNbr = valeurActuelle;
    } else {
        console.log('valeur actulle', valeurActuelle)
    }
    valeurSuivante = true;
    operateur = operation;
    console.log('operateur', operateur);
}

inputBtns.forEach((inputBtn) => {
    if (inputBtn.classList.length === 0) {
        inputBtn.addEventListener('click', function () {
            sendNumberValue(inputBtn.value)
        });
    } else if (inputBtn.classList.contains('operation')) {
        inputBtn.addEventListener('click', function () {
            operations(inputBtn.value)
        });
    } else if (inputBtn.classList.contains('decimal')) {
        inputBtn.addEventListener('click', function () {
            addDecimal(inputBtn.value)
        });
    }
})

//clearAll
function clearAll() {
    premierNbr = 0;
    operateur = '';
    valeurSuivante = false;
    ecran.textContent = '0';
}
clearBtn.addEventListener('click', clearAll)