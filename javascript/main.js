const lis = Array.from(document.querySelectorAll("li"));
const number = document.querySelector(".number");
const submit = document.querySelector(".submit");
const card = document.querySelector(".card");
const thank = document.querySelector(".thank")
let rate;
function rating() {
    for (let i = 0; i < lis.length; i++) {
        if (lis[i].classList.contains('active')) {
            lis[i].classList.remove('active');
        }
    }
    if (this.innerHTML == 1) {
        this.classList.add("active");
        rate = 1;
        number.innerHTML = rate;
    } else if (this.innerHTML == 2) {
        this.classList.add("active");
        rate = 2;
        number.innerHTML = rate;
    } else if (this.innerHTML == 3) {
        this.classList.add("active");
        rate = 3;
        number.innerHTML = rate;
    } else if (this.innerHTML == 4) {
        this.classList.add("active");
        rate = 4;
        number.innerHTML = rate;
    } else if (this.innerHTML == 5) {
        this.classList.add("active");
        rate = 5;
        number.innerHTML = rate;
    }
}
lis.map(function (e) {
    e.addEventListener("click", rating)
})

submit.addEventListener("click", function () {
    card.style.display = "none";
    thank.style.display = "flex";

})