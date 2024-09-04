// Data Source
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

console.log("Coding challenge 01");

const players1 = [game.players[0]];
const players2 = [game.players[1]];

const gk = players1[0][0]; //Mảng players đầu, vị trí thứ nhất
const fieldPlayers = players1[0].slice(1); //Lấy 10 người còn lại

const allPlayers = players1.concat(players2); //Nhập 2 team vào
const subtitutePlayers = ["Thiago", "Coutinho", "Perisic"];
const players1Final = players1.concat(subtitutePlayers); //Thêm 3 người

const team1 = game.odds.team1;
const draw = game.odds.x;
const team2 = game.odds.team2;

function printGoalss(players) {
  console.log(players.length + " goals were scored by: ");
  for (let i = 0; i < players.length; i++) {
    console.log(players[i]);
  }
}
printGoalss(["Davies"]);
printGoalss(game.scored);

if (team1 > team2) {
  console.log("Team is more likely to win: " + game.team1);
} else {
  console.log("Team is more likely to win: " + game.team2);
}

console.log("\n Coding challenge 02");
for(let i = 0; i < game.scored.length; i++){
    console.log("Goal " + (i+1) + ": " + game.scored[i]);
}


// console.log(players1Final.flat());
// console.log(team2)
