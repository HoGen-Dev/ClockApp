let now = new Date();
let year = now.getFullYear();
let month = now.getMonth();
let date = now.getDate();
let hours24 = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

let time24 = `${year}年${month + 1}月${date}日${hours24}時${minutes}分${seconds}秒`;

let hours12;
let ampm;
if(hours24 >= 12){
    hours12 = hours24 - 12;
    ampm = "午後";
} else {
    hours12 = hours24;
    ampm = "午前";
}

let time12 = `${year}年${month + 1}月${date}日${ampm}${hours12}時${minutes}分${seconds}秒`;


document.getElementById("time24").textContent = time24
document.getElementById("time12").textContent = time12;


console.log(time24);
console.log(time12);
