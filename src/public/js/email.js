const Form = document.getElementById('contactForm')

const fullname = document.querySelector('#name input')
const email = document.querySelector('#email input')
const number = document.querySelector('#number input')
const enterprise = document.querySelector('#enterprise input')
const subject = document.querySelector('#subject input')
const message = document.querySelector('#message textarea')

const submitBtn = document.querySelector('#submit input')


Form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitBtn.disabled = true
    console.log('click');
    let formData = {
        fullname: fullname.value,
        email: email.value,
        number: number.value ,
        enterprise: enterprise.value,
        subject: subject.value,
        message: message.value,
    }

    const xhr = new XMLHttpRequest()
    xhr.open('POST', '/email');
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.onload = function(){
        if(xhr.responseText == 'success'){
            fullname.value = '',
            email.value = '',
            number.value = '',
            enterprise.value = '',
            subject.value = '',
            message.value = ''
            submitBtn.disabled = false

            Toastify({
                text: `Email Sent!`,
                className:'alert',
                duration: 2000,
                newWindow: true,
                close: false,
                gravity: "top", 
                position: "right", 
                stopOnFocus: false,
                style: {
                    fontSize: '20px',
                    background: '#053c9b',
                    borderRadius:'6px'
                },
            }).showToast();
        }
    }
    xhr.send(JSON.stringify(formData))
})