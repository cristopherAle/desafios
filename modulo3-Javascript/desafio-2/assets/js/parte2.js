function sumar(){

  
    let suma = Number(document.getElementById("guitarra1").value) + Number(document.getElementById("guitarra2").value) + Number(document.getElementById("guitarra3").value)
  
    console.log(document.getElementById("guitarra1").value)
    return suma
}


document.getElementById("submit").addEventListener("click", ()=>{

    
    let suma = sumar()
   if (suma>10){
   
        document.getElementById("submit").className = "btn btn-danger text "
        alert("Llevas demasiadas Guitarras")
   }
   

   document.getElementById("submit").className = "btn btn-success text "
   document.getElementById("total").innerText = suma

})