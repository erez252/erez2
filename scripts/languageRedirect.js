if(localStorage.getItem("dark")){
    document.body.classList.add("dark")
}
else if(window.matchMedia("(prefers-color-scheme: dark)").matches &&!(localStorage.getItem("light"))){
    document.body.classList.add("dark")
}
else{
    document.body.classList.remove("dark")
};

const userLang = localStorage.getItem(`lang`) || navigator.language.split("-")[0];
const preferdlang = userLang == "he"? "he": "en";
window.location.href = `./${preferdlang}`;




























