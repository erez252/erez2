// let userLang;
// let lang;

// window.onload = function () {
//     // Get the user's preferred language (e.g., 'en', 'he')
//     userLang = navigator.language || navigator.userLanguage;
//     console.log(userLang);
//     if(userLang == "he-IL" || userLang == "he"){
//         lang = "heb";
//         document.getElementById("heb").classList.toggle("hidden");
//         changetohe();
//     }
//     else{
//         lang = "eng";
//         document.getElementById("eng").classList.toggle("hidden");
//     }
// }

// document.getElementById("heb").onclick = function(){
//         changetohe();
//         lang = "heb";
//         toggleLanguages();
// }

// document.getElementById("eng").onclick = function(){
//         document.getElementById("temp").textContent = "temp:";
//         document.getElementById("converttext").textContent = "convert to:";
//         document.getElementById("textC").textContent = "C";
//         document.getElementById("textF").textContent = "F";
//         document.getElementById("button").textContent = "calculate";
//         lang = "eng";
//         toggleLanguages();
// }

// function changetohe(){
//     document.getElementById("temp").textContent = ":טמפרטורה";
//     document.getElementById("converttext").textContent = ":המר ל";
//     document.getElementById("textC").textContent = "צלזיוס";
//     document.getElementById("textF").textContent = "פרנהייט";
//     document.getElementById("button").textContent = "תחשב";
//     lang = "heb";
// } 

// function toggleLanguages() {
//     document.getElementById("heb").classList.toggle("hidden");
//     document.getElementById("eng").classList.toggle("hidden");
// }

document.getElementById("button").onclick = function(){ //שלוחצים על הכפתור
    let input = Number(document.getElementById("input").value); //בודק מה הטפרטורה ששמת
    let temp;
        if(document.getElementById("F").checked){ // F-אם להמיר ל
            temp = input * 9 / 5 + 32;  //עושה טת החישוב
            temp = Math.round(temp * 100) / 100; //מעגל
            document.getElementById("span").textContent = temp + "°F"; //מעדכן את הטקסט על המסך
        }
        else if(document.getElementById("C").checked){ // C-אם להמיר ל
            temp = (input - 32) * (5/9); //עושה טת החישוב
            temp = Math.round(temp * 100) / 100; //מעגל
            document.getElementById("span").textContent = temp + "°C"; //מעדכן את הטקסט על המסך
        }
        else{
            if(lang == "eng"){
                temp = "you did not select a temp to convert to";
            }
            else if(lang == "heb"){
                temp = "לא בחרת טמפרורה להמיר אליו";
            }
            document.getElementById("span").textContent = temp;
            }
        }
