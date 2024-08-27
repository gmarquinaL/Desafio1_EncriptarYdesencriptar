document.addEventListener('DOMContentLoaded', () => {
    const lightModeBtn = document.getElementById('light-mode-btn');
    const darkModeBtn = document.getElementById('dark-mode-btn');
    const body = document.body;

    // Modo claro por defecto
    body.classList.add('light-mode');

    lightModeBtn.addEventListener('click', () => {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
    });

    darkModeBtn.addEventListener('click', () => {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
    });

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
            showModal();
        });
    });
});

function encrypt(text) {
    let encryptedText = text
        .split('')
        .map(char => String.fromCharCode(char.charCodeAt(0) + 3))
        .reverse()
        .join('');
    return encryptedText;
}

function decrypt(text) {
    let decryptedText = text
        .split('')
        .reverse()
        .map(char => String.fromCharCode(char.charCodeAt(0) - 3))
        .join('');
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

function showModal() {
    const modal = document.getElementById('copy-modal');
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.style.display = 'none';
    }, 1000);
}