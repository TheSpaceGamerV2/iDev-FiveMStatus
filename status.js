const Discord = require('discord.js');
const client = new Discord.Client();

const Gamedig = require('gamedig');
const config = require('./config.json')



client.on('ready', () => {
    console.log(`Connecter en tant que ${client.user.tag}`);
    let interval = setInterval(function() {
        Gamedig.query({
            type: config.game,
            host: config.host,
            port: config.token
        }).then((state) => {
            client.user.setActivity(`${state.players.length} / ${state.maxplayers} Joueurs En Ville`, {
                type: 'WATCHING'
            });
        }).catch((error) => {
            client.user.setActivity(offlinesentence, {
                type: 'WATCHING'
            });
        });
    }, config.refreshtime);
});




client.login(config.token);