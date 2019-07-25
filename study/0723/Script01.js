    
function task01(form){
    
    if(form.name=="form01"){
        var X=parseInt(form.num1.value)
        var Y=parseInt(form.num2.value)
        var Z=(form.demo1.value)
        if(X>Y){
            Z = X;
        }
        else if(X<Y){
            Z = Y;
        }
        else{
            Z="same".toString();
        }
    }


    else if(form.name=="form02"){
        var X = form.inputstr.value;
        var Y = form.inputword.value;
        var Z = X.substring(0, str.indexof(Y));
        form.demo2.value = Z;
    }

    else if(form.name=="form03"){

        var X = form.inputstr02.value;
        var Y01 = form.replaceword01.value;
        var Y02 = form.replaceword02.value;
        var Temp;
        var Z= A.split("");

        //아 모르겠다.... 어떻게하지

    
    return Z;
}



//     }else if(this_form.name=="myform3"){
//         var str2 = this_form.str2.value;
//         var word1 = this_form.word1.value;
//         var word2 = this_form.word2.value;
//         var txt = "";
//         var a = str2.split(" ");
        
//         for(i of a){
//             if(i== word1){
//                 txt += word2 +" ";
//             }else if(i==word2){
//                 txt += word1+" ";
//             }else
//                 txt +=i+" ";
//         }
    
//         this_form.demo03.value = txt;
//     }
    
//     return false;
// }
// }
