//=============FUNCION  FORMULARIO HABILITAR BOTTON Y ALERTA MENSAJE=============================//
function habilitar(){
    validation1 = document.getElementById("validation01") .value;
    validation2 = document.getElementById("validation02") .value;
    validation3 = document.getElementById("validation03") .value;
    val = 0;

    if(validation1 == ""){
        val++;
    }
    if(validation2 == ""){
        val++;
    }
    if(validation3 == ""){
        val++;
    }
    if(val == 0){
        document.getElementById("btn").disabled = false;
    } else {
        document.getElementById("btn").disabled = true;
    }

}
document.getElementById("validation01").addEventListener("keyup", habilitar);
document.getElementById("validation02").addEventListener("keyup", habilitar);
document.getElementById("validation03").addEventListener("keyup", habilitar);
document.getElementById("btn").addEventListener("click", ()=>{
    Swal.fire({

        position: 'center',
        icon: 'success',
        title: 'Mensaje Enviado Correctamente',
        background: '#fff',
        timerProgressBar: true,
        showConfirmButton: true,
        color: '#d51869',
        timer: 2000
      })

})
//============================================================================//
