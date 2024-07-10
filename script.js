document.getElementById('encrypt-btn').addEventListener('click', function() {
    let text = document.getElementById('input-text').value;
    let encryptedText = encrypt(text);
    displayOutput(encryptedText);
});

document.getElementById('decrypt-btn').addEventListener('click', function() {
    let text = document.getElementById('input-text').value;
    let decryptedText = decrypt(text);
    displayOutput(decryptedText);
});

document.getElementById('copy-btn').addEventListener('click', function() {
    let outputMessage = document.getElementById('output-message').textContent;
    navigator.clipboard.writeText(outputMessage).then(function() {
        alert('Texto copiado al portapapeles');
    });
});

function encrypt(text) {
    let encryptedText = text.split('').reverse().join('');
    return encryptedText;
}

function decrypt(text) {
    let decryptedText = text.split('').reverse().join('');
    return decryptedText;
}

function displayOutput(message) {
    let outputMessage = document.getElementById('output-message');
    let outputImg = document.getElementById('output-img');
    let copyBtn = document.getElementById('copy-btn');

    if (message.trim() === "") {
        outputMessage.textContent = "Ningún mensaje fue encontrado";
        outputImg.style.display = "block";
        copyBtn.style.display = "none";
    } else {
        outputMessage.textContent = message;
        outputImg.style.display = "none";
        copyBtn.style.display = "block";
    }
}
