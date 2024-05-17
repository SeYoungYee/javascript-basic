document.querySelector('#container').addEventListener('click', function (event) {
    if (event.target.classList.contains('box')) {
        event.target.classList.toggle('clicked');
    }
});

function getSquare(number) {
    return number * number;
}

const result = getSquare(5);
console.log(result); // 25 출력 (5의 제곱)


