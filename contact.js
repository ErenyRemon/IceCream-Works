
var images = ["images/photo_2024-08-04_16-18-04.jpg", "images/photo_2024-08-04_16-18-00.jpg", "images/photo_2024-08-04_16-17-53.jpg"]
var i = 0;
var timer;

function slider() {

    timer = setInterval(function () {

        i++;
        if (i > 2) {
            i = 0;
        }
        document.images[0].src = images[i]
    }, 2500)
}

function stopslider() {

    clearInterval(timer)
}


var Username = document.getElementsByTagName('input')[0];
var Email = document.getElementsByTagName('input')[1];
var phoneNumber = document.getElementsByTagName('input')[2];
var message = document.getElementsByTagName('input')[3]

var namevalidate = /^[a-zA-Z]{3,12}\s[a-zA-Z]{3,12}$/;
var emailEdit = /^[a-zA-Z]{3,8}@[a-zA-Z]{3,8}\.com$/;
var NumberPhone = /^01(2|5|1|0)[0-9]{8}$/;

function username() {
    var nameValue = Username.value;
    var usernameError = document.getElementById('usernameError');
    if (namevalidate.test(nameValue)) {
        usernameError.style.display = 'none';
        return true;
    } else {
        usernameError.innerText = "Please try enter your username";
        usernameError.style.display = 'block';
        return false;
    }
}

function email() {
    var emailValue = Email.value.trim();
    var emailError = document.getElementById('emailError');
    if (emailEdit.test(emailValue)) {
        emailError.style.display = 'none';
        return true;
    } else {
        emailError.innerText = "Please try enter your email";
        emailError.style.display = 'block';
        return false;
    }
}

function phoneNumberValidation() {
    var NumberPhoneValue = phoneNumber.value.trim();
    var phoneError = document.getElementById('phoneError');
    if (NumberPhone.test(NumberPhoneValue)) {
        phoneError.style.display = 'none';
        return true;
    } else {
        phoneError.innerText = "Please try enter your phone number";
        phoneError.style.display = 'block';
        return false;
    }
}

function submit() {
    if (username() && email() && phoneNumberValidation()) {
        localStorage.setItem('username', Username.value);
        localStorage.setItem('email', Email.value);
        localStorage.setItem('phone', phoneNumber.value);
        localStorage.setItem('message', message.value)

    } else {

    }
}







