var borde = false
                
document.getElementById("img_caratulapeces").addEventListener("click", function(){
   
    if(borde){
        this.className = "img_parte1"
        borde = false
    }else{
        this.className = "borde"
        borde = true
    }
})