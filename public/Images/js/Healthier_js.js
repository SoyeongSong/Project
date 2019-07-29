



function loginChk(){

 
    
}

function joinChk(this_from){
    alert("123");
    var pw1 = document.getElementById("password1").Value;
    var pw2 = document.getElementById("password2").Value;

    if (pw1 != pw2){
        alert('비밀번호가 틀렸습니다. 다시 입력해주세요');
        return false;
    }

}


function setCookie(_form) { 
    var d = new Date(); 
    d.setTime(d.getTime() + (20 * 24 * 60 * 60 * 1000)); 
    var expires = "expires=" + d.toGMTString(); 
    document.cookie = _form.email.id + "=" + _form.email.value + ";" + expires + ";path=/"; 
    document.cookie = _form.cbox.id + "=" + _form.cbox.checked + ";" + expires + ";path=/"; 
} 

function searchCookie(name) { 
     var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)'); 
     return value? value[2] : null; 
 } 
 
 function getCookie(_form) { 
     if(searchCookie('email') !=null && searchCookie('chkMe') !=null){ 
         if(searchCookie('chkMe')=='true'){ 
            _form.value = searchCookie('email'); 
            _form.chkMe.setAttribute("checked", "checked"); 
         } 
     } 
 }






















// function myFunction(){
//     document.getElementById("agree").innerHTML = ""}
//     window.alert();
//     console.log();
// }

// $(function(){ 
//     $("#btn1").click(function(){ $("#content").html("Text: " + $("#test").text()); }); 
//     $("#btn2").click(function(){ $("#content").html("HTML: " + $("#test").html()); }); 
//     $("#btn3").click(function(){ $("#content").html("Value: " + $("#test01").val()); }); 
//     $("#lab").click(function(){ 
//         $("#content").html("Attribute: " + $("#google").attr("href")); 
//     }); 
// }); 