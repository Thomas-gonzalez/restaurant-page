import { div, button } from "./util/create-element";

export default function loadPage() {
    const $content = document.getElementById('content');

    $content.appendChild(header());
    $content.appendChild(main());
    $content.appendChild(footer());

    function header() {
        const $header = div();
        $header.id = 'header';

        $header.appendChild(home());
        $header.appendChild(menu());
        $header.appendChild(contact());

        function home() {
            const $home = button('Home');
            $home.id = 'home-btn';
            return $home;
        }
        function menu() {
            const $menu = button('Menu');
            $menu.id = 'menu-btn';
            return $menu;
        }
        function contact() {
            const $contact = button('Contact');
            $contact.id = 'contact-btn';
            return $contact;
        }

        return $header;
    }
    
    function main() {
        const $main = div('Main text!');
        $main.id = 'main';
        return $main;
    }

    function footer() {
        const $footer = div('Footer text!');
        $footer.id = 'footer';
        return $footer;
    }
}