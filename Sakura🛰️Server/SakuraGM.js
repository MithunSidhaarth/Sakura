`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|`;
`|🍹|`;
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const { SakuraTenorMaker } = require(`./SakuraTenorMaker`);
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
const ℓιєηт = require(`./oShit`);
const ffmpeg = require(`fluent-ffmpeg`);
const cleanRF = require(`./cleanRF`);
require(`python-format-js`);
const ꜰᴜᴄᴋ = require(`./oShit`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const Downloader = require(`nodejs-file-downloader`);
const anime = require(`anime-actions`);
const fs = require(`fs`);
const speed = require(`performance-now`);
let Timestamp = speed();
const Pong = speed() - Timestamp;
const Ping = Pong.toFixed(4);
const date = require(`date-and-time`);
const now = new Date();
date.format(now, `ddd, MMM DD YYYY`);
const pattern = date.compile(`ddd, MMM DD YYYY`);
const Clock = date.format(now, pattern);
`⬡🍹⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
exports.SakuraGM = async (ӄʀǟӄɨռʐ, chat, ֆǟӄʊʀǟ) => {
  var SakuraGMid = chat.key.id;
  var ꜱᴇɴᴅᴇʀɪᴅ = ֆǟӄʊʀǟ.sender;
  var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
  const defaultnm = ֆǟӄʊʀǟ.commandName;
  const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
  if (ֆǟӄʊʀǟ.isReply) {
    var ꜱᴇɴᴅᴇʀɪᴅ = ֆǟӄʊʀǟ.sender;
    var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
    var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
    var personreceived = Receiver.substring(0, Receiver.length - 15);
    var SakuraGMid = chat.message.extendedTextMessage.contextInfo.stanzaId;
  }
  const link = SakuraTenorMaker(FinalName.toLowerCase());
  `⬡🍹⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
  const jsoncool = JSON.parse(fs.readFileSync(`./Sakura🛰️Server/Coolist.json`));
  await jsoncool.push(ֆǟӄʊʀǟ.sender);
  fs.writeFileSync(`./Sakura🛰️Server/Coolist.json`, JSON.stringify(jsoncool));
  console.log("ID Added " + ֆǟӄʊʀǟ.sender);
  setTimeout(async (error) => {
    if (error) console.log(error);
    await jsoncool.splice(ֆǟӄʊʀǟ.sender);
    fs.writeFileSync(`./Sakura🛰️Server/Coolist.json`, JSON.stringify(jsoncool));
    console.log("ID Removed " + ֆǟӄʊʀǟ.sender);
  }, 10000);
  `⬡🍹⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
  if (ֆǟӄʊʀǟ.isReply) {
    const downloader = await new Downloader({
      url: link,
      directory: `${__dirname}`,
      fileName: `${FinalName}_${SakuraGMid}.gif`,
      cloneFiles: false,
    });
    try {
      await downloader.download();
      await ffmpeg(`${__dirname}/${FinalName}_${SakuraGMid}.gif`)
        .outputOptions([
          `-pix_fmt yuv420p`,
          `-c:v libx264`,
          `-movflags +faststart`,
          `-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'`,
        ])
        .save(`${__dirname}/${FinalName}_${SakuraGMid}.mp4`)
        .on(`end`, async () => {
          console.log(`Finished`);
          await ӄʀǟӄɨռʐ
            .sendMessage(
              ֆǟӄʊʀǟ.chatId,
              fs.readFileSync(`${__dirname}/${FinalName}_${SakuraGMid}.mp4`),
              MessageType.video,
              {
                contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ, Receiver] },
                quoted: chat,
                mimetype: `video/gif`,
                caption: `🍸(𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭\n${Clock} 

────◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
🍪 𝐅𝐫𝐨𝐦: ✋🏽‍𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${ꜱᴇɴᴅᴇʀeceived}
🍛 𝐓𝐨: @${personreceived}`,
              }
            )
            .then(
              cleanRF.cleanRF(
                `${__dirname}/${FinalName}_${SakuraGMid}.gif`,
                `${__dirname}/${FinalName}_${SakuraGMid}.mp4`
              )
            );
        })
        .on(`Error`, async (Error) => {
          console.log(Error);
        });
    } catch (Error) {
      console.log(Error);
    }
  }

  if (!ֆǟӄʊʀǟ.isReply) {
    const downloader = await new Downloader({
      url: link,
      directory: `${__dirname}`,
      fileName: `${FinalName}_${SakuraGMid}.gif`,
      cloneFiles: false,
    });
    try {
      await downloader.download();
      ffmpeg(`${__dirname}/${FinalName}_${SakuraGMid}.gif`)
        .outputOptions([
          `-pix_fmt yuv420p`,
          `-c:v libx264`,
          `-movflags +faststart`,
          `-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'`,
        ])
        .save(`${__dirname}/${FinalName}_${SakuraGMid}.mp4`)
        .on(`end`, async () => {
          console.log(`Finished`);
          await ӄʀǟӄɨռʐ
            .sendMessage(
              ֆǟӄʊʀǟ.chatId,
              fs.readFileSync(`${__dirname}/${FinalName}_${SakuraGMid}.mp4`),
              MessageType.video,
              {
                contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
                quoted: chat,
                mimetype: `video/gif`,
                caption: `🍸(𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭\n${Clock} 

────◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
🍯𝐓𝐡𝐞𝐦𝐬𝐞𝐥𝐯𝐞: ✋🏽‍𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${ꜱᴇɴᴅᴇʀeceived}`,
              }
            )
            .then(
              cleanRF.cleanRF(
                `${__dirname}/${FinalName}_${SakuraGMid}.gif`,
                `${__dirname}/${FinalName}_${SakuraGMid}.mp4`
              )
            )
            .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
        })
        .on(`error`, async (Error) => {
          console.log(Error);
        });
    } catch (Error) {
      console.log(Error);
    }
  }
};
`|🍹|`;
`|🍹|`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
