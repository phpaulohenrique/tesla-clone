const menuBtn = document.querySelector('.menu__btn'); 
const navigation = document.querySelector(".navigation");
const navCloseBtn = document.querySelector(".navigation__close__btn");
const blurOverlay = document.querySelector(".blur__overlay");
const fullPageEl = document.getElementById("fullpage");

const CLICK = 'click';

const IS_ACTIVE = "is--active";

const toggleNavigation = () => {

    navigation.classList.toggle(IS_ACTIVE);
    blurOverlay.classList.toggle(IS_ACTIVE);
    fullPageEl.classList.toggle("no-scroll");

};

menuBtn.addEventListener(CLICK, toggleNavigation);
navCloseBtn.addEventListener(CLICK, toggleNavigation);
blurOverlay.addEventListener(CLICK, toggleNavigation);

