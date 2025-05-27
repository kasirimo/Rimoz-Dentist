const stars = document.getElementById("star1");
const starCont = document.querySelector(".star-container");

let count = 1;

do {
    count++;
    starCont.insertAdjacentHTML("beforeend", `<img src="assets/star-152151_1280.png" alt="star" class="img-fluid" style="width: 20px; height: auto;" id="star1" />`)
} while (count < 4);

count = 1;

const star2 = document.getElementById("star2");
const starCont2 = document.querySelector(".star-container2");

do {
    count++;
    starCont2.insertAdjacentHTML("beforeend", `<img src="assets/star-152151_1280.png" alt="star" class="img-fluid" style="width: 20px; height: auto;" id="star1" />`);
} while (count < 5);

count = 1;

const star3 = document.getElementById("star3");
const starCont3 = document.querySelector(".star-container3");

do {
    count++;
    starCont3.insertAdjacentHTML("beforeend", `<img src="assets/star-152151_1280.png" alt="star" class="img-fluid" style="width: 20px; height: auto;" id="star1" />`);
} while (count < 5);