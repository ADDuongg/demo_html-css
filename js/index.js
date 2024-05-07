const btnbar = document.querySelector('.btnbar');
const btnToTop = document.querySelector('.btnToTop');
const modalHeader = document.querySelector('.modalHeader');
const btnX = document.querySelector('.btnX');
btnbar.addEventListener('click', function () {
    modalHeader.classList.toggle('hidden');
})
btnToTop.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});

if (btnX) {
    btnX.addEventListener('click', function () {
        modalHeader.classList.toggle('hidden');
    })
}