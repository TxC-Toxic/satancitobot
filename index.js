// das créditos puta

//npm
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const tik = require('tiktok-scraper-without-watermark')
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const Fb = require('fb-video-downloader');
const twitterGetUrl = require("twitter-url-direct")
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const { error } = require("qrcode-terminal")
const util = require('util')
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload } = require('./lib/ytdl')
const { webp2mp4File} = require('./lib/webp2mp4')
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")

//json file
const _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/level.json'))
const afk = JSON.parse(fs.readFileSync('./database/off.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))

//Config
const { covidindo } = require("./config/covidindo.js")
const { covidworld } = require("./config/covidworld.js")
const { cnn } = require("./config/cnn.js")
const { Gempa } = require("./config/gempa.js");
const { herolist } = require("./config/herolist.js")
const { herodetails } = require("./config/herodetail.js")

//wa connect
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		ChatModification,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
//=================================================//
prefix = '.'
hit_today = []
blocked = []
banChats = false
offline = false
targetpc = '50373488366'
owner = '50373488366'
fake = 'SATANCITO ᵈᵃʳʸ⛥'
numbernye = '0'
waktu = '-'
alasan = '-'
//=================================================//
async function starts() {
	const pato = new WAConnection()
	pato.logger.level = 'warn'
	console.log('>', '[',color('INGFO','blue'),']','Menglogin kawan...')
	pato.on('qr', () => {
	console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})

	fs.existsSync('./session.json') && pato.loadAuthInfo('./session.json')
	pato.on('connecting', () => {
	console.log(color('> [ INGFO ]', 'white'), color('Connecting...'))
	})
	pato.on('open', () => {
	console.log(color('> [ INGFO ]', 'white'), color('Connected'))
	})
		await pato.connect({timeoutMs: 30*1000})
  fs.writeFileSync('./session.json', JSON.stringify(pato.base64EncodedAuthInfo(), null, '\t'))
//Banned Call
pato.on('CB:action,,call', async json => {
    const callerId = json[2][0][1].from;
    console.log("call dari "+ callerId)
        pato.sendMessage(callerId, "Auto block system, don't call please", MessageType.text)
        await sleep(4000)
        await pato.blockUser(callerId, "add")
})
//Welkom
	pato.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
            num = anu.participants[0]
            const mdata = await pato.groupMetadata(anu.jid)
            try {
                var pp_user = await pato.getProfilePicture(num)
            } catch (e) {
                var pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
            if (anu.action == 'add') {
                ini_user = pato.contacts[num]
                ini_img = await getBuffer(`http://api.lolhuman.xyz/api/welcomeimage?apikey=${LolHuman}&img=${pp_user}&text=${ini_user.notify}`)
                group_info = await pato.groupMetadata(anu.jid)
                welkam = `Hola ${ini_user.notify}\n◪ Welcome in group:\n├─ ${mdata.subject}\n│\n├─ Intro dulu\n├─ ❏ Nama: \n├─ ❏ Umur: \n├─ ❏ Asal kota: \n├─ ❏ Kelas: \n├─ ❏ Jenis kelamin: \n└─ ❏ Nomor: ${num.replace('@s.whatsapp.net', '')}\nSemoga Betah yaa~~\n${ini_user.notify}`
                pato.sendMessage(anu.jid, ini_img, MessageType.image, { caption: welkam })
            }
            if (anu.action == 'remove') {
                ini_user = pato.contacts[num]
                ini_img = await getBuffer(`http://api.lolhuman.xyz/api/welcomeimage?apikey=${LolHuman}&img=${pp_user}&text=${ini_user.notify}`)
                out = `◪ chao ${ini_user.notify}\n◪ se fue de:\n${mdata.subject}\n│\n└─ ❏ Numero: ${num.replace('@s.whatsapp.net', '')}\nPor puto Ojala no vuelva UnU~~`
                pato.sendMessage(anu.jid, ini_img, MessageType.image, { caption: out })
            }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
})
	// Chat Update
pato.on('chat-update', async (mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
		mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(mek.message)[0]
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(0).trim().split(/ +/).shift().toLowerCase()
		hit_today.push(command)
        const arg = budy.slice(command.length + 1, budy.length)
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		//const meNumber = pato.user.jid.split("@")[0]
		const botNumber = pato.user.jid
		const ownerNumber = ['50373488366@s.whatsapp.net'] //Satan owner
//SETTING WeA
		const isGroup = from.endsWith('@g.us')
		const sender = isGroup ? mek.participant : mek.key.remoteJid
		const senderme = mek.participant
		const isOwner = ownerNumber.includes(sender)
		const isMe = botNumber.includes(senderme)
//
		const totalchat = await pato.chats.all()
		const groupMetadata = isGroup ? await pato.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const conts = mek.key.fromMe ? pato.user.jid : pato.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? pato.user.name : conts.notify || conts.vname || conts.name || '-'
       
        //MESS
        
		mess = {
			wait: 'Ten paciencia soy lenta TwY',
			success: 'Oki doki ^w^',
			wrongFormat: 'Formato incorrecto, intenta denuevo UwU',
			error: {
				stick: 'No pude convertirlo, perdon T~T',
				Iv: 'Y ese link funciona? U.U'
			},
			only: {
				group: 'Solo en grupos ÙnÚ',
				admin: 'Solo los admins UvU',
				Badmin: 'No soy una admin T-T'
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            pato.sendMessage(from, teks, text, {quoted:mek})
        }

        const sendMess = (hehe, teks) => {
            pato.sendMessage(hehe, teks, text, {sendEphemeral: true})
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? pato.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : pato.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        //FAKEH
const fakekontak = (teks) => {
pato.sendMessage(from, teks, MessageType.text, {
quoted: {
key: {
fromMe: false,
 participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {})
 },
message: {
 'contactMessage': {
 'displayName': `Hola ${pushname}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ucapanWaktu},;;;\nFN:${ucapanWaktu},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')
}
}
                }
            })
        }


			

        const fakethumb = (teks, yes) => {
            pato.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./stik/fake.jpeg'),quoted:mek,caption:yes})
        }
        const fakestatus = (teks) => {
            pato.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": `Holi cosita ^-^${pushname}`,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    },
                    contextInfo: {
                      "forwardingScore": 999, "isForwarded": true
                    }
                }
            })
        }
        const fakegroup = (teks) => {
            pato.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": `Holi cosita UwU ${pushname}`,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
 const faketoko = (teks) => {
 pato.sendMessage(from, teks, text, {
quoted: {
 key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {}) 
}, message: {
'productMessage': {
'product': {
 'productImage':{
'mimetype': 'image/jpeg',
 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')
},
'title': `Hola cosita UwU${pushname}`,
'productImageCount': 9999
},
'businessOwnerJid': `0@s.whatsapp.net`
}
}
                }
            })
        }
const faketokoforwaded = (teks) => {
	anu = {
	  key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./stik/thumb.jpeg`)
					},
					"title": `Holi cosita UwU ${pushname}, ${ucapanWaktu}`,
					"retailerId": "Self Bot",
					"productImageCount": 1
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
	pato.sendMessage(from, teks, text, {
	  quoted: anu,
	  contextInfo:{
	    "forwardingScore": 999, "isForwarded": true
	  }
	})
}
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        pato.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    pato.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
//FUNCTION
            cekafk(afk)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            pato.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
            }
            }   
        if (mek.key.remoteJid.endsWith('@g.us') && offline) {
        if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
        if (mek.message.extendedTextMessage.contextInfo != undefined){
        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(mek.key.remoteJid)) return
        addafk(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        pato.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
          }
        }
            }
          }
        }
      }
    }
    //> Level <
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const jadiUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            user.push(obj)
            fs.writeFileSync('./database/user.json', JSON.stringify(user))
        }
        const bikinSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/level.json', JSON.stringify(_level))
        }
			//[-- function level bar --]
			var per = '*[▒▒▒▒▒▒▒▒▒▒] 0%*'
			const peri = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
			const perl = peri-getLevelingXp(sender) 
			const resl = Math.round(100-((perl/getLevelingXp(sender))*100))
			if (resl <= 10) {
				per = `*[█▒▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 20) {
				per = `*[██▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 30) {
				per = `*[███▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 40) {
				per = `*[████▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 50) {
				per = `*[█████▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 60) {
				per = `*[██████▒▒▒▒] ${resl}%*`
			} else if (resl <= 70) {
				per = `*[███████▒▒▒] ${resl}%*`
			} else if (resl <= 80) {
				per = `*[████████▒▒] ${resl}%*`
			} else if (resl <= 90) {
				per = `*[█████████▒] ${resl}%*`
			} else if (resl <= 100) {
				per = `*[██████████] ${resl}%*`
			} 
			/*[-- function rank --]*/
			const levelRole = getLevelingLevel(sender)
   	     var role = 'Noob'
   	     if (levelRole <= 3) {
   	         role = 'Aun noob'
   	     } else if (levelRole <= 5) {
   	         role = 'Soldado'
   	     } else if (levelRole <= 7) {
   	         role = 'Asalto'
   	     } else if (levelRole <= 8) {
   	         role = 'Sargento'
   	     } else if (levelRole <= 9) {
   	         role = 'Sargento II'
   	     } else if (levelRole <= 10) {
   	         role = 'Sargento III'
   	     } else if (levelRole <= 11) {
   	         role = 'Sargento IV'
   	     } else if (levelRole <= 12) {
   	         role = 'Teniente'
   	     } else if (levelRole <= 13) {
   	         role = 'Teniente II'
   	     } else if (levelRole <= 14) {
   	         role = 'Sgt 1st class III'
   	     } else if (levelRole <= 14) {
   	         role = 'Ggt 1st class IV'
   	     } else if (levelRole <= 15) {
   	         role = 'Master sgt I'
   	     } else if (levelRole <= 16) {
   	         role = 'Master sgt II'
   	     } else if (levelRole <= 17) {
   	         role = 'Master sgt III'
   	     } else if (levelRole <= 18) {
   	         role = 'Master sgt IV'
   	     } else if (levelRole <= 19) {
   	         role = 'Master sgt V'
   	     } else if (levelRole <= 20) {
   	         role = '2nd Lt I'
   	     } else if (levelRole <= 21) {
   	         role = '2nd Lt II'
   	     } else if (levelRole <= 22) {
   	         role = '2nd Lt III'
   	     } else if (levelRole <= 23) {
   	         role = '2nd Lt IV'
   	     }
   //Function Level Up
const levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	fakekontak(`\n*「 FELICIDADES 」*\n┌ *Nombre* : ${pushname}\n├ *Número* : wa.me/${sender.split("@")[0]}\n├  *Xp* : ${getLevelingXp(sender)}\n├ *Rol*: ${role}\n└  *Nivel* : ${getLevel} ⊱ ${getLevelingLevel(sender)}`)
}
//Function Level
            if (isGroup) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await fakestatus(levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role))
                }
            } catch (err) {
                console.error(err)
            }
        }
//=====================//      
         // Ucapan Waktu
        const hour_now = moment().format('HH')
        var ucapanWaktu = 'wenas👋'
        if (hour_now >= '03' && hour_now <= '10') {
          ucapanWaktu = 'wenas👋'
        } else if (hour_now >= '10' && hour_now <= '14') {
          ucapanWaktu = 'wenas👋'
        } else if (hour_now >= '14' && hour_now <= '17') {
          ucapanWaktu = 'wenas👋'
        } else if (hour_now >= '17' && hour_now <= '18') {
          ucapanWaktu = 'wenas👋'
        } else if (hour_now >= '18' && hour_now <= '23') {
          ucapanWaktu = 'wenas🌚'
        } else {
          ucapanWaktu = 'wenas🌚'
        }
//========================================================================================================================//
		colors = ['blue']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;37m>', '[ \x1b[1;36mEXECC\x1b[1;37m ]', time, color(command), 'from', color(sender.split('@')[0]))
     	if (isCmd && isGroup) console.log('\x1b[1;37m>', '[ \x1b[1;36mEXECC\x1b[1;37m ]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName))
//selfmode
		if (!mek.key.fromMe && banChats === true) return
//botna
switch (command) {
  case prefix+ 'menu':
  case prefix+ 'help':
  case prefix+ '?':
    let i = []
    let giid = []
    for (mem of totalchat){
      i.push(mem.jid)
    }
    for (id of i){
      if (id && id.includes('g.us')){
        giid.push(id)
      }
    }
    let timestampi = speed();
    let sepid = speed() - timestampi
    var { device_manufacturer, device_model, mcc, mnc, os_version, os_build_number, wa_version  } = pato.user.phone
    anu = process.uptime()
    runtem = `${kyun(anu)}`
//
    var menu = `  
                SATANCITO ᵈᵃʳʸ⛥
    
Blackpink  -  How you like that 
01:52 ━━━●───── 03:08
     ⇆ㅤㅤ ◁ㅤ ❚❚ㅤ ▷ㅤ ㅤ↻﻿
                  ılıılıılıılıılıılı
ᴠᴏʟᴜᴍᴇ : ▮▮▮▮▮▮▮▯▯▯ 

- *Hits de hoy : ${hit_today.length}*
- *Celular :* ${device_manufacturer}
- *Modelo :* ${device_model}
- *RAM :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
- *Android :* ${os_version}
- *Versión de WhatsApp* : ${wa_version}
-  *Grupos :* ${giid.length}
- *Chats :* ${totalchat.length - giid.length}
- *Total de chat :* ${totalchat.length}
- *Velocidad :* ${sepid.toFixed(4)} Second
- *Mi tiempo vivo:* ${runtem}
- Prefix : 「 ${prefix} 」

╭─Comandos UwU 
├ *${prefix}off*
├ *${prefix}on*
├ *${prefix}status*
├ *${prefix}self*
├ *${prefix}public*
├ *${prefix}peson*
├ *${prefix}pesoff*
├ *${prefix}spam*
├ *${prefix}mute*
├ *${prefix}unmute*
├ *${prefix}delete*
├ *${prefix}setfake*
├ *${prefix}setfakeimg*
├ *${prefix}setprefix*
├ *${prefix}setthumb*
├ *${prefix}settarget*
├ *${prefix}covidindo*
├ *${prefix}covidworld*
├ *${prefix}cnn*
├ *${prefix}infogempa*
├ *${prefix}get* [ google.com ]
├ *${prefix}revip* [ 8.8.8.8 ]
├ *${prefix}avatar*
├ *${prefix}loli*
├ *${prefix}waifu*
├ *${prefix}husbu*
├ *${prefix}image* [ random ]
├ *${prefix}pinterest* [ random ]
├ *${prefix}anime* [ random ]
├ *${prefix}wallpaperanime*
├ *${prefix}nsfwavatar* 
├ *${prefix}nekopoi*  
├ *${prefix}hentai* 
├ *${prefix}sticker* [ image > sticker]
├ *${prefix}swm* [ author|packname ]
├ *${prefix}take* [ author|packname ]
├ *${prefix}fdeface*
├ *${prefix}emoji*
├ *${prefix}attp*
├ *${prefix}toimg* [ sticker > image ]
├ *${prefix}tovid* [ sticker > video]
├ *${prefix}tomp3* [ sticker > mp3]
├ *${prefix}slow* [ video > slow ]
├ *${prefix}fast* [ video > fast ]
├ *${prefix}reverse* [ video > reverse ]
├ *${prefix}tourl* [ image > url]
├ *${prefix}upswteks*
├ *${prefix}upswimage*
├ *${prefix}upswvideo*
├ *${prefix}herolist*
├ *${prefix}herodetail* [ Barats ]
├ *${prefix}igstalk* [username]
├ *${prefix}ig* [ link ] 
├ *${prefix}play* [ query ] 
├ *${prefix}video* [ query ] 
├ *${prefix}ytmp3* [ link ] 
├ *${prefix}ytmp4* [ link ] 
├ *${prefix}ytsearch* [ query ] 
├ *${prefix}twitter* [ link ] 
├ *${prefix}tiktok* [ link ] 
├ *${prefix}tiktokaudio* [ link ] 
├ *${prefix}fb* [ link ] 
├ *${prefix}tiktokaudio* [ query ] 
├ *${prefix}brainly* [ query ] 
├ *${prefix}add* [ 503xxxx ]
├ *${prefix}kick* [ tag ]
├ *${prefix}promote* [ tag member ]
├ *${prefix}demote* [ tag admin ]
├ *${prefix}kontak* [ 628xx|aku ]
├ *${prefix}hidetag* [ your message ]
├ *${prefix}sticktag* [ sticker > tag ]
├ *${prefix}giftag* [ gif > tag ]
├ *${prefix}doctag* [ document > tag ]
├ *${prefix}kontag* [ 687xx|aku > tag ]
├ *${prefix}totag* [ media > tag ]
├ *${prefix}ping*
├ *${prefix}term* [ code ]
├ *${prefix}runtime*
├ *${prefix}speed*
╰─ SATANCITO ᵈᵃʳʸ⛥ 
`
        	faketokoforwaded(menu)
           	break
    case prefix+ 'on':
            if (!mek.key.fromMe) return 
            offline = false
            fakestatus('En linea :D')
            break       
    case prefix+ 'off':
            if (!mek.key.fromMe) return 
            offline = true
            waktu = Date.now()
            anuu = args.join(' ') ? args.join(' ') : '-'
            alasan = anuu
            fakestatus(' Apagado UvU ')
            break
    case prefix+ 'status':
            fakestatus(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
            break
	case prefix+ 'self':
          	if (!mek.key.fromMe) return fakestatus('No eres mi dueño UnU')
          	if (banChats === true) return
          	uptime = process.uptime()
         	 // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
         	banChats = true
          	fakestatus(`「 *Privado UwU* 」`)
          	break
 //Set Owner For gc
    case prefix+ 'public':
          	if (!mek.key.fromMe) return fakestatus('No eres mi dueño UnU')
          	if (banChats === false) return
          	// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	banChats = false
          	fakestatus(`「 *PUBLICO OwO* 」`)
          	break
					case prefix+ 'peson':
					  pato.toggleDisappearingMessages(from, WA_DEFAULT_EPHEMERAL)
					  break
					  case prefix+ 'pesoff':
					    pato.toggleDisappearingMessages(from, 0)
					    break
            case prefix+ 'spam':
                if (!isMe) return reply('No eres mi dueño UnU')
                if (!arg) return reply(`Penggunaan ${prefix}spam teks|jumlahspam`)
                argz = arg.split("|")
                if (!argz) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
                if (isNaN(argz[1])) return reply(`harus berupa angka`)
                for (let i = 0; i < argz[1]; i++){
                pato.sendMessage(from, argz[0], MessageType.text, {sendEphemeral: true})
                }
	        break
             case prefix+ 'mute':
                if (!isMe) return reply('No eres mi dueño UnU')
                pato.modifyChat(from, ChatModification.mute, 24*60*60*1000)
                reply('*Muteados putos ÙwÚ*')
                console.log('succes mute chat = ' + from)
                break
            case prefix+ 'unmute':
                if (!isMe) return reply('No eres mi dueño UnU')
                pato.modifyChat(from, ChatModification.unmute)
                reply('*Ya puedo ver sus webadas UnU*')
                console.log('succes unmute chat = ' + from)
                break
            case prefix+ 'delete':
                if (!isMe) return reply('No eres mi dueño UnU')
                reply('*Chats borrados 7n7*')
                console.log('succes delete chat = ' + from)
                pato.modifyChat(from, ChatModification.delete)
                break
	case prefix+ 'setreply':
	case prefix+ 'setfake':
	  if (isMe) return('Especialmente hermano, ¿quién eres??')
			if (!q) return fakegroup(mess.wrongFormat)
			fake = q
			fakegroup(`Succes Mengganti Conversation Fake : ${q}`)
			break
	case prefix+ 'setfakeimg':
	  if (isMe) return('No eres mi dueño UnU?')
        	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await pato.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/fake.jpeg`, delb)
			fakestatus('Hecho mi amo 7~7')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
	case prefix+ 'setprefix':
	  if (isMe) return('No eres mi dueño UnU?')
			prefix = q
			fakegroup(`Succes Mengganti Prefix : ${q}`)
			break
	case prefix+ 'setthumb':
		  if (isMe) return('No eres mi dueño UnU?')
	        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await pato.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/thumb.jpeg`, delb)
			fakestatus('Hecho mi amo 7~7')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
    case prefix+ 'settarget':
	  if (isMe) return('No eres mi dueño UnU?')
            if(!q) return reply(`${prefix}settarget 503xxxxx`)
            targetpc = args[0]
            fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`)
            break
case prefix+ 'term':
if (!isMe) return reply('Solo mi dueño satan UnU')
			if (!q) return fakegroup(mess.wrongFormat)
			exec(q, (err, stdout) => {
			if (err) return fakegroup(`pato@self:~$ ${err}`)
			if (stdout) {
			fakegroup(stdout)
			}
			})
		    break 
//INFORMATION
    case prefix+ 'covidindo':
                ci = await covidindo()
                var { kasus, kematian, sembuh } = ci[0]
                reply(`Caso : ${kasus}\n\nMuerto : ${kematian}\n\nHelado : ${sembuh}`)
                break
    case prefix+ 'covidworld':
                 cw= await covidworld()
                var { kasus, kematian, sembuh } = cw[0]
                reply(`Casos : ${kasus}\n\nMuertos : ${kematian}\n\nReponerse : ${sembuh}`)
                break
    case prefix+ 'cnn':
                var result = await cnn()
                cn = 'CNN NEWS'
                for (let i = 0; i < result.length; i++) {
                  cn += `\n\nTitle : ${result[i].judul}\nLink : ${result[i].link}\nImage: ${result[i].thumb}`
                }
                buff = await getBuffer(result[0].thumb)
                pato.sendMessage(from, buff, MessageType.image, {caption: cn})
                break
    case prefix+ 'infogempa':
                tres = await Gempa()
                var { Waktu, Lintang, Bujur, Magnitude, Kedalaman, Wilayah, Map } = tres.result
                console.log(Map)
                captt = `Waktu : ${Waktu}\nLintang : ${Lintang}\nBujur : ${Bujur}\nWilayah : ${Wilayah}`
                thumbbb = await getBuffer(Map)
                pato.sendMessage(from, thumbbb, MessageType.image, {caption: `${captt}`})
                break
//tools
     case prefix+ 'get':
      if(!q) return reply('link :3?')
			.then(res => res.json())
			qweryna = args.join(' ')
			eses = await axios.get(`https://shot.screenshotapi.net/screenshot?token=D2TDY3F-G5YMM94-K9JEQT8-FYBDQBB&url=${qweryna}&full_page=true&fresh=true&output=json&file_type=png&wait_for_event=load`)
			buffqw = await getBuffer(eses.data.screenshot)
			pato.sendMessage(from, buffqw, image, {quoted: mek})
			.catch(err => {
				return('Repitiendo señor hay un errorc...')
			})
			break
    case prefix+ 'revip':
			if (args.length < 1) return reply('Domain/Ip nya mana bang??')
			var qwery = args.join(' ')
			var repip = await fetchJson(`https://sonar.omnisint.io/reverse/${qwery}`)
			pato.sendMessage(from, `${repip}`, text)
      .catch((error) => {
            reply('Invalid domain/ip'); 
            })
			break
//WIBU
case prefix+ 'avatar':
			anu = await axios.get('https://nekos.life/api/v2/img/avatar')
				avatars = await getBuffer(anu.data.url)
				pato.sendMessage(from, avatars, image, {quoted: mek})
			break
		case prefix+ 'loli':
		  anu = await axios.get('https://nekos.life/api/v2/img/neko')
				loliz = await getBuffer(anu.data.url)
				pato.sendMessage(from, loliz, image, {quoted: mek})
			break
		case prefix+ 'waifu':
			waifud = await axios.get('https://nekos.life/api/v2/img/waifu')
			nyed = await getBuffer(waifud.data.url)
			pato.sendMessage(from, nyed, image, { caption: 'Gatau caption nya apa', quoted: mek })
			.catch(err => {
				return('Pwrdon... T_T')
			})
			break
	case prefix+ 'husbu':
			husbud = await fetchJson(`https://api.fdci.se/rep.php?gambar=husbu`)
			sasu = JSON.parse(JSON.stringify(husbud));
			ke =  sasu[Math.floor(Math.random() * sasu.length)];
			nye = await getBuffer(ke)
			pato.sendMessage(from, nye, image, { caption: 'Gatau caption nya apa', quoted: mek })
			.catch(err => {
				return('Perdon... T-T')
			})
			break
//IMAGE
case prefix+ 'image':
            if (args.length < 1) return reply('Ingrese texto!')
            const gimg = args.join('');
            reply(mess.wait)
            gis(gimg, async (error, result) => {
            n = result
            images = n[Math.floor(Math.random() * n.length)].url
            pato.sendMessage(from,{url:images},image,{quoted:mek})
            });
            break
case prefix+ 'pinterest':
			goblog = args.join(" ")
			anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=${goblog}`)
			sasu = JSON.parse(JSON.stringify(anu));
			ke =  sasu[Math.floor(Math.random() * sasu.length)];
			nye = await getBuffer(ke)
			pato.sendMessage(from, nye, image, { caption: 'SATANCITO ᵈᵃʳʸ⛥', quoted: mek })
			.catch(err => {
				return('de nuevo genial? qué estás buscando?')
			})
			break
    case prefix+ 'anime':
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            pato.sendMessage(from,media,image,{quoted:mek,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
	case prefix+ 'wallpaperanime':
			wanime = await axios.get('https://nekos.life/api/v2/img/wallpaper')
			bufwanime = await getBuffer(wanime.data.url)
			pato.sendMessage(from, bufwanime, image, { quoted: mek })
			.catch(err => {
			return('Anuncio con errores de nuevo intente..')
			})
			break
//HARAM FEATURE
case prefix+ 'nsfwavatar':
			anu = await axios.get('https://nekos.life/api/v2/img/nsfw_avatar')
				nsavatar = await getBuffer(anu.data.url)
				pato.sendMessage(from, nsavatar, image, {quoted: mek})
			.catch(err => {
			return('Error 7-7.')
			})	
			break
case prefix+ 'nekopoi':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/nsfw_neko_gif')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				pato.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'pussy':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/pussy')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				pato.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'pussyimage':
  pusiimg = await axios.get('https://nekos.life/api/v2/img/pussy_jpg')
			bufpusy = await getBuffer(pusiimg.data.url)
				pato.sendMessage(from, bufpusy, MessageType.image, {quoted: mek})
			.catch(err => {
			return('Error 7-7.')
			})
			break
case prefix+ 'oppai':
			opai = await axios.get('https://nekos.life/api/v2/img/tits')
			opaiz = await getBuffer(opai.data.url)
			pato.sendMessage(from, opaiz, image, { quoted: mek })
			.catch(err => {
			return('Error 7-7.')
			})
			break
case prefix+ 'feetg':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/feetg')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				pato.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'bj':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/bj')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				pato.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'ero':
			eroz = await axios.get('https://nekos.life/api/v2/img/ero')
			bufero = await getBuffer(eroz.data.url)
			pato.sendMessage(from, bufero, image, { quoted: mek })
			.catch(err => {
			return('Error 7-7.')
			})
			break
case prefix+ 'erokemo':
			erokz = await axios.get('https://nekos.life/api/v2/img/erokemo')
			erokzs = await getBuffer(erokz.data.url)
			pato.sendMessage(from, erokzs, image, { quoted: mek })
			.catch(err => {
			return('Error 7-7.')
			})
			break
case prefix+ 'eroyuri':
			eroyuriz = await axios.get('https://nekos.life/api/v2/img/eroyuri')
			buferoyu = await getBuffer(opai.data.url)
			pato.sendMessage(from, buferoyu, image, { quoted: mek })
			.catch(err => {
			return('Error 7-7')
			})
			break
case prefix+ 'tickle':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/tickle')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				pato.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'feed':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/feed')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				pato.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'kuni':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/kuni')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				pato.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'femdom':
      anu = await axios.get('https://nekos.life/api/v2/img/femdom')
			bupemdom = await getBuffer(anu.data.url)
				pato.sendMessage(from, bupemdom, image, {quoted: mek})
			.catch(err => {
			return('Error 7-7.')
			})
			break
case prefix+ 'futanari':
			futan = await axios.get('https://nekos.life/api/v2/img/futanari')
			futanz = await getBuffer(futan.data.url)
			pato.sendMessage(from, futanz, image, { quoted: mek })
			break
case prefix+ 'les':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/les')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				pato.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'trap':
			trapx = await axios.get('https://nekos.life/api/v2/img/tits')
			traps = await getBuffer(trapx.data.url)
			pato.sendMessage(from, traps, image, { quoted: mek })
			.catch(err => {
			return('Error 7-7.')
			})
			break
case prefix+ 'pat':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/pat')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				pato.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'boobs':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/boobs')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				pato.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'blowjob':
			blowz = await axios.get('https://nekos.life/api/v2/img/blowjob')
			bufblowz = await getBuffer(blowz.data.url)
			pato.sendMessage(from, bufblowz, image, {quoted: mek})
			.catch(err => {
			return('Error 7-7.')
			})
			break
	case prefix+ 'hentai':
			hentaiz = await axios.get('https://nekos.life/api/v2/img/hentai')
			bufhtz = await getBuffer(hentaiz.data.url)
			pato.sendMessage(from, bufhtz, image, {quoted: mek})
			.catch(err => {
			return('Error 7-7.')
			})
			break
	case prefix+ 'hololewed':
			hololew = await axios.get('https://nekos.life/api/v2/img/hololewd')
			hololewx = await getBuffer(hololew.data.url)
			pato.sendMessage(from, hololewx, image, { quoted: mek })
			.catch(err =>{
			  return('Pwro')
			})
			break
case prefix+ 'lewd':
			lewdd = await axios.get('https://nekos.life/api/v2/img/lewd')
			buflewd = await getBuffer(lewdd.data.url)
			pato.sendMessage(from, buflewd, image, { quoted: mek })
			
			break
	case prefix+ 'lewdk':
			lewdkk = await axios.get('https://nekos.life/api/v2/img/lewdk')
			lewdkz = await getBuffer(lewdkz.data.url)
			pato.sendMessage(from, lewdkz, image, { quoted: mek })
			.catch(err =>{
			  return('Pwro..')
			})
			break
case prefix+ 'lewdkemo':
			lewdkm = await axios.get('https://nekos.life/api/v2/img/lewdkemo')
			buflewd = await getBuffer(lewdkm.data.url)
			pato.sendMessage(from, buflewd, image, { quoted: mek })
			.catch(err => {
			return('Pwro..')
			})
			break
case prefix+ 'goose':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/goose')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				pato.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'solog':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/solog')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				pato.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'yuri':
			yuriz = await axios.get('https://nekos.life/api/v2/img/tits')
			bupyuri = await getBuffer(yuriz.data.url)
			pato.sendMessage(from, bupyuri, image, { quoted: mek })
			.catch(err => {
			return('Error 7-7.')
			})
			break
	case prefix+ 'anal':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/anal')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				pato.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break		
case prefix+ 'pwankg':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/pwankg')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				pato.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'eron':
			eronz = await axios.get('https://nekos.life/api/v2/img/eron')
			buferon = await getBuffer(eronz.data.url)
			pato.sendMessage(from, buferon, image, { quoted: mek })
			.catch(err => {
			return('Error 7-7..')
			})
			break
case prefix+ 'kiss':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/kiss')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				pato.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'keta':
			ketaz = await axios.get('https://nekos.life/api/v2/img/keta')
			bufketa = await getBuffer(ketaz.data.url)
			pato.sendMessage(from, bufketa, image, { quoted: mek })
			.catch(err => {
			return('Error 7-7..')
			})
			break
case prefix+ 'cum':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/cum')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				pato.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'cumimage':
			cumjpg = await axios.get('https://nekos.life/api/v2/img/cum_jpg')
			bupjpg = await getBuffer(cumjpg.data.url)
			pato.sendMessage(from, bupjpg, image, { quoted: mek })
			.catch(err => {
			return('Error 7-7..')
			})
			break
case prefix+ 'oppai':
			opai = await axios.get('https://nekos.life/api/v2/img/tits')
			opaiz = await getBuffer(opai.data.url)
			pato.sendMessage(from, opaiz, image, { quoted: mek })
			.catch(err => {
			return('Error 7-7..')
			})
			break
case prefix+ 'holoero':
		holox = await axios.get('https://nekos.life/api/v2/img/holoero')
			bufholox = await getBuffer(holox.data.url)
			pato.sendMessage(from, bufholox, image, { quoted: mek })
			.catch(err => {
			return('Error 7-7..')
			})
			break
//MAKER
    case prefix+ 'sticker': 
    case prefix+ 'stiker':
    case prefix+ 'sg':
    case prefix+ 's':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await pato.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                pato.sendMessage(from, fs.readFileSync(ran), MessageType.sticker, {quoted: mek})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                const media = await pato.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            pato.sendMessage(from, fs.readFileSync(ran), MessageType.sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break
	case prefix+ 'stikerwm':
	case prefix+ 'stickerwm':
    case prefix+ 'swm':
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             media = await pato.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            pato.sendMessage(from, 'Hay un error', 'Intenta de nuevo', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            pato.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await pato.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            pato.sendMessage(from, 'Ocurrió un error ',' conversación', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            pato.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
            }
            break
    case prefix+ 'take':
    case prefix+ 'colong':
    		if (!isQuotedSticker) return reply('solo pegatinas')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await pato.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : `SELF`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : `BOT`
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, pato, mek, from)
			break
    case prefix+ 'fdeface':
            ge = args.join('')           
            var pe = ge.split("|")[0];
            var pen = ge.split("|")[1];
            var pn = ge.split("|")[2];
            var be = ge.split("|")[3];
            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
            if (args.length < 1) return reply (fde)
            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const tipes = await pato.downloadAndSaveMediaMessage(dipes)        
            const bufer = fs.readFileSync(tipes)
            const desc = `${pn}`
            const title = `${pen}`
            const url = `${pe}`
            const buu = `https://${be}`
    		var anu = {
        	detectLinks: false
    		}
    		var mat = await pato.generateLinkPreview(url)
    		mat.title = title;
    		mat.description = desc;
    		mat.jpegThumbnail = bufer;
   			mat.canonicalUrl = buu; 
    		pato.sendMessage(from, mat, MessageType.extendedText, anu)
            break
case prefix+ 'emoji':
			if (!q) return fakegroup('emoji UnU?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
           .catch((err) => {
            reply('Ahhh pwrdon T-T no pude'); 
            })
    		break
case prefix+ 'attp':
						if (args.length < 1) return reply(`Text Nya Mana Ajg?\n> *Contoh* : *${prefix}attp* _Aku Ganz_`)
						attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
						pato.sendMessage(from, attp2, MessageType.sticker, {quoted: mek})
						break
//MAKERIMAGE
//COMINGSOON
//CONVERTER
    case prefix+ 'toimg':
			if (!isQuotedSticker) return reply('Responde a un sticker!')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await pato.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Bueno, falló, inténtalo de nuevo ^_^')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'NIH')
			fs.unlinkSync(ran)
			})
			break
    case prefix+ 'tovid':
    case prefix+ 'tovideo':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await pato.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result,'Done')
            })
            }else {
            reply('responde stiker')
            }
            fs.unlinkSync(owgi)
            break
    case prefix+ 'tomp3':
            if (!isQuotedVideo) return fakegroup('Responde video UnU!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await pato.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            pato.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case prefix+ 'fast':
            if (!isQuotedVideo) return fakegroup('Reponde video UnU 📸')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await pato.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            pato.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case prefix+ 'slow':
            if (!isQuotedVideo) return fakegroup('Responde video UnU📸!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await pato.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            pato.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case prefix+ 'reverse':
            if (!isQuotedVideo) return fakegroup('Reponde video UnU')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await pato.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            pato.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case prefix+ 'tourl':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await pato.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('Responde video o imagen nwn')
            }
            break
//Upload Story WeA
    case prefix+ 'upswteks':
            if (!q) return fakestatus('El texto? ._.')
            pato.sendMessage('status@broadcast', `${q}`, extendedText)
            fakegroup(`Sukses Up story wea teks ${q}`)
            break
    case prefix+ 'upswimage':
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await pato.downloadMediaMessage(swsw)
            pato.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Sukses Upload Story Image dengan Caption: ${q}`
            pato.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('Responder imagen!')
            }
            break
    case prefix+ 'upswvideo':
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await pato.downloadMediaMessage(swsw)
            pato.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Sukses Upload Story Video dengan Caption: ${q}`
            pato.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('reponde video UnU!')
            }
            break
			case prefix+ 'fitnah':
            if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|Hola|Hola juga`)
            var gh = args.join(' ')
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target = gh.split("|")[1];
            var bot = gh.split("|")[2];
            pato.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            break
//MOBIL LEJEN
case prefix+ 'herolist':
await herolist().then((ress) => {
let listt = `*List hero untuk feature ${prefix}herodetail*\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
faketokoforwaded(listt)
})
break
      case prefix+ 'herodetail':
        res = await herodetails(body.slice(12))
        her = `*Hero details ${body.slice(12)}*

*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 

*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}
`
faketokoforwaded(her)
break
//Downloader
	case prefix+ 'play':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break  
        case prefix+ 'video':
            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
            aramas = await yts(srch);
            aramat = aramas.all 
            var mulaikah = aramat[0].url                            
                  try {
                    ytv(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break
	case prefix+ 'ytmp3':
			if (args.length === 0) return reply(`Enviar pedido *${prefix}ytmp3 [linkYt]*`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
			    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Datos obtenidos con éxito!*\n\n*Titulo* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Para duraciones superiores al límite se presentan en el enlace_`)
				const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Ten paciencia, estoy enviando el archivo T~T_`
				sendMediaURL(from, thumb, captions)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})
				})
				} catch (err) {
				reply(mess.error.api)
				}
				break
 		case prefix+ 'ytmp4':
			if (args.length === 0) return reply(`Enviar *${prefix}ytmp4 [linkYt]*`)
			let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks2) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				ytv(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
				if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
				const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Ten paciencia, estoy enviando el archivo T~T_`
				sendMediaURL(from, thumb, captionsYtmp4)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})		
				})
				} catch (err) {
			    reply(mess.error.api)
				}
				break
	case prefix+ 'ytsearch':
			if (args.length < 1) return reply('Que buscare? O.O')
			var srch = args.join('');
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await pato.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 *YOUTUBE SEARCH* 」'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += '❏ Title: ' + video.title + '\n'
            ytresult += '❏ Link: ' + video.url + '\n'
            ytresult += '❏ Duracion: ' + video.timestamp + '\n'
            ytresult += '❏ Subida: ' + video.ago + '\n________________________\n\n'
    		});
    		ytresult += '◩ *SATANCITO ᵈᵃʳʸ⛥*'
    		await fakethumb(tbuff,ytresult)
			break
    case 'ig':
        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
        if (!q) return fakegroup('Link?')
        reply(mess.wait)
	    igdl(args[0])
	    .then(async(result) => {
            for (let ink of result.url_list)	{
            if (ink.includes('.mp4')){
            const igvdl = await getBuffer(ink)	
	    pato.sendMessage(from,igvdl,video,{mimetype:'video/mp4',quoted:mek,caption:'Etto.UvU'})
            } else if (ink.includes('.jpg')){
            const igpdl = await getBuffer(ink)
            pato.sendMessage(from,igpdl,image,{mimetype:'image/jpeg',quoted:mek,caption:'Etto UvU'})
	    }
            }
	    })
	    break
    case prefix+ 'igstalk':
            if (!q) return fakegroup('Usernamenya?')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.following}\n*Following* : ${Y.followers}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            })      
            break    
    case prefix+ 'twitter':
            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
            if (!q) return fakegroup('Link?')
            ten = args[0]
            var res = await twitterGetUrl(`${ten}`)
            .then(g => {
            ren = `${g.download[2].url}`
            sendMediaURL(from,ren,'DONE')
            })
            break
 	case prefix+ 'tiktok':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Link?')
 		reply(mess.wait)
		tik.ssstik(`${args[0]}`)
    		.then(result => {
    		console.log(result)
    		const { videonowm, videonowm2, text } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${videonowm2}`)
    		.then(async (a) => {
    		me = `*Title* : ${text}\n*Link* : ${a.data}`
		pato.sendMessage(from,{url:`${videonowm}`},video,{mimetype:'video/mp4',quoted:mek,caption:me})
		})
		})
     		.catch(e => console.log(e))
     		break
    case prefix+ 'tiktokaudio':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Link?')
 		reply(mess.wait)
 		tik.ssstik(`${args[0]}`)
    		.then(result => {
    		const { music,text } = result
		pato.sendMessage(from,{url:`${music}`},audio,{mimetype:'audio/mp4',filename : `${text}`,quoted:mek})
		})
     		.catch(e => console.log(e))
     		break
    case prefix+ 'fb':
            if (!q) return reply('Link?')
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.Iv)
            reply(mess.wait)
            te = args.join(' ')
            fakestatus(mess.wait)
            Fb.getInfo(`${te}`)
            .then(G => {
            ten = `${G.download.sd}`
            tek = `${G.title}`
            sendMediaURL(from,ten,`*Title* : ${tek}\n\n*Link* : ${ten}`)
           .catch((error) => {
            reply('lo siento hermano:('); 
            })
})
            break 
//Learn
case prefix+ 'brainly':
			if (args.length < 1) return reply('Que clase de pregunta es esa')
          	brien = args.join(' ')
			brainly(`${brien}`).then(res => {
			teks = '❉───────────────────────❉\n'
			for (let Y of res.data) {
			teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pregunta:* ${Y.pertanyaan}\n\n*➸ Respuesta:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
			}
			pato.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
            })              
			break
case prefix+ 'google':
      if(!q) return reply('Yang mau di cari afa?')
			.then(res => res.json())
			afanya = args.join(' ')
			gogel = await axios.get(`https://shot.screenshotapi.net/screenshot?token=D2TDY3F-G5YMM94-K9JEQT8-FYBDQBB&url=https://www.google.com/search?q=${afanya}&safe=strict&sxsrf=ALeKk03WtBNqunvK303Qm3aEToejzpQvag%3A1621384426733&source=hp&ei=6lykYJbUKtPmz7sP-MugmAU&oq=p&gs_lcp=ChFtb2JpbGUtZ3dzLXdpei1ocBADMgQIIxAnMgQIIxAnMgQIIxAnMggIABCxAxCDATIFCAAQsQMyBQguELEDMggIABCxAxCDATIICAAQsQMQgwE6BwgjEOoCECdQlg9Ylg9g9hJoAXAAeACAAVmIAVmSAQExmAEAoAEBsAEP&sclient=mobile-gws-wiz-hp&full_page=true&fresh=true&output=json&file_type=png&wait_for_event=load`)
			bupnyah = await getBuffer(gogel.data.screenshot)
			pato.sendMessage(from, bupnyah, image, {quoted: mek, sendEphemeral: true})
			.catch(err => {
				return('Mengulang lord ada yg mengerror...')
			})
			break
	//Group Feature
case prefix+ 'add':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply('A quien quieres agregar oni chan O~O?')
if (args[0].startsWith('08')) return reply('Utilice el código de país')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
pato.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('No se pudo agregar el objetivo, tal vez porque en privado')
}
break
case prefix+ 'kick':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag yg ingin angda tusbol!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = '*Adios putito >:] :* '
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
pato.groupRemove(from, mentioned)
					} else {
mentions(`byee.. @${mentioned[0].split('@')[0]}`, mentioned, true)
pato.groupRemove(from, mentioned)
}
break
case prefix+ 'promote':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Promovido Mi niñ@ lind@ UwU\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(from, mentioned, true)
pato.groupRemove(from, mentioned)
} else {
mentions(`Ok @${mentioned[0].split('@')[0]} kamu jadi admin!`, mentioned, true)
pato.groupMakeAdmin(from, mentioned)
}
break
case prefix+ 'demote':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Degradar con éxito UnU\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
pato.groupRemove(from, mentioned)
} else {
mentions(`Oke @${mentioned[0].split('@')[0]} kamu gak admin lagi yaa!`, mentioned, true)
pato.groupDemoteAdmin(from, mentioned)
}
break//DONE
    case prefix+ 'fitnahpc':
            if(!q) return reply(`${prefix}fitnahpc teks target|teks lu`)
            jids = `${targetpc}@s.whatsapp.net` // nomer target
            var split = args.join(' ').replace(/@|\d/gi, '').split('|')
            var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
            const responye = await pato.sendMessage(jids, `${split[1]}`, MessageType.text, options)
            await pato.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
            break
    case prefix+ 'kontak':
            pe = args.join(' ') 
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            pato.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
            break
 	case prefix+ 'hidetag':
			if (!mek.key.fromMe) return fakestatus('SATANCITO ᵈᵃʳʸ⛥')
			if (!isGroup) return reply(mess.only.group)
			var value = args.join(' ')
			var group = await pato.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: mek
			}
			pato.sendMessage(from, optionshidetag, text)
			break
    case prefix+ 'sticktag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await pato.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await pato.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            pato.sendMessage(from, ini_buffer, MessageType.sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker yang sudah dikirim*`)
            }
            break
		    case prefix+ 'giftag':
		      //by Dehanjing
                if (!isQuotedVideo) return reply(`Reply Gif nya dengan caption ${prefix + command}`)
                quoted = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                download = await pato.downloadMediaMessage(quoted)
                await fs.writeFileSync(`giftag.gif`, download)
                var group = await pato.groupMetadata(from)
                var member = group['participants']
                var mem = []
                member.map(async adm => {
                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                thumb = fs.readFileSync(`giftag.gif`)
                pato.sendMessage(from, thumb, video, { contextInfo: {mentionedJid: mem }, quoted: mek, mimetype: 'video/gif', thumbnail: thumb })
			    await fs.unlinkSync(`giftag.gif`)
			    break
			case prefix+ 'doctag':
			  //by Dehanjing
		        if (!isQuotedDocument) return amek.reply(from, `Reply Document dengan caption *${prefix + command}*`, mek)
                quoted = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                download = await pato.downloadMediaMessage(quoted)
                await fs.writeFileSync(`doc.txt`, download)
                var group = await pato.groupMetadata(from)
                var member = group['participants']
                var mem = []
                member.map(async adm => {
                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                pato.sendMessage(from, fs.readFileSync(`doc.txt`), document, { contextInfo: {mentionedJid: mem }, quoted: mek, mimetype: 'text/plain' })
			    await fs.unlinkSync(`doc.txt`)
			    break
    case prefix+ 'kontag':
            if (!mek.key.fromMe) return reply('SATANCITO ᵈᵃʳʸ⛥')
            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            pato.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
    case prefix+ 'totag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await pato.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await pato.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            pato.sendMessage(from, ini_buffer, MessageType.sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await pato.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await pato.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            pato.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await pato.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await pato.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            pato.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await pato.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await pato.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            pato.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
//OTHER 
    case prefix+ 'join':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return fakestatus('Ingrese el enlace del grupo')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakegroup ('asegúrese de que el enlace sea correcto T-T!')
            var response = await pato.acceptInvite(codeInvite)
            fakestatus('Lito')
            } catch {
            fakegroup('LINK ERROR!')
            }
            break
    case prefix+ 'runtime':
    case prefix+ 'test':
            run = process.uptime() 
            teks = `${kyun(run)}`
            fakegroup(teks)
            break  
	case prefix+ 'speed':
	case prefix+ 'ping':
			const timestamp = speed();
			const latensi = speed() - timestamp
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
			fakegroup(pingnya)
			})
			break  

//Maker

case prefix+ 'bc':
					if (!isMe) return reply('No eres mi dueño UnU...')
					if (args.length < 1) return reply('.......')
					const more = String.fromCharCode(8206)
                    const readmore = more.repeat(4001)
					anu = await pato.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await pato.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							pato.sendMessage(_.jid, bc, image, {caption: `${body.slice(4)}\n> Izin Broadcast`, sendEphemeral: true})
						}
						reply('Lito')
					} else {
						for (let _ of anu) {
							sendMess(_.jid,`${body.slice(4)}` + readmore + `\n>Broadcast`)
						}
						reply('Lito UwU')
					}
					break
					case prefix+ 'level':
                if (!isGroup) return reply(mess.only
.group)
                const Level = getLevelingLevel(sender)
                const Xp = getLevelingXp(sender)
                if (Level === undefined && Xp === undefined) return reply('Etto O^O?')
                const requiredXp = 5000 * (Math.pow(2, Level) - 1)
                resul = `┌──⫶ *Nivel* ⫶──\n├ *Nombre* : ${pushname}\n├ Número : wa.me/${sender.split("@")[0]}\n├ XP :  ${Xp}/${requiredXp}\n└ Nivel : ${Level}`
                faketokoforwaded(resul, text, numbernye, per)
				break 
				case prefix+ 'narutod':
				oi = body.slice(8)
				oii = await getBuffer(`https://patoapi.herokuapp.com/api/photooxy/naruto?text=${oi}`)
				pato.sendMessage(from, oii, image, {quoted: mek, caption: 'Ok brother'})
				break
				
//END BANG RAKIT SENDIRI YAA DAN JGN LUPA KASIH NAMA SAYA YG SUDAH MENGBANGUN INI SC :(

default:

if (budy.startsWith('$')){
                        if (!isMe) return 
                            var konsol = budy.slice(2)
                        exec(konsol, (err, stdout) => {
                            if(err) return reply(`${err}`)
                                if (stdout) {
                                    reply(`${stdout}`)
                                    console.log('\x1b[1;37m>', '[', '\x1b[1;36mEVALL\x1b[1;37m', ']', time, color("$", "aqua"), 'from', color(senderme.split('@')[0]), 'args :', color(args.length))
                                }
                            })
                    } 
                    if (budy.startsWith('>')){
                        if (!isMe) return
                            var konsol = budy.slice(2)
                            function _return(sul) {
                            var sat = JSON.stringify(sul, null, 2)
                            var bang = util.format(sat)
                            return reply(bang)
                        }
                        try {
                            reply(util.format(eval(`;(async () => { ${konsol} })()`)))
                            console.log('\x1b[1;37m>', '[', '\x1b[1;36mEVALL\x1b[1;37m', ']', time, color(">", "aqua"), 'from', color(senderme.split('@')[0]), 'args :', color(args.length))
                        } catch (e) {
                              err = String(e)
                                reply(err)
                            }
                        } else {
                            if (budy != undefined) {
                                //console.log('>', '[',color('INGFO','red'),']',`Message : ${budy} From`, color(senderme.split('@')[0]))
                            } 
                        }
                        if (!budy.startsWith('$')) return
                            if (!budy.startsWith('>')) return
                        }

                
if (isGroup && budy != undefined) {
	} else {
	console.log(color('> [ JAPRI ]', 'red'), 'WEA', color(sender.split('@')[0]))
	}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Error : %s', color(e, 'red'))
	console.log(e)
        }
	}
})
}
starts()
