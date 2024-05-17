const adBox = document.querySelector(".ad-box");

setTimeout(() => {
    // adBox.style.display = "none";
    console.log('3초 후에 출력되는 텍스트입니다.');
}, 3000);

const counter = document.querySelector('#counter');

let count = 0;
const interval = setInterval(() => {
    counter.textContent = ++count;
    if (count === 5) {
        console.log('종료');
        clearInterval(interval);
    }
}, 1000);
