let password = document.querySelector('#password');
let confirm_password = document.querySelector('#confirm_password');
let submit = document.querySelector('#select');

let passwordChecker = function() {

    if(password.value === confirm_password.value) {
        console.log('Passwords are the same');
        password.classList.remove('error')
        confirm_password.classList.remove('error');
        
    } else {
        console.log('Passwords are not the same');
        password.classList.add('error');
        confirm_password.classList.add('error');
    }

};

password.addEventListener('keyup', passwordChecker);

confirm_password.addEventListener('keyup', passwordChecker);