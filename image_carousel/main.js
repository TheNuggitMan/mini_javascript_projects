const cars = ["./img/car-1.jpg", "./img/car-2.jpg", "./img/car-3.jpg", "./img/car-4.jpg", "./img/car-5.jpg", "./img/car-6.jpg", "./img/car-7.jpg", "./img/car-8.jpg", ];
let i = 0;

const carousel = document.getElementById('carouselBkg');

carousel.style.backgroundImage = `url(${cars[i]})`;

const buttons = document.querySelectorAll('.arrow');

buttons.forEach(button => {
    button.addEventListener('click', e => {
        if (button.classList.contains('arrow-left')){
            i--;
            if(i < 0){
                i = cars.length -1;
            }
            carousel.style.backgroundImage = `url(${cars[i]})`;
        }
        if (button.classList.contains('arrow-right')){
            i++;
            if(i > cars.length -1){
                i = 0;
            }
            carousel.style.backgroundImage = `url(${cars[i]})`;
        }
    })
})
