let input = document.getElementById("input");

let inputValue = "";




function displayValue(number){
    inputValue += number;
    input.value = inputValue;
    pastData=inputValue;
}

function clearValue(){
    inputValue="";
    input.value = inputValue;
}

function Result() {
    if(input.value.length > 0){
        try {
            inputValue = eval(inputValue).toString();
            input.value = inputValue;
          } catch (error) {
              inputValue="";
              input.value = 'Error';
          }
    }
}

function deleteValue(){
    if (inputValue.length > 0) {
        inputValue = inputValue.slice(0, -1);
        input.value = inputValue;
    }

}

function percentagefunction(){
    if(input.value.length > 0){
        try {
            inputValue = eval(inputValue)/100;
            inputValue = inputValue.toString();
            input.value = inputValue;
          } catch (error) {
              inputValue="";
              input.value = 'Error';
          }
    }
}


document.addEventListener('keypress', function (event) {
    
    const validCharacters = '0123456789+-*/.=\r\n';
    if (validCharacters.includes(event.key)) {
        displayValue(event.key);
    }
    if(event.key === "Enter"){
        Result();
    }
    if(event.key === "Delete"){
        clearValue();
    }
});


  