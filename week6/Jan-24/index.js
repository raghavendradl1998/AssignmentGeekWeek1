const form = document.getElementById('form');
const Username = document.getElementById('Username');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');

form.addEventListener('submit',e =>{
    e.preventDefault();
    checkInput();
})


function checkInput(){
    const usernameValue = Username.value.trim();
    const emailValue = email.value.trim();
    const password1Value = password1.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue == ''){
        setError(Username,'username cannot be black')
    }
    else
    {
        setSuccess(Username);
    }

    if(emailValue === ''){
        setError(email,'Email cannot Be blank');
    }
    else if(!(emailValue))
    {
        setError(email,'Not a valid Email');
    }
    else{
        setSuccess(email);
    }


    if(password1Value === ''){
        setError(Password1,'Password cant be blanck');
    }else{
        setSuccess(password1)
    }
    

    if(password2Value === ''){
        setError(password2,'Password cant be blanck');
    }
    else if(password1Value !== password2Value){
        setError(password2,'Password Doesnot match')
    }
    else
    {
        setSuccess(password2 );
    }


    function setError(input,message){
        const formControl =input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'form-control error';
        small.innerText = message
    }

    function setSuccess(input){
        const formControl = input.parentElement;
        formControl.className = 'form-control success '

    }

}





