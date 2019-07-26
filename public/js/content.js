$(function () {
    $("#btn1").click(function () {
        $("#str").empty();
    });
    $("#btn2").click(function () {
        $("#str").html($("#bval").val());
    });
    $("#btn3").click(function () {
        $("#str").append($("#bval").val());
    });

    $("#gname").click(function () {
        $("#result").html($("#name").val());
    });
    $("#gcomm").click(function () {
        $("#result").html($("#comments").val());
    });
    $("#gcity").click(function () {
        $("#result").html($("#city").val());
    });

    $("#togglebtn").click(function () {
        var checked = $(":checkbox:checked").length;
        if (checked == 0) {
            $(":checkbox").prop('checked', true);
            $(":checkbox").attr('checked', true);
        }
        else if (checked == 4) {
            $(":checkbox").prop('checked', false);
            $(":checkbox").attr('checked', false);
        }
    });

});