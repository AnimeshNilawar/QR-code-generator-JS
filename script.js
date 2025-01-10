const qrText = document.getElementById('qr-text');
const sizes  = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qr-body');

let size = sizes.value;

generateBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    isEmptyInput();
})

sizes.addEventListener('change', (e)=>{
    size= e.target.value;
    isEmptyInput();
})

downloadBtn.addEventListener('click', (e)=>{
    let img = document.querySelector('.qr-body img');

    if(img !== null){
        let imgAtrr = img.getAttribute('src');
        downloadBtn.setAttribute("href", imgAtrr);
    } else {
        downloadBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
})

function isEmptyInput(){
    if(qrText.value.length > 0) {
        generateQrCode();
    } else {
        alert("Please Enter Text or URL to generate QR Code")
    }
}

function generateQrCode(){
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000",
    });
}