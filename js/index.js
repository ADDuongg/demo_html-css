const btnbar = document.querySelector('.btnbar');
const btnContact = document.querySelector('.btn-contact');
const btnToTop = document.querySelector('.btnToTop');
const modalHeader = document.querySelector('.modalHeader');
var firstName = document.querySelector('input[name="f-name"]');
var lastName = document.querySelector('input[name="l-name"]');
var email = document.querySelector('input[name="mail"]');
var subject = document.querySelector('input[name="subject"]');
var inquiry = document.querySelector('input[name="inquiry"]');
console.log(firstName);
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
function validate(fname, lname, email, subject, inquiry) {
}
if (btnX) {
    btnX.addEventListener('click', function () {
        modalHeader.classList.toggle('hidden');
    })
}
if (btnContact) {
   
}