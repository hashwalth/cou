document.addEventListener("DOMContentLoaded", function() {
    var playerList = document.getElementById("player-list");
    var addPlayerForm = document.getElementById("add-player-form");
  
    addPlayerForm.addEventListener("submit", function(event) {
      event.preventDefault();
      var playerName = document.getElementById("player-name").value;
      var playerPhoto = document.getElementById("player-photo").files[0];
      var playerScore = document.getElementById("player-score").value;
  
      var reader = new FileReader();
      reader.onload = function(event) {
        var playerPhotoURL = event.target.result;
        addPlayer(playerName, playerPhotoURL, playerScore);
        addPlayerForm.reset();
      };
      reader.readAsDataURL(playerPhoto);
    });
  
    function addPlayer(name, photo, score) {
      var li = document.createElement("li");
      var img = document.createElement("img");
      var span = document.createElement("span");
  
      img.src = photo;
      span.textContent = name + " - Score: " + score;
  
      li.appendChild(img);
      li.appendChild(span);
      playerList.appendChild(li);
  
      updatePlayerRanking();
    }
  
    function updatePlayerRanking() {
      var players = Array.from(playerList.getElementsByTagName("li"));
      players.sort(function(a, b) {
        var scoreA = parseInt(a.querySelector("span").textContent.split(":")[1]);
        var scoreB = parseInt(b.querySelector("span").textContent.split(":")[1]);
        return scoreB - scoreA;
      });
  
      players.forEach(function(player, index) {
        player.querySelector("span").textContent = player.querySelector("span").textContent.split("-")[0] + " - Score: " + getPlayerScore(player);
        playerList.appendChild(player);
      });
    }
  
    function getPlayerScore(player) {
      return parseInt(player.querySelector("span").textContent.split(":")[1]);
    }
  });
  