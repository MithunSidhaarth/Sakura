`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|`;
`|🍹|`;
const Sakura_Buttons = require(`../../Sakura🛰️Server/Sakura_Buttons`);
const Sakura_Static = require(`../../Sakura🛰️Server/Sakura_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const PostDataBase = require(`../../Sakura🛰️Server/postDb`);
const _𝔏𝔞𝔟_ = require(`../../Sakura🛰️Server/_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`../../Sakura🛰️Server/oShit`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
`|⬡===========================================|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |===========================================⬡|`;
module.exports = {
  name: newScpt,
  ֆǟӄʊʀǟӄǟɨʐօ: `*${ᴋᴇɪ}setwelcome* _message_`,
  async handle(ӄʀǟӄɨռʐ, chat, ֆǟӄʊʀǟ, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
    try {
      var ꜱᴇɴᴅᴇʀɪᴅ = ֆǟӄʊʀǟ.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const defaultnm = ֆǟӄʊʀǟ.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      `|⬡===========================================|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |===========================================⬡|`;
      const hold = require("../../Sakura🛰️Server/Hold");
      hold.Hold(ֆǟӄʊʀǟ);
      `|⬡===========================================|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |===========================================⬡|`;
      if (
        ֆǟӄʊʀǟ.isGroup &&
        !ֆǟӄʊʀǟ.fromMe &&
        !ֆǟӄʊʀǟ.isSenderDev &&
        !ֆǟӄʊʀǟ.isSenderGroupAdmin
      ) {
        return Sakura_Buttons.MIB(
          ӄʀǟӄɨռʐ,
          chat,
          ֆǟӄʊʀǟ,
          `*❌ Admins Only | You Are Not Allowed! ❌*`,
          _𝔏𝔞𝔟_.ɴᴏᴛᴀᴅᴍɪɴ
        );
      }
      if (ֆǟӄʊʀǟ.isGroup && !ֆǟӄʊʀǟ.isBotGroupAdmin && !ֆǟӄʊʀǟ.isSenderDev) {
        return Sakura_Buttons.MTB(
          ӄʀǟӄɨռʐ,
          chat,
          ֆǟӄʊʀǟ,
          `✋🏽‍𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${ꜱᴇɴᴅᴇʀeceived}, 

❌ How Can I Use Admin Only Commands If i am not admin?
💡𝐅𝐢𝐱: Make Me Admin First`,
          _𝔏𝔞𝔟_.ɴᴏᴛᴍᴇᴀᴅᴍɪɴ
        );
      }
      if (!ֆǟӄʊʀǟ.isGroup) {
        return Sakura_Buttons.MTB(
          ӄʀǟӄɨռʐ,
          chat,
          ֆǟӄʊʀǟ,
          `✋🏽‍𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${ꜱᴇɴᴅᴇʀeceived}, 

────★ 🔒𝐏𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧   
❗𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${ᴋᴇɪ}${defaultnm}, 
_This Command is Only For Groups!_!
`
        );
      }

      var ꜰᴇᴛᴄʜᴇᴅᴍꜱɢ = await PostDataBase.getMessage(
        ֆǟӄʊʀǟ.chatId,
        `setwelcome`
      );
      if (Needs.length == 0) {
        var enabled = await PostDataBase.checkSettings(
          ֆǟӄʊʀǟ.chatId,
          `setwelcome`
        );
        if (enabled === false || enabled === undefined) {
          return Sakura_Static.MGS(
            ӄʀǟӄɨռʐ,
            chat,
            ֆǟӄʊʀǟ,
            `✋🏽‍𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${ꜱᴇɴᴅᴇʀeceived},


╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║🍹 Sakura's Welcome Message needs to be added first!
║🍹 use *${ᴋᴇɪ}setwelcome* (message)
╚════════════╝`,
            `./Sakura☣️Reactor/ֆǟӄʊʀǟ™.mp4`
          );
        } else if (enabled === `OFF`) {
          return Sakura_Static.MGS(
            ӄʀǟӄɨռʐ,
            chat,
            ֆǟӄʊʀǟ,
            `✋🏽‍𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${ꜱᴇɴᴅᴇʀeceived},


╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║🍹 Sakura Currently not greeting new members!
╚════════════╝
`,
            `./Sakura☣️Reactor/ֆǟӄʊʀǟ™.mp4`
          );
        } else {
          return Sakura_Static.MGS(
            ӄʀǟӄɨռʐ,
            chat,
            ֆǟӄʊʀǟ,
            `✋🏽‍𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${ꜱᴇɴᴅᴇʀeceived},


╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║🍹 Sakura Currently greeting new members!
╚════════════╝
`,
            `./Sakura☣️Reactor/ֆǟӄʊʀǟ™.mp4`
          );
        }
      } else {
        text = ֆǟӄʊʀǟ.body.replace(
          ֆǟӄʊʀǟ.body[0] + ֆǟӄʊʀǟ.commandName + ` `,
          ``
        );
        if (ꜰᴇᴛᴄʜᴇᴅᴍꜱɢ === false || ꜰᴇᴛᴄʜᴇᴅᴍꜱɢ === undefined) {
          await PostDataBase.setWelcome(ֆǟӄʊʀǟ.chatId, text);
          return Sakura_Static.MGS(
            ӄʀǟӄɨռʐ,
            chat,
            ֆǟӄʊʀǟ,
            `✋🏽‍𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${ꜱᴇɴᴅᴇʀeceived},


╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║🍹 Sakura's Welcome Message has Been Updated!
╚════════════╝
`,
            `./Sakura☣️Reactor/ֆǟӄʊʀǟ™.mp4`
          );
        } else {
          await PostDataBase.deleteMessage(ֆǟӄʊʀǟ.chatId, `setwelcome`);
          await PostDataBase.setWelcome(ֆǟӄʊʀǟ.chatId, text);
          return Sakura_Static.MGS(
            ӄʀǟӄɨռʐ,
            chat,
            ֆǟӄʊʀǟ,
            `✋🏽‍𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${ꜱᴇɴᴅᴇʀeceived},


╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║🍹 Sakura's Welcome Message has Been Updated!
╚════════════╝
`,
            `./Sakura☣️Reactor/ֆǟӄʊʀǟ™.mp4`
          );
        }
      }
      `|⬡===========================================|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |===========================================⬡|`;
    } catch (Error) {
      ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
      return;
    }
  },
};
`|⬡===========================================|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |===========================================⬡|`;
`|🍹|`;
`|🍹|`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
