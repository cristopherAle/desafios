const clave1 = "911"
const clave2 = "714"

document.getElementById("checkearClave").addEventListener("click", ()=>{
    let resultado  = document.getElementById("resultado")
    
    const valor1 = document.getElementById("numero1").value 
    const valor2 = document.getElementById("numero2").value 
    const valor3 = document.getElementById("numero3").value 

    const clave = valor1 + valor2 + valor3

    switch(clave){
        case clave1:
            document.getElementById("resultado").className = "text-success text "
            resultado.innerText = "Password 1 Correcta"
            break
        case clave2:
            document.getElementById("resultado").className = "text-success text "
            resultado.innerText = "Password 2 Correcta"
            break
        default:
            document.getElementById("resultado").className = "text-danger text "
            resultado.innerText = "Password Incorrecta"
            break
    }
})