const precio = 12990
document.getElementById("selectColor").addEventListener("change", function(){
   // alert ("cambio el color")
})


document.getElementById("btnTotal").addEventListener("click", function(){
    const cantidad = document.getElementById("cantidad").value
    const color = document.getElementById("selectColor").value

    const preciofinal = cantidad * precio;

console.log(cantidad)
console.log(preciofinal)
console.log(color)

    document.getElementById("preciofinal").innerHTML = '<h5>' + preciofinal + '</h5>'
    document.getElementById("cantidad1").innerHTML = "<h5>" + cantidad + "</h5>"
    document.getElementById("colorCircle").style.backgroundColor = color
    //document.getElementById("PoleraColor").innerHTML = '<img src="assets/img/' + color + '.jpg ' + 'class="card-img-top" id="PoleraColor" alt="Polera">'
    document.getElementById("PoleraColor").src= "./assets/img/" + color + ".jpg"
    
    //document.getElementById("color").innerText = color
    //document.getElementById("cantidad")
    //document.getElementById("colorCircle")



})
