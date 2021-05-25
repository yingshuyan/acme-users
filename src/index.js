const Faker = require("faker");

const usersFuc = Faker.helpers.userCard;
const usersArr = new Array(30).fill("-").map((ele) => (ele = usersFuc()));

window.localStorage.setItem("users", JSON.stringify(usersArr));

const usersStr = JSON.parse(window.localStorage.getItem("users"));

const userList = document.querySelector("#userList");
userList.innerHTML = usersStr
  .map((ele, index) => {
    return `<li > <a href = "#${index}">
    ${ele.name}</a>
    <div id = ${index}>
    </div>
    </li>`;
  })
  .join("");

window.addEventListener(
  "hashchange",
  function () {
    const div = document.getElementsByTagName("div");
    [...div].map((ele) => (ele.innerHTML = ""));

    const hashNum = window.location.hash.slice(1);

    const users = document.getElementById(hashNum);
    users.innerHTML = `<ul>
    ${Object.entries(usersStr[hashNum])
      .map(
        (ele) => `
    <li>${ele[0]}: ${ele[1]}</li>
    `
      )
      .join("")}
    </ul>`;
  },
  false
);
