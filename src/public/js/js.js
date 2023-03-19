addEventListener("DOMContentLoaded" , () => {

    const contadores = document.querySelectorAll(".number")
    const velocidad = 800

    const animarContadores = () => {
        for (const contador of contadores){
            const acutalizar_contador = () => {
                let cantidad_maxima = +contador.dataset.cantidadTotal,
                valor_actual = +contador.innerText,
                incremento = cantidad_maxima / velocidad
                if (valor_actual < cantidad_maxima){
                    contador.innerText = Math.ceil(valor_actual + incremento)
                    setTimeout(acutalizar_contador,5)
                
                }else{
                    contador.innerText = cantidad_maxima
                }
            }
            acutalizar_contador()
        }
    }
    
    //IntersectionObserver

    const mostrarContadores = elementos => {
        elementos.forEach(elemento => {
            if(elemento.isIntersecting){
                elemento.target.classList.add("animar")
                elemento.target.classList.remove("ocultar")
                setTimeout(animarContadores, 300)
            }
        });
    }
    const obersver = new IntersectionObserver(mostrarContadores,{
        threshold: 0.5
    })
    const elementosHTML = document.querySelectorAll(".cont")
    elementosHTML.forEach(elementoHTML =>{
        obersver.observe(elementoHTML)
    })
})

