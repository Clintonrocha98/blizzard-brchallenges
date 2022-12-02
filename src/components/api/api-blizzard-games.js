const url = "https://api.brchallenges.com/api/blizzard/games";
const response = await fetch(url);
const apiGames = await response.json();

export default apiGames;