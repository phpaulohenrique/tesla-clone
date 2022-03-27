const fullPageEl = document.getElementById("fullpage");
const blurOverlay = document.querySelector(".blur__overlay");

const menuBtn = document.querySelector('.menu__btn'); 

const navigation = document.querySelector(".navigation");
const navCloseBtn = document.querySelector(".navigation__close__btn");
const navCountriesCloseBtn = document.querySelector(".navigation__countries__close__btn")

const navLinkCountry = document.getElementById("nav__link_country");

const navCountries = document.querySelector(".navigation__countries");
const allNavLinks = document.querySelectorAll(".nav__link");


const CLICK = 'click';

const IS_ACTIVE = "is--active";

const toggleNavigation = () => {

    navigation.classList.toggle(IS_ACTIVE);
    blurOverlay.classList.toggle(IS_ACTIVE);
    fullPageEl.classList.toggle("no-scroll");
    disableNavigationCountries();

};


const toggleNavigationCountries = () => {

    navCountries.classList.toggle(IS_ACTIVE);


}

const disableNavigation = () => {

    navCountries.classList.remove(IS_ACTIVE);

    navigation.classList.remove(IS_ACTIVE);
    blurOverlay.classList.remove(IS_ACTIVE);
    fullPageEl.classList.remove("no-scroll");
};

const disableNavigationCountries = () => {

    navCountries.classList.remove(IS_ACTIVE);

    // navigation.classList.remove(IS_ACTIVE);
    // blurOverlay.classList.remove(IS_ACTIVE);
    // fullPageEl.classList.remove("no-scroll");

};

// const removeAllNavLinks = () => {

//     console.log(allNavLinks);

//     Array.from(allNavLinks.map((n) => n.classList.add("is--hidde")));
//     // allNavLinks.map((n) => n.classList.add("is--hidde"));

//     // allNavLinks.classList.toggle("is--hidde");

// }



menuBtn.addEventListener(CLICK, toggleNavigation);
navCloseBtn.addEventListener(CLICK, toggleNavigation);
blurOverlay.addEventListener(CLICK, toggleNavigation);

navLinkCountry.addEventListener(CLICK, toggleNavigationCountries);

navCountriesCloseBtn.addEventListener(CLICK, disableNavigation);
