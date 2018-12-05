'use strict';

let money, time;

function start() {
  money = +prompt("Ваш бюджет на месяц?", "");
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
}
start();

let appData = {
  wallet: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  saving: true,
  chooseExpenses: function () {
    for (let i = 1; i < 2; i++) {
      let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
          b = prompt("Во сколько обойдется?", "");

      if ((typeof (a) === "string") && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50) {
        appData.expenses[a] = b;
      } else {
        i--;
      }
    }
  },
  detectLevel: function () {
    if (appData.moneyPerDay < 100) {
      console.log("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("Это средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
      console.log("Это высокий уровень достатка!");
    } else {
      console.log("Ошибочка...!");
    }
  },
  checkSavings: function () {
    if (appData.saving == true) {
      let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt("Под какой процент?");
  
      appData.monthIncome = save / 100 / 12 * percent;
      alert("Доход с Вашего депозита в месяц: " + appData.monthIncome);
    }
  },
  chooseOptExpenses: function () {
    for (let i = 1; i <= 3; i++) {
      let questionOptExpenses = prompt("Статья необязательных расходов?");
      appData.optionalExpenses[i] = questionOptExpenses;
      console.log(appData.optionalExpenses);
    }
  },
  detectDayBudget: function () {
    appData.moneyPerDay = (appData.wallet / 30).toFixed();
    alert("Ежедневный бюджет " + appData.moneyPerDay);
  },
  chooseIncome: function () {
    let items = prompt("Что принесет дополнительный доход? (перечислить через запятую)","");
    if ((typeof (items) === "string") && typeof (items) != null && items != "" && items.length < 50) {
      appData.income = items.split(", ");
      appData.income.push(prompt("Может что то еще?"));
      appData.income.sort();
    }
    appData.income.forEach(function (item, i, arr) {
      alert("Способы доп. заработка: " + i + "- "+ item);
    });
  }
};

for (let key in appData) {
  console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
};

