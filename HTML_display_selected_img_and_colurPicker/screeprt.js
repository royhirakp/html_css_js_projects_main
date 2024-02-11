let imageInput = document.querySelector('#input');
let imageData = '';
imageInput.addEventListener("change", function(){
    const reader = new FileReader();
    console.log(reader)
    reader.addEventListener("load",()=>{
        imageData = reader.result;
        document.querySelector("#display").style.backgroundImage = `url(${imageData})`
    })
    reader.readAsDataURL(this.files[0])
})
///////////////////////////////////
document.getElementById('pick-Colur').addEventListener('click',()=>{
    console.log('pick colur button')
    const eyedrop = new EyeDropper();
    console.log(eyedrop)
    eyedrop.open().then((res)=>{
        document.getElementById("colurHexa").value = res.sRGBHex;
        document.getElementById("colurRGB").value = hexaToRgb(res.sRGBHex);
        // document.body.style.background = res.sRGBHex;
        document.getElementById("colurdiaplay").style.background = res.sRGBHex;
    })
})

//function from hexadecimnl to RGB colur code
function hexaToRgb (val){
    let r = parseInt((val[1]+val[2]),16)
    let g = parseInt((val[3]+val[4]),16)
    let b = parseInt((val[5]+val[6]),16)
    return ("rgb(" + r + ", " + g + ", " + b + ")");
}     

function copytext(){
    let put = document.getElementById("colurHexa");
    put.select();
    document.execCommand("copy")
    document.getElementById('copied').setAttribute("style", "display: block");

    setTimeout(()=>{
        document.getElementById('copied').setAttribute("style", "display: none");
    },1000)
}
function copytextRGB(){
    let put = document.getElementById("colurRGB");
    put.select();
    document.execCommand("copy")
    document.getElementById('copied').setAttribute("style", "display: block");

    setTimeout(()=>{
        document.getElementById('copied').setAttribute("style", "display: none");
    },1000)
}









