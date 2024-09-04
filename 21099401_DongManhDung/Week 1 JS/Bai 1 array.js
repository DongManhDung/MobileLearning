function Lab01() {
  console.log("JavaScript Fundamentals – Part 1");
  console.log("Coding Challenge 01");
  function calculatorBMI(mass, height) {
    bmi = mass / (height * height);
    return bmi;
  }
  console.log(
    "Mark's BMI = " +
      Math.round(calculatorBMI(78, 1.69) * 100) / 100 +
      " And John's BMI = " +
      Math.round(calculatorBMI(85, 1.76) * 100) / 100
  );

  console.log("\nCoding Challenge 02");
  function compareBMI(markBMI, johnBMI) {
    markHigherBMI = markBMI > johnBMI;
    if (markHigherBMI) {
      console.log("Mark's BMI is higher than John's");
      console.log(
        "Mark's BMI " +
          Math.round(markBMI * 100) / 100 +
          " is higher than John's " +
          Math.round(johnBMI * 100) / 100
      );
    } else {
      console.log("John's BMI is higher than Mark's");
      console.log(
        "John's BMI " +
          Math.round(johnBMI * 100) / 100 +
          " is higher than Mark's " +
          Math.round(markBMI * 100) / 100
      );
    }
  }
  compareBMI(calculatorBMI(78, 1.69), calculatorBMI(92, 1.95));
  compareBMI(calculatorBMI(95, 1.88), calculatorBMI(85, 1.76));

  console.log("\nCoding Challenge 03");
  function highestAvgScore(arrScore) {
    avg = 0;
    for (i = 0; i < arrScore.length; i++) {
      // if(arrScore[i] > 100){
      //   console.log("Number " + arrScore[i] + "is exceed 100")
      // }else{
      avg = avg + arrScore[i];
      // }
    }
    return Math.round((avg / arrScore.length) * 100) / 100;
  }
  function compareAvgScore() {
    dolphinsAvg = highestAvgScore([96, 108, 89]);
    koalasAvg = highestAvgScore([88, 91, 110]);
    if (dolphinsAvg > koalasAvg) {
      console.log("The winner of the competition is Dolphin");
    } else {
      console.log("The winner of the competition is Koala");
    }
  }
  compareAvgScore();

  console.log("\nCoding Challenge 04");
  function tipCalculator(money) {
    tip = money >= 50 && money <= 300 ? money * (15 / 100) : money * (20 / 100);
    total = money + tip;
    console.log(
      "The bill was " +
        money +
        " , the tip was " +
        tip +
        " , and the total value " +
        total
    );
  }
  tipCalculator(275);
  tipCalculator(40);
  tipCalculator(430);
  //---------------------------------------------------------------------------------------------------------------
  console.log("JavaScript Fundamentals – Part 2");
  console.log("\nCoding Challenge 01");
  (calcAverage = () => {
    function checkWinner(avgDolphins, avgKoalas) {
      if (avgDolphins >= avgKoalas * 2) {
        console.log("Dolphin Win (" + avgDolphins + " vs " + avgKoalas + ")");
      } else if (avgDolphins < avgKoalas * 2) {
        console.log("Koala Win (" + avgKoalas + " vs " + avgDolphins + ")");
      } else {
        console.log("No team wins");
      }
    }
    checkWinner(highestAvgScore([44, 23, 71]), highestAvgScore([65, 54, 49]));
    checkWinner(highestAvgScore([85, 54, 41]), highestAvgScore([23, 34, 27]));
  })();

  console.log("\nCoding Challenge 02");
  function calcTip(bill) {
    let tip = ["?", "?", "?"];
    let sum = ["?", "?", "?"];
    for (i = 0; i < bill.length; i++) {
      if (bill[i] >= 50 && bill[i] <= 300) {
        tip[i] = (bill[i] * 15) / 100;
      } else {
        tip[i] = (bill[i] * 20) / 100;
      }
      sum[i] = bill[i] + tip[i];
    }
    console.log(sum);
    console.log(tip);
    console.log("Total values = " + sum);
    console.log("Tip value for each bill = " + tip);
  }
  calcTip([125, 555, 44]);

  console.log("\nCoding Challenge 03");
  const markPerson = {
    fullname: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
      this.bmi = this.mass / (this.height + this.height);
      return this.bmi;
    },
  };
  const johnPerson = {
    fullname: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
      this.bmi = this.mass / (this.height + this.height);
      return this.bmi;
    },
  };
  function comparesBMI() {
    if (markPerson.calcBMI() > johnPerson.calcBMI()) {
      console.log(
        markPerson.fullname +
          " BMI " +
          Math.round(markPerson.calcBMI() * 100) / 100 +
          " is higher than " +
          johnPerson.fullname +
          " BMI " +
          Math.round(johnPerson.calcBMI() * 100) / 100
      );
    } else if (markPerson.calcBMI() < johnPerson.calcBMI()) {
      console.log(
        johnPerson.fullname +
          " BMI " +
          Math.round(johnPerson.calcBMI() * 100) / 100 +
          " is higher than " +
          markPerson.fullname +
          " BMI " +
          Math.round(markPerson.calcBMI() * 100) / 100
      );
    } else {
      console.log(
        johnPerson.fullname +
          " BMI " +
          Math.round(johnPerson.calcBMI() * 100) / 100 +
          " have the same with " +
          markPerson.fullname +
          " BMI " +
          Math.round(markPerson.calcBMI() * 100) / 100
      );
    }
  }
  comparesBMI();

  console.log("\nCoding Challenge 04");
  // Làm lại hàm calculatorTip(bill) để tránh in trùng lặp vô hạn khi gọi hàm tính tại Phần 2 - bài 2
  function calculatorTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }
  const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
  const tips = [];
  const totals = [];
  for (i = 0; i < bills.length; i++) {
    const tip = calculatorTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
  }
  console.log("Bills: ", bills);
  console.log("Tips: ", tips);
  console.log("Totals: ", totals);

  console.log("\nDeveloper Skills & Editor Setup");
  function printForecast(arr){
      let forecastString = "";
      let degreeCelcius = "\u00B0C";
      for(i = 0; i < arr.length; i++){
        forecastString += " ... " + arr[i] + degreeCelcius + " in " + (i + 1) + " days"; 
      }

      return forecastString;
  }
  console.log(printForecast([17, 21, 23]));
  console.log(printForecast([12, 5, -5, 0, 4]));

  const f1 = ["?","?",]
  
}

Lab01();
