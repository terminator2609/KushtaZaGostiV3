let guestSection = document.getElementsByClassName("guest-section")[0]
let hostSection = document.getElementsByClassName("host-section")[0]
let roleList = document.getElementsByClassName("role-list")[0]
let closeMenuButton = document.getElementsByClassName("close-menu-button")[0]
let navMenuIcon = document.getElementsByClassName("nav-menu-icon")[0]
let navMenu = document.getElementsByClassName("nav-menu-phone")[0]
let questionButton = document.getElementsByClassName("fa-circle-question")
let definitionDiv = document.getElementsByClassName("definition")
let headerArray = ["НЕКА ПРИКЛЮЧЕНИЕТО ЗАПОЧНЕ", "ВАШЕТО УНИКАЛНО РЕВЮ", "ДА ПОРАБОТИМ И ВЪРХУ МЕДИЯТА", "ВАШАТА ЦЕНА", "СОЦИАЛНИ МРЕЖИ", "НАЙ-ИНТЕРЕСНАТА ЧАСТ", ""]
let nextButtons = document.getElementsByClassName("next-step")
let addObjectSections = document.getElementsByClassName("section-add")
let addObjectTitle = document.getElementById("addObject-title")
let reviewTextArea = document.getElementById("review")
let cataloguesSelectPhoto = document.getElementsByClassName("cataloguesSelectPhoto")
let removeAllSelectionCommand = document.getElementById("removeAllSelection")
let currentMonth = document.getElementById("current-month")
let currentNumberMonth = document.getElementById("current-number-month")
let currentDate = document.getElementById("current-date")
let dateNumber = document.getElementsByClassName("date-number")
let backButtons = document.getElementsByClassName("back-step")
let navACatalogues = document.getElementById("nav-catalogues")


for (let i = 0; i < definitionDiv.length; i++) {
    definitionDiv[i].style.display = "none"
}

for (let i = 1; i < addObjectSections.length; i++) {
    addObjectSections[i].style.display = "none"
}

navMenu.style.display = "none"

guestSection.style.display = "none"
hostSection.style.display = "none"


document.addEventListener("scroll", (e) => {



    if (window.scrollY > 0) {
        document.getElementById("nav-index").style.backgroundColor = "white"
        document.getElementById("nav-index").style.transition = "0.8s"
        document.getElementsByClassName("fa-solid")[0].style.color = "#6F6F6F"
        document.getElementsByClassName("translateEN")[0].style.color = "#6F6F6F"
        document.getElementsByClassName("logo-nav-1")[0].style.display = "none"
        document.getElementsByClassName("logo-nav-2")[0].style.display = "flex"
        document.getElementsByClassName("logo-nav-2")[0].style.top = "-30px"
    } else {
        document.getElementById("nav-index").style.background = "none"
        document.getElementsByClassName("fa-solid")[0].style.color = "#DCDFDE"
        document.getElementsByClassName("translateEN")[0].style.color = "#DCDFDE"
        document.getElementsByClassName("logo-nav-1")[0].style.display = "flex"
        document.getElementsByClassName("logo-nav-2")[0].style.display = "none"
    }

})



let roleButton = document.getElementById("role-button")
let roleText = document.getElementById("role-text")

roleButton.addEventListener("click", (e) => {
    e.preventDefault()

    if (roleButton.textContent === "Гост") {
        roleButton.textContent = "Домакин"
        roleText.textContent = "Гост"
        roleButton.style.border = "2px solid #545454"
        roleButton.style.color = "black"
        roleButton.style.backgroundColor = "white"
        hostSection.style.display = "none"
        guestSection.style.display = "none"
    } else {
        roleButton.textContent = "Гост"
        roleText.textContent = "Домакин"
        roleButton.style.border = "2px solid white"
        roleButton.style.color = "white"
        roleButton.style.background = "none"
        hostSection.style.display = "none"
        guestSection.style.display = "none"
    }
})

roleText.addEventListener("click", (e) => {
    e.preventDefault()

    if (roleText.textContent === "Домакин" && hostSection.style.display === "none") {
        hostSection.style.display = "block"
        guestSection.style.display = "none"
        roleList.style.marginLeft = "10px"
        roleText.style.fontSize = "40px"
        roleText.style.color = "white"
    } else if (roleText.textContent === "Домакин" && hostSection.style.display === "block") {
        hostSection.style.display = "none"
        guestSection.style.display = "none"
        roleList.style.marginLeft = "0px"
        roleText.style.fontSize = ""
        roleText.style.color = ""
    } else if (roleText.textContent === "Гост" && guestSection.style.display === "none") {
        hostSection.style.display = "none"
        guestSection.style.display = "block"
        roleList.style.marginLeft = "10px"
        roleText.style.fontSize = "40px"
        roleText.style.color = "white"
    } else {
        hostSection.style.display = "none"
        guestSection.style.display = "none"
        roleList.style.marginLeft = "0px"
        roleText.style.fontSize = ""
        roleText.style.color = ""
    }

    if (hostSection.style.display === "block" || guestSection.style.display === "block" && window.innerHeight < 850) {
        navMenu.style.overflow = "scroll"
    }
})

closeMenuButton.addEventListener("click", (e) => {
    e.preventDefault()

    navMenu.style.display = "none"


})

navMenuIcon.addEventListener("click", (e) => {
    e.preventDefault()

    navMenu.style.display = "flex"
})

for (let i = 0; i < questionButton.length; i++) {


    questionButton[i].addEventListener("click", (e) => {
        e.preventDefault()


        if (definitionDiv[i].style.display === "none") {
            definitionDiv[i].style.display = "flex"
        } else {
            definitionDiv[i].style.display = "none"
        }
    })
}

for (let i = 0; i < nextButtons.length; i++) {


    nextButtons[i].addEventListener("click", (e) => {
        e.preventDefault()

        addObjectTitle.textContent = headerArray[i + 1]
        addObjectSections[i].style.display = "none"
        addObjectSections[i + 1].style.display = "flex"

        if (document.getElementsByClassName("catalogues-select-villa")[0].style.display === "flex") {
            document.getElementsByTagName("main")[0].style.marginTop = "0%"
        }

    })
}

for (let i = 0; i < backButtons.length; i++) {

    backButtons[i].addEventListener("click", (e) => {
        e.preventDefault()

        addObjectTitle.textContent = headerArray[i]
        addObjectSections[i + 1].style.display = "none"
        addObjectSections[i].style.display = "flex"

        if (document.getElementsByClassName("social-media-info-villa")[0].style.display === "flex") {
            document.getElementsByTagName("main")[0].style.marginTop = "40%"
        }

    })
}

reviewTextArea.addEventListener("click", (e) => {
    e.preventDefault()

    reviewTextArea.cols = 40
    reviewTextArea.rows = 5
})

for (let i = 0; i < cataloguesSelectPhoto.length; i++) {


    removeAllSelectionCommand.addEventListener("click", (e) => {
        e.preventDefault()

        cataloguesSelectPhoto[i].className = "cataloguesSelectPhoto"
    })

    cataloguesSelectPhoto[i].addEventListener("click", (e) => {
        e.preventDefault()

        if (cataloguesSelectPhoto[i].className === "cataloguesSelectPhoto selectedCatalogues") {
            cataloguesSelectPhoto[i].className = "cataloguesSelectPhoto"
        } else {
            cataloguesSelectPhoto[i].className = "cataloguesSelectPhoto selectedCatalogues"
        }
    })


}

let counter = 1

calender()

function calender() {

    let month = ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"]

    let dateObject = new Date()

    currentMonth.textContent = month[dateObject.getMonth()]
    currentNumberMonth.textContent = `00${dateObject.getMonth() + 1}`
    currentDate.textContent = `0${dateObject.getDate()}.0${dateObject.getMonth() + 1}.${dateObject.getFullYear()}`

    function calenderLoop() {

        for (let i = 0; i < dateNumber.length; i++) {

            if (i === 0) {
                dateObject.setDate(1)
            }

            if (dateObject.getDay() > 1 && i === 0 || dateObject.getDay() === 0 && i === 0) {

                if (dateObject.getDay() === 0) {
                    // dateObject.setMonth(dateObject.getMonth() - 1)

                    if (dateObject.getMonth() - 1 === 0 || dateObject.getMonth() - 1 === 2 || dateObject.getMonth() - 1 === 4 || dateObject.getMonth() - 1 === 6 || dateObject.getMonth() - 1 === 7 || dateObject.getMonth() - 1 === 9 || dateObject.getMonth() - 1 === -1 || dateObject.getMonth() - 1 === 11) {
                        for (let b = 0; b < 6; b++) {
                            dateNumber[i].textContent = 26 + b
                            i++
                        }

                        i--
                    } else if (dateObject.getMonth() - 1 === 1) {

                        if (dateObject.getFullYear() % 4 === 0) {
                            for (let b = 0; b < 6; b++) {
                                dateNumber[i].textContent = 24 + b
                                i++
                            }

                            i--
                        } else {
                            for (let b = 0; b < 6; b++) {
                                dateNumber[i].textContent = 23 + b
                                i++
                            }

                            i--
                        }

                    } else {
                        for (let b = 0; b < 6; b++) {
                            dateNumber[i].textContent = 25 + b
                            i++
                        }

                        i--
                    }
                } else {

                    if (dateObject.getMonth() - 1 === 0 || dateObject.getMonth() - 1 === 2 || dateObject.getMonth() - 1 === 4 || dateObject.getMonth() - 1 === 6 || dateObject.getMonth() - 1 === 7 || dateObject.getMonth() - 1 === 9 || dateObject.getMonth() - 1 === -1 || dateObject.getMonth() - 1 === 11) {

                        let latestDay = 32 - dateObject.getDay()

                        for (let b = 1; b < dateObject.getDay(); b++) {
                            dateNumber[i].textContent = latestDay + b
                            i++
                        }

                        i--

                    } else if (dateObject.getMonth() - 1 === 1) {

                        if (dateObject.getFullYear() % 4 === 0) {

                            let latestDay = 30 - dateObject.getDay()

                            for (let b = 1; b < dateObject.getDay(); b++) {
                                dateNumber[i].textContent = latestDay + b
                                i++
                            }

                            i--
                        } else {

                            let latestDay = 29 - dateObject.getDay()

                            for (let b = 1; b < dateObject.getDay(); b++) {
                                dateNumber[i].textContent = latestDay + b
                                i++
                            }

                            i--
                        }

                    } else {

                        let latestDay = 31 - dateObject.getDay()

                        for (let b = 1; b < dateObject.getDay(); b++) {
                            dateNumber[i].textContent = latestDay + b
                            i++
                        }

                        i--
                    }
                }

            } else {

                if (dateObject.getMonth() === 0 || dateObject.getMonth() === 2 || dateObject.getMonth() === 4 || dateObject.getMonth() === 6 || dateObject.getMonth() === 7 || dateObject.getMonth() === 9 || dateObject.getMonth() === -1 || dateObject.getMonth() === 11) {
                    for (let b = 1; b <= 31; b++) {

                        if (b < 10) {
                            dateNumber[i].textContent = `0${b}`
                        } else {
                            dateNumber[i].textContent = b
                        }

                        i++
                    }

                    if (i >= 31 && i <= 41) {

                        let firstNumbersNewMonth = 42 - i

                        for (let b = 1; b <= firstNumbersNewMonth; b++) {

                            if (b < 10) {
                                dateNumber[i].textContent = `0${b}`
                            } else {
                                dateNumber[i].textContent = b
                            }

                            i++
                        }
                    }

                } else if (dateObject.getMonth() === 1) {

                    if (dateObject.getFullYear() % 4 === 0) {
                        for (let b = 1; b <= 29; b++) {

                            if (b < 10) {
                                dateNumber[i].textContent = `0${b}`
                            } else {
                                dateNumber[i].textContent = b
                            }

                            i++
                        }

                        if (i >= 29 && i <= 41) {

                            let firstNumbersNewMonth = 42 - i

                            for (let b = 1; b <= firstNumbersNewMonth; b++) {

                                if (b < 10) {
                                    dateNumber[i].textContent = `0${b}`
                                } else {
                                    dateNumber[i].textContent = b
                                }

                                i++
                            }
                        }

                    } else {
                        for (let b = 1; b <= 28; b++) {

                            if (b < 10) {
                                dateNumber[i].textContent = `0${b}`
                            } else {
                                dateNumber[i].textContent = b
                            }

                            i++
                        }

                        if (i >= 28 && i <= 41) {

                            let firstNumbersNewMonth = 42 - i

                            for (let b = 1; b <= firstNumbersNewMonth; b++) {

                                if (b < 10) {
                                    dateNumber[i].textContent = `0${b}`
                                } else {
                                    dateNumber[i].textContent = b
                                }

                                i++
                            }
                        }
                    }

                } else {
                    for (let b = 1; b <= 30; b++) {

                        if (b < 10) {
                            dateNumber[i].textContent = `0${b}`
                        } else {
                            dateNumber[i].textContent = b
                        }

                        i++
                    }

                    if (i >= 30 && i <= 41) {

                        let firstNumbersNewMonth = 42 - i

                        for (let b = 1; b <= firstNumbersNewMonth; b++) {

                            if (b < 10) {
                                dateNumber[i].textContent = `0${b}`
                            } else {
                                dateNumber[i].textContent = b
                            }

                            i++
                        }
                    }
                }

            }


        }
    }

    calenderLoop()


    let leftCalenderButton = document.getElementsByClassName("calender-left-button")
    let rightCalenderButton = document.getElementsByClassName("calender-right-button")

    leftCalenderButton[0].addEventListener("click", (e) => {
        e.preventDefault()

        dateObject.setMonth(dateObject.getMonth() - counter)

        calenderLoop()

    })

    rightCalenderButton[0].addEventListener("click", (e) => {
        e.preventDefault()

        dateObject.setMonth(dateObject.getMonth() + counter)

        calenderLoop()
    })

}
