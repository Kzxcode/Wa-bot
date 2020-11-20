const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/


/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textMenu = (pushname) => {
    return `
Hi, ${pushname}! 👋️

Selamat Datang di BOT KZXCODE
Semoga anda terhibur

Berikut ini Menu yang tersedia pada bot ini 🤖

Creator : KZXCODE

• ───── 📌 Sticker ───── •
➛ *${prefix}sticker*
➛ *${prefix}stickergif*
➛ *${prefix}stickergiphy*
➛ *${prefix}meme*
➛ *${prefix}quotemaker*
➛ *${prefix}nulis*

• ───── ⎙ Download  ───── •
➛ *${prefix}instagram*
➛ *${prefix}ytmp3*
➛ *${prefix}ytmp4*

• ───── 🛠 Tools  ───── •
➛ *${prefix}images*
➛ *${prefix}sreddit*
➛ *${prefix}resep*
➛ *${prefix}stalkig*
➛ *${prefix}wiki*
➛ *${prefix}cuaca*
➛ *${prefix}chord*
➛ *${prefix}lirik*
➛ *${prefix}ss*
➛ *${prefix}play*
➛ *${prefix}whatanime*

• ──── 🛡 Other Tools ──── •
➛ *${prefix}tts*
➛ *${prefix}translate*
➛ *${prefix}resi*
➛ *${prefix}covidindo*
➛ *${prefix}ceklokasi*
➛ *${prefix}shortlink*
➛ *${prefix}bapakfont*

• ──── 💞 Primbon ──── •
➛ *${prefix}artinama*
➛ *${prefix}cekjodoh*

• ─── 📝 Random Text ─── •
➛ *${prefix}fakta*
➛ *${prefix}pantun*
➛ *${prefix}katabijak*
➛ *${prefix}quote*

• ─── 🖼 Random Images ─── •
➛ *${prefix}anime*
➛ *${prefix}kpop*
➛ *${prefix}memes*

• ─── 🤖 Tentang Bot ─── •
➛ *${prefix}botstat*
➛ *${prefix}ownerbot*
➛ *${prefix}join*

😎 Fun Menu (Group):
➛ *${prefix}simisimi*
➛ *${prefix}katakasar*
	┷➛ *${prefix}klasmen*

•─✾─✾─✾─✾─✾─✾─✾─✾─✾─✾─✾─•

👤 Owner Bot
➛ *${prefix}ban* - banned
➛ *${prefix}bc* - promosi
➛ *${prefix}leaveall* - keluar semua grup
➛ *${prefix}clearall* - hapus semua chat

✆ My WhatsApp :
➥ https://wa.me/6281260032271
`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textAdmin = () => {
    return `
⚠ [ *Admin Group Only* ] ⚠ 
Berikut adalah fitur admin grup yang ada pada bot ini!

➛ *${prefix}add*
➛ *${prefix}kick* @tag
➛ *${prefix}promote* @tag
➛ *${prefix}demote* @tag
➛ *${prefix}tagall*
➛ *${prefix}del*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

⚠ [ *Owner Group Only* ] ⚠
Berikut adalah fitur owner grup yang ada pada bot ini!
➛ *${prefix}kickall*
*Owner Group adalah pembuat grup.*
`
}

