function redireccionar(){
    location.href="./principal.html";
}
$("#btnInicio").click(function(){
    if($("#txtUsername").val() == "admin" && $("#txtPass").val() == 123){
        redireccionar();
    }
    else{
        alert("Usuario y/o contraseña incorrectas");
    }
});   