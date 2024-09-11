document.addEventListener("DOMContentLoaded", function() {
    if (!localStorage.getItem('introShown')) {
        var typed = new Typed(".auto-type", {
            strings: ["dav", "David :)", "a guy that loves to code!"],
            typeSpeed: 80,
            backSpeed: 90,
            onComplete: function() {
                document.querySelector(".introduction").style.opacity = '0';
                document.querySelector(".introduction").style.transition = 'visibility 0s 2s, opacity 2s linear';

                setTimeout(function() {
                    document.querySelector(".introduction").style.display = 'none';
                }, 1000);

                localStorage.setItem('introShown', 'true');
            }
        });
    } else {
        document.querySelector(".introduction").style.display = 'none';
    }
});
