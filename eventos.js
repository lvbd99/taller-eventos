

document.addEventListener("DOMContentLoaded", function () {

    let div = document.getElementById("div");
    let button = document.getElementById("button");

if (div) {
    div.addEventListener("click", function() {
    alert("Hola, soy el div!");
});
}

if (button) {
    button.addEventListener("click", function(event) {
        alert("Hola!");
        event.stopPropagation();
    });

}

});

