alert("hush kelibsiz Asabingizni sinab korasizmi");

let yanaOnaysanmi = confirm("yana oynaysanmi");

while (yanaOnaysanmi) {
  let level = 10;

  let getLevel = prompt("levelni tanlang oson qiyin");

  if (getLevel.toLowerCase() === "qiyin") {
    level = 5;
  }

  let randomNumber = Math.floor(Math.random() * 100);

  alert(randomNumber);

  while (true) {
    let tahmin = +prompt("tahmin qilasan");

    if (tahmin === randomNumber) {
      alert("yutdingiz");

      break;
    }

    if (level === 1) {
      alert("sizda uriniw qomadi battar boling");

      break;
    } else if (tahmin < randomNumber) {
      level--;

      alert("juda kicik " + level + " ta urinish qoldi");
    } else if (tahmin > randomNumber) {
      level--;

      alert("juda katta " + level + " ta urinish");
    }
  }

  yanaOnaysanmi = confirm("yan oynaysanmi ");
}
