const password=document.querySelector('#password');
const passConfirm=document.querySelector('#confirm_password');

passConfirm.addEventListener('change',(e)=>{
    const pass1 = password.value;
    const confirm = passConfirm.value;
    if (pass1 != confirm){
        passConfirm.setCustomValidity("Does not match.");
        password.setCustomValidity("Does not match.")
    }
    else{passConfirm.setCustomValidity("");
         password.setCustomValidity("");}
})