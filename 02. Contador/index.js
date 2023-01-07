var contadorElement = document.querySelector('.value');
var btnIncrementar = document.getElementsByClassName('btn-increase');
var btnDecrementar = document.getElementsByClassName('btn-decrease');
var btnReset = document.getElementsByClassName('btn-reset');

btnIncrementar[0].addEventListener('click', function(){
    contadorElement.innerHTML = parseInt(contadorElement.innerHTML) + 1;
});

btnDecrementar[0].addEventListener('click', function(){
    contadorElement.innerHTML = parseInt(contadorElement.innerHTML) - 1;
});

btnReset[0].addEventListener('click', function(){
    contadorElement.innerHTML = 0;
});