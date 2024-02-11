console.log('loded')

let value =''
function mainFunction(x){
    value = value+x
    document.getElementById('display').innerHTML = value
}

function Evaluation(){
    document.getElementById('display').innerHTML = eval(value)
    value = eval(value)+''
    console.log(value, typeof(value))
}

function displayCler(){
    value = ''
    document.getElementById('display').innerHTML = ''
}
function backspace(){
    value = value.split('')
    value.pop();
    value = value.join('')
    document.getElementById('display').innerHTML = value;
    
}