
function setCookie(form) {
    var d = new Date();
    var expires = "expires=" + d.toGMTString();
    document.cookie = txtEmail.value + "=" + txtPassword.value + ";" + expires + ";path=/";
    alert(document.cookie);
}

function getCookie(form) {
    var name = document.cookie;
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split('=');
    
    return ca[0];
}



