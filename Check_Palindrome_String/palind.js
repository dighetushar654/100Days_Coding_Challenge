function palindrome(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if(str[i] !== str[len - 1 - i]) {
            return " String is not palindrome";
        }
    }
    return "String is palindrome";
}

const str = "madam";
console.log(palindrome(str));