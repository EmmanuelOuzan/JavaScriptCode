let cookies = {};
document.cookie.split(';').forEach(element => {
    let s = element.split('=');
    console.log(s);
    cookies[s[0]] = s[1];
});