const emailTriggerElements = document.querySelectorAll('.email-trigger');
const emailElement = document.querySelector('.email');
const iconAt = document.querySelector('.icon-at');
const numberTop = document.querySelector('.number-top');
const numberBottom = document.querySelector('.number-bottom');
const header = document.querySelector('header');
const closeButton = document.querySelector('button.close');
let scrollYPos;

emailTriggerElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        iconAt.classList.add('roll');
        numberTop.classList.add('shake-delay');
        numberBottom.classList.add('shake');

        iconAt.onanimationend = () => {
            iconAt.classList.remove('roll');
        };

        numberTop.onanimationend = () => {
            numberTop.classList.remove('shake-delay');
        };

        numberBottom.onanimationend = () => {
            numberBottom.classList.remove('shake');
        };
    });

    element.addEventListener('click', () => {
        scrollYPos = window.scrollY;
        header.classList.add('header-down');
        document.body.classList.add('fixed-scroll');
    });
});

closeButton.addEventListener('click', () => {
    header.classList.remove('header-down');
    document.body.classList.remove('fixed-scroll');
    window.scrollTo({ top: scrollYPos });
});
