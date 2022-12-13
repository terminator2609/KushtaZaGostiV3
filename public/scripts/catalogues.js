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
let lineRoleHost = document.getElementsByClassName("line-role-host")
let lineRoleGuest = document.getElementsByClassName("line-role-guest")
let guestName = document.getElementsByClassName("guest-name")
let hostName = document.getElementsByClassName("host-name")


navMenu.style.display = "none"

guestSection.style.display = "none"
hostSection.style.display = "none"
lineRoleGuest[0].style.display = "none"


if (document.getElementById("h4-header")) {
    document.getElementById("h4-header").style.fontSize = `${window.innerWidth / 2.5}px`
}



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

let nextAllObjectButton = document.getElementsByClassName("next-all-object")[0]
let selectTitle = document.getElementsByClassName("select-title")[0]
let counterSelected = 0
nextAllObjectButton.style.display = "none"


// document.addEventListener("scroll", (e) => {
//     console.log(window.scrollY)
// })

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
            nextAllObjectButton.style.display = "inline"
        } else {
            nextAllObjectButton.style.display = "none"
        }

    })
}











