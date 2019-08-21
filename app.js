

let seiza;
let kekka;
let tyuui;


function getResult(seiza) {
    if (seiza == "おひつじざ") {
        kekka = '小吉';
        tyuui = '水難';
    } else if (seiza == 'おうしざ'){
        kekka = '大凶';
        tyuui = '失業';
    } else if (seiza == 'ふたござ'){
        kekka = '吉';
        tyuui = '浪費';
    } else if (seiza == 'かにざ'){
        kekka = '中吉';
        tyuui = '物忘れ';
    } else if (seiza == 'ししざ'){
        kekka = '凶';
        tyuui = 'すり';
    } else if (seiza == 'おとめざ'){
        kekka = '大凶';
        tyuui = '痴漢';
    } else if (seiza == 'てんびんざ'){
        kekka = '吉';
        tyuui = '地震';
    } else if (seiza == 'さそりざ'){
        kekka = '大凶';
        tyuui = '人間関係';
    } else if (seiza == 'いてざ'){
        kekka = '凶';
        tyuui = '健康';
    } else if (seiza == 'やぎざ'){
        kekka = '大吉';
        tyuui = 'ファッション';
    } else if (seiza == 'みずがめざ'){
        kekka = '中吉';
        tyuui = '視力低下';
    } else if (seiza == 'うおざ'){
        kekka = '凶';
        tyuui = '睡眠不足';
    }
     
    
    let message = '「 ' + seiza +'」のあなたは、' + kekka + 'です。「' + tyuui + '」に気をつけましょう。';
    
    return message;
    

}


//フォームの要素を取得
let text = document.getElementById("name");
let formbutton = document.getElementById("form-button");
let formtext = document.getElementById("form-text");

//イベント処理
//送信ボタンを押す
//占い結果を表示する
//表示後一瞬で消えてしまう。永続的に表示したい。

formbutton.onclick = function() {
    let seiza = text.value;
    let message = getResult(seiza);

    formtext.innerHTML = message;

}

/*submit.addEventListener('click', function() {
    
    

    document.getElementById("form-text").innerHTML = message;

    
})*/
