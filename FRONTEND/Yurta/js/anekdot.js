(function () {
    addEventListener('load', god);
    function god() {
        scroll(0,0);
        const an = document.getElementById("an");
        an.addEventListener('click', newAnekdot);
        
    }
    function newAnekdot() {
        // let anekdots = document.getElementById("anekdots");
        // // document.getElementById("a").remove;
        // let a = document.createElement("script");
        // a.src = "https://www.anekdot.ru/rss/randomu.html";
        // fetch(a.src)
        //     .then(response => response.json()) 
        //     .then(data => {
        //         const anekdotText = data.anekdot_text;
        //         console.log(anekdotText); 
        //         a.innerText = anekdotText;
        //     })
        //     .catch(error => console.error('Ошибка:', error));
        // a.setAttribute("id", "a");
        // anekdots.appendChild(a);
        //НЕ РАБОТАЕТ!!!!!!!
        location.reload();
        
    }

})();