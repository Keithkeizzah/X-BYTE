(function (_0x516e0f, _0x1ef8aa) {
  const _0x91eda4 = _0x516e0f();
  while (true) {
    try {
      const _0x28b4a3 = parseInt(_0x65d3(0x3db, "VO^!")) / 0x1 + parseInt(_0x65d3(0x601, "8[x7")) / 0x2 * (parseInt(_0x65d3(0x5fc, "mq1C")) / 0x3) + parseInt(_0x65d3(0x8de, "kCiQ")) / 0x4 + -parseInt(_0x65d3(0x508, "o%1l")) / 0x5 * (-parseInt(_0x65d3(0x561, ')b[f')) / 0x6) + -parseInt(_0x65d3(0x80b, 'OiR9')) / 0x7 * (-parseInt(_0x65d3(0x89a, 'wwHy')) / 0x8) + parseInt(_0x65d3(0x6f7, "kCiQ")) / 0x9 + -parseInt(_0x65d3(0x6a2, "p6K[")) / 0xa;
      if (_0x28b4a3 === _0x1ef8aa) {
        break;
      } else {
        _0x91eda4.push(_0x91eda4.shift());
      }
    } catch (_0x1d29f1) {
      _0x91eda4.push(_0x91eda4.shift());
    }
  }
})(_0x2810, 0xded07);
const config = require("../settings");
const os = require('os');
const {
  cmd,
  commands
} = require('../lib/command');
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  Func,
  fetchJson
} = require("../lib/functions");
const si = require('systeminformation');
function _0x14fe69(_0x4145f4, _0x13b500, _0x3d1090, _0x14fc25, _0x2c2872) {
  return _0x65d3(_0x2c2872 - 0xa8, _0x3d1090);
}
if (config.COMMAND_TYPE === "button") {
  const _0x360318 = {
    'pattern': "pay",
    'react': '📖',
    'desc': "Get bot's command list.",
    'category': "other",
    'use': "pay",
    'filename': __filename
  };
  cmd(_0x360318, async (_0x1b744a, _0x310cab, _0x567777, {
    from: _0x47ac7,
    prefix: _0x4b8143,
    pushname: _0x5296a2,
    reply: _0x30df8e
  }) => {
    try {
      const _0x47afac = "\nKEITH want money from youuuuu".trim();
      const _0x38d1d0 = {
        'showAdAttribution': true
      };
      const _0x5e4147 = {
        'externalAdReply': _0x38d1d0
      };
      const _0x36afc4 = {
        'text': _0x47afac,
        'contextInfo': _0x5e4147
      };
      const _0x4e65de = {
        'extendedTextMessage': _0x36afc4
      };
      await _0x1b744a.relayMessage(_0x567777.chat, {
        'requestPaymentMessage': {
          'currencyCodeIso4217': "Rupee",
          'amount1000': 0x2710,
          'requestFrom': _0x567777.sender,
          'noteMessage': _0x4e65de
        }
      }, {});
    } catch (_0x23380e) {
      console.error(_0x23380e);
      await _0x30df8e("An error occurred while fetching repository information.");
    }
  });
  const _0x2272e9 = {
    'pattern': "menu2",
    'react': "2️⃣",
    'alias': ["panel", "buttons", "commands", "cmd"],
    'desc': "Get bot's buttoned version commands list.",
    'category': "main",
    'use': ".menu2",
    'filename': __filename
  };
  cmd(_0x2272e9, async (_0x42ca51, _0x12b2ff, _0x5cf6aa, {
    from: _0xe30f4e,
    prefix: _0x38ca7d,
    pushname: _0x49aa82,
    reply: _0xbb1db5
  }) => {
    try {
      if (os.hostname().length == 0xc) {
        hostname = 'replit';
      } else {
        if (os.hostname().length == 0x24) {
          hostname = "heroku";
        } else if (os.hostname().length == 0x8) {
          hostname = "koyeb";
        } else {
          hostname = os.hostname();
        }
      }
      const _0x4e6f2a = "```👋 Hello " + _0x49aa82 + "```" + "\n\n╭───═⟮ *𝐇𝐔𝐍𝐂𝐇𝐎-𝐌𝐄𝐍𝐔 𝐋𝐈𝐒𝐓* ⟯═───𝄠 \n╏☬│ *𝐕𝐄𝐑𝐒𝐈𝐎𝐍:* " + require('../package.json').version + "\n╏☬│ *𝐌𝐄𝐌𝐎𝐑𝐘:* " + (process.memoryUsage().heapUsed / 0x400 / 0x400).toFixed(0x2) + "MB / " + Math.round(require('os').totalmem / 0x400 / 0x400) + "MB\n╏☬│ *𝐑𝐔𝐍𝐓𝐈𝐌𝐄:* " + runtime(process.uptime()) + "\n╏☬│ *𝐏𝐋𝐀𝐓𝐅𝐎𝐑𝐌:* " + hostname + "\n╰━━━━━━━━━━━━━━━𝄠 ";
      const _0xb45604 = [];
      const _0x4c16f0 = new Map();
      for (let _0x6c13ee = 0x0; _0x6c13ee < commands.length; _0x6c13ee++) {
        const _0x3d62dd = commands[_0x6c13ee];
        if (!_0x3d62dd.dontAddCommandList && _0x3d62dd.pattern !== undefined) {
          const _0x250d9b = _0x3d62dd.category.toUpperCase();
          if (!_0x4c16f0.has(_0x250d9b)) {
            _0xb45604.push(_0x250d9b);
            _0x4c16f0.set(_0x250d9b, []);
          }
          _0x4c16f0.get(_0x250d9b).push(_0x3d62dd.pattern);
        }
      }
      const _0x46c8d5 = [];
      for (const _0x3be981 of _0xb45604) {
        const _0x55ec31 = {
          'header': '',
          'title': _0x3be981 + " MENU",
          'description': '',
          'id': _0x38ca7d + "category " + _0x3be981
        };
        _0x46c8d5.push(_0x55ec31);
      }
      const _0xeb0778 = {
        'display_text': config.BTN,
        'url': "https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47",
        'merchant_url': "https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47"
      };
      let _0x2b751c = [{
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify(_0xeb0778)
      }, {
        'name': 'single_select',
        'buttonParamsJson': JSON.stringify({
          'title': "tap here",
          'sections': [{
            'title': "Please tap here",
            'highlight_label': "𝐇𝐔𝐍𝐂𝐇𝐎-𝐌𝐃",
            'rows': _0x46c8d5
          }]
        })
      }];
      const _0x2083e1 = {
        'image': config.LOGO,
        'header': '',
        'footer': "𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐇𝐔𝐍𝐂𝐇𝐎",
        'body': _0x4e6f2a
      };
      return await _0x42ca51.sendButtonMessage(_0xe30f4e, _0x2b751c, _0x5cf6aa, _0x2083e1);
    } catch (_0x4efad9) {
      _0xbb1db5("*Error !!*");
      console.log(_0x4efad9);
    }
  });
  const _0x1fa9d7 = {
    'pattern': 'menu',
    'react': '✅',
    'alias': ["help"],
    'desc': "Get bot's command list.",
    'category': "main",
    'use': ".menu",
    'filename': __filename
  };
  cmd(_0x1fa9d7, async (_0x14b536, _0x3cf396, _0x2c0736, {
    from: _0xca4e1b,
    prefix: _0x16b252,
    l: _0x4b8e7d,
    quoted: _0x1887ef,
    body: _0x17a9b3,
    isCmd: _0x33ec33,
    command: _0x20c48e,
    args: _0x45296b,
    q: _0x1680c6,
    isGroup: _0xdc7c16,
    sender: _0x260c33,
    senderNumber: _0x10d4c1,
    botNumber2: _0x5d8f55,
    botNumber: _0x15fcfd,
    pushname: _0x26a6ab,
    isMe: _0x187d4f,
    isOwner: _0x2f5394,
    groupMetadata: _0x149db4,
    groupName: _0x20774a,
    participants: _0x1499b9,
    groupAdmins: _0x397833,
    isBotAdmins: _0x57d77f,
    isAdmins: _0x4388d3,
    reply: _0x543787
  }) => {
    try {
      let _0x3a5474 = '';
      for (let _0x121ed7 = 0x0; _0x121ed7 < commands.length; _0x121ed7++) {
        if (commands[_0x121ed7].category === "download") {
          if (!commands[_0x121ed7].dontAddCommandList) {
            _0x3a5474 += "*O:* " + commands[_0x121ed7].pattern + "\n";
          }
        }
      }
      ;
      let _0x4486e7 = '';
      for (let _0x245040 = 0x0; _0x245040 < commands.length; _0x245040++) {
        if (commands[_0x245040].category === 'search') {
          if (!commands[_0x245040].dontAddCommandList) {
            _0x4486e7 += "*O:* " + commands[_0x245040].pattern + "\n";
          }
        }
      }
      ;
      let _0x155e12 = '';
      for (let _0x1f21b7 = 0x0; _0x1f21b7 < commands.length; _0x1f21b7++) {
        if (commands[_0x1f21b7].category === 'convert') {
          if (!commands[_0x1f21b7].dontAddCommandList) {
            _0x155e12 += "*O:* " + commands[_0x1f21b7].pattern + "\n";
          }
        }
      }
      ;
      let _0x54ebd1 = '';
      for (let _0x3f7517 = 0x0; _0x3f7517 < commands.length; _0x3f7517++) {
        if (commands[_0x3f7517].category === "logo") {
          if (!commands[_0x3f7517].dontAddCommandList) {
            _0x54ebd1 += "*O:* " + commands[_0x3f7517].pattern + "\n";
          }
        }
      }
      ;
      let _0x260052 = '';
      for (let _0x45993e = 0x0; _0x45993e < commands.length; _0x45993e++) {
        if (commands[_0x45993e].category === "main") {
          if (!commands[_0x45993e].dontAddCommandList) {
            _0x260052 += "*O:* " + commands[_0x45993e].pattern + "\n";
          }
        }
      }
      ;
      let _0x29b27a = '';
      for (let _0x5b9d48 = 0x0; _0x5b9d48 < commands.length; _0x5b9d48++) {
        if (commands[_0x5b9d48].category === "group") {
          if (!commands[_0x5b9d48].dontAddCommandList) {
            _0x29b27a += "*O:* " + commands[_0x5b9d48].pattern + "\n";
          }
        }
      }
      ;
      let _0x1723f8 = '';
      for (let _0xea9670 = 0x0; _0xea9670 < commands.length; _0xea9670++) {
        if (commands[_0xea9670].category === "bug") {
          if (!commands[_0xea9670].dontAddCommandList) {
            _0x1723f8 += "*O:* " + commands[_0xea9670].pattern + "\n";
          }
        }
      }
      ;
      let _0x6c1953 = '';
      for (let _0x2d90a2 = 0x0; _0x2d90a2 < commands.length; _0x2d90a2++) {
        if (commands[_0x2d90a2].category === 'movie') {
          if (!commands[_0x2d90a2].dontAddCommandList) {
            _0x6c1953 += "*O:* " + commands[_0x2d90a2].pattern + "\n";
          }
        }
      }
      ;
      let _0x157773 = '';
      for (let _0xf7d4f4 = 0x0; _0xf7d4f4 < commands.length; _0xf7d4f4++) {
        if (commands[_0xf7d4f4].category === 'other') {
          if (!commands[_0xf7d4f4].dontAddCommandList) {
            _0x157773 += "*O:* " + commands[_0xf7d4f4].pattern + "\n";
          }
        }
      }
      ;
      let _0x2390e1 = "╭──────𝄠𝐇𝐔𝐍𝐂𝐇𝐎-𝐌𝐃𝄠────𝄠\n*╏☬│RUN TIME -* " + runtime(process.uptime()) + " \n*╏☬│RAM USAGE -* " + (process.memoryUsage().heapUsed / 0x400 / 0x400).toFixed(0x2) + "MB / " + Math.round(require('os').totalmem / 0x400 / 0x400) + "MB\n*╰══════════════𝄠*\n*┃𒊹┃𒊹┃𒊹┃𒊹┃𒊹┃𒊹┃𒊹┃𒊹┃:*\n *╭═════════════𝄠*\n *╏☬│DOWNLOAD COMMANDS*\n *╏☬│  𝄠───────𝄠*\n\n" + _0x3a5474 + "*\n*╭──────────────►*\n *│SEARCH COMMANDS*\n *╏☬│   𝄠───────𝄠*\n\n" + _0x4486e7 + "*\n\n *╭──────────────►*\n *╏☬│CONVERT COMMANDS*\n *╏☬│   𝄠───────𝄠*\n\n" + _0x155e12 + "*\n\n *╭──────────────►*\n *╏☬│LOGO COMMANDS*\n *╏☬│   𝄠───────𝄠*\n\n" + _0x54ebd1 + "*\n\n *╭──────────────►*\n *╏☬│MAIN COMMANDS*\n *╏☬│   𝄠───────𝄠*\n\n" + _0x260052 + "*\n\n *╭──────────────►*\n *╏☬│GROUP COMMANDS*\n *╏☬│   𝄠───────𝄠*\n\n" + _0x29b27a + "*\n\n *╭──────────────►*\n *╏☬│BUG COMMANDS*\n *╏☬│   𝄠───────𝄠*\n\n" + _0x1723f8 + "\n\n *╭──────────────►*\n *╏☬│OTHER COMMANDS*\n *╏☬│  𝄠───────𝄠*\n\n" + _0x157773 + "*\t\n\n𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐇𝐔𝐍𝐂𝐇𝐎";
      const _0x20dd23 = {
        'display_text': config.BTN,
        'url': config.BTNURL,
        'merchant_url': config.BTNURL
      };
      let _0xe20dd5 = [{
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify(_0x20dd23)
      }];
      const _0x5f35ec = {
        'image': config.LOGO,
        'header': '',
        'footer': config.FOOTER,
        'body': _0x2390e1
      };
      return await _0x14b536.sendButtonMessage(_0xca4e1b, _0xe20dd5, _0x2c0736, _0x5f35ec);
    } catch (_0x4ce02b) {
      _0x543787("*ERROR !!*");
      console.log(_0x4ce02b);
    }
  });
  const _0x759198 = {
    'pattern': "category",
    'dontAddCommandList': true,
    'filename': __filename
  };
  cmd(_0x759198, async (_0x426e99, _0x4c3a31, _0x3606ac, {
    from: _0x571459,
    q: _0x189265,
    reply: _0x48f2e1
  }) => {
    try {
      const _0x1edb19 = _0x189265.trim().toUpperCase();
      let _0x1d65ba = "*◈╾──────" + _0x1edb19 + "COMMANDS LIST──────╼◈*\n\n> Select any  command type and enjoy HUNCHO-MD\n\n";
      for (let _0x55a6aa = 0x0; _0x55a6aa < commands.length; _0x55a6aa++) {
        const _0x3a4ab0 = commands[_0x55a6aa];
        if (_0x3a4ab0.category.toUpperCase() === _0x1edb19) {
          _0x1d65ba += "╭────────►\n╏☬│ • *" + _0x3a4ab0.pattern + "* \n╰────────────────────►\n";
        }
      }
      _0x1d65ba += "\n*Total Commands List " + _0x1edb19 + "*: " + commands.filter(_0x4ffc32 => _0x4ffc32.category.toUpperCase() === _0x1edb19).length + "\n\n" + "*𝐇𝐔𝐍𝐂𝐇𝐎*\n*regards keithkeizzah*";
      const _0x35d69c = {
        'newsletterJid': '120363252060326102@newsletter',
        'serverMessageId': 0x7f
      };
      const _0x593e51 = {
        'title': "𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐇𝐔𝐍𝐂𝐇𝐎",
        'body': "ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ",
        'mediaType': 0x1,
        'sourceUrl': "https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47",
        'thumbnailUrl': config.LOGO,
        'renderLargerThumbnail': true,
        'showAdAttribution': false
      };
      const _0x5b4f1c = {
        'mentionedJid': [''],
        'groupMentions': [],
        'forwardingScore': 0x457,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': _0x35d69c,
        'externalAdReply': _0x593e51
      };
      const _0x191831 = {
        'text': _0x1d65ba,
        'contextInfo': _0x5b4f1c
      };
      const _0x4b0e93 = {
        'quoted': _0x4c3a31
      };
      await _0x426e99.sendMessage(_0x571459, _0x191831, _0x4b0e93);
    } catch (_0x1d447f) {
      _0x48f2e1("*Error !!*");
      console.log(_0x1d447f);
    }
  });
  const HamzaUptime = {
    'pattern': 'runtime',
    'react': '🐼',
    'alias': ["uptime", "runntime"],
    'desc': "check bot runtime/Uptime.",
    'category': "main",
    'use': ".alive",
    'filename': __filename
  };
  cmd(HamzaUptime, async (_0x421b24, _0x271e20, _0x2bbbfd, {
    from: _0x37c4c6,
    prefix: _0x5be4ab,
    l: _0x3104d4,
    quoted: _0x6030d0,
    body: _0x14fcda,
    isCmd: _0x4ee74d,
    command: _0x597010,
    args: _0x111dec,
    q: _0x13e6ec,
    isGroup: _0x2686ca,
    sender: _0x51b744,
    senderNumber: _0x344b89,
    botNumber2: _0xba4668,
    botNumber: _0x31a271,
    pushname: _0x45b1b2,
    isMe: _0x1b2c53,
    isOwner: _0x4d1bed,
    groupMetadata: _0x1f1e23,
    groupName: _0x1e8c79,
    participants: _0xce41b,
    groupAdmins: _0x436b36,
    isBotAdmins: _0x59f693,
    isAdmins: _0x1495c4,
    reply: _0x4f0b2a
  }) => {
    try {
      if (os.hostname().length == 0xc) {
        hostname = "replit";
      } else {
        if (os.hostname().length == 0x24) {
          hostname = "heroku";
        } else if (os.hostname().length == 0x8) {
          hostname = "koyeb";
        } else {
          hostname = os.hostname();
        }
      }
      const _0xb28ef5 = "*_HUNCHO, running for_* " + runtime(process.uptime());
      -NaN;
      const _0xe47473 = {
        'display_text': config.BTN,
        'url': "https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47",
        'merchant_url': "https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47"
      };
      let _0x41e966 = [{
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify(_0xe47473)
      }, {
        'name': "quick_reply",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Get Menu",
          'id': _0x5be4ab + "menu"
        })
      }];
      const _0x48e72b = {
        'image': config.LOGO,
        'header': '',
        'footer': config.FOOTER,
        'body': _0xb28ef5
      };
      return await _0x421b24.sendButtonMessage(_0x37c4c6, _0x41e966, _0x2bbbfd, _0x48e72b);
    } catch (_0x12acc1) {
      _0x4f0b2a("*Error !!*");
      console.log(_0x12acc1);
    }
  });
  const _0x258102 = {
    'pattern': 'alive',
    'react': '🍬',
    'desc': "Check bot online or no.",
    'category': 'main',
    'use': ".alive",
    'filename': __filename
  };
  cmd(_0x258102, async (_0x49b6fe, _0x387d31, _0x2fd8ae, {
    from: _0x44eefc,
    prefix: _0xbbdf5a,
    l: _0x36372b,
    quoted: _0x3fe297,
    body: _0x2e86a2,
    isCmd: _0x33b2ea,
    command: _0x38a30c,
    args: _0x3beb88,
    q: _0x2693ac,
    isGroup: _0x5177e9,
    sender: _0x1db176,
    senderNumber: _0xaf4cb,
    botNumber2: _0x27a658,
    botNumber: _0x253747,
    pushname: _0x12a04d,
    isMe: _0x162c31,
    isOwner: _0x435b8c,
    groupMetadata: _0x8e8f1f,
    groupName: _0x941204,
    participants: _0x2a1f71,
    groupAdmins: _0x2f78de,
    isBotAdmins: _0x1da1a8,
    isAdmins: _0x21d4fd,
    reply: _0x9748cf
  }) => {
    try {
      if (os.hostname().length == 0xc) {
        hostname = 'replit';
      } else {
        if (os.hostname().length == 0x24) {
          hostname = "heroku";
        } else if (os.hostname().length == 0x8) {
          hostname = "koyeb";
        } else {
          hostname = os.hostname();
        }
      }
      const _0x46e122 = "```👋 Hello " + _0x12a04d + " I'm alive now" + "```" + "\n\n*👾 Im HUNCHO whatsapp bot*\n    \n> *Version:* " + require("../package.json").version + "\n> *Memory:* " + (process.memoryUsage().heapUsed / 0x400 / 0x400).toFixed(0x2) + "MB / " + Math.round(require('os').totalmem / 0x400 / 0x400) + "MB\n> *Runtime:* " + runtime(process.uptime()) + "\n> *Platform:* " + hostname + "\n*Have A Nice Time*";
      const _0x455be7 = {
        'display_text': config.BTN,
        'url': "https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47",
        'merchant_url': "https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47"
      };
      let _0x37a8ab = [{
        'name': 'cta_url',
        'buttonParamsJson': JSON.stringify(_0x455be7)
      }, {
        'name': "quick_reply",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Get Menu",
          'id': _0xbbdf5a + "menu"
        })
      }];
      const _0x3b5f6b = {
        'image': config.LOGO,
        'header': '',
        'footer': config.FOOTER,
        'body': _0x46e122
      };
      return await _0x49b6fe.sendButtonMessage(_0x44eefc, _0x37a8ab, _0x2fd8ae, _0x3b5f6b);
    } catch (_0x31af74) {
      _0x9748cf("*Error !!*");
      console.log(_0x31af74);
    }
  });
  const _0x5344f3 = {
    'pattern': 'sc',
    'react': '🗃️',
    'alias': ["repo", 'script', 'status'],
    'desc': "Get bot's command list.",
    'category': "main",
    'use': ".sc",
    'filename': __filename
  };
  cmd(_0x5344f3, async (_0x4181b5, _0x73122, _0x213e73, {
    from: _0x2d893a,
    prefix: _0x13ab6b,
    l: _0x27c9fe,
    quoted: _0x16374d,
    body: _0x11571d,
    isCmd: _0x49cf73,
    command: _0x3a4634,
    args: _0x8563b7,
    q: _0x503599,
    isGroup: _0x2e0ebf,
    sender: _0x3e9c0b,
    senderNumber: _0x1f52c7,
    botNumber2: _0x2accbd,
    botNumber: _0x3cac84,
    pushname: _0x59c96c,
    isMe: _0x52c333,
    isOwner: _0x1dc108,
    groupMetadata: _0x3b0f2c,
    groupName: _0x41865a,
    participants: _0x1b3f00,
    groupAdmins: _0x5c28ef,
    isBotAdmins: _0x4be752,
    isAdmins: _0x1541cf,
    reply: _0x46c75d
  }) => {
    try {
      if (os.hostname().length == 0xc) {
        hostname = "replit";
      } else {
        if (os.hostname().length == 0x24) {
          hostname = 'heroku';
        } else if (os.hostname().length == 0x8) {
          hostname = 'koyeb';
        } else {
          hostname = os.hostname();
        }
      }
      const _0x36bfff = "```👋 Hello " + _0x59c96c + "```" + "\n\n*This is HUNCHO-MD..*\n  \n> *Version:* " + require('../package.json').version + "\n> *Memory:* " + (process.memoryUsage().heapUsed / 0x400 / 0x400).toFixed(0x2) + "MB / " + Math.round(require('os').totalmem / 0x400 / 0x400) + "MB\n> *Runtime:* " + runtime(process.uptime()) + "\n> *Platform:* " + hostname + "\nYou can get HUNCHO for free, follow keithkeizzah for more updates ";
      let _0x5ac8fb = [{
        'name': 'cta_url',
        'buttonParamsJson': JSON.stringify({
          'display_text': "YOUTUBE",
          'url': 'https://youtube.com/@keithkeizzah',
          'merchant_url': "https://youtube.com/@keithkeizzah"
        })
      }, {
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "X(twitter)",
          'url': "https://www.facebook.com/talkdrove",
          'merchant_url': "https://www.facebook.com/talkdrove"
        })
      }, {
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "WA NUMBER",
          'url': "https://wa.me/923072380380",
          'merchant_url': "https://wa.me/923072380380"
        })
      }, {
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "WA CHANNEL",
          'url': "https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47",
          'merchant_url': "https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47"
        })
      }, {
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "BOT REPO",
          'url': "https://github.com/keithkeizzah/HUNCHO-MD",
          'merchant_url': "https://github.com/keithkeizzah/HUNCHO-MD"
        })
      }, {
        'name': "quick_reply",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Go Menu",
          'id': _0x13ab6b + 'menu'
        })
      }];
      const _0xddf400 = {
        'image': config.LOGO,
        'header': '',
        'footer': config.FOOTER,
        'body': _0x36bfff
      };
      return await _0x4181b5.sendButtonMessage(_0x2d893a, _0x5ac8fb, _0x213e73, _0xddf400);
    } catch (_0x51913a) {
      _0x46c75d("*Error !!*");
      console.log(_0x51913a);
    }
  });
}
function _0x3737b7(_0x4e5916, _0x98c32a, _0x48970c, _0x59fe5b, _0x1e8e61) {
  return _0x65d3(_0x4e5916 - 0x138, _0x1e8e61);
}
const _0x4a4569 = {
  'pattern': "system",
  'react': "🖥️",
  'alias': ["s_info"],
  'desc': "To Check bot's System information",
  'category': 'main',
  'use': ".system",
  'filename': __filename
};
cmd(_0x4a4569, async (_0x487e1c, _0x5797b4, _0x180f3f, {
  from: _0x5d5ca9,
  l: _0x48db28,
  quoted: _0xa44714,
  body: _0xc44d7d,
  isCmd: _0x1b325d,
  command: _0x1e7de3,
  args: _0xe3c34e,
  q: _0x42f2bd,
  isGroup: _0x40db7a,
  sender: _0x1de404,
  senderNumber: _0x30cdbf,
  botNumber2: _0x2925e2,
  botNumber: _0x1234cb,
  pushname: _0x3f6943,
  isMe: _0x58fc83,
  isOwner: _0x20227c,
  groupMetadata: _0x141f1e,
  groupName: _0x50ca94,
  participants: _0x38df37,
  groupAdmins: _0x3fcb26,
  isBotAdmins: _0x1e1114,
  isAdmins: _0x4cacec,
  reply: _0x15dcd9
}) => {
  try {
    const _0x470987 = await si.cpu();
    const _0x9765b0 = await si.version();
    let _0x5f2a27 = await si.time();
    const _0x2e860b = os.hostname();
    let _0x15f9ef = await fetchJson("https://raw.githubusercontent.com/HyHamza/HyHamza/main/files/packageForXbyte.json");
    if (_0x2e860b.length > 0xf) {
      const _0xe56fc8 = "*HUNCHO SYSTEM INFORMATIONS*\n\n*_Bot's System informations_*\n\n1.  _Runtime -: " + runtime(process.uptime()) + "_\n2.  _Ram Usage -: " + (process.memoryUsage().heapUsed / 0x400 / 0x400).toFixed(0x2) + "MB / " + Math.round(require('os').totalmem / 0x400 / 0x400) + "MB_\n3.  _Bot Version -: " + _0x15f9ef.version + " Stable_\n\n*_Server System informations_*\n\n1.  _Platform : Heroku_\n2.  _Running OS : " + os.platform() + "_\n3.  _CPU Manufacture  -: " + _0x470987.manufacturer + "_\n4.  _CPU Brand -: " + _0x470987.brand + "_\n5.  _CPU Speed -: " + _0x470987.speed + "_\n\n*_System Data Collector Engine_*\n\n1. _Engine Version -: " + _0x9765b0 + "_\n\n*_Running Server's information_*\n\n1. _Server Time Zone -: " + _0x5f2a27.timezone + "_\n2. _Time Zone Name -: " + _0x5f2a27.timezoneName + '_';
      const _0x1e5dbd = {
        'text': _0xe56fc8
      };
      const _0x4fe148 = {
        'quoted': _0x5797b4
      };
      return await _0x487e1c.sendMessage(_0x5d5ca9, _0x1e5dbd, _0x4fe148);
    }
    const _0x191445 = "*HUNCHO-MD SYSTEM INFORMATIONS*\n\n*_Bot's System informations_*\n\n1.  _Runtime -: " + runtime(process.uptime()) + "_\n2.  _Ram Usage -: " + (process.memoryUsage().heapUsed / 0x400 / 0x400).toFixed(0x2) + "MB / " + Math.round(require('os').totalmem / 0x400 / 0x400) + "MB_\n3.  _Bot Version -: " + _0x15f9ef.version + " Stable_\n\n*_Server System informations_*\n\n1.  _Platform : " + _0x2e860b + "_\n2.  _Running OS : " + os.platform() + "_\n3.  _CPU Manufacture  -: " + _0x470987.manufacturer + "_\n4.  _CPU Brand -: " + _0x470987.brand + "_\n5.  _CPU Speed -: " + _0x470987.speed + "_\n\n*_System Data Collector Engine_*\n\n1. _Engine Version -: " + _0x9765b0 + "_\n\n*_Running Server's information_*\n\n1. _Server Time Zone -: " + _0x5f2a27.timezone + "_\n2. _Time Zone Name -: " + _0x5f2a27.timezoneName + '_';
    const _0x146c9a = {
      'text': _0x191445
    };
    const _0x598784 = {
      'quoted': _0x5797b4
    };
    await _0x487e1c.sendMessage(_0x5d5ca9, _0x146c9a, _0x598784);
  } catch (_0x1b8b5d) {
    _0x15dcd9("*Error !!*");
    _0x48db28(_0x1b8b5d);
  }
});
function _0x2810() {
  const _0x109cf6 = ["4PsB4PsA4PEUW51B", "ncZdSCkoWO4", "W6zqofLH", '4BE54BECF8MYYyu', "fIfJfNq", 'WPNdLG7dJmof', 'WPhcOfbBW5i', 'nCovmhed', "4PsY4PArW4lILQvn", "W6m8W7jjCa", "fgJdHSkg", 'AUc1QEc3H+c2Ioc2TG', "WPCGWQ3cMwS", "4PEliSkYW73dTa", "8lkRJVc/IA7WU6QLWQvG", "WOddGvC", "WPr0WQqSbW", "WQ5sWRVdKWG", "h0W5W6DZ", 'ggpdKCoFWO4', "W4uwWRq", '4PsK4PwW4PAL4PwG4PEE', "W4e1W4jUwG", "W7fPqSkplW", "e0W8W5pdOa", "W47cGSkAWPNdNa", "WQCUpKJdOq", 'd8kbja', "W6vFW73dTI4", "4PsQ4Pwd4PwY4PAk4PwT", 'WQ3cNWdcTmkv', "hM3dR0VcVq", "W4fRe1fT", "cviLpNG", "4PAs4PEb4PAK4Pss4PEi", "WPdILPFIL7FILRNILRu", "fCkDF8kSW4q", 'WQFdHhBdGmkt', 'bduhWO/dNa', "W4/cUq7cQmkk", "oWRcMmoUlG", "WOrrWR5kW7e", '8jUPKVggURFWQyUY8yoOLVgmQBu', "Bg3cMbfh", '8jwkT/cWI4tXGAQFlSo4', "tr7dG8oayW", 'vKtdQSk+WOW', "W6vfymkbfW", "et4WWOBdIW", "tqtdISolCa", 'W6NdHMZcPrW', "uvzwW4FcSW", 'WP3dNfVdJmoo', "uqpdGa", "vUkvKUkvMEkwNEkwGq", 'rCkhW7ZdUCku', "WR8Pf1JdPa", "FupcTSoJW4u", "o0/dHSk3Fa", 'oKBcQcPG', "WOrvWR1bW48", "vNFcMYe/", 'WPGevWSM', 'wSoIF8ooWOu', "ae/cVIP0", "efFdIxZcOG", "4PAtwhbslq", "oXddJSo9Cq", 'h8oLF8ocW7W', "hxhdLg7cOW", 'eguKW5hcPa', "dmoTDa", "CxqMW4hcGq", "rCkyxZja", "FwpcL8ocW6e", "deJdTmo7cG", "8jw3PU+5Vq", "qSklW6xdVCkf", 'WOSyk37dNW', 'W4nfW4VdUJm', 'W7v9W5tdSI8', "qYNdOSoQwa", "DHHIza", "egu1W7tcNW", "W4xcNNCr", "w30IW7H5", "hMlcGSkOWQO", 'DCkcW68eWR4', "cCknmCkGW6G", 'CmoExdr+', "WPSuWObCW7a", "W7TxkqS", "l2hcIrzD", "WQmkFqTZ", "D0dcGCk6jW", "W6tcPYBcHmka", "4PsH4PAD4PA14PsL4Ps8", 'WQ7dJK0RWQ4', "WPRcQCkwW5tdKa", 'W5NcHSkdW5ZdKG', "WPiPomoDWPy", "uCkZW5CvWOe", "WR7cILGNWOa", "xXzwW5dcOG", 'tcZcUCobW7a', "aCkFndrj", "fwxcNZTM", "Dg7dICkeCq", "iCobESoNW78", "WRFcOrtcMCkN", "g8kqmJqB", 'WP/cTMfo', "qrO2nNu", "WReOmxVdHq", "etRdJSoxCq", "C1xdM8o5W4u", "wJXfvhy", "4PwX4Ps44PAF4Pwf4PAS", "c+kvLmkvW5ddMq", "W7FXHlAl77MnW5BdI/cCP6K", "WPVcJLiYWQC", "W40aW4P7ta", "W5VcK8o9", "W6VdQghdH8o9", "DMRcMdGI", 'F3xcGmkdea', "hMddO8kuWPy", "WORILlZILP3ILjRILl8", "WRiWfeZdUa", 'DWvLyKu', "W7Pmexfu", "vMCRW6/dRG", 'rh0/W5BcKa', "hMldKmkqWQK", "fSoSEZqi", "WPZcK0jQW5K", 'FxRcR0DU', '4PwO4PsN4PAd4PAv4PwM', "nbyMgLO", "uvaFW5BcQW", 'aY8lWPpdGG', 'WP7cO8oav8ka', 'W6ddQMldKSos', "8lgYRmoxW7hdKmky", 'WRm6f1ZdSG', 'YlhlUog1G3tHTly', "WRGdeSo3WRW", "WRNcRxrrW6C", "WOZdNeRdH8kk", 'et4NWO/dJq', "W6ddMmk9Dmk7", 'FHH/yem', "W77cM38tCa", 'WPJcQNu', 'W5DlvSkxW5S', "vcOwWOBdJa", "WPWrmgZdHq", '4PAs4PsK4PwD4PEK4PEJ', "ssWCW7Wi", "ASotv2iM", 'WP3dG2iyuGtdRwC', "DZxdVt8H", 'W5fAW6xdVqe', "8kwrJ+kcJVc6G53cU+g1P+g0Vog2QG", "i0FdRSkNW54", 'W4npW7xdPW', "ufFdLSkpqG", '4PAs4PsK4PwD4PsR4PsS', "WO3dNeRdMW", 'BSkxWQ98WRC', "W5RcPCo6nSo+", "u2JcNSkAiG", "W50HW6JcRu0", "bhxcKZ50", 'hgNdLCktWRi', "4PE04PEz4PwF4PER4Psf", 'dSkHW7RdVSkj', "ifpdNuVcOW", "zCooW6ZcICkE", "WOdcIqJdSxm", 'wIewW4JcGq', 'WOpILlGWrby', "WO7cHWJdOvO", 'BSk9W5qKWQ8', "ft8AWOldIG", "W5L+fur+", "WPVcMKXwW7q", 'CCkBywBdPq', 'pNyxW4JdKW', "W4CfWQpdHmob", "qmklW6BdUmkN", "bHK/WRhdRW", 'yK3cUdfN', "l2hcKXT+", 'W5tcGSkBWPBcHq', "ld/dQdCg", "WP7cTCkUmSoc", "a+kwU1PwjW", "W7qepLLj", "aZOFage", "y8oAAcddOq", "tCkxW7W", "cCkGpmkCWRK", "omozvZWn", "ybHWzem", "p8kEf3H4", "4PAG4Pwm4PAD4PsA4Ps/", "b1xdUG", "cCk3nSkQW4m", "dgBdT8oHfa", 'tCodFSolW7q', "rrCuc3K", "nb3dRIOR", "WPZdH1ZdI8oe", "fvWtW6v7", "W54lWPJdKmo9", "o0NcM8kvha", "hKfvhMW", "gCo2yXuj", "W7X1wa", "W4BcG2K", "lf7cMW", "ybHHA14", "DmoEtq", "WR7cGeOJWRS", "sX0Efq", "lmkWf8kHW6K", "twNcJW", "WORcLri", "WQiMhCkAW7u", "g1tdNtX6", "WPqolq", "pxBdLCoKlW", "4Bsc6PY04BESY4XS", 'hM3cLCokWQq', "huJdTuxcVW", "4PwBuKLE", 'WOFcVdhcJ8kh', "W6VcNWFcTSkb", 'WRNcIq4WWRK', "WO9DWR9aW60", "xZeE", 'W4RcHSkdW43dKa', "WOxcIrtdSNC", "WQ3dTe7IL4dXGPAA77Q04Okx4PUy77MJ", "DSk3FHja", 'z1dcMc0R', "WO3cIapdTZy", "srxdIa", "ACkbW6y", "4BsRY7FiTEg3QSot", "hmo+EXua", "WR0EW7pWLOcOW6G", 'W7fLW4ldHW4', "W45ICCkOW54", "vMtcKWyN", "4PA/4PEs4PAj4PwA4PAB", "nxRcMIFdRa", "WRFcJGpcPxS", 'aCkEoa', "eKm1W5ZdPq", 'WPipia', "WRJdKftdOSkN", "YilHTkpHTOpiIKy", "uSkdqvddOq", 'weZdKMhcVW', "qfScW5dcRW", "W7zahKrb", "WRjPpevz", "dCo6BHmt", "uMNcLCojW7a", "xrP1D1G", "8jE5MVcHURZWPOM0CFc8U5i", "BSosW5aLWR0", "CxFcKMW", "ub/dO8ogAq", "WPHzWQ3dGqi", "W5jSWRW7fq", "dSoHzCodW74", 'WRHOWQNdRYq', 'WPdcVrZcHmkN', 'EmkAq3FdSW', "WRWeFxr+", 'i1jWtaC', "mIjdzLO", 'W7ZcO0i2Aa', 'ookwTde9hq', 'dmo0C8ojW60', "sGpdQmocxG", "WRtcJ1ONWRS", "lvOqW4NdKW", "W79bmerE", 'WOBdUr3cHmk+', 'ofBdL8kpWRG', 'ehqJW6NcIa', 'WPRdUuNdPCoN', "W7ClW4lcH2C", "W5tdK3/dOCoQ", "fXBdPXKH", 'W47cLCkEW5q', "beWKW6v4", "BSkFWRL2W64", "E8kBW6uL", "tqJcGZNdUCk0WQtdNmk9nuvM", "dNRcM8kpoW", 'pXC0oLC', "buGhW7Lo", "WPdcTJhcN8kl", "srhdJmob", "ECk7FxpdPW", 'B8kgWQ07WQC', "pGSWnvW", "W6lcKbC", 'WO4yn2NdKW', "cHJcMYNdPG", "qZag", "i23cMa", "W55ZW4/dLt8", "8jQ5IVghQiJWRPQb8kg4SmkD", "WRxdSSkdESkr", "pKxdTSk2WRa", "W6RdSMddTSom", "at5tWOxdLW", "FhZcSCoQW6a", "W4/cKYtcNmkk", "4OcluLa", "4PA64PEN4Ps44Pw24Psp", "cSoobdlcIG", "YAliLYRHTjBcNa", "WOxcPWxcK8k2", "YlBiKmQN4BAK4BAn", "aXHXWQS8", "D8kTCrvh", "W6xcKrFcTSkA", "WOtcGWddRLS", "xwFcMSojW6e", 'tSoZW4BcTCoz', 'qUkxRSkJWQ9m', "kUkwNUkuJUkuKUkwGa", "WPdcS8oD", "jx7dO8k1ta", "bmoZzq", "v27cJSoAW60", "cmoJzq", "WQFcVdpcJSkP", "Y53kQUg2JCkZ4Bwg", "cLhdNwdcUa", "W5lcS8oNpG", 'BJJdLCoixW', "rXxcHCoBFG", "vdJdHSoyFa", 'kIRdNSoxeG', "W73ILP7ILk7ILylIL5W", "W60bWRNcGmoV", "WOCmn2pdKW", "WRvkWR7dGK0", "W4BcHtCnha", "vG3cGSo1W6i", "EYJcSCoxW7q", "eMhdTSknBa", "WRumdmoXtG", "4PsqxteN4Ps3", 'WOanW7n+hW', "4Bs14BEF4BsAYjhkOW", "qSoJECohW7C", "DCktW6aKWOS", "dSoVFmolW7G", "z8kmW63dR8kn", "WRuSC8kPgW", 'q0OtW4hcRG', "d3OAW5pdLa", "gxPaWRjyB2hdJSkyWPWNESor", 'f8oinSkQW4m', "uvCt", "kKddJCoIkW", "WQ3dTetdImou", "EMJdJSkuoq", "4PEJW4XSWO8", "cGeaW6Sd", 'W67cNXdcP8kt', 'bCklksDc', "CqdcV8o0lG", "4PAt4PsL4Pwv4OQC", "W5tcJtBcHSkV", "hNRdKmoxWPS", 'xrzwW5hcUq', "nM/cIr5E", "huZdJK3cUW", "a2FdJSkzWPO", "rCo4W4BcIq", 'WO3cPmouFSkH', "WRZdRftcQZy", 'WPFcGN1gW50', "pxxdKCoDmG", "rSk6yG1g", "A3xcNYuH", "W4HoFCk0W78", "WOBcMZFcU8kS", "fY0hWOldNW", "W510WPRdKGm", "zHjeD0C", "4PAp4PAh4Psp4Pw84PwZ", "WPhcHNxdOCoa", "4Bw4Yj/QNl5A", 'WQtcLL4dWOy', 'zCk+za9g', "4Psr4PAW4Ps44Psu4Psr", "WRBcGfORWQ8", "WQ/cP+kuJ+kwS+kwVa", "ghVdJW", 'zWvBDg0', "h8oimmk2WOu", "W7NcImkBW5xdKa", "4BER4BA84BsJ4BAV4BAQ", "hwFcKaldHG", "W7D9wSkyW64", "WRxcJK0YWRi", 'vqitWPBcRG', "dvtdSmo0aq", 'WPBcSCo8u8kM', 'W7xdOCkUmSoc', "s8oWW5lcVmkq", "ggpcGSktWQS", "pIxIL6VILyZILyW", "h2JdJa", 'lLdcR8kpgW', "W5/dOEkwPokuKUkxIa", 'gL7dP8k4WRm', "WPxcTZZcJSk5", "W4NdHs/dO8o9", 'gghdGmkLvW', "WQ/dIM7dNCoj", "W7FdPa5iW7W", 'mCoQv3P0', "e8kllqn2", "yCk2Fr4d", 'cmksktfn', 'h2RdHmoHhG', "ufddNmoaza", 'FcFcQmoFW4G', "WPfeW6G", "WRVcQdRcVCkP", "k0xdGCk1yG", "FFcJMkeUiH4", "bmojWRlcRa", "sX7dGmolwW", "W4K/W6K", 'WO3cPCobDSkg', "W5BcOCo9", "Af83kc0", 'AmkAEMldSW', "gwRdV8kqWRC", 'BmkcWQm+WQe', "W51JeGTV", "W6lcJGhdOSkB", "W5mCn3NdNW", 'W63cN8oidSos', 'fcZdSEkxNUkwHa', 'W4ldHs/cNmkC', 'rIyCW60z', 'wMjCWPFdMq', "WR5eWQxdIGW", "WOhcTM8YWRe", "4BE4xCUaYOlcLG", "WPFcHN5nW6m", "DSkllNZdRW", "4PsL4PwX4PAK4PAU4Psq", "WOWinNNdKW", 'qSoYW5VcNSkw', "WP3dLK/dGCoE", "W4NILk9gWR88", "ECo9yNvI", 'CgRdHq', "WPlcSdpcJSkK", 'WPeyn2RdGG', "pSorqtuR", "W6BdNb5XW6O", "W7DPymkmcG", "ge03W6NdGa", "h8oig8kLW5W", 't0FcJIul', "WRXjoevz", "WOZdKLRdH8on", 'W7LJqSkCgG', "lSoeWOlcRmoS", "x37dM8onW6W", 'rX/dImocCa', "W6lcJb0", "Emk+Eru", "zqxcMSkJzG", "sWa5W5i8", "W7NcUComi8oA", "y8k6yGHk", 'WQxWVQQp8lgRRFc5I7JWM7UC', "W7v+W4pdHHK", 'WQtdGa4wWRq', 'WPpcSdNcKG', "ASkGW5VcPSoS", "WOZcHWi", 'ffNdJM7cOW', 'e3tdKCkEWQu', "sWRcGZJdUa", "W4GPW7XQAG", "qSoeW5tcUmkN", "WP7cH1bnW7W", "hSoYAG", 'yL/cVI9N', "ACkhxhZdHG", 'fKO/W79M', "W4uTW7bPhW", 'W5RIL6pILjpILklILPe', 'v3/cJW', "wMpcLCoAW4u", "lv3dJCkDyG", 'BCoCW5/cKSkP', "sWtdJCokyW", "WQhdRxZdNmos", "bZqdWQBdOG", "nokvTEkxQ+kvJokvJa", 'qmkGksno', "WRNcMX4KW7u", 'k8k/td8Q', "WQHDW7nMW6S", "u23cLCokW4G", "W5FdMtm", "krNdUYeR", "ENFcIW", "WPqFlhNdNW", "mWW3jeG", "EmkDW60OWO8", "WORcGMDwW7q", 'f2RdHW', 'WOBcLehdTJy', "mbxdOIi8", "aCkxWPxdOmot", "nNZdImk0W48", "WRRcGf4", "WPjfWQ0", "WPXzW6JdHau", "W7JcGmo+imoQ", "v3y8W7lcMq", "ymkSDq", "lGW3o1u", "BmkpW77dV8kR", "WQDUWRddGs8", '4Bw/4BAsl/cJKi/IGRdWQAcT', "WONcONumsG", 'WP3WLBo1WRpWR6U58yIRLW', 'AokxICoDrrG', 'WRNcJ0CUWOK', "qq/dMwjS", "WO7dGq7dGCoc", "WPPNW4NcSZW", "8kQjNVc+QApWRRMz8j64VpcZI4u", "W4NcGSkwW4VdLG", "W5/cLConF8kT", 'WRlHTjlkRUg3USk8', "4PEV4PAZ4PsU4PAI4PAQ", "4P+BW7rTW6ldLa", "pXCTihO", 'WPLvWQDrW6y', "nUg3KUg2G+g1LSQK", "W6HOrSkjW7K", "mCk6gb4X", "FXrLj1G", 'WQqOdmkKpq', "WP8m8jstHZRdLW", "W6XMrSkCW7a", 'tCo4W6RdOmo5', "bc4xW6qy", "W4pcVaNdQ3m", "xokxJSkcW4xdQa", "tJ4BogK", 'WPpcK2DlW74', "s8kwW7e", "WR7cQs/cK8oJ", "WPdcTmkeESkP", "ubJdGmkpCW", 'W6hcNNSgDG', 'WPlILiSsW5FIJOC', 'e3FdRCkYWRe', "WPZcUcW", '4Bsf4BsbW4VHTzFHTyS', "CCk7uXro", 'fImxWP4', "W5dcOmoW", "W7rYtSkugG", "W6BdQ2RcK8oA", "jZlcSpcDKBFcPG", "muZdMSkMyW", 'tayocx8', "h3tdLG", "b2jtWRpdKa", "W6dcMWRcTSkD", "WRJIL619eqy", 'WOpdLKddHCoE', "WObSWR06hW", 'WP/cPSoOmCo+', "uvHjDde", "bxpdKmkwWQW", "emksktzj", "8ycdNCoOWODhFa", "ifxdS8o4fq", "WPhdVmkMnSoY", "W4mJW7b3xG", "pKJdKCkrrG", "jwZdGmomba", 'h8o0zSoCW6G', "aJS3fva", "EWlcSFgcO4lcHG", "D8oWCXro", "W4rSWRaGhW", "WOXAWQy", "W7DtlKDj", "4PAP4PEX4Psq4Pw+4Ps8", "W6VcK8odhmop", "4PsaW43dVCkhWPu", 'qmkaW4VdO8kl', "W5ldSSoGnmo9", "AmkDW4u1WRy", "pbeLlq", "egxdNG", "DmkxW6i4WQS", "avKKW75Z", 'zYrRuw0', "WOBcLrxdPhe", "WO3cJgfjWRe", "rSoiW5/cRmk0", "kq87hvC", "WPVcRSokzSkj", 'f0NcL8kxjmkqW6DDWPbrW5xdUCkw', "4PYl8kotP+kbGpcSS4aU4BsY4BA5", 'efhdVNZcVq', "WRVdU2VdSmkk", "vmkfW7ZdUmkd", "Ecr4sf4", "W4NcOZtdL1K", "r8ofy8ouW7y", "4PsP4PwY4Pw64PwSjW", 'umklW47dPCkE', "WPlcPmoj", "WPpcHXldSxm", "4PwF4PsQ4PA14PsB4PEb", "W7vOxmkzW5a", "o8k6bJq7", "vmkBjSk3W5e", "WRlcGfCJWPq", "4BwK4BAy4BslY6ZiKW", "lMxcKXHg", "msddJG", 'W4e4W7r1uq', 'WQdcIKSKWRW', "kXK3if4", "bNldKCkx", "WRVcJLa5", 'W7dIRRaZcmof', "oZRdJSoxCq", "WQpdKrPEnG", "4Bw9gmIJYOFdRa", 'W4ncW7JdVIK', "huRdUwNcVW", "k0/dJCkG", "AcddT+kuJ+kuSG", "WOFcOcZcN8kV", "WR/ILiqmW5To", "W5TpW6pdTd8", "W7BdPrLDW7u", "e8kwoq", "W5mPW7K", "EHvDxu8", "laxdPI4L", "WOJdPctIM5VVU5pdOq", "aokwILlcSeC", "FZSwW5al", "h009W7JcOq", "cMnsWQPn", "k8k9WR/dISo5", "4Pw44Ps44PA64PEh4Psd", "W5avW75QBG", "a3VdKSkyWPa", "WR7cONq0WPS", "W7/dPNVdH8oz", '4Ok6krG', 'bZGbWO7dLG', "4PsC4PEY4PAd4PwC4Psb", "WPpcVrKvWPO", "g3ddHCkSEa", "vMtdISkEWQW", "WORILOxcVsav", 'yI3dH18', "qIyEW7O", 'W5rcvmkkna', 'WOFdNM7dOSo+', "W7H8y8kzfW", "gfC+WQO7", 'BZRdOSoOFa', "bwFdVCkEWOy", "nUkxSpc/LOxIG4pIMk3VU7JcRq8", 'osRdTsKV', 'rCk9W5NcHCku', 'mXCWifu', "WORcHK3cLSkF", "WObgWR0qhW", "C8oFxg0", "W5VcISks", "xvmyW4lcPq", "eg/cLmodWQS", "WRdcGWRdOhu", "FXX/y3S", 'W6T9ha', "WODqW7naW60", "WO7cJezsW6e", '4PAI4Ps6gW', "W7FcO8kaW5tdTW", "WP56WODPW5S", "WOWseftdHW", "YRJHT6tHTPpQNR3HT6y", "8jI2Oo+7Pezg8y21Pfa", 'W6b1sq', 'y8otAh9c', "bmooW5FdNSkt", "WOGqo2pdLW", "4OoFc8oI", "WR0kWOFcS0e", "4lsyW47GTPJGT7NGTAy", "le/dGq", '8ykjKhmhWOJdRq', "e8kwmYzU", "W74bWQ7dImkI", "v2pcLCkuWQ4", "v1dcHw1e", "yGFcICk1Ba", "WOzaW7nZW6y", "WPpcIePjW6K", "sdetW6qj", "v8khW7RdPCkw", "jSoUwmoaW7u", 'AexdHmo9wW', "W7noch9Q", 'yGRdNxus', "WP1gWRPi", 'WPRcS8oNC8k7', "WRtcUfqbWQq", 'qXNdG8ow', "g8oWyqqM", "aFc4IjVcICkFW5W", "A3VcMSkdna", '4Pss4Pw94Psr4Pshhq', "WPzyWQVdVIa", '4BAj4BsJ4BwD4BsMda', 'gYeEWOBdLG', "dSkaoSoKW4C", 'fVgdUk0/WQik', 'W71Ox8koWRW', 'W6vQtCkpca', "WO5tWRJdPJC", "WPpcPmokDCk8", 'W6ldPMhdL8oW', "r8oTW6tcOSk7", "CqTBCf8", "lM/cMG", "FbP0Cf4", "WQdcTv4MWOe", 'oJbC8lAsTmov', "WPdcTmowmSk8", 'le/dKq', "FZa7aeq", "ee0+", "pg7dI8o8ma", 'cKCRW67dQa', 'ecGWWOJdLq', "mmkhcmkuW6W", "W4BcH8o6o8o8", "x8omFXuc", "mmohsJGc", 'g8kCvq', 'WOBcUrxdOhO', "hJ/dGGap", 'W7BdJXL3W7u', "DHX5WRFdJa", "W6ldOMhdHG", "mH9+CXC", "WRxcRs8", "wSk7oSk2W5m", 'W6XGx8kyW6y', 'DbjJCfy', "WOldKKddHSoM", "WQtcNK8V", "WPXgW7nhW6W", "W50l4PEi4PAN4PwT", "wwNcJW", "WQpdUZRWOlgcsG", 'sa3IL67ILPxILAy', "fveT", "hIZdM8koWQq", "vmoxW5lcRCk+", "ymouW7VdISkW", "W7ddGXKcWPS", 'gZ4E', "WPFcO3mZWQe", "4Bsj4Bw5mEg0Nog0Sa", "ACkLW4BdImk1", 'WPLeWQBdKYW', "DmooE3ZdPa", 'xMmDW6Xn', "W7ZdONS", "WPiPeSoDWRW", 'WPBcJtldIx4', 'W5VdOuldMSoK', 'd8ohzSoHW4e', 'wqNcO8oknq', "Bw3cHdSn", "gKJcQHH7", "nv0bW4X6", "WPxcOhqAWPq", "WOaAW7HOta", 'vUkuOpcPTytIGOZIMOlVUPvDWOy', "WRFcLHlcPSkl", "ow08W7xdJa", "W59pFSkPlW", "ECk6FHXx", "h8o/gLSP", "nM3dJ8oxWRm", "nvpdLCkzWPq", "lgtdNrnB", "DHLsAfO", "W4hdOCko4PsqW6G", 'f0ldJmkLWPa', "8kEvLU+5KMimbGi", "yCortgb0", "ruHwW5dcRW", "W4K+W7mVWQm", "WQiHW7RcIu0", 'WQ5OWRJdRGu', "W5hcOSolF8oN", "f8kjnmkHWOu", "B8kTWQLwW4q", 'vhBcSSogW5m', "geBdT8oHaW", "k2VdNSk/WRC", 'f8kjmCkGW6K', "uZLPDM0", 'lxlcHa', 'CrXLyLa', "4Psa4P64bokuKmkG", "WQPSWPC6nq", "W5/dNINcI8kN", "WQxcM1GJWQa", "dfFdJMNcOa", "W7ZcIxqKwG", 'W7FcOSkBW7tdHa', "WPVcJNy", 'qSklW6FdUmkd', 'ookvV/cBT57IGlRIMPxVU4jBta', "vuGeW4VcUa", "vEkxR+kuJ+kvSokvPW", "WOJcJNjwW7G", 'W4j0Fx5/', "dmk/zH0c", "W5BdR8k9hSoO", "W5OfWRNdLmoO", "WP/dSSkJbCoz", "sWxdL8kpzq", "W6lcJaNcO8ka", "qb/dI8oBua", 'gvaAW7ZdSG', 'sb8F', "W4muW5NILzxILOm", "n0/dLmkWAW", 'h0mTW7JdPG', "4PsB4PsA4PEU4Ps44PAE", 'WOJcLqxdNfS', "WOdILABXJlw54Oka4PM377UjaJC", "jNucW55t", "gCkykG", "xh/cMSoxmW", "WODqW7njW6O", "W4CLW7TJ", "W6CMW63cJ8kT", "W5pcISkwW57dKa", 'WQfgWQniW7a', "zJL4vge", "4Pwc4Psa4PE94Pw/4PsY", "WRW3ef/dTW", "y8kErWfh", 'W48+W6q', "tbxdHmolDa", "WQq5n37dOa", "vmo4W57cNSkb", "WPzeWRhdGG8", 'WQFcM10Q', 'WR7cR8keD8k6', "kSk9cYnR", "aM7dJ8kAWRG", "fXtcMNZcPa", "bokvSokwPEkwR+kuKq", "f8kjnSkQ", 'ASo5BgWm', '4Pwa8j+KPokbSUkzSo+4SHrSfG', "h14/W7H7", "yCkaEK3dTq", "4Pw24Psh4PAI4PsW4Psn", 'WPLcWRVdLWe', "W4ybWQpdH8o5", 'W5/cSSoP', "W7P0qCkAgG", "fSosWOL8W4q", 'c0BdT8oWaq', "WONcNNzEsa", "pmoyW5WpWRC", "4BAW4BsQ4BAaWRpWRAkm4OoA8yIGTq", "wuRcUmowW64", "W6PQySkwW48", 'WOfrWRjbW6y', "oSkCmq", 'rYiCW64H', "a2RdGmkrWQm", '4BwyumIwY4jU', "rIWv", "cCkCCq", "W7tcJrdcP8kz", 'WOZdM0/dLG', "gsKE", "rXpdKmoDyW", "jNONW7Hh", 'DGjtWR3cIW', "WO0nEw/dMq", "W5RdQtmOWRe", "eSkCkcXi", "zSkpBwBdTq", "krNdOIG", 'g0iMW6Hd', "W5LicLf0", "qL4FW4RcRq", "dxBcPdTI", "xXHWW5vu", "jSkDmcvy", "W7bSqmksW7C", 'FHiX', "zHZdKmozFG", 'vHNdGSohzq', "rbmucee", 'tsOuW7m', "W6ddTxy", "i23dI8kBWOC", "ocT0Duq", "4PAtwhbMmW", "WR91WPLSW5e", "d0O2W6RdGa", "WONcHxGBha", "WPuyogNdKW", 'W43dK0hdPSoU', "eNNcMYXJ", "W5xcLCkoWPK", "tSoVW4W", '4BsKWR3iRmMLW5m', 'W4pdReBcJZy', "hHe4WQxdPq", 'W6BdPMZdI8o5', "WPLbWQbn", "WRfIWRbCW4u", "W5/cNSo2C8kL", "WRxcLW/cJSkb", "8lMxIU+4Vq", "WRpdNK7IL4ddLa", 'W4pcSXxdPhe', 'W6Pev8koW68', "4PsB4PsA4PEU4PE34Pwr", "cL3cMIJdOq", 'efrWW6LV', "hSoLF8ocW5q", "baGeW4lcPmkBWRfd", 'W7LNwmkDaq', 'W5HUu8kqW7u', 'uqlcM8o9W54', "W5tcMY3cISkK", "WR/IL48mW4fe", "ySovsMj0", 'E8oUWRVcOSog', 'cmoIFSojW7i', "W73IL6ZWLiAB4Oor4PQd77IdW5/dKG", 'je3dMCozpa', "WRJdJG3dTmkt", "WRitEuldGW", 'W5tdJtXsW7a', "W5dcPFc9GklcSCkJ", "a0RcTc1Z", "tr0ugeW", 'qmkLW7ZdUmku', "Fq9O", "CmoivCoKWQ8", "a8oUEmoiW74", "4BA/W7/HTOtHTz8", "WQ7cU10JWRS", 'W5PlW6pdTWC', "jwxdNmkFvq", "W7CH8y2sMZLl", 'uN7cN8o+W40', "tbhdKCoCCa", 'WOtcUcVcN8kV', "yLBcMa1b", "W5/dOCkemSoO", 'CmoEw3fI', "4Pw44Ps44PA64Psi4PEm", "hw3dLCkqWOO", "guWKW7PL", '4PER4PwEWOi', "zmokW5WvWRW", "obK3mvW", "AYy0", 'AmkBW7CWWQS', "4PE94PsT4PY3lCkC", 'WO1qWPbkW64', "uxuvW4rd", "WQbeW4FcGmkh", "rSoVW5RcN8kd", 'dvBdLghcOG', 'WOBdNKVcMmka', "W4KfWRNdHCoQ", "egtdKSkwWO0", 'W5zEW77dSJS', "W4/cVSknW6/dRW", "4PEmlCkOW4hdOG", "urZdOmozqq", "WPTmWOxdHqO", 'W53dJIrIW5y', "fXJdIZGE", "guZdK2FcOG", "WPZcOmoqD8kV", "W4RcQSodkCob", 'ySovxa', "x8orBH0c", "rbCugt8", "4Bs1gSUVYkVdQG", "WPdcKHtdRhG", "ef3dM3JcMq", "bMBdLSklWQC", "rtDvW7Ln", 'W4/dKKddHSkk', 'zJWPrI0', "WPWqpa", 'sWtdHmodmq', "nCkAmmk2W7y", "WQxIL7FILi/ILRpILRW", "W4uqWR7cGmo/", "DEkxOUkxI+kxLokuJG", 'WQ3cOsFcKSkH', "CSkDW7uWWQi", "WPVcV0GpWP8", "oh/dN8kssq", 'WR/cGv02WRi', 'hSkhmCkWW6q', '6P+mc/gnK4/IGAdWL6kI', 'WOddUsRcHCkU', "ns7cMX5r", '4Ps+4Psm4PE74PAUWQ4', "fwlcGSklWQ0", "imoKlHJcOa", "eMxdL8k2WPm", "ja00WRBdUW", "8jUPLpggURpWQyUW8yoOLCo9", "W4mTW6L/wa", "ouW+W7tdRW", "4PE/4PEb4PAK4Pss", "ncBIL7NWTlEX77M94Ock4PMe77UxWPK", "W5RcQJrpWRe", "W5dcOmoWESoY", 'WRNcNwyGWRy', "bmkqW6ddQCog", "aq5hWP3dS8onW7mkW4y5WPVdILZdGq", "WO7cGWVdQMq", "W5FILRr5n8kC", 'CKlcGSkuhG', "W4LUWRXlW6y", "cCoKuSojW7q", 'gKJdSCk1cq', 'WONdUZb0ha', "W7L5WQFcS2S", "dSocvCoKWOu", "WRtdI1hdSSomW5BdR8oEW7e4WPpdPW", "ESkDW6WOWQS", "W59mFmkrfG", "vqRcV8o0ba", "cmk+ecfI", 'rCoYW5VcNSkY', "WRvKq8kptG", "F8o5CvDI", "WRjNmKzb", "WQDWWOapWOK", "AglcNSk2cW", 'W4ruASkAna', "mwbtWRFIL7e", '8kodVSkBW5FdLmo5', "tCkkmCkSWRK", "W57cVSoGo8oO", 'WQ0Vce/dNq', "beGKW6n7", "W4Cdb8otWRW", "W47cQXhcGmke", "W5RdOMZdQSoS", "W6VcMsNcOmkt", "fZKEWPtdJa", 'W6DJtCkygG', "wuKc", 'WPBcSSoq', "WP/XI6+KCa", "W75nlL8", "WOZcSL5jW4u", "ytWiguy", 'ddypg3O', 'aqXdW4ldSW', "W69OqmkzW7K", '8yksKN/cO8kVWPS', "vf7dHSoaFa", "W4fAzSk4W5e", "WOLeWP3dLX0", 'jCk8nSkPW4a', 'W47cVaZcHSk4', "4PwG4PEZ4PwD4PAn4PEJ", "WOBdHKVcVZy", 'aCkDkr1z', "WOxdIwddSmog", "WOBcHrlcPxC", "YlNHTypHTOyWnq", "4PwthSozl8k9", "W7blCmkzW4G", "WQBdJ1GNWQu", 'q8kaW53dR8kG', "pMpcNIaG", "vuGtW4lcPq", "zHHPCW", "WP5FWQNdUbG", 'W4RcKgqBwW', "WQxcILCZWPC", 'WPVcQLuAWQq', "W4yLW7f/uq", "WOJdPuVdTSos", "4PsE4Psf4PER4Pwm4Pwm", "mHX/yXC", "k8kFf2nM", '4Bsr4BA9gpcAKBNIGRlWORcC', 'WO3cJCofymkV', 'vmoeW4/cVmkP', "patcHq", "qmo5FuGm", 'mLFILBZILiFILlC', "W5aTW6LUwG", "W5NcHgmw", 'gJW7jwe', "WOrrWR4", 'WPLpWOVdIaa', "lgGuW4VdLW", "4Pw/4PAF4Psp4PwW4PwN", "bXGja2m", "W4BcNCooamoT", 'eSo6Frmp', "WPVcPmoxCq", "a2SaW4fo", 'WRZcSColqCkh', "dCkEo8kjW6O", 'cfC+W682', "gNflW5Wm", "gCoLACos", "W7TOsCkjtG", "gNxdHSkVWOS", 'imk7FxpdPW', "kfi+Cfy", "lNNdSehcNG", 'WRpcNq4dWRi', "W4xcLh4zsa", "WOX4WOpdSrK", "FMX5W4FcSG", "xCkTybzq", "W4LRWPb1W5y", "4PwG4PEZ4PwD4Pwc4PsS", "W6yRWORdRW", '6P2a4Bs44Bwi4BAsnG', "kXGAWORdNq", 'hCoHzCosW7W', "z8k+mCkmW48", "W5iPW612vG", 'Fbr/ybC', "WO/dK04", "WRiUFsem", "xaaw", "WPOXofNdKG", 'DNVcH8kz', "WR/cNe0", "WPXhWQhdKqG", 'dmkwmYvy', "phPAWRq2", 'W5lcK8kdW4NdHG', "WPdcOmoa", "dUkuRCkOWRBdJa", 'h0O3W7tdOG', "CLZcRGS9", "WPhcNgeMWOS", "ECk6rhddJq", "hsbFWOxdMq", "vftcUmkYaW", "bmkkW6FdUW", 'zSkEx1RdIa', "q8ovshHO", "WRhcIK0", "W7jeW6RdUIu", "WPZcIN9hW78", "gs0AWOK", "cCkCoSkPWOu", 'h2ddUw3cNa', "paFdKCoqnG", "WRlcQXdcJ8kD", 'qbtdPSoaFa', "4Pw+4PAE4Pso4PwX4PwM", "W59MaIeF", "xL5wW4JcOW", "W5n/tCk+hG", "W43dTNZdP8o9", "WROEW5KBWQm", "Y6ZHTiZQNipdNEg2Ha", "W7zPqCouoa", "kr0In08", 'ign4WQPN', "W6dcNWRcPSk4", "W4ddLwFdOCoT", "W5pcLmkd", 'WRxcM8oxzmkF', "W7RcPEkuKokvVUkuVa", "W5lcGSkfW4RcLq", "fvNdLgZcGa", "WRhcPYxILRhcNa", "WOzaW7rwWQm", 'F8ktW7C5WQK', "4PAq4PEL4PspW74e", "W6nJxSkibW", 'WRGKcmoD', 'W4ZcNh8mrq', "qwpcVCkXnq", "CmkBFxO", "W7FcO2PIW7W", "4PsOdLCvda", 'W48WWONdISoo', "pKhdU1NcGW", 'oaldJcW9', "fuldKKRcHG", "ddS1WP7dTq", "nmkDf8kTW4O", 'W6auWORdQ8oG', "4Ps+4Psm4PE74PAU4PAe", "m2WEW59e", "W7bMqCkjW7i", "W4qOW551uG", 'vf41W4VcPW', 'qIWbW74d', 'g1NdJM3cQW', "yVcDM6tWOQIq8jkiMGG", 'Dmk4Dtjh', "EHjIC1K", 'Emk6Fq', "AYBdRmoQmq", "F37cRCkypa", "tCotzCohW7S", "cCkakq", "CmoExgCX", "qYSti2q", 'qpgbQyRWRBIo8jAzU/cMMOO', "gvVdJN3cVG", "W47dH8kwWPNdPG", "4PEw4PEV4Ps54PAy4PsA", "aMNdTuxcQW", 'q8o4W4FcMCot', "tConvCkgW44", "W55WC8kSW5m", 'WOVcGXtdQN0', 'xUkuOEkvS+kxP+kwUa', "vSk2t2ldRq", "W7PbpfT5", 'hJyfWOxdRq', "WP/dKLRdLSop", 'WOxIL7FILi7ILRlILR0', 'wSkYmmkQW4a', "cKLsWObn", "W7KDWR7dLmoO", "W5/dQ8o7qCkX", "W5lcS8oNl8o9", "W5lcT8oNlW", "luFcJ8o+lG", "aSoUDa", "CuuIm1m", "BM7cM8kvna", "W4/cIqRcQmk9", "EsaDW7Gi", "ssigW68k", "W7WPh8ohWRW", "W7fVx8klaG", "lSoDAHKG", "tx3cJ8oQW7W", "bCo0zCowW6O", "4Psa4PEU4Psoomkk", "i3ZdLSkAWOW", "WQtcRGJdLN8", 'WQtcTt7cN8kS', "W5NcLmoOdmoH", 'mX0Imf4', 'C2NcImoDW6u', 'ie4Mr1K', "W5/cTSofFmk8", "dCo6Faul", "gmk/qcnh", "W67dQMO", "lmk8gG0", "WP5EWQxdLbK", "W5Xrfujd", "WPRcISktWPNdGG", "FsyqW445", "AhpcMqu9", "WPFcQCoCvCk4", "E1lILk7ILztILlS", "D28yW5tcQa", 'WP7cTCoxu8k4', "YBhkMUg3RSox4BwC", "hqiQW63dOa", 'W6xcKYtcGSkG', "zYxdKmoTyq", "W615rSkuW7e", 'vWtcIW', "W5TcC8kVnW", "jrGXWPddVq", "eg7dJSklWQC", "4PEJ4PEM4PwM4PAf4PEz", "Fs/dJb0B", 'W5aTW7n/uW', "l1/dHSk8", "W5FcGSkzW4W", "WQBcMKO/", "FwnwW7pcIW", "W6ZcKWe", "Fxe1W73cQa", 'zSkRyHjn', 'kwpdU8oKpa', "W4rsnvfj", "gCkdogjn", 'Emk6yHHl', "WPxcKwO", 'sc3cO8kFrG', "W5HJx8kidW", "e8oWAa", "WO3cUuZcJXW", "cMNILj/ILORILA0", 'd2VdOSobaG', "pehdLmkZAW", "4Pss4PAF4Psp4PwW4PwN", 'WPjzWRe', 'WOdILQ3dRCkAWQC', "ySktW4/dU8kk", 'o+kvUrGUoW', 'tcOEW68d', "kUkuPY4OWQO", "W5ZdJKddVCkw", "W7/dQhZdMSoi", "W5HDW6pdOgS", 'WP3dNK/dLSod', "W7ZILkyzBCo/", 'WQiHW73cIu0', "hCorWR3cVmoEdHhdQSoiW40Njq", "mf7cKSkNlG", "EXHAWQOC", "tcJcJCkgWQ0", "WRddH8o9WPNcVW", "WPtcJuOTWPi", 'WOhcKWe', "oam0WQG", 'WO8kiutdMG', "WOZcTCowE8kM", "lHhdQcG", 'WPpcVqriW6i', "dMC0W7xdMW", "4PE94Pw94Pwz4Psn4Pw5", "dtRdGHSy", "WOZdNKO", 'wsOCW60b', 'rxXcW5dcJSkjrmoKWQFdHdhcQmo4', "WP7cJh1wW5a", "WOFcGIxdQNS", "jZVdNr0H", "W5HyW7q", "gubdoMW", 'W5BcGSkzW57dGq', "w1jBtsC", 'WQFcJ1O2WRK', "zrbsWRbn", "WO1kWRZdKWG", "nUkwGUkwG+kvNokxJG", 'W4H+ASkuW6K', "DCk/bvbT", 'W6dcNW3cRa', "WRJcIK4KWRK", "wWlcHCoxW5q", "WRNcVhW1WOa", "gXldPSkroW", "W73cNXdcTSkr", "l2xcJXXA", "WQ/cQJxcKW", "W7OiWQJdGCo+", "sb/dGG", "wgntWQTh", "z8kWzrvh", "xWKvW40G", "FCkRzaTq", 'h1FcKCo9W7q', "AbC8", 'y8kbW7ZcRmke', 'sSkaW7S', 'CSkwW7b8WQm', '4Bw7YjdkLUg1T8UN', 'W5RcOmoko8oO', "8kAkLpczIOpcUFgeUihXI5Uz", "fcJcLSonW54", "rCo5W7BcHCkE", "x8oKoJZcOa", "EMRcHtGn", "8jUWLEkaNpcEOOZdT+g3REg1U+g0Gq", 'WPuCkG', "fwBdLSkAWQu", "W4xILRhWLiw74OkN4PQA77MGgSoN", 'WPFcItpdTwy', "vLFcR8k5fq", "FmkSza", "n1y9W61I", "4PEceSkWaSoY", 'W6jiEmk3nG', "W5D+pK55", "WQhcSIG", "W4ldONZdGmoD", "eum3W7NdJq", "gf5WW6T4", '4BAX4BwGW63HTRVHTOO', "vCorthuX", "W4tcKh4ACa", "WRVcJLCZWPK", "bhjXEHS", "a27dTCk4WPO", "rGad", "4Pw04Pwm4PwZ4PsO4Pw3", "WPVcOMvGW4a", 'txJcICohW6O', 'WRpcQ1ypWO0', 'E3jJxHS', "4PEw4PEV4Ps54Pwx4PEv", "4PAv4Psg4PsS4PE74PwU", "W7rYrCkvcq", "lKO1W7P6", "WQlcTcxdJty", "jCoADXyL", "D+kwUCkVD2q", 'e2xdSSkB', "4PEt4PwiWOK", 'W71Nr8otWRi', 'W5vbkqTH', "oX/dOdKR", "WPRcRa5TW7W", "h3ddGLlcPa", "tmo8W5VcJSk/", "WPNcKsZdVea", "qCkQqGTi", "FYZcTCohW6C", "txCB4PQE77I4W7C", 'W5C4k3/dMq', "WO9oWRVdKGe", "g0nmu34", 'CZJcKbPktKDa', 'WOPBWR5iW6i', "W5i4W6PGtG", 'W7zYrCkuaa', "CmoCuxvI", 'pmkrW6WXWQm', 'D8knDMBdUG', "W73dOM7dKmoi", "WO1YWQVdLZW", 'mLFILjmNfW', 'WOddSuFdImoH', "aSoYAa", "W5ZdJZn3W58", "WP8MjSoBza", "oHqQnuG", "W47cJ8kcW5VcMW", 'oHyNjXS', "W64iW44Wnq", 'x8kvl3Ph', "xhu0W4lcUG", "FCkWyW9n", "4BA34BsNWQ3WU6cJ4OoP8yQHPa", "WRHMWPveW5K", "bhRcHCkLmq", "luxdGmk6AG", "8yEIJUkbQ/c+GQ3cG+g0VUg2N+g0SG", "W4SqW4FcGmkh", 'W6eMq8kDtG', 'aokuRUkvSUkwIUkvRq', "4Pw/4PAF4Psp4PA/4PAO", "8jwlL/cWIQFXGAUXnmo/", 'WRFcQfb7W7m', "W5viFmk5W48", 'W7vno1i', "W71NxSkFtG", 'A8kBurJcSG', "mgmYW5ZdPW", "WQxcIW5IW7e", "W5VdKtfFfG", "WP/dHL3dIG", "ewlcGSkEWQW", "hKO9WQOS", "DCkgW6W4WQ8", 'e8kBkW', 'wbJcSa', "Emk6Dbjc", "WONcK3jpW74", '4Pwc4Psa4PE94PAW4PE9', "ESkTAq", '8jQAUFc9QjVXJRMt8ycRGVcTUBG', "W5BcImox", "umklW53dVmkw", 'W4VcT8oOn8k7', "v3/cJ8oQW6S", "bmkcW63dRCks", "YyplSUg1UKZHTia", "W77dUvxdI8oa", 'W6ZdSuxdHmou', "p1/dQtGG", "et4aWO7dLW", "WOhcUXlcJSkK", 'W40bWRK', "WOhcOrxcMmkq", "u8o4W4xcHq", "WQBcJLq", "WPJcPmkeC8kM", "vKVdMq", "W6muW5KfWOK", "sSoYW4ZcJ8kr", 'y8ovfdrO', '8yIQUHrOW7W', 'W50lWR/dI8kT', 'W5aWhs3cHa', "W57cV8oS", "W7fNvmksW64", "WOpdNeNdJq", "a8o0CmobW7W", "g17dSmoHaW", "4PAQ4PwK4PEn4PAG4PAn", 'bmkwlIe', 'W53cJmk8W5xdRa', "FmkWFLSo", "WRVcGuK", 'uKJcOIiT', "awNdJ8kdWPS", 'wCkqvZq', "h8kgnSkPW6a", 'WPRcS8kdyCoO', 'kSkepSkWW4m', "W4/cUG7cGSkk", 'vN/cNCkema', "gf0BjZ0", "W5tcGmkoW43cGW", "WPddUtpcHmkT", "EvDwW7lcIW", 'lrhdUZKR', "smkxW6a0W6e", "W5zEWOFcS0e", "W7FHT4/kSUg1GUg3HW", 'x1qAW43cPa', "pSk7eSkfW5q", "rbCx", "zCoQW5BcM8ky", "gtFdVb82", "dK7dR8oWca", "AmkgW6OYWQK", "q04eW43cPa", "W6VdO0ZdNmor", "W4CfWRNdICoI", 'W4mxW63dLmoI', "4Pw84PsI4Pwz4PAD4PAb", "WP0GWRpcS2e", "W4RdUxxIL6NdQG", "CSo4W4FcNmkw", "kLqXW6FdPa", 'WPnyWPJdTbG', 'uKNcJ8o5W6G', 'rmoWW5RcMmkk', "WPlcO8okC8kH", "WO/cOmoD", "vmokW6VdO8kl", "imoe4PwJ4Pss4PAa", "W55zW7K", 'ff3dPqldHG', "4BEI4BA0YzRHTR7cIG", "W77XIyUXWOJcPSks", "uwCtW5Pd", "W5/HT5RHTQaY4BEt", "u8kPW4/dUmkE", "4PEs4PEs4PAj4PwA4PAB", "feSDW6NdSa", 'qmoz4PwFyGW', "E8oSsG", "W6ddPxFdPSoK", "FMlcMSksiW", "mNCXdrC", "WR/dQMNdQCo/", 'vmoTW4hcG8kE', 'W513EqFcLG', "WPKlWRVdKG8", "B8kCDW", "WOdcHXldOhe", 'ECkWDW', "yHXLC1i", "lCoCWQmdWOS", "mwxcIq", "WO/dL8ooWOJcGmogr2RcT1Xpkq", '4BsrY4tHTl/kIZS', 'W6xcLCksW4NdMq', "l0VdGCkGAW", "WP1DWR5aW7K", "eMFdLSkAWP8", "W5FILB/WQBEu4Ok74PQp77MjWQhdIW", 'WRRcNqZdGCoa', "hg3dLSkyWOW", "W4Soo17dRSkzpG", "WRVcI0aLWQG", 'naOUDae', 'nSkGW7yYWRO', 'f8odzmoGW5e', "rdFcM8omW7ddMsLuWOddRSo0bG", "qmoWW5a", "hKOP", 'ACkDsh3dSG', "WPbkWQBdGYe", "WRb5WP5qW5S", '4PAp4PAh4Psp4PAZ4PwZ', 'wmkfAvhdRW', "4PAqAxJcGfm", "W79gWQ80hW", "W55+mKDl", 'rrTUWQJcTG', "zCo2E3bw", "W6ydW5joEG", "w8oZC8o1W4hcSNm", "aeldOSoLmW", "hfFdLhZcJq", "WOZcRSorymkR", 'wXCwdxq', "AtVdPSo2CW", 'gmo0zCojW7C', "huvlvtW", "hGBdM8kKWQq", "W44aWO7dJ8oG", "pKO/W7Hf", "meGdW5hdMW", "fSouWRhcV8ouaZFdNSooW7CShq", "cwG+W5RdJa", "W5VcVCoNlSoA", "AtRdJ8owEW", '8kczNFcHQ7FWS5QL8kcATmo/', "W5i7W6vtuW", "W6xcJq7cImo6", "WP3cQN/cGSk5", "4PAA8j23Q+kdSokBNU+4M3bBWRi", '4PEfWRuftKC', "WO1rWObMW6e", "WQBcJK0JWRa", "W43cLgmDtG", "D8k6yGGd", "wdaBW6ud", "YkxdH+g3S8I2YkW", "D8kDW7O5WQW", "W79lk0jj", "WQ/dLh/dLSoz", 'oXddHpgcVlZcMG', "W5KbWQK", 'WPXeWQDmW64', "kCk9pWfT", 'mMhcIqTx', "WRa/uZpcLG", "oSobixxdQq", 'WQBdUx7dISoG', 'yHhdT8oOwW', "WQpdKeVcSSkv", "WPpcKgC", "WPKsn3NdTW", "WQ/cJs/cUCkC", 'zsOmfvO', "lSkbg8kRW6m", "4BwG4BsGWPRkKEg3GW", "edbwWQ7dQG", 'DmkYDq', "xvSyW4dcHG", 'W4BcHwnEtG', "Bc7dKGXx", "WP4wogRdKW", "dUkwUCkfWPu7", "4PwaW4KzkmkV", "4PE04PEz4PwF4PERW6a", "FYdcLCoElG", "W6ZcIG3cRCkA", "WORcHWxdVvm", 'WOZcSCobD8kS', "zSkPrZr2", "duVdNW", "mau7WRpdUq", "WPnhCY0", 'e2VdTmkRWO8', "WPhcQ3/cISkK", "W4zxWRTeW60", "W5rlW7NdTIW", "vSklW73dOSkc", "EMhcQcmH", "xcH5WPFcOq", 'zqdcLq', "mGldOG", 'ECo2W5lcQCkC', "W7rOwmkKgW", 'W5NcJ8k9W4pdSG', "W60PW65PxG", "W5/dI8kegmoO", "muJcM8kzjq", "BMpcHHSA", "W5XtqSkfW6O", "Amk2W6OpWPG", "t3NcKSonW68", "W4WuWPZdQmof", "W4ddJdXvW7K", "y8kbyZ3dLG", "WR7cI8oTqmkj", "W5RcHxutha", "v8ojvh1D", "oq554PELWPG", "zSkhyNFdRG", "W4XCsmkwW7K", "WRWeFxrU", 'fcxdOwXg', "W44TW7fBwW", 'W5NcKgqkwq', 'aCoLF8obW60', "fhRdUmkwWO0", "t8kEza9v", "W67dRMhcK8ou", 'W7ZcI8kvW5FdKq', "W6qTW6L7hW", "WONdNcPE", 'F8oEuxP2', "a8khmJam", "g3SFW68vkcldRG", "hxddGSothW", 'qsldPmoQCa', 'W7DDuY3cVa', "4Bss4BwWmFcEOz/IG5RXJioa", "W5hcGfu7ra", "4PER4PwEWOlILO7dHG", 'gCoVrmowW6K', "WQbU4PAG4PAG4PAn", "WOToWRRdLaq", "F2NdJSk2pW", "W5tcMdhcJ8oQ", "cvxcO8o2dG", "tCkdW6ddUmkv", "yG5RAfi", "WOxcPCoOEmky", "W4rqfKnE", 'hvxcO8oHaW', "rCkqW7VdRCkw", "ghJdJ8kEWPe", 'WRlcQCoGumk9', "8jIXJSolbcNcPq", "wdlcMGldRa", "F2VcJ2W4", "WP/dUmowgmo0", "yJRcJCkEiW", "naO6", "CmkDW6q", "f2iuW6jM", 'W7n5WQFcMxu', "etRdPmoxwW", "z8kGg8kgWPm", 'W4VdINBdQSoz', "WQhcNN/cQmkf", "DCk/l1OX", "4PsC4PEY4PAd4PsG4Psg", 'W7dcJSkt', "CetcOt0d", 'pfK7W69K', "xr0odwe", "W50un2VdMq", "k8o5umo3W5y", "WQy+hmopx8koWR7cKmozw8ogWOtdNga", 'WPBcSCoisSk4', "W7ZdRhFdHmoL", "8kMNNE+5JhqBoMi", "vHhdOmogCG", 'pG/dI0zS', "eYCIWQxdVW", "h000W7ddOa", "pmo4WQnwW64", "wZjAWRq2", "W6TSu8kpW78", "AxZcOmk4nq", "E1v5Da", "oHP8WOtdGa", "WONcOKu8ha", 'jMxcJHW', "mSkkiSkiWRK", "WPRdOCoxD8kK", "4Bsa4BsEW47HT6ZHTzy", "4Bw/WR/QNl7iMUg1QG", 'W5rEW6ZdJd4', "W4JcNhu", "tSksmsTA", 'g2ldSSoEnq', "WOtcSWZdG1e", "vmoUW5a", "kaWXpvu", "m0/dM8kZEG", "atq5WPtdOG", "t3hcU8kpba", "W4WlWQldLmoO", 'WQDiWQ3dRYq', "lXC3nvC", "kwRcNazJ", "pXeIifC", "DCoFvMbq", "WOxcUs/cMCoS", "WRxdMmkJ4Ps34PAB", "WPdcVdVcV8kV", "E/cDMjxcLmksW4m", "uJC7W6ql", "r8klEJldOG", "lmkYjq", "emoTDG", "wSoc4PsY4PEe4PAL", "WPFcJHpdPZG", "lmkahbjw", "n3dcIrzF", "tbertg8", "gCoVv8opW6e", "W4qbWQhcJ8k9", "W6r+W4JdNMS", "WRxcM1O2WRm", "fCkAjG", "WP/dMmkPumk7", "WQ/cMMCSWRO", "WRXVWRddLJC", 'W68IWR1vsG', "4PABWRFcV8ouW5m", "W7Dwk05E", "W500f0VdUq", "WOVcHXu", 'W5KzW657wa', 'W5ddQrKtWR8', "F+kDHEkxPEkxLokuJG", "A3hcNYmI", "WPVcPCoNFCkL", "at4F", "WRBcJ8oIxCkA", 'CEkwSwnUeq', "W5noW47dVcy", "hf3dGGK", "bmoUWQJcHSog", 'WPHFWQVdJWq', "wSkhW60DWOG", "4Pw04Pwm4PwZ4PEN4PA4", 'E8k4Ervg', "oCkKlmktW5C", "cxHAzI0", "z8khAgS", "gvldK3RcRq", "YzRkUUg1TSke4BEh", '4PAv4PsgbSoXza', "W6tcKWxcPCkr", "Yi/HTOCV4BA+4BA5", 'g3DdWRnuy2xcTSkEWQ0BrmoAW4K', "hcmaWPpdLG", "CSorthf2", 'pmkrW6S9WQa', "WPrhW6tdHqW", "WONcHN1gW5m", "DHj/C3y", "mGm8WRpdVq", 'AM/cGCkdna', "W4OmjVgbO5xcNW", "zHH8j14", "WQK5aSoDW58", "BmktW7COWQS", "WQ/WVQQHW5ddKmo0", "CMRcJa", "WOPUW63cQSkT", 'lwlcJq54', 'tCkGo8oPW4W', "W57cUmoGkmo6", "4PAkehZcMSoQ", "uUkxSCkAmSoM", "avpdSmk1eq", 'W5rEW6ldOwS', 'ew7dHmkg', 'WPpcHhTwW6i', "tbWp", 'WQlcJwujWR4', "WQP7WP5OW4i", "W7xIL4pcHdJXJzgt", "u8oEvhvx", "nNxdUwpcJG", "WO54WPLZW5a", "efKEW4xcPa", "WOvBWRq", "W58bWQBdLmo/", "tCklygBdQq", "4PwZghdcQUkuLG", "W44bWR7dGW", "W6dcNWRcT8ks", "W5a+W451Eq", "bmoZmCopW6O", 't2pcNSks', "W7D+xmkoWRW", "W5dcImkoWPNdGW", 'hfZdUwFcOq', "WPVcRrL4W7u", '4PEsdCkjWP9y', "W6jasmkXW5i", 'dmoUDCkgW7y', "ixtcNcbh", "WPRdRCoxWRpcLq", "hghdJ8oxWPe", "w+kxSxdcSdW", "oLJdG8kXFa", "CHJcScJdHG", "WOVdML3dKSog", "sUkuUN14bG", "ufOw", 'ntldPrS+', 'DCoYWPxcQCkB', "ggFdLCkeWQe", "bmoeWQJcRmog", 'd13dRCk9EW', "veztW63cMa", 'scddT184', "FN5wW6JcGW", "FbP4Avi", 'n0pdMSkoWPG', "arrwW7VcJW", "bSk1pbrw", "WRpcIXKGWR0", "gKPkwdZcVJRcMZHNwdtdJJ4", "umkqW63dVG", 'd8kIomkdW6G', "4PwfW6VcRIZdQa", "v07cR2Cd", "WOxcSZpdHMC", "W53cMh0BrG", "W71JxSkitG", "awpdS8kdWQ8", "W77dH8k0W7BdUa", 'WPWebNNdKW', "4Psa4PEU4Pso4Pss4Pwp", "WOOSWQJdKSoI", '4PsC4PEY4PAd4PAt4Psb', 'WOFcVdhcJ8ki', "AIxXHAcK4Ogb8y2dIxRcRq", "DSoxW4dcVSkI", "C8kaW4GvWOi", 'gVcrTktWTjQh8yckL/ctU5G', "W5dILkOZgmk7", "mdxdIX8v", "nHG9WRldQG", "W4lcICkBW7FdLW", 'c8oyW4FcMmkC', "i3/dHSkLWQq", 'W40nWQVdMq', "W7XcmLLb", 'W7D9eSkRW7K', "utjWWOa2", "E3FdIY0I", "WO1hWQNdKWS", "WO5oWQBdG00", "CMNcMG", "4OgpWQdHTiRHTQhHTP0", "WPFcUcVcJSkT", "4PE/4PAaFokwPSoQ", "wYZcJ8ogW60", "dIKvjxi", "B8k2FHD3", "nwxdMSkZWQK", "WR7cTZ7cHmkkWQtcIeldQCoga2u5", "WONcHNC", 'W4mjWQJcMSkN', "4Bw4YAZHTzPI4Bsn", "vCo4W5tcH8ot"];
  _0x2810 = function () {
    return _0x109cf6;
  };
  return _0x2810();
}
const _0x337cae = {};
function _0x4ccd35(_0x154a06, _0x38be2b, _0x340128, _0x2c35df, _0x590d89) {
  return _0x65d3(_0x2c35df - 0x137, _0x38be2b);
}
function _0x65d3(_0x222738, _0x119541) {
  const _0x324188 = _0x2810();
  _0x65d3 = function (_0x3ba48e, _0x4611) {
    _0x3ba48e = _0x3ba48e - 0x185;
    let _0xb96025 = _0x324188[_0x3ba48e];
    if (_0x65d3.EajhCq === undefined) {
      var _0xbe8f56 = function (_0x24487c) {
        let _0x488111 = '';
        let _0x1ddd33 = '';
        let _0x20bbff = 0x0;
        let _0x290291;
        let _0x50cdf5;
        for (let _0x18125c = 0x0; _0x50cdf5 = _0x24487c.charAt(_0x18125c++); ~_0x50cdf5 && (_0x290291 = _0x20bbff % 0x4 ? _0x290291 * 0x40 + _0x50cdf5 : _0x50cdf5, _0x20bbff++ % 0x4) ? _0x488111 += String.fromCharCode(0xff & _0x290291 >> (-0x2 * _0x20bbff & 0x6)) : 0x0) {
          _0x50cdf5 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(_0x50cdf5);
        }
        let _0x4e5b5d = 0x0;
        for (let _0x377736 = _0x488111.length; _0x4e5b5d < _0x377736; _0x4e5b5d++) {
          _0x1ddd33 += '%' + ('00' + _0x488111.charCodeAt(_0x4e5b5d).toString(0x10)).slice(-0x2);
        }
        return decodeURIComponent(_0x1ddd33);
      };
      const _0x487945 = function (_0x1d99cf, _0x46b4ed) {
        let _0x2e53a2 = [];
        let _0x44dd96 = 0x0;
        let _0x5c82cf;
        let _0x14ff41 = '';
        _0x1d99cf = _0xbe8f56(_0x1d99cf);
        let _0x58f02e;
        for (_0x58f02e = 0x0; _0x58f02e < 0x100; _0x58f02e++) {
          _0x2e53a2[_0x58f02e] = _0x58f02e;
        }
        for (_0x58f02e = 0x0; _0x58f02e < 0x100; _0x58f02e++) {
          _0x44dd96 = (_0x44dd96 + _0x2e53a2[_0x58f02e] + _0x46b4ed.charCodeAt(_0x58f02e % _0x46b4ed.length)) % 0x100;
          _0x5c82cf = _0x2e53a2[_0x58f02e];
          _0x2e53a2[_0x58f02e] = _0x2e53a2[_0x44dd96];
          _0x2e53a2[_0x44dd96] = _0x5c82cf;
        }
        _0x58f02e = 0x0;
        _0x44dd96 = 0x0;
        for (let _0x9836d3 = 0x0; _0x9836d3 < _0x1d99cf.length; _0x9836d3++) {
          _0x58f02e = (_0x58f02e + 0x1) % 0x100;
          _0x44dd96 = (_0x44dd96 + _0x2e53a2[_0x58f02e]) % 0x100;
          _0x5c82cf = _0x2e53a2[_0x58f02e];
          _0x2e53a2[_0x58f02e] = _0x2e53a2[_0x44dd96];
          _0x2e53a2[_0x44dd96] = _0x5c82cf;
          _0x14ff41 += String.fromCharCode(_0x1d99cf.charCodeAt(_0x9836d3) ^ _0x2e53a2[(_0x2e53a2[_0x58f02e] + _0x2e53a2[_0x44dd96]) % 0x100]);
        }
        return _0x14ff41;
      };
      _0x65d3.kbtbfA = _0x487945;
      _0x222738 = arguments;
      _0x65d3.EajhCq = true;
    }
    const _0x5c524e = _0x324188[0x0];
    const _0x302992 = _0x3ba48e + _0x5c524e;
    const _0x3135a = _0x222738[_0x302992];
    if (!_0x3135a) {
      if (_0x65d3.vtRguU === undefined) {
        _0x65d3.vtRguU = true;
      }
      _0xb96025 = _0x65d3.kbtbfA(_0xb96025, _0x4611);
      _0x222738[_0x302992] = _0xb96025;
    } else {
      _0xb96025 = _0x3135a;
    }
    return _0xb96025;
  };
  return _0x65d3(_0x222738, _0x119541);
}
_0x337cae.pattern = "antispam";
_0x337cae.alias = ['as', "spamoff"];
_0x337cae.react = '📚';
_0x337cae.desc = "if anyone send a spam, use this immediately.";
_0x337cae.category = "main";
function _0x4254ef(_0x5c3a91, _0x2116b1, _0x3f66d8, _0x38c1c9, _0x407938) {
  return _0x65d3(_0x5c3a91 - 0x23f, _0x2116b1);
}
_0x337cae.use = '.antispam';
_0x337cae.filename = __filename;
function _0x1ef509(_0x2b63cc, _0x26de09, _0x942baa, _0x457794, _0x26195a) {
  return _0x65d3(_0x26195a + 0x31, _0x457794);
}
cmd(_0x337cae, async (_0x483386, _0x4c7527, _0x4a416d, {
  from: _0x5d1fc4,
  l: _0x589a71,
  quoted: _0x6384ba,
  body: _0x2cf662,
  isCmd: _0x5a758f,
  command: _0x52506f,
  args: _0x24543c,
  q: _0x5e2030,
  isGroup: _0x169d99,
  sender: _0x77a87d,
  senderNumber: _0x5e58bc,
  botNumber2: _0x3f81b4,
  botNumber: _0x2bdc75,
  pushname: _0x47f8a7,
  isMe: _0x34e03a,
  isOwner: _0x52ede2,
  groupMetadata: _0x2af2ae,
  groupName: _0x219c86,
  participants: _0x34a2a0,
  groupAdmins: _0x302a7f,
  isBotAdmins: _0x231463,
  isAdmins: _0x1edd4f,
  reply: _0x310e5a
}) => {
  try {
    _0x310e5a("\n🚮clear chat\n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n 🚮clear chat\n");
  } catch (_0x521562) {
    _0x589a71(_0x521562);
  }
});
const axios = require("axios");
cmd({
  'pattern': "pair",
  'react': "🆗️",
  'desc': "Pair with the bot by entering a phone number.",
  'category': "other"
}, async (_0x28c56d, _0x444b88, _0x1130f6) => {
  const _0x1ad492 = _0x1130f6.body.trim();
  if (_0x1ad492.startsWith('.pair')) {
    const _0x343fd0 = _0x1ad492.split(" ");
    const _0x10a649 = _0x343fd0[0x1];
    if (_0x10a649) {
      try {
        const _0x12eb38 = await fetchPairingCode(_0x10a649);
        await _0x28c56d.sendMessage(_0x1130f6.chat, {
          'text': '' + _0x12eb38
        });
      } catch (_0x528b4d) {
        console.error("Error fetching pairing code:", _0x528b4d);
        await _0x28c56d.sendMessage(_0x1130f6.chat, {
          'text': "Failed to fetch pairing code. Please try again."
        });
      }
    } else {
      await _0x28c56d.sendMessage(_0x1130f6.chat, {
        'text': "Please provide a valid phone number after the .pair command."
      });
    }
  }
});
async function fetchPairingCode(_0x55888f) {
  try {
    const _0x183fbe = await axios.get("https://keith-sessions-pi5z.onrender.com/code?number=" + _0x55888f);
    if (_0x183fbe.data && _0x183fbe.data.code) {
      return _0x183fbe.data.code;
    } else {
      throw new Error("Invalid response from the API.");
    }
  } catch (_0x44a7d8) {
    console.error("Error fetching code from API:", _0x44a7d8);
    throw _0x44a7d8;
  }
}
