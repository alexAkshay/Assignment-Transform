let diva = document.querySelector('#one');
var x = 0;
diva.addEventListener('mouseover', function(e) {
    x += 1;


    if (x % 2 == 0) {
        console.log("even")
        diva.setAttribute("class", "data-ns-clockwise")

    } else {
        console.log("odd")
        diva.setAttribute("class", "data-ns-anticlockwise")
    }


})