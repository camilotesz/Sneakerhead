
let corpo = document.querySelector('.container2')

function filtro(marca){
    let busca = document.querySelector('.busca_formato')
    console.log(busca.value)
    
        if(busca.value === marca){
            let imagem = document.querySelector(`.${marca}`)
            corpo.appendChild(imagem)
            
            if(marca === 'adidas'){
                let elementosRemover = document.querySelectorAll('.nike')
                elementosRemover.forEach(elemento => {
                elemento.parentNode.removeChild(elemento);
                });
                elementosRemover = document.querySelectorAll('.balenciaga')
                elementosRemover.forEach(elemento => {
                elemento.parentNode.removeChild(elemento); 
                });
                
            } else if(marca === 'nike'){
                let elementosRemover = document.querySelectorAll('.adidas')
                elementosRemover.forEach(elemento => {
                elemento.parentNode.removeChild(elemento);
                });
                elementosRemover = document.querySelectorAll('.balenciaga')
                elementosRemover.forEach(elemento => {
                elemento.parentNode.removeChild(elemento); 
                });
            }
            
            
                
            
            
        } 
            
        
}
