
var heartIcon = document.getElementById('heart');


heartIcon.addEventListener('click', function() {
   
    fadeOutAndRedirect();
});


function fadeOutAndRedirect() {
    var opacity = 1;
    var fadeOutInterval = setInterval(function() {
        if (opacity > 0) {
            opacity -= 0.1;
            heartIcon.style.opacity = opacity;
        } else {
            clearInterval(fadeOutInterval);

            window.location.href = 'mainh/index.html';
        }
    }, 100);
}
