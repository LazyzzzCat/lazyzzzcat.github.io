(function () {
    addEventListener('load', god);
    function god() {
        const gc = document.getElementById("get_cat");
        gc.addEventListener('click', newCat);
    }
    function newCat() {
        const randomStatusCode = getRandomStatusCode();
        let cat = document.getElementById("cat");
        if(cat.childElementCount>0){
            cat.innerHTML = '';;
        }
        
        let c = document.createElement("img");
        c.src = "https://http.cat/" + randomStatusCode;
        c.setAttribute("id", "kitty");
        cat.appendChild(c);
    }
    function getRandomStatusCode() {
        const networkStatusCodes = [100, 101, 102, 103, 200, 201, 202, 203, 204, 205, 206, 207, 208, 214, 226,
            300, 301, 302, 303, 304, 305, 307, 308, 400, 401, 402, 403, 404,
            405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 420,
            421, 422, 423, 424, 425, 426, 428, 429, 431, 444, 450, 451, 497, 498, 499, 500, 501, 502, 503,
            504, 506, 507, 508, 509, 510, 511, 521, 522, 523, 525, 530, 599];
        const randomIndex = Math.floor(Math.random() * networkStatusCodes.length);
        const statusCode = networkStatusCodes[randomIndex];
        // console.log(statusCode); // Выводим код в консоль
        return statusCode;
    }

})();