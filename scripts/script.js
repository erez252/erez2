let userLang = navigator.language;
userLang = userLang.split("-")[1];
const pagelang = window.location.pathname.split("/").filter(Boolean)[0];
localStorage.setItem(`lang`, pagelang);
console.log(localStorage.getItem(`lang`))

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
};

if(localStorage.getItem("accept-cookies")){
    document.getElementById('cookie-banner').style.display = 'none';
}
else{
    document.getElementsByClassName('langbut')[0].style.bottom = document.getElementById("cookie-banner").offsetHeight + 10 + "px";
}

document.getElementById('accept-cookies').onclick = function() {
    document.getElementById('cookie-banner').style.display = 'none';
    localStorage.setItem("accept-cookies", true);
    document.getElementsByClassName('langbut')[0].style.bottom = "10px";
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

if(localStorage.getItem(`deg_select`) == `C`){
    document.getElementById("C").checked = true
    document.getElementById("deg").textContent = "°F"
}

if(localStorage.getItem(`deg_select`) == `F`){
    document.getElementById("F").checked = true
    document.getElementById("deg").textContent = "°C"
}

setTimeout(function() {
    document.body.classList.remove("no-transition");
}, 10);



document.getElementById("C").onclick = function(){
    document.getElementById("deg").textContent = "°F"
    localStorage.setItem(`deg_select`, `C`)
}

document.getElementById("F").onclick = function(){
    document.getElementById("deg").textContent = "°C"
    localStorage.setItem(`deg_select`, `F`)
}



document.getElementById("button").onclick = function(){
    let input = Number(document.getElementById("input").value);

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





