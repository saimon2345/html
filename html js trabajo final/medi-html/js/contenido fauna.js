function validainputs(){
let email=document.getElementById("email");
let password=document.getElementById("password");
let ingreso=document.getElementById("login");
let emailval=email.value.trim();
let passwordval=password.value.trim();
let passwordok="a12345";//contraseño de ingreso
var errorf=0; // variable de control de ingreso
//seccion de validacion email
if(emailval===""){
    ocErrorform(email,"pr favor ingrese su email");
    errorf=1;  // activa error
}
else if(!valEmail(emailval)){
    ocErrorform(email,"Email no valido...");
    errorf=1; // activa error
}
else{
    exitosform(email);
}
//seccion validacion emailpassword
if(passwordval===""){
    ocErrorform(password,"por favor ingrese su contraseña");
    errorf=1; //activa error
}
else if(passwordval != passwordok){
    ocErrorform(password,"contraseña incorrecta");
    errorf=1; //activa error
}
else {
    exitosform(password);
}
//secccion de validacion ingreso exitoso
if(errorf==0){
    ingreso.addEventListener("click",function() {
        swal("ACCESO PERMITIDO..A PLATAFORMA","CLICK OK para continuar","success");
    })
}

return false;
//seccion de definicion de funciones
//funcion error
function ocErrorform(input,message){
    let formControl=input.parentElement;
    let small=formControl.querySelector("small");
    formControl.className="form-control error";
    small.innerText=message; // mensaje de error al usuario
}
// funcion de ingreso exitoso
function exitosform(input){
    let formControl=input.parentElement;
    formControl.className="form-control success";
}
//expresion regular para validar email 
//que acepte letras minusculas,numeros,guion bajo,punto,simbolo arroba,guion al medio que contengan,as de 6 caracteristicas
function valEmail(email){
    return /^[a-z0-9_\.-]+@[a-z\.-]+\.[a-z\.]{2,6}$/.test(email);
}
}
//seccion mostrar contraseña
function mostrarSeña(){
    var tipó=document.getElementById("password");
    if(tipo.type=="password"){
        tipo.type="text"; //aca se muestra contraseña
    }else{
        tipo.typr="password"; // aca se vuelve a ocultar
    }
}




