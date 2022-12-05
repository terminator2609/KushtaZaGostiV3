let guestSection = document.getElementsByClassName("guest-section")[0]
let hostSection = document.getElementsByClassName("host-section")[0]
let roleList = document.getElementsByClassName("role-list")[0]
let closeMenuButton = document.getElementsByClassName("close-menu-button")[0]
let navMenuIcon = document.getElementsByClassName("nav-menu-icon")[0]
let navMenu = document.getElementsByClassName("nav-menu-phone")[0]
let navACatalogues = document.getElementById("nav-catalogues")

let lineRoleHost = document.getElementsByClassName("line-role-host")
let lineRoleGuest = document.getElementsByClassName("line-role-guest")
let guestName = document.getElementsByClassName("guest-name")
let hostName = document.getElementsByClassName("host-name")
let roleText = document.getElementById("role-text")
let navigationText = document.getElementsByClassName("navigation-text")[0]
let myObjectImg = document.getElementsByClassName("object-item-img")


navMenu.style.display = "none"

guestSection.style.display = "none"
hostSection.style.display = "none"
lineRoleGuest[0].style.display = "none"



let cataloguesDiv = document.getElementsByClassName("catalogues-div")
let cataloguesImg = document.getElementsByClassName("catalogues-img")
let counter = 0
let eventCounter = 0
let scrollCounter = 0
let returnCounter = 0
let addingDiv = document.getElementsByClassName("adding-div")[0]
let deleteCatalogiesImg = document.getElementsByClassName("delete-catalog-img")

cataloguesDiv[0].addEventListener("scroll", (e) => {

    if (counter === 1) {

        cataloguesImg[counter].style.opacity = "1"
        cataloguesImg[counter - 1].style.opacity = "0.3"
        cataloguesImg[counter].style.width = "200px"
        cataloguesImg[counter - 1].style.width = "170px"
        deleteCatalogiesImg[counter].style.display = "block"
        deleteCatalogiesImg[counter - 1].style.display = "none"

        returnCounter = counter

    } else if ((counter - 1) % 5 === 0 && counter !== 0 && returnCounter <= counter) {

        eventCounter = (counter - 1) / 5

        if (cataloguesImg[eventCounter + 1]) {
            cataloguesImg[eventCounter + 1].style.opacity = "1"
            cataloguesImg[eventCounter].style.opacity = "0.3"
            cataloguesImg[eventCounter - 1].style.opacity = "0.3"
            cataloguesImg[eventCounter + 1].style.width = "200px"
            cataloguesImg[eventCounter].style.width = "170px"
            cataloguesImg[eventCounter - 1].style.width = "170px"
            deleteCatalogiesImg[eventCounter + 1].style.display = "block"
            deleteCatalogiesImg[eventCounter].style.display = "none"
            deleteCatalogiesImg[eventCounter - 1].style.display = "none"
        }

        returnCounter = counter

    } else if (counter === 0) {

        cataloguesImg[counter].style.opacity = "1"
        cataloguesImg[counter + 1].style.opacity = "0.3"
        cataloguesImg[counter].style.width = "200px"
        cataloguesImg[counter + 1].style.width = "170px"
        deleteCatalogiesImg[counter].style.display = "block"
        deleteCatalogiesImg[counter + 1].style.display = "none"

    }

    scrollCounter = cataloguesDiv[0].scrollLeft

    counter = scrollCounter / 40

    counter = Number(counter.toFixed(0))



    if (returnCounter > counter && (counter - 1) % 6 === 0 && counter !== 0) {

        returnCounter = counter


        eventCounter = (counter - 1) / 6


        if (cataloguesImg[eventCounter + 2]) {
            cataloguesImg[eventCounter + 1].style.opacity = "1"
            cataloguesImg[eventCounter + 2].style.opacity = "0.3"
            cataloguesImg[eventCounter].style.opacity = "0.3"
            cataloguesImg[eventCounter + 1].style.width = "200px"
            cataloguesImg[eventCounter + 2].style.width = "170px"
            cataloguesImg[eventCounter].style.width = "170px"
            deleteCatalogiesImg[eventCounter + 1].style.display = "block"
            deleteCatalogiesImg[eventCounter + 2].style.display = "none"
            deleteCatalogiesImg[eventCounter].style.display = "none"
        } else {
            cataloguesImg[eventCounter].style.opacity = "1"
            cataloguesImg[eventCounter - 1].style.opacity = "0.3"
            cataloguesImg[eventCounter].style.width = "200px"
            cataloguesImg[eventCounter - 1].style.width = "170px"
        }
    }


})


hostName[0].addEventListener("click", (e) => {
    e.preventDefault()

    lineRoleGuest[0].style.display = "none"
    lineRoleHost[0].style.display = "flex"
    roleText.textContent = "Домакин"
    hostSection.style.display = "none"
    guestSection.style.display = "none"
    navigationText.style.marginLeft = ""
    roleText.style.fontSize = ""
    roleText.style.color = ""
    navigationText.style.justifyContent = ""
})

guestName[0].addEventListener("click", (e) => {
    e.preventDefault()

    lineRoleGuest[0].style.display = "flex"
    lineRoleHost[0].style.display = "none"
    roleText.textContent = "Гост"
    hostSection.style.display = "none"
    guestSection.style.display = "none"
    navigationText.style.marginLeft = ""
    roleText.style.fontSize = ""
    roleText.style.color = ""
    navigationText.style.justifyContent = ""
})



roleText.addEventListener("click", (e) => {
    e.preventDefault()

    if (roleText.textContent === "Домакин" && hostSection.style.display === "none") {
        hostSection.style.display = "flex"
        guestSection.style.display = "none"
        navigationText.style.marginRight = "5%"
        navigationText.style.justifyContent = "flex-end"
        navigationText.style.marginTop = "60%"
        roleText.style.fontSize = "30px"
        roleText.style.color = "white"
    } else if (roleText.textContent === "Домакин" && hostSection.style.display === "block") {
        hostSection.style.display = "none"
        guestSection.style.display = "none"
        navigationText.style.marginRight = ""
        navigationText.style.justifyContent = ""
        navigationText.style.marginTop = ""
        roleText.style.fontSize = ""
        roleText.style.color = ""
    } else if (roleText.textContent === "Гост" && guestSection.style.display === "none") {
        hostSection.style.display = "none"
        guestSection.style.display = "block"
        navigationText.style.marginRight = "5%"
        navigationText.style.justifyContent = "flex-end"
        navigationText.style.marginTop = "60%"
        roleText.style.fontSize = "30px"
        roleText.style.color = "white"
    } else {
        hostSection.style.display = "none"
        guestSection.style.display = "none"
        navigationText.style.marginRight = ""
        navigationText.style.justifyContent = ""
        navigationText.style.marginTop = ""
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


if (window.innerHeight >= 600) {

    for (let i = 0; i < myObjectImg.length; i++) {
        myObjectImg[i].style.height = "330px"
    }

} else {
    for (let i = 0; i < myObjectImg.length; i++) {
        myObjectImg[i].style.height = "280px"
    }
}


let cataloguesMenuButton = document.getElementsByClassName("catalogues-menu-button")
let categoriesAddClouds = document.getElementsByClassName("categories-add-clouds")
let header = document.getElementsByTagName("header")[0]
let closeButtonClouds = document.getElementsByClassName("close-menu-button-clouds")
let calenderArticle = document.getElementsByClassName("calender")[0]


for (let i = 0; i < categoriesAddClouds.length; i++) {
    categoriesAddClouds[i].style.display = "none"
}

for (let i = 0; i < cataloguesMenuButton.length; i++) {
    cataloguesMenuButton[i].addEventListener("click", (e) => {
        e.preventDefault()


        categoriesAddClouds[i].style.display = "flex"


        window.scrollTo(top)


    })
}

for (let i = 0; i < closeButtonClouds.length; i++) {
    closeButtonClouds[i].addEventListener("click", (e) => {
        e.preventDefault()

        categoriesAddClouds[i].style.display = "none"
    })
}

function calender() {
    let fullDate = new Date()

    let allMonth = ["Ян", "февр", "март", "апр", "май", "юни", "юли", "авг", "септ", "окт", "ноем", "дек"]
    let currentMonth = fullDate.getMonth()
    let currentFullYear = fullDate.getFullYear()

    dateLogic()

    let counter = 0
    let counter2 = 1
    let counter3 = 0
    let returnCounter = 0

    window.addEventListener("scroll", (e) => {

        let counterSum = counter / 500

        counterSum = Number(counterSum.toFixed(0))


        if (counterSum > returnCounter) {
            counter3 = 0
        }

        if (categoriesAddClouds[3].style.display === "flex") {

            if (counter === 0) {
                fullDate.setMonth(0)
                fullDate.setFullYear(currentFullYear + 1)

                currentMonth = fullDate.getMonth()
                currentFullYear = fullDate.getFullYear()
                calenderArticle.style.height = "1000vh"

                dateLogic()

            } else if (counterSum !== 0 && counter3 === 0) {

                counter2++

                fullDate.setMonth(0)
                fullDate.setFullYear(currentFullYear + 1)

                currentMonth = fullDate.getMonth()
                currentFullYear = fullDate.getFullYear()

                calenderArticle.style.height = `${1000 * counter2}vh`

                dateLogic()

                counter3++
            }

            counter++

            returnCounter = counterSum
        }



    })

    function dateLogic() {
        for (let i = currentMonth; i <= 11; i++) {


            let divFullMonth = document.createElement("div")
            let monthYearBoard = document.createElement("h1")
            let daysDiv = document.createElement("div")
            let daysDiv2 = document.createElement("div")
            let daysDiv3 = document.createElement("div")
            let daysDiv4 = document.createElement("div")
            let daysDiv5 = document.createElement("div")
            let daysDiv6 = document.createElement("div")
            let daysUl = document.createElement("ul")
            let mondayLi = document.createElement("li")
            let turLi = document.createElement("li")
            let wesLi = document.createElement("li")
            let tuesLi = document.createElement("li")
            let fryLi = document.createElement("li")
            let satLi = document.createElement("li")
            let sunLi = document.createElement("li")

            let dateHolderUl1 = document.createElement("ul")
            let dateHolderli1 = document.createElement("li")
            let dateHolderli2 = document.createElement("li")
            let dateHolderli3 = document.createElement("li")
            let dateHolderli4 = document.createElement("li")
            let dateHolderli5 = document.createElement("li")
            let dateHolderli6 = document.createElement("li")
            let dateHolderli7 = document.createElement("li")

            let dateHolderUl2 = document.createElement("ul")
            let dateHolderli8 = document.createElement("li")
            let dateHolderli9 = document.createElement("li")
            let dateHolderli10 = document.createElement("li")
            let dateHolderli11 = document.createElement("li")
            let dateHolderli12 = document.createElement("li")
            let dateHolderli13 = document.createElement("li")
            let dateHolderli14 = document.createElement("li")

            let dateHolderUl3 = document.createElement("ul")
            let dateHolderli15 = document.createElement("li")
            let dateHolderli16 = document.createElement("li")
            let dateHolderli17 = document.createElement("li")
            let dateHolderli18 = document.createElement("li")
            let dateHolderli19 = document.createElement("li")
            let dateHolderli20 = document.createElement("li")
            let dateHolderli21 = document.createElement("li")

            let dateHolderUl4 = document.createElement("ul")
            let dateHolderli22 = document.createElement("li")
            let dateHolderli23 = document.createElement("li")
            let dateHolderli24 = document.createElement("li")
            let dateHolderli25 = document.createElement("li")
            let dateHolderli26 = document.createElement("li")
            let dateHolderli27 = document.createElement("li")
            let dateHolderli28 = document.createElement("li")

            let dateHolderUl5 = document.createElement("ul")
            let dateHolderli29 = document.createElement("li")
            let dateHolderli30 = document.createElement("li")
            let dateHolderli31 = document.createElement("li")
            let dateHolderli32 = document.createElement("li")
            let dateHolderli33 = document.createElement("li")
            let dateHolderli34 = document.createElement("li")
            let dateHolderli35 = document.createElement("li")

            let dateHolderUl6 = document.createElement("ul")
            let dateHolderli36 = document.createElement("li")
            let dateHolderli37 = document.createElement("li")
            let dateHolderli38 = document.createElement("li")
            let dateHolderli39 = document.createElement("li")
            let dateHolderli40 = document.createElement("li")
            let dateHolderli41 = document.createElement("li")
            let dateHolderli42 = document.createElement("li")


            dateHolderli1.className = "date-holder"
            dateHolderli2.className = "date-holder"
            dateHolderli3.className = "date-holder"
            dateHolderli4.className = "date-holder"
            dateHolderli5.className = "date-holder"
            dateHolderli6.className = "date-holder"
            dateHolderli7.className = "date-holder"
            dateHolderli8.className = "date-holder"
            dateHolderli9.className = "date-holder"
            dateHolderli10.className = "date-holder"
            dateHolderli11.className = "date-holder"
            dateHolderli12.className = "date-holder"
            dateHolderli13.className = "date-holder"
            dateHolderli14.className = "date-holder"

            dateHolderli15.className = "date-holder"
            dateHolderli16.className = "date-holder"
            dateHolderli17.className = "date-holder"
            dateHolderli18.className = "date-holder"
            dateHolderli19.className = "date-holder"
            dateHolderli20.className = "date-holder"
            dateHolderli21.className = "date-holder"


            dateHolderli22.className = "date-holder"
            dateHolderli23.className = "date-holder"
            dateHolderli24.className = "date-holder"
            dateHolderli25.className = "date-holder"
            dateHolderli26.className = "date-holder"
            dateHolderli27.className = "date-holder"
            dateHolderli28.className = "date-holder"

            dateHolderli29.className = "date-holder"
            dateHolderli30.className = "date-holder"
            dateHolderli31.className = "date-holder"
            dateHolderli32.className = "date-holder"
            dateHolderli33.className = "date-holder"
            dateHolderli34.className = "date-holder"
            dateHolderli35.className = "date-holder"

            dateHolderli36.className = "date-holder"
            dateHolderli37.className = "date-holder"
            dateHolderli38.className = "date-holder"
            dateHolderli39.className = "date-holder"
            dateHolderli40.className = "date-holder"
            dateHolderli41.className = "date-holder"
            dateHolderli42.className = "date-holder"



            mondayLi.textContent = "П"
            turLi.textContent = "В"
            wesLi.textContent = "С"
            tuesLi.textContent = "Ч"
            fryLi.textContent = "П"
            satLi.textContent = "С"
            sunLi.textContent = "Н"

            daysUl.appendChild(mondayLi)
            daysUl.appendChild(turLi)
            daysUl.appendChild(wesLi)
            daysUl.appendChild(tuesLi)
            daysUl.appendChild(fryLi)
            daysUl.appendChild(satLi)
            daysUl.appendChild(sunLi)

            daysDiv.appendChild(daysUl)


            divFullMonth.className = "full-month"
            monthYearBoard.className = "month-year-board"

            monthYearBoard.textContent = allMonth[i] + " " + currentFullYear

            daysRendering()
            divFullMonth.appendChild(monthYearBoard)
            divFullMonth.appendChild(daysDiv)
            divFullMonth.appendChild(daysDiv2)
            divFullMonth.appendChild(daysDiv3)
            divFullMonth.appendChild(daysDiv4)
            divFullMonth.appendChild(daysDiv5)
            divFullMonth.appendChild(daysDiv6)

            function daysRendering() {
                fullDate.setMonth(i)
                fullDate.setDate(1)

                if (fullDate.getDay() === 1) {
                    if (fullDate.getMonth() === 0 || fullDate.getMonth() === 2 || fullDate.getMonth() === 4 || fullDate.getMonth() === 6 || fullDate.getMonth() === 7 || fullDate.getMonth() === 9 || fullDate.getMonth() === 11) {

                        dateHolderli1.textContent = "01"
                        dateHolderli2.textContent = "02"
                        dateHolderli3.textContent = "03"
                        dateHolderli4.textContent = "04"
                        dateHolderli5.textContent = "05"
                        dateHolderli6.textContent = "06"
                        dateHolderli7.textContent = "07"

                        dateHolderli8.textContent = "08"
                        dateHolderli9.textContent = "09"
                        dateHolderli10.textContent = "10"
                        dateHolderli11.textContent = "11"
                        dateHolderli12.textContent = "12"
                        dateHolderli13.textContent = "13"
                        dateHolderli14.textContent = "14"

                        dateHolderli15.textContent = "15"
                        dateHolderli16.textContent = "16"
                        dateHolderli17.textContent = "17"
                        dateHolderli18.textContent = "18"
                        dateHolderli19.textContent = "19"
                        dateHolderli20.textContent = "20"
                        dateHolderli21.textContent = "21"

                        dateHolderli22.textContent = "22"
                        dateHolderli23.textContent = "23"
                        dateHolderli24.textContent = "24"
                        dateHolderli25.textContent = "25"
                        dateHolderli26.textContent = "26"
                        dateHolderli27.textContent = "27"
                        dateHolderli28.textContent = "28"

                        dateHolderli29.textContent = "29"
                        dateHolderli30.textContent = "30"
                        dateHolderli31.textContent = "31"

                        dateHolderli32.textContent = "32"
                        dateHolderli33.textContent = "33"
                        dateHolderli34.textContent = "34"
                        dateHolderli35.textContent = "35"

                        dateHolderli36.textContent = "36"
                        dateHolderli37.textContent = "37"
                        dateHolderli38.textContent = "38"
                        dateHolderli39.textContent = "39"
                        dateHolderli40.textContent = "40"
                        dateHolderli41.textContent = "41"
                        dateHolderli42.textContent = "42"


                        dateHolderli32.style.opacity = "0"
                        dateHolderli33.style.opacity = "0"
                        dateHolderli34.style.opacity = "0"
                        dateHolderli35.style.opacity = "0"
                        dateHolderli36.style.opacity = "0"
                        dateHolderli37.style.opacity = "0"
                        dateHolderli38.style.opacity = "0"
                        dateHolderli39.style.opacity = "0"
                        dateHolderli40.style.opacity = "0"
                        dateHolderli41.style.opacity = "0"
                        dateHolderli42.style.opacity = "0"




                        dateHolderUl1.appendChild(dateHolderli1)
                        dateHolderUl1.appendChild(dateHolderli2)
                        dateHolderUl1.appendChild(dateHolderli3)
                        dateHolderUl1.appendChild(dateHolderli4)
                        dateHolderUl1.appendChild(dateHolderli5)
                        dateHolderUl1.appendChild(dateHolderli6)
                        dateHolderUl1.appendChild(dateHolderli7)

                        dateHolderUl2.appendChild(dateHolderli8)
                        dateHolderUl2.appendChild(dateHolderli9)
                        dateHolderUl2.appendChild(dateHolderli10)
                        dateHolderUl2.appendChild(dateHolderli11)
                        dateHolderUl2.appendChild(dateHolderli12)
                        dateHolderUl2.appendChild(dateHolderli13)
                        dateHolderUl2.appendChild(dateHolderli14)

                        dateHolderUl3.appendChild(dateHolderli15)
                        dateHolderUl3.appendChild(dateHolderli16)
                        dateHolderUl3.appendChild(dateHolderli17)
                        dateHolderUl3.appendChild(dateHolderli18)
                        dateHolderUl3.appendChild(dateHolderli19)
                        dateHolderUl3.appendChild(dateHolderli20)
                        dateHolderUl3.appendChild(dateHolderli21)

                        dateHolderUl4.appendChild(dateHolderli22)
                        dateHolderUl4.appendChild(dateHolderli23)
                        dateHolderUl4.appendChild(dateHolderli24)
                        dateHolderUl4.appendChild(dateHolderli25)
                        dateHolderUl4.appendChild(dateHolderli26)
                        dateHolderUl4.appendChild(dateHolderli27)
                        dateHolderUl4.appendChild(dateHolderli28)

                        dateHolderUl5.appendChild(dateHolderli29)
                        dateHolderUl5.appendChild(dateHolderli30)
                        dateHolderUl5.appendChild(dateHolderli31)
                        dateHolderUl5.appendChild(dateHolderli32)
                        dateHolderUl5.appendChild(dateHolderli33)
                        dateHolderUl5.appendChild(dateHolderli34)
                        dateHolderUl5.appendChild(dateHolderli35)

                        dateHolderUl6.appendChild(dateHolderli36)
                        dateHolderUl6.appendChild(dateHolderli37)
                        dateHolderUl6.appendChild(dateHolderli38)
                        dateHolderUl6.appendChild(dateHolderli39)
                        dateHolderUl6.appendChild(dateHolderli40)
                        dateHolderUl6.appendChild(dateHolderli41)
                        dateHolderUl6.appendChild(dateHolderli42)

                        daysDiv.appendChild(dateHolderUl1)
                        daysDiv2.appendChild(dateHolderUl2)
                        daysDiv3.appendChild(dateHolderUl3)
                        daysDiv4.appendChild(dateHolderUl4)
                        daysDiv5.appendChild(dateHolderUl5)
                        daysDiv6.appendChild(dateHolderUl6)

                    } else if (fullDate.getMonth() === 1) {
                        if (fullDate.getFullYear() % 4 === 0) {

                            dateHolderli1.textContent = "01"
                            dateHolderli2.textContent = "02"
                            dateHolderli3.textContent = "03"
                            dateHolderli4.textContent = "04"
                            dateHolderli5.textContent = "05"
                            dateHolderli6.textContent = "06"
                            dateHolderli7.textContent = "07"

                            dateHolderli8.textContent = "08"
                            dateHolderli9.textContent = "09"
                            dateHolderli10.textContent = "10"
                            dateHolderli11.textContent = "11"
                            dateHolderli12.textContent = "12"
                            dateHolderli13.textContent = "13"
                            dateHolderli14.textContent = "14"

                            dateHolderli15.textContent = "15"
                            dateHolderli16.textContent = "16"
                            dateHolderli17.textContent = "17"
                            dateHolderli18.textContent = "18"
                            dateHolderli19.textContent = "19"
                            dateHolderli20.textContent = "20"
                            dateHolderli21.textContent = "21"

                            dateHolderli22.textContent = "22"
                            dateHolderli23.textContent = "23"
                            dateHolderli24.textContent = "24"
                            dateHolderli25.textContent = "25"
                            dateHolderli26.textContent = "26"
                            dateHolderli27.textContent = "27"
                            dateHolderli28.textContent = "28"
                            dateHolderli29.textContent = "29"

                            dateHolderli30.textContent = "30"
                            dateHolderli31.textContent = "31"
                            dateHolderli32.textContent = "32"
                            dateHolderli33.textContent = "33"
                            dateHolderli34.textContent = "34"
                            dateHolderli35.textContent = "35"
                            dateHolderli36.textContent = "36"
                            dateHolderli37.textContent = "37"
                            dateHolderli38.textContent = "38"
                            dateHolderli39.textContent = "39"
                            dateHolderli40.textContent = "40"
                            dateHolderli41.textContent = "41"
                            dateHolderli42.textContent = "42"


                            dateHolderli30.style.opacity = "0"
                            dateHolderli31.style.opacity = "0"
                            dateHolderli32.style.opacity = "0"
                            dateHolderli33.style.opacity = "0"
                            dateHolderli34.style.opacity = "0"
                            dateHolderli35.style.opacity = "0"
                            dateHolderli36.style.opacity = "0"
                            dateHolderli37.style.opacity = "0"
                            dateHolderli38.style.opacity = "0"
                            dateHolderli39.style.opacity = "0"
                            dateHolderli40.style.opacity = "0"
                            dateHolderli41.style.opacity = "0"
                            dateHolderli42.style.opacity = "0"




                            dateHolderUl1.appendChild(dateHolderli1)
                            dateHolderUl1.appendChild(dateHolderli2)
                            dateHolderUl1.appendChild(dateHolderli3)
                            dateHolderUl1.appendChild(dateHolderli4)
                            dateHolderUl1.appendChild(dateHolderli5)
                            dateHolderUl1.appendChild(dateHolderli6)
                            dateHolderUl1.appendChild(dateHolderli7)

                            dateHolderUl2.appendChild(dateHolderli8)
                            dateHolderUl2.appendChild(dateHolderli9)
                            dateHolderUl2.appendChild(dateHolderli10)
                            dateHolderUl2.appendChild(dateHolderli11)
                            dateHolderUl2.appendChild(dateHolderli12)
                            dateHolderUl2.appendChild(dateHolderli13)
                            dateHolderUl2.appendChild(dateHolderli14)

                            dateHolderUl3.appendChild(dateHolderli15)
                            dateHolderUl3.appendChild(dateHolderli16)
                            dateHolderUl3.appendChild(dateHolderli17)
                            dateHolderUl3.appendChild(dateHolderli18)
                            dateHolderUl3.appendChild(dateHolderli19)
                            dateHolderUl3.appendChild(dateHolderli20)
                            dateHolderUl3.appendChild(dateHolderli21)

                            dateHolderUl4.appendChild(dateHolderli22)
                            dateHolderUl4.appendChild(dateHolderli23)
                            dateHolderUl4.appendChild(dateHolderli24)
                            dateHolderUl4.appendChild(dateHolderli25)
                            dateHolderUl4.appendChild(dateHolderli26)
                            dateHolderUl4.appendChild(dateHolderli27)
                            dateHolderUl4.appendChild(dateHolderli28)

                            dateHolderUl5.appendChild(dateHolderli29)
                            dateHolderUl5.appendChild(dateHolderli30)
                            dateHolderUl5.appendChild(dateHolderli31)
                            dateHolderUl5.appendChild(dateHolderli32)
                            dateHolderUl5.appendChild(dateHolderli33)
                            dateHolderUl5.appendChild(dateHolderli34)
                            dateHolderUl5.appendChild(dateHolderli35)

                            dateHolderUl6.appendChild(dateHolderli36)
                            dateHolderUl6.appendChild(dateHolderli37)
                            dateHolderUl6.appendChild(dateHolderli38)
                            dateHolderUl6.appendChild(dateHolderli39)
                            dateHolderUl6.appendChild(dateHolderli40)
                            dateHolderUl6.appendChild(dateHolderli41)
                            dateHolderUl6.appendChild(dateHolderli42)

                            daysDiv.appendChild(dateHolderUl1)
                            daysDiv2.appendChild(dateHolderUl2)
                            daysDiv3.appendChild(dateHolderUl3)
                            daysDiv4.appendChild(dateHolderUl4)
                            daysDiv5.appendChild(dateHolderUl5)
                            daysDiv6.appendChild(dateHolderUl6)

                        } else {

                            dateHolderli1.textContent = "01"
                            dateHolderli2.textContent = "02"
                            dateHolderli3.textContent = "03"
                            dateHolderli4.textContent = "04"
                            dateHolderli5.textContent = "05"
                            dateHolderli6.textContent = "06"
                            dateHolderli7.textContent = "07"

                            dateHolderli8.textContent = "08"
                            dateHolderli9.textContent = "09"
                            dateHolderli10.textContent = "10"
                            dateHolderli11.textContent = "11"
                            dateHolderli12.textContent = "12"
                            dateHolderli13.textContent = "13"
                            dateHolderli14.textContent = "14"

                            dateHolderli15.textContent = "15"
                            dateHolderli16.textContent = "16"
                            dateHolderli17.textContent = "17"
                            dateHolderli18.textContent = "18"
                            dateHolderli19.textContent = "19"
                            dateHolderli20.textContent = "20"
                            dateHolderli21.textContent = "21"

                            dateHolderli22.textContent = "22"
                            dateHolderli23.textContent = "23"
                            dateHolderli24.textContent = "24"
                            dateHolderli25.textContent = "25"
                            dateHolderli26.textContent = "26"
                            dateHolderli27.textContent = "27"
                            dateHolderli28.textContent = "28"

                            dateHolderli29.textContent = "29"
                            dateHolderli30.textContent = "30"
                            dateHolderli31.textContent = "31"
                            dateHolderli32.textContent = "32"
                            dateHolderli33.textContent = "33"
                            dateHolderli34.textContent = "34"
                            dateHolderli35.textContent = "35"
                            dateHolderli36.textContent = "36"
                            dateHolderli37.textContent = "37"
                            dateHolderli38.textContent = "38"
                            dateHolderli39.textContent = "39"
                            dateHolderli40.textContent = "40"
                            dateHolderli41.textContent = "41"
                            dateHolderli42.textContent = "42"


                            dateHolderli29.style.opacity = "0"
                            dateHolderli30.style.opacity = "0"
                            dateHolderli31.style.opacity = "0"
                            dateHolderli32.style.opacity = "0"
                            dateHolderli33.style.opacity = "0"
                            dateHolderli34.style.opacity = "0"
                            dateHolderli35.style.opacity = "0"
                            dateHolderli36.style.opacity = "0"
                            dateHolderli37.style.opacity = "0"
                            dateHolderli38.style.opacity = "0"
                            dateHolderli39.style.opacity = "0"
                            dateHolderli40.style.opacity = "0"
                            dateHolderli41.style.opacity = "0"
                            dateHolderli42.style.opacity = "0"




                            dateHolderUl1.appendChild(dateHolderli1)
                            dateHolderUl1.appendChild(dateHolderli2)
                            dateHolderUl1.appendChild(dateHolderli3)
                            dateHolderUl1.appendChild(dateHolderli4)
                            dateHolderUl1.appendChild(dateHolderli5)
                            dateHolderUl1.appendChild(dateHolderli6)
                            dateHolderUl1.appendChild(dateHolderli7)

                            dateHolderUl2.appendChild(dateHolderli8)
                            dateHolderUl2.appendChild(dateHolderli9)
                            dateHolderUl2.appendChild(dateHolderli10)
                            dateHolderUl2.appendChild(dateHolderli11)
                            dateHolderUl2.appendChild(dateHolderli12)
                            dateHolderUl2.appendChild(dateHolderli13)
                            dateHolderUl2.appendChild(dateHolderli14)

                            dateHolderUl3.appendChild(dateHolderli15)
                            dateHolderUl3.appendChild(dateHolderli16)
                            dateHolderUl3.appendChild(dateHolderli17)
                            dateHolderUl3.appendChild(dateHolderli18)
                            dateHolderUl3.appendChild(dateHolderli19)
                            dateHolderUl3.appendChild(dateHolderli20)
                            dateHolderUl3.appendChild(dateHolderli21)

                            dateHolderUl4.appendChild(dateHolderli22)
                            dateHolderUl4.appendChild(dateHolderli23)
                            dateHolderUl4.appendChild(dateHolderli24)
                            dateHolderUl4.appendChild(dateHolderli25)
                            dateHolderUl4.appendChild(dateHolderli26)
                            dateHolderUl4.appendChild(dateHolderli27)
                            dateHolderUl4.appendChild(dateHolderli28)

                            dateHolderUl5.appendChild(dateHolderli29)
                            dateHolderUl5.appendChild(dateHolderli30)
                            dateHolderUl5.appendChild(dateHolderli31)
                            dateHolderUl5.appendChild(dateHolderli32)
                            dateHolderUl5.appendChild(dateHolderli33)
                            dateHolderUl5.appendChild(dateHolderli34)
                            dateHolderUl5.appendChild(dateHolderli35)

                            dateHolderUl6.appendChild(dateHolderli36)
                            dateHolderUl6.appendChild(dateHolderli37)
                            dateHolderUl6.appendChild(dateHolderli38)
                            dateHolderUl6.appendChild(dateHolderli39)
                            dateHolderUl6.appendChild(dateHolderli40)
                            dateHolderUl6.appendChild(dateHolderli41)
                            dateHolderUl6.appendChild(dateHolderli42)

                            daysDiv.appendChild(dateHolderUl1)
                            daysDiv2.appendChild(dateHolderUl2)
                            daysDiv3.appendChild(dateHolderUl3)
                            daysDiv4.appendChild(dateHolderUl4)
                            daysDiv5.appendChild(dateHolderUl5)
                            daysDiv6.appendChild(dateHolderUl6)
                        }
                    } else {
                        dateHolderli1.textContent = "01"
                        dateHolderli2.textContent = "02"
                        dateHolderli3.textContent = "03"
                        dateHolderli4.textContent = "04"
                        dateHolderli5.textContent = "05"
                        dateHolderli6.textContent = "06"
                        dateHolderli7.textContent = "07"

                        dateHolderli8.textContent = "08"
                        dateHolderli9.textContent = "09"
                        dateHolderli10.textContent = "10"
                        dateHolderli11.textContent = "11"
                        dateHolderli12.textContent = "12"
                        dateHolderli13.textContent = "13"
                        dateHolderli14.textContent = "14"

                        dateHolderli15.textContent = "15"
                        dateHolderli16.textContent = "16"
                        dateHolderli17.textContent = "17"
                        dateHolderli18.textContent = "18"
                        dateHolderli19.textContent = "19"
                        dateHolderli20.textContent = "20"
                        dateHolderli21.textContent = "21"

                        dateHolderli22.textContent = "22"
                        dateHolderli23.textContent = "23"
                        dateHolderli24.textContent = "24"
                        dateHolderli25.textContent = "25"
                        dateHolderli26.textContent = "26"
                        dateHolderli27.textContent = "27"
                        dateHolderli28.textContent = "28"
                        dateHolderli29.textContent = "29"
                        dateHolderli30.textContent = "30"

                        dateHolderli31.textContent = "31"
                        dateHolderli32.textContent = "32"
                        dateHolderli33.textContent = "33"
                        dateHolderli34.textContent = "34"
                        dateHolderli35.textContent = "35"

                        dateHolderli36.textContent = "36"
                        dateHolderli37.textContent = "37"
                        dateHolderli38.textContent = "38"
                        dateHolderli39.textContent = "39"
                        dateHolderli40.textContent = "40"
                        dateHolderli41.textContent = "41"
                        dateHolderli42.textContent = "42"


                        dateHolderli31.style.opacity = "0"
                        dateHolderli32.style.opacity = "0"
                        dateHolderli33.style.opacity = "0"
                        dateHolderli34.style.opacity = "0"
                        dateHolderli35.style.opacity = "0"
                        dateHolderli36.style.opacity = "0"
                        dateHolderli37.style.opacity = "0"
                        dateHolderli38.style.opacity = "0"
                        dateHolderli39.style.opacity = "0"
                        dateHolderli40.style.opacity = "0"
                        dateHolderli41.style.opacity = "0"
                        dateHolderli42.style.opacity = "0"




                        dateHolderUl1.appendChild(dateHolderli1)
                        dateHolderUl1.appendChild(dateHolderli2)
                        dateHolderUl1.appendChild(dateHolderli3)
                        dateHolderUl1.appendChild(dateHolderli4)
                        dateHolderUl1.appendChild(dateHolderli5)
                        dateHolderUl1.appendChild(dateHolderli6)
                        dateHolderUl1.appendChild(dateHolderli7)

                        dateHolderUl2.appendChild(dateHolderli8)
                        dateHolderUl2.appendChild(dateHolderli9)
                        dateHolderUl2.appendChild(dateHolderli10)
                        dateHolderUl2.appendChild(dateHolderli11)
                        dateHolderUl2.appendChild(dateHolderli12)
                        dateHolderUl2.appendChild(dateHolderli13)
                        dateHolderUl2.appendChild(dateHolderli14)

                        dateHolderUl3.appendChild(dateHolderli15)
                        dateHolderUl3.appendChild(dateHolderli16)
                        dateHolderUl3.appendChild(dateHolderli17)
                        dateHolderUl3.appendChild(dateHolderli18)
                        dateHolderUl3.appendChild(dateHolderli19)
                        dateHolderUl3.appendChild(dateHolderli20)
                        dateHolderUl3.appendChild(dateHolderli21)

                        dateHolderUl4.appendChild(dateHolderli22)
                        dateHolderUl4.appendChild(dateHolderli23)
                        dateHolderUl4.appendChild(dateHolderli24)
                        dateHolderUl4.appendChild(dateHolderli25)
                        dateHolderUl4.appendChild(dateHolderli26)
                        dateHolderUl4.appendChild(dateHolderli27)
                        dateHolderUl4.appendChild(dateHolderli28)

                        dateHolderUl5.appendChild(dateHolderli29)
                        dateHolderUl5.appendChild(dateHolderli30)
                        dateHolderUl5.appendChild(dateHolderli31)
                        dateHolderUl5.appendChild(dateHolderli32)
                        dateHolderUl5.appendChild(dateHolderli33)
                        dateHolderUl5.appendChild(dateHolderli34)
                        dateHolderUl5.appendChild(dateHolderli35)

                        dateHolderUl6.appendChild(dateHolderli36)
                        dateHolderUl6.appendChild(dateHolderli37)
                        dateHolderUl6.appendChild(dateHolderli38)
                        dateHolderUl6.appendChild(dateHolderli39)
                        dateHolderUl6.appendChild(dateHolderli40)
                        dateHolderUl6.appendChild(dateHolderli41)
                        dateHolderUl6.appendChild(dateHolderli42)

                        daysDiv.appendChild(dateHolderUl1)
                        daysDiv2.appendChild(dateHolderUl2)
                        daysDiv3.appendChild(dateHolderUl3)
                        daysDiv4.appendChild(dateHolderUl4)
                        daysDiv5.appendChild(dateHolderUl5)
                        daysDiv6.appendChild(dateHolderUl6)
                    }
                } else if (fullDate.getDay() === 0) {
                    if (fullDate.getMonth() === 0 || fullDate.getMonth() === 2 || fullDate.getMonth() === 4 || fullDate.getMonth() === 6 || fullDate.getMonth() === 7 || fullDate.getMonth() === 9 || fullDate.getMonth() === 11) {


                        if (i < 7) {
                            dateHolderli1.textContent = "00"
                            dateHolderli2.textContent = "00"
                            dateHolderli3.textContent = "00"
                            dateHolderli4.textContent = "00"
                            dateHolderli5.textContent = "00"
                            dateHolderli6.textContent = "00"

                            dateHolderli1.style.opacity = "0"
                            dateHolderli2.style.opacity = "0"
                            dateHolderli3.style.opacity = "0"
                            dateHolderli4.style.opacity = "0"
                            dateHolderli5.style.opacity = "0"
                            dateHolderli6.style.opacity = "0"
                        }

                        dateHolderli7.textContent = "01"

                        dateHolderli8.textContent = "02"
                        dateHolderli9.textContent = "03"
                        dateHolderli10.textContent = "04"
                        dateHolderli11.textContent = "05"
                        dateHolderli12.textContent = "06"
                        dateHolderli13.textContent = "07"
                        dateHolderli14.textContent = "08"

                        dateHolderli15.textContent = "09"
                        dateHolderli16.textContent = "10"
                        dateHolderli17.textContent = "11"
                        dateHolderli18.textContent = "12"
                        dateHolderli19.textContent = "13"
                        dateHolderli20.textContent = "14"
                        dateHolderli21.textContent = "15"

                        dateHolderli22.textContent = "16"
                        dateHolderli23.textContent = "17"
                        dateHolderli24.textContent = "18"
                        dateHolderli25.textContent = "19"
                        dateHolderli26.textContent = "20"
                        dateHolderli27.textContent = "21"
                        dateHolderli28.textContent = "22"

                        dateHolderli29.textContent = "23"
                        dateHolderli30.textContent = "24"
                        dateHolderli31.textContent = "25"
                        dateHolderli32.textContent = "26"
                        dateHolderli33.textContent = "27"
                        dateHolderli34.textContent = "28"
                        dateHolderli35.textContent = "29"
                        dateHolderli36.textContent = "30"
                        dateHolderli37.textContent = "31"

                        dateHolderli38.textContent = "32"
                        dateHolderli39.textContent = "33"
                        dateHolderli40.textContent = "34"
                        dateHolderli41.textContent = "35"
                        dateHolderli42.textContent = "36"

                        dateHolderli38.style.opacity = "0"
                        dateHolderli39.style.opacity = "0"
                        dateHolderli40.style.opacity = "0"
                        dateHolderli41.style.opacity = "0"
                        dateHolderli42.style.opacity = "0"



                        dateHolderUl1.appendChild(dateHolderli1)
                        dateHolderUl1.appendChild(dateHolderli2)
                        dateHolderUl1.appendChild(dateHolderli3)
                        dateHolderUl1.appendChild(dateHolderli4)
                        dateHolderUl1.appendChild(dateHolderli5)
                        dateHolderUl1.appendChild(dateHolderli6)
                        dateHolderUl1.appendChild(dateHolderli7)

                        dateHolderUl2.appendChild(dateHolderli8)
                        dateHolderUl2.appendChild(dateHolderli9)
                        dateHolderUl2.appendChild(dateHolderli10)
                        dateHolderUl2.appendChild(dateHolderli11)
                        dateHolderUl2.appendChild(dateHolderli12)
                        dateHolderUl2.appendChild(dateHolderli13)
                        dateHolderUl2.appendChild(dateHolderli14)

                        dateHolderUl3.appendChild(dateHolderli15)
                        dateHolderUl3.appendChild(dateHolderli16)
                        dateHolderUl3.appendChild(dateHolderli17)
                        dateHolderUl3.appendChild(dateHolderli18)
                        dateHolderUl3.appendChild(dateHolderli19)
                        dateHolderUl3.appendChild(dateHolderli20)
                        dateHolderUl3.appendChild(dateHolderli21)

                        dateHolderUl4.appendChild(dateHolderli22)
                        dateHolderUl4.appendChild(dateHolderli23)
                        dateHolderUl4.appendChild(dateHolderli24)
                        dateHolderUl4.appendChild(dateHolderli25)
                        dateHolderUl4.appendChild(dateHolderli26)
                        dateHolderUl4.appendChild(dateHolderli27)
                        dateHolderUl4.appendChild(dateHolderli28)

                        dateHolderUl5.appendChild(dateHolderli29)
                        dateHolderUl5.appendChild(dateHolderli30)
                        dateHolderUl5.appendChild(dateHolderli31)
                        dateHolderUl5.appendChild(dateHolderli32)
                        dateHolderUl5.appendChild(dateHolderli33)
                        dateHolderUl5.appendChild(dateHolderli34)
                        dateHolderUl5.appendChild(dateHolderli35)

                        dateHolderUl6.appendChild(dateHolderli36)
                        dateHolderUl6.appendChild(dateHolderli37)
                        dateHolderUl6.appendChild(dateHolderli38)
                        dateHolderUl6.appendChild(dateHolderli39)
                        dateHolderUl6.appendChild(dateHolderli40)
                        dateHolderUl6.appendChild(dateHolderli41)
                        dateHolderUl6.appendChild(dateHolderli42)

                        daysDiv.appendChild(dateHolderUl1)
                        daysDiv2.appendChild(dateHolderUl2)
                        daysDiv3.appendChild(dateHolderUl3)
                        daysDiv4.appendChild(dateHolderUl4)
                        daysDiv5.appendChild(dateHolderUl5)
                        daysDiv6.appendChild(dateHolderUl6)

                    } else if (fullDate.getMonth() === 1) {
                        if (fullDate.getFullYear() % 4 === 0) {

                            if (i < 7) {
                                dateHolderli1.textContent = "00"
                                dateHolderli2.textContent = "00"
                                dateHolderli3.textContent = "00"
                                dateHolderli4.textContent = "00"
                                dateHolderli5.textContent = "00"
                                dateHolderli6.textContent = "00"

                                dateHolderli1.style.opacity = "0"
                                dateHolderli2.style.opacity = "0"
                                dateHolderli3.style.opacity = "0"
                                dateHolderli4.style.opacity = "0"
                                dateHolderli5.style.opacity = "0"
                                dateHolderli6.style.opacity = "0"
                            }

                            dateHolderli7.textContent = "01"

                            dateHolderli8.textContent = "02"
                            dateHolderli9.textContent = "03"
                            dateHolderli10.textContent = "04"
                            dateHolderli11.textContent = "05"
                            dateHolderli12.textContent = "06"
                            dateHolderli13.textContent = "07"
                            dateHolderli14.textContent = "08"

                            dateHolderli15.textContent = "09"
                            dateHolderli16.textContent = "10"
                            dateHolderli17.textContent = "11"
                            dateHolderli18.textContent = "12"
                            dateHolderli19.textContent = "13"
                            dateHolderli20.textContent = "14"
                            dateHolderli21.textContent = "15"

                            dateHolderli22.textContent = "16"
                            dateHolderli23.textContent = "17"
                            dateHolderli24.textContent = "18"
                            dateHolderli25.textContent = "19"
                            dateHolderli26.textContent = "20"
                            dateHolderli27.textContent = "21"
                            dateHolderli28.textContent = "22"

                            dateHolderli29.textContent = "23"
                            dateHolderli30.textContent = "24"
                            dateHolderli31.textContent = "25"
                            dateHolderli32.textContent = "26"
                            dateHolderli33.textContent = "27"
                            dateHolderli34.textContent = "28"
                            dateHolderli35.textContent = "29"

                            dateHolderli36.textContent = "30"
                            dateHolderli37.textContent = "31"
                            dateHolderli38.textContent = "32"
                            dateHolderli39.textContent = "33"
                            dateHolderli40.textContent = "34"
                            dateHolderli41.textContent = "35"
                            dateHolderli42.textContent = "36"

                            dateHolderli36.style.opacity = "0"
                            dateHolderli37.style.opacity = "0"
                            dateHolderli38.style.opacity = "0"
                            dateHolderli39.style.opacity = "0"
                            dateHolderli40.style.opacity = "0"
                            dateHolderli41.style.opacity = "0"
                            dateHolderli42.style.opacity = "0"



                            dateHolderUl1.appendChild(dateHolderli1)
                            dateHolderUl1.appendChild(dateHolderli2)
                            dateHolderUl1.appendChild(dateHolderli3)
                            dateHolderUl1.appendChild(dateHolderli4)
                            dateHolderUl1.appendChild(dateHolderli5)
                            dateHolderUl1.appendChild(dateHolderli6)
                            dateHolderUl1.appendChild(dateHolderli7)

                            dateHolderUl2.appendChild(dateHolderli8)
                            dateHolderUl2.appendChild(dateHolderli9)
                            dateHolderUl2.appendChild(dateHolderli10)
                            dateHolderUl2.appendChild(dateHolderli11)
                            dateHolderUl2.appendChild(dateHolderli12)
                            dateHolderUl2.appendChild(dateHolderli13)
                            dateHolderUl2.appendChild(dateHolderli14)

                            dateHolderUl3.appendChild(dateHolderli15)
                            dateHolderUl3.appendChild(dateHolderli16)
                            dateHolderUl3.appendChild(dateHolderli17)
                            dateHolderUl3.appendChild(dateHolderli18)
                            dateHolderUl3.appendChild(dateHolderli19)
                            dateHolderUl3.appendChild(dateHolderli20)
                            dateHolderUl3.appendChild(dateHolderli21)

                            dateHolderUl4.appendChild(dateHolderli22)
                            dateHolderUl4.appendChild(dateHolderli23)
                            dateHolderUl4.appendChild(dateHolderli24)
                            dateHolderUl4.appendChild(dateHolderli25)
                            dateHolderUl4.appendChild(dateHolderli26)
                            dateHolderUl4.appendChild(dateHolderli27)
                            dateHolderUl4.appendChild(dateHolderli28)

                            dateHolderUl5.appendChild(dateHolderli29)
                            dateHolderUl5.appendChild(dateHolderli30)
                            dateHolderUl5.appendChild(dateHolderli31)
                            dateHolderUl5.appendChild(dateHolderli32)
                            dateHolderUl5.appendChild(dateHolderli33)
                            dateHolderUl5.appendChild(dateHolderli34)
                            dateHolderUl5.appendChild(dateHolderli35)

                            dateHolderUl6.appendChild(dateHolderli36)
                            dateHolderUl6.appendChild(dateHolderli37)
                            dateHolderUl6.appendChild(dateHolderli38)
                            dateHolderUl6.appendChild(dateHolderli39)
                            dateHolderUl6.appendChild(dateHolderli40)
                            dateHolderUl6.appendChild(dateHolderli41)
                            dateHolderUl6.appendChild(dateHolderli42)

                            daysDiv.appendChild(dateHolderUl1)
                            daysDiv2.appendChild(dateHolderUl2)
                            daysDiv3.appendChild(dateHolderUl3)
                            daysDiv4.appendChild(dateHolderUl4)
                            daysDiv5.appendChild(dateHolderUl5)
                            daysDiv6.appendChild(dateHolderUl6)

                        } else {


                            if (i < 7) {
                                dateHolderli1.textContent = "00"
                                dateHolderli2.textContent = "00"
                                dateHolderli3.textContent = "00"
                                dateHolderli4.textContent = "00"
                                dateHolderli5.textContent = "00"
                                dateHolderli6.textContent = "00"

                                dateHolderli1.style.opacity = "0"
                                dateHolderli2.style.opacity = "0"
                                dateHolderli3.style.opacity = "0"
                                dateHolderli4.style.opacity = "0"
                                dateHolderli5.style.opacity = "0"
                                dateHolderli6.style.opacity = "0"
                            }

                            dateHolderli7.textContent = "01"

                            dateHolderli8.textContent = "02"
                            dateHolderli9.textContent = "03"
                            dateHolderli10.textContent = "04"
                            dateHolderli11.textContent = "05"
                            dateHolderli12.textContent = "06"
                            dateHolderli13.textContent = "07"
                            dateHolderli14.textContent = "08"

                            dateHolderli15.textContent = "09"
                            dateHolderli16.textContent = "10"
                            dateHolderli17.textContent = "11"
                            dateHolderli18.textContent = "12"
                            dateHolderli19.textContent = "13"
                            dateHolderli20.textContent = "14"
                            dateHolderli21.textContent = "15"

                            dateHolderli22.textContent = "16"
                            dateHolderli23.textContent = "17"
                            dateHolderli24.textContent = "18"
                            dateHolderli25.textContent = "19"
                            dateHolderli26.textContent = "20"
                            dateHolderli27.textContent = "21"
                            dateHolderli28.textContent = "22"

                            dateHolderli29.textContent = "23"
                            dateHolderli30.textContent = "24"
                            dateHolderli31.textContent = "25"
                            dateHolderli32.textContent = "26"
                            dateHolderli33.textContent = "27"
                            dateHolderli34.textContent = "28"

                            dateHolderli35.textContent = "29"
                            dateHolderli36.textContent = "30"
                            dateHolderli37.textContent = "31"
                            dateHolderli38.textContent = "32"
                            dateHolderli39.textContent = "33"
                            dateHolderli40.textContent = "34"
                            dateHolderli41.textContent = "35"
                            dateHolderli42.textContent = "36"

                            dateHolderli35.style.opacity = "0"
                            dateHolderli36.style.opacity = "0"
                            dateHolderli37.style.opacity = "0"
                            dateHolderli38.style.opacity = "0"
                            dateHolderli39.style.opacity = "0"
                            dateHolderli40.style.opacity = "0"
                            dateHolderli41.style.opacity = "0"
                            dateHolderli42.style.opacity = "0"



                            dateHolderUl1.appendChild(dateHolderli1)
                            dateHolderUl1.appendChild(dateHolderli2)
                            dateHolderUl1.appendChild(dateHolderli3)
                            dateHolderUl1.appendChild(dateHolderli4)
                            dateHolderUl1.appendChild(dateHolderli5)
                            dateHolderUl1.appendChild(dateHolderli6)
                            dateHolderUl1.appendChild(dateHolderli7)

                            dateHolderUl2.appendChild(dateHolderli8)
                            dateHolderUl2.appendChild(dateHolderli9)
                            dateHolderUl2.appendChild(dateHolderli10)
                            dateHolderUl2.appendChild(dateHolderli11)
                            dateHolderUl2.appendChild(dateHolderli12)
                            dateHolderUl2.appendChild(dateHolderli13)
                            dateHolderUl2.appendChild(dateHolderli14)

                            dateHolderUl3.appendChild(dateHolderli15)
                            dateHolderUl3.appendChild(dateHolderli16)
                            dateHolderUl3.appendChild(dateHolderli17)
                            dateHolderUl3.appendChild(dateHolderli18)
                            dateHolderUl3.appendChild(dateHolderli19)
                            dateHolderUl3.appendChild(dateHolderli20)
                            dateHolderUl3.appendChild(dateHolderli21)

                            dateHolderUl4.appendChild(dateHolderli22)
                            dateHolderUl4.appendChild(dateHolderli23)
                            dateHolderUl4.appendChild(dateHolderli24)
                            dateHolderUl4.appendChild(dateHolderli25)
                            dateHolderUl4.appendChild(dateHolderli26)
                            dateHolderUl4.appendChild(dateHolderli27)
                            dateHolderUl4.appendChild(dateHolderli28)

                            dateHolderUl5.appendChild(dateHolderli29)
                            dateHolderUl5.appendChild(dateHolderli30)
                            dateHolderUl5.appendChild(dateHolderli31)
                            dateHolderUl5.appendChild(dateHolderli32)
                            dateHolderUl5.appendChild(dateHolderli33)
                            dateHolderUl5.appendChild(dateHolderli34)
                            dateHolderUl5.appendChild(dateHolderli35)

                            dateHolderUl6.appendChild(dateHolderli36)
                            dateHolderUl6.appendChild(dateHolderli37)
                            dateHolderUl6.appendChild(dateHolderli38)
                            dateHolderUl6.appendChild(dateHolderli39)
                            dateHolderUl6.appendChild(dateHolderli40)
                            dateHolderUl6.appendChild(dateHolderli41)
                            dateHolderUl6.appendChild(dateHolderli42)

                            daysDiv.appendChild(dateHolderUl1)
                            daysDiv2.appendChild(dateHolderUl2)
                            daysDiv3.appendChild(dateHolderUl3)
                            daysDiv4.appendChild(dateHolderUl4)
                            daysDiv5.appendChild(dateHolderUl5)
                            daysDiv6.appendChild(dateHolderUl6)

                        }
                    } else {

                        if (i < 7) {
                            dateHolderli1.textContent = "00"
                            dateHolderli2.textContent = "00"
                            dateHolderli3.textContent = "00"
                            dateHolderli4.textContent = "00"
                            dateHolderli5.textContent = "00"
                            dateHolderli6.textContent = "00"

                            dateHolderli1.style.opacity = "0"
                            dateHolderli2.style.opacity = "0"
                            dateHolderli3.style.opacity = "0"
                            dateHolderli4.style.opacity = "0"
                            dateHolderli5.style.opacity = "0"
                            dateHolderli6.style.opacity = "0"
                        }

                        dateHolderli7.textContent = "01"

                        dateHolderli8.textContent = "02"
                        dateHolderli9.textContent = "03"
                        dateHolderli10.textContent = "04"
                        dateHolderli11.textContent = "05"
                        dateHolderli12.textContent = "06"
                        dateHolderli13.textContent = "07"
                        dateHolderli14.textContent = "08"

                        dateHolderli15.textContent = "09"
                        dateHolderli16.textContent = "10"
                        dateHolderli17.textContent = "11"
                        dateHolderli18.textContent = "12"
                        dateHolderli19.textContent = "13"
                        dateHolderli20.textContent = "14"
                        dateHolderli21.textContent = "15"

                        dateHolderli22.textContent = "16"
                        dateHolderli23.textContent = "17"
                        dateHolderli24.textContent = "18"
                        dateHolderli25.textContent = "19"
                        dateHolderli26.textContent = "20"
                        dateHolderli27.textContent = "21"
                        dateHolderli28.textContent = "22"

                        dateHolderli29.textContent = "23"
                        dateHolderli30.textContent = "24"
                        dateHolderli31.textContent = "25"
                        dateHolderli32.textContent = "26"
                        dateHolderli33.textContent = "27"
                        dateHolderli34.textContent = "28"
                        dateHolderli35.textContent = "29"
                        dateHolderli36.textContent = "30"

                        dateHolderli37.textContent = "31"
                        dateHolderli38.textContent = "32"
                        dateHolderli39.textContent = "33"
                        dateHolderli40.textContent = "34"
                        dateHolderli41.textContent = "35"
                        dateHolderli42.textContent = "36"

                        dateHolderli37.style.opacity = "0"
                        dateHolderli38.style.opacity = "0"
                        dateHolderli39.style.opacity = "0"
                        dateHolderli40.style.opacity = "0"
                        dateHolderli41.style.opacity = "0"
                        dateHolderli42.style.opacity = "0"



                        dateHolderUl1.appendChild(dateHolderli1)
                        dateHolderUl1.appendChild(dateHolderli2)
                        dateHolderUl1.appendChild(dateHolderli3)
                        dateHolderUl1.appendChild(dateHolderli4)
                        dateHolderUl1.appendChild(dateHolderli5)
                        dateHolderUl1.appendChild(dateHolderli6)
                        dateHolderUl1.appendChild(dateHolderli7)

                        dateHolderUl2.appendChild(dateHolderli8)
                        dateHolderUl2.appendChild(dateHolderli9)
                        dateHolderUl2.appendChild(dateHolderli10)
                        dateHolderUl2.appendChild(dateHolderli11)
                        dateHolderUl2.appendChild(dateHolderli12)
                        dateHolderUl2.appendChild(dateHolderli13)
                        dateHolderUl2.appendChild(dateHolderli14)

                        dateHolderUl3.appendChild(dateHolderli15)
                        dateHolderUl3.appendChild(dateHolderli16)
                        dateHolderUl3.appendChild(dateHolderli17)
                        dateHolderUl3.appendChild(dateHolderli18)
                        dateHolderUl3.appendChild(dateHolderli19)
                        dateHolderUl3.appendChild(dateHolderli20)
                        dateHolderUl3.appendChild(dateHolderli21)

                        dateHolderUl4.appendChild(dateHolderli22)
                        dateHolderUl4.appendChild(dateHolderli23)
                        dateHolderUl4.appendChild(dateHolderli24)
                        dateHolderUl4.appendChild(dateHolderli25)
                        dateHolderUl4.appendChild(dateHolderli26)
                        dateHolderUl4.appendChild(dateHolderli27)
                        dateHolderUl4.appendChild(dateHolderli28)

                        dateHolderUl5.appendChild(dateHolderli29)
                        dateHolderUl5.appendChild(dateHolderli30)
                        dateHolderUl5.appendChild(dateHolderli31)
                        dateHolderUl5.appendChild(dateHolderli32)
                        dateHolderUl5.appendChild(dateHolderli33)
                        dateHolderUl5.appendChild(dateHolderli34)
                        dateHolderUl5.appendChild(dateHolderli35)

                        dateHolderUl6.appendChild(dateHolderli36)
                        dateHolderUl6.appendChild(dateHolderli37)
                        dateHolderUl6.appendChild(dateHolderli38)
                        dateHolderUl6.appendChild(dateHolderli39)
                        dateHolderUl6.appendChild(dateHolderli40)
                        dateHolderUl6.appendChild(dateHolderli41)
                        dateHolderUl6.appendChild(dateHolderli42)

                        daysDiv.appendChild(dateHolderUl1)
                        daysDiv2.appendChild(dateHolderUl2)
                        daysDiv3.appendChild(dateHolderUl3)
                        daysDiv4.appendChild(dateHolderUl4)
                        daysDiv5.appendChild(dateHolderUl5)
                        daysDiv6.appendChild(dateHolderUl6)

                    }
                } else {

                    if (fullDate.getMonth() === 0 || fullDate.getMonth() === 2 || fullDate.getMonth() === 4 || fullDate.getMonth() === 6 || fullDate.getMonth() === 7 || fullDate.getMonth() === 9 || fullDate.getMonth() === 11) {
                        let currentDay = fullDate.getDay()


                        if (currentDay === 2) {
                            dateHolderli1.textContent = "00"

                            dateHolderli1.style.opacity = "0"

                            dateHolderli2.textContent = "01"
                            dateHolderli3.textContent = "02"
                            dateHolderli4.textContent = "03"
                            dateHolderli5.textContent = "04"
                            dateHolderli6.textContent = "05"
                            dateHolderli7.textContent = "06"

                            dateHolderli8.textContent = "07"
                            dateHolderli9.textContent = "08"
                            dateHolderli10.textContent = "09"
                            dateHolderli11.textContent = "10"
                            dateHolderli12.textContent = "11"
                            dateHolderli13.textContent = "12"
                            dateHolderli14.textContent = "13"

                            dateHolderli15.textContent = "14"
                            dateHolderli16.textContent = "15"
                            dateHolderli17.textContent = "16"
                            dateHolderli18.textContent = "17"
                            dateHolderli19.textContent = "18"
                            dateHolderli20.textContent = "19"
                            dateHolderli21.textContent = "20"

                            dateHolderli22.textContent = "21"
                            dateHolderli23.textContent = "22"
                            dateHolderli24.textContent = "23"
                            dateHolderli25.textContent = "24"
                            dateHolderli26.textContent = "25"
                            dateHolderli27.textContent = "26"
                            dateHolderli28.textContent = "27"

                            dateHolderli29.textContent = "28"
                            dateHolderli30.textContent = "29"
                            dateHolderli31.textContent = "30"
                            dateHolderli32.textContent = "31"

                            dateHolderli33.textContent = "32"
                            dateHolderli34.textContent = "33"
                            dateHolderli35.textContent = "34"

                            dateHolderli36.textContent = "35"
                            dateHolderli37.textContent = "36"
                            dateHolderli38.textContent = "37"
                            dateHolderli39.textContent = "38"
                            dateHolderli40.textContent = "39"
                            dateHolderli41.textContent = "40"
                            dateHolderli42.textContent = "41"

                            dateHolderli33.style.opacity = "0"
                            dateHolderli34.style.opacity = "0"
                            dateHolderli35.style.opacity = "0"
                            dateHolderli36.style.opacity = "0"
                            dateHolderli37.style.opacity = "0"
                            dateHolderli38.style.opacity = "0"
                            dateHolderli39.style.opacity = "0"
                            dateHolderli40.style.opacity = "0"
                            dateHolderli41.style.opacity = "0"
                            dateHolderli42.style.opacity = "0"

                        } else if (currentDay === 3) {
                            dateHolderli1.textContent = "00"
                            dateHolderli2.textContent = "00"


                            dateHolderli1.style.opacity = "0"
                            dateHolderli2.style.opacity = "0"

                            dateHolderli3.textContent = "01"
                            dateHolderli4.textContent = "02"
                            dateHolderli5.textContent = "03"
                            dateHolderli6.textContent = "04"
                            dateHolderli7.textContent = "05"

                            dateHolderli8.textContent = "06"
                            dateHolderli9.textContent = "07"
                            dateHolderli10.textContent = "08"
                            dateHolderli11.textContent = "09"
                            dateHolderli12.textContent = "10"
                            dateHolderli13.textContent = "11"
                            dateHolderli14.textContent = "12"

                            dateHolderli15.textContent = "13"
                            dateHolderli16.textContent = "14"
                            dateHolderli17.textContent = "15"
                            dateHolderli18.textContent = "16"
                            dateHolderli19.textContent = "17"
                            dateHolderli20.textContent = "18"
                            dateHolderli21.textContent = "19"

                            dateHolderli22.textContent = "20"
                            dateHolderli23.textContent = "21"
                            dateHolderli24.textContent = "22"
                            dateHolderli25.textContent = "23"
                            dateHolderli26.textContent = "24"
                            dateHolderli27.textContent = "25"
                            dateHolderli28.textContent = "26"

                            dateHolderli29.textContent = "27"
                            dateHolderli30.textContent = "28"
                            dateHolderli31.textContent = "29"
                            dateHolderli32.textContent = "30"
                            dateHolderli33.textContent = "31"

                            dateHolderli34.textContent = "32"
                            dateHolderli35.textContent = "33"

                            dateHolderli36.textContent = "34"
                            dateHolderli37.textContent = "35"
                            dateHolderli38.textContent = "36"
                            dateHolderli39.textContent = "37"
                            dateHolderli40.textContent = "38"
                            dateHolderli41.textContent = "39"
                            dateHolderli42.textContent = "40"

                            dateHolderli34.style.opacity = "0"
                            dateHolderli35.style.opacity = "0"
                            dateHolderli36.style.opacity = "0"
                            dateHolderli37.style.opacity = "0"
                            dateHolderli38.style.opacity = "0"
                            dateHolderli39.style.opacity = "0"
                            dateHolderli40.style.opacity = "0"
                            dateHolderli41.style.opacity = "0"
                            dateHolderli42.style.opacity = "0"


                        } else if (currentDay === 4) {
                            dateHolderli1.textContent = "00"
                            dateHolderli2.textContent = "00"
                            dateHolderli3.textContent = "00"


                            dateHolderli1.style.opacity = "0"
                            dateHolderli2.style.opacity = "0"
                            dateHolderli3.style.opacity = "0"

                            dateHolderli4.textContent = "01"
                            dateHolderli5.textContent = "02"
                            dateHolderli6.textContent = "03"
                            dateHolderli7.textContent = "04"

                            dateHolderli8.textContent = "05"
                            dateHolderli9.textContent = "06"
                            dateHolderli10.textContent = "07"
                            dateHolderli11.textContent = "08"
                            dateHolderli12.textContent = "09"
                            dateHolderli13.textContent = "10"
                            dateHolderli14.textContent = "11"

                            dateHolderli15.textContent = "12"
                            dateHolderli16.textContent = "13"
                            dateHolderli17.textContent = "14"
                            dateHolderli18.textContent = "15"
                            dateHolderli19.textContent = "16"
                            dateHolderli20.textContent = "17"
                            dateHolderli21.textContent = "18"

                            dateHolderli22.textContent = "19"
                            dateHolderli23.textContent = "20"
                            dateHolderli24.textContent = "21"
                            dateHolderli25.textContent = "22"
                            dateHolderli26.textContent = "23"
                            dateHolderli27.textContent = "24"
                            dateHolderli28.textContent = "25"

                            dateHolderli29.textContent = "26"
                            dateHolderli30.textContent = "27"
                            dateHolderli31.textContent = "28"
                            dateHolderli32.textContent = "29"
                            dateHolderli33.textContent = "30"
                            dateHolderli34.textContent = "31"

                            dateHolderli35.textContent = "32"
                            dateHolderli36.textContent = "33"
                            dateHolderli37.textContent = "34"
                            dateHolderli38.textContent = "35"
                            dateHolderli39.textContent = "36"
                            dateHolderli40.textContent = "37"
                            dateHolderli41.textContent = "38"
                            dateHolderli42.textContent = "39"

                            dateHolderli35.style.opacity = "0"
                            dateHolderli36.style.opacity = "0"
                            dateHolderli37.style.opacity = "0"
                            dateHolderli38.style.opacity = "0"
                            dateHolderli39.style.opacity = "0"
                            dateHolderli40.style.opacity = "0"
                            dateHolderli41.style.opacity = "0"
                            dateHolderli42.style.opacity = "0"

                        } else if (currentDay === 5) {
                            dateHolderli1.textContent = "00"
                            dateHolderli2.textContent = "00"
                            dateHolderli3.textContent = "00"
                            dateHolderli4.textContent = "00"


                            dateHolderli1.style.opacity = "0"
                            dateHolderli2.style.opacity = "0"
                            dateHolderli3.style.opacity = "0"
                            dateHolderli4.style.opacity = "0"

                            dateHolderli5.textContent = "01"
                            dateHolderli6.textContent = "02"
                            dateHolderli7.textContent = "03"

                            dateHolderli8.textContent = "04"
                            dateHolderli9.textContent = "05"
                            dateHolderli10.textContent = "06"
                            dateHolderli11.textContent = "07"
                            dateHolderli12.textContent = "08"
                            dateHolderli13.textContent = "09"
                            dateHolderli14.textContent = "10"

                            dateHolderli15.textContent = "11"
                            dateHolderli16.textContent = "12"
                            dateHolderli17.textContent = "13"
                            dateHolderli18.textContent = "14"
                            dateHolderli19.textContent = "15"
                            dateHolderli20.textContent = "16"
                            dateHolderli21.textContent = "17"

                            dateHolderli22.textContent = "18"
                            dateHolderli23.textContent = "19"
                            dateHolderli24.textContent = "20"
                            dateHolderli25.textContent = "21"
                            dateHolderli26.textContent = "22"
                            dateHolderli27.textContent = "23"
                            dateHolderli28.textContent = "24"

                            dateHolderli29.textContent = "25"
                            dateHolderli30.textContent = "26"
                            dateHolderli31.textContent = "27"
                            dateHolderli32.textContent = "28"
                            dateHolderli33.textContent = "29"
                            dateHolderli34.textContent = "30"
                            dateHolderli35.textContent = "31"

                            dateHolderli36.textContent = "32"
                            dateHolderli37.textContent = "33"
                            dateHolderli38.textContent = "34"
                            dateHolderli39.textContent = "35"
                            dateHolderli40.textContent = "36"
                            dateHolderli41.textContent = "37"
                            dateHolderli42.textContent = "38"

                            dateHolderli36.style.opacity = "0"
                            dateHolderli37.style.opacity = "0"
                            dateHolderli38.style.opacity = "0"
                            dateHolderli39.style.opacity = "0"
                            dateHolderli40.style.opacity = "0"
                            dateHolderli41.style.opacity = "0"
                            dateHolderli42.style.opacity = "0"


                        } else if (currentDay === 6) {
                            dateHolderli1.textContent = "00"
                            dateHolderli2.textContent = "00"
                            dateHolderli3.textContent = "00"
                            dateHolderli4.textContent = "00"
                            dateHolderli5.textContent = "00"

                            dateHolderli1.style.opacity = "0"
                            dateHolderli2.style.opacity = "0"
                            dateHolderli3.style.opacity = "0"
                            dateHolderli4.style.opacity = "0"
                            dateHolderli5.style.opacity = "0"

                            dateHolderli6.textContent = "01"
                            dateHolderli7.textContent = "02"

                            dateHolderli8.textContent = "03"
                            dateHolderli9.textContent = "04"
                            dateHolderli10.textContent = "05"
                            dateHolderli11.textContent = "06"
                            dateHolderli12.textContent = "07"
                            dateHolderli13.textContent = "08"
                            dateHolderli14.textContent = "09"

                            dateHolderli15.textContent = "10"
                            dateHolderli16.textContent = "11"
                            dateHolderli17.textContent = "12"
                            dateHolderli18.textContent = "13"
                            dateHolderli19.textContent = "14"
                            dateHolderli20.textContent = "15"
                            dateHolderli21.textContent = "16"

                            dateHolderli22.textContent = "17"
                            dateHolderli23.textContent = "18"
                            dateHolderli24.textContent = "19"
                            dateHolderli25.textContent = "20"
                            dateHolderli26.textContent = "21"
                            dateHolderli27.textContent = "22"
                            dateHolderli28.textContent = "23"

                            dateHolderli29.textContent = "24"
                            dateHolderli30.textContent = "25"
                            dateHolderli31.textContent = "26"
                            dateHolderli32.textContent = "27"
                            dateHolderli33.textContent = "28"
                            dateHolderli34.textContent = "29"
                            dateHolderli35.textContent = "30"
                            dateHolderli36.textContent = "31"

                            dateHolderli37.textContent = "32"
                            dateHolderli38.textContent = "33"
                            dateHolderli39.textContent = "34"
                            dateHolderli40.textContent = "35"
                            dateHolderli41.textContent = "36"
                            dateHolderli42.textContent = "37"

                            dateHolderli37.style.opacity = "0"
                            dateHolderli38.style.opacity = "0"
                            dateHolderli39.style.opacity = "0"
                            dateHolderli40.style.opacity = "0"
                            dateHolderli41.style.opacity = "0"
                            dateHolderli42.style.opacity = "0"
                        }

                        dateHolderUl1.appendChild(dateHolderli1)
                        dateHolderUl1.appendChild(dateHolderli2)
                        dateHolderUl1.appendChild(dateHolderli3)
                        dateHolderUl1.appendChild(dateHolderli4)
                        dateHolderUl1.appendChild(dateHolderli5)
                        dateHolderUl1.appendChild(dateHolderli6)
                        dateHolderUl1.appendChild(dateHolderli7)

                        dateHolderUl2.appendChild(dateHolderli8)
                        dateHolderUl2.appendChild(dateHolderli9)
                        dateHolderUl2.appendChild(dateHolderli10)
                        dateHolderUl2.appendChild(dateHolderli11)
                        dateHolderUl2.appendChild(dateHolderli12)
                        dateHolderUl2.appendChild(dateHolderli13)
                        dateHolderUl2.appendChild(dateHolderli14)

                        dateHolderUl3.appendChild(dateHolderli15)
                        dateHolderUl3.appendChild(dateHolderli16)
                        dateHolderUl3.appendChild(dateHolderli17)
                        dateHolderUl3.appendChild(dateHolderli18)
                        dateHolderUl3.appendChild(dateHolderli19)
                        dateHolderUl3.appendChild(dateHolderli20)
                        dateHolderUl3.appendChild(dateHolderli21)

                        dateHolderUl4.appendChild(dateHolderli22)
                        dateHolderUl4.appendChild(dateHolderli23)
                        dateHolderUl4.appendChild(dateHolderli24)
                        dateHolderUl4.appendChild(dateHolderli25)
                        dateHolderUl4.appendChild(dateHolderli26)
                        dateHolderUl4.appendChild(dateHolderli27)
                        dateHolderUl4.appendChild(dateHolderli28)

                        dateHolderUl5.appendChild(dateHolderli29)
                        dateHolderUl5.appendChild(dateHolderli30)
                        dateHolderUl5.appendChild(dateHolderli31)
                        dateHolderUl5.appendChild(dateHolderli32)
                        dateHolderUl5.appendChild(dateHolderli33)
                        dateHolderUl5.appendChild(dateHolderli34)
                        dateHolderUl5.appendChild(dateHolderli35)

                        dateHolderUl6.appendChild(dateHolderli36)
                        dateHolderUl6.appendChild(dateHolderli37)
                        dateHolderUl6.appendChild(dateHolderli38)
                        dateHolderUl6.appendChild(dateHolderli39)
                        dateHolderUl6.appendChild(dateHolderli40)
                        dateHolderUl6.appendChild(dateHolderli41)
                        dateHolderUl6.appendChild(dateHolderli42)


                        daysDiv.appendChild(dateHolderUl1)
                        daysDiv2.appendChild(dateHolderUl2)
                        daysDiv3.appendChild(dateHolderUl3)
                        daysDiv4.appendChild(dateHolderUl4)
                        daysDiv5.appendChild(dateHolderUl5)
                        daysDiv6.appendChild(dateHolderUl6)


                    } else if (fullDate.getMonth() === 1) {
                        if (fullDate.getFullYear() % 4 === 0) {
                            let currentDay = fullDate.getDay()


                            if (currentDay === 2) {
                                dateHolderli1.textContent = "00"

                                dateHolderli1.style.opacity = "0"

                                dateHolderli2.textContent = "01"
                                dateHolderli3.textContent = "02"
                                dateHolderli4.textContent = "03"
                                dateHolderli5.textContent = "04"
                                dateHolderli6.textContent = "05"
                                dateHolderli7.textContent = "06"

                                dateHolderli8.textContent = "07"
                                dateHolderli9.textContent = "08"
                                dateHolderli10.textContent = "09"
                                dateHolderli11.textContent = "10"
                                dateHolderli12.textContent = "11"
                                dateHolderli13.textContent = "12"
                                dateHolderli14.textContent = "13"

                                dateHolderli15.textContent = "14"
                                dateHolderli16.textContent = "15"
                                dateHolderli17.textContent = "16"
                                dateHolderli18.textContent = "17"
                                dateHolderli19.textContent = "18"
                                dateHolderli20.textContent = "19"
                                dateHolderli21.textContent = "20"

                                dateHolderli22.textContent = "21"
                                dateHolderli23.textContent = "22"
                                dateHolderli24.textContent = "23"
                                dateHolderli25.textContent = "24"
                                dateHolderli26.textContent = "25"
                                dateHolderli27.textContent = "26"
                                dateHolderli28.textContent = "27"

                                dateHolderli29.textContent = "28"
                                dateHolderli30.textContent = "29"

                                dateHolderli31.textContent = "30"
                                dateHolderli32.textContent = "31"
                                dateHolderli33.textContent = "32"
                                dateHolderli34.textContent = "33"
                                dateHolderli35.textContent = "34"

                                dateHolderli36.textContent = "35"
                                dateHolderli37.textContent = "36"
                                dateHolderli38.textContent = "37"
                                dateHolderli39.textContent = "38"
                                dateHolderli40.textContent = "39"
                                dateHolderli41.textContent = "40"
                                dateHolderli42.textContent = "41"

                                dateHolderli31.style.opacity = "0"
                                dateHolderli32.style.opacity = "0"
                                dateHolderli33.style.opacity = "0"
                                dateHolderli34.style.opacity = "0"
                                dateHolderli35.style.opacity = "0"
                                dateHolderli36.style.opacity = "0"
                                dateHolderli37.style.opacity = "0"
                                dateHolderli38.style.opacity = "0"
                                dateHolderli39.style.opacity = "0"
                                dateHolderli40.style.opacity = "0"
                                dateHolderli41.style.opacity = "0"
                                dateHolderli42.style.opacity = "0"

                            } else if (currentDay === 3) {
                                dateHolderli1.textContent = "00"
                                dateHolderli2.textContent = "00"


                                dateHolderli1.style.opacity = "0"
                                dateHolderli2.style.opacity = "0"

                                dateHolderli3.textContent = "01"
                                dateHolderli4.textContent = "02"
                                dateHolderli5.textContent = "03"
                                dateHolderli6.textContent = "04"
                                dateHolderli7.textContent = "05"

                                dateHolderli8.textContent = "06"
                                dateHolderli9.textContent = "07"
                                dateHolderli10.textContent = "08"
                                dateHolderli11.textContent = "09"
                                dateHolderli12.textContent = "10"
                                dateHolderli13.textContent = "11"
                                dateHolderli14.textContent = "12"

                                dateHolderli15.textContent = "13"
                                dateHolderli16.textContent = "14"
                                dateHolderli17.textContent = "15"
                                dateHolderli18.textContent = "16"
                                dateHolderli19.textContent = "17"
                                dateHolderli20.textContent = "18"
                                dateHolderli21.textContent = "19"

                                dateHolderli22.textContent = "20"
                                dateHolderli23.textContent = "21"
                                dateHolderli24.textContent = "22"
                                dateHolderli25.textContent = "23"
                                dateHolderli26.textContent = "24"
                                dateHolderli27.textContent = "25"
                                dateHolderli28.textContent = "26"

                                dateHolderli29.textContent = "27"
                                dateHolderli30.textContent = "28"
                                dateHolderli31.textContent = "29"

                                dateHolderli32.textContent = "30"
                                dateHolderli33.textContent = "31"
                                dateHolderli34.textContent = "32"
                                dateHolderli35.textContent = "33"

                                dateHolderli36.textContent = "34"
                                dateHolderli37.textContent = "35"
                                dateHolderli38.textContent = "36"
                                dateHolderli39.textContent = "37"
                                dateHolderli40.textContent = "38"
                                dateHolderli41.textContent = "39"
                                dateHolderli42.textContent = "40"

                                dateHolderli32.style.opacity = "0"
                                dateHolderli33.style.opacity = "0"
                                dateHolderli34.style.opacity = "0"
                                dateHolderli35.style.opacity = "0"
                                dateHolderli36.style.opacity = "0"
                                dateHolderli37.style.opacity = "0"
                                dateHolderli38.style.opacity = "0"
                                dateHolderli39.style.opacity = "0"
                                dateHolderli40.style.opacity = "0"
                                dateHolderli41.style.opacity = "0"
                                dateHolderli42.style.opacity = "0"


                            } else if (currentDay === 4) {
                                dateHolderli1.textContent = "00"
                                dateHolderli2.textContent = "00"
                                dateHolderli3.textContent = "00"


                                dateHolderli1.style.opacity = "0"
                                dateHolderli2.style.opacity = "0"
                                dateHolderli3.style.opacity = "0"

                                dateHolderli4.textContent = "01"
                                dateHolderli5.textContent = "02"
                                dateHolderli6.textContent = "03"
                                dateHolderli7.textContent = "04"

                                dateHolderli8.textContent = "05"
                                dateHolderli9.textContent = "06"
                                dateHolderli10.textContent = "07"
                                dateHolderli11.textContent = "08"
                                dateHolderli12.textContent = "09"
                                dateHolderli13.textContent = "10"
                                dateHolderli14.textContent = "11"

                                dateHolderli15.textContent = "12"
                                dateHolderli16.textContent = "13"
                                dateHolderli17.textContent = "14"
                                dateHolderli18.textContent = "15"
                                dateHolderli19.textContent = "16"
                                dateHolderli20.textContent = "17"
                                dateHolderli21.textContent = "18"

                                dateHolderli22.textContent = "19"
                                dateHolderli23.textContent = "20"
                                dateHolderli24.textContent = "21"
                                dateHolderli25.textContent = "22"
                                dateHolderli26.textContent = "23"
                                dateHolderli27.textContent = "24"
                                dateHolderli28.textContent = "25"

                                dateHolderli29.textContent = "26"
                                dateHolderli30.textContent = "27"
                                dateHolderli31.textContent = "28"
                                dateHolderli32.textContent = "29"

                                dateHolderli33.textContent = "30"
                                dateHolderli34.textContent = "31"
                                dateHolderli35.textContent = "32"
                                dateHolderli36.textContent = "33"
                                dateHolderli37.textContent = "34"
                                dateHolderli38.textContent = "35"
                                dateHolderli39.textContent = "36"
                                dateHolderli40.textContent = "37"
                                dateHolderli41.textContent = "38"
                                dateHolderli42.textContent = "39"

                                dateHolderli33.style.opacity = "0"
                                dateHolderli34.style.opacity = "0"
                                dateHolderli35.style.opacity = "0"
                                dateHolderli36.style.opacity = "0"
                                dateHolderli37.style.opacity = "0"
                                dateHolderli38.style.opacity = "0"
                                dateHolderli39.style.opacity = "0"
                                dateHolderli40.style.opacity = "0"
                                dateHolderli41.style.opacity = "0"
                                dateHolderli42.style.opacity = "0"

                            } else if (currentDay === 5) {
                                dateHolderli1.textContent = "00"
                                dateHolderli2.textContent = "00"
                                dateHolderli3.textContent = "00"
                                dateHolderli4.textContent = "00"


                                dateHolderli1.style.opacity = "0"
                                dateHolderli2.style.opacity = "0"
                                dateHolderli3.style.opacity = "0"
                                dateHolderli4.style.opacity = "0"

                                dateHolderli5.textContent = "01"
                                dateHolderli6.textContent = "02"
                                dateHolderli7.textContent = "03"

                                dateHolderli8.textContent = "04"
                                dateHolderli9.textContent = "05"
                                dateHolderli10.textContent = "06"
                                dateHolderli11.textContent = "07"
                                dateHolderli12.textContent = "08"
                                dateHolderli13.textContent = "09"
                                dateHolderli14.textContent = "10"

                                dateHolderli15.textContent = "11"
                                dateHolderli16.textContent = "12"
                                dateHolderli17.textContent = "13"
                                dateHolderli18.textContent = "14"
                                dateHolderli19.textContent = "15"
                                dateHolderli20.textContent = "16"
                                dateHolderli21.textContent = "17"

                                dateHolderli22.textContent = "18"
                                dateHolderli23.textContent = "19"
                                dateHolderli24.textContent = "20"
                                dateHolderli25.textContent = "21"
                                dateHolderli26.textContent = "22"
                                dateHolderli27.textContent = "23"
                                dateHolderli28.textContent = "24"

                                dateHolderli29.textContent = "25"
                                dateHolderli30.textContent = "26"
                                dateHolderli31.textContent = "27"
                                dateHolderli32.textContent = "28"
                                dateHolderli33.textContent = "29"

                                dateHolderli34.textContent = "30"
                                dateHolderli35.textContent = "31"
                                dateHolderli36.textContent = "32"
                                dateHolderli37.textContent = "33"
                                dateHolderli38.textContent = "34"
                                dateHolderli39.textContent = "35"
                                dateHolderli40.textContent = "36"
                                dateHolderli41.textContent = "37"
                                dateHolderli42.textContent = "38"

                                dateHolderli34.style.opacity = "0"
                                dateHolderli35.style.opacity = "0"
                                dateHolderli36.style.opacity = "0"
                                dateHolderli37.style.opacity = "0"
                                dateHolderli38.style.opacity = "0"
                                dateHolderli39.style.opacity = "0"
                                dateHolderli40.style.opacity = "0"
                                dateHolderli41.style.opacity = "0"
                                dateHolderli42.style.opacity = "0"


                            } else if (currentDay === 6) {
                                dateHolderli1.textContent = "00"
                                dateHolderli2.textContent = "00"
                                dateHolderli3.textContent = "00"
                                dateHolderli4.textContent = "00"
                                dateHolderli5.textContent = "00"

                                dateHolderli1.style.opacity = "0"
                                dateHolderli2.style.opacity = "0"
                                dateHolderli3.style.opacity = "0"
                                dateHolderli4.style.opacity = "0"
                                dateHolderli5.style.opacity = "0"

                                dateHolderli6.textContent = "01"
                                dateHolderli7.textContent = "02"

                                dateHolderli8.textContent = "03"
                                dateHolderli9.textContent = "04"
                                dateHolderli10.textContent = "05"
                                dateHolderli11.textContent = "06"
                                dateHolderli12.textContent = "07"
                                dateHolderli13.textContent = "08"
                                dateHolderli14.textContent = "09"

                                dateHolderli15.textContent = "10"
                                dateHolderli16.textContent = "11"
                                dateHolderli17.textContent = "12"
                                dateHolderli18.textContent = "13"
                                dateHolderli19.textContent = "14"
                                dateHolderli20.textContent = "15"
                                dateHolderli21.textContent = "16"

                                dateHolderli22.textContent = "17"
                                dateHolderli23.textContent = "18"
                                dateHolderli24.textContent = "19"
                                dateHolderli25.textContent = "20"
                                dateHolderli26.textContent = "21"
                                dateHolderli27.textContent = "22"
                                dateHolderli28.textContent = "23"

                                dateHolderli29.textContent = "24"
                                dateHolderli30.textContent = "25"
                                dateHolderli31.textContent = "26"
                                dateHolderli32.textContent = "27"
                                dateHolderli33.textContent = "28"
                                dateHolderli34.textContent = "29"

                                dateHolderli35.textContent = "30"
                                dateHolderli36.textContent = "31"
                                dateHolderli37.textContent = "32"
                                dateHolderli38.textContent = "33"
                                dateHolderli39.textContent = "34"
                                dateHolderli40.textContent = "35"
                                dateHolderli41.textContent = "36"
                                dateHolderli42.textContent = "37"

                                dateHolderli35.style.opacity = "0"
                                dateHolderli36.style.opacity = "0"
                                dateHolderli37.style.opacity = "0"
                                dateHolderli38.style.opacity = "0"
                                dateHolderli39.style.opacity = "0"
                                dateHolderli40.style.opacity = "0"
                                dateHolderli41.style.opacity = "0"
                                dateHolderli42.style.opacity = "0"
                            }

                            dateHolderUl1.appendChild(dateHolderli1)
                            dateHolderUl1.appendChild(dateHolderli2)
                            dateHolderUl1.appendChild(dateHolderli3)
                            dateHolderUl1.appendChild(dateHolderli4)
                            dateHolderUl1.appendChild(dateHolderli5)
                            dateHolderUl1.appendChild(dateHolderli6)
                            dateHolderUl1.appendChild(dateHolderli7)

                            dateHolderUl2.appendChild(dateHolderli8)
                            dateHolderUl2.appendChild(dateHolderli9)
                            dateHolderUl2.appendChild(dateHolderli10)
                            dateHolderUl2.appendChild(dateHolderli11)
                            dateHolderUl2.appendChild(dateHolderli12)
                            dateHolderUl2.appendChild(dateHolderli13)
                            dateHolderUl2.appendChild(dateHolderli14)

                            dateHolderUl3.appendChild(dateHolderli15)
                            dateHolderUl3.appendChild(dateHolderli16)
                            dateHolderUl3.appendChild(dateHolderli17)
                            dateHolderUl3.appendChild(dateHolderli18)
                            dateHolderUl3.appendChild(dateHolderli19)
                            dateHolderUl3.appendChild(dateHolderli20)
                            dateHolderUl3.appendChild(dateHolderli21)

                            dateHolderUl4.appendChild(dateHolderli22)
                            dateHolderUl4.appendChild(dateHolderli23)
                            dateHolderUl4.appendChild(dateHolderli24)
                            dateHolderUl4.appendChild(dateHolderli25)
                            dateHolderUl4.appendChild(dateHolderli26)
                            dateHolderUl4.appendChild(dateHolderli27)
                            dateHolderUl4.appendChild(dateHolderli28)

                            dateHolderUl5.appendChild(dateHolderli29)
                            dateHolderUl5.appendChild(dateHolderli30)
                            dateHolderUl5.appendChild(dateHolderli31)
                            dateHolderUl5.appendChild(dateHolderli32)
                            dateHolderUl5.appendChild(dateHolderli33)
                            dateHolderUl5.appendChild(dateHolderli34)
                            dateHolderUl5.appendChild(dateHolderli35)

                            dateHolderUl6.appendChild(dateHolderli36)
                            dateHolderUl6.appendChild(dateHolderli37)
                            dateHolderUl6.appendChild(dateHolderli38)
                            dateHolderUl6.appendChild(dateHolderli39)
                            dateHolderUl6.appendChild(dateHolderli40)
                            dateHolderUl6.appendChild(dateHolderli41)
                            dateHolderUl6.appendChild(dateHolderli42)


                            daysDiv.appendChild(dateHolderUl1)
                            daysDiv2.appendChild(dateHolderUl2)
                            daysDiv3.appendChild(dateHolderUl3)
                            daysDiv4.appendChild(dateHolderUl4)
                            daysDiv5.appendChild(dateHolderUl5)
                            daysDiv6.appendChild(dateHolderUl6)

                        } else {
                            let currentDay = fullDate.getDay()

                            if (currentDay === 2) {
                                dateHolderli1.textContent = "00"

                                dateHolderli1.style.opacity = "0"

                                dateHolderli2.textContent = "01"
                                dateHolderli3.textContent = "02"
                                dateHolderli4.textContent = "03"
                                dateHolderli5.textContent = "04"
                                dateHolderli6.textContent = "05"
                                dateHolderli7.textContent = "06"

                                dateHolderli8.textContent = "07"
                                dateHolderli9.textContent = "08"
                                dateHolderli10.textContent = "09"
                                dateHolderli11.textContent = "10"
                                dateHolderli12.textContent = "11"
                                dateHolderli13.textContent = "12"
                                dateHolderli14.textContent = "13"

                                dateHolderli15.textContent = "14"
                                dateHolderli16.textContent = "15"
                                dateHolderli17.textContent = "16"
                                dateHolderli18.textContent = "17"
                                dateHolderli19.textContent = "18"
                                dateHolderli20.textContent = "19"
                                dateHolderli21.textContent = "20"

                                dateHolderli22.textContent = "21"
                                dateHolderli23.textContent = "22"
                                dateHolderli24.textContent = "23"
                                dateHolderli25.textContent = "24"
                                dateHolderli26.textContent = "25"
                                dateHolderli27.textContent = "26"
                                dateHolderli28.textContent = "27"

                                dateHolderli29.textContent = "28"

                                dateHolderli30.textContent = "29"
                                dateHolderli31.textContent = "30"
                                dateHolderli32.textContent = "31"
                                dateHolderli33.textContent = "32"
                                dateHolderli34.textContent = "33"
                                dateHolderli35.textContent = "34"

                                dateHolderli36.textContent = "35"
                                dateHolderli37.textContent = "36"
                                dateHolderli38.textContent = "37"
                                dateHolderli39.textContent = "38"
                                dateHolderli40.textContent = "39"
                                dateHolderli41.textContent = "40"
                                dateHolderli42.textContent = "41"

                                dateHolderli30.style.opacity = "0"
                                dateHolderli31.style.opacity = "0"
                                dateHolderli32.style.opacity = "0"
                                dateHolderli33.style.opacity = "0"
                                dateHolderli34.style.opacity = "0"
                                dateHolderli35.style.opacity = "0"
                                dateHolderli36.style.opacity = "0"
                                dateHolderli37.style.opacity = "0"
                                dateHolderli38.style.opacity = "0"
                                dateHolderli39.style.opacity = "0"
                                dateHolderli40.style.opacity = "0"
                                dateHolderli41.style.opacity = "0"
                                dateHolderli42.style.opacity = "0"

                            } else if (currentDay === 3) {
                                dateHolderli1.textContent = "00"
                                dateHolderli2.textContent = "00"


                                dateHolderli1.style.opacity = "0"
                                dateHolderli2.style.opacity = "0"

                                dateHolderli3.textContent = "01"
                                dateHolderli4.textContent = "02"
                                dateHolderli5.textContent = "03"
                                dateHolderli6.textContent = "04"
                                dateHolderli7.textContent = "05"

                                dateHolderli8.textContent = "06"
                                dateHolderli9.textContent = "07"
                                dateHolderli10.textContent = "08"
                                dateHolderli11.textContent = "09"
                                dateHolderli12.textContent = "10"
                                dateHolderli13.textContent = "11"
                                dateHolderli14.textContent = "12"

                                dateHolderli15.textContent = "13"
                                dateHolderli16.textContent = "14"
                                dateHolderli17.textContent = "15"
                                dateHolderli18.textContent = "16"
                                dateHolderli19.textContent = "17"
                                dateHolderli20.textContent = "18"
                                dateHolderli21.textContent = "19"

                                dateHolderli22.textContent = "20"
                                dateHolderli23.textContent = "21"
                                dateHolderli24.textContent = "22"
                                dateHolderli25.textContent = "23"
                                dateHolderli26.textContent = "24"
                                dateHolderli27.textContent = "25"
                                dateHolderli28.textContent = "26"

                                dateHolderli29.textContent = "27"
                                dateHolderli30.textContent = "28"

                                dateHolderli31.textContent = "29"
                                dateHolderli32.textContent = "30"
                                dateHolderli33.textContent = "31"
                                dateHolderli34.textContent = "32"
                                dateHolderli35.textContent = "33"
                                dateHolderli36.textContent = "34"
                                dateHolderli37.textContent = "35"
                                dateHolderli38.textContent = "36"
                                dateHolderli39.textContent = "37"
                                dateHolderli40.textContent = "38"
                                dateHolderli41.textContent = "39"
                                dateHolderli42.textContent = "40"

                                dateHolderli31.style.opacity = "0"
                                dateHolderli32.style.opacity = "0"
                                dateHolderli33.style.opacity = "0"
                                dateHolderli34.style.opacity = "0"
                                dateHolderli35.style.opacity = "0"
                                dateHolderli36.style.opacity = "0"
                                dateHolderli37.style.opacity = "0"
                                dateHolderli38.style.opacity = "0"
                                dateHolderli39.style.opacity = "0"
                                dateHolderli40.style.opacity = "0"
                                dateHolderli41.style.opacity = "0"
                                dateHolderli42.style.opacity = "0"


                            } else if (currentDay === 4) {
                                dateHolderli1.textContent = "00"
                                dateHolderli2.textContent = "00"
                                dateHolderli3.textContent = "00"


                                dateHolderli1.style.opacity = "0"
                                dateHolderli2.style.opacity = "0"
                                dateHolderli3.style.opacity = "0"

                                dateHolderli4.textContent = "01"
                                dateHolderli5.textContent = "02"
                                dateHolderli6.textContent = "03"
                                dateHolderli7.textContent = "04"

                                dateHolderli8.textContent = "05"
                                dateHolderli9.textContent = "06"
                                dateHolderli10.textContent = "07"
                                dateHolderli11.textContent = "08"
                                dateHolderli12.textContent = "09"
                                dateHolderli13.textContent = "10"
                                dateHolderli14.textContent = "11"

                                dateHolderli15.textContent = "12"
                                dateHolderli16.textContent = "13"
                                dateHolderli17.textContent = "14"
                                dateHolderli18.textContent = "15"
                                dateHolderli19.textContent = "16"
                                dateHolderli20.textContent = "17"
                                dateHolderli21.textContent = "18"

                                dateHolderli22.textContent = "19"
                                dateHolderli23.textContent = "20"
                                dateHolderli24.textContent = "21"
                                dateHolderli25.textContent = "22"
                                dateHolderli26.textContent = "23"
                                dateHolderli27.textContent = "24"
                                dateHolderli28.textContent = "25"

                                dateHolderli29.textContent = "26"
                                dateHolderli30.textContent = "27"
                                dateHolderli31.textContent = "28"

                                dateHolderli32.textContent = "29"
                                dateHolderli33.textContent = "30"
                                dateHolderli34.textContent = "31"
                                dateHolderli35.textContent = "32"
                                dateHolderli36.textContent = "33"
                                dateHolderli37.textContent = "34"
                                dateHolderli38.textContent = "35"
                                dateHolderli39.textContent = "36"
                                dateHolderli40.textContent = "37"
                                dateHolderli41.textContent = "38"
                                dateHolderli42.textContent = "39"

                                dateHolderli32.style.opacity = "0"
                                dateHolderli33.style.opacity = "0"
                                dateHolderli34.style.opacity = "0"
                                dateHolderli35.style.opacity = "0"
                                dateHolderli36.style.opacity = "0"
                                dateHolderli37.style.opacity = "0"
                                dateHolderli38.style.opacity = "0"
                                dateHolderli39.style.opacity = "0"
                                dateHolderli40.style.opacity = "0"
                                dateHolderli41.style.opacity = "0"
                                dateHolderli42.style.opacity = "0"

                            } else if (currentDay === 5) {
                                dateHolderli1.textContent = "00"
                                dateHolderli2.textContent = "00"
                                dateHolderli3.textContent = "00"
                                dateHolderli4.textContent = "00"


                                dateHolderli1.style.opacity = "0"
                                dateHolderli2.style.opacity = "0"
                                dateHolderli3.style.opacity = "0"
                                dateHolderli4.style.opacity = "0"

                                dateHolderli5.textContent = "01"
                                dateHolderli6.textContent = "02"
                                dateHolderli7.textContent = "03"

                                dateHolderli8.textContent = "04"
                                dateHolderli9.textContent = "05"
                                dateHolderli10.textContent = "06"
                                dateHolderli11.textContent = "07"
                                dateHolderli12.textContent = "08"
                                dateHolderli13.textContent = "09"
                                dateHolderli14.textContent = "10"

                                dateHolderli15.textContent = "11"
                                dateHolderli16.textContent = "12"
                                dateHolderli17.textContent = "13"
                                dateHolderli18.textContent = "14"
                                dateHolderli19.textContent = "15"
                                dateHolderli20.textContent = "16"
                                dateHolderli21.textContent = "17"

                                dateHolderli22.textContent = "18"
                                dateHolderli23.textContent = "19"
                                dateHolderli24.textContent = "20"
                                dateHolderli25.textContent = "21"
                                dateHolderli26.textContent = "22"
                                dateHolderli27.textContent = "23"
                                dateHolderli28.textContent = "24"

                                dateHolderli29.textContent = "25"
                                dateHolderli30.textContent = "26"
                                dateHolderli31.textContent = "27"
                                dateHolderli32.textContent = "28"

                                dateHolderli33.textContent = "29"
                                dateHolderli34.textContent = "30"
                                dateHolderli35.textContent = "31"
                                dateHolderli36.textContent = "32"
                                dateHolderli37.textContent = "33"
                                dateHolderli38.textContent = "34"
                                dateHolderli39.textContent = "35"
                                dateHolderli40.textContent = "36"
                                dateHolderli41.textContent = "37"
                                dateHolderli42.textContent = "38"

                                dateHolderli33.style.opacity = "0"
                                dateHolderli34.style.opacity = "0"
                                dateHolderli35.style.opacity = "0"
                                dateHolderli36.style.opacity = "0"
                                dateHolderli37.style.opacity = "0"
                                dateHolderli38.style.opacity = "0"
                                dateHolderli39.style.opacity = "0"
                                dateHolderli40.style.opacity = "0"
                                dateHolderli41.style.opacity = "0"
                                dateHolderli42.style.opacity = "0"


                            } else if (currentDay === 6) {
                                dateHolderli1.textContent = "00"
                                dateHolderli2.textContent = "00"
                                dateHolderli3.textContent = "00"
                                dateHolderli4.textContent = "00"
                                dateHolderli5.textContent = "00"

                                dateHolderli1.style.opacity = "0"
                                dateHolderli2.style.opacity = "0"
                                dateHolderli3.style.opacity = "0"
                                dateHolderli4.style.opacity = "0"
                                dateHolderli5.style.opacity = "0"

                                dateHolderli6.textContent = "01"
                                dateHolderli7.textContent = "02"

                                dateHolderli8.textContent = "03"
                                dateHolderli9.textContent = "04"
                                dateHolderli10.textContent = "05"
                                dateHolderli11.textContent = "06"
                                dateHolderli12.textContent = "07"
                                dateHolderli13.textContent = "08"
                                dateHolderli14.textContent = "09"

                                dateHolderli15.textContent = "10"
                                dateHolderli16.textContent = "11"
                                dateHolderli17.textContent = "12"
                                dateHolderli18.textContent = "13"
                                dateHolderli19.textContent = "14"
                                dateHolderli20.textContent = "15"
                                dateHolderli21.textContent = "16"

                                dateHolderli22.textContent = "17"
                                dateHolderli23.textContent = "18"
                                dateHolderli24.textContent = "19"
                                dateHolderli25.textContent = "20"
                                dateHolderli26.textContent = "21"
                                dateHolderli27.textContent = "22"
                                dateHolderli28.textContent = "23"

                                dateHolderli29.textContent = "24"
                                dateHolderli30.textContent = "25"
                                dateHolderli31.textContent = "26"
                                dateHolderli32.textContent = "27"
                                dateHolderli33.textContent = "28"

                                dateHolderli34.textContent = "29"
                                dateHolderli35.textContent = "30"
                                dateHolderli36.textContent = "31"
                                dateHolderli37.textContent = "32"
                                dateHolderli38.textContent = "33"
                                dateHolderli39.textContent = "34"
                                dateHolderli40.textContent = "35"
                                dateHolderli41.textContent = "36"
                                dateHolderli42.textContent = "37"

                                dateHolderli34.style.opacity = "0"
                                dateHolderli35.style.opacity = "0"
                                dateHolderli36.style.opacity = "0"
                                dateHolderli37.style.opacity = "0"
                                dateHolderli38.style.opacity = "0"
                                dateHolderli39.style.opacity = "0"
                                dateHolderli40.style.opacity = "0"
                                dateHolderli41.style.opacity = "0"
                                dateHolderli42.style.opacity = "0"
                            }

                            dateHolderUl1.appendChild(dateHolderli1)
                            dateHolderUl1.appendChild(dateHolderli2)
                            dateHolderUl1.appendChild(dateHolderli3)
                            dateHolderUl1.appendChild(dateHolderli4)
                            dateHolderUl1.appendChild(dateHolderli5)
                            dateHolderUl1.appendChild(dateHolderli6)
                            dateHolderUl1.appendChild(dateHolderli7)

                            dateHolderUl2.appendChild(dateHolderli8)
                            dateHolderUl2.appendChild(dateHolderli9)
                            dateHolderUl2.appendChild(dateHolderli10)
                            dateHolderUl2.appendChild(dateHolderli11)
                            dateHolderUl2.appendChild(dateHolderli12)
                            dateHolderUl2.appendChild(dateHolderli13)
                            dateHolderUl2.appendChild(dateHolderli14)

                            dateHolderUl3.appendChild(dateHolderli15)
                            dateHolderUl3.appendChild(dateHolderli16)
                            dateHolderUl3.appendChild(dateHolderli17)
                            dateHolderUl3.appendChild(dateHolderli18)
                            dateHolderUl3.appendChild(dateHolderli19)
                            dateHolderUl3.appendChild(dateHolderli20)
                            dateHolderUl3.appendChild(dateHolderli21)

                            dateHolderUl4.appendChild(dateHolderli22)
                            dateHolderUl4.appendChild(dateHolderli23)
                            dateHolderUl4.appendChild(dateHolderli24)
                            dateHolderUl4.appendChild(dateHolderli25)
                            dateHolderUl4.appendChild(dateHolderli26)
                            dateHolderUl4.appendChild(dateHolderli27)
                            dateHolderUl4.appendChild(dateHolderli28)

                            dateHolderUl5.appendChild(dateHolderli29)
                            dateHolderUl5.appendChild(dateHolderli30)
                            dateHolderUl5.appendChild(dateHolderli31)
                            dateHolderUl5.appendChild(dateHolderli32)
                            dateHolderUl5.appendChild(dateHolderli33)
                            dateHolderUl5.appendChild(dateHolderli34)
                            dateHolderUl5.appendChild(dateHolderli35)

                            dateHolderUl6.appendChild(dateHolderli36)
                            dateHolderUl6.appendChild(dateHolderli37)
                            dateHolderUl6.appendChild(dateHolderli38)
                            dateHolderUl6.appendChild(dateHolderli39)
                            dateHolderUl6.appendChild(dateHolderli40)
                            dateHolderUl6.appendChild(dateHolderli41)
                            dateHolderUl6.appendChild(dateHolderli42)


                            daysDiv.appendChild(dateHolderUl1)
                            daysDiv2.appendChild(dateHolderUl2)
                            daysDiv3.appendChild(dateHolderUl3)
                            daysDiv4.appendChild(dateHolderUl4)
                            daysDiv5.appendChild(dateHolderUl5)
                            daysDiv6.appendChild(dateHolderUl6)

                        }
                    } else {
                        let currentDay = fullDate.getDay()


                        if (currentDay === 2) {
                            dateHolderli1.textContent = "00"

                            dateHolderli1.style.opacity = "0"

                            dateHolderli2.textContent = "01"
                            dateHolderli3.textContent = "02"
                            dateHolderli4.textContent = "03"
                            dateHolderli5.textContent = "04"
                            dateHolderli6.textContent = "05"
                            dateHolderli7.textContent = "06"

                            dateHolderli8.textContent = "07"
                            dateHolderli9.textContent = "08"
                            dateHolderli10.textContent = "09"
                            dateHolderli11.textContent = "10"
                            dateHolderli12.textContent = "11"
                            dateHolderli13.textContent = "12"
                            dateHolderli14.textContent = "13"

                            dateHolderli15.textContent = "14"
                            dateHolderli16.textContent = "15"
                            dateHolderli17.textContent = "16"
                            dateHolderli18.textContent = "17"
                            dateHolderli19.textContent = "18"
                            dateHolderli20.textContent = "19"
                            dateHolderli21.textContent = "20"

                            dateHolderli22.textContent = "21"
                            dateHolderli23.textContent = "22"
                            dateHolderli24.textContent = "23"
                            dateHolderli25.textContent = "24"
                            dateHolderli26.textContent = "25"
                            dateHolderli27.textContent = "26"
                            dateHolderli28.textContent = "27"

                            dateHolderli29.textContent = "28"
                            dateHolderli30.textContent = "29"
                            dateHolderli31.textContent = "30"

                            dateHolderli32.textContent = "31"
                            dateHolderli33.textContent = "32"
                            dateHolderli34.textContent = "33"
                            dateHolderli35.textContent = "34"

                            dateHolderli36.textContent = "35"
                            dateHolderli37.textContent = "36"
                            dateHolderli38.textContent = "37"
                            dateHolderli39.textContent = "38"
                            dateHolderli40.textContent = "39"
                            dateHolderli41.textContent = "40"
                            dateHolderli42.textContent = "41"

                            dateHolderli32.style.opacity = "0"
                            dateHolderli33.style.opacity = "0"
                            dateHolderli34.style.opacity = "0"
                            dateHolderli35.style.opacity = "0"
                            dateHolderli36.style.opacity = "0"
                            dateHolderli37.style.opacity = "0"
                            dateHolderli38.style.opacity = "0"
                            dateHolderli39.style.opacity = "0"
                            dateHolderli40.style.opacity = "0"
                            dateHolderli41.style.opacity = "0"
                            dateHolderli42.style.opacity = "0"

                        } else if (currentDay === 3) {
                            dateHolderli1.textContent = "00"
                            dateHolderli2.textContent = "00"


                            dateHolderli1.style.opacity = "0"
                            dateHolderli2.style.opacity = "0"

                            dateHolderli3.textContent = "01"
                            dateHolderli4.textContent = "02"
                            dateHolderli5.textContent = "03"
                            dateHolderli6.textContent = "04"
                            dateHolderli7.textContent = "05"

                            dateHolderli8.textContent = "06"
                            dateHolderli9.textContent = "07"
                            dateHolderli10.textContent = "08"
                            dateHolderli11.textContent = "09"
                            dateHolderli12.textContent = "10"
                            dateHolderli13.textContent = "11"
                            dateHolderli14.textContent = "12"

                            dateHolderli15.textContent = "13"
                            dateHolderli16.textContent = "14"
                            dateHolderli17.textContent = "15"
                            dateHolderli18.textContent = "16"
                            dateHolderli19.textContent = "17"
                            dateHolderli20.textContent = "18"
                            dateHolderli21.textContent = "19"

                            dateHolderli22.textContent = "20"
                            dateHolderli23.textContent = "21"
                            dateHolderli24.textContent = "22"
                            dateHolderli25.textContent = "23"
                            dateHolderli26.textContent = "24"
                            dateHolderli27.textContent = "25"
                            dateHolderli28.textContent = "26"

                            dateHolderli29.textContent = "27"
                            dateHolderli30.textContent = "28"
                            dateHolderli31.textContent = "29"
                            dateHolderli32.textContent = "30"

                            dateHolderli33.textContent = "31"
                            dateHolderli34.textContent = "32"
                            dateHolderli35.textContent = "33"

                            dateHolderli36.textContent = "34"
                            dateHolderli37.textContent = "35"
                            dateHolderli38.textContent = "36"
                            dateHolderli39.textContent = "37"
                            dateHolderli40.textContent = "38"
                            dateHolderli41.textContent = "39"
                            dateHolderli42.textContent = "40"

                            dateHolderli33.style.opacity = "0"
                            dateHolderli34.style.opacity = "0"
                            dateHolderli35.style.opacity = "0"
                            dateHolderli36.style.opacity = "0"
                            dateHolderli37.style.opacity = "0"
                            dateHolderli38.style.opacity = "0"
                            dateHolderli39.style.opacity = "0"
                            dateHolderli40.style.opacity = "0"
                            dateHolderli41.style.opacity = "0"
                            dateHolderli42.style.opacity = "0"


                        } else if (currentDay === 4) {
                            dateHolderli1.textContent = "00"
                            dateHolderli2.textContent = "00"
                            dateHolderli3.textContent = "00"


                            dateHolderli1.style.opacity = "0"
                            dateHolderli2.style.opacity = "0"
                            dateHolderli3.style.opacity = "0"

                            dateHolderli4.textContent = "01"
                            dateHolderli5.textContent = "02"
                            dateHolderli6.textContent = "03"
                            dateHolderli7.textContent = "04"

                            dateHolderli8.textContent = "05"
                            dateHolderli9.textContent = "06"
                            dateHolderli10.textContent = "07"
                            dateHolderli11.textContent = "08"
                            dateHolderli12.textContent = "09"
                            dateHolderli13.textContent = "10"
                            dateHolderli14.textContent = "11"

                            dateHolderli15.textContent = "12"
                            dateHolderli16.textContent = "13"
                            dateHolderli17.textContent = "14"
                            dateHolderli18.textContent = "15"
                            dateHolderli19.textContent = "16"
                            dateHolderli20.textContent = "17"
                            dateHolderli21.textContent = "18"

                            dateHolderli22.textContent = "19"
                            dateHolderli23.textContent = "20"
                            dateHolderli24.textContent = "21"
                            dateHolderli25.textContent = "22"
                            dateHolderli26.textContent = "23"
                            dateHolderli27.textContent = "24"
                            dateHolderli28.textContent = "25"

                            dateHolderli29.textContent = "26"
                            dateHolderli30.textContent = "27"
                            dateHolderli31.textContent = "28"
                            dateHolderli32.textContent = "29"
                            dateHolderli33.textContent = "30"

                            dateHolderli34.textContent = "31"
                            dateHolderli35.textContent = "32"
                            dateHolderli36.textContent = "33"
                            dateHolderli37.textContent = "34"
                            dateHolderli38.textContent = "35"
                            dateHolderli39.textContent = "36"
                            dateHolderli40.textContent = "37"
                            dateHolderli41.textContent = "38"
                            dateHolderli42.textContent = "39"

                            dateHolderli34.style.opacity = "0"
                            dateHolderli35.style.opacity = "0"
                            dateHolderli36.style.opacity = "0"
                            dateHolderli37.style.opacity = "0"
                            dateHolderli38.style.opacity = "0"
                            dateHolderli39.style.opacity = "0"
                            dateHolderli40.style.opacity = "0"
                            dateHolderli41.style.opacity = "0"
                            dateHolderli42.style.opacity = "0"

                        } else if (currentDay === 5) {
                            dateHolderli1.textContent = "00"
                            dateHolderli2.textContent = "00"
                            dateHolderli3.textContent = "00"
                            dateHolderli4.textContent = "00"


                            dateHolderli1.style.opacity = "0"
                            dateHolderli2.style.opacity = "0"
                            dateHolderli3.style.opacity = "0"
                            dateHolderli4.style.opacity = "0"

                            dateHolderli5.textContent = "01"
                            dateHolderli6.textContent = "02"
                            dateHolderli7.textContent = "03"

                            dateHolderli8.textContent = "04"
                            dateHolderli9.textContent = "05"
                            dateHolderli10.textContent = "06"
                            dateHolderli11.textContent = "07"
                            dateHolderli12.textContent = "08"
                            dateHolderli13.textContent = "09"
                            dateHolderli14.textContent = "10"

                            dateHolderli15.textContent = "11"
                            dateHolderli16.textContent = "12"
                            dateHolderli17.textContent = "13"
                            dateHolderli18.textContent = "14"
                            dateHolderli19.textContent = "15"
                            dateHolderli20.textContent = "16"
                            dateHolderli21.textContent = "17"

                            dateHolderli22.textContent = "18"
                            dateHolderli23.textContent = "19"
                            dateHolderli24.textContent = "20"
                            dateHolderli25.textContent = "21"
                            dateHolderli26.textContent = "22"
                            dateHolderli27.textContent = "23"
                            dateHolderli28.textContent = "24"

                            dateHolderli29.textContent = "25"
                            dateHolderli30.textContent = "26"
                            dateHolderli31.textContent = "27"
                            dateHolderli32.textContent = "28"
                            dateHolderli33.textContent = "29"
                            dateHolderli34.textContent = "30"

                            dateHolderli35.textContent = "31"
                            dateHolderli36.textContent = "32"
                            dateHolderli37.textContent = "33"
                            dateHolderli38.textContent = "34"
                            dateHolderli39.textContent = "35"
                            dateHolderli40.textContent = "36"
                            dateHolderli41.textContent = "37"
                            dateHolderli42.textContent = "38"

                            dateHolderli35.style.opacity = "0"
                            dateHolderli36.style.opacity = "0"
                            dateHolderli37.style.opacity = "0"
                            dateHolderli38.style.opacity = "0"
                            dateHolderli39.style.opacity = "0"
                            dateHolderli40.style.opacity = "0"
                            dateHolderli41.style.opacity = "0"
                            dateHolderli42.style.opacity = "0"


                        } else if (currentDay === 6) {
                            dateHolderli1.textContent = "00"
                            dateHolderli2.textContent = "00"
                            dateHolderli3.textContent = "00"
                            dateHolderli4.textContent = "00"
                            dateHolderli5.textContent = "00"

                            dateHolderli1.style.opacity = "0"
                            dateHolderli2.style.opacity = "0"
                            dateHolderli3.style.opacity = "0"
                            dateHolderli4.style.opacity = "0"
                            dateHolderli5.style.opacity = "0"

                            dateHolderli6.textContent = "01"
                            dateHolderli7.textContent = "02"

                            dateHolderli8.textContent = "03"
                            dateHolderli9.textContent = "04"
                            dateHolderli10.textContent = "05"
                            dateHolderli11.textContent = "06"
                            dateHolderli12.textContent = "07"
                            dateHolderli13.textContent = "08"
                            dateHolderli14.textContent = "09"

                            dateHolderli15.textContent = "10"
                            dateHolderli16.textContent = "11"
                            dateHolderli17.textContent = "12"
                            dateHolderli18.textContent = "13"
                            dateHolderli19.textContent = "14"
                            dateHolderli20.textContent = "15"
                            dateHolderli21.textContent = "16"

                            dateHolderli22.textContent = "17"
                            dateHolderli23.textContent = "18"
                            dateHolderli24.textContent = "19"
                            dateHolderli25.textContent = "20"
                            dateHolderli26.textContent = "21"
                            dateHolderli27.textContent = "22"
                            dateHolderli28.textContent = "23"

                            dateHolderli29.textContent = "24"
                            dateHolderli30.textContent = "25"
                            dateHolderli31.textContent = "26"
                            dateHolderli32.textContent = "27"
                            dateHolderli33.textContent = "28"
                            dateHolderli34.textContent = "29"
                            dateHolderli35.textContent = "30"

                            dateHolderli36.textContent = "31"
                            dateHolderli37.textContent = "32"
                            dateHolderli38.textContent = "33"
                            dateHolderli39.textContent = "34"
                            dateHolderli40.textContent = "35"
                            dateHolderli41.textContent = "36"
                            dateHolderli42.textContent = "37"

                            dateHolderli36.style.opacity = "0"
                            dateHolderli37.style.opacity = "0"
                            dateHolderli38.style.opacity = "0"
                            dateHolderli39.style.opacity = "0"
                            dateHolderli40.style.opacity = "0"
                            dateHolderli41.style.opacity = "0"
                            dateHolderli42.style.opacity = "0"
                        }

                        dateHolderUl1.appendChild(dateHolderli1)
                        dateHolderUl1.appendChild(dateHolderli2)
                        dateHolderUl1.appendChild(dateHolderli3)
                        dateHolderUl1.appendChild(dateHolderli4)
                        dateHolderUl1.appendChild(dateHolderli5)
                        dateHolderUl1.appendChild(dateHolderli6)
                        dateHolderUl1.appendChild(dateHolderli7)

                        dateHolderUl2.appendChild(dateHolderli8)
                        dateHolderUl2.appendChild(dateHolderli9)
                        dateHolderUl2.appendChild(dateHolderli10)
                        dateHolderUl2.appendChild(dateHolderli11)
                        dateHolderUl2.appendChild(dateHolderli12)
                        dateHolderUl2.appendChild(dateHolderli13)
                        dateHolderUl2.appendChild(dateHolderli14)

                        dateHolderUl3.appendChild(dateHolderli15)
                        dateHolderUl3.appendChild(dateHolderli16)
                        dateHolderUl3.appendChild(dateHolderli17)
                        dateHolderUl3.appendChild(dateHolderli18)
                        dateHolderUl3.appendChild(dateHolderli19)
                        dateHolderUl3.appendChild(dateHolderli20)
                        dateHolderUl3.appendChild(dateHolderli21)

                        dateHolderUl4.appendChild(dateHolderli22)
                        dateHolderUl4.appendChild(dateHolderli23)
                        dateHolderUl4.appendChild(dateHolderli24)
                        dateHolderUl4.appendChild(dateHolderli25)
                        dateHolderUl4.appendChild(dateHolderli26)
                        dateHolderUl4.appendChild(dateHolderli27)
                        dateHolderUl4.appendChild(dateHolderli28)

                        dateHolderUl5.appendChild(dateHolderli29)
                        dateHolderUl5.appendChild(dateHolderli30)
                        dateHolderUl5.appendChild(dateHolderli31)
                        dateHolderUl5.appendChild(dateHolderli32)
                        dateHolderUl5.appendChild(dateHolderli33)
                        dateHolderUl5.appendChild(dateHolderli34)
                        dateHolderUl5.appendChild(dateHolderli35)

                        dateHolderUl6.appendChild(dateHolderli36)
                        dateHolderUl6.appendChild(dateHolderli37)
                        dateHolderUl6.appendChild(dateHolderli38)
                        dateHolderUl6.appendChild(dateHolderli39)
                        dateHolderUl6.appendChild(dateHolderli40)
                        dateHolderUl6.appendChild(dateHolderli41)
                        dateHolderUl6.appendChild(dateHolderli42)


                        daysDiv.appendChild(dateHolderUl1)
                        daysDiv2.appendChild(dateHolderUl2)
                        daysDiv3.appendChild(dateHolderUl3)
                        daysDiv4.appendChild(dateHolderUl4)
                        daysDiv5.appendChild(dateHolderUl5)
                        daysDiv6.appendChild(dateHolderUl6)

                    }
                }



            }

            calenderArticle.appendChild(divFullMonth)
        }
    }


}

let subcategories = document.getElementsByClassName("sub-categories")
let subtitleP = document.getElementsByClassName("sub-title-p")
let editInfoSection = document.getElementsByClassName("edit-info-section")



for (let i = 0; i < subcategories.length; i++) {

    subcategories[i].addEventListener("click", (e) => {

        e.preventDefault()

        if (i === 0) {

            // subcategories.forEach(a => {
            //     a.style.border = "none"
            // });

            for (let index of subcategories) {
                index.style.border = "none"
            }

            for (let index of subtitleP) {
                index.style.color = "rgb(53, 51, 46, 0.5)"
            }

            for (let index of editInfoSection) {
                index.style.display = "none"
            }

            // subtitleP.forEach(a => {
            //     a.style.color = "rgb(53, 51, 46, 0.5)"
            // });


            subcategories[i].style.borderBottom = "2px solid rgb(53, 51, 46)"
            subtitleP[i].style.color = "rgb(53, 51, 46, 1)"
            subtitleP[i + 1].style.color = "rgb(53, 51, 46, 1)"
            editInfoSection[i].style.display = "flex"


        } else if (i > 0 && i <= 6) {

            for (let index of subcategories) {
                index.style.border = "none"
            }

            for (let index of subtitleP) {
                index.style.color = "rgb(53, 51, 46, 0.5)"
            }

            for (let index of editInfoSection) {
                index.style.display = "none"
            }



            if (i === 3) {
                subtitleP[i + 1].style.color = "rgb(53, 51, 46, 1)"
                subtitleP[i + 2].style.color = "rgb(53, 51, 46, 1)"
                subcategories[i].style.borderBottom = "2px solid rgb(53, 51, 46)"
            } else {
                subtitleP[i + 1].style.color = "rgb(53, 51, 46, 1)"
                subcategories[i].style.borderBottom = "2px solid rgb(53, 51, 46)"
            }

            editInfoSection[i].style.display = "flex"

        }
    })

}


calender()


document.getElementById("name").value = "Деребеевата къща"
document.getElementById("owner").value = "Велина Александрова"
document.getElementById("phone").value = "0876728018"


document.getElementById("review-area").textContent = "Това най-доброто място за почивка в област Варна. Същото така е 100% в съотношени цена и качество."
document.getElementById("review-area").rows = Number((document.getElementById("review-area").textContent.length / 10).toFixed(0))


function textSize() {
    document.getElementById("review-area").rows = Number((document.getElementById("review-area").textContent.length / 10).toFixed(0))
}

document.getElementById("priceForNight").value = "800"

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

checkedOptionP[0].style.backgroundColor = "#8E8C8C"
checkedOption[0].style.visibility = "visible"
inputRadio[0].checked = true

checkedOptionP2[0].style.backgroundColor = "#8E8C8C"
checkedOption2[0].style.visibility = "visible"
inputRadio2[0].checked = true
