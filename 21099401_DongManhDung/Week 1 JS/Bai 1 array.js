function Lab01() {
  console.log("JavaScript Fundamentals – Part 1");
  console.log("Coding Challenge 01");
  function compareBMI(MarkMass, MarkHeight, JohnMass, JohnHeight) {
    MarkBMI = MarkMass / (MarkHeight * MarkHeight);
    JohnBMI = JohnMass / (JohnHeight * JohnHeight);
    markHigherBMI = MarkBMI > JohnBMI;
    console.log("Mark's BMI = " + MarkBMI + " And John's BMI = " + JohnBMI);
    if (markHigherBMI) {
      return true;
    }
  }
  compareBMI(78, 1.69, 92, 1.95);
  compareBMI(95, 1.88, 85, 1.76);

  console.log("Coding Challenge 02");
  function compareBMIOutput(MarkMass, MarkHeight, JohnMass, JohnHeight) {
    MarkBMI = MarkMass / (MarkHeight * MarkHeight);
    JohnBMI = JohnMass / (JohnHeight * JohnHeight);
    markHigherBMI = MarkBMI > JohnBMI;
    if (markHigherBMI == true) {
      console.log(
        "Mark's BMI " +
          "(" +
          Math.round(MarkBMI * 100) / 100 +
          ")" +
          " is higher than John's" +
          "(" +
          Math.round(JohnBMI * 100) / 100 +
          ")"
      );
    } else {
      console.log(
        "John's BMI " +
          "(" +
          Math.round(JohnBMI * 100) / 100 +
          ")" +
          " is higher than Mark's" +
          "(" +
          Math.round(MarkBMI * 100) / 100 +
          ")"
      );
    }
  }
  compareBMIOutput(78, 1.69, 92, 1.95);
  compareBMIOutput(95, 1.88, 85, 1.76);

  console.log("Coding Challenge 03");
  function highestAvgScore(arrScore) {
    avg = 0;
    for (i = 0; i < arrScore.length; i++) {
      // if(arrScore[i] > 100){
      //   console.log("Number " + arrScore[i] + "is exceed 100")
      // }else{
        avg = (avg + arrScore[i]);
      // }
    }
    return Math.round((avg / arrScore.length) * 100) / 100;
  }
  function compareAvgScore(){
    dolphinsAvg = highestAvgScore([96, 108, 89]);
    koalasAvg = highestAvgScore([88, 91, 110]);
    if(dolphinsAvg > koalasAvg){
        console.log("The winner of the competition is Dolphin");
    }
    else{console.log("The winner of the competition is Koala");
    }
  }
  compareAvgScore();


  console.log("Coding Challenge 04");
  function tipCalculator(money){
      tip = (money >= 50 && money <= 300) ? money * (15 / 100) : money * (20 / 100);
      total = money + tip;
      console.log("The bill was " + money + " , the tip was " + tip + " , and the total value " + total );   
  }
  tipCalculator(275);
  tipCalculator(40);
  tipCalculator(430);
  //--------------------------------------------------------------------------------------------------------------- 
  console.log("JavaScript Fundamentals – Part 2");
  console.log("Coding Challenge 01");
  (calcAverage = () => {
    function checkWinner(avgDolphins,avgKoalas){
      if(avgDolphins >= avgKoalas * 2){
          console.log("Dolphin Win (" + avgDolphins + " vs " + avgKoalas + ")");
      }else if(avgDolphins < avgKoalas * 2){
          console.log("Koala Win (" + avgKoalas + " vs " + avgDolphins + ")");
      }else{
        console.log("No team wins");
      }
    }
    checkWinner(highestAvgScore([44,23,71]),highestAvgScore([65,54,49]));
    checkWinner(highestAvgScore([85,54,41]),highestAvgScore([23,34,27]));
  })();

  console.log("Coding Challenge 02");
  function calcTip(bill){
    for(i = 0; i < bill.length; i++){
        if(bill[i] >= 50 && bill[i] <= 300){
          tip[i] = 15 / 100;
        }else{
          tip[i] = 20 / 100;  
        }
      }
      console.log(bill.map(tip => tip[i]));
    }
    
    calcTip([125,555,44]);
  }
  

Lab01();
