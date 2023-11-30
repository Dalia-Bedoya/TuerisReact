// BOTONES para ocultar y mostrar texto

function toggleText(id) {
    var text = document.getElementById(id);

    if (text.style.display === "none" || text.style.display === "") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

document.getElementById("texto1").style.display = "none";
document.getElementById("texto2").style.display = "none";

 //LOGO

 var logo = document.getElementById("logo");

 logo.addEventListener("click", function() {
   window.location.href = "index.html";
 });

 
 //BOTONUP

function scrollarriba() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
document.getElementById('scrollup').addEventListener('click', scrollarriba);

  // menu burger
function toggleMenu() {
    var menuOverlay = document.getElementById("menuOverlay");
    if (menuOverlay.style.display === "block") {
        menuOverlay.style.display = "none";
    } else {
        menuOverlay.style.display = "block";
    }
}

