const URL = "https://rickandmortyapi.com/api/character";
const caja = document.querySelector('#caja');
const main = document.querySelector('#main');
const TemplateCard = document.querySelector('#TemplateCard').content;
const fragment=document.createDocumentFragment();

caja.addEventListener('click', FechtApi(),FechtDesple());



function slecionar(rickmorty) {
    rickmorty.results.forEach(element => {
        const option=document.createElement('option');
        option.value=element.id;
        option.innerHTML=element.name;
        caja.appendChild(option); 
         })
         const opcion=document.createElement('option');
         opcion.innerHTML='All items';
         caja.appendChild(opcion);
         
        
}


function Card(rickmorty) { 
    caja.onclick = (event) => {
        event.preventDefault()
        let selecion =caja.selectedIndex;
            if (selecion===20) {
                main.innerHTML='';
                rickmorty.results.forEach(element => {
                    let cloneTemplate=document.importNode(TemplateCard, true);
                    cloneTemplate.querySelector('#imagen').setAttribute('src',  element.image);
                    cloneTemplate.querySelector('#imagen').setAttribute('alt',element.name);
                    cloneTemplate.querySelector('#nombre').textContent=element.name;
                    cloneTemplate.querySelector('#genero').textContent=element.gender;
                    fragment.appendChild(cloneTemplate);
                    main.appendChild(fragment);
                    
                });
                
            }
            else {
                main.innerHTML='';
                let cloneTemplate=document.importNode(TemplateCard, true);
                cloneTemplate.querySelector('#imagen').setAttribute('src',  rickmorty.results[selecion].image);
                cloneTemplate.querySelector('#imagen').setAttribute('alt',rickmorty.results[selecion].name);
                cloneTemplate.querySelector('#nombre').textContent=rickmorty.results[selecion].name;
                cloneTemplate.querySelector('#genero').textContent=rickmorty.results[selecion].gender;
                
                fragment.appendChild(cloneTemplate);
                main.appendChild(fragment);
           }
    }
   
        
    
}
function FechtDesple() {
    fetch(URL)
    .then(response => response.json())
    .then(selecionar=>{
        slecionar(selecionar)
    })
       
}
function FechtApi() {
    fetch(URL)
    .then(response => response.json())
    .then(nuevo=>{     
         Card(nuevo)
         
    })    
     
}



