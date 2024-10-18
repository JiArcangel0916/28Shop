// CODE FOR CHANGING CONTENTS OF NOTABLE PIECES
const images = document.querySelectorAll(".prodImg");
const title = document.querySelector("#pieceTitle");
const desc = document.querySelector("#notPiecesDesc");
const dots = document.querySelectorAll(".dot");
let titles = ["Hermes", "Patek Philippe", "Cartier", "Piaget", "Solitaire Ring"];
// let descriptions = ["Bag Siya", "Relo Siya", "Singsing Siya", "Palamuti", "K18YG Yellow Gold\nDiamond of 10 Carats\nSI - 2 Clarity K Color", "5 Carat Emerald Cut Diamond Ring (Middle)\n1.63 Carats (Side Diamond)"];
let slideIndex = 0;
showSlide(slideIndex);

function prev(){
    slideIndex--;
    if (slideIndex < 0){
        slideIndex = 4;
    } 
    showSlide(slideIndex);
}

function next(){
    slideIndex++;
    if (slideIndex > 4){
        slideIndex = 0;
    }
    showSlide(slideIndex);
}

function showSlide(slideIndex){
    title.classList.add("hidden");
    // desc.classList.add("hidden");

    images.forEach(image =>{
        image.classList.add("hidden");
    });

    setTimeout(() =>{
        let titleIndex = titles[slideIndex];
        // let descIndex = descriptions[slideIndex].replace(/\n/g, "<br>");

        title.innerHTML = titleIndex;
        // desc.innerHTML = descIndex;

        title.classList.remove("hidden");
        // desc.classList.remove("hidden"); 
        images[slideIndex].classList.remove("hidden");
    }, 100);

    for (i = 0; i < dots.length; i++){
        dots[i].classList.remove("active");
    }
    
    dots[slideIndex].classList.add("active");
}

function pick(slideIndex){
    showSlide(slideIndex);
}

// CODE FOR INTERSECTION OBSERVER
const cards = document.querySelectorAll('.card');
const offers = document.querySelectorAll('.offerings');

const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        entry.target.classList.toggle('show', entry.isIntersecting);
        if (entry.isIntersecting){
            observer.unobserve(entry.target);
        }
    })
}, {
    root: null,
    rootMargin: '-13% 0px -13% 0px',
    threshold: 0})

cards.forEach((card, index) =>{
    setTimeout(() =>{
        observer.observe(card);
    }, index * 800);
})

offers.forEach((offer, index) =>{
    setTimeout(() =>{
        observer.observe(offer);
    }, index * 800);
})