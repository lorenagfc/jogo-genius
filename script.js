var aleatorio = getRandom();
var score = 0;
var numeros = [];
var pessoa = [];

function telaInicio() {
    document.getElementById('telaRanking').style.display = 'none';
    document.getElementById('telaInicio').style.display = 'block';
}

function telaJogo() {
    document.getElementById('telaInicio').style.display = 'none';
    document.getElementById('telaJogo').style.display = 'flex';

    numeros.push(aleatorio);
    printRandom();
}

function salvaRanking(){
    var nome = document.getElementById('nome').value;
    var params = JSON.stringify({ name: nome, score: score});

    const url = "https://us-central1-prova-front-letras.cloudfunctions.net/save"
    var postRanking = new XMLHttpRequest();

    postRanking.open("POST", url, true);
    postRanking.send(params);

    telaRanking();
}

function telaRanking() {
    document.getElementById('telaInicio').style.display = 'none';
    document.getElementById('telaFim').style.display = 'none';
    document.getElementById('telaRanking').style.display = 'flex';
    
    const url = "https://us-central1-prova-front-letras.cloudfunctions.net/ranking";
    fetch(url)
    .then(response => response.text())
    .then(result => {
        const data = JSON.parse(result);

        data.map(element => {
            const { name, score } = element;
            row = document.getElementById("row");

            td = document.createElement("td");
            td.className = "";
            td.innerHTML = name;
            
            td = document.createElement("td");
            td.className = "";
            td.innerHTML = score;

            row.appendChild(td);
        });
    });
}

function telaFim() {
    document.getElementById('telaJogo').style.display = 'none';
    document.getElementById('telaFim').style.display = 'flex';

    printScore();
}

function getRandom(){
    aleatorio = Math.floor(Math.random() * 9 + 1);
    return aleatorio;
}

function printRandom(){
    for(i=0; i<numeros.length; i++){
        document.getElementById('numRandom').innerHTML = numeros[i];
    }
    //document.getElementById('numRandom').innerHTML = aleatorio;
}

function setScore(){
    score++;
}

function printScore(){
    document.getElementById('numScore').innerHTML = score;
}

function entrada(numero){
    pessoa.push(numero);

    if(pessoa.length==numeros.length){
        genius();
    }
}

function genius(){
    for(i=0; i<numeros.length; i++){
        if(pessoa[i]!=numeros[i]){
            telaFim();
        }
    }

    getRandom();
    numeros.push(aleatorio);
    printRandom();
    setScore();
    pessoa = [];
}
