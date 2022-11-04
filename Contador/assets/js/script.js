const currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment(){

  if(currentNumber >= 10){
    alert("O contador chegou ao seu limite de numeros positivos" + currentNumber);
  }else{
    currentNumberWrapper.style.color = 'green';
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML  = currentNumber;
  }
}

function decrement(){

  if(currentNumber <= -10){
    alert("O contador chegou ao seu limite de numeros negativos" + currentNumber);
  }else{
    currentNumberWrapper.style.color = 'red';
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML  = currentNumber;
  }
}