$(function() {
    //LLamada a la función Tolltip y Popover
    $("[data-toggle='tooltip']").tooltip();
    $("[data-toggle='popover']").popover();
    //Tiempo de 2 segundos para el carousel.
    $('.carousel').carousel({
        interval: 2000
    });
});