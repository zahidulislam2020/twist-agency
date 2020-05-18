
const header = document.querySelector("header");
const logo = document.querySelector(".logo-text");
const navItems = document.querySelector(".nav-links");
const searchIcon = document.querySelector(".fa-search");

const sectionOne = document.querySelector(".header-section");


const sectionOneOptions = {
    rootMargin: "-625px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
    entries,
    sectionOneObserver
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            header.classList.add("sticky-navbar-obs");
            logo.classList.add("logo-text-obs");
            navItems.classList.add("nav-links-obs");
            searchIcon.classList.add("fa-search-obs");
        } else {
            header.classList.remove("sticky-navbar-obs");
            logo.classList.remove("logo-text-obs");
            navItems.classList.remove("nav-links-obs");
            searchIcon.classList.remove("fa-search-obs");
        }
    });
},

sectionOneOptions);

sectionOneObserver.observe(sectionOne);





