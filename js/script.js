
var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
overlay = document.getElementById('overlay'),
popup = document.getElementById('popup'),
btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
overlay.classList.add('active');
popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e){
e.preventDefault();
overlay.classList.remove('active');
popup.classList.remove('active');
});





























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
