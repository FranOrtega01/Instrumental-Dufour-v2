const firstAccordion = document.getElementById('firstAccordion')
const firstAccordionBtn = document.getElementById('firstAccordionBtn')

firstAccordionBtn.addEventListener('click', () => {
    setTimeout(() => {
        firstAccordion.checked = true
    }, 1000);
})