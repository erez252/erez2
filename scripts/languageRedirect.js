let userLang = navigator.language;
userLang = userLang.split("-")[0];
console.log(userLang);
let lang;

if(userLang == "he"){
    window.location.href = "./he"
    localStorage.setItem('userLang', "he");
}
else{
    window.location.href = "./en" 
    localStorage.setItem('userLang', "en");
}

