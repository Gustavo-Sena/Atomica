const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
    [modal, fade].forEach((el) => el.classList.toggle("hide"))
}

[openModalButton, closeModalButton, fade].forEach((el) =>{
    el.addEventListener("click", (toggleModal))
})

const openModalButton2 = document.querySelector("#open-modal2");
const closeModalButton2 = document.querySelector("#close-modal2");
const modal2 = document.querySelector("#modal2");
const fade2 = document.querySelector("#fade2");

const toggleModal2 = () => {
    [modal2, fade2].forEach((el) => el.classList.toggle("hide"))
}

[openModalButton2, closeModalButton2, fade2].forEach((el) =>{
    el.addEventListener("click", (toggleModal2))
})