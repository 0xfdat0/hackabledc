module.exports.config = { // Plugin informations
    name: "Demo #1",
    id: "demo-plugin",
    description: "A simple plugin containing demo commands for the bot.",
    defaultPermission: "everyone",
    version: "1.0.0",
    author: "Blatoy",
    onLoad: (apis) => {}
};

module.exports.commands = [{ // Commands list
    trigger: "hello",
    help: "Reply in the channel: Hello World!",
    action: (message) => {
        message.reply("Bienvenue à notre présentation"); // Send message to Discord
    }
}, {
    trigger: "echo",
    help: "Echo what the user said",
    args: [{
        name: "text",
        defaultValue: "Hello World!",
        help: "Text to echo.",
        allowsSpace: true
    }],
    action: (message, args) => {
        message.channel.send(args.text);
    }
}, {
    trigger: "time",
        help: "Display current time of the bot",
    action: (message) => {
        let now = new Date();
        message.channel.send("It is now " + now.getHours() + ":" + ("00" + now.getMinutes()).slice(-2) + ".");
    }
}];
