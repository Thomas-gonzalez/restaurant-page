import loadPage from "./load-page";
import emptyElement from "./util/empty-element";
import { div } from "./util/create-element";

const dom = {};

loadPage();
cacheDom();
addEvents(); 
loadHomeTab();


function cacheDom() {
    dom.main = document.getElementById('main');
    dom.homeBtn = document.getElementById('home-btn');
    dom.menuBtn = document.getElementById('menu-btn');
    dom.contactBtn = document.getElementById('contact-btn');
}

function addEvents() {
    dom.homeBtn.addEventListener('click', () => {
        loadHomeTab();
    })
    dom.menuBtn.addEventListener('click', () => {
        loadMenuTab();
    })
    dom.contactBtn.addEventListener('click', () => {
        loadContactTab();
    })
}

function loadHomeTab() {
    emptyElement(dom.main);
    const $dummy = div('Home Tab Text!');
    dom.main.appendChild($dummy);
}

function loadMenuTab() {
    emptyElement(dom.main);
    const $dummy = div('Menu Tab Text!');
    dom.main.appendChild($dummy);
}

function loadContactTab() {
    emptyElement(dom.main);
    const $dummy = div('contact tab text!');
    dom.main.appendChild($dummy);
}
