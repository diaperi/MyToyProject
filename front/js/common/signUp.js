$(document).ready(function () {

    $(".signUpForgotLink").click(function () {
        $(".signUpPopup").css("display", "block");
    });

    $(".signUpPopupClose").click(function () {
        $(".signUpPopup").css("display", "none");
    });
});
