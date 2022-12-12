

let closePageButton = document.getElementsByClassName("close-page-button")[0]
let categoriesPoint = document.getElementsByClassName("categories-point")
let lineCategories = document.getElementsByClassName("line-categories")
let categoriesP = document.getElementsByClassName("categories-p")
let addDataSection = document.getElementsByClassName("add-data-section")
let prevSectionButton = document.getElementsByClassName("prev-section-button")
let nextSectionButton = document.getElementsByClassName("next-section-button")



closePageButton.addEventListener("click", (e) => {

    window.history.back()
})


for (let i = 0; i < categoriesPoint.length; i++) {

    categoriesPoint[i].addEventListener("click", (e) => {
        e.preventDefault()

        // lineCategories[i - 1].style.border = "none"
        // lineCategories[i].style.borderBottom = "2px solid rgb(53, 51, 46)"

        // categoriesP[i - 1].style.color = "rgb(53, 51, 46, 0.5)"
        // categoriesP[i].style.color = "rgb(53, 51, 46)"

        for (let index of lineCategories) {
            index.style.border = "none"
        }

        for (let index of categoriesP) {
            index.style.color = "rgb(53, 51, 46, 0.5)"
        }

        for (let index of addDataSection) {
            index.style.display = "none"
        }

        lineCategories[i].style.borderBottom = "2px solid rgb(53, 51, 46)"
        categoriesP[i].style.color = "rgb(53, 51, 46)"
        addDataSection[i].style.display = "flex"



    })


}

for (let i = 0; i < nextSectionButton.length; i++) {

    nextSectionButton[i].addEventListener("click", (e) => {
        addDataSection[i + 1].style.display = "flex"
        addDataSection[i].style.display = "none"

        for (let index of lineCategories) {
            index.style.border = "none"
        }

        for (let index of categoriesP) {
            index.style.color = "rgb(53, 51, 46, 0.5)"
        }

        lineCategories[i + 1].style.borderBottom = "2px solid rgb(53, 51, 46)"
        categoriesP[i + 1].style.color = "#35332e"

        categoriesPoint[i + 1].scrollLeft = 0
    })
}


for (let i = 0; i < prevSectionButton.length; i++) {

    prevSectionButton[i].addEventListener("click", (e) => {
        addDataSection[i - 1].style.display = "flex"
        addDataSection[i].style.display = "none"


        for (let index of lineCategories) {
            index.style.border = "none"
        }

        for (let index of categoriesP) {
            index.style.color = "rgb(53, 51, 46, 0.5)"
        }

        lineCategories[i - 1].style.borderBottom = "2px solid rgb(53, 51, 46)"
        categoriesP[i - 1].style.color = "#35332e"
    })

}

let checkedOptionP = document.getElementsByClassName("checked-option-p")
let checkedOption = document.getElementsByClassName("checked-option")
let inputRadio = document.getElementsByClassName("input-radio")

let checkedOptionP2 = document.getElementsByClassName("checked-option-p-2")
let checkedOption2 = document.getElementsByClassName("checked-option-2")
let inputRadio2 = document.getElementsByClassName("input-radio-2")


for (let i = 0; i < checkedOptionP.length; i++) {

    checkedOptionP[i].addEventListener("click", (e) => {
        e.preventDefault()

        for (let index of checkedOptionP) {
            index.style.backgroundColor = ""
        }

        for (let index of checkedOption) {
            index.style.visibility = ""
        }

        for (let index of inputRadio) {
            index.checked = false
        }

        checkedOptionP[i].style.backgroundColor = "#8E8C8C"
        checkedOption[i].style.visibility = "visible"
        inputRadio[i].checked = true
    })
}

for (let i = 0; i < checkedOptionP2.length; i++) {

    checkedOptionP2[i].addEventListener("click", (e) => {
        e.preventDefault()

        for (let index of checkedOptionP2) {
            index.style.backgroundColor = ""
        }

        for (let index of checkedOption2) {
            index.style.visibility = ""
        }

        for (let index of inputRadio2) {
            index.checked = false
        }

        checkedOptionP2[i].style.backgroundColor = "#8E8C8C"
        checkedOption2[i].style.visibility = "visible"
        inputRadio2[i].checked = true
    })
}

