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

    if (window.innerHeight < 620) {
        document.getElementById("customHeight").style.height = "100vh"
    }

    if (window.innerHeight >= 620 && window.innerHeight < 700) {
        document.getElementById("customHeight").style.height = "90vh"
    } else if (window.innerHeight >= 700 && window.innerHeight < 800) {
        document.getElementById("customHeight").style.height = "82vh"
    } else if (window.innerHeight >= 800 && window.innerHeight < 890) {
        document.getElementById("customHeight").style.height = "70vh"
    } else if (window.innerHeight >= 890) {
        document.getElementById("customHeight").style.height = "60vh"
    }
})

