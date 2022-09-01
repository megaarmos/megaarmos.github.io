const navbar = document.getElementById("navbar")
var prevScrollpos = window.pageYOffset;

window.addEventListener('load', (event) => {
    document.getElementById('load-screen').classList.add("hide")
    stickyNavbar()
})

window.addEventListener('scroll', () => {
    stickyNavbar()
    activeNavigationButton()
    hideNavbar()
})

function hideNavbar() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        navbar.classList.remove('hide')
    } else {
        navbar.classList.add('hide')
    }
    prevScrollpos = currentScrollPos;
  }

function activeNavigationButton() {
    let offset = 300

    // elements top offset accrodinп to screen
    var aboutme = document.getElementById('aboutme')
    var aboutmePosition = aboutme.getBoundingClientRect().top

    var works = document.getElementById('myworks')
    var worksPosition = works.getBoundingClientRect().top

    var contact = document.getElementById('contact')
    var contactPosition = contact.getBoundingClientRect().top

    let btn_contact = document.getElementById('btn-contact')
    let btn_works = document.getElementById('btn-works')
    let btn_about = document.getElementById('btn-about')
    let btn_home = document.getElementById('btn-home')

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

const burger = document.getElementById('icon-burger');
const btn_nav = document.getElementsByClassName('nav-link')

for (var i = 0, length = btn_nav.length; i < length; i++) {
    btn_nav[i].addEventListener('click', () => { 
        if (window.innerWidth < 992) {
            burger.click()
        }
     })
  }

function stickyNavbar() {
    if (window.scrollY > 0) {
        navbar.classList.add('sticky')
    }
    else {
        navbar.classList.remove('sticky')
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