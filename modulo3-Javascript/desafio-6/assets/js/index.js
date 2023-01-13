const arrayDivisas =["uf", "ivp", "dolar", "dolar_intercambio", "euro", "ipc", "utm", "imacec", "tpm", "libra_cobre", "tasa_desempleo", "bitcoin"]

const SelectDivisa = document.getElementById("seleccionDivisa") //Input donde seleccion divisa
const TextResultado = document.getElementById("resultado") // h1 donde mostrare el monto convertido
const ButtonConvert = document.getElementById("convertirDivisa") // Boton que presiono para convertir
const InputConvertir = document.getElementById("montoCLP") //Text de Ingreso de Montos
const chartContainer = document.getElementById("chartContainer") // Grafico

function crearChart(objectdata){
    chartContainer.innerHTML ='<canvas id="chart"></canvas>'
    canvas = document.getElementById("chart")

        const data = {
            type: "line",
            data: {
                labels:objectdata.dates,
                datasets:[
                    {  
                        label: 'Ultimos 10 dias',
                        data: objectdata.data,
                        fill: false,
                        bordercolor: 'rgb(128, 128, 231)',
                        tension:0.1
                    }
                ]

            }
        }
        new Chart(canvas,data)
}

async function convertMoney(){
    try {
        divisa = SelectDivisa.value 
        result = await fetch(`https://mindicador.cl/api/${divisa}`)
        
        resultJson = await result.json()
        divisaCLP = resultJson.serie[0].valor
        convertCLP = + InputConvertir.value
        console.log(divisaCLP,convertCLP)

        TextResultado.innerText = (convertCLP/divisaCLP).toFixed(2)

        const ultimosDias ={}

        ultimosDias.data = resultJson.serie.slice(0,10).map(val => val.valor)
        ultimosDias.dates = resultJson.serie.slice(0,10).map(val => dayjs(val.fecha).format('YYYY-MM-DD'))
        crearChart(ultimosDias)

    } catch (error) {
        
    }
}

selectHTML = SelectDivisa.innerHTML

ButtonConvert.addEventListener('click', convertMoney)


arrayDivisas.forEach(val => selectHTML +=`
    <option value=${val}>${val}</option>    
`)
SelectDivisa.innerHTML = selectHTML

