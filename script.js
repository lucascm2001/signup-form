// check that the password inputs match

const pwd = document.querySelector('#pwd');
const confirmPwd = document.querySelector('#confirm-pwd');
const small = document.querySelector('small');

function checkPasswords(pass1, pass2) {
    if (pass1.value !== pass2.value) {
        pass1.style.border = '1px solid red';
        pass2.style.border = '1px solid red';
        small.textContent = 'Passwords must match';
    }
    else {
        pass1.style.border = '1px inset rgba(118, 118, 118, 0.5)';
        pass2.style.border = '1px inset rgba(118, 118, 118, 0.5)';
        small.textContent = '';
    }
}

confirmPwd.addEventListener('input', () => checkPasswords(pwd, confirmPwd));
pwd.addEventListener('input', () => checkPasswords(pwd, confirmPwd));