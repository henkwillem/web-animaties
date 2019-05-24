var vlak1 = document.querySelector('.vlak1');
var vlak2 = document.querySelector('.vlak2');
var schalen = document.querySelector('.button1');
var schalen2 = document.querySelector('.button2');

var band1 = document.querySelector('.vlak1 > svg:nth-of-type(1)');
var band2 = document.querySelector('.vlak2 > svg:nth-of-type(1)');

var tekstje = document.querySelector('h3');

function tekst() {
    tekstje.class.list.remove("vroem");
    tekstje.classlist.add("tekstjevroem");
}

function kleuren() {
    vlak1.classList.add("kleurveranderen");
    vlak2.classList.add("kleurveranderen1");
}

function kleurenuit() {
    vlak1.classList.remove("kleurveranderen");
    vlak2.classList.remove("kleurveranderen1");
}

function kleiner() {
    band1.classList.remove("wielenschalen");
    band1.classList.add("kleinerewielen");
    band2.classList.remove("wielenschalen");
    band2.classList.add("kleinerewielen");
}

function groter() {
    band1.classList.remove("kleinerewielen");
    band1.classList.add("wielenschalen");
    band2.classList.remove("kleinerewielen");
    band2.classList.add("wielenschalen");
}

window.addEventListener('keydown', function(e) {
    if (e.keyCode === 39) {
        band2.classList.remove('draaiLinks', 'linkerbanden', 'rechterbanden', 'wegrijden');
        band1.classList.add('draaiRechts');
    }
    if (e.keyCode === 37) {
        band1.classList.remove('draaiRechts', 'linkerbanden', 'wegrijden');
        band2.classList.add('draaiLinks'); 
    }
    if (e.keyCode === 32) {
        band1.classList.add('wegrijden');
        band2.classList.add('wegrijden');
    }
}, false);

// Geholpen door Joop met het fixen van keydown

vlak1.addEventListener("mouseover", kleuren);
vlak1.addEventListener("mouseout", kleurenuit);
vlak2.addEventListener("mouseover", kleuren);
vlak2.addEventListener("mouseout", kleurenuit);

schalen.addEventListener("click", groter);
schalen2.addEventListener("click", kleiner);