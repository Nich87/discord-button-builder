module.exports = (customId, Style, Label,Emoji = 0) => {
    const { MessageButton } = require('discord.js');
    
    if(Emoji !== 0){
      return new MessageButton()
      .setCustomId(customId)
      .setStyle(Style)
      .setEmoji(Emoji)
      .setLabel(Label)
    }
    
    else if(Style === 'LINK'){
      const url = customId;
      return new MessageButton()
        .setStyle(Style)
        .setURL(url)
        .setLabel(Label)
    }
    
    else return new MessageButton()
        .setStyle(Style)
        .setCustomId(customId)
        .setLabel(Label)

}