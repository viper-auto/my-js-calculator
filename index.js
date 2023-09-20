
let countStr = ''; 
const MaxNumDig = 10;
const MaxDigAcc = 5;

let prevButton = '';
let isPrevButtonDigit = false;

let firstOperand = '';
let secondOperand = '';
let arrBinaryOperation = ['divade', 'percent','mult', 'minus', 'eq', 'plus'];
let i = 0;
let operatorCount = '';

let shablonZero = "." + "0".repeat(MaxDigAcc);


function btnCilck(clickedElement){
  
  let button_name = clickedElement.id;
  
  
  if (button_name[0]==='a'){
    
    if (!(isPrevButtonDigit)){
      countStr = '';
    }

    if (countStr.length < MaxNumDig){
      button_name = button_name[1];
  
      if ((countStr.length == 1) && (countStr[0] === '0') && (button_name === '0')){
        countStr += '';
      }else{
        countStr += button_name;
      }
    }// if (countStr.length < MaxNumDig){
    isPrevButtonDigit = true;

  }else{
    isPrevButtonDigit = false;
  }
  
    
    if (button_name==='dot'){
      if (!(countStr.includes('.'))){
        button_name = '.';
        countStr += button_name;
        isPrevButtonDigit = true;
      }else{
        button_name = '';
        countStr += button_name;
      } 
    }
    
    if (button_name === 'bs'){
      countStr = countStr.substring(0, countStr.length - 1);
    }


    if ((button_name === 'ce') || (button_name === 'c')){
      countStr = '';
    }


    if ((button_name === 'plus-minus') && (countStr.length > 0)){
      countStr = (countStr[0] !== '-') ? '-' + countStr : countStr.slice(1);
    }

    if (button_name === 'sqrt'){
      if (countStr[0] !== '-'){
        countStr = (Math.sqrt(Number(countStr))).toFixed(MaxDigAcc).toString();
      }else{
        // countStr = 'ERROR'
      }
    }


    if (button_name === 'dvx'){
      countStr = 1/Number(countStr).toFixed(MaxDigAcc).toString();
    }


    if (arrBinaryOperation.includes(button_name)){
      if(firstOperand === ''){
        firstOperand = countStr;
        operatorCount = button_name;      

      }else{
        secondOperand = countStr;

        switch (operatorCount) {
          case 'divade':
            countStr = (Number(firstOperand)/Number(secondOperand)).toFixed(MaxDigAcc).toString();
            break
          case 'percent':
            countStr = (Number(firstOperand)/Number(secondOperand)*100).toFixed(MaxDigAcc).toString();
            break
          case 'mult':
            countStr = (Number(firstOperand)*Number(secondOperand)).toFixed(MaxDigAcc).toString();
            break
          case 'minus':
            countStr = (Number(firstOperand)-Number(secondOperand)).toFixed(MaxDigAcc).toString();
            break
          case 'plus':
            countStr = (Number(firstOperand)+Number(secondOperand)).toFixed(MaxDigAcc).toString();
            break
        }
        
        firstOperand = secondOperand;
        operatorCount = button_name;

      }

    }

    prevButton = button_name;
    
    if(Number(countStr) === 0){
      countStr = '';
    }


    if (countStr.includes(shablonZero)){
      countStr = countStr.slice(0, countStr.length - shablonZero.length);
    }

    let displayEl = document.getElementById("num-display");
    displayEl.textContent = countStr;

  return button_name
}


