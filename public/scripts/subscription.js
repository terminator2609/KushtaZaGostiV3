let guestSection = document.getElementsByClassName("guest-section")[0]
let hostSection = document.getElementsByClassName("host-section")[0]
let roleList = document.getElementsByClassName("role-list")[0]
let closeMenuButton = document.getElementsByClassName("close-menu-button")[0]
let navMenuIcon = document.getElementsByClassName("nav-menu-icon")[0]
let navMenu = document.getElementsByClassName("nav-menu-phone")[0]
let navACatalogues = document.getElementById("nav-catalogues")
let subscribtionPlan = document.getElementsByClassName("subscription-plan")
let subscriptionPlanNext = document.getElementsByClassName("section-plans-next")
let activeSubscriptionButton = document.getElementsByClassName("active-subscription-plan")
let definitionDiv = document.getElementsByClassName("definition")
let questionButton = document.getElementsByClassName("fa-circle-question")
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
subscribtionPlan[0].style.display = "none"

for (let i = 0; i < subscriptionPlanNext.length; i++) {
    subscriptionPlanNext[i].style.display = "none"
}

for (let i = 0; i < definitionDiv.length; i++) {
    definitionDiv[i].style.display = "none"
}


// document.addEventListener("scroll", (e) => {


//     if (window.scrollY > 0) {
//         document.getElementById("nav-index").style.backgroundColor = "#545451"
//         document.getElementById("nav-index").style.transition = "0.8s"
//         document.getElementsByClassName("fa-solid")[0].style.color = "#ffffff"
//         document.getElementsByClassName("translateEN")[0].style.color = "#ffffff"
//         document.getElementsByClassName("logo-nav-1")[0].style.display = "flex"
//         document.getElementsByClassName("logo-nav-2")[0].style.display = "none"
//         document.getElementsByClassName("logo-nav-2")[0].style.top = "-60%"
//     } else {
//         document.getElementById("nav-index").style.background = "none"
//         document.getElementsByClassName("fa-solid")[0].style.color = "#545454"
//         document.getElementsByClassName("translateEN")[0].style.color = "#545454"
//         document.getElementsByClassName("logo-nav-1")[0].style.display = "none"
//         document.getElementsByClassName("logo-nav-2")[0].style.display = "flex"
//     }


// })


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


activeSubscriptionButton[0].addEventListener("click", (e) => {
    e.preventDefault()

    console.log("click")

    for (let i = 0; i < subscriptionPlanNext.length; i++) {
        subscriptionPlanNext[i].style.display = "block"
    }


    document.getElementById("subscription-page-title").style.display = "none"
    document.getElementById("subscription-page-title2").style.display = "none"


    document.getElementsByClassName("no-subscription-plan")[0].style.display = "none"


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


    
