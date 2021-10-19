# 📥 | Installation
```bash
npm install discord-button-builder
```

# 📝 | Setup
```js
const builder = require('discord-button-builder');
```

# 🗒 | Syntax
```js
//Style-default : PRIMARY|SUCCESS|SECONDARY|DANGER
builder('customId','Styles','Label');

//Style-Link:LINK
//Simultaneous use of links and emoji is currently not supported in this module.
//Please wait for an update.
builder('url-here','LINK','Label');

//Style-Emoji(Optional)
builder('customId','Styles','Label','😆');

```
# 📋 | Usage
```js
client.on('messageCreate', async message => {
    if (message.content.startsWith("!button")) {
        const button = builder('button-ids','PRIMARY','Button Text!');
        await message.channel.send({
            content: "ㅤㅤ",
            components: [ new Discord.MessageActionRow().addComponents(button) ]
        });
    }
```