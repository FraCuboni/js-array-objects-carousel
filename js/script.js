// Dato un array di oggetti letterali con: - url dell’immagine - titolo - descrizione
// Creare un carosello come nella foto allegata.
// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.   Al click dell’utente sulle frecce verso sinistra o destra, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso sinistra.
// BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
// BONUS 3:
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
// Buon lavoro e buon divertimento!

// Creare un carosello come nella foto allegata.
const images = [
    { 
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morales',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', },
    { 
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    { 
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", },
    { 
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', },
    { 
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',

     } ];

// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.   
// Al click dell’utente sulle frecce verso sinistra o destra, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

// collego l'elemento container
const container = document.querySelector('.box-img');
// collego elementi sottotitoli
const img = document.createElement('img')
const title = document.querySelector('.title')
const text = document.querySelector('.text')

// collego i figli img title e text al container
container.appendChild(img);
// collego bottoni
const nextButton = document.querySelector('.next-img')
const prevButton = document.querySelector('.prev-img')

let index = 0;



// creo una funzione per updatare il carosello all'interno dei bottoni
function updateCarosel(){
    img.setAttribute('src', images[index].image);
    title.textContent = images[index].title;
    text.textContent = images[index].text;
}

// ad ogni click del mouse l'immagine e il testo dovranno cambiare l'indice
// funzione pulsante next
nextButton.addEventListener('click',
    function(){
        if(index < images.length){
            index++;
            console.log(index);
            updateCarosel();
        }else{
            index=0;
            console.log(index);
            updateCarosel();
        }
    }
)

// funzione pulsante prev
prevButton.addEventListener('click',
    function(){
        if(index > 0){
            index++;
            console.log(index);
            updateCarosel();
        }else{
            index = images.length;
            console.log(index);
            updateCarosel();
        }
    }
)



























// // creo il ciclo per prelevare gli elementi dall'array
// for(let i = 0; i < imgArray.length; i++){
//     let imgItem = imgArray[i];
//     console.log(imgItem);

//     // creo gli elementi box-img dove inserire l'immagine all'interno dell'elemento container
//     let boxImg = `
//         <div class="box-img">
//             <img src="${imgItem}" alt="">
//         </div>`;

//     // inserisco il div.box-img all'interno del div.container
//     container.innerHTML += boxImg;

// }

// // seleziono gli elementi in pagina
// const boxes = document.getElementsByClassName('box-img');
// console.log(boxes);

// let activeImg = 0;

// boxes[activeImg].classList.add('active');
// console.log(boxes[0]);

// // creo il button per attivare e disattivare le immagini
// const nextImg = document.querySelector('.next-img');
// const prevImg = document.querySelector('.prev-img');

// nextImg.addEventListener('click',
//     function(){

//         // rimuovo il bug di fine immagine
//         if(activeImg < imgArray.length -1){
//         // cacello l'active dall'elemento attivo
//         boxes[activeImg].classList.remove('active');
//         // do il valore + 1 ad activeimg ogni click
//         activeImg = activeImg + 1;

//         // aggiungo classe active
//         boxes[activeImg].classList.add('active');

//         }
//     }
// )

// prevImg.addEventListener('click',
//     function(){

//         // rimuovo il bug di fine immagine
//         if(activeImg > 0){
//         // cacello l'active dall'elemento attivo
//         boxes[activeImg].classList.remove('active');
//         // do il valore - 1 ad activeimg ogni click
//         activeImg = activeImg - 1;
//         // aggiungo classe active
//         boxes[activeImg].classList.add('active');

//         }
//     }
// )


