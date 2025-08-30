$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        var icon = $('#mobile_btn').find("i");
        icon.toggleClass('fa-bars fa-x');
    });
});