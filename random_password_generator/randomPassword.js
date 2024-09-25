function randomPasswordGen(length, includeLowercase, includeUppercas, includeNumbers, includeSymbols) {

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercas ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    // console.log(allowedChars.length);
    // for(let i = 0;i<length;i++){
    //     passoword += allowedChars[Math.floor((Math.random())*allowedChars.length)];
    // }

    if (length <= 0) {
        return `(password length must be atleast 1)`;
    }
    if (allowedChars.length === 0) {
        return `(Password cannot be generated without characters, atleast select 1 option)`
    }

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}


const passwordLength = 12;
const includeLowercase = true;
const includeUppercas = true;
const includeNumbers = true;
const includeSymbols = true;

for (let index = 0; index < 100; index++) {
    let r = randomPasswordGen(passwordLength, includeLowercase, includeUppercas, includeNumbers, includeSymbols);

    console.log(`Your randomly generated password is ${r}`);

}