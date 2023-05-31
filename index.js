let form = document.querySelector("form");
let userName = document.querySelector("#userName");
let email = document.querySelector("#email");
const warning = document.getElementById("warning");


form.addEventListener("submit", function(e) {
    e.preventDefault()

    if (userName.value === '' || email.value === ''){
        warning.style.display = "block"

        setTimeout(() => {
            warning.style.display = "none"
        }, 5000)
        return
    }else{
        alert(`
        Hello ${userName.value}🎊,
        your form has been submitted succesfully.
        Your email is ${email.value}.`
        );

        userName.value = "";
        email.value = "";
    }

});

