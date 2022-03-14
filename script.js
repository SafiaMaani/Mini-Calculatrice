const ecran = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

let premierNbr = 0;
let operateur = '';
let valeurSuivante = false;

function sendNumberValue(number) {
    const displayValue = ecran.textContent;
    if (valeurSuivante) {
        ecran.textContent = number;
        valeurSuivante = false;
    } else {
        //si le 
        if (displayValue === '0') {
            ecran.textContent = number;
        } else {
            ecran.textContent = displayValue + number;
        }
    }
}

function addDecimal() {
    //En cliquant sur un operateur on peut pas ajouter une vergule
    if (valeurSuivante) return;
    //the includes method to check the string to see if there a specific value
    if (!ecran.textContent.includes('.')) {
        ecran.textContent = `${ecran.textContent}.`
    }
}

const calcule = {
    '/': (premierNbr, valeurSuivante) => premierNbr / valeurSuivante,
    '*': (premierNbr, valeurSuivante) => premierNbr * valeurSuivante,
    '+': (premierNbr, valeurSuivante) => premierNbr + valeurSuivante,
    '-': (premierNbr, valeurSuivante) => premierNbr - valeurSuivante,
    '=': (premierNbr, valeurSuivante) => valeurSuivante
}

function operations(operation) {
    const valeurActuelle = Number(ecran.textContent);
    if (operateur && valeurSuivante) {
        operateur = operation;
        return;
    }
    if (premierNbr == 0) {
        premierNbr = valeurActuelle;
    } else {
        const calculation = calcule[operateur](premierNbr, valeurActuelle);
        // console.log('calculation', calculation)
        ecran.textContent = calculation;
        premierNbr = calculation;
    }
    valeurSuivante = true;
    operateur = operation;
}

//Event Listner pour les nbrs , operateur et vergule 
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