let calculator_buttons = [
    {
        name : "delete",
        symbol : "⌫",
        formula : false,
        type : "key"
    },{
        name : "clear",
        symbol : "C",
        formula : false,
        type : "key"
    },{
        name : "percent",
        symbol : "%",
        formula : "/100",
        type : "number"
    },{
        name : "division",
        symbol : "÷",
        formula : "/",
        type : "operator"
    },{
        name : "7",
        symbol : 7,
        formula : 7,
        type : "number"
    },{
        name : "8",
        symbol : 8,
        formula : 8,
        type : "number"
    },{
        name : "9",
        symbol : 9,
        formula : 9,
        type : "number"
    },{
        name : "multiplication",
        symbol : "×",
        formula : "*",
        type : "operator"
    },{
        name : "4",
        symbol : 4,
        formula : 4,
        type : "number"
    },{
        name : "5",
        symbol : 5,
        formula : 5,
        type : "number"
    },{
        name : "6",
        symbol : 6,
        formula : 6,
        type : "number"
    },{
        name : "addition",
        symbol : "+",
        formula : "+",
        type : "operator"
    },,{
        name : "1",
        symbol : 1,
        formula : 1,
        type : "number"
    },{
        name : "2",
        symbol : 2,
        formula : 2,
        type : "number"
    },{
        name : "3",
        symbol : 3,
        formula : 3,
        type : "number"
    },{
        name : "subtraction",
        symbol : "–",
        formula : "-",
        type : "operator"
    },{
        name : "0",
        symbol : 0,
        formula : 0,
        type : "number"
    },{
        name : "comma",
        symbol : ".",
        formula : ".",
        type : "number"
    },{
        name : "calculate",
        symbol : "=",
        formula : "=",
        type : "calculate"
    }
];

// select main elements
let inputElement = document.querySelector('.input'),
    operationElement = document.querySelector('.operation .value'),
    resultElement = document.querySelector('.result .value');

let data = {
    operation : [],
    result : []
}

function addButtons(button){

    let buttonsPerRow = 4,
        addedButtons  = 0;

        calculator_buttons.forEach(button => {

            if(addedButtons % buttonsPerRow == 0){
                inputElement.innerHTML += `<div class="row"></div>`
            }
    
            let row = document.querySelector('.row:last-child');
                row.innerHTML += `<button id="${button.name}">
                    ${button.symbol}
                    </button>
                `;
                addedButtons ++;
        })
}

addButtons();

inputElement.addEventListener('click', event => {

    const eventTarget =  event.target;
    calculator_buttons.forEach( button =>{
        if(eventTarget.id == button.name) calcualte(button);
    });
});

function calcualte(button){

    if(button.type == 'operator'){
        data.operation.push(button.symbol);
        data.result.push(button.formula);
        /*if(history.length !== 0){
            updateOperationValue (history[0])
        }*/
    }
    else if(button.type == 'number'){
        data.operation.push(button.symbol);
        data.result.push(button.formula);
    }
    else if(button.type == 'key'){
        if(button.name == 'delete'){
            data.operation.pop();
            data.result.pop();
        }
        else if(button.name == 'clear'){
            data.operation = [];
            data.result = [];
            updateResultValue (0)
        }
    }
    else if(button.type == 'calculate'){
            finalJoined = data.result.join('');
                // CLEAR ALL ARRAYS, NO NEED TO SAVE ANYTHING ANYMORE
                data.operation = [];
                data.result = [];
            let finalResult ;
            finalResult = eval(finalJoined) 
        updateResultValue (finalResult);

                // SAVE RESULT FOR ANY FUTURE USE
                data.operation.push(finalResult);
                data.result.push(finalResult);
    }
    updateOperationValue (data.operation.join(''))
}


function updateOperationValue (operation){
    operationElement.innerHTML = operation;
}

function updateResultValue (result){
    resultElement.innerHTML = result;
}
