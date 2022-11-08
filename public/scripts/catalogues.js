let guestSection = document.getElementsByClassName("guest-section")[0]
let hostSection = document.getElementsByClassName("host-section")[0]
let roleList = document.getElementsByClassName("role-list")[0]
let closeMenuButton = document.getElementsByClassName("close-menu-button")[0]
let navMenuIcon = document.getElementsByClassName("nav-menu-icon")[0]
let navMenu = document.getElementsByClassName("nav-menu-phone")[0]
let cataloguesSelectPhoto = document.getElementsByClassName("cataloguesSelectPhoto")
let roleButton = document.getElementById("role-button")
let roleText = document.getElementById("role-text")
let navigationText = document.getElementsByClassName("navigation-text")[0]


navMenu.style.display = "none"

guestSection.style.display = "none"
hostSection.style.display = "none"


if (document.getElementById("h4-header")) {
    document.getElementById("h4-header").style.fontSize = `${window.innerWidth / 1.6}px`
}


// document.addEventListener("scroll", (e) => {


//     if (window.scrollY > 0) {
//         document.getElementById("nav-index").style.backgroundColor = "white"
//         document.getElementById("nav-index").style.transition = "0.8s"
//         document.getElementsByClassName("fa-solid")[0].style.color = "#6F6F6F"
//         document.getElementsByClassName("translateEN")[0].style.color = "#6F6F6F"
//         document.getElementsByClassName("logo-nav-1")[0].style.display = "none"
//         document.getElementsByClassName("logo-nav-2")[0].style.display = "flex"
//         document.getElementsByClassName("logo-nav-2")[0].style.top = "-60%"
//     } else {
//         document.getElementById("nav-index").style.background = "none"
//         document.getElementsByClassName("fa-solid")[0].style.color = "#DCDFDE"
//         document.getElementsByClassName("translateEN")[0].style.color = "#DCDFDE"
//         document.getElementsByClassName("logo-nav-1")[0].style.display = "flex"
//         document.getElementsByClassName("logo-nav-2")[0].style.display = "none"
//     }

// })


roleButton.addEventListener("click", (e) => {

    e.preventDefault()

    if (roleButton.textContent === "Гост") {
        roleButton.textContent = "Домакин"
        roleText.textContent = "Гост"
        roleButton.style.color = "rgb(0, 0, 0, 0.5)"
        roleButton.style.backgroundColor = "white"
        hostSection.style.display = "none"
        guestSection.style.display = "none"
        navigationText.style.marginLeft = ""
        roleText.style.fontSize = ""
        roleText.style.color = ""
    } else {
        roleButton.textContent = "Гост"
        roleText.textContent = "Домакин"
        roleButton.style.color = "rgb(255, 255, 255, 0.5)"
        roleButton.style.backgroundColor = "#212123"
        hostSection.style.display = "none"
        guestSection.style.display = "none"
        roleText.style.fontSize = ""
        navigationText.style.marginLeft = ""
        roleText.style.fontSize = ""
        roleText.style.color = ""
    }
})

roleText.addEventListener("click", (e) => {
    e.preventDefault()

    if (roleText.textContent === "Домакин" && hostSection.style.display === "none") {
        hostSection.style.display = "flex"
        guestSection.style.display = "none"
        navigationText.style.marginLeft = "12%"
        roleText.style.fontSize = "30px"
        roleText.style.color = "white"
    } else if (roleText.textContent === "Домакин" && hostSection.style.display === "block") {
        hostSection.style.display = "none"
        guestSection.style.display = "none"
        navigationText.style.marginLeft = ""
        roleText.style.fontSize = ""
        roleText.style.color = ""
    } else if (roleText.textContent === "Гост" && guestSection.style.display === "none") {
        hostSection.style.display = "none"
        guestSection.style.display = "block"
        navigationText.style.marginLeft = "12%"
        roleText.style.fontSize = "30px"
        roleText.style.color = "white"
    } else {
        hostSection.style.display = "none"
        guestSection.style.display = "none"
        navigationText.style.marginLeft = ""
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

let nextAllObjectButton = document.getElementsByClassName("next-all-object")[0]
let selectTitle = document.getElementsByClassName("select-title")[0]
let counterSelected = 0
nextAllObjectButton.style.display = "none"
selectTitle.style.marginBottom = "15%"

for (let i = 0; i < cataloguesSelectPhoto.length; i++) {


    cataloguesSelectPhoto[i].addEventListener("click", (e) => {
        e.preventDefault()

        if (cataloguesSelectPhoto[i].className === "cataloguesSelectPhoto selectedCatalogues") {
            cataloguesSelectPhoto[i].className = "cataloguesSelectPhoto"
            counterSelected--
        } else {
            cataloguesSelectPhoto[i].className = "cataloguesSelectPhoto selectedCatalogues"
            counterSelected++
        }

        if (counterSelected > 0) {
            nextAllObjectButton.style.display = "block"
            selectTitle.style.marginBottom = "-45%"
        } else {
            nextAllObjectButton.style.display = "none"
            selectTitle.style.marginBottom = "15%"
        }

    })
}











