$(document).ready(function () {

    $(".loginForgotLink").click(function () {
        $(".loginFindPwPopup").css("display", "block");
    });

    $(".loginFindPwClose").click(function () {
        $(".loginFindPwPopup").css("display", "none");
    });
});
