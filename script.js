const text = document.querySelector(".ingresar-texto textarea");
const encriptText = document.querySelector(".mostrar-texto textarea");

const encriptarButton = document.querySelector(".btn-encriptar");
const desencriptarButton = document.querySelector(".btn-desencriptar");
const copyButton = document.querySelector(".mostrar-texto button");
const pasteButton = document.querySelector(".p-btn button")

const desencriptMessage = document.querySelector(".desencriptar-mensaje");

let valores = [["e", "enter"], ["i", "enter"], ["a", "ai"], ["o", "ober"],["u", "ufat"]];

const contentEncriptArea = () => {
    if(encriptText.value === ""){
        encriptText.style.backgroundImage = "url(images/cript.png)";
        desencriptMessage.style.display = "block";
    } else {
        encriptText.style.backgroundImage = "none";
        desencriptMessage.style.display = "none";
    }
}

const encriptar = () => {
    let mensaje = text.value.toLowerCase();
    for(let i=0; i < valores.length; i++){
        if(mensaje.includes(valores[i][0])){
            mensaje = mensaje.replaceAll(valores[i][0], valores[i][1]);
        }
    }
    encriptText.value = mensaje;
    contentEncriptArea();
}

const desencriptar = () => {
    let mensajeEncriptado = text.value
    for(let i=0; i<valores.length; i++){
        if(mensajeEncriptado.includes(valores[i][1])){
            mensajeEncriptado = mensajeEncriptado.replaceAll(valores[i][1], valores[i][0]);
        }
    }
    encriptText.value = mensajeEncriptado;
    contentEncriptArea();
}

const copy = () => {
    navigator.clipboard.writeText(encriptText.value).then(
        () => {
            const copyAlert = document.querySelector(".copy-alert");
            copyAlert.classList.add("show");
    
            setTimeout(() => {
                copyAlert.classList.remove("show");
            }, 800);

            encriptText.value = null;

            contentEncriptArea();

        })
        .catch(error => {
            console.log("no se ha copiado el texto", error);
        })
}

const paste = () => {
    navigator.clipboard.readText().then(
        textocopiado => {
            text.value = textocopiado;
        })
        .catch(error => {
            console.error('No se pudo pegar el contenido del portapapeles:', error);
        });
}

encriptarButton.addEventListener("click", encriptar);
desencriptarButton.addEventListener("click", desencriptar);
copyButton.addEventListener("click", copy);
pasteButton.addEventListener("click", paste);

const blockEmbed = () => {
    if(windows.self !== window.top){
        const errorMessage = "No se permite la incrustación de esta página.";
        document.write(errorMessage);
    }
}




