

let closePageButton = document.getElementsByClassName("close-page-button")[0]
let categoriesPoint = document.getElementsByClassName("categories-point")
let lineCategories = document.getElementsByClassName("line-categories")
let categoriesP = document.getElementsByClassName("categories-p")



closePageButton.addEventListener("click", (e) => {

    window.history.back()
})


for(let i = 0; i < categoriesPoint.length; i++) {
    categoriesPoint[i].addEventListener("click", (e) => {
        e.preventDefault()

        lineCategories[i - 1].style.border = "none"
        lineCategories[i].style.borderBottom = "2px solid rgb(53, 51, 46)"

        categoriesP[i - 1].style.color = "rgb(53, 51, 46, 0.5)"
        categoriesP[i].style.color = "rgb(53, 51, 46)"
    })
}
