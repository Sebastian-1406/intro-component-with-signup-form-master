let formulario = document.getElementById("formulario");
let inputs = document.querySelectorAll(".input");

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const campos = {
    nombre : false,
    apellido : false,
    correo : false,
    password : false,
}

const validarCampo = (e) => {
    

    let inputName = e.target.name
    let inputValue = e.target.value

    if(inputName == "nombre"){
        validarFormulario(expresiones.nombre, inputValue, inputName)
    }
    else if(inputName == "apellido"){
        validarFormulario(expresiones.nombre, inputValue, inputName)    
    }
    else if(inputName == "correo"){
        validarFormulario(expresiones.correo, inputValue, inputName)
    }
    else if(inputName == "password"){
        validarFormulario(expresiones.password, inputValue, inputName)
    }
}


const validarFormulario = (expresion, value , campo) => {

    if(expresion.test(value) || campo == ""){
        document.querySelector(`.contenedor__${campo}`).classList.remove("mensaje-icorrecto")
        campos[campo] = true
    }else{
        document.querySelector(`.contenedor__${campo}`).classList.add("mensaje-icorrecto")
        campos[campo] = false
    }

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        if(campos.nombre && campos.apellido && campos.correo && campos.password){
            formulario.reset();
        }
    })
}



inputs.forEach(input => {
    input.addEventListener("blur", validarCampo);
});


formulario.addEventListener("submit", (e) => {
    e.preventDefault()
})