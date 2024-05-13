const btn = document.querySelector('.btn');

btn.addEventListener("click", function () {
    document.querySelector('.title').innerHTML = '제목아니다'
})

// 3번
let sum = 0;
function add(num1, num2) {
    sum = num1 + num2
    console.log(sum);
}
add(2, 4);

// 4번
function isEvenOrOdd(num) {
    if (num % 2 === 0) {
        console.log('짝수입니다');
    } else {
        console.log('홀수입니다');
    }
}
isEvenOrOdd(4);

// 5번
const info = {
    name: '병수',
    age: 20,
}

console.log('이름: ' + info.name);
console.log('나이: ' + info.age);

const name = '세영';
const age = 20;
console.log(name);
console.log(age);