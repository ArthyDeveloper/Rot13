console.log(
    "Sistema feito por Arthy Dev.\n27/11/2023"
)

const alfabetoUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z", "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const alfabetoLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function Crypt(){
    var rot = document.getElementById("RotChoice").value;
    var message = document.getElementById("EncryptInput").value.split('');
    var resposta = document.getElementById("DecryptInput");
    
    for(let i = 0; i < message.length; i++){
        if (alfabetoUpper.includes(message[i])){
            x = alfabetoUpper.indexOf(message[i]) + eval(rot);
            y = resposta.value + alfabetoUpper[x];
            resposta.value = y;
        } else if (alfabetoLower.includes(message[i])){
            x = alfabetoLower.indexOf(message[i]) + eval(rot);
            y = resposta.value + alfabetoLower[x];
            resposta.value = y;
        } else {
            resposta.value += message[i];
        }
    }
}

function Clear(){
    var message = document.getElementById("EncryptInput");
    var resposta = document.getElementById("DecryptInput");
    message.value = "";
    resposta.value = "";
}