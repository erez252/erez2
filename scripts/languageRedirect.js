let userLang = navigator.language;
userLang = userLang.split("-")[0];
console.log(userLang);

if(userLang == "he"){
    window.location.href = "/he/index.html"
}
else{
    window.location.href = "/en/index.html" 
}