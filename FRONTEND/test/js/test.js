
document.querySelector(".button").addEventListener('click', home);
function home() {  
    let name = document.getElementById("name").value;
    document.getElementById("name").style.display = "none";
    let hello = `ПРИВЕТ, ${name}!`;
    document.getElementById("hello").textContent = hello;
}

