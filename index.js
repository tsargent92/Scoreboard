function addPoints(points, team) {
    const scoreEl = document.getElementById(team);
    const current = parseInt(scoreEl.textContent);
    scoreEl.textContent = current + points;
    updateTeamHighlight();
}

function resetScores() {
    document.getElementById("home").textContent = 0;
    document.getElementById("away").textContent = 0;
    updateTeamHighlight(); // reset winning highlight
}

function updateTeamHighlight() {
    const homeScore = parseInt(document.getElementById("home").textContent);
    const awayScore = parseInt(document.getElementById("away").textContent);
    const homeName = document.getElementById("home-name");
    const awayName = document.getElementById("away-name");

    // Clear previous highlights
    homeName.style.color = "white";
    awayName.style.color = "white";

    if (homeScore > awayScore) {
        homeName.style.color = "#FFD700";
    } else if (awayScore > homeScore) {
        awayName.style.color = "#FFD700";
    }
}