function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

//Табы в About
$("#nav-tab").on("click", ".about-nav__link", function () {
    $("#nav-tab .about-nav__link").removeClass("active_link");
    $(this).addClass("active_link");
});


//slider

$(document).ready(function () {
    $('.slider').slick({
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    })
});





// grab the header element.
const Header = document.getElementById("nav-top");

// construct an instance of Headroom, passing the header elemen.
const headroom = new Headroom(Header, {
    offset: 0,
    tolerance: {
        up: 0,
        down: 0
    },
    classes: {
        initial: "header--fixed",
        pinned: "slideDown",
        unpinned: "slideUp",
        top: "top",
        notTop: "not-top"
    }
});

// initialise
headroom.init();

// When the page is at the top, remove the slideDown class.
window.addEventListener("scroll", () => {
    if (window.pageYOffset === 0) {
        Header.classList.remove("slideDown");
    }
});



// плавный переход 

$(document).ready(function () {                                             // Плавный переход по якорю
    $(".nav-link").on("click", "a", function (event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 2000);
    });
});

$(document).ready(function () {                                             // Плавный переход по стрелке
    $(".intro-description__arrow").on("click", "a", function (event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });
});


// Стрелка наверх


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}