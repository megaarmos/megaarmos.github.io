var dropdown_btns = document.querySelectorAll("[data-toggle=dropdown]")

for (var i = 0, s = dropdown_btns.length; i < s; i++) {
    var dropdown_btn = dropdown_btns[i];
    dropdown_btn.addEventListener("click", function (event) {
        for (var j = 0, z = dropdown_btns.length; j < z; j++) {
            if (dropdown_btns[j] != this) {
                dropdown_btns[j].classList.add('collapsed')
                
                var dropdown_inactive = document.querySelector(dropdown_btns[j].getAttribute("data-target"))
                dropdown_inactive.classList.add('collapsed')
            }
        }
        
        event.currentTarget.classList.toggle('collapsed')
        
        var dropdown_active = document.querySelector(this.getAttribute("data-target"))
        var dropdown_active_margin = window.getComputedStyle(dropdown_active.firstElementChild)
        var dropdown_active_height = dropdown_active.firstElementChild.offsetHeight + parseInt(dropdown_active_margin.marginTop)

        if (dropdown_active.classList.contains("collapsed")) {
            dropdown_active.style.cssText = `height: ${dropdown_active_height}px`
            setTimeout(() => {
                dropdown_active.style.cssText = 'heght'
            }, 300)
        }
        else {
            dropdown_active.style.cssText = `height: ${dropdown_active_height}px`
            setTimeout(() => {
                dropdown_active.style.cssText = 'heght'
            }, 5)
        }

        dropdown_active.classList.toggle('collapsed')
    })
}

var nav_links = document.getElementsByClassName('nav-link');

for (nav_link of nav_links) {
    nav_link.addEventListener("click", function (event) { 
        var dropdown_id = event.currentTarget.closest(".navbar-collapse").id
    
        for (dropdown_btn of dropdown_btns) {
            if (dropdown_btn.getAttribute("data-target") == `#${dropdown_id}`) {
                dropdown_btn.click()
            }
        }
    })
}

const navbar = document.querySelector('.navbar')
    
window.addEventListener('load', (event) => {
    document.getElementById('load-screen').classList.add("hide")
    stickyNavbar()
})

window.addEventListener('scroll', () => {
    stickyNavbar()
    activeNavigationButton()
    // hideNavbar()
})

function activeNavigationButton() {
    let offset = 300

    // elements top offset accrodinп to screen
    var aboutme = document.getElementById('aboutme')
    var aboutmePosition = aboutme.getBoundingClientRect().top

    var works = document.getElementById('myworks')
    var worksPosition = works.getBoundingClientRect().top

    var contact = document.getElementById('contact')
    var contactPosition = contact.getBoundingClientRect().top

    let btn_home = document.getElementById('btn-home')
    let btn_works = document.getElementById('btn-works')
    let btn_about = document.getElementById('btn-about')
    let btn_contact = document.getElementById('btn-contact')

    // which element on screen
    if (contactPosition < offset) {
        btn_contact.classList.add('active')
        btn_works.classList.remove('active')
    }
    else if (worksPosition < offset) {
        btn_works.classList.add('active')
        btn_about.classList.remove('active')
        btn_contact.classList.remove('active')
    }
    else if (aboutmePosition < offset) {
        btn_about.classList.add('active')
        btn_home.classList.remove('active')
        btn_works.classList.remove('active')
    }
    else {
        btn_home.classList.add('active')
        btn_about.classList.remove('active')
    }
}

function stickyNavbar() {
    if (window.scrollY > 0) {
        navbar.classList.add('shadow-neutral-200', 'dark:shadow-zinc-700')
        navbar.classList.remove('shadow-transparent')
    }
    else {
        navbar.classList.add('shadow-transparent')
        navbar.classList.remove('shadow-neutral-200', 'dark:shadow-zinc-700')
    }
}

var card = document.getElementById('g-for-card').firstElementChild
card.remove()

var card_html = card.outerHTML

var cards = [
    {
        title: "Modern website",
        text: "This website featuring WebP images, SASS and HTML. <br><br> Directed by University GeekBrains.",
        date: "21<sup>th</sup> September 2021",
        image: "images/proweb.png",
    },
    {
        title: "Website made with CSS and HTML",
        text: "A simple website, made with only CSS and HTML. <br><br> Directed by University GeekBrains.",
        date: "10<sup>th</sup> August 2021",
        image: "images/firstweb.png",
    },
]

cards.forEach(element => {
    var card_html_replaced = ''

    Object.entries(element).forEach(([key, value]) => {
        if (card_html_replaced === '') {
            card_html_replaced = card_html.replace(`{{ ${key} }}`, value)
        }
        else {
            card_html_replaced = card_html_replaced.replace(`{{ ${key} }}`, value)
        }
    })

    document.getElementById('g-for-card').innerHTML = card_html_replaced + document.getElementById('g-for-card').innerHTML
})

function createElementFromHTML(htmlString) {
    var div = document.createElement('div')
    div.innerHTML = htmlString.trim()

    // Change this to div.childNodes to support multiple top-level nodes.
    return div.firstChild
}