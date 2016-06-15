$("body, .btn").mousedown(function () {
   $(this).addClass("mouseDown");
}).mouseup(function () {
   $(this).removeClass("mouseDown");
});