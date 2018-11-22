const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$$'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Nothing`,"http://twitch.tv/abdobenhamidou/")
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start Time] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as [${client.user.username}]`);
  console.log('')
  console.log('info:')
  console.log(`Servers! ["${client.guilds.size}"]`);
  console.log(`Users! ["${client.users.size}"]`);
  console.log(`Channels! ["${client.channels.size}"]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('╔[════════════]╗')
  console.log('ARE YOU READY?')
  console.log('LETS GO BOT ONLINE!')
  console.log('╚[════════════]╝')
  console.log('')
});


client.on('ready', () => {                           
client.user.setGame(`$$help  ${client.guilds.size} Server`);
}); 

    client.on('message', message => {
        if(message.content.startsWith('$$invite')) {
            let embed = new Discord.RichEmbed()
            .setAuthor(` ${message.author.username} `, message.author.avatarURL)      
            .setTitle(`:small_orange_diamond: Click Here `)
            .setURL(`https://discordapp.com/oauth2/authorize?client_id=489492316403531797&scope=bot&permissions=2146958847`)        
         message.channel.sendEmbed(embed);
           }
       }); 

              client.on("message", message => {
                if (message.content === prefix + "help") {
                     message.react("👍") 
                 const embed = new Discord.RichEmbed()
                     .setColor("#00ff47")
                     .setDescription(`
              commands admin
❖$$bc = Sends a message to everyone
❖$$kick = kick member
❖$$cc = make 10 colors
❖$$mutech = close chat
❖$$unmutech = open chat

              commands info
❖$$inv = To give the link invite bot
❖$$bot = Bot Information
❖$$ping = Give you a bang
❖$$image = The image of the server
❖$$avatar = Give you your picture or a picture of your wish
❖$$id = Your account information
❖$$msg = To send a message to the person
❖$$report = To report a person
❖$$allbots = To know all the bots to the server
❖$$users = To know servers and bot users
❖$$server = Server Information

              commands games
❖$$hack 
❖$$Mary
❖$$expressly
❖$$mine
❖MFort
❖$$decoding
❖$$puzzle
❖$$xo
❖$$a3lam
❖$$3wasm
❖$$if they made you choose
❖$$ punishment (warn]

             command music
❖$$music             
`)
               
               
               message.channel.sendEmbed(embed)
                 console.log('[Help] Send By: ' + message.author.username)
               }
               });




client.on('message' , async (message) => {
       if(message.content.startsWith(`<@${client.user.id}>`)) {
              message.channel.startTyping()
 let responses = [
        'You want help',
        'try $$help'
    ]
    
    // Fetch a random item from the array
    let fetched = responses[Math.floor(Math.random() * responses.length)];
   message.reply(fetched)
   message.channel.stopTyping()
       }
  
});




client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('RSALH')){
if(!message.author.id === '437589580712116234') return;
message.channel.sendMessage('LOADING... |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

const child_process = require("child_process");
const adminprefix = "$$";
const devs = ['437589580712116234'];

client.on('message', message => {
if(message.content === adminprefix + "restart") {
      if (!devs.includes(message.author.id)) return;
          message.channel.send(`⚠️ **الشخص الذي اعاد تشغيل البوت ${message.author.username}**`);
        console.log(`⚠️ جاري اعادة تشغيل البوت... ⚠️`);
        client.destroy();
        child_process.fork(__dirname + "/bot.js");
        console.log(`تم اعادة تشغيل البوت`);
    }
  
  }); 

const developers = ["437589580712116234","437589580712116234",""]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'sp')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'sw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'sl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});




client.on('message', async message => {
  if (message.channel.type === "dm") {
      if (message.author.id === client.user.id) return;
      var iiMo = new Discord.RichEmbed()
      .setColor('BLACK')
      .setTimestamp()
      .setTitle('Message in private bot')
      .setThumbnail(`${message.author.avatarURL}`)
      .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
      .setFooter(`From ${message.author.tag} ${message.author.id}`)
      client.users.get("437589580712116234").send(iiMo);
  }
});
  




client.on('message', message => {
              if(!message.channel.guild) return;
    var prefix = "$$";
    if(message.content.startsWith(prefix + 'bc')) {
    if(!message.channel.guild) return message.channel.send('**الأمر بالسيرفرات بس**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**ماعندك الصلاحية المطلوبة**' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "M Games";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**ترسل برودكاست فاضي؟**');message.channel.send(`**متأكد؟** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))

    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    reaction1.on("collect", r => {
    message.channel.send(`**☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members**`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
       Discord.RichEmbed()
       .setColor('#00ff47')
       .setTitle('**:incoming_envelope:رسالة:incoming_envelope:')
       .addField('**:diamond_shape_with_a_dot_inside:السيرفر:diamond_shape_with_a_dot_inside:**', message.guild.name)
       .addField('**:black_joker:المرسل:black_joker:**', message.author.username)
       .addField(':page_facing_up:الرسالة:page_facing_up:', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**كنسل يا مدير**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
let cooldown = new Set();
let cdseconds = 5;
if(!message.content.startsWith(prefix)) return;
  if(cooldown.has(message.author.id)){
    message.delete();
  return  message.reply("reason")
  }
  if(!message.member.hasPermission("ADMINISTRATOR")){
    cooldown.add(message.author.id);
  }
setTimeout(() => {
  cooldown.delete(message.author.id)
}, cdseconds * 1000)
    });


client.on('message', message => {
    if(message.content === prefix + 'cc') {
                         if(!message.channel.guild) return message.channel.send('**._.**'); 
         if(!message.member.hasPermission('MANAGE_ROLES')) return    message.channel.send('you need prem MANAGE ROLES').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "1",
                    color: "#000501",
                    permissions: []
     })
           message.guild.createRole({
                  name: "2",
                    color: "#28ff00",
                    permissions: []
     })
                message.guild.createRole({
                  name: "3",
                    color: "#0001ff",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "4",
                    color: "#fff100",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "5",
                    color: "#ff4800",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "6",
                    color: "#ff0000",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "7",
                    color: "#ff00db",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "8",
                    color: "#9100ff",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "9",
                    color: "#00fcff",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "10",
                    color: "RANDOM",
                    permissions: []
     })


          message.channel.sendMessage({embed: new Discord.RichEmbed()
     .setColor('#28ff00').setAuthor(`${message.author.username}'`, message.author.avatarURL).setDescription('done')});
    }
	});



client.on('message', message => {
    if (message.content === "$$mutech") {
                        if(!message.channel.guild) return message.reply('**this command for servers only._.**');

if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply('**This command for admins only**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply(":heavy_check_mark:Done!")
           });
             }

if (message.content === "$$unmutech") {
    if(!message.channel.guild) return message.reply('**xx**');

if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply('**this command for admins only**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply(":heavy_check_mark:Done!")
           });
             }



});


client.on('message', message => {
    var prefix = "$$"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('**?**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**This command for admins**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**Bot dont have Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**:innocent: User :innocent:**");
  if(!reason) return message.reply ("**:innocent:Reson kick:innocent:**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**اBot dont have Permission**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`انطرد`, user.displayAvatarURL)
  .setColor("#ff0005")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**Kicked by:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});

client.on('message', message => {
    var name1 = message.mentions.users.first();
    var reason = message.content.split(' ').slice(2).join(' ');
    if(message.content.startsWith(prefix + 'report')) {
        if(message.author.bot) return;
        if(!message.guild.channels.find('name', 'reoprt')) return message.channel.send('create room named **report**').then(msg => msg.delete(5000));
    if(!name1) return message.reply('**:innocent:منشن:innocent:**').then(msg => msg.delete(3000))
        message.delete();
    if(!reason) return message.reply('**:innocent:وش سوى؟:innocent:**').then(msg => msg.delete(3000))
        message.delete();
    var abod = new Discord.RichEmbed()
    .setTitle(`User reported ${message.author.tag}`)
    .addField('**User:**', `${name1}`, true)
    .addField('**room:**', `${message.channel.name}`, true)
    .addField('**Rep:**', `${reason}`, true)
    .setFooter(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
    .setTimestamp()
        message.guild.channels.find('name', 'الابلاغات').sendEmbed(abod)
    message.reply('**:sunglasses:بنأخذ حقك:sunglasses:**').then(msg => msg.delete(3000));
    }
});









const ytdl = require("ytdl-core");
const { Client, Util } = require('discord.js');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const queue = new Map();



client.on('message', async msg => { // eslint-disable-line
	if (msg.author.bot) return undefined;
	//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	if (!msg.content.startsWith(prefix)) return undefined;
	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(prefix.length)
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	if (command === `play`) {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send('Go to voice channel first.');
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
			return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
		}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
		}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

		if (!permissions.has('EMBED_LINKS')) {
			return msg.channel.sendMessage("**يجب توآفر برمشن `EMBED LINKS`لدي **")
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
			return msg.channel.send(` **${playlist.title}** Added`);
		} else {
			try {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

				var video = await youtube.getVideo(url);
			} catch (error) {
				try {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
					var videos = await youtube.searchVideos(searchString, 5);
					let index = 0;
					const embed1 = new Discord.RichEmbed()
			        .setDescription(`**chose member from 1 to 5** :
${videos.map(video2 => `[**${++index} **] \`${video2.title}\``).join('\n')}`)
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
					.setFooter("『ζ͜͡M Bot』")
					msg.channel.sendEmbed(embed1).then(message =>{message.delete(20000)})

					// eslint-disable-next-line max-depth
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 15000,
							errors: ['time']
						});//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
					} catch (err) {
						console.error(err);
						return msg.channel.send('No soundtrack selected');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send(':X:No search results available ');
				}
			}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

			return handleVideo(video, msg, voiceChannel);
		}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	} else if (command === `skip`) {
		if (!msg.member.voiceChannel) return msg.channel.send('Go to voice channel first .');
		if (!serverQueue) return msg.channel.send('Where song');
		serverQueue.connection.dispatcher.end('skkiped');
		return undefined;
	} else if (command === `stop`) {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		if (!msg.member.voiceChannel) return msg.channel.send('Go to voice channel first.');
		if (!serverQueue) return msg.channel.send('where song');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('stopprd');
		return undefined;
	} else if (command === `vol`) {
		if (!msg.member.voiceChannel) return msg.channel.send('Go to voice channel first .');
		if (!serverQueue) return msg.channel.send('Noth.');
		if (!args[1]) return msg.channel.send(`:loud_sound: مستوى الصوت **${serverQueue.volume}**`);
		serverQueue.volume = args[1];//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
		return msg.channel.send(`:speaker: تم تغير الصوت الي **${args[1]}**`);
	} else if (command === `np`) {
		if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
		const embedNP = new Discord.RichEmbed()
	.setDescription(`:notes: الان يتم تشغيل : **${serverQueue.songs[0].title}**`)
		return msg.channel.sendEmbed(embedNP);
	} else if (command === `queue`) {
		//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
		let index = 0;
		//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		const embedqu = new Discord.RichEmbed()
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
.setDescription(`**Songs Queue**
${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}
**الان يتم تشغيل** ${serverQueue.songs[0].title}`)
		return msg.channel.sendEmbed(embedqu);
	} else if (command === `pause`) {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('تم إيقاف الموسيقى مؤقتا!');
		}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		return msg.channel.send('لا يوجد شيء حالي ف العمل.');
	} else if (command === "resume") {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('استأنفت الموسيقى بالنسبة لك !');
		}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		return msg.channel.send('لا يوجد شيء حالي في العمل.');
	}

	return undefined;
});
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
//	console.log('yao: ' + Util.escapeMarkdown(video.thumbnailUrl));
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		queue.set(msg.guild.id, queueConstruct);
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		queueConstruct.songs.push(song);
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`لا أستطيع دخول هذآ الروم ${error}`);
		}
	} else {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(` **${song.title}** تم اضافه الاغنية الي القائمة!`);
	}
	return undefined;
}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	console.log(serverQueue.songs);
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
			play(guild, serverQueue.songs[0]);
		})//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		.on('error', error => console.error(error));//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

	serverQueue.textChannel.send(`بدء تشغيل : **${song.title}**`);
}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'



client.on("message", message => {
 if (message.content === `${prefix}music`) {
  const embed = new Discord.RichEmbed() //by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
      .setColor("#00ff47")//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
      .setDescription(`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
${prefix}play
to play any soong
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
${prefix}vol
To change the volume
1-100
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
${prefix}pause 
To pause the song
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
${prefix}resume
Play the song after pausing it
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
${prefix}np
To see the current song
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
${prefix}queue
To see the playlist
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
${prefix}skip
to skipe a next song
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
${prefix}stop
if you want stopprd the song
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
`)//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
   message.channel.sendEmbed(embed)//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

   }
   });




client.on("message", message => {
      if (message.content === "$$ping") {
      const embed = new Discord.RichEmbed()
  .setColor("#00ff47")
  .addField('**Pingo:**' , `${Date.now() - message.createdTimestamp}` + ' ms')
  message.channel.sendEmbed(embed);
    }
});


var moment = require("moment");
client.on('message', message => {
  var prefix = '$$';
  
  if (message.content.startsWith(prefix + "id")) {
      message.react("🆔") 
  if(!message.channel.guild) return message.reply(`this command for servers only`);
   message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var moment = require('moment');
      var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
moment.locale('en-en');
      var id = new  Discord.RichEmbed()
    .setColor("!0a0909")
    .setAuthor(message.author.username, message.author.avatarURL) 
.addField('joined at:', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
.addField('joined to server at:', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
.addField("Name", `${message.author.username}`)
.addField('Discriminator', message.author.discriminator)
.addField('ID', message.author.id)
.setFooter("Your Info")  
    message.channel.sendEmbed(id);
})
}       
});



client.on('message', message => {
    if (message.content.startsWith("$$avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("#00ff47")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});



client.on("message", message => {
    const prefix = "$$"
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`صورة السيرفر`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(`#00ff47`)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });

client.on('message', function(msg) {
    const prefix = '$$'
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('#00ff47')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`**معلومات السيرفر**`)
      .addField('🌐**__دولة السيرفر__**',`『** __${msg.guild.region}__ **』`,true)
      .addField(':star:** __عدد الرتب__**',`『** __${msg.guild.roles.size}__ **』`,true)
      .addField(':black_heart:**__ عدد الاعضاء__**',`『** __${msg.guild.memberCount}__ **』`,true)
      .addField(':green_heart:**__ عدد الاعضاء الاونلاين__**',`『** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **』`,true)
      .addField('📝**__ الرومات الكتابية__**',`『** __${msg.guild.channels.filter(m => m.type === 'text').size}__** 』`,true)
      .addField('🎤**__ رومات الصوت__**',`『** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **』`,true)
      .addField('👑**__ الأونـر__**',`**『${msg.guild.owner}』**`,true)
      .addField('🆔**__ ايدي السيرفر__**',`**『${msg.guild.id}』**`,true)
      .addField(':calendar_spiral:**__ صنع السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });

client.on('message', message => {
     if(!message.channel.guild) return;
var prefix = "$$";
                if(message.content.startsWith(prefix + 'allbots')) {

    
    if (message.author.bot) return;
    let i = 1;
        const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL)
          .setDescription(`**تم ايجاد ${message.guild.members.filter(m=>m.user.bot).size} في هذا السيرفر**
${botssize.join('\n')}`)
.setFooter(client.user.username, client.user.avatarURL)
.setTimestamp();
message.channel.send(embed)

}


});





const perfix = '$$';
client.on('message', msg => {
 if (msg.content.startsWith(prefix + 'msg')) {
      let args = msg.content.split(' ').slice(1)
      if (!args[0]) return msg.reply(`**منشن ._.**`)
      if (!args[1]) return msg.reply(`**ترسل رسالة فاضية؟._.**`)
      let norElden = msg.mentions.members.first()
      if (!norElden) return msg.reply(`**حدد ياخي._.**`)
      let norEldenEmbed = new Discord.RichEmbed()
      .setTitle(`**رسالة جديدة من من؟**`)
      .setDescription(args.join(" "))

      client.users.get(`${norElden.id}`).send(norEldenEmbed)
      msg.reply(`**تمت المهمة بنجاح**`)
    }
});


client.on('message', message => {
    if (message.content.startsWith("Musers")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('#00ff47')
            .setTitle('USERS & SERVERS')
                  .addField('**SERVERS**:crown:' , `[${client.guilds.size}]` , true)
                  .addField('**USERS**:hearts:' , `[${client.users.size}]` , true)
                  .setFooter('THX FOR ALL')
    })
}
});


client.on('message', message => {
    if (message.content.startsWith("$$bot")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('#00ff47')
            .setTitle(':innocent:**__INFO OF ME__**:innocent:')
            .addField('**MY PING**:rocket:' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('**RAM**:inbox_tray:', `『${(process.memoryUsage().rss / 1048576).toFixed()}MB』`, true)
            .addField('**MY NAME**:crown:' , `『${client.user.tag}』` , true)
            .addField('**MY ID**:id:' , `『${client.user.id}』` , true)
                  .addField('**MY PREFIX**' , `『M』` , true)
                  .addField('**My Language**' , `『JS』` , true)
                  .setFooter('『Dev: ζ͜͡👑XMGX#3474』')
    })
}
});

const Sra7a = [
    'صراحة|  صوتك حلوة؟',
    'صراحة|  التقيت الناس مع وجوهين؟',
    'صراحة| أعبجك البوت؟',
    'صراحة  | متى تحس نفسك ضعيف؟',
    'صراحة| هل تظهر حبك لشخص؟',
    'صراحة| اخر مرة كذبت فيها؟',
    'صراحة| تسب كثير؟',
    'صراحة| كيف تكشف الي يكذب عليك؟',
    'صراحة| أسخف كذبة مشت عليك؟',
    'صراحة| موقف تمنيت الأرض تبلعك؟',
    'صراحة| قد حبيت بنت؟',
    'صراحة| كيف تتصر مع الي يسيؤون لك؟',
    'صراحة| أعز صديق لك بالدسكورد؟',
    'صراحة| أعز صديق لك بالحياة الحقيقة؟',
    'صراحة| شخص تبي تنتقم منه؟',
    'صراحة| إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
    'صراحة| شخص معك بالراحة والمشاكل؟',
    'صراحة| تأخذ النصيحة ولا تسحب؟',
    'صراحة| وش تبي الناس تعرفك عليه؟',
    'صراحة| تحب الدراسة؟',
    'صراحة| أكثر يوتيوبر تحبه؟',
    'صراحة| مع من تبي تنام اليوم؟ ',
    'صراحة| أحلى صدفة؟',
    'صراحة| صفة تحبها في نفسك؟',
    'صراحة| صفة ودك تغيرها بنفسك؟',
    'صراحة|  تصلي صلواتك الخمس كلها؟',
    'صراحة| تجامل على راحتك؟',
    'صراحة| عمرك؟',
    'صراحة|  أكثر شيء ندمان عليه؟',
    'صراحة| أمنيتك المستقبلية',
]
  client.on('message', message => {
if (message.content.startsWith('Mصراحة')) {
    if(!message.channel.guild) return message.reply('**الأمر ذا بالسيرفرات لا تلعب عندي**');
 var client= new Discord.RichEmbed()
 .setTitle("صراحة")
 .setColor('#00ff47')
 .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
 .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                 .setTimestamp()
 
  message.channel.sendEmbed(client);
  message.react("??")
}
});


const secre = [
  "**تعيش لحالك لكن عندك كل شي او العكس**.",
  "**ترجع صف أول أو تعيش فاقد الذاكرة**.",
  "**تعيش على النباتات أو تعيش على اللحوم**.",
  "**تشوف الأشباح أو تسمعها**.",
  "**تقرأ أفكار الناس أو تقدر تسافر عبر الزمن**.",
  "**تقدر تختفي أو تقدر تطير**.",
  "**تعيش 5 دقايق في الماضي أو المستقبل**.",
  "**يكون معك فلوس أو تعيش سعيد**.",
  "**تشتري جوال اخر موديل بس مو لك أو تشتري جوال قديم**.",
  "**تكون حسود أو متسامح**.",
  "**تنقذ نفسك ويموت الباقين أو تموت ويعيش الباقين**.",
  "**تعيش في الماضي أو الحاضر**.",
  "**سرعة الفهد أو دهاء الثعلب**.",
  "**تنجح بكل اختباراتك أو تسافر كل سنه مجانا**.",
  "**تعيش على الجبال أو تعيش عند البحر**.",
  "**تتحق 3 اماني لك أو تعيش مع أشخاص تحبهم طول حياتك**.",
  "**تنام في غابة مظلمة أو على ظهر سفينه والجو عاصفة**.",
  "**المال أو العقل**.",
  "**الصحة أو الحكمة**.",
  "**المال أو السعادة**.",
  "**تاكل احر فلفل في العالم أو ترقص بالشارع وانت متفصخ**.",
  "**الذكاء أو الصحة**.",
  "**ترسل رسالة صوتية لأمك كلها صراخ أو تكسر بيضه على راسك**.",
]
 
 
 client.on('message', message => {
   if (message.content.startsWith("$$لوخيروك")) {
                if(!message.channel.guild) return message.reply('__**الأمر ذا بالسيرفرات لا تجي تلعب عندي**__');
  var embed = new Discord.RichEmbed()
  .setColor('#ff00db')
 
   .setThumbnail(message.author.avatarURL)
 .addField('لو خيروك:' ,
  `${secre[Math.floor(Math.random() * secre.length)]}`)
  message.channel.sendEmbed(embed);
    }
});


	


let points = {}

                client.on('message', message => {
                  if (!points[message.author.id]) points[message.author.id] = {
                    points: 0,
                    };
                  if (message.content.startsWith(prefix + 'fkk')) {
                    if(!message.channel.guild) return message.reply('**__لا تلعب عندي العب بالسيرفرات__**').then(m => m.delete(3000));
                  
                  const type = require('./Games/fkk.json');
                  const item = type[Math.floor(Math.random() * type.length)];
                  const filter = response => {
                      return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
                  };
                  message.channel.send('**الحق عندك 15 ثانية**').then(msg => {
                  
                        
                  msg.channel.send(`${item.type}`).then(() => {
                          message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
                          .then((collected) => {
                      message.channel.send(`${collected.first().author} ✅ **أصلي عليك**`);
                              let won = collected.first().author;
                              points[won.id].points++;
                            })
                            .catch(collected => {
                              message.channel.send(`**:pensive:خلص الوقت للأسف:pensive:**`);
                            })
                      })
                    })
                  }
                  });




                client.on('message', message => {
                  if (!points[message.author.id]) points[message.author.id] = {
                    points: 0,
                    };
                  if (message.content.startsWith(prefix + 'لغز')) {
                    if(!message.channel.guild) return message.reply('**__لا تلعب عندي العب بالسيرفرات__**').then(m => m.delete(3000));
                  
                  const type = require('./Games/l3s.json');
                  const item = type[Math.floor(Math.random() * type.length)];
                  const filter = response => {
                      return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
                  };
                  message.channel.send('**الحق عندك 15 ثانية**').then(msg => {
                  
                        
                  msg.channel.send(`${item.type}`).then(() => {
                          message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
                          .then((collected) => {
                      message.channel.send(`${collected.first().author} ✅ **أصلي عليك**`);
                              let won = collected.first().author;
                              points[won.id].points++;
                            })
                            .catch(collected => {
                              message.channel.send(`**:pensive:خلص الوقت للأسف:pensive:**`);
                            })
                      })
                    })
                  }
                  });





                client.on('message', message => {
                  if (!points[message.author.id]) points[message.author.id] = {
                    points: 0,
                    };
                  if (message.content.startsWith(prefix + '3wasm')) {
                    if(!message.channel.guild) return message.reply('**__لا تلعب عندي العب بالسيرفرات__**').then(m => m.delete(3000));
                  
                  const type = require('./Games/3w.json');
                  const item = type[Math.floor(Math.random() * type.length)];
                  const filter = response => {
                      return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
                  };
                  message.channel.send('**الحق عندك 15 ثانية**').then(msg => {
                  
                        
                  msg.channel.send(`${item.type}`).then(() => {
                          message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
                          .then((collected) => {
                      message.channel.send(`${collected.first().author} ✅ **أصلي عليك**`);
                              let won = collected.first().author;
                              points[won.id].points++;
                            })
                            .catch(collected => {
                              message.channel.send(`**:pensive:خلص الوقت للأسف:pensive:**`);
                            })
                      })
                    })
                  }
                  });



                client.on('message', message => {
                  if (!points[message.author.id]) points[message.author.id] = {
                    points: 0,
                    };
                  if (message.content.startsWith(prefix + 'mine')) {
                    if(!message.channel.guild) return message.reply('**__لا تلعب عندي العب بالسيرفرات__**').then(m => m.delete(3000));
                  
                  const type = require('./Games/mine.json');
                  const item = type[Math.floor(Math.random() * type.length)];
                  const filter = response => {
                      return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
                  };
                  message.channel.send('**الحق عندك 15 ثانية**').then(msg => {
                  
                        
                  msg.channel.send(`${item.type}`).then(() => {
                          message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
                          .then((collected) => {
                      message.channel.send(`${collected.first().author} ✅ **أصلي عليك**`);
                              let won = collected.first().author;
                              points[won.id].points++;
                            })
                            .catch(collected => {
                              message.channel.send(`**:pensive:خلص الوقت للأسف:pensive:**`);
                            })
                      })
                    })
                  }
                  });


                client.on('message', message => {
                  if (!points[message.author.id]) points[message.author.id] = {
                    points: 0,
                    };
                  if (message.content.startsWith(prefix + 'a3lam')) {
                    if(!message.channel.guild) return message.reply('**__لا تلعب عندي العب بالسيرفرات__**').then(m => m.delete(3000));
                  
                  const type = require('./Games/a3lam.json');
                  const item = type[Math.floor(Math.random() * type.length)];
                  const filter = response => {
                      return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
                  };
                  message.channel.send('**الحق عندك 15 ثانية**').then(msg => {
                  
                        
                  msg.channel.send(`${item.type}`).then(() => {
                          message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
                          .then((collected) => {
                      message.channel.send(`${collected.first().author} ✅ **أصلي عليك**`);
                              let won = collected.first().author;
                              points[won.id].points++;
                            })
                            .catch(collected => {
                              message.channel.send(`**:pensive:خلص الوقت للأسف:pensive:**`);
                            })
                      })
                    })
                  }
                  });



                client.on('message', message => {
                  if (!points[message.author.id]) points[message.author.id] = {
                    points: 0,
                    };
                  if (message.content.startsWith(prefix + 'Fort')) {
                    if(!message.channel.guild) return message.reply('**__لا تلعب عندي العب بالسيرفرات__**').then(m => m.delete(3000));
                  
                  const type = require('./Games/Fortnite.json');
                  const item = type[Math.floor(Math.random() * type.length)];
                  const filter = response => {
                      return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
                  };
                  message.channel.send('**الحق عندك 15 ثانية**').then(msg => {
                  
                        
                  msg.channel.send(`${item.type}`).then(() => {
                          message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
                          .then((collected) => {
                      message.channel.send(`${collected.first().author} ✅ **أصلي عليك**`);
                              let won = collected.first().author;
                              points[won.id].points++;
                            })
                            .catch(collected => {
                              message.channel.send(`**:pensive:خلص الوقت للأسف:pensive:**`);
                            })
                      })
                    })
                  }
                  });



const Za7f = [
    "**صورة وجهك او رجلك او خشمك او يدك**.",
    "**اصدر اي صوت يطلبه منك أخوياك**.",
    "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
    "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
    "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
    "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
    "**ذي المرة لك لا تعيدها**.",
    "**قل لأخوياك الي عندك احبك واحد واحد**.",
    "**صور اي شيء يطلبه منك الاعبين**.",
    "**سو اي شي يطلبه منك الي عندك**.",
    "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
    "**سو مشهد تمثيلي عن مصرية بتولد**.",
    "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
    "**ذي المرة لك لا تعيدها**.",
    "**رحمناك لا تعودها**.",
    "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
    "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",
    "**تكلم مصري لدقيقة**.",
    "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
    "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
    "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
    "**اتصل على امك و قول لها انك تحبها :heart:**.",
    "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
    "**سوو قرعة والي يفوز عطه 1000 كريدت**.",
    "**منشن الجميع وقل انا اكرهكم**.",
    "**اعطي احد من الموجودين رتبة عالية**.",
    "**روح لأي واحد خاص قل له احبك**.",
    "**اعطي نفسك كف وخلينا نسمع الصوت**.",
    "**حط صورتك واسمك بنت**.",
    "**تكلم قصيمي اولاه لين يقولون لك اخوياك خلاص**.",
    "**لا تتكلم ولا تكتب لين يسمحون لك اخوياك واذا نسوك مدري وش نسوي :joy: **.",
    "**قول قصيدة **.",
    "**تكلم سوداني لخمس دقايق**.",
    "**اعطي اي واحد هدية**.",
    "**اول شخص يجي ببالك قل له احبك**.",
    "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",
    "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
    "**خل اخوك الصغير يعطيك اي عقاب**.",
    "**اعطي اي واحد 2000 كريدت**.",
    "**خذ عقابين :joy: **.",
    "**اسم امك افتخر به**.",
    "**خل الي معك يختارون عقاب لك**.",
    "**رحمناك لا تعيدها**.",
    "**عط اقرب واحد لك بوسة**.",
    "**تحط صورتك صورة بنت واسمك ليوم كامل**.",
    "** خل اي واحد يختار لك عقاب**.",
    "**اكتب قصيدة وقولها**.",
      "**المسامح كريم:innocent:**.",
      "**خلاص سامحتك**.",
      "** تكلم سعودي :flag_sa:**.",
      "** اخوياك يختارون شخص تروح تقول له احبك**.",
  
]


 client.on('message', message => {
   if (message.content.startsWith("$$عقاب")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('#00ff47')
   .setThumbnail(message.author.avatarURL) 
 .addField('M Games' ,
  `${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
  message.channel.sendEmbed(embed);
    }
});





const zead = [
     '*** انا اسمي مريم ***',
     '*** مرحباَ ماهو اسمك ؟ ***',
     `*** اهلا بك ! انا تائهه في هذا المكان  ***`,
     '*** هل تود مساعدتي ؟ ***',
     '*** لماذا هل انت قاسي القلب ؟ ***',
     '*** انني اشفق عليك عليك يجب ان تطهر روحك وتحب الخير للجميع ***',
     '*** ابتعد عني قليل انني متعبة ***',
     '*** هل انت نادم على ماقلت ؟ ***',
     '*** ابتعد عني قليل انني متعبة ***',
     '*** هل انت نادم على ماقلت ؟ ***',
     '*** هل تود مساعدتي ؟ ***',
     '*** واو اشكرك انك شخصاَ رائع ! ***',
     '*** ابحث معي عن منزلي لقد كان قريباَ من هنا ***',
     '*** ولكن عندما حل الليل لم اعد ارى اي شيء ***',
     '*** مذا تظن اين يوجد ؟ يمين او يسار ***',
     '*** هيا اذاَ ***',
     '*** اود ان اسئلك سؤال ونحن في الطريق ***',
     '*** هل تراني فتاة لطيفة ام مخيفة ***',
     '*** اشكرك !  ***',
     '*** لقد وصلنا الى المنزل شكراَ جزيلَ انتطرني ثواني وسوف اعود ***',
     '*** هل انت جاهز ؟ ***',
     '*** لقد اخبرت والدي عنك وهم متحمسين لرؤيتك ***',
     '*** هل تود ان تراهم الان ***',
  '*** انا لست الحوت الازرق كما يدعون ***',
     '*** انا لست كاذبة صدقني***',
     '*** لماذا ارى في عينيك الخوف ؟ ***',
     '*** انا مجرد فتاة لطيفة تحب اللعب مع الجميع ***',
     '*** اعرف كل شيء يحدث اسمع ذالك بالراديو ***',
     '*** سمعت ان البشر يقتلون من اجل المال فقط ***',
     '*** لماذا لم تدخل الغرفة ؟ ***',
     '*** ههههههههههههههههههه انت الان مسجون في هذه الغرفة ***',
     '*** لن تخرج حتى اعود لك بعد قليل ***',
     '*** المفتاح معك ! اكتب .مريم  ***',
     '*** مفتاح احمر , هل حصلت عليه ؟ ***',
     '*** ان لم تحصل عليه , اكتب .مريم مرة اخرى ***',
     '*** مفتاح اسود . هل حصلت عليه ؟ ***',
     '*** اين تريد ان تختبئ بسرعة قبل ان تعود ***',
     '*** لقد عادت من جديد الى المنزل ***',
     '*** لا تصدر اي صوت ! ***',
     '*** مريم : لقد عدت ***',
     '*** مريم : يا ايها المخادع اين انت ***',
     '*** مريم : اعلم انك هنا في المنزل ***',
     '*** مريم : ماذا تريد ان تسمع ***',
     '*** مريم : اضغط على الرابط اهداء مني لك | https://www.youtube.com/channel/UCpjf9L0G7TalNYkbq13SqAQ ***',
     '*** احد ما خرج من المنزل ***',
     '*** انتظر الجزء الثاني ساعدنا وانشر البوت  ***'
  ]
   client.on('message', message => {
	   	var prefix = "$$"
   if (message.content.startsWith(prefix + 'مريم')) {
    var mariam= new Discord.RichEmbed()
    .setTitle("$$ Games")
    .setColor('#00ff47')
    .setDescription(`${zead[Math.floor(Math.random() * zead.length)]}`)
    .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
     message.channel.sendEmbed(mariam);
     message.react("??")
    }
  });

client.on('message', message => {
    if (message.content.startsWith("$$hack")) {
      if (message.author.bot) return
           message.delete();
             let args = message.content.split(' ').slice(1);
                   let virusname = args.join(' ');
                 if (virusname < 1) {
                     return message.channel.send("``اكتب اسم الشخص الي تبي يتهكر``");
                                     }
                 message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] 1%').setColor(0xFF0000)})
             }, 1000)
            setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓] 25%').setColor(0xFF0000)})
             }, 2000)
           setTimeout(function() {     
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 100%').setColor(0xFF0000)})
             }, 3000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 1...').setColor(0xFF0000)})
             }, 4000)
              setTimeout(function() {
               m.delete()
           }, 5000)
             setTimeout(function() {
               message.channel.send('تم تهكيرك')
           }, 6000)
           });
         }
 });


const { shuffle, list, verify } = require('./Games/xo.js');

const TictacSet = new Set();

client.on('message', async msg => {
    var p = "$$"
  if(msg.content.startsWith(p + "xo")) {
   let args = msg.content.split(' ').slice(1).join(' ');
                        let user;
        if (msg.mentions.users.size) { user = msg.mentions.users.first(); }
        else if (args[0]) { user = await msg.guild.fetchMember(args[0]);
        if (user) { user = user.user; } }
        if (!user) return msg.reply('You must mention someone or give their id'); 
                if (user.bot) return msg.reply('._.البوتات ماتلعب مثل الناس');
                if (user.id === msg.author.id) return msg.reply('مايصلح تلعب مع نفسك يا نفسية ._.');
                TictacSet.add(msg.channel.id);
                try {
                        await msg.channel.send(`${user}, تقبل التحدي؟ y or n`);
                        const verification = await verify(msg.channel, user);
                        if (!verification) {
                                TictacSet.delete(msg.channel.id);
                                return msg.channel.send('ما يبي يلعب');
                        }
                        const sides = ['0⃣', '1⃣', '2⃣', '3⃣', '4⃣', '5⃣', '6⃣', '7⃣', '8⃣'];
      const nomor = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
                        const taken = [];
                        let userTurn = true;
                        let winner = null;
                        while (!winner && taken.length < 9) {
                                const pUser = userTurn ? msg.author : user;
                                const sign = userTurn ? '❎' : '🅾';
                                await msg.channel.send('\n' + `
                                        ${pUser}, دورك أكتب رقم المكان
                                        =============
                                        ${sides[0]}${sides[1]}${sides[2]}
                                        ${sides[3]}${sides[4]}${sides[5]}
                                        ${sides[6]}${sides[7]}${sides[8]}
                                        =============
                                `);
                                const filter = res => {
                                        const choice = res.content;
                                        return res.author.id === pUser.id && nomor.includes(choice) && !taken.includes(choice);
                                };
                                const turn = await msg.channel.awaitMessages(filter, {
                                        max: 1,
                                        time: 30000
                                });
                               
                                if (!turn.size) {
                                        await msg.channel.send('أنتهى الوقت المرة الجاية العب بشكل أسرع');
                                        userTurn = !userTurn;
                                        continue;
                                }
                                const choice = turn.first().content;
                                sides[Number.parseInt(choice, 10)] = sign;
                                taken.push(choice);
                                if (
                                        (sides[0] === sides[1] && sides[0] === sides[2])
                                        || (sides[0] === sides[3] && sides[0] === sides[6])
                                        || (sides[3] === sides[4] && sides[3] === sides[5])
                                        || (sides[1] === sides[4] && sides[1] === sides[7])
                                        || (sides[6] === sides[7] && sides[6] === sides[8])
                                        || (sides[2] === sides[5] && sides[2] === sides[8])
                                        || (sides[0] === sides[4] && sides[0] === sides[8])
                                        || (sides[2] === sides[4] && sides[2] === sides[6])
                                ) winner = userTurn ? msg.author : user;
                                userTurn = !userTurn;
                        
                                
                        }
                        TictacSet.delete(msg.channel.id);
                
                        return msg.channel.send(winner ? `مبرووك, ${winner}!` : 'GG مره اخرى ان شاء الله');
                } catch (err) {
                        TictacSet.delete(msg.channel.id);
                        throw err;
                }
        }
});


client.on('guildMemberAdd', member => {
let welcomer = member.guild.channels.find("name","welcome");
if(!welcomer) return;
if(welcomer) {
 moment.locale('en-ly');
 var abdob = member.user;
let abdo = new Discord.RichEmbed()
.setColor(member.guild.me.highestRole.color) 
.setThumbnail(abdob.displayAvatarURL)
.setAuthor(abdob.username,abdob.avatarURL)
.setDescription(`:arrow_lower_right: ${member} joined the server`)
.addField(':alarm_clock: Age of account :',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
.setFooter(`${abdob.tag}`,"https://images-ext-1.discordapp.net/external/UZGoDhJDKP6kHsb06okIQWCn1soJVUdOsRvu7184-SM/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/464139412251344897/f537769c6c17e31bb6969ef14c64ec61.png")
.setTimestamp()
welcomer.send(abdo);    
}
});

client.on('guildMemberRemove', member => {
  let welcomer = member.guild.channels.find("name","welcome");
  if(!welcomer) return;
  if(welcomer) {
     moment.locale('en-ly');
     var abdob = member.user;
    let abdo = new Discord.RichEmbed()
    .setColor(member.guild.me.highestRole.color) 
    .setThumbnail(abdob.displayAvatarURL)
    .setAuthor(abdob.username,abdob.avatarURL)
    .setDescription(`:arrow_upper_left: ${member} left the server 👋`)
    .setFooter(`${abdob.tag}`,"https://images-ext-1.discordapp.net/external/UZGoDhJDKP6kHsb06okIQWCn1soJVUdOsRvu7184-SM/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/464139412251344897/f537769c6c17e31bb6969ef14c64ec61.png")
    .setTimestamp()
 welcomer.send(abdo);          
}
});


client.login(process.env.BOT_TOKEN);
