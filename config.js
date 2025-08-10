

module.exports = {
  TOKEN: "",
  language: "vi",
  ownerID: ["812279245661274132", ""], 
  mongodbUri : "",
  spotifyClientId : "76843c9f591142039cc9e48664b11745",
  spotifyClientSecret : "961bddea32f0455381bce0afaea3fe99",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "Mystvale", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/mystvale",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "Mystvale",
      password: "youshallnotpass",
      host: "15.235.181.136",
      port:  21679,
      secure: false
    }
  ]
}
