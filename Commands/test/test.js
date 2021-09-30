module.exports = {
    name: "name",//string
    description: "description",//string
    aliases: [],//array
    botPerms: [],//array
    userPerms: [],//array
    expectedArgs: '',//string
    minArgs: 1,//integer
    maxArgs: 2,//integer
    ownerOnly: true,//boolean
    guildOnly: true,//boolean
    enabled: true,//boolean
    nsfw: false,//boolean
    userPermError: '',//string
    botPermError: '',//string
    cooldown: 10,//integer
    run: async (client, message, args) => {
      //code
    },
  };