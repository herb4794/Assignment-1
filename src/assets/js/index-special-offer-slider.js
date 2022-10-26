const productContainers = document.querySelector(".special-offer-slider .product-container");
const rightBtn = document.querySelector(".special-offer-slider .product .right-btn");
const lefttBtn = document.querySelector(".special-offer-slider .product .left-btn");

// Prev Button
lefttBtn.addEventListener("click", () => {
    productContainers.scrollLeft -= 500;
});

// Next Button
rightBtn.addEventListener("click", () => {
    productContainers.scrollLeft += 500;
});

// Mouse pointer slides automatically
// let i = 0;

// // When the mouse pointer slides to the left
// lefttBtn.addEventListener('mouseover', (event) => {
//     i = 0;
//     for (i = 0 ; i < 15 ; i++) {
//         productContainers.scrollLeft -= i*40;
//     }
// });

// // When the mouse pointer slides to the right
// rightBtn.addEventListener('mouseover', (event) => {
//     i = 0;
//     for (i = 0 ; i < 15 ; i++) {
//         productContainers.scrollLeft += i*40;
//     }
// });

