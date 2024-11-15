let userInput = document.getElementById("date");
let button = document.getElementsByTagName("button")[0];
let result = document.getElementById("result");
let critizm = document.getElementById("critizm");

userInput.max = new Date().toISOString().split("T")[0];

const calculateAge = () => {
  let birthDate = new Date(userInput.value);

  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();

  let today = new Date();

  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  let d3, m3, y3;

  y3 = y2 - y1;

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }
  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getDaysInMonth(y1, m1) + d2 - d1;
  }
  if (m3 < 0) {
    m3 = 11;
    y3--;
  }
  if (y3 >= 30) {
    critizm.innerHTML = `You'r Old`;
  } else {
    critizm.innerHTML = `You'r quite young`;
  }
  result.innerHTML = `You are <span>${d3}</span> Days, <span>${m3}</span> Month, <span>${y3}</span> Years old`;
if (userInput.value === '') {
    critizm.innerHTML = ''
    alert(`Please input all values`)
    result.innerHTML = ''
}
};

const getDaysInMonth = (year, month) => {
  return new Date(year, month, 0).getDate();
};

button.addEventListener("click", calculateAge);
