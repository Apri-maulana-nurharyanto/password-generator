const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
// const symbolChars = "!-$^+";
// const spaceChars = " ";

function getRandomChar(chars) {
    const index = Math.floor(Math.random() * chars.length);
    return chars[index];
}

function generatePassword() {
    const passwordInput = document.getElementById("password");
    const lowercaseCheckbox = document.getElementById("lowercase");
    const uppercaseCheckbox = document.getElementById("uppercase");
    const numbersCheckbox = document.getElementById("numbers");
    // const symbolsCheckbox = document.getElementById("symbols");
    // const excludeDuplicateCheckbox = document.getElementById("exc-duplicate");
    // const spacesCheckbox = document.getElementById("spaces");
    let characters = "";
    if (lowercaseCheckbox.checked) characters += lowercaseChars;
    if (uppercaseCheckbox.checked) characters += uppercaseChars;
    if (numbersCheckbox.checked) characters += numberChars;
    // if (symbolsCheckbox.checked) characters += numberChars;
    // if (spacesCheckbox.checked) characters += spaceChars;

    if (characters === "") {
        passwordInput.value = "";
        return;
    }

    let password = "";
    const length = 12; // max character password

    while (password.length < length) {
        let char = getRandomChar(characters);
        // if (excludeDuplicateCheckbox.checked && password.includes(char)) continue;
        password += char;
    }

    passwordInput.value = password;
}

function copyPassword() {
    const passwordInput = document.getElementById('password');
    const copyButton = document.getElementById('copy');

    passwordInput.disabled = false;
    // Enable the input to select its value
    passwordInput.select();
    document.execCommand('copy');
    passwordInput.disabled = true; // Disable the input again

    copyButton.textContent = 'Copied';
    setTimeout(() => {
        copyButton.textContent = 'Copy';
    }, 500); // Reset to "Copy" after 0.5 seconds
}