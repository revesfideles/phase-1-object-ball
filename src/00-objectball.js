
  const gameObject = {
    home: {
      teamName: "Brooklyn Nets",
      colors: "Black, White",
      players: {
      "Alan Anderson": {
        number: "0",
        shoe: "16",
        points: "22",
        rebounds: "12",
        asissts: "12",
        steals: "3",
        blocks: "1",
        slamDunks: "1",
      },
      "Reggie Evans": {
        number: "30",
        shoe: "14",
        points: "12",
        rebounds: "12",
        asissts: "12",
        steals: "12",
        blocks: "12",
        slamDunks: "7",
      },
      "Brook Lopez": {
        number: "11",
        shoe: "17",
        points: "17",
        rebounds: "19",
        asissts: "10",
        steals: "3",
        blocks: "1",
        slamDunks: "15",
      },
      "Mason Plumee": {
        number: "1",  
        shoe: "19",
        points: "26",
        rebounds: "12",
        asissts: "6",
        steals:"3",
        blocks: "8",
        slamDunks: "5",
      },
      "Jason Terry": {
        number: "31",
        shoe: "15",
        points: "19",
        rebounds: "2",
        asissts: "2",
        steals: "4",
        blocks: "11",
        slamDunks: "1",
      },
    },
  },
    away: {
      teamName: "Charlotte Hornets",
      colors: "Turquoise, Purple",
      players: {
      "Jeff Adrien": {
         number: "4",
         shoe: "18",
         points: "10",
         rebounds: "1",
         asissts: "1",
         steals: "2",
         blocks: "7",
         slamDunks: "2",
      },
      "Bismak Biyombo": {
         number: "0",
         shoe: "16",
         points: "12",
         rebounds: "4",
         asissts: "7",
         steals: "7",
         blocks: "15",
         slamDunks: "10",
      },
      "DeSagna Diop": {
         number: "2",
         shoe: "14",
         points: "24",
         rebounds: "12",
         asissts: "12",
         steals: "4",
         blocks: "5",
         slamDunks: "5",
      },
      "Ben Gordon": {
         number: "8",
         shoe: "15",
         points: "33",
         rebounds: "3",
         asissts: "2",
         steals: "1",
         blocks: "1",
         slamDunks: "0",
      },
      "Brendan Haywood": {
         number: "33",
         shoe: "15",
         points: "6",
         rebounds: "12",
         asissts: "12",
         steals: "22",
         blocks: "5",
         slamDunks: "12",
        },
      },
    },
  },

console.log(gameObject);

function homeTeamName() {
    return gameObject["home"]["teamName"];
}

function numPointsScored(playerName) {
    const homePlayers = gameObject.home.players;
    const awayPlayers = gameObject.away.players;

    if(homePlayers.hasOwnProperty(playerName)) {
        return parseInt(homePlayers[playerName].points);
    } else if (awayPlayers.hasOwnProperty(playerName)) {
        return parseInt(awayPlayers[playerName].points);
    } else {
        return "Player not found";
  }
}

function shoeSize(playerName) {
    const homePlayers = gameObject.home.players;
    const awayPlayers = gameObject.away.players;

    if(homePlayers.hasOwnProperty(playerName)) {
        return parseInt(homePlayers[playerName].shoe);
    } else if (awayPlayers.hasOwnProperty(playerName)) {
        return parseInt(awayPlayers[playerName].shoe);
    } else {
        return "Player not found";
    } 
} 

function teamColors(playerName) {
    const homePlayers = gameObject.home.players;
    const awayPlayers = gameObject.away.players;
  
    if (homePlayers.hasOwnProperty(playerName)) {
      return gameObject.home.colors.split(", ");
    } else if (awayPlayers.hasOwnProperty(playerName)) {
      return gameObject.away.colors.split(", ");
    } else {
      return "Player not found";
    }
  }

  function teamNames(game) {
    const homeTeam = game.home.teamName;
    const awayTeam = game.away.teamName;
    return [homeTeam, awayTeam];
  }

  function playerNumbers(teamName) {
    const team = gameObject[teamName];
    const playerObjects = Object.values(team.players);
    const jerseyNumbers = playerObjects.map(player => player.number);
    return jerseyNumbers;
  }

  function playerStats(playerName) {
    for (const teamName in gameObject) {
      const team = gameObject[teamName];
      const players = team.players;
      if (playerName in players) {
        return players[playerName];
      }
    }
    return null; // or appropriate error message
  }

  function findPlayerWithLargestShoeSize(players) {
    return players.reduce((largestPlayer, currentPlayer) => {
      if (currentPlayer.shoeSize > largestPlayer.shoeSize) {
        return currentPlayer;
      } else {
        return largestPlayer;
      }
    });
  }

  function bigShoeRebounds(players) {
    const playerWithLargestShoeSize = findPlayerWithLargestShoeSize(players);
    return playerWithLargestShoeSize.rebounds;
  }

  function doesLongNameStealATon() {
    const gameObject = { ... };
  
    const longestNamePlayer = "Brendan Haywood";
    const longestNamePlayerSteals = gameObject.away.players[longestNamePlayer].steals;
  
    for (const team in gameObject) {
      const players = gameObject[team].players;
  
      for (const player in players) {
        if (player !== longestNamePlayer && players[player].steals > longestNamePlayerSteals) {
          return false;
        }
      }
    }
  
    return true;
  }