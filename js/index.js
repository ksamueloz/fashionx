(function() {
    //LLamada a la función Tolltip y Popover
    $("[data-toggle='tooltip']").tooltip();
    $("[data-toggle='popover']").popover();
    $('#carousel').carousel({
        interval: 3000
    });
});