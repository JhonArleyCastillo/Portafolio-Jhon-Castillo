/* GENERAL */

@import url('https://fonts.googleapis.com/css2?family=Castoro&display=swap');

* {
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Castoro', serif;
}
/* GENERAL */

@import url("");
/* Se implementa el link de la fuente  deseada
(Falta de buscar, descargar e insertar la feunte) */

* {
    margin: 0;
    padding: 0;
}

body {
    font-family: "", sans-serif;
    /*Entre las comillas se inserta
    el nombre de el tipo de fuente que descargamos.*/
}

html {
    scroll-behavior: smooth;
}

p {
    color: rgb(85, 85, 85);
}

/* TRANSITION */

a,
.btn {
    transition: all 300ms ease;
}

/* DESKTOP NAV */

nav,
.nav-links {
    display: flex;
}

nav {
    justify-content: space-around;
    align-items: center;
    height: 17vh;
}

.nav-links {
    gap: 2rem;
    list-style: none;
    font-size: 1.5rem;
}

a {
    color: black;
    text-decoration: none;
    text-decoration-color: white;
}

a:hover {
    color: grey;
    text-decoration: underline;
    text-underline-offset: 1rem;
    text-decoration-color: rgb(181, 181, 181);
}

.logo {
    font-size: 2rem;
}

.logo:hover {
    cursor: default;
}

/* HAMBURGUER MENU */

#hamburguer-nav {
    display: none;
}

.hamburguer-menu {
    position: relative;
    display: inline-block;
}

.hamburguer-icon {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 24px;
    width: 30px;
    cursor: pointer;
}

.hamburguer-icon span {
    width: 100%;
    height: 2px;
    background-color: black;
    transition: all 0.3 ease-in-out;
}

.menu-links {
    position: absolute;
    top: 100%;
    right: 0;
    background-color: white;
    width: fit-content;
    max-height: 0;
    overflow: hidden;
    transition: all 0.3 ease-in-out;
}

.menu-links a {
    display: block;
    padding: 10px;
    text-align: center;
    font-size: 1.5rem;
    color: black;
    text-decoration: none;
    transition: all 0.3 ease-in-out;
}

.menu-links li {
    list-style: none;
}

.menu-links.open {
    max-height: 300px;
}

.hamburguer-icon.opne span:first-child {
    transform: rotate(45deg) translate(10px, 5px);
}

.hamburguer-icon.open span:nth-child(2) {
    opacity: 0;
}

.hamburguer-icon.open span:last-child {
    transform: rotate(-45deg) translate(10px, -5px);
}

.hamburguer-icon span:first-child {
    transform: none;
}

.hambuerguer-icon span:first-child {
    opacity: 1;
}

.hambuerguer-icon span:first-child{
    transform: none;
}

/* SECTION */

section {
    padding-top: 4vh;
    height: 96vh;
    margin: 0 10rem;
    box-sizing: border-box;
    min-height: fit-content;
}

.section-container {
    display: flex;
}

/* PROFILE SECTION */

#profile {
    display: flex;
    justify-content: center;
    gap: 5rem;
    height: 80vh;
}

.section_pic-container {
    display: flex;
    height: 400px;
    width: 400px;
    margin: auto 0;
}

.section__text {
    align-self: center;
    text-align: center;
}

.section_text p {
    font-weight: 600;
}

.section_text_p1 {
    text-align: center;
}

.section_text_p2 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
}

.title {
    font-size: 3rem;
    text-align: center;
}

#socials-container {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    gap: 1rem;
}

/* ICONS */

.icon {
    cursor: pointer;
    height: 2rem;
}

/* BUTTONS */

.btn-container {
    display: flex;
    justify-content: center;
    gap: 1rem;
}

.btn {
    font-weight: 600;
    transition: all 300ms ease;
    padding: 1rem;
    width: 8rem;
    border-radius: 2rem;
}

.btn-color-1,
.btn-color-2 {
    border: rgb(53, 53, 53) 0.1rem solid;
}

.btn-color-1:hover,
.btn-color-2:hover {
    cursor: pointer;
}

.btn-color-1,
.btn-color-2:hover {
    background: rgb(53, 53, 53);
    color: white;
}

.btn-color-1:hover {
    background: rgb(0, 0, 0);
}

.btn-color-2 {
    background: none;
}

.btn-color-2:hover {
    border: rgb(255, 255, 255) 0.1rem solid;
}

.btn-container{
    gap: 1rem;
}