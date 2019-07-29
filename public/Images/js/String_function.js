function str_control(param) {
    if (param.name == "myform") {
        var com1 = this.myform.com1;
        var com2 = this.myform.com2;
        var val = true;

        if (com1 < com2) {
            document.getElementById("compare").innerHTML = this.myform.com2.value;
            return false;
        }
        else {
            document.getElementById("compare").innerHTML = this.myform.com1.value;
            return false;
        }
        return val;
    }
    else if (param.name == "myform1") {
        var mainstr = this.myform1.mainstr.value;
        var target = this.myform1.target.value;
        var resultstr = mainstr.split(target);
        var resulttarget = mainstr.substring(mainstr.indexOf(target), mainstr.indexOf(target) + target.length);
        var val = true;

        document.getElementById("result").innerHTML = resultstr[0];
        document.getElementById("result2").innerHTML = resulttarget;
        return false;
    }
    else if (param.name == "myform2") {
        var mainstr = this.myform2.mainstr.value;
        var target = this.myform2.targetstr.value;
        var replace = this.myform2.replacestr.value;
        var val = true;
        var temp = "empty"

        var resultstr = mainstr.replace(target, temp);
        resultstr = resultstr.replace(replace, target);
        resultstr = resultstr.replace(temp, replace);

        document.getElementById("result3").innerHTML = resultstr;
        return false;
    }
}