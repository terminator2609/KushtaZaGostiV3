let guestSection = document.getElementsByClassName("guest-section")[0]
let hostSection = document.getElementsByClassName("host-section")[0]
let roleList = document.getElementsByClassName("role-list")[0]
let closeMenuButton = document.getElementsByClassName("close-menu-button")[0]
let navMenuIcon = document.getElementsByClassName("nav-menu-icon")[0]
let navMenu = document.getElementsByClassName("nav-menu-phone")[0]
// let questionButton = document.getElementsByClassName("fa-circle-question")
// let definitionDiv = document.getElementsByClassName("definition")
// let headerArray = ["НЕКА ПРИКЛЮЧЕНИЕТО ЗАПОЧНЕ", "ВАШЕТО УНИКАЛНО РЕВЮ", "ДА ПОРАБОТИМ И ВЪРХУ МЕДИЯТА", "ВАШАТА ЦЕНА", "СОЦИАЛНИ МРЕЖИ", "НАЙ-ИНТЕРЕСНАТА ЧАСТ", ""]
// let nextButtons = document.getElementsByClassName("next-step")
// let addObjectSections = document.getElementsByClassName("section-add")
// let addObjectTitle = document.getElementById("addObject-title")
// let reviewTextArea = document.getElementById("review")
// let cataloguesSelectPhoto = document.getElementsByClassName("cataloguesSelectPhoto")
// let removeAllSelectionCommand = document.getElementById("removeAllSelection")
// let currentMonth = document.getElementById("current-month")
// let currentNumberMonth = document.getElementById("current-number-month")
// let currentDate = document.getElementById("current-date")
// let dateNumber = document.getElementsByClassName("date-number")
// let backButtons = document.getElementsByClassName("back-step")
// let navACatalogues = document.getElementById("nav-catalogues")
// let subscribtionPlan = document.getElementsByClassName("subscription-plan")
// let subscribtionTextArray = ["МОЯТ", "АБОНАМЕНТЕН ПЛАН", "ИЗБЕРЕТЕ ПЛАН, КОЙТО Е НАЙ-ПОДХОДЯЩ", "ЗА ВАШИЯ БИЗНЕС"]
// let subscriptionPlanNext = document.getElementsByClassName("section-plans-next")
// let activeSubscriptionButton = document.getElementsByClassName("active-subscription-plan")


navMenu.style.display = "none"

guestSection.style.display = "none"
hostSection.style.display = "none"
// subscribtionPlan[0].style.display = "none"

// for (let i = 0; i < subscriptionPlanNext.length; i++) {
//     subscriptionPlanNext[i].style.display = "none"
// }

document.addEventListener("scroll", (e) => {


    if (document.getElementById("header-parallax")) {
        document.getElementById("header-parallax").style.backgroundPositionY = window.scrollY * 1 + "px"
    }

   
    //     if (window.scrollY > 0) {
    //         document.getElementById("nav-index").style.backgroundColor = "#545451"
    //         document.getElementById("nav-index").style.transition = "0.8s"
    //         document.getElementsByClassName("fa-solid")[0].style.color = "#ffffff"
    //         document.getElementsByClassName("translateEN")[0].style.color = "#ffffff"
    //         document.getElementsByClassName("logo-nav-1")[0].style.display = "flex"
    //         document.getElementsByClassName("logo-nav-2")[0].style.display = "none"
    //         document.getElementsByClassName("logo-nav-2")[0].style.top = "-30px"
    //     } else {
    //         document.getElementById("nav-index").style.background = "none"
    //         document.getElementsByClassName("fa-solid")[0].style.color = "#545454"
    //         document.getElementsByClassName("translateEN")[0].style.color = "#545454"
    //         document.getElementsByClassName("logo-nav-1")[0].style.display = "none"
    //         document.getElementsByClassName("logo-nav-2")[0].style.display = "flex"
    //     }
    // } else {
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


    // if (document.getElementById("h4-header")) {
    //     document.getElementById("h4-header").style.fontSize = `${window.innerWidth / 1.6}px`
    // }


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


// activeSubscriptionButton[0].addEventListener("click", (e) => {
//     e.preventDefault()

//     console.log("click")

//     for (let i = 0; i < subscriptionPlanNext.length; i++) {
//         subscriptionPlanNext[i].style.display = "flex"
//     }

//     if (document.getElementById("subscription-page-title").textContent === "МОЯТ" && document.getElementById("subscription-page-title2").textContent === "АБОНАМЕНТЕН ПЛАН") {
//         document.getElementById("subscription-page-title").textContent = "ИЗБЕРЕТЕ ПЛАН, КОЙТО Е НАЙ-ПОДХОДЯЩ"
//         document.getElementById("subscription-page-title2").textContent = "ЗА ВАШИЯ БИЗНЕС"
//     } else {
//         document.getElementById("subscription-page-title").textContent = "МОЯТ"
//         document.getElementById("subscription-page-title2").textContent = "АБОНАМЕНТЕН ПЛАН"
//     }

//     document.getElementsByClassName("no-subscription-plan")[0].style.display = "none"


// })







