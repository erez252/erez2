
document.getElementById("button").onclick = function(){
    let input = Number(document.getElementById("input").value);
    let temp;

    if(document.getElementById("F").checked){
        temp = input * 9 / 5 + 32
    }
    else if(document.getElementById("C").checked){
        temp = (input - 32) * (5/9)
    }
    else{
        temp = "u did no select temp";
    }
    document.getElementById("span").textContent = temp
}


