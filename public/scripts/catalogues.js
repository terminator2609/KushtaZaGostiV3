let guestSection = document.getElementsByClassName("guest-section")[0]
let hostSection = document.getElementsByClassName("host-section")[0]
let roleList = document.getElementsByClassName("role-list")[0]
let closeMenuButton = document.getElementsByClassName("close-menu-button")[0]
let navMenuIcon = document.getElementsByClassName("nav-menu-icon")[0]
let navMenu = document.getElementsByClassName("nav-menu-phone")[0]


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



    if (document.getElementById("h4-header")) {
        document.getElementById("h4-header").style.fontSize = `${window.innerWidth / 1.6}px`
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









