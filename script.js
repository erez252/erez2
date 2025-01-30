let heb = false;
console.log(heb);

document.getElementById("heb").onclick = function(){
    if(heb == false){
        heb = true
        document.getElementById("heb").textContent = "english"
        document.getElementById("temp").textContent = ":טמפרטורה"
        document.getElementById("converttext").textContent = ":המר ל"
        document.getElementById("textC").textContent = "צלזיוס"
        document.getElementById("textF").textContent = "פרנהייט"
        document.getElementById("button").textContent = "תחשב"

    }
    else{
        document.getElementById("heb").textContent = "עברית"
        document.getElementById("temp").textContent = "temp:"
        document.getElementById("converttext").textContent = "convert to:"
        document.getElementById("textC").textContent = "C"
        document.getElementById("textF").textContent = "F"
        document.getElementById("button").textContent = "calculate"
        heb = false
    }
}

document.getElementById("button").onclick = function(){
    let input = Number(document.getElementById("input").value);
    let temp;
        if(document.getElementById("F").checked){
            temp = input * 9 / 5 + 32
            temp = Math.round(temp * 100) / 100;
            document.getElementById("span").textContent = temp + "°F"
        }
        else if(document.getElementById("C").checked){
            temp = (input - 32) * (5/9)
            temp = Math.round(temp * 100) / 100;
            document.getElementById("span").textContent = temp + "°C"
        }
        else{
            if(heb == false){
                temp = "u did no select temp";
            }
            else if(heb == true){
                temp = "לא בחרת טמפרורה להמיר אליו";
            }
            document.getElementById("span").textContent = temp
            console.log(heb);
            }
        }
