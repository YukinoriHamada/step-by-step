//未完成
confirm('ようこそ◯◯ECサイトへ!!\n ご利用の場合は「OK」を押してください。\nご用がない場合は「キャンセル」を押してください。');


let uriba;
let cart = [];//1:カメラ, 2:ワイヤレスイヤホン, 3:小型扇風機, 4:モバイルバッテリー
let daikinn = 0;

let number1 = 0;
let number2 = 0;
let number3 = 0;
let number4 = 0;

let i = 1;
while (i === 1) {
    uriba = prompt('興味のある売り場を番号で選択してください。\
    \n    1.ガジェット \n    2.家電 \n    3.スマートフォン \n    4.仮想通貨 \n    5.レジ');

    uriba = parseFloat(uriba);
    if (uriba === 1) {//ガジェット売り場
        //i = gyoumu();
        i = gadget();
    } else if (uriba === 2) {//家電売り場
        i = gyoumu();
       
    } else if (uriba === 3) {//スマートフォン売り場
        i = gyoumu();
        
    } else if (uriba === 4) { //仮想通貨売り場
        i = gyoumu();
        
    } else if (uriba === 5) {
        getMyCart();
        alert('購入代金は合計' + daikinn + '円でございます。');
    }

    if(i === 2) {
        alert('ご利用ありがとうございました。');
    }
}

function gyoumu () {
    let i
    alert('現在準備中です。');
    i = prompt('買い物を続ける場合は、「1」を入力してください。\買い物をやめる場合は、「2」を入力してください。');
    i = parseFloat(i);
    return i;
}

function gadget () {
    
    let k=1;
    let l;
    confirm('ようこそガジェット売り場へ!!\nご利用の場合は「OK」を押してください。\
        \nご用がない場合は「キャンセル」を押してください。');

    while(k === 1) {
        let j;
        j  = prompt('本日のオススメ品です。お好きな商品の番号を半角数字で入力してください。\
                    \n 1.カメラ\n ¥14,000\
                    \n 2.ワイヤレスイヤホン\n ¥10,000\
                    \n 3.小型扇風機\n ¥4,000\
                    \n 4.モバイルバッテリー\n ¥5,000');
        j = parseFloat(j);

        
        switch (j) {
            case 1:
                daikinn += 14000;
                cart.push(1)
                alert('カメラがカートに入りました。');
                getMyCart();
                break;
            case 2:
                daikinn += 10000;
                cart.push(2);
                alert('ワイヤレスイヤホンがカートに入りました。');
                getMyCart();
                break;
            case 3:
                daikinn += 4000;
                cart.push(3);
                alert('小型扇風機がカートに入りました。');
                getMyCart();
                break;
            case 4:
                daikinn += 5000;
                cart.push(4);
                alert('モバイルバッテリーがカートに入りました。');
                getMyCart();
                break;
            
        }

        k = prompt('ご希望の場所を半角数字で入力してください。\n1.ガジェット売り場\
               \n2.他の売り場\
               \n3.レジ')
        k = parseFloat(k);
        
        if (k === 2) {
            return 1;
        } else if (k === 3)　{
            getMyCart();
            alert('購入代金は合計' + daikinn + '円でございます。');
            return 2;
        }
    }
}

//gadget();


function getMyCart () {

    
    let number1 = 0;
    let number2 = 0;
    let number3 = 0;
    let number4 = 0;

    for (let x = 0; x <= cart.length - 1; x++) {
        
        switch (cart[x]) {
            case 1:
                number1++;
                break;
            case 2:
                number2++;
                break;
            case 3:
                number3++;
                break;
            case 4:
                number4++;
                break;
        }

    }


    alert('現在のカートの中身です。\
         \nカメラ\
         \n' + number1 + '台\
         \nワイヤレスイヤホン\
         \n' + number2 + '個\
         \n小型扇風機       \
         \n' + number3 + '機\
         \nモバイルバッテリー\
         \n' + number4 + '個');
}
//getMyCart();
