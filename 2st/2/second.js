const upButton = document.querySelector(".up-button");

window.addEventListener("scroll", () => {
    console.log({ scrollY });
    if (scrollY > 100) {
        upButton.classList.add("show");
    } else {
        upButton.classList.remove("show");
    }
});

upButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

document.querySelector('.up-button').addEventListener("click",function(){
    alert(`스크롤 된 위치: ${scrollY}`);
})

result = 0;
for (let i = 0; i <= 10; i++) {
    result += i;
}
console.log(result);

for (let i=1; i<=20; i++){
    if(i%2==0)
    console.log(i);
}