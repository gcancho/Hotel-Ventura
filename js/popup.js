/* POPUP ROOM */
let btnAbrirPopupRoom1 = document.getElementById('btn-abrir-popup-room-1'),
    overlayRoom1 = document.getElementById('overlay-room-1'),
    btnCerrarPopupRoom1 = document.getElementById('btn-cerrar-popup-room-1');
    btnAbrirPopupRoom2 = document.getElementById('btn-abrir-popup-room-2'),
    overlayRoom2 = document.getElementById('overlay-room-2'),
    btnCerrarPopupRoom2 = document.getElementById('btn-cerrar-popup-room-2');


btnAbrirPopupRoom1.addEventListener('click', function () {
    overlayRoom1.classList.add('active');
});


btnCerrarPopupRoom1.addEventListener('click', function () {
    overlayRoom1.classList.remove('active');
})


btnAbrirPopupRoom2.addEventListener('click', function () {
    overlayRoom2.classList.add('active');
});


btnCerrarPopupRoom2.addEventListener('click', function () {
    overlayRoom2.classList.remove('active');
})
























//  $('.ic_login').click(function () {
//     $(".login").css("display", "block");
//      $(".login").css("top", "50%");
//      $(".login").css("left", "50%");
//      $(".login").css("transform", " translate(-50%, -50%);");
//      $(".login").css("transition", "all 0.8s");
//      $("header").css("opacity", "0.7");
//      $("section").css("opacity", "0.7");
//      $("footer").css("opacity", "0.7");    
//  });
