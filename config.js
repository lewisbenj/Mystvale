

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
      password: "https://dsc.gg/ajidevserver",
      host: "lava-v4.ajieblogs.eu.org",
      port:   443,
      secure: true
    }
  ]
}
