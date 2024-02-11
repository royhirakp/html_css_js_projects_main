console.log('loded')

input.addEventListener('onChange',(e)=>{
    console.log(e.target.value)
})
function inputfun() {
    let Userinput = document.getElementById('inputPassword5').value;
    // console.log('onhanhe')
    // console.log(Userinput)
    if(Userinput !== ''){
        let pound = Userinput * 453.592;
        let kilogram = Userinput * 0.453592;
        let ounce = Userinput * 16;
        // console.log(pound , kilogram , ounce)
        document.getElementById('gramOutput').innerHTML = pound
        document.getElementById('kilogramOutput').innerHTML = kilogram
        document.getElementById('OunceOutput').innerHTML = ounce
    }else{
        document.getElementById('gramOutput').innerHTML = 0
        document.getElementById('kilogramOutput').innerHTML = 0
        document.getElementById('OunceOutput').innerHTML = 0

    }
}