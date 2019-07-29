



function loginChk(){

 
    
}

function joinChk(this_from){
    var pw1 = this_from.getElementById("password1").Value;
    var pw2 = this_from.getElementById("password2").Value;


    alert("123");
    if (pw1 != pw2){
        alert("비밀번호가 일치하지 않습니다.");
        return false;
    }

    
}


// function setCookie(_form) { 
//     var d = new Date(); 
//     d.setTime(d.getTime() + (20 * 24 * 60 * 60 * 1000)); 
//     var expires = "expires=" + d.toGMTString(); 
//     document.cookie = _form.email.id + "=" + _form.email.value + ";" + expires + ";path=/"; 
//     document.cookie = _form.cbox.id + "=" + _form.cbox.checked + ";" + expires + ";path=/"; 
// } 

// function searchCookie(name) { 
//      var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)'); 
//      return value? value[2] : null; 
//  } 
 
//  function getCookie(_form) { 
//      if(searchCookie('email') !=null && searchCookie('chkMe') !=null){ 
//          if(searchCookie('chkMe')=='true'){ 
//             _form.value = searchCookie('email'); 
//             _form.chkMe.setAttribute("checked", "checked"); 
//          } 
//      } 
//  }
