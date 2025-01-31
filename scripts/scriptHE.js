let userLang = navigator.language;
userLang = userLang.split("-")[0];
let temp;

document.getElementById("button").onclick = function(){ //שלוחצים על הכפתור
    let input = Number(document.getElementById("input").value); //בודק מה הטפרטורה ששמת
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
            temp = "לא בחרת טמפרורה להמיר אליו";
            document.getElementById("span").textContent = temp; //מעדכן את הטקסט על המסך
        }
}
