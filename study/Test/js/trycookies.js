
function setCookie(this_form) { 
    var d = new Date(); 
    d.setTime(d.getTime() + (20 * 24 * 60 * 60 * 1000)); 
    var expires = "expires=" + d.toGMTString(); 
    document.cookie = this_form.email.id + "=" + this_form.email.value + ";" + expires + ";path=/"; 
    document.cookie = this_form.cbox.id + "=" + this_form.cbox.checked + ";" + expires + ";path=/"; 
} 

function searchCookie(name) { 
     var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)'); 
     return value? value[2] : null; 
 } 
 
 function getCookie(this_form) { 
     if(searchCookie('email') !=null &&searchCookie('cbox') !=null){ 
         if(searchCookie('cbox')=='true'){ 
             this_form.email.value = searchCookie('email'); 
             this_form.cbox.setAttribute("checked", "checked"); 
         } 
     } 
 } 
