
// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal. Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile. Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
// MILESTONE 3
// Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

// creo l'array immagini
const imgArray = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
]

// collego l'elemento container
const container = document.querySelector('.container');

// creo il ciclo per prelevare gli elementi dall'array
for(let i = 0; i < imgArray.length; i++){
    let imgItem = imgArray[i];
    console.log(imgItem);

    // creo gli elementi box-img dove inserire l'immagine all'interno dell'elemento container
    let boxImg = `
        <div class="box-img">
            <img src="${imgItem}" alt="">
        </div>`;

    // inserisco il div.box-img all'interno del div.container
    container.innerHTML += boxImg;

}

// seleziono gli elementi in pagina
const boxes = document.getElementsByClassName('box-img');
console.log(boxes);

let activeImg = 0;

boxes[activeImg].classList.add('active');
console.log(boxes[0]);

// creo il button per attivare e disattivare le immagini
const nextImg = document.querySelector('.next-img');
const prevImg = document.querySelector('.prev-img');

nextImg.addEventListener('click',
    function(){

        // rimuovo il bug di fine immagine
        if(activeImg < imgArray.length -1){
        // cacello l'active dall'elemento attivo
        boxes[activeImg].classList.remove('active');
        // do il valore + 1 ad activeimg ogni click
        activeImg = activeImg + 1;

        // aggiungo classe active
        boxes[activeImg].classList.add('active');

        }
    }
)

prevImg.addEventListener('click',
    function(){

        // rimuovo il bug di fine immagine
        if(activeImg > 0){
        // cacello l'active dall'elemento attivo
        boxes[activeImg].classList.remove('active');
        // do il valore - 1 ad activeimg ogni click
        activeImg = activeImg - 1;
        // aggiungo classe active
        boxes[activeImg].classList.add('active');

        }
    }
)


