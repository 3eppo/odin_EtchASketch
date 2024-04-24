function grid(x=4){
    
    empty(container);
    
    for(let j = 0; j<=(x-1);j++){
        const subcontainer=document.createElement('div')
        subcontainer.classList.add('subcontainer');
        
        for(let i = 0; i<=(x-1);i++){
            
            const griddiv = document.createElement('div');
            griddiv.classList.add('griddiv');
            
            griddiv.addEventListener('mouseover',()=>{
                griddiv.style.backgroundColor='red';
            })
            
            subcontainer.appendChild(griddiv);
        }
        container.appendChild(subcontainer);
    }
    
}

function empty(element){
    while(element.firstElementChild){
        element.firstElementChild.remove();
    }
}

const container = document.querySelector('#container');
grid();

const btn = document.querySelector('#btn')
btn.addEventListener('click',()=>{
    const userInput = prompt('Bitte geben Sie eine Zahl zwischen 1 und 100 ein:');
    
    if (userInput !== null &&
        !isNaN(userInput) && 
        userInput>=1 && 
        userInput<=100) {
        
            const number = parseInt(userInput, 10); // Die Eingabe in eine Ganzzahl konvertieren

            grid(number); // Die Funktion grid() aufrufen und die eingegebene Zahl übergeben

    } else {
        alert('Ungültige Eingabe! Bitte geben Sie eine Zahl zwischen 1 und 100 ein.');
    }    
});