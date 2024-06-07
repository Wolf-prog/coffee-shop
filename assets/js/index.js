function toggleMenu(){
    let menu = document.querySelector(".menu");
    menu.classList.toggle("hide-menu");
}

//animation
new WOW().init();


//sliders
$(".slider").owlCarousel({
    nav: false,
    dots: true,
    loop: true,
    autoplay: true,
    margin: 15,
    responsive: {
        0: {
            items: 2
        },
        768: {
            items: 4
        }
    }
});

let drinksPlace = document.querySelector("#drinks").querySelector(".grid-4");
let desertsPlace = document.querySelector("#deserts").querySelector(".grid-4");
let snacksPlace = document.querySelector("#snacks").querySelector(".grid-4");

let drinkCard = "";
let desertCard = "";
let snackCard = "";


function renderCards(data, cards, place){
    data.forEach(item => {
        cards += `
        <div class="product-card">
            <div class="img-wrapper">
                <img src="${item.img}" alt="">
            </div>
            <span class="type">${item.type}</span>
            <h3>${item.title}</h3>
            <span>${item.price} тг</span>
        </div>
`; 
        
    });

    place.innerHTML = cards;

}
renderCards(coffeeData, drinkCard, drinksPlace);
renderCards(desertData, desertCard, desertsPlace);
renderCards(snackData, snackCard, snacksPlace);