let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    myHeading.textContent = '欢迎您，' + myName;
}
if (!localStorage.getItem('name')) {
    myHeading.textContent = "无名氏";
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '欢迎您，' + storedName;
}
myButton.onclick = function() {
    setUserName();
}