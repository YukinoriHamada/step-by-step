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
}

