    var rX = 0;
    var rY = 0;
    var kub = document.getElementById("cub");

    function amunt() {
        rX = rX + 90;
        kub.style.transform = "rotateX(" + rX + "deg) rotateY(" + rY + "deg)";
    }

    function avall() {
        rX = rX - 90;
        kub.style.transform = "rotateX(" + rX + "deg) rotateY(" + rY + "deg)";
    }

    function esquerra() {
        rY = rY - 90;
        kub.style.transform = "rotateX(" + rX + "deg) rotateY(" + rY + "deg)";
    }

    function dreta() {
        rY = rY + 90;
        kub.style.transform = "rotateX(" + rX + "deg) rotateY(" + rY + "deg)";
    }

    document.getElementById('cub').addEventListener('click', amunt);
    document.getElementById('cub').addEventListener('click', avall);
    document.getElementById('cub').addEventListener('click', esquerra);
    document.getElementById('cub').addEventListener('click', dreta);

    document.onkeydown = comprovaTecla;
    document.onkeydown = comprovaTecla;

   function comprovaTecla(e) {
    if(e.keyCode == 38) {
        amunt();
    }
    else if(e.keyCode == 40) {
        avall();
    }
    else if(e.keyCode == 37) {
        esquerra();
    }
    else if(e.keyCode == 39) {
        dreta();
    }
}