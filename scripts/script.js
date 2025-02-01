let userLang = navigator.language;
userLang = userLang.split("-")[0];
let temp;

document.getElementById("input").value = localStorage.getItem(`input`) || 1;

document.body.classList.add("no-transition")
document.getElementById("hide_theme").classList.add("no-transition");

if(localStorage.getItem("dark")){
    document.body.classList.add("dark")
}
else if(window.matchMedia("(prefers-color-scheme: dark)").matches &&!(localStorage.getItem("light"))){
    document.body.classList.add("dark")
}
else{
    document.body.classList.remove("dark")
}

document.getElementById("theme_buttons_con").onclick = function(){
    document.body.classList.toggle("dark")

    if(document.body.classList.contains("dark")){
        localStorage.removeItem("light")
        localStorage.setItem("dark", true)
    }
    else{
        localStorage.removeItem("dark")
        localStorage.setItem("light", true)
    }
}

setTimeout(function() {
    document.body.classList.remove("no-transition");
}, 10);

document.getElementById("C").onclick = function(){
    document.getElementById("deg").textContent = "°F"
}

document.getElementById("F").onclick = function(){
    document.getElementById("deg").textContent = "°C"
}

document.getElementById("button").onclick = function(){
    let input = Number(document.getElementById("input").value);
    let pagelang = window.location.pathname.split("/").filter(Boolean)[1];

    if (!pagelang) {
        pagelang = "en";
    }

    if(document.getElementById("F").checked){
        temp = input * 9 / 5 + 32; 
        temp = Math.round(temp * 100) / 100;
        document.getElementById("span").textContent = temp + "°F";

    }

    else if(document.getElementById("C").checked){ 
        temp = (input - 32) * (5/9);
        temp = Math.round(temp * 100) / 100; 
        document.getElementById("span").textContent = temp + "°C"; 
    }

    else{
        if(pagelang == "he"){
            temp = "לא בחרת טמפרורה להמיר אליו";
        }

        else{
            temp = "you did not select a temp to convert to";
        }

    document.getElementById("span").textContent = temp;
    }

    localStorage.setItem(`input`, input);
}





