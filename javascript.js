document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed(".auto-type", {
        strings: ["dav", "David :)", "a guy that loves to code!"],
        typeSpeed: 80,
        backSpeed: 90,
        onComplete: function() {
            document.querySelector(".introduction").style.opacity = '0';
            document.querySelector(".introduction").style.transition = 'visibility 0s 2s, opacity 2s linear';

            setTimeout(function() {
                document.querySelector(".introduction").style.display = 'none';
                document.getElementById('main-content').style.display = 'block';
            }, 1000);
        }
    })
});
