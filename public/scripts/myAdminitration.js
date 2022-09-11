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
let categories = document.getElementsByClassName("categories")[0]
let sectionAdd = document.getElementsByClassName("section-add")
let categoriesList = document.getElementsByClassName("categories-list")
let addObjectTitle1 = document.getElementById("addObject-title-1")
let addObjectTitle2 = document.getElementById("addObject-title-2")
let cataloguesSelectPhoto = document.getElementsByClassName("cataloguesSelectPhoto")
let removeCataloguesButton = document.getElementsByClassName("remove-catalogues-button")[0]
let dateNumber = document.getElementsByClassName("date-number")
let currentMonth = document.getElementById("current-month")
let currentNumberMonth = document.getElementById("current-number-month")
let currentDate = document.getElementById("current-date")
let isCalender = false
let calenderAdministration = document.getElementsByClassName("calender-administration")[0]
let calenderReview = document.getElementsByClassName("calender-review")[0]
let saveBookingButton = document.getElementsByClassName("save-booking")[0]
calenderAdministration.style.display = "none"

let addObjectTitle1Array = ["Моите", "Моето", "Моята", "Моята", "Моите", "Моите", "", "Моите", "Моите", "Моите"]
let addObjectTitle2Array = ["Основни данни", "Ревю", "Медия", "Цена", "Социални мрежи", "Каталози", "", "Оферти", "Реклами", "Посещения"]
let currentCatalogues = ["./public/image/catalog/mountain.jpg", "./public/image/catalog/familiarization.jpg", "./public/image/catalog/varna.jpg", "./public/image/catalog/shumen.jpg", "./public/image/catalog/stara planina.jpg",
    "./public/image/catalog/team building.jpg", "./public/image/catalog/family with children.jpg", "./public/image/catalog/village.jpg", "./public/image/catalog/house with pets.jpg"]

let allCatalogues = ["./public/image/catalog/sea.jpg", "./public/image/catalog/mountain.jpg", "./public/image/catalog/familiarization.jpg",
    "./public/image/catalog/restaurant.jpg", "./public/image/catalog/BBQ.jpg", "./public/image/catalog/poll.jpg", "./public/image/catalog/horse-riding.jpg",
    "./public/image/catalog/party.jpg", "./public/image/catalog/offer.jpg", "./public/image/catalog/family with children.jpg", "./public/image/catalog/team building.jpg",
    "./public/image/catalog/house with pets.jpg", "./public/image/catalog/invalid people.jpg", "./public/image/catalog/agro.jpg", "./public/image/catalog/wine.jpg", "./public/image/catalog/village.jpg",
    "./public/image/catalog/sofia.jpg", "./public/image/catalog/plovdiv.jpg", "./public/image/catalog/varna.jpg", "./public/image/catalog/burgas.jpg", "./public/image/catalog/shumen.jpg",
    "./public/image/catalog/veliko turnovo.jpg", "./public/image/catalog/gabrovo.jpg", "./public/image/catalog/dobrich.jpg", "./public/image/catalog/silistra.jpg",
    "./public/image/catalog/ruse.jpg", "./public/image/catalog/smolqn.jpg", "./public/image/catalog/sliven.jpg", "./public/image/catalog/stara zagora.jpg", "./public/image/catalog/haskovo.jpg",
    "./public/image/catalog/vidin.jpg", "./public/image/catalog/pernik.jpg", "./public/image/catalog/kustendil.jpg", "./public/image/catalog/jambol.jpg", "./public/image/catalog/kurdjali.jpg",
    "./public/image/catalog/pleven.jpg", "./public/image/catalog/turgovishte.jpg", "./public/image/catalog/razgrad.jpg", "./public/image/catalog/montana.jpg", "./public/image/catalog/lovech.jpg",
    "./public/image/catalog/vraca.jpg", "./public/image/catalog/pazardjik.jpg", "./public/image/catalog/blagoevgrad.jpg", "./public/image/catalog/rila.jpg",
    "./public/image/catalog/pirin.jpg", "./public/image/catalog/rodopi.jpg", "./public/image/catalog/stara planina.jpg", "./public/image/catalog/strandja.jpg"]




navMenu.style.display = "none"

guestSection.style.display = "none"
hostSection.style.display = "none"


for (let i = 0; i < definitionDiv.length; i++) {
    definitionDiv[i].style.display = "none"
}



document.addEventListener("scroll", (e) => {

    if (isCalender) {
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
    } else {
        if (window.scrollY > 0) {
            document.getElementById("nav-index").style.backgroundColor = "#545451"
            document.getElementById("nav-index").style.transition = "0.8s"
            document.getElementsByClassName("fa-solid")[0].style.color = "#ffffff"
            document.getElementsByClassName("translateEN")[0].style.color = "#ffffff"
            document.getElementsByClassName("logo-nav-1")[0].style.display = "flex"
            document.getElementsByClassName("logo-nav-2")[0].style.display = "none"
            document.getElementsByClassName("logo-nav-2")[0].style.top = "-60%"
        } else {
            document.getElementById("nav-index").style.background = "none"
            document.getElementsByClassName("fa-solid")[0].style.color = "#545454"
            document.getElementsByClassName("translateEN")[0].style.color = "#545454"
            document.getElementsByClassName("logo-nav-1")[0].style.display = "none"
            document.getElementsByClassName("logo-nav-2")[0].style.display = "flex"
        }
    }




})



let roleButton = document.getElementById("role-button")
let roleText = document.getElementById("role-text")

roleButton.addEventListener("click", (e) => {


    if (roleButton.textContent === "Гост") {
        roleButton.textContent = "Домакин"
        roleText.textContent = "Гост"
        roleButton.style.border = "2px solid #545454"
        roleButton.style.color = "black"
        roleButton.style.backgroundColor = "white"
        hostSection.style.display = "none"
        guestSection.style.display = "none"
        roleList.style.marginLeft = "0px"
        roleText.style.fontSize = ""
        roleText.style.color = ""
    } else {
        roleButton.textContent = "Гост"
        roleText.textContent = "Домакин"
        roleButton.style.border = "2px solid white"
        roleButton.style.color = "white"
        roleButton.style.background = "none"
        hostSection.style.display = "none"
        guestSection.style.display = "none"
        roleText.style.fontSize = ""
        roleList.style.marginLeft = "0px"
        roleText.style.fontSize = ""
        roleText.style.color = ""
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


for (let i = 0; i < categoriesList.length; i++) {

    sectionAdd[i].style.display = "none"

    categoriesList[i].addEventListener("click", (e) => {
        e.preventDefault()

        sectionAdd[i].style.display = "flex"
        categories.style.display = "none"
        addObjectTitle1.textContent = addObjectTitle1Array[i]
        addObjectTitle2.textContent = addObjectTitle2Array[i]

        if (i === 6) {
            sectionAdd[i].style.display = "block"
            document.getElementsByTagName("body")[0].style.backgroundColor = "#535351"
            document.getElementsByClassName("logo-nav-2")[0].style.display = "none"
            document.getElementsByClassName("logo-nav-1")[0].style.display = "flex"
            let navLi = document.getElementsByTagName("nav")[0].children[0].children

            navLi[0].style.color = "#DCDFDE"
            navLi[2].children[0].style.color = "#DCDFDE"

            isCalender = true
        }
    })


}

document.getElementById("name").value = "Деребеевата къща"
document.getElementById("location").value = "с. Черни връх"
document.getElementById("postCode").value = "9827"
document.getElementById("street").value = "ул.Балкан"
document.getElementById("number").value = "1"
document.getElementById("area").value = "Шумен"
document.getElementById("owner").value = "Илия Илиев"
document.getElementById("phone").value = "0876728108"


document.getElementById("review").textContent = "Деребеевата къща е едно прекрасно място, реновирано във възрожденски стил, сгушено в източна Стара планина. Разположението и е стратегическо заради уникалната гледка. Къщата е подходяща за почивка през всички сезони. Предназначена е както за семейства с деца, така и за приятелски компании. Вилата е с капацитет от 16 души. Разполага с 5 стаи и два санитарни възела, разделени в две крила. Обединява ги трапезарията, която е както дневна, така и кухня, която е напълно обурудвана с посуда и кухненски уреди като: съмиялна, фурна, ледогенератор, аспиратор, два хладилника, кафемашина, грил-тостер, климатик, озвучителна система, андроид телевизор и др. На разположение за гостите има осигурен паркинг със седем парко места. Дворът от своя страна е с големи зелени площи за игра, къщата предлага и уникално барбекю с възможност за чеверме, навес с място за сядане. Басейнът на Деребеевата къща няма аналог. Био-инфинити басейнът е атракция сам по себе си както с размерите си от 10 на 4 метра, така и с пространството за игра и шезлонги. В него няма никакви химикали. Водата е жива, като се филтрира непрестанно. Селцето ни е подходящо и за разходки.В близост има река и язовир за любителите на риболова, както и места за опознаване.  Заповядайте! ”Назад към прородата. “- Жан Жак Русо"
document.getElementById("price").value = "800"
document.getElementById("currency").value = "bgn"
document.getElementById("typeForRent").value = "fullHouse"
document.getElementById("capacity").value = "16"
document.getElementById("numberOfRoom").value = "5"

let currentCataloguesDiv = document.getElementsByClassName("current-catalogues-div")
let addCataloguesButton = document.getElementsByClassName("add-catalogues-button")[0]


function currentCataloguesFunc() {
    currentCatalogues.forEach((a) => {

        let img = document.createElement("img")
        img.className = "cataloguesSelectPhoto"
        img.src = a
        img.alt = a.substring(23)

        for (let i = 0; i < currentCataloguesDiv.length; i++) {

            if (currentCataloguesDiv[i].children.length < 4) {
                currentCataloguesDiv[i].appendChild(img)
                break;
            }
        }

    })

}

currentCataloguesFunc()

addCataloguesButton.addEventListener("click", (e) => {
    e.preventDefault()

    let currentSelectCatalogues = []


    if (addCataloguesButton.textContent === "Добави") {

        for (let i = 0; i < currentCataloguesDiv.length; i++) {

            for (let a = 0; a < currentCataloguesDiv[i].children.length; a++) {
                currentCataloguesDiv[i].children[a].remove()

                a--
            }

        }

        allCatalogues.forEach((a) => {
            if (currentCatalogues.indexOf(a) === -1) {
                currentSelectCatalogues.push(a)
            }
        })

        currentSelectCatalogues.forEach((a) => {
            let img = document.createElement("img")
            img.className = "cataloguesSelectPhoto"
            img.src = a
            img.alt = a.substring(23)

            for (let i = 0; i < currentCataloguesDiv.length; i++) {

                if (currentCataloguesDiv[i].children.length < 4) {
                    currentCataloguesDiv[i].appendChild(img)
                    break;
                }
            }

        })

        for (let i = 0; i < cataloguesSelectPhoto.length; i++) {

            cataloguesSelectPhoto[i].addEventListener("click", (e) => {
                e.preventDefault()

                if (cataloguesSelectPhoto[i].className === "cataloguesSelectPhoto selectedCatalogues") {
                    cataloguesSelectPhoto[i].className = "cataloguesSelectPhoto"
                } else {
                    cataloguesSelectPhoto[i].className = "cataloguesSelectPhoto selectedCatalogues"
                }
            })


        }

        addCataloguesButton.textContent = "Запази"
        removeCataloguesButton.textContent = "Отмени"

    } else if (addCataloguesButton.textContent === "Запази") {

        let selectedCatalogues = document.getElementsByClassName("selectedCatalogues")

        for (let i = 0; i < selectedCatalogues.length; i++) {

            let indexNumber = selectedCatalogues[i].src.indexOf("/public")

            let link = "." + selectedCatalogues[i].src.substring(indexNumber)

            currentCatalogues.push(link)
        }


        for (let i = 0; i < currentCataloguesDiv.length; i++) {

            for (let a = 0; a < currentCataloguesDiv[i].children.length; a++) {
                currentCataloguesDiv[i].children[a].remove()

                a--
            }

        }


        currentCataloguesFunc()

        addCataloguesButton.textContent = "Добави"
        removeCataloguesButton.textContent = "Изтрий"

    } else if (addCataloguesButton.textContent === "Отмени") {
        for (let i = 0; i < currentCataloguesDiv.length; i++) {

            for (let a = 0; a < currentCataloguesDiv[i].children.length; a++) {
                currentCataloguesDiv[i].children[a].remove()

                a--
            }

        }

        currentCataloguesFunc()

        addCataloguesButton.textContent = "Добави"
        removeCataloguesButton.textContent = "Изтрий"
    }


})


removeCataloguesButton.addEventListener("click", (e) => {
    e.preventDefault()

    if (removeCataloguesButton.textContent === "Отмени") {
        for (let i = 0; i < currentCataloguesDiv.length; i++) {

            for (let a = 0; a < currentCataloguesDiv[i].children.length; a++) {
                currentCataloguesDiv[i].children[a].remove()

                a--
            }

        }

        currentCataloguesFunc()

        addCataloguesButton.textContent = "Добави"
        removeCataloguesButton.textContent = "Изтрий"


    } else if (removeCataloguesButton.textContent === "Изтрий") {



        for (let i = 0; i < cataloguesSelectPhoto.length; i++) {

            cataloguesSelectPhoto[i].addEventListener("click", (e) => {
                e.preventDefault()

                if (cataloguesSelectPhoto[i].className === "cataloguesSelectPhoto selectedCatalogues") {
                    cataloguesSelectPhoto[i].className = "cataloguesSelectPhoto"
                } else {
                    cataloguesSelectPhoto[i].className = "cataloguesSelectPhoto selectedCatalogues"
                }
            })


        }


        addCataloguesButton.textContent = "Отмени"
        removeCataloguesButton.textContent = "Потвърди"

    } else if (removeCataloguesButton.textContent === "Потвърди") {

        let selectedCatalogues = document.getElementsByClassName("selectedCatalogues")

        for (let i = 0; i < selectedCatalogues.length; i++) {

            let indexNumber = selectedCatalogues[i].src.indexOf("/public")

            let link = "." + selectedCatalogues[i].src.substring(indexNumber)

            let currentLinkIndex = currentCatalogues.indexOf(link)

            currentCatalogues.splice(currentLinkIndex, 1)
        }


        for (let i = 0; i < currentCataloguesDiv.length; i++) {

            for (let a = 0; a < currentCataloguesDiv[i].children.length; a++) {
                currentCataloguesDiv[i].children[a].remove()

                a--
            }

        }


        currentCataloguesFunc()

        addCataloguesButton.textContent = "Добави"
        removeCataloguesButton.textContent = "Изтрий"
    }
})

let counter = 1

calender()

function calender() {

    let month = ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"]

    let dateObject = new Date()

    currentMonth.textContent = month[dateObject.getMonth()]
    currentNumberMonth.textContent = dateObject.getMonth() + 1 < 10 ? `00${dateObject.getMonth() + 1}` : `0${dateObject.getMonth() + 1}`
    currentDate.textContent = `${dateObject.getDate() < 10 ? `0${dateObject.getDate()}` : dateObject.getDate()}.${dateObject.getMonth() + 1 < 10 ? `0${dateObject.getMonth() + 1}` : dateObject.getMonth() + 1}.${dateObject.getFullYear()}`

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

    for (let i = 0; i < dateNumber.length; i++) {
        dateNumber[i].addEventListener("click", (e) => {
            e.preventDefault()


            calenderReview.style.display = "none"
            calenderAdministration.style.display = "flex"
            isCalender = false
            document.getElementsByTagName("body")[0].style.backgroundColor = "#ffffff"
            document.getElementById("nav-index").style.background = "none"
            document.getElementsByClassName("fa-solid")[0].style.color = "#545454"
            document.getElementsByClassName("translateEN")[0].style.color = "#545454"
            document.getElementsByClassName("logo-nav-1")[0].style.display = "none"
            document.getElementsByClassName("logo-nav-2")[0].style.display = "flex"
        })
    }

}

let renewButton = document.getElementsByClassName("renew-button")[0]

renewButton.addEventListener("click", (e) => {
    e.preventDefault()

    document.getElementsByClassName("ads-checker")[0].style.color = "#77b800"
    document.getElementsByClassName("days-counter")[0].textContent = "07"
    document.getElementsByClassName("ads-counter")[0].textContent = "10"
})


let addOfferPage = document.getElementsByClassName("add-offer-page")[0]
let addOfferButton = document.getElementsByClassName("add-offer-button")[0]
let allOffer = document.getElementsByClassName("all-offer")[0]

addOfferPage.style.display = "none"

addOfferButton.addEventListener("click", (e) => {
    e.preventDefault()

    if (addOfferButton.textContent === "Добави оферта") {
        allOffer.style.display = "none"
        addOfferPage.style.display = "flex"
        addOfferButton.textContent = "Публикувай"
    } else {
        allOffer.style.display = "block"
        addOfferPage.style.display = "none"
        addOfferButton.textContent = "Добави оферта"
    }
})

saveBookingButton.addEventListener("click", (e) => {
    e.preventDefault()

    calenderReview.style.display = "flex"
    calenderAdministration.style.display = "none"
    isCalender = true
    document.getElementById("nav-index").style.background = "none"
    document.getElementsByClassName("fa-solid")[0].style.color = "#DCDFDE"
    document.getElementsByClassName("translateEN")[0].style.color = "#DCDFDE"
    document.getElementsByClassName("logo-nav-1")[0].style.display = "flex"
    document.getElementsByClassName("logo-nav-2")[0].style.display = "none"
    document.getElementsByTagName("body")[0].style.backgroundColor = "#535351"
})











