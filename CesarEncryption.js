const aol = 'abcdefghijklmnopqrstuvwxyz'

function calcRoll(a, b){
    let c;
    if((a>=2) && (a <=32)){
        c = parseInt(b,a)
    }
    else c = b
    return c;
}


function decryptStart() {
    let word = document.getElementById('TextToDecrypt').value;
    let firstnumber = Number(document.getElementById('firstnumber').value);
    let secondnumber = Number(document.getElementById('secondnumber').value);
    let shift = calcRoll(firstnumber, secondnumber);
    let decyrptedPassword=""
    for (var i = 0; i < word.length; i++) {
        for (var j = 0; j < aol.length; j++) {
            if (word.charAt(i) === aol.charAt(j)){
                let Newplacer = j + shift
                if (Newplacer>26){
                    while (Newplacer>26){
                        Newplacer= Newplacer-26
                    }
                }
                decyrptedPassword += aol.charAt(Newplacer)
            }
        }
    }
    document.getElementById('decyrptedPassword').value = decyrptedPassword;
    console.log(fraseCriptografada);
}
