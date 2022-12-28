// Header menu

const burger = document.querySelector(".header__burger");
burger.addEventListener("click", openMenu);

function openMenu() {
    createMenu();
    createCloseMenu();
}

function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('open-menu');
    menu.innerHTML = `
    <div class="wrapper open-menu__wrapper">
        <a href="https://vteramin.github.io/Online-zoo/pages/main/" class="logo open-menu__logo">PetStory online<span class="bamboo"></span></a>
            <nav class="open-menu__navigation">
                <ul class="navigation">
                    <li class="navigation__link"><a href="#promo">About</a></li>
                    <li class="navigation__link"><a href="#backstage">Map</a></li>
                    <li class="navigation__link"><a href="#animals-cards">Zoos</a></li>
                    <li class="navigation__link"><a href="#pick-friend">Donate</a></li>
                    <li class="navigation__link"><a href="#footer">Contact us</a></li>
                </ul>
            </nav>
            <a href="https://www.figma.com/file/jfEFwkXVj1WRq7sUHDr8os/PetStory-online" class="open-menu__designer">Designed by ©</a>
            <span class="open-menu__close"></span>
    </div>
    <div class="shadow"></div>
`;
    document.body.append(menu);

    const html = document.querySelector('html');
    html.style.overflow = 'hidden';
}

function createCloseMenu() {
    const closeIcon = document.querySelector(".open-menu__close");
    closeIcon.addEventListener("click", closeMenu);

    const shadow = document.querySelector(".shadow");
    shadow.addEventListener("click", closeMenu);

    const openMenuLinks = document.querySelectorAll(".open-menu .navigation__link");
    openMenuLinks.forEach(link => link.addEventListener("click", closeMenu));
}

function closeMenu() {
    const menu = document.querySelector(".open-menu")
    document.body.removeChild(menu);

    const html = document.querySelector('html');
    html.style.overflow = 'visible';
}