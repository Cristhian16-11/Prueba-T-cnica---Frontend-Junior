

//funcion que valida los campos
function validacionCorreo(){
    //declaramos las variables de los inputs para validar sus campos
    const input_nombre = document.getElementById("nombre");
    const input_telefono = document.getElementById("telefono");
    const input_email = document.getElementById("email");
    const input_email_confirm = document.getElementById("email-confirm");
    const input_moto = document.getElementById("select-moto");
    const input_descripcion = document.getElementById("descripcion");
    //validamos que los correos si sean iguales y no esten vacios
    if(input_email.value==input_email_confirm.value){
        console.log("iguales");
        if(input_email.value=="" || input_email_confirm.value==""){
            input_email.style.backgroundColor ="#FFD4D4";
            input_email.style.borderColor ="#FA2B1F"
            console.log("estan vacios"); 
        }else{
            //asignamos colores al input cuando cumplen la validacion
            input_email.style.backgroundColor ="#FFFFFF";
            input_email.style.borderColor ="#00AF00";
            input_email_confirm.style.backgroundColor ="#FFFFFF";
            input_email_confirm.style.borderColor ="#00AF00";
            almacenar();
        }
    }else{
        //asignamos colores al input email cuando estan vacios
        input_email.style.backgroundColor ="#FFD4D4";
        input_email.style.borderColor ="#FA2B1F"
        input_email_confirm.style.backgroundColor ="#FFD4D4";
        input_email_confirm.style.borderColor ="#FA2B1F"
    }
    //validamos que ningun campo este vacion antes de almacenar la informacion
    if(input_nombre.value=="" || input_telefono.value=="" || input_email.value=="" || input_email_confirm.value=="" || input_moto.value=="" || input_descripcion.value==""){
        console.log("alguno esta vacio");
    }else{
        console.log("todos validados");
        window.location.href='/formulario-contacto/detalle.html';
        almacenar();
    }
    
    
}
function almacenar(){
    //almacenamos los datos del formulario por medio del localStorage para utilizarlos en detalle.html
    localStorage.setItem("nombre",document.getElementById("nombre").value);
    localStorage.setItem("telefono",document.getElementById("telefono").value);
    localStorage.setItem("email",document.getElementById("email").value);
    localStorage.setItem("moto",document.getElementById("select-moto").value);
    localStorage.setItem("descripcion",document.getElementById("descripcion").value);
    }
//esta funcion nos devuelve al formulario
function volver(){
    window.location.href='/formulario-contacto/index.html';
}
//llena los datos del detalle.html
function llenar(){
    let h3_nombre = document.getElementById("h3_nombre");
    let h3_telefono = document.getElementById("h3_telefono");
    let h3_email = document.getElementById("h3_email");
    let h3_moto = document.getElementById("h3_moto");
    let h3_descripcion = document.getElementById("h3_descripcion");
    h3_nombre.textContent=localStorage.getItem("nombre");
    h3_telefono.textContent=localStorage.getItem("telefono");
    h3_email.textContent=localStorage.getItem("email");
    h3_moto.textContent=localStorage.getItem("moto");
    h3_descripcion.textContent=localStorage.getItem("descripcion");
}

    
    