function task01(form){

    if(form.name=="form01"){
        var X = parseInt(form.inputnum1.value);
        var Y = parseInt(form.inputnum2.value);
        var Z = (form.demo1.value);
        if(X > Y){
            Z = X;
        }
        else if(X < Y){
            Z = Y;
        }
        else{
            Z="same";
        }
        form.demo1.value = Z;
    }

    else if(form.name=="form02"){
        var X = form.inputstr.value;
        var Y = form.inputword.value;
        var Z = X.substring(0, X.indexOf(Y));
        form.demo2.value = Z;
    }

    else if(form.name=="form03"){
        var X = form.inputstr02.value;
        var Y1 = form.replaceword01.value;
        var Y2 = form.replaceword02.value;
        var Z = "";

        X = X.split(" ");

        for(var i=0; i<X.length; i++){
            if(X[i] == Y1) {
                Z = Z + (Y2 + " ");
            }
            else if(X[i] == Y2){
                Z = Z + (Y1 + " ");
            }
            else{
                Z = Z + (X[i] + " ");
            } 
         }
         form.demo3.value = Z;
    }
    return Z; 
}
