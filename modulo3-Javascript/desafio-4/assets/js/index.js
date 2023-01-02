const deptos = [
    {
        "nombre": "Casa de Campo",
        "descripcion": "Un lugar ideal para descansar",
        "scr": "./assets/img/casa_de_campo.png",
        "habitaciones":2,
        "metros": 170
    },

    {
        "nombre": "Casa de Playa",
        "descripcion": "Despierta tus dias oyendo el Oceano",
        "scr": "./assets/img/casa_de_playa.png",
        "habitaciones":2,
        "metros": 130
    },

    {
        "nombre": "Casa en el Centro",
        "descripcion": "Ten cerca de tu todo lo que necesitas",
        "scr": "./assets/img/casa_en_centro.png",
        "habitaciones":1,
        "metros": 80
    },
    {
        "nombre": "Casa Rodante",
        "descripcion": "Convierte en un nómada del mundo sin salir de tu casa",
        "scr": "./assets/img/casa_rodante.png",
        "habitaciones":1,
        "metros": 6
    },
    {
        "nombre": "Departamento",
        "descripcion": "Desde las alturas todo se ve mejor",
        "scr": "./assets/img/departamento.png",
        "habitaciones":3,
        "metros": 200
    },
    {
        "nombre": "Mansión",
        "descripcion": "Un lugar ideal para descansar",
        "scr": "./assets/img/mansion.png",
        "habitaciones":5,
        "metros": 500
    }
]

const main = document.getElementById("main_card")
const cant_habitaciones = document.getElementById("cant_habit")
const metrosDesde = document.getElementById("mts_desde")
const metrosHasta = document.getElementById("mts_hasta")
const buscar = document.getElementById("btn_buscar")
const textTotal = document.getElementById("total")

var total 

function setTotal(arreglo){
    textTotal.innerText = arreglo.length

}

function alterMain(arreglo){
    deptosHTML = arreglo.map( val => `
    <div class="container-card">
        <div class="card" style="width: 18rem;">
        <img src="${val.scr}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${val.nombre}</h5>
                <p class="card-data">Cuartos: ${val.habitaciones} - Metros: ${val.metros}</p>
                <p class="card-text">${val.descripcion}</p>
        </div>
      </div>
    </div>
    `)
  
    let articles = deptosHTML.join("")
    main.innerHTML = articles
}

function init(){
    alterMain(deptos)
    setTotal(deptos)
}
function filtroHabitacion(arreglo){
    num_habit   = cant_habitaciones.value
    if(!num_habit){
        alert("Debe ingresar la cantidad de habitaciones")
        return
    }
    arreglofiltrado = arreglo.filter(val => val.habitaciones === +num_habit)
    return arreglofiltrado
}

function filtroMetros(arreglo){

    MtsDesde = metrosDesde.value
    MtsHasta = metrosHasta.value
    if(!MtsDesde || !MtsHasta){
        alert("Debe ingresar todos los campos de metros")
        return
    }

    arreglofiltrado = arreglo.filter(val => val.metros >= +MtsDesde && val.metros <= +MtsHasta)
    return arreglofiltrado
}


buscar.addEventListener('click', function(){
    filtrados = filtroHabitacion(deptos)
    filtrados = filtroMetros(filtrados)

    alterMain(filtrados)
    setTotal(filtrados)
})

init()
//let nombreymetros = deptos.map(val=> `${val.nombre} ${val.metros}` ) 
//console.log(deptos)
//console.log(nombreymetros)

