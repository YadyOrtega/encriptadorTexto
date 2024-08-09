const  textArea = document.querySelector(".text-area");
const   mensaje = document.querySelector(".mensaje");



function btnEncriptar(){


    if (validarTexto(textArea.value)) {
        const textEncriptado = encriptar(textArea.value)
        mensaje.value = textEncriptado
        textArea.value = "";
        mensaje.style.backgroundImage = "none"
    } else {
        alert("El texto ingresado contiene caracteres no permitidos, por favor sólo ingrese letras sin acentos ni caracteres especilaes");
        
    }
    
}


function encriptar(stringEncriptada){

    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){

        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }
    }
    return stringEncriptada
}


function btnDesencriptar(){

    const textEncriptado = desencriptar(textArea.value)
    mensaje.value = textEncriptado
    textArea.value = "";
    
}



function desencriptar(stringDesencriptada){

    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){

        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }
    }
    return stringDesencriptada
}

function validarTexto(texto) {
    const regex = /^[a-z\s]*$/;
    return regex.test(texto);
}

function btnCopiar() {
    mensaje.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}