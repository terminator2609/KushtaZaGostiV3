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

for(let i = 0; i < cataloguesMenuButton.length; i++) {
    cataloguesMenuButton[i].addEventListener("click", (e) => {
        e.preventDefault()


        categoriesAddClouds[i].style.display = "flex"


    })
}

for(let i = 0; i < closeButtonClouds.length; i++) {
    closeButtonClouds[i].addEventListener("click", (e) => {
        e.preventDefault()

        categoriesAddClouds[i].style.display = "none"
    })
}

function calender() {
    let fullDate = new Date()

    let allMonth = ["Ян", "февр", "апр", "март", "юни", "юли", "авг", "септ", "окт", "ноем", "дек"]
}

