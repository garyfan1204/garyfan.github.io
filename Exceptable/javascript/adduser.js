var add = document.getElementById("adduser");
var closebtn = document.querySelectorAll("#close");
var addupage = document.getElementById("addupage");

add.addEventListener("click", function(event) {
    event.preventDefault();
    addupage.style.display = "flex";
});

closebtn.forEach(function(btn) {
    btn.addEventListener("click", function(event) {
        event.preventDefault();
        addupage.style.display = "none";
    });
});