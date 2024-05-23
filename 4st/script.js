const user = {
    이름: "병수",
    나이: 20,
    주소: "시골",
};

// 저장
localStorage.setItem("userInfo", JSON.stringify(user));

// 불러와서 찍기
const StorageUserInfo = JSON.parse(localStorage.getItem("userInfo"));
console.log("초기 저장된 데이터:", StorageUserInfo);

// 나이를 30으로 바꾸고 다시 저장
let newUserInfo = JSON.parse(localStorage.getItem("userInfo"));
newUserInfo.나이 = 30;
localStorage.setItem("userInfo", JSON.stringify(newUserInfo));

// 로그찍기
console.log("변경된 데이터 확인:", JSON.parse(localStorage.getItem("userInfo")));

// 데이터 삭제
localStorage.removeItem("userInfo");

// 테스트
console.log("삭제된 데이터확인: ", JSON.parse(localStorage.getItem("userInfo")));

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => console.log(json));
