# command handler template
 template for command handling using discord.js :)
 
 Use this template however u like :)
 
 dont forget to put your info in `config.js` file
 
 ## example usage (messageCreate event only)
 ```
 module.exports = {
  name: string,
  aliases: array,
  botPerms: array,
  userPerms: array,
  expectedArgs: string,
  minArgs: integer,
  maxArgs: integer,
  ownerOnly: boolean,
  guildOnly: boolean,
  enabled: boolean,
  nsfw: boolean,
  userPermError: string,
  botPermError: string,
  cooldown: integer,
  run: async (client, message, args) => {
    //code
  },
};
 ```
 
 ## example usage (interactionCreate event only)
 ```
 module.exports = {
    name: string,
    description: string,
    run: async(client, interaction, args) => {
        //code
    }
}
 ```
