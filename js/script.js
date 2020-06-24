$('.ic_login').click(function () {
    $("#login").css("top", "50%");
    $("#login").css("left", "50%");
    $("#login").css("transform", " translate(-50%, -50%);");
    $("#login").css("transition", "all 0.8s");
    $("header").css("opacity", "0.7");
    $("section").css("opacity", "0.7");
    $("footer").css("opacity", "0.7");    
});
