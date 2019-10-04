const Discord = require('discord.js');
const moment = require("moment");
const client = new Discord.Client()
const token = 5Zec3ZeojdMJAU0bM7uk28VTGm9lb2yl
const prefix = "r."
client.on('ready', () => {
  client.user.setActivity("Using commands |r.help to help") 
  
  console.log(`Logged in as ${client.user.tag}!`)
})
client.on('message', msg => {
  if (msg.content === prefix + 'xdff') {
    msg.reply(' <:xdff:619299683197779970> !')
	msg.react('619299683197779970')
  }
})
client.on('message', msg => {
  if (msg.content === prefix + 'help') {
	  const Discord = require('discord.js');
      const exampleEmbed = new Discord.RichEmbed()
	  msg.reply({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "**                                   __Help commands__                                       **",
    description: "                 This is the help comments, be careful to read it!              ",
    fields: [{
        name: "r.help",
        value: "This is the help commands."
      },
      {
        name: "r.memes",
        value: "Goto channel <#619295417431228416>"
      },
      {
        name: "r.ping",
        value: "Say **Pong!**"	
      },
	  {
        name: "r.hi",
        value: "Say **Hi**"
      },
      {
        name: "r.pong",
        value: "Say **Ping!**"
      },
      {
        name: "r.sub to pap",
        value: "Goto channel Paprika and subscribe please :)"
	  },
      {
        name: "r.funnyface",
        value: "Show funnyface :)"
	  },
      {
        name: "r.emojispam",
        value: "Show alot of emoji (recommended using in <#619282696337883136>)"
	  },
      {
        name: "r.randomnum",
        value: "Show random number (1 ---> 1000)"
	  },
      {  
        name: "r.semoji",
        value: "Show **sexemoji** (recommended using in <#619283065528909915> :)"
	  }

		
	
	

		

	  
	  
	  
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "Copyright @RedVN_ChannelTM , 2019"
    }
  }
});


  }
})
client.on('message', msg => {
  if (msg.content === prefix + 'memes') {
    msg.reply(' Goto channel <#619295417431228416> please!')
  }
})
client.on('message', msg => {
  if (msg.content === prefix + 'ping') {
    msg.reply(' Pong!')
	.then(msg => {
		msg.delete(1)
			const endTime = Date.now();
			msg.reply(`Pong! ${endTime - startTime}ms`);
	});
  }
})
client.on('message', msg => {
  if (msg.content === prefix + 'hi') {
    msg.reply(' Hi :) ')
  }
})
client.on('message', msg => {
  if (msg.content === prefix + 'pong') {
    msg.reply(' Ping!')
  }
})
client.on('message', msg => {
  if (msg.content === prefix + 'sub to pap') {
    msg.reply(' Goto channel Paprika and subscribe please!')
	msg.reply('https://www.youtube.com/channel/UCN395iKU0H0NfL-dSTunfYQ')
	msg.reply('                            :arrow_up_small:                           ')
	msg.reply('                 CLICK ON THAT PLEASE                         ')
  }
})
client.on('message', msg => {
  if (msg.content === prefix + 'funnyface') {
    msg.reply(' :joy: ')
  }
})
client.on('message', msg => {
  if (msg.content === prefix + 'emojispam') {
    msg.reply(' :joy: :grinning: :grimacing: :grin: :smiley:   ')
  }
})
client.on('message', msg => {
	/// generate random number
for (i = 0; i < Math.floor(Math.random() * 100);) {
  number = Math.floor(Math.random() * 1000);
}
/// -----------------------
  if (msg.content === prefix + 'randomnum') {
    msg.reply('The random number is: ' + number)
  }
})
client.on('message', msg => {
  if (msg.content === prefix + 'fire') {
    msg.react('🔥');
  }
})
client.on('message', msg => {
  if (msg.content === prefix + 'semoji') {
    msg.react('👌');
	msg.react('👉');
  }
})
client.on('message', msg => {
  if (msg.content === prefix + 'say') {
	  msg.reply(`­\n\n\n\n\n:white_check_mark: **True**`)
	  .then(msg => {
		  msg.delete(1000)
      .then(msg => {
		  msg.reply(`­\n\n\n\n :x: **False**`)
	      
	  })
	  })
	  .catch(/*hi*/);	  	  
  }
})
client.on('message', msg => {
  if (msg.content === prefix + 'wooosh') {
    msg.reply('r/wooosh');
  }
})		

client.login('NjIxNjQ4OTU2NDEzMTgxOTUy.XZdBog.I6S_8pzXwOLIC2YC-11rgcMOcOk')
