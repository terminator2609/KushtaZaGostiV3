let guestSection = document.getElementsByClassName("guest-section")[0]
let hostSection = document.getElementsByClassName("host-section")[0]
let roleList = document.getElementsByClassName("role-list")[0]
let closeMenuButton = document.getElementsByClassName("close-menu-button")[0]
let navMenuIcon = document.getElementsByClassName("nav-menu-icon")[0]
let navMenu = document.getElementsByClassName("nav-menu-phone")[0]
let roleButton = document.getElementById("role-button")
let roleText = document.getElementById("role-text")
let navigationText = document.getElementsByClassName("navigation-text")[0]
let myObjectImg = document.getElementsByClassName("object-item-img")
let objectItemH1 = document.getElementsByClassName("object-item-h1")
let objectItemP = document.getElementsByClassName("object-item-p")
let objectHeartLogo = document.getElementsByClassName("fa-heart")
let objectItem =  document.getElementsByClassName("object-item")

// // if(window.innerHeight < 600) {
// //     for (let i = 0; i < objectItemH1.length; i++) {
// //         objectItemH1[i].style.top = "67%"
// //     }

// //     for(let i = 0; i < objectItemP.length; i++) {
// //         objectItemP[i].style.top = "83%"
// //     }

// //     for(let i = 0; i < objectHeartLogo.length; i++) {
// //         objectHeartLogo[i].style.top = "85%"
// //     }
// // }

// if (window.innerHeight >= 800) {
//     for (let i = 0; i < myObjectImg.length; i++) {
//         myObjectImg[i].style.height = "330px"
//     }
// } else if (window.innerHeight >= 700 && window.innerHeight < 800) {
//     for (let i = 0; i < myObjectImg.length; i++) {
//         myObjectImg[i].style.height = "330px"
//     }
// } else {
//     for (let i = 0; i < myObjectImg.length; i++) {
//         myObjectImg[i].style.height = "350px"
//     }
// }

objectItem[0].style.height = "50vh"

navMenu.style.display = "none"

guestSection.style.display = "none"
hostSection.style.display = "none"

document.addEventListener("scroll", (e) => {


    if (document.getElementById("header-parallax")) {
        document.getElementById("header-parallax").style.backgroundPositionY = window.scrollY * 1 + "px"
    }

    if (window.scrollY > 0) {
        document.getElementById("nav-index").style.backgroundColor = "white"
        document.getElementById("nav-index").style.transition = "0.8s"
        document.getElementsByClassName("fa-solid")[0].style.color = "#6F6F6F"
        document.getElementsByClassName("translateEN")[0].style.color = "#6F6F6F"
        document.getElementsByClassName("logo-nav-1")[0].style.display = "none"
        document.getElementsByClassName("logo-nav-2")[0].style.display = "flex"
        document.getElementsByClassName("logo-nav-2")[0].style.top = "-60%"
    } else {
        document.getElementById("nav-index").style.background = "none"
        document.getElementsByClassName("fa-solid")[0].style.color = "#DCDFDE"
        document.getElementsByClassName("translateEN")[0].style.color = "#DCDFDE"
        document.getElementsByClassName("logo-nav-1")[0].style.display = "flex"
        document.getElementsByClassName("logo-nav-2")[0].style.display = "none"
    }



    if (window.innerHeight < 620 && document.getElementById("customHeight")) {
        document.getElementById("customHeight").style.height = "100vh"
    }

    if (window.innerHeight >= 620 && window.innerHeight < 700 && document.getElementById("customHeight")) {
        document.getElementById("customHeight").style.height = "90vh"
    } else if (window.innerHeight >= 700 && window.innerHeight < 800 && document.getElementById("customHeight")) {
        document.getElementById("customHeight").style.height = "82vh"
    } else if (window.innerHeight >= 800 && window.innerHeight < 890 && document.getElementById("customHeight")) {
        document.getElementById("customHeight").style.height = "70vh"
    } else if (window.innerHeight >= 890 && document.getElementById("customHeight")) {
        document.getElementById("customHeight").style.height = "60vh"
    }

})

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

// let arrowOpenMenuButton = document.getElementsByClassName("arrow-open-menu")[0]
// let cataloguesMenu = document.getElementsByClassName("catalogues-menu")[0]
// let closeMenuCatalogues = document.getElementsByClassName("close-menu-catalogues")[0]

// cataloguesMenu.style.display = "none"


// arrowOpenMenuButton.addEventListener("click", (e) => {
//     e.preventDefault()

//     cataloguesMenu.style.display = "flex"

// })

// closeMenuCatalogues.addEventListener("click", (e) => {
//     e.preventDefault()

//     cataloguesMenu.style.display = "none"

// })
