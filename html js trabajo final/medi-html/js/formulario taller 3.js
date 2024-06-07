function validainputs(){
    const nombre=document.getElementById("usuario");
    const documento=document.getElementById("documento");
    const telefono=document.getElementById("telefono");
    const email=document.getElementById("email");
    const password1=document.getElementById("password");
    const password2=document.getElementById("password2");
    const registro=document.getElementById("registro");
    //seccion de asignacion de valores input a variables
    const nombreval= nombre.value.trim();
    const documentoval= documento.value.trim();
    const telefonoval= telefono.value.trim();
    const emailval=email.value.trim();
    const password1val= password1.value.trim();
    const password2val= password2.value.trim();
// variable errorf para validar errores de ingreso
    var errorf=0;
// Seccion de validacion de nombre
    if (nombreval ==="") {
        ocErrorform(nombre, "Por favor ingrese su nombre");
        errorf=1;
    }
    else{
        exitosform(nombre);
    }
    // Seccion de validacion de doc  identidad
    if (documentoval ==="") {
        ocErrorform(documento, "Por favor ingrese su número de documento");
        errorf=1;
    }
    else if (!valdocumento(documentoval)){
        ocErrorform(documento,"Numero de documento no valido");
        errorf=1;
    }
    else{
        exitosform(documento);
    }
// Seccion de validacion de telefono
    if (telefonoval ==="") {
        ocErrorform(telefono, "Por favor ingrese su número de teléfono");
        errorf=1;
    }
    else if (!valnumero(telefonoval)){
        ocErrorform(telefono,"Numero celular no valido");
        errorf=1;
    }
    else{
        exitosform(telefono);
    }
// Seccion de validacion de Email
    if (emailval ===""){
        ocErrorform(email,"Por favor ingrese su email");
        errorf=1;
    }
    else if (!valEmail(emailval)){
        ocErrorform(email,"Email no valido");
        errorf=1;
    }
    else{
        exitosform(email);
    }
// Seccion de validación de password
    if (password1val ===""){
        ocErrorform(password1,"no se puede dejar password en blanco");
        errorf=1;
    }
    else if (!valPassword(password1val)){
        ocErrorform(password1,"Error!!,password no cumple regla regular");
        errorf=1;
    }
    else{
        exitosform(password1);
    }
    // Seccion de revalidación de password 2da vez.
    if (password2val ===""){
        ocErrorform(password2,"no se puede dejar password en blanco");
        errorf=1;
    }
    else if ( password1val!==password2val){
        ocErrorform(password2,"error contraseñas no coinciden");
        errorf=1;
    }
    else{
        exitosform(password2);
    }
// Seccion de validación de ingreso exitoso sin errores
    if (errorf==0){
        registro.addEventListener('click',function(){
            
            swal("REGISTRO USUARIO EXITOSO !!", "Click OK para continuar", "success");
            
        })
    }
    return false;
    function ocErrorform (input, message){
    const formControl=input.parentElement;
    const small=formControl.querySelector("small");
    formControl.className="form-control error";
    small.innerText =message; 
    }
    function exitosform (input){
        const formControl=input.parentElement;
            formControl.className="form-control success";
        }
    function valEmail(email){
    return /^[a-z0-9_\.-]+@[a-z\.-]+\.[a-z\.]{2,6}$/.test(email);
    }
    //La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico.
    function valPassword(password1){
        return /^(?=.\d)(?=.[\u0021-\u002b\u003c-\u0040])(?=.[A-Z])(?=.[a-z])\S{8,16}$/.test(password1);
    }
    function valnumero (telefono){
        return  /^[0-9]+$/.test(telefono);
    }
    function valdocumento (documento){
        return  /^[0-9]+$/.test(documento);
    }
}
//Mostrar contraseña
function mostrarSeña(){
    var tipo = document.getElementById("password");
    var tipo2=document.getElementById("password2");
    if(tipo.type == "password"){
        tipo.type = "text";
    }else{
        tipo.type = "password";
    }
    //
    if(tipo2.type == "password"){
        tipo2.type = "text";
    }else{
        tipo2.type = "password";
    }

}