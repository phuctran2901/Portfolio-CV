
window.addEventListener('load', function () {
    const home = document.getElementsByClassName('home')[0];
    setTimeout(function () {
        home.classList.add('active');
    }, 500);
    document.querySelector('.navbar-item.active').style.color = '#ffb400';
    if (localStorage.getItem('mode') === 'dark-mode')
        document.documentElement.setAttribute('theme', "dark");
    else
        document.documentElement.setAttribute('theme', "light");
})


// Button control change color
const controlButton = document.getElementById('controls');
controlButton.addEventListener('click', () => {
    const control = document.getElementsByClassName('control')[0];
    document.querySelector('.navbar-menu').classList.remove('active');
    document.querySelector('.main-container').classList.remove('active');
    control.classList.toggle('active');
})

// acitve navbar menu
var navbarMenu = document.querySelectorAll('.navbar-item');
navbarMenu.forEach((navbar, index) => {
    navbar.addEventListener('click', function () {
        const listSlide = ['.home', '.about', '.project', '.contact'];
        listSlide.forEach(slide => {
            document.querySelector(slide).classList.remove('active');
        })
        const activeSlide = document.querySelector(listSlide[index]);
        activeSlide.classList.add('active');
    })
})

// change color
const titleAbout = document.querySelector('.about-introduce h2 span');
const buttonColor = document.querySelectorAll('.color-icon span');
const changeColor = document.querySelectorAll('.change-color');
const changeBoder = document.querySelectorAll('.change-border');
const socicals = document.querySelectorAll('.home-socical div');
const navbar = document.querySelectorAll('.navbar-item');
const btnAbout = document.querySelectorAll('.btn');
var colorMenu = '#ffb400';
for (let i = 0; i < navbar.length; i++) {
    navbar[i].addEventListener('click', function () {
        for (let j = 0; j < navbar.length; j++) {
            navbar[j].classList.remove('active');
            navbar[j].style.color = "inherit";
        }
        navbar[i].classList.add('active');
        navbar[i].style.color = colorMenu;
        document.querySelector('.navbar-menu').classList.remove('active');
        document.querySelector('.main-container').classList.remove('active');
    })
}


for (let i = 0; i < buttonColor.length; i++) {
    buttonColor[i].addEventListener('click', (e) => {
        const color = ['#ec1839', '#2196f3', '#fa5b0f', '#ffb400', '#72b626'];
        for (let j = 0; j < socicals.length; j++) {
            socicals[j].style.backgroundColor = color[i];
        }
        changeColor.forEach((el, index) => {
            if (index < 9 || index === 12) {
                el.style.backgroundColor = color[i];
            } else {
                el.style.color = color[i];
            }
        })
        navbarMenu.forEach((navbar) => {
            navbar.style.color = "inherit";
        })
        document.querySelector('.navbar-item.active').style.color = color[i];
        colorMenu = color[i];
        changeBoder.forEach(border => {
            border.style.borderColor = color[i];
        })
        titleAbout.style.color = color[i]
        btnAbout.forEach(btn => {
            btn.style.backgroundColor = color[i];
        })
    })
}
// Change color body 
const valueColorBody = document.querySelectorAll('.color-body');

valueColorBody.forEach(value => {
    if (value.value === localStorage.getItem('mode')) {
        value.checked = true;
    }
    value.addEventListener('click', function () {
        if (value.value === 'dark-mode') {
            localStorage.setItem('mode', 'dark-mode');
            document.documentElement.setAttribute('theme', "dark");
        } else if (value.value == 'light-mode') {
            localStorage.setItem('mode', 'light-mode');
            document.documentElement.setAttribute('theme', "light");
        }
    })
})

// gallery
const galleryList = document.querySelectorAll('.lightgallery');
galleryList.forEach(gallery => {
    lightGallery(gallery);
});
// filter gallery
var sortBtn = document.querySelector('.menu-list').children;
var sortItem = document.querySelector('.list-project').children;
for (let i = 0; i < sortBtn.length; i++) {
    sortBtn[i].addEventListener('click', function () {
        for (let j = 0; j < sortBtn.length; j++) {
            sortBtn[j].classList.remove('current');
            sortBtn[j].classList.remove('active');
        }

        sortBtn[i].classList.add('active');
        this.classList.add('current');


        let targetData = this.getAttribute('data-target');
        for (let k = 0; k < sortItem.length; k++) {
            sortItem[k].classList.remove('active');
            sortItem[k].classList.add('delete');

            if (sortItem[k].getAttribute('data-item') == targetData || targetData == "all") {
                sortItem[k].classList.remove('delete');
                sortItem[k].classList.add('active');
            }
        }
    });
}

// Send form to email
window.addEventListener("DOMContentLoaded", function () {

    var form = document.getElementById("form-contact");
    var button = document.getElementById("contact-submit");
    var status = document.getElementById("status-form");


    function success() {
        form.reset();
        button.style = "display: none ";
        status.innerHTML = "Thanks!";
    }
    function error() {
        status.innerHTML = "Send gmail failed !";
    }

    // handle the form submission event

    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}


// control menu
document.querySelector('.control-menubars').addEventListener('click', function () {
    document.querySelector('.navbar-menu').classList.toggle('active');
    document.querySelector('.control-menubars').classList.toggle('active');
    document.querySelector('.main-container').classList.toggle('active')
    document.querySelector('.control').classList.remove('active');
})