const target = document.querySelector("#dynamic");

function randomString() {
  const stringArr = [
    "Learn to HTML",
    "Learn to CSS",
    "Learn to JS",
    "Learn to React.js",
    "Learn to Vue.js",
    "Learn to Spring",
  ];

  const selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
  const selectStringArr = selectString.split("");

  return selectStringArr;
}

// 타이핑 리셋
function resetTyping() {
  target.textContent = "";
  dynamic(randomString());
}

//한글자씩 텍스트 출력 함수
function dynamic(randomArr) {
  if (randomArr.length > 0) {
    target.textContent += randomArr.shift();
    setTimeout(function () {
      dynamic(randomArr);
    }, 200);
  } else {
    setTimeout(resetTyping, 3000);
  }
}

dynamic(randomString());

//커서 깜빡임 효과
function blink() {
  target.classList.toggle("active");
}

setInterval(blink, 500);
