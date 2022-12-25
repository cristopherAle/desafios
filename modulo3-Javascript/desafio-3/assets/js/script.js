var color
document.addEventListener("keydown", function(event){
    switch(event.key){
        case "a":
            color="blue"
            document.getElementById('instruccion').innerHTML = "Selecciono el color Azul"
            break
        case "s":
            color="red"
            document.getElementById('instruccion').innerHTML = "Selecciono el color Rojo"
            break
        case "d":
            color="yellow"
            document.getElementById('instruccion').innerHTML = "Selecciono el color Amarillo"
            break
        default:
            //color = null
            color = "#" + Math.floor(Math.random()*16777215).toString(16);
            document.getElementById('instruccion').innerHTML = "Selecciono un color Aleatoreo"
            break        
    }
    console.log(color)
 
  })
document.getElementById('caja1').addEventListener("click", function(event){
    event.target.style.backgroundColor = color //"'" + color + "'"
})
document.getElementById('caja2').addEventListener("click", function(event){
    event.target.style.backgroundColor = color
})
document.getElementById('caja3').addEventListener("click", function(event){
    event.target.style.backgroundColor = color
})
document.getElementById('caja4').addEventListener("click", function(event){
    event.target.style.backgroundColor = color
})
 



    //event.target.style.backgroundColor = color

