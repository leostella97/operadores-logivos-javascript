// %% representa AND (e)
// || representa OR (ou)
// ! representa NOT (não)

let num1 = 10
let num2 = 2

// AND
let operAND = ((num1 == 10) && (num2 == 2))
if (operAND){
    console.log ("num1 é igual a " + num1 + " e num2 é igual a " + num2)
}

// OR
let operOR = ((num1 == 10) || (num2 == 2))
if (operOR){
    console.log ("num1 é igual a " + num1 + " ou num2 é igual a " + num2)
}

// NOT
let operNOT = (!(num1 == 1))
if (operNOT){
    console.log ("num1 não é igual a " + num1)
}

