$("#form").on("submit", function () {
    $("#wait").addClass('wait');
    $("#main").fadeTo(500, 0)
    $("#wait").fadeTo(1000, 1)
    event.preventDefault();
    $.ajax({
        url: '/new-game/new-world',
        method: 'post',
        dataType: 'html',
        data: $(this).serialize(),
        success: function (data) {
            window.location.replace("/app?key=" + data);
        }
    });
});

$("#game").on("submit", function () {
    $("#subm").attr("disabled", true);
    event.preventDefault();
    $.ajax({
        url: '#',
        method: 'post',
        dataType: 'html',
        data: $(this).serialize(),
        success: function (data) {
            $("#subm").attr("disabled", false);
            $('#div').append('</br><p style="color: rgb(247,251,255);">>>> '+ data);
        }
    });
});
