$(document).ready(function (){
    $("body, .btn").mousedown(function () {
       $(this).addClass("mouseDown");
    }).mouseup(function () {
       $(this).removeClass("mouseDown");
    });
});
//$(document).find(".dragable").draggable();
