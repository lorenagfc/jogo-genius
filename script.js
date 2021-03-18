var aleatorio = getRandom();
var score = 0;
var numeros = [];

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

function telaRanking() {
    document.getElementById('telaInicio').style.display = 'none';
    document.getElementById('telaRanking').style.display = 'flex';
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

function setRandom(){
    for(i=0; i<numeros.length; i++){
        document.getElementById('numRandom').innerHTML = numeros[i];
    }
}

function printRandom(){
    document.getElementById('numRandom').innerHTML = aleatorio;
}

function getScore(){
    return score;
}

function setScore(){
    score++;
}

function printScore(){
    document.getElementById('numScore').innerHTML = score;
}

function genius(numero){
    if(numero!=aleatorio){
        telaFim();
    }
    else{
        getRandom();
        printRandom();
        setScore();
        numeros.push(aleatorio);
    }

        console.log("array "+numeros);
}