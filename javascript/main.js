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
    for (i = 0; i < parseInt(this.innerHTML); i++) {
        lis[i].classList.add("active")
    }
    rate = parseInt(this.innerHTML);
    number.innerHTML = rate
}
lis.map(function (e) {
    e.addEventListener("click", rating)
})

submit.addEventListener("click", function () {
    card.style.display = "none";
    thank.style.display = "flex";

})