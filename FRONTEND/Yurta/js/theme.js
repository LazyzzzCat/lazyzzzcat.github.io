(function () {
    addEventListener('load', crearte);
    function crearte() {
        
        const vse = document.getElementById("everything");
        vse.setAttribute('data-theme', localStorage.getItem('theme'));
        if (vse.getAttribute('data-theme') != 'light' && vse.getAttribute('data-theme') != 'dark'){
            var targetTheme = 'light';
            vse.setAttribute('data-theme', targetTheme);
            localStorage.setItem('theme', targetTheme);
        }
        
        let l = document.getElementById("sunANDmoon");
        l.addEventListener('click', theme);
        if (vse.getAttribute('data-theme') == 'light') {
            document.getElementById("sun").style.display = "block";
            document.getElementById("moon1").style.display = "none";
            document.getElementById("moon2").style.display = "none";

        }
        else {
            document.getElementById("sun").style.display = "none";
            document.getElementById("moon1").style.display = "block";
            document.getElementById("moon2").style.display = "block";

        }
    }
    function theme() {
        const vse = document.getElementById("everything");
        if (vse.getAttribute('data-theme') == 'light') {
            document.getElementById("sun").style.display = "none";
            document.getElementById("moon1").style.display = "block";
            document.getElementById("moon2").style.display = "block";
            var targetTheme = 'dark';
            vse.setAttribute('data-theme', targetTheme);
        }
        else {
            document.getElementById("sun").style.display = "block";
            document.getElementById("moon1").style.display = "none";
            document.getElementById("moon2").style.display = "none";
            var targetTheme = 'light';
            vse.setAttribute('data-theme', targetTheme);
        }
        localStorage.setItem('theme', targetTheme);
    }
})()