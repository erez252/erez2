let userLang = navigator.language;
userLang = userLang.split("-")[0];
console.log(userLang);
let lang;

if(userLang == "he"){
    window.location.href = "./he"
}
else{
    window.location.href = "./en" 
}

