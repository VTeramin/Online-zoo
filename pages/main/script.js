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

// Pets Carousel

const animals = [
    {
        img: "../../assets/images/panda.jpg",
        name: "Giant Pandas",
        location: "Native to Southwest China",
        type: "vegeterian"
    },
    {
        img: "../../assets/images/eagle.jpg",
        name: "Eagles",
        location: "Native to South America",
        type: "non-vegeterian"
    },
    {
        img: "../../assets/images/gorilla.jpg",
        name: "Gorillas",
        location: "Native to Congo",
        type: "vegeterian"
    },
    {
        img: "../../assets/images/sloth.jpg",
        name: "Two-toed Sloth",
        location: "Mesoamerica, South America",
        type: "vegeterian"
    },
    {
        img: "../../assets/images/cheetahs.jpg",
        name: "Cheetahs",
        location: "Native to Africa",
        type: "non-vegeterian"
    },
    {
        img: "../../assets/images/penguins.jpg",
        name: "Penguins",
        location: "Native to Antarctica",
        type: "non-vegeterian"
    }
]

shuffle(animals);

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

const arrAnimalCards = document.querySelectorAll(".animal-card");
arrAnimalCards.forEach((animalCard, index) => replaceAnimals(animalCard, index))

function replaceAnimals(animalCard, index) {
    const animalsReplace = [...animals];
    const animal = animalsReplace[index];

    const img = animalCard.querySelector(".animal-card__image");
    img.style.backgroundImage = `url(${animal.img})`;
    
    const name = animalCard.querySelector(".animal-card__type");
    name.textContent = animal.name;

    const location = animalCard.querySelector(".animal-card__origin");
    location.textContent = animal.location;

    const type = animalCard.querySelector(".animal-card__type-icon");
    type.classList = `animal-card__type-icon type-${animal.type}`

    const popName = animalCard.querySelector(".pop-info__name");
    popName.textContent = animal.name;

    const popLocation = animalCard.querySelector(".pop-info__location");
    popLocation.textContent = animal.location;
}

const buttonLeft = document.querySelector(".button-left");
buttonLeft.addEventListener("click", leftScroll);

function leftScroll() {
    const nextAnimals = createNewAnimals();

    const animalScroll = document.querySelector(".animal-cards__animals-scroll");
    animalScroll.append(...nextAnimals);
    animalScroll.style.transform = "translateX(calc(-100% - 30px)";
    animalScroll.style.transition = "1s";

    blockArrowButtons();

    setTimeout(() => {
        animalScroll.style.transform = "translateX(0px)";
        animalScroll.style.transition = "0s";

        const newArrAnimalCards = document.querySelectorAll(".animal-card");
        newArrAnimalCards.forEach((animalCard, index) => index < 6 ? animalCard.remove(): animalCard);

        deBlockArrowButtons()
    }, 1000);
}

const buttonRight = document.querySelector(".button-right");
buttonRight.addEventListener("click", rightScroll);

function rightScroll() {
    const nextAnimals = createNewAnimals();

    const animalScroll = document.querySelector(".animal-cards__animals-scroll");
    animalScroll.prepend(...nextAnimals);
    animalScroll.style.transform = "translateX(calc(-100% - 30px)";
    animalScroll.style.transition = "0s";

    blockArrowButtons();

    setTimeout(() => {
        animalScroll.style.transform = "translateX(0px)";
        animalScroll.style.transition = "1s";
    }, 1);

    setTimeout(() => {
        const newArrAnimalCards = document.querySelectorAll(".animal-card");
        newArrAnimalCards.forEach((animalCard, index) => index >= 6 ? animalCard.remove(): animalCard);

        deBlockArrowButtons()
    }, 1000);
}

function createNewAnimals() {
    const nextAnimals = [];
    arrAnimalCards.forEach(animalCard => nextAnimals.push(animalCard.cloneNode(true)));
    
    shuffle(animals);
    nextAnimals.forEach((animalCard, index) => replaceAnimals(animalCard, index));

    return nextAnimals;
}

function blockArrowButtons() {
    buttonLeft.removeEventListener("click", leftScroll);
    buttonRight.removeEventListener("click", rightScroll);
}

function deBlockArrowButtons() {
    buttonLeft.addEventListener("click", leftScroll);
    buttonRight.addEventListener("click", rightScroll);
}