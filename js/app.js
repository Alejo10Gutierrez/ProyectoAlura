// console.log('cosas');


function encriptarTexto() {
    let textoIngreso = document.getElementById('textoIngreso').value;
    textoIngreso = textoIngreso.replace(/e/g, "enter");
    textoIngreso = textoIngreso.replace(/i/g, "imes");
    textoIngreso = textoIngreso.replace(/a/g, "ai");
    textoIngreso = textoIngreso.replace(/o/g, "ober");
    textoIngreso = textoIngreso.replace(/u/g, "ufat");
    console.log(textoIngreso);
    document.getElementById('encriptado').style.display = 'block';
    document.getElementById('sinencriptar').style.display = 'none';
    document.getElementById('encriptacion').textContent = textoIngreso;
    document.getElementById('textoEncriptado').style.display = 'block';


    return;
}
function desencriptarTexto() {
    let textoIngreso = document.getElementById('textoIngreso').value;
    textoIngreso = textoIngreso.replace(/enter/g, "e");
    textoIngreso = textoIngreso.replace(/imes/g, "i");
    textoIngreso = textoIngreso.replace(/ai/g, "a");
    textoIngreso = textoIngreso.replace(/ober/g, "o");
    textoIngreso = textoIngreso.replace(/ufat/g, "u");
    document.getElementById('encriptado').style.display = 'block';
    document.getElementById('sinencriptar').style.display = 'none';
    document.getElementById('encriptacion').textContent = textoIngreso;
    document.getElementsByClassName('textoEncriptado').style.textAlign = 'block';
}
function copiarTexto(){
    var textoCopiado = document.getElementById('encriptacion').innerText;
    console.log(textoCopiado);
    navigator.clipboard.writeText(`${textoCopiado}`);
    Swal.fire({
        title: "Copiado Exitosamente!",
        icon: "success"
      });
}