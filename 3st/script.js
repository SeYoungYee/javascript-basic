const person = [
    {
        이름: '철수',
        나이: 19,
        성별: '남자',
    },
    {
        이름: '짱구',
        나이: 20,
        성별: '남자',

    },
    {
        이름: '유리',
        나이: 21,
        성별: '여자',
    },
]
// 2번
const container = document.querySelector(".container");
//const brands = document.querySelectorAll(".brand");
//const productNames = document.querySelectorAll(".product-name");

person.forEach(function (p) {
    let html템플릿 = `<div class="container">
										<h3 class="name">${p.이름}</h3>
										<h3 class="age">${p.나이}</h3>
                                        <h3 class="male">${p.성별}</h3>
                                        <hr />
									</div>`;
    container.insertAdjacentHTML("beforeend", html템플릿);
});

// 3번
const female = person.find((p) => {
    return p.성별 === '여자';
});
console.log(female);

// 4번
const male = person.filter((p) => {
    return p.성별 === '남자';
});
console.log(male);

// 5번
const mul = person.map((p) => {
    return p.나이 * 10
})
console.log(mul);
// 5번 확인코드
person.forEach((p) => {
    console.log(p.나이);
});

// 6번 
// 내림차순
const dec = person.sort((a, b) => {
    return b.나이 - a.나이;
});
console.log(dec);

// 7번
const user = {
    이름: "병수",
    나이: 20,
    주소: "시골",
}
console.log(user.주소);

const { 이름, 나이, 주소 } = user;
console.log(이름); 
console.log(나이); 
console.log(주소); 


