///練習１
/*
let assets = prompt('資産を数字で入力してください');
assets = parseFloat(assets);
if (assets >= 10000) {
    alert('あなたは大富豪です。')
} else if (assets >= 8000) {
    alert('あなたは富豪です。')
} else if(assets >= 5000) {
    alert('あなたは平民です．') 
} else if(assets >= 3000) {
    alert('あなたは貧民です。') 
} else if(assets >= 0) {
    alert('あなたは大貧民です。')
} else {
    alert('入力を間違えています。')
}

//練習2
let age = prompt('あなたの年齢を入力してください');
age = parseFloat(age);

if (age >= 18) {
    alert('あなたは有権者です。')
} else {
    alert('あなたは非有権者です。')
}

//練習3

let age1 = prompt('年齢を入力してください');
age1 = parseFloat(age1);

let sex = prompt('性別を1(男性)か２（女性）で入力してください');
sex = parseFloat(sex);

if (age1 >= 40 && sex === 1) {
    alert('あなたは中高年男性です。')
} else if (age1 >= 40 && sex === 2) {
    alert('あなたは中高年女性です。')
} else if (age1 < 40 && age1 >= 20 && sex === 1) {
    alert("あなたは青年男性です。")
} else if (age1 < 40 && age1 >= 20 && sex === 2) {
    alert("あなたは青年女性です。")
}

//練習4
let message = prompt('1.温度を下げる。 \n2.温度をあげる。 \n3.ちょうどいいです。　\n4.風速を上げてください。　\n5.風速を下げてください。')
message = parseFloat(message);

switch (message) {
    case 1:
        alert('温度を下げました。');
        break;
    case 2:
        alert('温度をあげました。');
        break;
    case 3:
        alert('現状維持です。');
        break;
    case 4:
        alert('風速を上げました。');
        break;
    case 5:
        alert('風速を下げました。');
        break;
    default:
        alert('入力に誤りがあります。');
}

//練習5
let message = prompt("数字占いです。好きな数字を0~9で半角で入力してください。");
message = parseFloat(message);

let randomNumber = Math.floor(Math.random() * 10);

let destiny = Math.abs(message - randomNumber);

switch (destiny) {
    case 0:
        alert('人生の絶頂期です。');
        break;
    case 1:
        alert('すごくついてます。');
        break;
    case 2:
        alert('ついてます。');
        break;
    case 3:
        alert('可もなく不可もなく。');
        break;
    case 4:
        alert('気をつけてください。');
        break;
    default:
        alert('最悪です。');

}
*/
//練習6




let hour = (function() {

    let day = new Date();
    let hour = day.getHours();
    return hour;
});




let name = prompt("名前を入力してください")
greetHour(name);

function greet(name, message){

    if (name == "") {
        alert('入力がありません。入力し直してください。');
    }　else {
        alert(message + name);
        return;
    }
}
function greetHour(name = "") {
    
    let message;

    if (10 > hour >= 5) {
        message = 'おはよう';
        greet(name,message);
    } else if (16 > hour >= 10) {
        message = 'こんにちは';
        greet(name, message);
    } else if (23 >= hour >= 16 || 0 <= hour < 5) {
        message = 'こんばんは';
        greet(name, message);
    } 

    
}    




