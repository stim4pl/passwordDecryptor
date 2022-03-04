const aol = '0abcdefghijklmnopqrstuvwxyz'

function startDecryption() {
    const radix = Number(document.getElementById('firstnumber').value);
    const value = Number(document.getElementById('secondnumber').value);

    const shift = parseInt(value, radix);

    const word = document.getElementById('TextToDecrypt').value;
    let decyrptedPassword = ""

    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < aol.length; j++) {
            if (word.charAt(i) === aol.charAt(j)) {
                let index = (j + shift) % 26

                decyrptedPassword += aol.charAt(index)
            }
        }
    }

    document.getElementById('decyrptedPassword').value = decyrptedPassword;
}
