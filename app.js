const rates = document.querySelectorAll('.rate')
const submits = document.getElementsByClassName('submit')
const page1 = document.getElementsByClassName('page1')
const page2 = document.getElementsByClassName('page2')
const rated = document.querySelector('.page2 .rated')

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        removeActiveClasses()
        rate.classList.add("active");
    })
})

function removeActiveClasses() {
    rates.forEach((rate) => {
        rate.classList.remove("active")
    })
}

function myFunction() {
  page1[0].style.display = "none";
  page2[0].style.display = "flex";
}

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rated.innerHTML = `You selected ${rate.innerHTML} out of 5`
    })
})
