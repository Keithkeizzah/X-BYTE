(function (_0x59462e, _0x289a0e) {
  const _0x57221e = _0x59462e();
  while (true) {
    try {
      const _0x49839f = -parseInt(_0x27ab(0x362, ']EPe')) / 0x1 * (parseInt(_0x27ab(0x5c9, "[!F]")) / 0x2) + -parseInt(_0x27ab(0x6e0, "yV8z")) / 0x3 * (parseInt(_0x27ab(0x2e2, 'IVTE')) / 0x4) + parseInt(_0x27ab(0x179, "eLs!")) / 0x5 + -parseInt(_0x27ab(0x223, 'BEp&')) / 0x6 * (parseInt(_0x27ab(0x9b1, "THI2")) / 0x7) + -parseInt(_0x27ab(0x580, "rpHS")) / 0x8 * (parseInt(_0x27ab(0xb29, "tRJd")) / 0x9) + -parseInt(_0x27ab(0x212, "eLs!")) / 0xa + parseInt(_0x27ab(0x7ac, "uh]s")) / 0xb;
      if (_0x49839f === _0x289a0e) {
        break;
      } else {
        _0x57221e.push(_0x57221e.shift());
      }
    } catch (_0x1d350b) {
      _0x57221e.push(_0x57221e.shift());
    }
  }
})(_0x2484, 0xa3370);
const config = require("../settings");
const {
  cmd,
  commands
} = require('../lib/command');
const axios = require('axios');
const fetch = require("node-fetch");
const fg = require("api-dylux");
var {
  subsearch,
  subdl
} = require("@sl-code-lords/si-subdl");
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  fetchJson
} = require("../lib/functions");
const {
  igstalker,
  tikstalk
} = require('../lib/stalker');
const uptime = process.uptime();
const hours = Math.floor(uptime % 0x15180 / 0xe10);
const minutes = Math.floor(uptime % 0xe10 / 0x3c);
const seconds = Math.floor(uptime % 0x3c);
var desct = '';
if (config.LANG === "URDU") {
  desct = "Iss command say ap TikTok username ki details ley sakty hain.";
} else {
  desct = "It gives details of given tiktok username.";
}
var needus = '';
if (config.LANG === "URDU") {
  needus = "*Please TikTok ka username bhi likhyein !*";
} else {
  needus = "*Please give me a tiktok username !*";
}
var cantf = '';
if (config.LANG === 'URDU') {
  cantf = "*Mujhe ye user TikTok pe nahi mila!*";
} else {
  cantf = "*I cant find this user on tiktok !*";
}
var desct1 = '';
if (config.LANG === "URDU") {
  desct1 = "Iss command say ap diye gaye Instagram ke username ki details nikal sakty hain.";
} else {
  desct1 = "It gives details of given instagram username.";
}
var needus1 = '';
if (config.LANG === "URDU") {
  needus1 = "*Please Instagram ka username bhi likhyein  !*";
} else {
  needus1 = "*Please give me a instagram username !*";
}
var cantf1 = '';
if (config.LANG === "URDU") {
  cantf1 = "*Mujhe ye user Instagram pe nahi mila!*";
} else {
  cantf1 = "*I cant find this user on instagram !*";
}
const _0x3f730d = {
  'pattern': 'lyrics',
  'alias': ['lyric'],
  'react': "🎙️",
  'desc': "It gives lyrics of given song name.",
  'category': "search",
  'use': ".lyric <song name>",
  'filename': __filename
};
cmd(_0x3f730d, async (_0x4f2907, _0xd4182c, _0x114bcf, {
  from: _0x94da88,
  l: _0x58078b,
  quoted: _0x150512,
  body: _0x33c7cb,
  isCmd: _0x321736,
  command: _0x4674a8,
  args: _0x27f79c,
  q: _0x1157fd,
  isGroup: _0x4f5107,
  sender: _0x3f87df,
  senderNumber: _0xda73c0,
  botNumber2: _0x5d75eb,
  botNumber: _0x18e098,
  pushname: _0x50caf0,
  isMe: _0x838ec7,
  isOwner: _0x241553,
  groupMetadata: _0x5b187e,
  groupName: _0x3e3d12,
  participants: _0x256442,
  groupAdmins: _0x1f0d7b,
  isBotAdmins: _0x4b09eb,
  isAdmins: _0x2c9e28,
  reply: _0x1561ab
}) => {
  try {
    if (!_0x1157fd) {
      return _0x1561ab("*Please give me a song name* !");
    }
    const _0x2ebe67 = await fetchJson('https://api.sdbots.tech/lyrics?song=' + _0x1157fd);
    if (_0x2ebe67.lyrics) {
      _0x1561ab("\nX - B Y T E\n\n   *LYRICS SEARCH*\n   \n*" + _0x2ebe67.title + "*\n_" + _0x2ebe67.artist + "_\n\n\n" + _0x2ebe67.lyrics + "\n\n└───────────◉");
    } else {
      _0x1561ab("I cant find lyrics of this song !");
    }
  } catch (_0x44c2e2) {
    _0x1561ab("I cant find lyrics of this song !");
    _0x58078b(_0x44c2e2);
  }
});
const _0x5398f3 = {
  'pattern': 'ip',
  'alias': ["ipstalk", "sip", "searchip", "ip-locator"],
  'react': '🌐',
  'desc': "It gives details of given ip.",
  'category': 'search',
  'use': ".ipstalk 112.134.193.130",
  'filename': __filename
};
cmd(_0x5398f3, async (_0x7aec61, _0x27eae8, _0x37dd65, {
  from: _0x5301cc,
  l: _0x181e35,
  quoted: _0x33b9b2,
  body: _0x344128,
  isCmd: _0x4ddfb3,
  command: _0x572be8,
  args: _0x2fd706,
  q: _0x52b64f,
  isGroup: _0x320a3e,
  sender: _0x10e36b,
  senderNumber: _0x216b91,
  botNumber2: _0x112b61,
  botNumber: _0x23ee00,
  pushname: _0x6337e7,
  isMe: _0x5a7b6b,
  isOwner: _0x266b0e,
  groupMetadata: _0x56fd47,
  groupName: _0x139225,
  participants: _0xb8dd35,
  groupAdmins: _0x2ee5b2,
  isBotAdmins: _0x1b57b3,
  isAdmins: _0x5ac180,
  reply: _0x1a2d7a
}) => {
  try {
    if (!_0x52b64f) {
      return _0x1a2d7a("*\n*Please give me a ip !*");
    }
    if (!_0x52b64f.includes('.')) {
      return _0x1a2d7a("**Please give me a ip !*");
    }
    const _0x438082 = await fetchJson("https://api.techniknews.net/ipgeo/" + _0x52b64f);
    const _0x47267c = "𝗛𝗨𝗡𝗖𝗛𝗢-𝗠𝗗\n    *𝗜𝗣 𝗦𝗧𝗔𝗟𝗞𝗘𝗥*\n    \n*🔴 IP :* ```" + _0x52b64f + "```\n" + '*✅' + "STATUS :" + "* ```" + _0x438082.status + "```\n" + '*🌐' + "CONTINENT :" + "* ```" + _0x438082.continent + "```\n" + "*🗺" + "COUNTRY :" + "* ```" + _0x438082.country + "```\n" + '*🔢' + "COUNTRYCODE :" + "* ```" + _0x438082.countryCode + "```\n" + '*🌍' + "REGIONNAME :" + "* ```" + _0x438082.regionName + "```\n" + "*🚩" + "CITY :" + "* ```" + _0x438082.city + "```\n" + "*🏛" + "ZIP :" + "* ```" + _0x438082.zip + "```\n" + "*💸" + "CURRENCY :" + "* ```" + _0x438082.currency + "```\n" + "*📡" + "ISP :" + "* ```" + _0x438082.isp + "```\n" + '*🛡' + "PROXY :" + "* ```" + _0x438082.proxy + "```\n" + "*📱" + "MOBILE :" + "* ```" + _0x438082.mobile + "```\n\n" + "└───────────◉";
    const _0x432ef7 = {
      'text': _0x47267c
    };
    const _0xfcbd2a = {
      'quoted': _0x27eae8
    };
    await _0x7aec61.sendMessage(_0x5301cc, _0x432ef7, _0xfcbd2a);
  } catch (_0x554ffa) {
    _0x1a2d7a("I cant find this ip !");
    _0x181e35(_0x554ffa);
  }
});
const _0x9f7f6f = {
  'pattern': "igstalk",
  'alias': ["instastalk", "instagramstalk", 'igstalker'],
  'react': '📷',
  'desc': desct1,
  'category': 'search',
  'use': ".igstalk <instagram username>",
  'filename': __filename
};
cmd(_0x9f7f6f, async (_0x25bdc1, _0x40dd35, _0x5675a9, {
  from: _0x7045d6,
  l: _0x40b73d,
  quoted: _0x4e65d7,
  body: _0x2a3230,
  isCmd: _0x5c5e05,
  command: _0x5cd904,
  args: _0xa5cd2e,
  q: _0x1df3f1,
  isGroup: _0x2fc02d,
  sender: _0x2741c2,
  senderNumber: _0x4e7ff3,
  botNumber2: _0x455cd0,
  botNumber: _0x395a11,
  pushname: _0xb232f4,
  isMe: _0x2f70ea,
  isOwner: _0x2ee567,
  groupMetadata: _0x4ceed4,
  groupName: _0x58928e,
  participants: _0x5e47a6,
  groupAdmins: _0x5c3016,
  isBotAdmins: _0x160790,
  isAdmins: _0x56d420,
  reply: _0x1364a6
}) => {
  try {
    if (!_0x1df3f1) {
      return _0x1364a6(needus1);
    }
    const _0x53090e = await igstalker(_0x1df3f1);
    const _0x5aeadc = "𝗛𝗜𝗡𝗖𝗛𝗢-𝗠𝗗\n\n    *𝗜𝗚 𝗦𝗧𝗔𝗟𝗞𝗘𝗥*\n\n*🆔 Username:* " + _0x53090e.username + "\n\n*👤 Name:* " + _0x53090e.fullname + "\n\n*🐾 Bio:* " + _0x53090e.bio + "\n\n*🚶🏽 Following:* " + _0x53090e.following + "\n\n*👥 Followers:* " + _0x53090e.followers + "\n\n*📬 Post count:* " + _0x53090e.post + "\n\n└───────────◉";
    const _0x3c7d8b = {
      'url': _0x53090e.profile
    };
    const _0x425883 = {
      'image': _0x3c7d8b,
      'caption': _0x5aeadc
    };
    const _0x1b77d3 = {
      'quoted': _0x40dd35
    };
    await _0x25bdc1.sendMessage(_0x7045d6, _0x425883, _0x1b77d3);
  } catch (_0xb7e1b) {
    _0x1364a6(cantf1);
    _0x40b73d(_0xb7e1b);
  }
});
function _0x4b859d(_0x4ed3f9, _0x107fc3, _0x3cd63e, _0x53c065, _0x2dd6a9) {
  return _0x27ab(_0x4ed3f9 - 0x36f, _0x53c065);
}
const _0x58cecf = {
  'pattern': "stiktok",
  'alias': ["tiktokstalk", "stalktiktok", 'tikstalk'],
  'react': '📱',
  'desc': desct,
  'category': "search",
  'use': ".stiktok <tiktok username>",
  'filename': __filename
};
cmd(_0x58cecf, async (_0x36efec, _0x3a3bc6, _0x2137eb, {
  from: _0x43497d,
  l: _0x30dbfe,
  quoted: _0x19f987,
  body: _0x5ce18e,
  isCmd: _0x1c97d6,
  command: _0x295a17,
  args: _0x33c9a9,
  q: _0xf0bb80,
  isGroup: _0x558c80,
  sender: _0x4b469f,
  senderNumber: _0xfec524,
  botNumber2: _0x95fc2a,
  botNumber: _0x153f1c,
  pushname: _0x445385,
  isMe: _0x470089,
  isOwner: _0x27daf9,
  groupMetadata: _0x4b9912,
  groupName: _0x5d612a,
  participants: _0x21ff3c,
  groupAdmins: _0x1681e9,
  isBotAdmins: _0x4a143b,
  isAdmins: _0x192e10,
  reply: _0xe3f4a4
}) => {
  try {
    if (!_0xf0bb80) {
      return _0xe3f4a4(needus);
    }
    const _0x8df943 = await tikstalk(_0x33c9a9[0x0]);
    const _0x19264e = "HUNCHO\n\n    *TIKTOK STALKER*\n\n*🆔 Username:* " + _0x8df943.username + "\n\n*👤 Name:* " + _0x8df943.name + "\n\n*🐾 Bio:* " + _0x8df943.bio + "\n\n*🚶🏽 Following:* " + _0x8df943.following + "\n\n*👥 Followers:* " + _0x8df943.followers + "\n\n*💌 Likes:* " + _0x8df943.likes + "\n\n└───────────◉";
    const _0x5c5bcb = {
      'url': _0x8df943.img
    };
    const _0x1db6f8 = {
      'image': _0x5c5bcb,
      'caption': _0x19264e
    };
    const _0x3f2873 = {
      'quoted': _0x3a3bc6
    };
    await _0x36efec.sendMessage(_0x43497d, _0x1db6f8, _0x3f2873);
  } catch (_0x327240) {
    _0xe3f4a4(cantf);
    _0x30dbfe(_0x327240);
  }
});
const _0x447f24 = {
  'pattern': "midjourney",
  'react': '🧠',
  'alias': ["midimage"],
  'desc': "Midjourney Image generator",
  'category': "search",
  'use': ".apk < Target >",
  'filename': __filename
};
cmd(_0x447f24, async (_0x54d2ce, _0x41097d, _0x1ffcb9, {
  from: _0x3949a2,
  l: _0xe79460,
  quoted: _0x131c76,
  body: _0x3591ec,
  isCmd: _0x4288aa,
  command: _0x125d02,
  args: _0x52062a,
  q: _0x139566,
  isGroup: _0x5c74f5,
  sender: _0x3f66fb,
  senderNumber: _0x1a2a4e,
  botNumber2: _0x5764da,
  botNumber: _0x5939f8,
  pushname: _0x144733,
  isMe: _0x219704,
  isOwner: _0x146ff4,
  groupMetadata: _0x43dbc6,
  groupName: _0x2b15e8,
  participants: _0x191859,
  groupAdmins: _0x4fce1c,
  isBotAdmins: _0x11bb70,
  isCreator: _0x2db87e,
  isDev: _0x4fb94a,
  isAdmins: _0x360dea,
  reply: _0x292cb4
}) => {
  try {
    const _0x137a5f = await getBuffer("https://vihangayt.me/tools/midjourney?q=" + _0x139566);
    const _0x53d39a = {
      'image': _0x137a5f,
      'caption': "☘ *Generated by X-BYTE*"
    };
    const _0x3c3c7a = {
      'quoted': _0x41097d
    };
    await _0x54d2ce.sendMessage(_0x3949a2, _0x53d39a, _0x3c3c7a);
  } catch (_0x143f5d) {
    _0x292cb4("⛔ *Error accurated !!*\n\n" + _0x143f5d);
    _0xe79460(_0x143f5d);
  }
});
const _0x3f7f6c = {
  'pattern': "npmjs",
  'react': '🥏',
  'desc': "Developing command.",
  'category': "search",
  'use': '.checkjson',
  'filename': __filename
};
cmd(_0x3f7f6c, async (_0x3db1f0, _0x54d376, _0x4dddaf, {
  from: _0x450ecf,
  l: _0x41bba9,
  quoted: _0x6efbf4,
  body: _0x3cfef2,
  isCmd: _0x22e16f,
  command: _0x35a35d,
  args: _0x3b5d69,
  q: _0x214298,
  isGroup: _0x2f4731,
  sender: _0x587385,
  senderNumber: _0x7aba20,
  botNumber2: _0x5a35cc,
  botNumber: _0x3ef655,
  pushname: _0x13ba09,
  isMe: _0x1368a4,
  isOwner: _0xb73ff1,
  groupMetadata: _0x3f3886,
  groupName: _0x48ba43,
  participants: _0x284e28,
  groupAdmins: _0x1c9fd0,
  isBotAdmins: _0x33efc5,
  isCreator: _0x3ab238,
  isDev: _0x49466d,
  isAdmins: _0xe736d5,
  reply: _0x5c5a8c
}) => {
  try {
    if (!_0x214298) {
      return _0x5c5a8c("❗ *Please enter Valid npm Name*");
    }
    const _0xa24e06 = await fg.npmSearch(_0x214298);
    let _0x32c881 = "\nℹ️ *HUNCHO  NPM Informations ( From - npmjs.com )*\n\n Name -:  *" + _0xa24e06.name + "*\n\n Description  -:  " + _0xa24e06.description + "\n\n Version   -:  " + _0xa24e06.version + "\n\n Url  -:  " + _0xa24e06.packageLink + "\n\n Latest Updated on  -:  " + _0xa24e06.publishedDate + "\n\n Home Page  -:  " + _0xa24e06.homepage + "\n \n License  -:  " + _0xa24e06.license + "\n \n Keywords :-\n";
    for (let _0x4611d7 of _0xa24e06.keywords) {
      _0x32c881 += _0x4611d7 + "  ";
    }
    const _0xbd911f = _0x32c881 + "\n\n\n*ʜᴜɴᴄʜᴏ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋᴇɪᴛʜᴋᴇɪᴢᴢᴀʜ*";
    const _0x4aa71a = {
      'url': "https://telegra.ph/file/1509c123f9d160fd4a8cb.jpg"
    };
    const _0x3a957d = {
      'image': _0x4aa71a,
      'caption': _0xbd911f
    };
    const _0x432739 = {
      'quoted': _0x54d376
    };
    await _0x3db1f0.sendMessage(_0x450ecf, _0x3a957d, _0x432739);
  } catch (_0x28b0ad) {
    _0x5c5a8c("⛔ *Error accurated !!*" + _0x28b0ad);
    _0x41bba9(_0x28b0ad);
  }
});
const _0x105e16 = {
  'pattern': 'weather',
  'react': '🎙️',
  'desc': "To see info of weather",
  'category': 'search',
  'use': '.weather',
  'filename': __filename
};
cmd(_0x105e16, async (_0x153019, _0x43824a, _0x1ad8af, {
  from: _0x1a666d,
  l: _0x45dee1,
  prefix: _0x343e03,
  quoted: _0x35f31,
  body: _0x204c05,
  isCmd: _0x527b87,
  command: _0x288b13,
  args: _0x3bf30d,
  q: _0x27fbff,
  isGroup: _0x211777,
  sender: _0x17f87b,
  senderNumber: _0x4c42d4,
  botNumber2: _0x57840b,
  botNumber: _0x3cab5d,
  pushname: _0x5498c6,
  isMe: _0x5756b8,
  isOwner: _0xaad6a9,
  groupMetadata: _0x459609,
  groupName: _0x4f160e,
  participants: _0x4704d5,
  groupAdmins: _0x36553a,
  isBotAdmins: _0x4f34bd,
  isAdmins: _0x3ef356,
  reply: _0x2b176c
}) => {
  try {
    if (!_0x27fbff) {
      return _0x2b176c("What location?");
    }
    let _0xd5735c = _0x27fbff.split(" ")[0x0];
    let _0x5f41ae = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + _0xd5735c + "&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en");
    let _0x21d0ca = '';
    _0x21d0ca += "*🗺️Weather of  " + _0xd5735c + "*\n\n";
    _0x21d0ca += "*Weather:-* " + _0x5f41ae.data.weather[0x0].main + "\n";
    _0x21d0ca += "*Description:-* " + _0x5f41ae.data.weather[0x0].description + "\n";
    _0x21d0ca += "*Avg Temp:-* " + _0x5f41ae.data.main.temp + "\n";
    _0x21d0ca += "*Feels Like:-* " + _0x5f41ae.data.main.feels_like + "\n";
    _0x21d0ca += "*Pressure:-* " + _0x5f41ae.data.main.pressure + "\n";
    _0x21d0ca += "*Humidity:-* " + _0x5f41ae.data.main.humidity + "\n";
    _0x21d0ca += "*Humidity:-* " + _0x5f41ae.data.wind.speed + "\n";
    _0x21d0ca += "*Latitude:-* " + _0x5f41ae.data.coord.lat + "\n";
    _0x21d0ca += "*Longitude:-* " + _0x5f41ae.data.coord.lon + "\n";
    _0x21d0ca += "*Country:-* " + _0x5f41ae.data.sys.country + "\n";
    const _0x1e5ac6 = {
      'text': _0x21d0ca
    };
    const _0x221839 = {
      'quoted': _0x43824a
    };
    _0x153019.sendMessage(_0x1a666d, _0x1e5ac6, _0x221839);
    const _0x3e7605 = {
      'text': '✅',
      'key': _0x43824a.key
    };
    const _0x237de0 = {
      'react': _0x3e7605
    };
    await _0x153019.sendMessage(_0x1a666d, _0x237de0);
  } catch (_0x55f3e9) {
    _0x2b176c();
    _0x45dee1(_0x55f3e9);
  }
});
const _0x2e8453 = {
  'pattern': "gitstalk",
  'react': "🎙️",
  'desc': "To search github info",
  'category': "search",
  'use': ".gitstalk <github user name>",
  'filename': __filename
};
cmd(_0x2e8453, async (_0x549121, _0x218ac4, _0x5bc6dd, {
  from: _0xc2e9b3,
  l: _0x4f10da,
  prefix: _0x5b6401,
  quoted: _0x2bc764,
  body: _0x43b51b,
  isCmd: _0x2266e7,
  command: _0x157012,
  args: _0x487691,
  q: _0x5a3a3d,
  isGroup: _0x1c7415,
  sender: _0x5e7882,
  senderNumber: _0x2451a9,
  botNumber2: _0x432a58,
  botNumber: _0x14d6c2,
  pushname: _0x527c6d,
  isMe: _0x1c5c7a,
  isOwner: _0x192759,
  groupMetadata: _0x190cd3,
  groupName: _0x787191,
  participants: _0x24ca90,
  groupAdmins: _0x3780d9,
  isBotAdmins: _0x490e8d,
  isAdmins: _0xa7fa23,
  reply: _0x560bc3
}) => {
  try {
    if (!_0x487691[0x0]) {
      return _0x5bc6dd.reply("Mention a GitHub username to stalk.");
    }
    const _0x4528b2 = _0x487691[0x0];
    const _0xbaf54d = await axios.get('https://api.github.com/users/' + _0x4528b2);
    const _0x1f69da = _0xbaf54d.data;
    if (_0xbaf54d.status !== 0xc8) {
      return _0x218ac4.reply("❌ GitHub user not found.");
    }
    let _0x258797 = "🌟 *GitHub Profile - @" + _0x1f69da.login + "*\n\n";
    _0x258797 += "  ◦  *Name*: " + (_0x1f69da.name || 'N/A') + "\n";
    _0x258797 += "  ◦  *Username*: @" + _0x1f69da.login + "\n";
    _0x258797 += "  ◦  *Bio*: " + (_0x1f69da.bio || "N/A") + "\n";
    _0x258797 += "  ◦  *ID*: " + _0x1f69da.id + "\n";
    _0x258797 += "  ◦  *Node ID*: " + _0x1f69da.node_id + "\n";
    _0x258797 += "  ◦  *Profile URL*: " + _0x1f69da.avatar_url + "\n";
    _0x258797 += "  ◦  *GitHub URL*: " + _0x1f69da.html_url + "\n";
    _0x258797 += "  ◦  *Type*: " + _0x1f69da.type + "\n";
    _0x258797 += "  ◦  *Admin*: " + (_0x1f69da.site_admin ? 'Yes' : 'No') + "\n";
    _0x258797 += "  ◦  *Company*: " + (_0x1f69da.company || "N/A") + "\n";
    _0x258797 += "  ◦  *Blog*: " + (_0x1f69da.blog || "N/A") + "\n";
    _0x258797 += "  ◦  *Location*: " + (_0x1f69da.location || "N/A") + "\n";
    _0x258797 += "  ◦  *Email*: " + (_0x1f69da.email || 'N/A') + "\n";
    _0x258797 += "  ◦  *Public Repositories*: " + _0x1f69da.public_repos + "\n";
    _0x258797 += "  ◦  *Public Gists*: " + _0x1f69da.public_gists + "\n";
    _0x258797 += "  ◦  *Followers*: " + _0x1f69da.followers + "\n";
    _0x258797 += "  ◦  *Following*: " + _0x1f69da.following + "\n";
    _0x258797 += "  ◦  *Created At*: " + _0x1f69da.created_at + "\n";
    _0x258797 += "  ◦  *Updated At*: " + _0x1f69da.updated_at + "\n";
    const _0xbb0aa5 = await fetch("https://api.github.com/users/" + _0x4528b2 + '/repos?per_page=5&sort=stargazers_count&direction=desc');
    const _0xe5486a = await _0xbb0aa5.json();
    if (_0xe5486a.length > 0x0) {
      const _0x4b879c = _0xe5486a.slice(0x0, 0x5);
      const _0xa87cf5 = _0x4b879c.map(_0x2a7c75 => {
        return "  ◦  *Repository*: [" + _0x2a7c75.name + '](' + _0x2a7c75.html_url + ")\n  ◦  *Description*: " + (_0x2a7c75.description || "N/A") + "\n  ◦  *Stars*: " + _0x2a7c75.stargazers_count + "\n  ◦  *Forks*: " + _0x2a7c75.forks;
      });
      const _0x107661 = "📚 *Top Starred Repositories*\n\n" + _0xa87cf5.join("\n\n");
      _0x258797 += "\n\n" + _0x107661;
    } else {
      _0x258797 += "\n\nNo public repositories found.";
    }
    const _0x466d7d = {
      'url': _0x1f69da.avatar_url
    };
    const _0x4c6f7d = {
      'image': _0x466d7d,
      'caption': _0x258797
    };
    await _0x549121.sendMessage(_0x218ac4.chat, _0x4c6f7d, {
      'quoted': _0x218ac4
    });
    const _0x381226 = {
      'text': '✔',
      'key': _0x5bc6dd.key
    };
    const _0x496ef1 = {
      'react': _0x381226
    };
    await _0x549121.sendMessage(_0x5bc6dd.chat, _0x496ef1);
  } catch (_0x53f6b8) {
    console.error("Error fetching GitHub data:", _0x53f6b8);
    const _0x4db915 = {
      'quoted': _0x218ac4
    };
    await _0x549121.sendMessage(_0x5bc6dd.chat, "An error occurred while fetching GitHub data.", _0x4db915);
    const _0x52a591 = {
      'text': '✅',
      'key': _0x218ac4.key
    };
    const _0x37945f = {
      'react': _0x52a591
    };
    await _0x549121.sendMessage(_0xc2e9b3, _0x37945f);
    _0x560bc3();
    _0x4f10da(e);
  }
});
const _0x4d0d68 = {
  'pattern': 'infobot',
  'react': "🎙️",
  'desc': "To see info of bot",
  'category': 'search',
  'use': '.infobot',
  'filename': __filename
};
cmd(_0x4d0d68, async (_0x456cec, _0xaf63bf, _0x3bec17, {
  from: _0x3d6977,
  l: _0x28a352,
  prefix: _0x41dc63,
  quoted: _0x593fda,
  body: _0x1eef65,
  isCmd: _0x2cc705,
  command: _0x2917af,
  args: _0x2c766f,
  q: _0x526d57,
  isGroup: _0x137586,
  sender: _0x212d0e,
  senderNumber: _0x13274f,
  botNumber2: _0x4d7e72,
  botNumber: _0xb962ce,
  pushname: _0x21c33b,
  isMe: _0x59f424,
  isOwner: _0x31e6ef,
  groupMetadata: _0xfc2626,
  groupName: _0x1c0ce5,
  participants: _0x188f73,
  groupAdmins: _0x10f47e,
  isBotAdmins: _0xc0f7e5,
  isAdmins: _0x21390a,
  reply: _0x3d4509
}) => {
  try {
    const _0x1bb8c5 = "\n╭━──━─◈─━─━╮\n│🔖 *Bot Name* : HUNCHO\n│🔖 *Owner Name* : keithkeizzah\n│🔖 \n│🔖 *Prefix* : .\n│🔖 *Runtime* : _*" + hours + "h " + minutes + "m " + seconds + "s*_\n╰━━─━─◈─━─━╯";
    const _0x27cd99 = [".menu", ".ping"];
    _0x456cec.sendPoll(_0xaf63bf.chat, _0x1bb8c5, _0x27cd99);
    const _0x42c605 = {
      'text': '✅',
      'key': _0xaf63bf.key
    };
    const _0x4a7afa = {
      'react': _0x42c605
    };
    await _0x456cec.sendMessage(_0x3d6977, _0x4a7afa);
  } catch (_0x5a26e8) {
    _0x3d4509();
    _0x28a352(_0x5a26e8);
  }
});
const _0x2ae08e = {
  'pattern': "nofind",
  'react': "🎙️",
  'desc': "To see same to the number",
  'category': "search",
  'use': ".nofind",
  'filename': __filename
};
cmd(_0x2ae08e, async (_0x54cf97, _0x2c788a, _0x358f87, {
  from: _0x24079c,
  l: _0x428471,
  prefix: _0x4f14b2,
  quoted: _0x11cceb,
  body: _0x305c36,
  isCmd: _0x5afec8,
  command: _0x4cac0e,
  args: _0xb8372f,
  q: _0x12be33,
  isGroup: _0x4b25aa,
  sender: _0x56255d,
  senderNumber: _0x225274,
  botNumber2: _0x3d2505,
  botNumber: _0x4a7eb0,
  pushname: _0x16b541,
  isMe: _0x5bc229,
  isOwner: _0x2e9e18,
  groupMetadata: _0x189bea,
  groupName: _0x617ec5,
  participants: _0x5a6d39,
  groupAdmins: _0x22117e,
  isBotAdmins: _0x48a326,
  isAdmins: _0x259cc9,
  reply: _0xf062c3
}) => {
  try {
    if (!_0x12be33) {
      throw "Give a number to search";
    }
    if (!_0x12be33.match(/x/g)) {
      throw "*Example: " + (_0x4f14b2 + _0x4cac0e) + " 919142294xxx";
    }
    let _0x5ac51c = _0x12be33.match(/x/g).length;
    let _0x5ce328 = Math.pow(0xa, _0x5ac51c);
    let _0x50e2ec = [];
    for (let _0x3bce0c = 0x0; _0x3bce0c < _0x5ce328; _0x3bce0c++) {
      let _0xaec61d = [..._0x3bce0c.toString().padStart(_0x5ac51c, '0')];
      let _0x40decc = _0x12be33.replace(/x/g, () => _0xaec61d.shift()) + "@s.whatsapp.net";
      if (await _0x54cf97.onWhatsApp(_0x40decc).then(_0x73bbc0 => (_0x73bbc0[0x0] || {}).exists)) {
        let _0x35ed53 = await _0x54cf97.fetchStatus(_0x40decc)["catch"](_0x47bdb6 => {});
        const _0x46c15d = {
          'exists': true,
          'jid': _0x40decc,
          ..._0x35ed53
        };
        _0x50e2ec.push(_0x46c15d);
      } else {
        const _0x12adae = {
          'exists': false,
          'jid': _0x40decc
        };
        _0x50e2ec.push(_0x12adae);
      }
    }
    const _0x2168ba = {
      'text': '✅',
      'key': _0x2c788a.key
    };
    const _0x4e4972 = {
      'react': _0x2168ba
    };
    await _0x54cf97.sendMessage(_0x24079c, _0x4e4972);
  } catch (_0x173ca2) {
    _0xf062c3();
    _0x428471(_0x173ca2);
  }
});
const _0x4f3864 = {
  'pattern': "google",
  'react': "🎙️",
  'desc': "To search infomations",
  'category': "search",
  'use': ".google <search name>",
  'filename': __filename
};
function _0x44feb9(_0x2e5cd2, _0x2baef2, _0x2a8b23, _0x38a6ff, _0x141dbf) {
  return _0x27ab(_0x141dbf + 0x13e, _0x38a6ff);
}
cmd(_0x4f3864, async (_0x541283, _0x1432c8, _0x407351, {
  from: _0x1d7152,
  l: _0x18c5e2,
  prefix: _0xfff70f,
  quoted: _0x13fe0c,
  body: _0xb7cc14,
  isCmd: _0x62370,
  command: _0x4ca682,
  args: _0x540668,
  q: _0x57fa3c,
  isGroup: _0x42ac7b,
  sender: _0x27a7f6,
  senderNumber: _0x1b9165,
  botNumber2: _0x4d6bc6,
  botNumber: _0x3b5f93,
  pushname: _0x1d2495,
  isMe: _0xf56924,
  isOwner: _0x52978c,
  groupMetadata: _0x102195,
  groupName: _0x4289ee,
  participants: _0x5d5dbc,
  groupAdmins: _0x567fd9,
  isBotAdmins: _0x28e877,
  isAdmins: _0x8f5d94,
  reply: _0x34b3c9
}) => {
  try {
    if (!_0x57fa3c) {
      throw "Example : " + (_0xfff70f + _0x4ca682) + " what is a bot";
    }
    let _0x6afcd9 = require("google-it");
    const _0x408fbb = {
      'query': _0x57fa3c
    };
    _0x6afcd9(_0x408fbb).then(_0x495b02 => {
      let _0x137553 = "Google Search From : " + _0x57fa3c + "\n\n";
      for (let _0x2e99c1 of _0x495b02) {
        _0x137553 += "⭔ *Title* : " + _0x2e99c1.title + "\n";
        _0x137553 += "⭔ *Description* : " + _0x2e99c1.snippet + "\n";
        _0x137553 += "⭔ *Link* : " + _0x2e99c1.link + "\n\n────────────────────────\n\n";
      }
      _0x1432c8.reply(_0x137553);
    });
    let _0x1f2d9a = [{
      'name': "cta_url",
      'buttonParamsJson': JSON.stringify({
        'display_text': "see in google",
        'url': _0x57fa3c,
        'merchant_url': _0x57fa3c
      })
    }, {
      'name': "quick_reply",
      'buttonParamsJson': JSON.stringify({
        'display_text': "restart again",
        'id': ".google " + _0x57fa3c
      })
    }];
    const _0x3fce54 = {
      'image': "https://telegra.ph/file/497a6d76131059588e9e2.jpg",
      'header': '',
      'footer': config.FOOTER,
      'body': "HUNCHO  GOOGLE SEARCH"
    };
    return await _0x541283.sendButtonMessage(_0x1d7152, _0x1f2d9a, _0x407351, _0x3fce54);
    const _0x4fc589 = {
      'text': '✅',
      'key': _0x1432c8.key
    };
    const _0x38bdfa = {
      'react': _0x4fc589
    };
    await _0x541283.sendMessage(_0x1d7152, _0x38bdfa);
  } catch (_0x2897ec) {
    _0x34b3c9();
    _0x18c5e2(_0x2897ec);
  }
});
function _0x27ab(_0x1c922a, _0x403653) {
  const _0x2fafd7 = _0x2484();
  _0x27ab = function (_0x19c90b, _0x1d3ed1) {
    _0x19c90b = _0x19c90b - 0xfd;
    let _0xe33800 = _0x2fafd7[_0x19c90b];
    if (_0x27ab.QCXRSa === undefined) {
      var _0x3eead9 = function (_0x5201eb) {
        let _0x4a5a71 = '';
        let _0x111e48 = '';
        let _0x2efe50 = 0x0;
        let _0x3acf2d;
        let _0x26d9b7;
        for (let _0x14a6c2 = 0x0; _0x26d9b7 = _0x5201eb.charAt(_0x14a6c2++); ~_0x26d9b7 && (_0x3acf2d = _0x2efe50 % 0x4 ? _0x3acf2d * 0x40 + _0x26d9b7 : _0x26d9b7, _0x2efe50++ % 0x4) ? _0x4a5a71 += String.fromCharCode(0xff & _0x3acf2d >> (-0x2 * _0x2efe50 & 0x6)) : 0x0) {
          _0x26d9b7 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0x26d9b7);
        }
        let _0x33c927 = 0x0;
        for (let _0x5ceb08 = _0x4a5a71.length; _0x33c927 < _0x5ceb08; _0x33c927++) {
          _0x111e48 += '%' + ('00' + _0x4a5a71.charCodeAt(_0x33c927).toString(0x10)).slice(-0x2);
        }
        return decodeURIComponent(_0x111e48);
      };
      const _0x396ba6 = function (_0x40bb86, _0x114c45) {
        let _0x119be5 = [];
        let _0x4b4fb7 = 0x0;
        let _0xf43604;
        let _0x23663b = '';
        _0x40bb86 = _0x3eead9(_0x40bb86);
        let _0x2cfd50;
        for (_0x2cfd50 = 0x0; _0x2cfd50 < 0x100; _0x2cfd50++) {
          _0x119be5[_0x2cfd50] = _0x2cfd50;
        }
        for (_0x2cfd50 = 0x0; _0x2cfd50 < 0x100; _0x2cfd50++) {
          _0x4b4fb7 = (_0x4b4fb7 + _0x119be5[_0x2cfd50] + _0x114c45.charCodeAt(_0x2cfd50 % _0x114c45.length)) % 0x100;
          _0xf43604 = _0x119be5[_0x2cfd50];
          _0x119be5[_0x2cfd50] = _0x119be5[_0x4b4fb7];
          _0x119be5[_0x4b4fb7] = _0xf43604;
        }
        _0x2cfd50 = 0x0;
        _0x4b4fb7 = 0x0;
        for (let _0x1f3843 = 0x0; _0x1f3843 < _0x40bb86.length; _0x1f3843++) {
          _0x2cfd50 = (_0x2cfd50 + 0x1) % 0x100;
          _0x4b4fb7 = (_0x4b4fb7 + _0x119be5[_0x2cfd50]) % 0x100;
          _0xf43604 = _0x119be5[_0x2cfd50];
          _0x119be5[_0x2cfd50] = _0x119be5[_0x4b4fb7];
          _0x119be5[_0x4b4fb7] = _0xf43604;
          _0x23663b += String.fromCharCode(_0x40bb86.charCodeAt(_0x1f3843) ^ _0x119be5[(_0x119be5[_0x2cfd50] + _0x119be5[_0x4b4fb7]) % 0x100]);
        }
        return _0x23663b;
      };
      _0x27ab.VSVFyY = _0x396ba6;
      _0x1c922a = arguments;
      _0x27ab.QCXRSa = true;
    }
    const _0x1b0255 = _0x2fafd7[0x0];
    const _0x265847 = _0x19c90b + _0x1b0255;
    const _0xd6e47b = _0x1c922a[_0x265847];
    if (!_0xd6e47b) {
      if (_0x27ab.raPimh === undefined) {
        _0x27ab.raPimh = true;
      }
      _0xe33800 = _0x27ab.VSVFyY(_0xe33800, _0x1d3ed1);
      _0x1c922a[_0x265847] = _0xe33800;
    } else {
      _0xe33800 = _0xd6e47b;
    }
    return _0xe33800;
  };
  return _0x27ab(_0x1c922a, _0x403653);
}
const _0x298c8b = {
  'pattern': "itunes",
  'react': "🎙️",
  'desc': "To see info of Itunes",
  'category': "search",
  'use': ".itunes <song name>",
  'filename': __filename
};
cmd(_0x298c8b, async (_0x3a91ea, _0x4de36a, _0x1cfdb5, {
  from: _0x577e46,
  l: _0x2c839a,
  quoted: _0x576adc,
  body: _0x518bf0,
  isCmd: _0x26275a,
  command: _0x2e2320,
  args: _0x2e3d7e,
  q: _0x282693,
  isGroup: _0x59bc6f,
  sender: _0x39b0c4,
  senderNumber: _0x109401,
  botNumber2: _0x265ed2,
  botNumber: _0x4968ed,
  pushname: _0x340a5c,
  isMe: _0x3e2bd9,
  isOwner: _0x465548,
  groupMetadata: _0x5af35c,
  groupName: _0x170629,
  participants: _0xc84cde,
  groupAdmins: _0x4e71e3,
  isBotAdmins: _0x1498bc,
  isAdmins: _0xa3eb05,
  reply: _0x5a32b8
}) => {
  try {
    if (!_0x282693) {
      return _0x5a32b8("Please provide a song name");
    }
    let _0x26aebf = await fetch('https://api.popcat.xyz/itunes?q=' + _0x282693);
    if (!_0x26aebf.ok) {
      throw new Error("API request failed with status " + _0x26aebf.status);
    }
    let _0x4ea848 = await _0x26aebf.json();
    console.log("JSON response:", _0x4ea848);
    let _0x5b0bdd = "*Song Information:*\n\n     • *Name:* " + _0x4ea848.name + "\n\n     • *Artist:* " + _0x4ea848.artist + "\n\n     • *Album:* " + _0x4ea848.album + "\n\n     • *Release Date:* " + _0x4ea848.release_date + "\n\n     • *Price:* " + _0x4ea848.price + "\n\n     • *Length:* " + _0x4ea848.length + "\n\n     • *Genre:* " + _0x4ea848.genre + "\n\n     • *URL:* " + _0x4ea848.url;
    if (_0x4ea848.thumbnail) {
      const _0x23f4fe = {
        'url': _0x4ea848.thumbnail
      };
      const _0x172841 = {
        'image': _0x23f4fe,
        'caption': _0x5b0bdd
      };
      await _0x3a91ea.sendMessage(_0x4de36a.chat, _0x172841, {
        'quoted': _0x4de36a
      });
    }
    const _0x243214 = {
      'text': '✅',
      'key': _0x4de36a.key
    };
    const _0x2a48ec = {
      'react': _0x243214
    };
    await _0x3a91ea.sendMessage(_0x577e46, _0x2a48ec);
  } catch (_0x39ecb2) {
    _0x5a32b8();
    _0x2c839a(_0x39ecb2);
  }
});
const _0x8d4b85 = {};
function _0x5da306(_0xc8a0d6, _0x2ccba6, _0x506255, _0x28d03a, _0x2b8d7f) {
  return _0x27ab(_0x2b8d7f - 0xe7, _0x28d03a);
}
_0x8d4b85.pattern = 'pemoji';
_0x8d4b85.react = '🔖';
_0x8d4b85.desc = "emoji to image convert";
_0x8d4b85.category = "search";
_0x8d4b85.use = ".pemoji";
_0x8d4b85.filename = __filename;
cmd(_0x8d4b85, async (_0x3eff3f, _0x21ff96, _0x1b7425, {
  from: _0x4f36f6,
  l: _0x218a18,
  quoted: _0x32d8a7,
  body: _0x1669cf,
  isCmd: _0x46e610,
  command: _0x5c5f38,
  args: _0x3fe414,
  q: _0x4fed77,
  isGroup: _0xe3d71d,
  sender: _0x5bd10f,
  senderNumber: _0x3ac100,
  botNumber2: _0x3a8b9a,
  botNumber: _0x2fa4e5,
  pushname: _0x49e89d,
  isMe: _0x431799,
  isOwner: _0x51fbf8,
  groupMetadata: _0x6c090c,
  groupName: _0x45d16b,
  participants: _0x2d29a8,
  groupAdmins: _0x2716b3,
  isBotAdmins: _0x19ed3e,
  isAdmins: _0x8d499f,
  reply: _0xd19ca
}) => {
  try {
    if (!_0x4fed77) {
      return _0xd19ca("*👸💬 Please Give me an emoji*\nExample - ." + _0x5c5f38 + '👸');
    }
    const _0x20d2b1 = {
      'text': '✨',
      'key': _0x21ff96.key
    };
    const _0x2a2402 = {
      'react': _0x20d2b1
    };
    await _0x3eff3f.sendMessage(_0x4f36f6, _0x2a2402);
    await _0x3eff3f.sendMessage(_0x21ff96.chat, {
      'image': {
        'url': "https://api.vihangayt.me/search/semoji?q=" + encodeURIComponent(_0x4fed77) + " "
      },
      'caption': '' + global.cap
    }, {
      'quoted': _0x21ff96
    });
    const _0x4ba17f = {
      'text': '✅',
      'key': _0x21ff96.key
    };
    const _0x561cc0 = {
      'react': _0x4ba17f
    };
    await _0x3eff3f.sendMessage(_0x4f36f6, _0x561cc0);
  } catch (_0x12cbaa) {
    _0xd19ca();
    _0x218a18(_0x12cbaa);
  }
});
const _0x39a5ec = {
  'pattern': "slsubsearch",
  'react': '🔎',
  'desc': "Search All Subtitles  from Web Site",
  'category': "search",
  'use': ".slsubsearch",
  'filename': __filename
};
cmd(_0x39a5ec, async (_0xa4c156, _0xb5acf6, _0xcc330f, {
  from: _0x4272db,
  l: _0x289e47,
  quoted: _0x374e34,
  body: _0x72b9d2,
  isCmd: _0x3dc3e5,
  command: _0x1f947a,
  args: _0x3d7672,
  q: _0x3caea1,
  isGroup: _0x5e962f,
  sender: _0x4840e4,
  senderNumber: _0x42c5b2,
  botNumber2: _0x464040,
  botNumber: _0x46c7b4,
  pushname: _0x115837,
  isMe: _0x1375f7,
  isOwner: _0x4c15c1,
  groupMetadata: _0x149465,
  groupName: _0x1fe4f1,
  participants: _0x5aa82a,
  groupAdmins: _0x1b78ce,
  isBotAdmins: _0x47d7fd,
  isCreator: _0x8e0266,
  isDev: _0xb5529e,
  isAdmins: _0x2fdcfe,
  reply: _0x5dc0ec
}) => {
  try {
    if (!_0x3caea1) {
      return _0x5dc0ec("❗ *Please enter movie name to Search Subtitles*");
    }
    const _0x3a24ee = await subsearch(_0x3caea1);
    let _0x22d8aa = "\n❍⚯────────────────────⚯❍\n        🌐  *𝚂𝙻 𝚂𝚄𝙱 𝚂𝙴𝙰𝚁𝙲𝙷 𝙻𝙸𝚂𝚃*  🌐\n ⚡ *ʜᴜɴᴄʜᴏ ꜱʟ ꜱᴜʙᴛɪᴛʟᴇ ꜱᴇᴀʀᴄʜᴇʀ* ⚡\n❍⚯────────────────────⚯❍\n\n\n";
    for (let _0x29f224 of _0x3a24ee.results) {
      _0x22d8aa += "📃 *" + _0x29f224.no + " - " + _0x29f224.title + "*\n🔗 _Link : " + _0x29f224.link + "_ \n\n\n";
    }
    const _0x44889a = {
      'url': "https://i.imgur.com/4pWgAng.jpeg"
    };
    const _0x681893 = {
      'quoted': _0xb5acf6
    };
    await _0xa4c156.sendMessage(_0x4272db, {
      'image': _0x44889a,
      'caption': _0x22d8aa + "*ʜᴜɴᴄʜᴏ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ keithkeizzah*"
    }, _0x681893);
  } catch (_0x4b6f48) {
    _0x5dc0ec("⛔ *Error accurated !!*\n\n" + _0x4b6f48);
    _0x289e47(_0x4b6f48);
  }
});
const _0x41a44a = {
  'pattern': 'movie',
  'react': '🍎',
  'desc': "To check imdb",
  'category': "search",
  'use': '.imdb'
};
cmd(_0x41a44a, async (_0x4f2ece, _0x386a5e, _0x50d250, {
  from: _0x5d7fd8,
  l: _0x2c4dae,
  quoted: _0x21d6f7,
  body: _0x2ef11b,
  isCmd: _0x2ba09f,
  command: _0xec08cb,
  args: _0x5d7538,
  q: _0x5f5859,
  isGroup: _0x5eae9c,
  sender: _0x229c74,
  senderNumber: _0x3dc214,
  botNumber2: _0x25431c,
  botNumber: _0x111d4c,
  pushname: _0x4aa0fc,
  isMe: _0x3f3372,
  isOwner: _0x2ac276,
  groupMetadata: _0x4fddc8,
  groupName: _0x5cb99f,
  participants: _0x3609ee,
  groupAdmins: _0x7f8944,
  isBotAdmins: _0x2e1f8b,
  isAdmins: _0x24eef0,
  reply: _0x2e44c8
}) => {
  try {
    if (!_0x5f5859) {
      return _0x2e44c8("_Name a Series or movie");
    }
    let _0x21be96 = await axios.get("http://www.omdbapi.com/?apikey=742b2d09&t=" + _0x5f5859 + "&plot=full");
    let _0x258ee5 = '';
    console.log(_0x21be96.data);
    _0x258ee5 += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n ``` Tap on the link to join our movie channel https://t.me/keithseriehub ```\n⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n";
    _0x258ee5 += "🎬Title      : " + _0x21be96.data.Title + "\n";
    _0x258ee5 += "📅Year       : " + _0x21be96.data.Year + "\n";
    _0x258ee5 += "⭐Rated      : " + _0x21be96.data.Rated + "\n";
    _0x258ee5 += "📆Released   : " + _0x21be96.data.Released + "\n";
    _0x258ee5 += "⏳Runtime    : " + _0x21be96.data.Runtime + "\n";
    _0x258ee5 += "🌀Genre      : " + _0x21be96.data.Genre + "\n";
    _0x258ee5 += "👨🏻‍💻Director   : " + _0x21be96.data.Director + "\n";
    _0x258ee5 += "✍Writer     : " + _0x21be96.data.Writer + "\n";
    _0x258ee5 += "👨Actors     : " + _0x21be96.data.Actors + "\n";
    _0x258ee5 += "📃Plot       : " + _0x21be96.data.Plot + "\n";
    _0x258ee5 += "🌐Language   : " + _0x21be96.data.Language + "\n";
    _0x258ee5 += "🌍Country    : " + _0x21be96.data.Country + "\n";
    _0x258ee5 += "🎖️Awards     : " + _0x21be96.data.Awards + "\n";
    _0x258ee5 += "📦BoxOffice  : " + _0x21be96.data.BoxOffice + "\n";
    _0x258ee5 += "🏙️Production : " + _0x21be96.data.Production + "\n";
    _0x258ee5 += "🌟imdbRating : " + _0x21be96.data.imdbRating + "\n";
    _0x258ee5 += "✅imdbVotes  : " + _0x21be96.data.imdbVotes + '';
    const _0x6baf08 = {
      'url': _0x21be96.data.Poster
    };
    const _0x371e19 = {
      'image': _0x6baf08,
      'caption': _0x258ee5
    };
    const _0x3168a5 = {
      'quoted': _0x386a5e
    };
    _0x4f2ece.sendMessage(_0x50d250.chat, _0x371e19, _0x3168a5);
    const _0x56d9a5 = {
      'text': '✅',
      'key': _0x386a5e.key
    };
    const _0x23b0df = {
      'react': _0x56d9a5
    };
    await _0x4f2ece.sendMessage(_0x5d7fd8, _0x23b0df);
  } catch (_0x325b29) {
    _0x2c4dae(_0x325b29);
  }
});
const _0x3eca3d = {
  'pattern': "tempmail",
  'react': '👾',
  'desc': "to take a tempmail",
  'category': "download",
  'use': ".tempmail",
  'filename': __filename
};
cmd(_0x3eca3d, async (_0x4e60e5, _0xe9f920, _0x1b9831, {
  from: _0x340a81,
  l: _0x3494a7,
  prefix: _0x542bce,
  quoted: _0x5ebff3,
  body: _0x5a8f48,
  isCmd: _0x5c1aad,
  command: _0x21b143,
  args: _0x1c58aa,
  q: _0x2c74f6,
  isGroup: _0x3bd0ec,
  sender: _0x496005,
  senderNumber: _0x283bed,
  botNumber2: _0x786c67,
  botNumber: _0x19f3f5,
  pushname: _0x47b415,
  isMe: _0x9c2bd5,
  isOwner: _0x23c00b,
  groupMetadata: _0x435bac,
  groupName: _0x4342e4,
  participants: _0x146243,
  groupAdmins: _0x5740c2,
  isBotAdmins: _0x5a7555,
  isAdmins: _0x4328cb,
  reply: _0x18fdaa
}) => {
  try {
    const _0x5ead8f = await fetch("https://api.maher-zubair.tech/misc/tempmail");
    const _0x345d2d = await _0x5ead8f.json();
    if (!_0x345d2d || !_0x345d2d.email) {
      return _0x18fdaa("Failed to generate temporary email");
    }
    const _0x1c30f9 = _0x345d2d.email;
    return _0x18fdaa("Generated Temporary Email: " + _0x1c30f9);
  } catch (_0x4c870b) {
    return _0x18fdaa("Unexpected error occurred during the request.");
    _0x3494a7(_0x4c870b);
  }
});
const _0x42689c = {
  'pattern': "checkmail",
  'react': '👾',
  'desc': "to see mail",
  'category': 'download',
  'use': ".checkmail",
  'filename': __filename
};
cmd(_0x42689c, async (_0x1fcbad, _0x471e0c, _0x370388, {
  from: _0x599878,
  l: _0x5cc140,
  prefix: _0x271278,
  quoted: _0x29f290,
  body: _0x226c6f,
  isCmd: _0x3fb989,
  command: _0xfcb6a,
  args: _0x381ea4,
  q: _0xefe30,
  isGroup: _0x484806,
  sender: _0x431653,
  senderNumber: _0x3ac0e8,
  botNumber2: _0xaeb35,
  botNumber: _0x92fbfa,
  pushname: _0x4a00f8,
  isMe: _0x484d8b,
  isOwner: _0x10aa4a,
  groupMetadata: _0x3ac96f,
  groupName: _0x3cec0a,
  participants: _0x201f69,
  groupAdmins: _0x1b46c5,
  isBotAdmins: _0x310646,
  isAdmins: _0x1fdc90,
  reply: _0x255631
}) => {
  try {
    if (!_0xefe30) {
      return _0x255631("*Provide me tempmail for view inbox*");
    }
    const _0x22f5c2 = encodeURIComponent(_0xefe30);
    const _0x4b3c84 = 'https://api.maher-zubair.tech/misc/get_inbox_tempmail?q=' + _0x22f5c2;
    const _0x4acc0c = await fetch(_0x4b3c84);
    if (!_0x4acc0c.ok) {
      return _0x255631("Invalid response from the API. Status code: " + _0x4acc0c.status);
    }
    const _0x5894fa = await _0x4acc0c.json();
    if (!_0x5894fa || !_0x5894fa.messages) {
      return _0x255631("Failed to retrieve email messages");
    }
    const _0x5c2895 = _0x5894fa.messages;
    for (const _0x486eb2 of _0x5c2895) {
      const _0x42fe47 = _0x486eb2.sender;
      const _0x55c453 = _0x486eb2.subject;
      const _0x383e45 = new Date(JSON.parse(_0x486eb2.message).date).toLocaleString();
      const _0x67e04f = JSON.parse(_0x486eb2.message).body;
      const _0x173a28 = "Sender: " + _0x42fe47 + "\nSubject: " + _0x55c453 + "\nDate: " + _0x383e45 + "\nMessage: " + _0x67e04f;
      await _0x255631(_0x173a28);
    }
  } catch (_0x4d079f) {
    console.error("Error during API request:", _0x4d079f);
    return _0x255631("Unexpected error occurred during the request.");
    _0x5cc140(_0x4d079f);
  }
});
const _0x19b2c1 = {
  'pattern': "gitclone",
  'react': '🔖',
  'desc': "download github repos",
  'category': "download",
  'use': ".gitclone",
  'filename': __filename
};
cmd(_0x19b2c1, async (_0x4af737, _0x18c8b9, _0x56e3b8, {
  from: _0x5eec76,
  prefix: _0x38a075,
  l: _0xf5d01c,
  quoted: _0x5ae83c,
  body: _0x3e5083,
  isCmd: _0x2de406,
  command: _0x33bb64,
  args: _0x1f5f3d,
  q: _0x5812a3,
  isGroup: _0xe14fa4,
  sender: _0x1e7d9a,
  senderNumber: _0xa263df,
  botNumber2: _0x5d04ee,
  botNumber: _0xf340e1,
  pushname: _0x3a9731,
  isMe: _0x453e52,
  isOwner: _0x54a268,
  groupMetadata: _0x285d26,
  groupName: _0x33223b,
  participants: _0x507102,
  groupAdmins: _0xefc607,
  isBotAdmins: _0x397773,
  isAdmins: _0x55d3c9,
  reply: _0x4e27a3
}) => {
  try {
    if (!_0x1f5f3d[0x0]) {
      _0x4e27a3("Use " + _0x38a075 + "gitclone repo link\n: https://github.com/HyHamza/X-BYTE");
    }
    if (!/(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i.test(_0x1f5f3d[0x0])) {
      return _0x4e27a3("link");
    }
    let [, _0x39cc4e, _0x2e3729] = _0x1f5f3d[0x0].match(/(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i) || [];
    _0x2e3729 = _0x2e3729.replace(/.git$/, '');
    let _0x6618e9 = 'https://api.github.com/repos/' + _0x39cc4e + '/' + _0x2e3729 + '/zipball';
    let _0x5243cd = '' + _0x39cc4e + _0x2e3729;
    const _0x34e299 = {
      'url': _0x6618e9
    };
    _0x4af737.sendMessage(_0x18c8b9.chat, {
      'document': _0x34e299,
      'fileName': _0x5243cd + ".zip",
      'mimetype': "application/zip",
      'caption': "*HUNCHO-MD*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ keithkeizzah*"
    }, {
      'quoted': _0x18c8b9
    })["catch"](_0x522279 => _0x4e27a3(mess.error));
  } catch (_0x502253) {
    _0x4e27a3();
    _0xf5d01c(_0x502253);
  }
});
function _0x2484() {
  const _0x4955fc = ["4PYDW4RcTqhcPa", "twRcIchcRa", "hd/dNxu", 'W7T+B1q0', "W5y3WOJcG8kY", "d8kOWQKLpq", 'W4e/gCodia', 'nMngWR0w', "W517WOy", "ygNdKSowW64", 'fGZcVCkUpW', 'WOWfWPNdOCkx', 'WPL1WPqmWOq', 'f8k6WO7cVSk7', 'WQqpW4VdJCo+', "W4NcV8k1W5K2", 'W57cUrKXzG', "WRZcV8kGW5pdGG", "mxedWQjp", "WRbDBSofpa", 'kxDjWR1b', "smonWQ5sCa", 'WRumWRtcUCkk', "hhS1pCoA", 'WRvRW45Q', "8yspHaGIe8kC", 'WP8UW4edWQu', "WPuda8kXWPS", 'qKmPz8kF', "W48VfSkmlW", "W4/cQCk+W48v", 'vwpdS8owW5W', "j8kGW40", "rtNdQCobja", "W6RdSgK", "WRLgnCoCWR7cUcNcIgvvoxFdVq", '4BA+4BAfYOxHTBBHT5O', 'BrhdUYFdVG', 'CZGOWPTK', 'W54Pfmk8Da', "WPu4W5CuW7y", "WP0NWQddT8kA", 'gedcKvxdJa', 'WPHKWOuuWOG', "W7Xgf8oYW4W", "bSkyWPSCWRu", "nmokWOyhW7a", "YipHTPKLY7hHT5G", 'FCoir0O', "hZvJsSo+", "W4RdVHeZWOu", "FZudW67WKQYR", "zCoGWPdcKCkl", "qW3dQ8k1ya", "dmoNW6JdPSo7", "rqbqW50Q", "W656W6rUWQK", 'W6ZdP2qdWRW', 'W4NcNSoBWQhdRW', "WO7cUKf6EG", "WPTtW4ifCa", 'jeqvuCkx', "ef7dI8olW7K", "CCk8Amk+Aq", "mr7cGW", "8j+iQSoeW5RdOhy", "WPRGTAdGT4ZGT5lGTii", "W7FcRSoZWPNcLW", "amk9W6O5Dq", 'WP0Ed8k8W58', "WPC8W5brW6G", "4lsAW7lGTA7GTAFcHW", 'WP5JWOe', "WRThWPCjWP8", "WOPxemoiW60", "d8kOWQLW", "W7/cGmkKW4tdIa", "W5yRWPxcG8kU", "p1tcTG", "W6axiSk2cq", "WP87WPdcUCk4", "WO86pSkFkW", "fvFcKq", "WRZcSCoHW6BdGG", 'dCkYW5tdPSo/', "WReza8o6W6m", "sraiWQ5c", "zSkrnueb", "ASknjXS", "WPH1WOusWP4", "4lEB4lsaWQK4oW", "EanNjSk6", "FvBdS8odW54", 'vHVdHrdcGq', "aSkSW7WJjW", "h8oDWQtcIwW", "cNy5zmkz", "fbpcRCkOcG", 'W4/cQh0rha', "zCkaiK8c", "bIfCW4G7", "amorW7/cJ2W", 'W45GqfOH', 'zar5W6Kz', "4P+RW7XocbS", "lCoAxCojfW", 'C8oUW41/sG', "ysjgW58u", "FmoJWOmKsq", 'bLlIL5pcNh4', "4BAo4Bss4BsulFcISkRIGixWMzkP", "hmo+W6i", "fEg1OEg2TvxHT70", '4Pw94PAs4PAh4PAs4PAE', '4PUM4PQz4PUE4PQz4PM0', "nmkskmk5yG", "h8oeWQVcNwy", "W5GdWPHbzq", 'eCo3W7tcSSo4', "W5Xo4PAaWRhcMW", "q3RdQCo4W6u", 'hSoZW7FdPSo3', "kG/cL8kaaW", 'BXNcNmkomW', "WOPO4OgAW7DW", "iEc0Soc0Uoc0Toc1Tq", "DCoOWPdcNmoa", "vbDuW58Q", "rc7dN2ldVa", "W7GKWO1vcW", "WP4FW5xdUCky", "W5VcVhu", "FxZcKZRcUW", "FCknmWix", 'gSoLWPJcSCoN', "sgVdMmonW74", '8jkfRmkrx8kKgW', 'Ax3dMSoAW44', "wc/dKHhcOW", "4BwL4BEpYjzX4Bwr", "dSoGW67dOCoR", "W7aYfCowBa", "j2qjea", "W4qDWP5tmq", "eCo6WORcS8kL", "lmoctmkwvq", "omowW73cOv0", 'W67dI1tdOYi', "YA95YktiM8Q0", "W5OPdmkJpW", "WResW4mFWQi", "c3qLzCkB", 'CadcG8o6uq', 'hZZdNHNcIG', 'W7xcU8kYWPtdHG', "W7NdQ2KuWRe", "WP42WOpdMCk9", "WOHytSoxvq", "W6GRxxJdRq", "W63dRgqCWRO", "kGNcL8o4vq", "W5dcVMvKWRW", "dqNcM8o6wW", "W5D9W7j3WPe", "W69+DMie", "W6HdW5foWQC", "WPVcOvjGea", "rGRdNrZcKG", "4lwnuoc1QEc1NUc1La", "DCoKWOddKmke", 'DSoyrKFcUa', 'ff3cS1pcKW', "WQnIwwtcUq", "W4yVgCkdga", 'lmoTWQ/cKCkK', "t8oOWPZcSCoC", "xwpcPhBcLa", 'WQTJWOHnWP4', "W4dcOG97W5u", "a2uGCCkW", "vH1gWPm", "xM/dJCop", "4PAV4PwV4Pwn4PE64Pwz", "W77cImk8W4qv", "W4ugWPC", "WQldJYqBWQu", "avDJW4m", "W53cJCkIW74t", "W7xdOMpdNti", "W5NcTCkUW5mp", "Y7ZkK+g3JCQq6P+k", 'ewDhWOr1', "EWfVia", 'WP4qWPtcGmk3', "WPqBbmoKW4G", 'eCoeW67dM30', "W6HYWPFcTtq", "W7ZdOxadWR4", "4lwV4lsiW6hdMmoE", "6P204BwzYBxHT5RHTBW", "xZXtW4G5", "4BA/W7RjGSIYwW", 'hNTYWP9p', "WPRcR8kOW5Gj", "4lsw4lso4lw74lw74ls7", "W5GfWOKsba", "4lws4lAd4lAz4lwGqq", "dSoKwmolca", 'hf0AW50U', 'W5K8gCkLpq', "kmolwSokbq", "t1XsW5uQ", "B8oLWOaRga", 'W6m6WRjbhW', "W4HurSoCgG", "gCo3W7q", 'EtVdVZi', "W4eMj8kIeW", 'xN3cMCkuWQC', "W70kpCkvkG", 'xmkxhHSe', 'rYxdHaFcIG', 'WRHJWOCuWRK', "W5NcSga", "W5KNfSkWEG", "4PA64PEA4PEB4PA94Pw7", "WQdcOCkK", 'bSoWWPZcR8kQ', "FCkmmGmq", "x8okW6lcI2S", 'ACo+vMJcUa', "W57cU8kVW5W", "WRVcVCkLW5hcIG", "fCkhW7WZDq", "WOedWOhdRmkv", 'BCk0kCkOqq', "WOL5WOS", 'W51WW452WQC', 'WOuMWOdcHCk9', 'W4BcQmoJWPRdMW', "W5/cQxLLWQy", "WRqJqcVdRa", "W5hcV8kIW4Ou", "wmoZWQrovq", 'W7S1hSkZkW', "W4/cONvKWRW", "W5O6hmkpaW", "WO4lb8oYW48", "emoMWO7cVmkU", "WOpcQef8oW", "WOuVWPlcGSk8", 'W546W4SeWQy', "W5XqW51FWOe", "W4j6eSoqiW", "W5hcHmozWRRdTq", 'sXhdGbldQW', "4BstYiFkGog1H8oU", 'Emo5tgZcLG', 'W6ZdQ3euWOa', "fCkJW7SbiW", 'W5epmmoyoa', "WPVdSmorWPCR", "rmo4WP7cG8on", 'WOC2WO7cG8k7', 'zH/dOIFdQq', 'WRSX4PwboSoI', "W5tcSh1Z", "W5VcVhuSW7G", "hSoxWQVcVga", "WQ3dVanbja", "WQKLWQFdN8k8", "W6dcRmoNWP7dGG", 'xJdcGsdcPW', "B8oMxmoudq", "i8ohrCoCkG", 'W7BcKf5r', "dMqPE8kY", "W6BcR8oZWONdNa", "aSo8WPpcUSoZ", "W6RcQSoCWPldOq", "W4r5WPNcUr0", "8kIUTE+7TCoysSkaWRu", "W5G0WOtcLSkQ", 'W7vHW4PWWRe', "W4NcTmkYW40l", "W41lW6zQWOO", 'W5/cOMn3WRu', 'W4rEW5RdOCkq', 'xsxdV8kizG', "x+c0REc1MSo94lwX", "W7z4W4P/WRy", "WOCWW4Ow", "ESoflX9v", "jftcNbldOG", "iZFcMCkFfq", "WOuMcCoqyW", 'kSkzarVdQcNcQX0xW4VcVCoxuW', "WQivWRdcK8kn", "wt/cGsFcPG", "W5VcVCkPW5Ww", "WOrXWObaWPO", "A8ojqmonbW", "FComqeG", "WO9XWPab", "imoVzK/ILPm", 'kCkdkr1v', "W6VdP8o/WPRcMq", "lhbnWQP7", "WP8peSoYW5m", "WPtcOxG5WRq", 'xd1wW7Gi', "uJ/dUmktza", 'Dmk1m8kHDG', "W4RcT8k6W5qx", "maVdMSo8ua", "qSkaW6Cb", "W6dcHKbXWPG", "uHDrWPX/", "W7P+ANGu", "W4pcS34paW", "D8kHm8kLyW", "W6ShsCkSWOPYoJHOghNcL8kH", "xbVdTZa", 'W6BGTOhGT7hGTRhGTzy', "6PYxY60v6P6n4Bwc", "W4y0dCkiDG", "W5XTWPa", "uSoCF0pcKq", 'W4RcTSk+WODB', "W4RdSG4UWOa", 'nNLgW65J', "W5XSWPK", 'mmkhWPC', 'WP5TfCkqFq', "W6TWW75QWRe", 'W5tcSh1ZW7W', "WP0daW", "DSoKWP96tq", "pConWOr9rW", "4BsY4Bw+Yk3iGCQm", "jCkIWOCkW7a", "noc1QEc3OmoS4lA0", 'fmoBz8keyW', "W5RdKutdLre", 'oaxcLSoTDG', "WO3cQe0Omq", "W5BcL1LsWQu", 'W60aCmkfW6e', "W4WCDmkkW6O", "W6JcQmo0WOpdMW", 'WPywDuRdUa', "4lw74lwM4lEg4lE94lEc", "fCoTuCo8jG", "afC6WR1g", "WONdUWGLBG", "urVdHrq", '4BA+Yi7QNiFcMG', "WRWZtNVdRq", "W714W4T/WQW", "mmk1W7eAla", "CspdVqxcJa", 'e8o3W53cMKS', "vwVcKJVcRa", "af1tW6K", "CSoXz8oHnG", "kqNcImo7aG", "W7TZA3rw", "WQG2dw3dSa", "WOeMWPpcHa", "WOD64OgwWOjM", "oCkmhG", '4lsV4lwf4lEk4lEVW48', "W7rJWOC3W6i", "8j6cVCk2Aa", 'kColr8oEea', "CCkNWPSmWRO", "W4zUrSoqtW", 'rbWDWQG', "fcmSjG", 'W4TDqmo9W5O', "W6ZdVwBdTI8", "z8oOWOJcLCol", "W4SLhq", "gsTarmkW", "y8ovWOZcVmob", "W4ZdSWHojG", "uWjbW5uZ", "m8oAWRlcICkm", "WOZdPX4/WPC", 'imoDwSoyaW', "WOD3va", 'uxBcLdBdPG', "WQ8VtgZdVa", "W4mmmSknpq", "W7pdSwjZWQm", 'h2xcPhu', '4Pse4Pw/4PAw4Pwd4PAo', 'WRKjWOqIWOi', "DpcKMjS", "WOHDa8oEfG", "z8okpayf", "W5KTgCkLoq", "W4OmjSoAma", "WPNdSHi4WQi", 'zsO5WOHi', 'qram', "W6XGAIi", "rtNdOmkrAa", 'gmo0WONcVSkH', "W40Tda", "WRmrW70aWRu", "W4SooCkB", "WP4vWO3dUq", "8lwdHmovW6Onga", "omkEWPODWRi", "W41NW495WQK", "WP0vWPtdUCkr", 'twddLCobW6S', "eSoWWPpcUmk7", "W4GOvmopiW", "pbFcHSkvma", "wcZdVSkvza", "Ct5WcCkc", "ihpcNmko", 'WQHjiW', "WOiTWPKcWQi", "W7zKrSkXWPS", "8jMFU++4JWBcTmkeWPq", "W5hdPv8IWRi", "4PQ04PQa4PI34PIG4PIe", "W6Wza+kvLe8", "WQClWOtcJSkU", "4BwL4BAU4BsJY5plPa", "WOD64PAsWOjS", "BqjRz8o/", "W6eWW4raW50", "W7ldP3ycWR4", "W4WHfmkYna", 'jSopxCoqcW', "mmkgWPSjWQm", "p3dWS4EY77UPvmky", "W69WW4bOWQm", 'WPK0W4uwWRm', "AbhdG8kfxW", "zCkkka", "WPSMW4hcP8k/", 'W5BdR1i', "WQxdOZalWRO", 'tMVdGCoA', 'kmkyaHhdPsxcQWO1W7pcOSokAa', "W77dRMCeWRi", 'k8oiWQpdKmo2', "W5BcTCk8W5qv", "E8kajWWb", "DxhcKttcPq", "B/cOT5C", "WOlcUmkpW7ldHq", 'W487c8k2pq', "WQNcV2jKbW", '4PIv4PEr4Psq4Psw4PEs', "W4OuWPRdUSkx", "eXdcKmkpeW", "WPeRW5a", "W47cT30oba", "D8kYWQFILBtcVG", "jmodta", "l1q2k8kQWRxcRCk0aW", "dYDrqCos", "hd/ILif1W6K", 'WPdcGwjZWRq', "zM/cRWlcNa", 'hhHWC8kv', "W4buWRJcTXq", "W4WpWP5EnG", "q1jCW5i4", 'WOmTW4ufWQm', 'WR5wcSo4', "a8ovW67dM2a", 'WOdcUvFcHGu', "Y4P+4BEU4BE94Bw/", "WO5qW5xcRCoz", 'W6b64PE14PAn4PE5', "4ls/4lAY4lEC4lwE4lsN", "W5lcKCorWPZdOW", "W7/cNSkUW5RdGa", "8koyM8kRW5fmWOK", "bmozW7/cL2W", "WPFdRv7dLqi", "W57dGeK8WPO", "DSo8vLpcPq", 'x8k/bX89', 'WPuAdSoKW5K', "W7xcOSo7WOxdNq", "4PMlWQiVnmkT", "e3XnWQvP", "WPClhW", "4Bwa4BAP4BsjY5pHTAa", "yCkqkWyr", "W7u4gCkWpW", "4PsG4Pw94PwP4PEj4PEU", "W6fzW4qdWPW", "FmkwiW", "w8oLWPtcS8kU", "W5xcUwGcgW", "tsddNSohW74", "W4SZgSoj", "W4VcUwCggW", "WPm6W5edWRC", "WQxdP+kvSmokWPC", "4BsK4Bw5YjBHTyxHTOS", "cITgqmo8", '8y6NLG1EW6O7', "n/c9T5KR", "4BEv4BEFW6hWSPop4OkS8l+GHCkn", "W43cQ8ogWP/dRW", "WQhdSSkNW5xdJG", 'yrVdPse', 'umkWkSkPjG', "WOnxv8oxhq", 'rHBdMbBcGW', 'cxO1', "W6RdOLNdKZa", "WO/cH8ksW63dNG", "fHxdJEg1LCMw", "BSkWm8k4Aq", "BImtWQHs", "Emo4WP4K", "Bmk0jSkVEa", "8ykTK8kTWPBcSmoy", "8kkCJo+7SG", "CCo0WPFcMa", "W7RdO3yuW78", "WRdcRxigWQG", 'WQGOm8ovW4W', "WOmzuCoxhG", "WQZdUmo7WPtdVa", "xCkZWQ0", 'WQvziW', "c38XyW", "4PwW4PAW4PAl4PE74Psj", "WOq8W5Wf", "x3RdMSogW6m", "w2ldNmo9W74", 'Bmkxka4y', "Cmo+pCkLFa", "WO3cLsKcdG", "uSo+WQfCDW", 'WRSOWP/dGmkE', "4lsKmoc1I+c2S8oD", 'gXxcGmo7ua', "mColwSonra", 'nNadWRTe', "W40Zea", "W7FdTNebWQW", 'W4RcS8oAWR3dOG', 'WQdcSmkRW7/dIa', "W4NcTh5YWP8", 'dd5SW64x', 'hH/dLmo/ua', "vmocqKdcUa", "YQ7HTyFlP8om4Bsa", "WPW8W5qb", "vGJdLbtcKG", "4lwWAbtcRIG", "u8opWOvsuq", "u8oXW6JdV8kX", "qCo2WRHOza", "W5pcUwOjqa", 'WPPLWOSuWPG', "W488B8kgW6G", "wSwB4BAx4BE84Bso", "b8o7WPRcLSkr", "dCoBs8kzeq", "gNq4n8k8", "qIJdRmkvCa", "iwNcMx7cOW", "W5SgiSkuCW", "W6L8W4zUWQS", "C3RcMCojW6m", 'WOvyv8oxca', "4PQ3t2FcVtW", 'pmoMW4FcNwq', "fmoBz8oSla", "4PAfW43cNa", "E8kcr13cVa", 'eWRdNrRcKG', "eSo8WQFdS8k+", "4P+Nj8khW6tcJq", "W44Tc8k0ka", 'qZNdVSkvza', 'WOFdTK8ohq', 'iw/cPNxcMG', "WPq8W5Cs", "nCklWOyj", "WR3cP8kJWPRdHa", "WO3WQBkv", "mSoMW6VdN8oM", "W4JcSMXbhq", 'YBpHTB/HT67cP8oZ', "zSkeiG", "WRuSrhVdQq", "W4W+WPlcPtC", "W4G0i8oklq", "bCocW6xcNNa", "CJdcPG", "AHpdNdRdMa", "FWrSiSkT", "W6L+W5u6WQ0", "k8oErmotfW", "W5tcQgGvgG", "W4O+fG", "WO8lcmo1W7y", 'WOPk4OozeM8', "W5ZWR6kz8ykHSSkFmq", "vfNcRbVcPG", "WRzHDMmr", '4P22y8kNDmkz', "mqFdMSkPeG", 't8owWR3cK8oD', "pCo/A8oraW", "W5NcTCk2W40A", 'W6JcOSoLWPNdLG', 'jCkpWPziW7e', 'W4lcSxKohq', "gCo6WPRcTmkN", "A8k8fSk+EG", "BSoVWOnVBW", "CmoIWQlcGSoD", "W5P7W5xcHdG", "rXvqWOz+", "BCoEDvNcRq", 'EqxdQ8kqCa', "W657WPVcSJW", 'W6SBySkq', "wUc0Ioc0RmoB4lAX", 'jYTxvCop', "W5VcQSkRW5es", '6P204BAU4BsX4BAHra', "WPejcSovW4i", "aCk1WPVcVmkG", 'WO/cOLLzaW', "c3OdWQ1E", "vXGBWRO", "WPRcLmk6W5aE", 'eSk/W6y/jG', "aCoWWOxcQq", 'kYRdLCkCeG', "jY8zemkQ", 'WOmTW4uDWR0', "4PAN4PEC4Psj4PwH4PwV", "WRNcT8kVW5pdKW", "amkIW6W", "W4O7hCooBa", "lNy5E8kF", 'WR7cSLbzmq', "W6GdaSoWhG", "WROZWRpcGCkX", "W4qJW7m8WRGMia", 'WP0WW5CsW7K', "zmkemGWD", "t8o0WONcKSoa", 'WPidcCks', "ESk6WOhdKEg0Qq", '8l2EI++4LG', 'WRuNxYVdTW', "W657B2Gy", 'W4a2eq', "WPr2n8opWPG", 'W5tcVCo7W4Kt', "ACoJWOz/tq", 'W5uyjCkQoW', "W4BcIu14oW", "Cr/dUINcRG", "W5pcVN4", 'WPRcO8koW4xdOG', 'W63dSgavW78', "vqHUimk3", "psXwqSkW", "ehBcH8oR", "DqzuW4GR", 'WPfFWOCKWQS', 'W7adjmkrpa', 'eCoWWO7cVG', "WOFdVcLbtW", "WRdcOmoHW5VdIq", "wZpdPmkp", 'W4lcTLG7', 'xxxcSX/cKq', "W5/dOvRdNa4", "sgldJ8o3W4G", "WO/dPXn8WOm", "WRSHkCowW7C", 'ggFcQ3NcLW', "W513Dh0z", 'WQZdOXyjWPS', "W5S0W5xdUNK", "aSoFW6BdM14", "lmoDcCokcW", 'cbTbW4KW', "W6WTiCkLfa", "W5BdOXBcNue", "WPKvWPVdQCk0", "4lA44lAnCdBdKa", "4BEN4BwfYQ3HTiZHTPW", 'h8o8WPK', "W4NcUYLa", "WOuEWPlcRCkx", 'E8kanrOz', "WPNcQvPTma", "WPOccCo+W4K", "4lwnWRCinCke", "WRmwW6OLWP8", "e8kh4BsS4BsM4BE8", "zCko4PEpWPLe", "W4ldTqDKpq", "uXGhWQ1L", 'FqHZja', 't8otWQ5ezG', 'A8oivuRcQq', "4lEOFUc1Hoc0PUc2VW", "oSoQW7/cNh4", "W613AM4e", "4BwBtmMJYiCy", "e8kNhVcvIAVWMj2MBG", "W4ZdU+kxJIH0", "W4pcVx0a", 'B8o4WOHVaG', 'WRzAf8oW', "Emo6WP0", "WQPcWQCOW5C", "pwVcP3xdGq", "dt8PW4qC", "W7BdR2qwWRO", "4BAF4BsrYlG64BEg", "WO0xs2pdQW", "W5pdIgeYWQu", "W6i6WQHDaq", "W75YW5n/WQy", "W48WeCkKlG", 'FcDMW6uN', "bHrAW45+", "W4ShWP4", 'ohnhWRPu', "W6alWRbafG", "b8oIW43cRxO", "ya3dPspdQq", 'W4yUhConiG', "W5JcSNz3W6m", "bmoVW6CWoa", "WOCWW5RcRda", 'W4JcVMi2WPm', 'j8kGW6u9oG', 'W5NdQe47WRS', "bZNcJCkCW6G", 'W4P/WOhcPt4', "xZxdNrldIG", "Doc3TUc1GEc1Noc2KW", 'WOKDaW', '4Pwj4PUR4P2+oSkA', "uYRILkWWW5S", "zmkHWPdcLCoi", "vmoPre3cJa", "4lsd4lwufSoCga", "W4PDW5u", "W5SdkmkjEq", 'WPOfWPFdOCkq', "WOrFWO/dPmkj", 'W5tcPhfrWOO', "AX4QFCoJ", "CCoXWO3cLmky", "W50klmkzlq", "qSkF4PE/8yIhN0m", "W6mwEG", 'WRzTE8oMoa', '4lwT4lED4lsNWQ3cKa', "zrVdQ8k2ya", "WPibyLVdMW", 'tMVdNCkoW4S', "a8oWW53cSmkS", 'WPrCv8oabG', "WQ3dLIK0hq", "WO/dPveMWPO", "WRaVkmow", 'z8o0WRBcGSoc', "W4KcWPPg", 'rmoLWQFcKmkWjmk0', "cbFdMmk3pW", "sr8AW4KT", 'W4lcQcyihW', "YP5DYP/HTQ/HT6u", "gIdcS+kwRpc9TBa", 'u3ZdQCkaCq', 'YRNHTANjN8kr4BwB', "ah7cQ3FcIq", "W6BdUWGOxG", 'FSoRWP1/sW', 'FHvQimkK', "WPePW5qDWR8", "W713yxK", "WOqMWPlcGSkY", "W7VcOSkKW5NdIa", 'rX/dKbBcKG', 'F8k4k8oZFq', "e8ofW7NcIwW", "lJVcJa", "oCkdWOi", "WPK2W4Po", "WQGbrSoIW54", "bNX6n8oa", "W4FdH0OcWPW", 'W712W51nWPe', "4BAOY6/HTyRHT795", "W4OwoSkvkW", 'WRJcK8keW63dGq', "W4BcU3SaaG", "dmk/W4FdVCks", "WPm2W5eFWQi", "eCoTzSoPjG", "W5VcRSk+WP0p", "W73cM2W1ja", "D8ozfe/cTa", "4PQ1W6/cOXqN", "WPvaySkioa", 'WPnkrG', "fmoXz8oSla", "DCkhdGK", "WP80WOToWRC", "WPNcK8kpW7m", "WRCtdCoZW50", "aCo8WPlcS8oJ", "kW3dOIVdPq", 'WPW8WOrnWQu', "W7VdO3eq", "W60bCmk7W6u", "eM3cJJVcRG", "uvhcJWBcNW", "W4r3W5ddH8oUWOO4ymo2eu8k", "W4WlwsVdVG", "gY1/omkD", "u8kSfK9p", "WOFcLwChaa", "W5pcQgapca", '4Q6+WRDwemkg', "W5lcRMu", "W6dcT3z8WQm", "WPNdPXK5WOS", "bmoXW7BdMSo3", "zCoGWPdcKq", "WQFcQ8kcW5VdGW", 'EafPjSkW', "lsRcMmkwja", "W4RcPxL5WRW", "WOO/emk2lG", "W50HfSkWya", "W4jOk8k+na", "cCk6W6T/nG", "4BAY4BsAW5xHT5VHTz4", "tNdcLxxcIa", 'W450e8oloa', "jJ/cHCkoeG", "pCowW7pcL0a", "EtOMWRTm", "W7LJqv48", 'WQGCW6ScWPu', "W4VcTwOeaq", "B8owWQZcPCoq", "WR/dQmk5WOVdHW", "WQmym+g0LEg1Uq", 'evlcG3xcHW', "WRdXI4oAnSo4W4G", "xghdLCocW6u", 'W4ZdM1ldUrC', "vMhdMmok", "WPK+W5CfWRC", "W6X/Awie", "WQKtt3hdOq", "hSoxWQVcLwG", 'WOOwW54xWOm', "YjRiSog2I8oB4Bse", "W4D1W5/dOgm", "WOq8W4brW7C", "W4bWWP3cKdq", "qXnhW582", "t8k6W5lcQCkS", 'zGCWWR1e', "rc7dOq", "WOuRW5yuWRi", "Fb5JnCkQ", "WPRHT7dkJog0LUg3Iq", "lqNcM8o6wW", "tW8q", "WOmzdSks", "WQlcQmkZW4ldQG", 'mmkyWOTiWRu', "WRetdmoOW50", "nZVcLmkzdW", "nmoRzW", "CSk6iSk+", "Y5NiQSQF4BE+4Bw7", '4BwWWPdHTOBHT74P', 'cdVcHSkjgG', 'qSkdW6NdGZO', "DmoZWOG", "W5OmW5qvWRC", "WPW8W4OwWQi", "nqNdMSoPga", "W4SyWOisia", "4BEA6P2Z4BsQYOVcUq", 'W4NdR0ldHaq', "W5FcRMyzfG", "WRpdHXBdKWa", 'BXhdVYW', "WQL2Bh8F", "xZ/dMINdUa", "4PAj4Pss4Psz4PQI4PY7", "4PsM4PwY4Ps14PA84PwE", "ASk0kSk8", "s8omqeZcUq", "hWVcPSkJaG", 'srHCWOmV', "wSkkWQS", "qGKaWR1l", "vc7dItdcRq", "zmoYWPFcKCoc", 'B8oVWOXOvG', "mrRcK8oTga", "WPO7WPhcGCkP", "W4TdW6HcWPS", "W7KgBmkqW6m", "AGKUWPfR", "fNNdQIZcIa", 'jCoIWPlcISkO', "iSohxCoAca", 'WOBdSHi7WPS', "W7SgoCkwpa", "Fmk3bSkuyq", "lG3cO8o4sW", "wuVcVhFdMW", "BHrbiCk3", "W7j1W4i6WQ8", "umkalX40", 'FKZdMSkOga', "zCoKWPC", "yqVdR8k7xq", "4BAi4BEcWRBjS8I4", "WQGheSo9W54", "jvtdKc3dVa", 'W51WW4jiWPG', "WQyyW644WOq", "W6WsD8kf", "ucNdQCkiAG", 'W7u5j8omfa', 'nCkoESonbq', "thdcLdZcVq", "WOFdSsLp", 'WPrDua', "tXXwW5aR", '4BETuoQFHog2IUg3Uq', 'k+c0UEc1G8oq4lsD', "bg/cQ2tcKW", "WRWeWRpdN8kl", "WQHwcSoUW5q", 'W4SaoSkunq', "W486g8k4na", "aN/cR2lcGG", 'rrK2WQHt', "dZVcTSoSBa", "bJ/dHW", "WPhcGmkMW43dIq", "o8kbDLzt", 'caZcJCkkeW', "4lE+4lEE4lsJWO7cQW", 'Dr/dOJBdQW', "W4WdWPDxkW", "WOlcUKvT", "vwddNa", "tH8+WR1E", 'W6pcV8kO', "BCkemG4", "lhJILkhILRZILz4", "tWj0iSkW", "WOu7WQ53aa", "WOVcVGGOEq", "hwnVWPTX", 'qHGBW6Lt', "awBcVeNcUq", "WOeSW4SfWRm", "Ct3cR8onFq", "WRSXWP06", "WQeXW6C", 'qHhdUsxdOG', "W4JcKvmnlq", "CenNlSk3", "jcBcNmkvca", "W47cTgnI", "W4BXIAEs77Iha8kqW6G", "WPL5WODgWPW", "tmkkicq2", "jZRcMq", "WQNdNIGfW48", 'ymkliaay', "W7BcTxGwgq", "W4bLwgOZ", "nmkdmWmz", 'WPWGW5yyWRu', 'ArHZlW', "WOu3WOdcHCk5", "C3RdJmoaW68", "eZ8zW64", "oComWPFcRmkQ", "hSo9W6JdOmo6", "WOnAv8oxcW", "W77dUgadWQW", "WPL3W5auWRu", "Bmk0nmk5ya", "WOnDFmotgW", 'W4OEoCoxbW', "W5e/W4SwWPq", "t2VcHJlcUW", "oNHcWQDA", 'W6CJW5z/aq', 'W4uPha', "WP8dWPa", 'zbpdSW', "WPddSxb2WRi", 'WR5CgSoUW5u', "cwvBWQz6", "nWXWlmoJ", "W5NcPx9KW7i", "W53dR0ldKq", 'W6zgu2OU', "n3q/ySku", "ddNcLmohBG", "W6NdQ2agW78", "W5XoxmkX", "WQO7x2ldUG", "W5apW4uDWR8", "WQ16lSodW4a", "WP8TWOy", 'W4bpWOZcUrW', "wg/dKmoCWQq", "FSoeqehcQa", "WPiVWR7cM8k3", 'W44ika', "4lwsu+c2N+c0T+c0QW", "E8kjmdy3", "kNDxWQDc", 'gNiJySkw', "WOpcVqGO", 'WPL1WOGfWPW', "WQ3dLIpWP4kdBq", "egVcVNNcLa", "4Ps84PsF4PsU", "tNhcHJJcRa", "WOaCmCkCdG", "sc1WqCkB", "cbhcT8kZnW", "4PEN4Ps54PER4PAY4PwU", "W5LRWPFcRda", "W7lcR8k5WP0o", "W5a0vCkQW7C", 'ySkapW', 'vgddSCoKW7m', 'omoGW7xdVCoS', "W74NwmkKpW", "ASk0kSk8yq", "W5Gnd8kZma", "rCkKccG", "fmo4WPJdOW", "WO3cTK0", "tSo9WQDKEG", "W4HZWPa", 'kIvhvCo3', "dEg1Sog1RmoP4BsQ", "mwzgWOvY", "W7hcOfT8WP4", "W5FdR1/dNa", "EbLL", "WP0MWPG", "W4CoiCkBEq", "WRutWPRdUmkx", "nq3cL8k7hG", "jdpcKmoAwG", 'm+c3LEc2P2FGTBS', 'j8ohW5tdI8oN', "EbLPkCkK", 'jSoxWRxcSmko', "fIRcUMlcLa", "fCoMW6RdVSob", "EfVcPrFcOq", "uHDnW4G", "WP4TWOJcNmkW", "WOpdOXa5WPW", "jwVcOhNcIq", "e8kQW6GYiq", '8jcmGmkoomkTWPK', "4PQt4PIe4PMJ4PQf4PQS", 'WQmjWOxcMCkY', "8j+dQEkdQFgdKj4K4BER4BEI4BwG", "sM/dJCoAW68", 'W5bUWPa', "W5WId8o/W5a", "eCkqW7JcLgC", "Ykbp4BwT4BE64Bwt", "W7j/W4v1WRO", "WQG9imosW4S", "bNJcRW", 'nmkNW7Kbhq', "WRXSCmoRfG", "f2VcVNe", "W753EhKE", "WPSQWOZcKSkQ", "CJBdHahdJq", 'o1BcP/ghGlTd', "WOtdU2LKoa", "W4PpBCoAEq", "B8kmkGOB", "FCkapHS", "WPu3W5a", "W4Xib/cDO71+", "4BE56P2Z4BELW50", "qb1aW5i6", "gsHCra", '4BAs4BswoEg0LUg1Sq', "W5/dMmoHWPtcHW", 'ESooqvVcVa', "l8otWQRdN8oA", 'yXVdOIhdPG', "WQvivSoqfW", '4PAN4PEC4Psj4PwH4PAM', "rX/dGrNcHW", 'WOFcIMGnbG', 'itlcQSkweG', "eNdcR2lcIa", "hmo4WPZcUSkS", "WOXIkSoVW5u", "l3r6WR5f", "nHxdH3xdQq", "Amohw0tcRa", 'WO9pD8oA', "zSoOWPdcK8oj", "CHZdSZhcGW", "W7mYWRfzlq", "WORcVLXRpa", "4lAeW7fMW6yg", "WOmEWOBdUCky", "W4VkICMRqog3PG", "F8kAWPPhWRy", '4BAc4BENY7ZHT67HTRa', "W4ClWPjC", 'uwVdGa', "hCorW7/cMge", "W4z4W5xcTde", "W4NcV8o7W5Os", 'amk/W7K9pa', "lSoFBSoskG", "oeCktq", 'cmoHWQFdSCoX', 'W440h8kODG', "BqXSla", 'WPDmtmogcG', "W4uCiSku", 'vr/ILkpIL47ILly', "w8kjbSkbxa", "4PIP4PUu4PU64PIS4PUc", "vb1hWPW/", "W5/cO2j5WQa", "xq7dNbNcUq", "W5/cR1GzhG", "xmkNeIyH", "bCkUW70W", "4PAB4Psr4PAN4PsA4PEc", 'WP11WPDaWPK', "zEc3J+c1R8oA4lA4", 'BqiGnmkM', "rSkPjsmb", "W47cThq2WPm", "EaaG4lEZ4lw4", 'o8kgW4SHhW', 'jJJcT8kOmG', 'W5GpWPPrmq', "rSkHW4JdR8o8v8oSWRrbk8kdW5lcSG", 'gr7cK8oPsW', 'hSkEWR4/WOu', "cab2ySk6", "W5dcQCo3WQ3dSa", "qCkgW6qWmG", "WPGSW5VdSwO", "W4OuWOddV8kq", "W5m1gSoh", "WPxcVgbZWRu", '4PwH4PsE4PE04PEa4Pwy', "iSkpWPmAWRm", 'WQ0Af8oaW7a', "merbWRro", 'W58nfmkdvG', "mmkqWPCAWQm", "W4yOe8odnG", 'WOlcTY8PWO0', "W7xcN0e", 'Amo+WPLKta', "W4qZamoB", "W4RcT1fMW48", "oX/cICoPxW", 'W5GTcmk7iW', "CrVdRJy", 'WQ4HWPeQW7qXWOpdG8oyWRW0cw4', "WO3cT0fPjW", 'EhBcLtdcQG', "8lg5SCo7WPCRW7e", "8lgbI2/dLqag", "WR4HsKJdVq", "mCo8W4RdM1O", 'zHBdTZy', "W4X5W4rSWQO", "W4W+WPZcRJ8", 'bJ1QnW', 'uhBcIt4', "FmoEhG", 'WQ3dHW8/WQu', "ec7cKCkBdW", "WOP8WO0bWO4", "DvlcOXFdQq", "6P+34Bwc4Bs14BstWRK", "h8oMWPlcSW", 'WQZdTHuWWOO', "lxbqWR5z", 'W43cTxSazq', "nmoBtq", "CCMZYB1i4BEl", "W5pcUxev", "wcZcOmknAG", "AsnArSo1", "WOnKWPaqWO4", "x8kFW7FdVCkn", 'W5Wkkq', "wSoLW7JcNNS", "ASk4lmk4yW", "4lEkxUc0UEc2M+c0VW", 'BmkenqPv', 'fNNcUxhcNa', "f8kqWRhdMW", 'WRRcVmo7WPNcJq', "4ls24lEGvoc0N+c3UG", "nCofW5FdQ8ot", "nthcHSko", '4Pw14PAv4PE94PED4PEj', "ESoykWOb", "WOfqrCol", "W5GHhCkKEG", 'W4SkpSkz', 'lxbqWRTA', "bLipWPW", "rfjaW487", "W5hdUUc0N+c1R1S", "WR5sdCo6", "qmorWQ3dKmox", "jYlcNmo8xW", "bmoVW7OWoa", "CCoHWOH5", "WRTxfmoYW5y", "fCkqW7VcKMO", "WPq4pmoDW5q", 'W4NcV08niq', "m8oLqutcTa", "oMrAqmkW", 'WQiNxMG', "4lAdtsfTW4K", "BszRbSkw", "W4r2F2GN", 'uYRdOftcNG', "fmo4WPG", "WP82qvpdOW", '4PEW4Pwz4PAK4PwX4PEw', "WQPbemo4W50", 'D2RdN8olW5S', "W64voSkPka", "sGRdMHxdMW", "Y5RcG8MdY5no", "W4SeWP8C", "cGpdMSo7xq", "WQnqCgjC", "vINdMtddUa", "CCknWPSEWRu", "tW3dMsxcHa", "uWKiWR1s", "4Bwv6P214Bs0YRdcSa", 'g0ZdGa', "W71bW41RWPS", "4lEC4lEt4lw74lEA4lwk", "WOBcP8kJW4ddJG", "o8kAW5Oila", "fmkTW704iq", "gN7cOMxcMq", "W4qUhConiG", "WO8EWOhdQmkl", "W4W/dq", "4PYsWO4dW6Ki", "W6KaiCkwnG", "4Q++sSorzIW", "o3bqWQ0", "gWddMau", 'W4mZbSohlW', "yrDBW447", "yI3dH8k3zG", "WRlcT8kY", 'W6ZdVvpcKa', "WR9ecSk1W5y", "W4elWOXibW", "Yk/iRUg0QCkz4BwP", "t8kK8jweVU+5Q1m/", "4PMl4PUm4PQJ4PQf4PIx", 'imkoB8oCcq', "W5RdRupdGGa", "l3rxWRPt", "sgm/n8kt", "FCkWm8kPAW", "BCoUWOFcKCor", 'ht/dMSoBFq', "aSovW7VcL3a", "mcnjrmoY", "W7n4W4L9W6i", 'W5S9f8kJpW', "8lIJQKqsWQSx", "W546W4SCW7y", "emo7WONcUmk7", "WQBcU8k1W5VdLq", "mCkcbX4xECkC", "g37cVMdcIa", "WR9acSo6W58", "jY3cK8kI", "W7Czwq", "W7lcJ3OYja", "vq4m", "dNG8E8kv", 'l8o7W7/dG8o7', "WRetWPlcLmku", "WQC5WPNcVmkN", 'W5aXW5afWQy', 'WRzChG', "CJpdPINdNW", "ESk0FCoS", "4lw94lAU4lAE4lwh4lEd", 'W4qXWQ0qW4G', "W597WOBdOd0", "qYtcG8koW5e", 'DsG+WPHk', "W43dUK4WWOC", 'WRrRW45QWQa', "W67cUxz0WRu", "WPOQWO/cNa", 'nmkzWOejWRC', "qmoIux3cQa", "eCo7W6ZdT8oT", 'WP11w8odpa', "W6qwzmkwW6C", "DGRdTY7dPq", "WOOBmCkzeG", "WPCvxNRdIa", "seqKDSko", "W7ldSLCJWQG", 'mSkeWRS/WRC', '8kMjQpgbUjZXIzMI8kIiGpgaMlS', 'uvRdHr3cJW', "jHvrsSoO", "W7WlWPfBnW", "Aqz5W6Sl", "ymkgnu/GT5O", "eoc2Loc0GUc1UUc0Oq", 'W48plCoW', 'DmooWQDrrq', 'hmoMW6ldTSk+', "oI1zASoc", 'fMNcVNxcNW', "WRauqSkvW6tdOLS", "E8kInmkTAW", "4lsP4lAJ4lAyWPlGT5C", "8y6YPg9KW6er", "W6LWW4L+WQ0", "zHpdHra", "WRuTq2ZcUq", "oCouWRpcMG", "ESoXkCk8yq", "yHVdUdddQW", 'WPG1WOldQCkt', "WQZdUbaWWOa", 'wSkdimk1yG', "WP8EWPhcOW", "nSolsmolbW", "W69+W4W6WRC", "W4lcVxOetW", "W7pcR34XjG", "W5pcSgW5nq", "pCoVWP95tq", 'xq7dHqxcLq', "WRrsfmo+WPy", 'jCkdWOyeWRu', 'E+c1Soc1IEc2Voc1UW', 'W5Wki8kEfa', "WOieWOhdVCkk", 'W53dRXG/zSodWRTKWQ3cI8kfvKC', "sGHHnCkG", "W5WdWP4", "FCkoimkLFW", "o2xcMMJcGW", "kGNcGSo8", "4lAE4lEa4lEsz8k3", "zSkvlWes", "W6ShASklW6G", "xGNcM0/dHG", 'iCkQWRLQua', "W78chmk5nG", "xSkEWQtcIgW", "W6K7gCohBa", "m8o5WOf4vW", "W4P2WPtcTa", 'uHnbW4KT', "rc/dQa", "WQK3q3/cVW", "n8ocx8oGjG", "W6VcO8k2WP7dNW", "W6WmqM/dVa", "WP8pfSoLW5i", 'lmkarmoyda', "4lwxEConh8kL", 'W5hcU2n5WRW', "vwdcG8keWOa", 'nHJcJSo4sW', 'kmopqmov', "WP7cUre5W4a", "WOe/W7u5WP0", "4lEd4lA4a+c1V+c3QG", "CmkYpG", 'W6VdU1JdHaG', "udhdQa", "W5pcSgXltW", "FWjSk8kS", "YypkVfNHTOdHTR8", "W63cLmoMWQtdTG", "W51ZWOq", 'DcdcM8o8uq', "oSodW5ldTSo2", "WOD5WOOl", "amkAW4GxaW", "hSoWWOq", 'WRutfSo9WPG', "W5pcT8k/W58P", "xY7cMCkoWQO", 'WOhcVCoHW4FdGG', "4Q+QWOnXySk3", "n8okxv3cRG", "WO3dLGpWP4w9Bq", "x8kykSkKza", "xCo6W7pdPSoU", "nX5Snmk2", "xH/dIa", "WP98h8oTW6e", 'W6iYrCkCW5m', 'rr1aW5iQ', "ucZdMNJcPa", "ESofcGyE", "WOv1WOOu", "p8kiWP0qWO8", 'W4r7W4S', "WO8jW4RdVmoe", 'W6dcHenpWQS', "W6GCkSk+ia", "fYRcH3/cJq", "f8kaWRKIWRq", "BSouWQxcMSo8", "W41TW5xdOhK", "WOKlfCoLWOe", "W7pdUMiyWRS", "FmknxuFcUW", "qb0jW4mT", "W517W4/dQNK", "pSocWPFcTCkG", "WRxdLeq7WPy", "x8oLWPvera", "Bb9YiSkN", 'n0lcNCoHta', 'trWDWQPp', "wbVdMbK", "W6HsWR7cHqS", "W4e2g8onpG", "zmk7W4NdMSkf", 'W7RdULVdLam', "jmkqWOisWOq", 'o3XxWRCm', 'W5BdTaDPja', "taLdnSk2", 'WRtcV8kK', 'rvijW48X', "WOrwr8ol", 'WRxWV6Yi', "WOJdU1XNDa", 'WO5CuCkiqG', "WR/cOJ9r", "v2ZdJw/dQq", "ew1/FSko", 'WPOuWRddRSkZ', "WOKrWOxdUCkq", "WPGzWPBdVSoz", "4lEo4lEP4lEHemo5", "W443fCofkq", "WOW9bmoqW54", "W4pcUxOc", "gSoNWOq", 'WQhdPJC2WQm', "WPSlcmo0W4K", "awxcPZddGq", "Bmkvku8z", "sNZdNmoDW7K", "W4S/e8oqlq", "W7WABmkkWQW", "WP/dPbKUWOe", 'omofW4/cS0y', "W5W+WRr4nq", "qG7dU8k1ya", 'W6VcTwCktW', "W7OwySkhW7i", "mmkRlSk8", "W5b/vfOW", "tY7dHJFdHG", "u3RdKCoBW6G", "WOBcMM5Waq", "W4aKhSkrhq", "ymoSW4tGTltGTBC", 'k3rxWRTf', 'WPHJWO5r', "DrKQWRHs", "ySoeWPdcKSoR", "WQVdMZCzWR0", "WRLCfSoPW5W", "4Ps84PsF4PEN4Pwv4PEj", 'W7T3Eg4c', "iCkow8oqcG", "W4eOg8opia", "WP7cK8kLW4BdRG", 'WPKaeG', 'WPSnWONcPmki', "WOTaW7e4", "WQPsdCoVW50", 'gN48qmk7', "W73dI2tcMMS", "W7S9B8kCW7C", "W49ZCget", "pb/cN8oPsG", "W7ddO2e", 'W60EamkGma', "WOFdSLZGT6hGTzK", 'w8oLWQK', "WQHAhmoOWPG", "sZ5HbCkc", "W6pcImoUWQtdTa", "phrxWQTr", "kIZdLCoxwW", "WOhcVLT7nq", 'W7rjW5bFWPG', "aSkSW7WJna", "W719W4H1WRa", "WR1AdCoOW4W", "W5xcTZbIWRO", '4Bw2kSoNmmMI', 'WOGlfCoL', "W5tcOx1fWRC", 'BbpdSIa', "W4iBcmkzgW", "WQLwf8o/W7u", "bSoWWPpcUCke", "W5i4vmo3hG", "wr/cKq", 'WPmChW', "W6JdP8oJWPNdKG", 'W5xcPxvL', 'yf7dOIFdOW', 'W75MW55FWRC', "jSkFW7OYhW", 'zWtdMrFdMa', "ngpcVLJcJG", 'i8kpWPmlWQq', "WPvCtCowiG", "W7VdP3ys", "s8of8l2fHNuy", 'WP0dfmo4W4e', 'uH/dHsRcJW', 'lmodr8ovca', "WRVkImIOoUg3Mq", "W4WooCkzmq", 'vcrHW7Gk', 'imowqmokea', "W40dWO9rkq", "ttmbWPPX", 'WOLZWPddOdG', 'vqfvkSkq', "f8o6WPNcPa", 'dSoMW7tcUmkK', 'e+kxGokuTEkuQEkxNq', "axS1omky", "maNcImoPta", "8jwBVKpdQqFWNlYq", "it/cGCkB", "4lAf4lAo4lwi4lsZ4lAZ", "WQmXxMRdVG", "s3RcHIhcOq", 'WPW2W4m', "4BsN4BsBW4FHTy7HT44", "4BERYzpIGihHTR/HTBm", "gCkSW507ga", "mNrkWQi", "WO0PdCoeW58", "qLS/DmkB", "gwi/y8kF", "lmowa8kzxG", "vbqDWQvc", "W4u7jSoTaa", "4PAB4Psq4PEjeokxGa", 'W6RdSgSuWQy', "4lwJ4lwIW7VdLaS", "W67dVgOaaq", "fvRIGPnvW4W", "mCo+WP/cP8kb", 'W44PvmoriW', "WRyJwx/dVa", "xCk4W4hdVCoS", "aSoWWPZcQCkH", "xCoZWQFdGCo7", 'rYNdHaBcHa', 'w8kgfqeT', "WQyzC8kd", "dmo3WQxcK8kH", "W7LZBxKt", 'jmkeWPCBW68', "A8olWOXKrq", 'eSkQW7TXoW', 'W5RdR0ldLqy', 'FGhcN8kOwq', 'qrpdNHVdJa', "W7NdG10EWR4", 'W4i1jCoKpW', "b2pcPx7dKq", 'DmoYWOe', "iddcGCkFcq", "sG4gWQC", 'mxroWQS', "yZ7dVSk2Fq", "W4ODWPRdU8kq", "W4Wz4PQcWRJINki", 'WOLxWRhdQMm', "fSolr8oDaq", "WQbc4Pw44PEx4PwA", "YPNiISU84Bwg4BAo", "BmkgfSkEAq", 'W4lcRYnRzq', 'emoIW5xdGmoP', 'sY7dHXJdLa', "WRFdTmoWW5pdKW", "vJxdU8keAW", "FY8d4BEU4Bs5", 'wGZdSZldOG', "W5tcVNz/WRW", 'DXVdPI7dTW', "W5FdSwr+WRC", "W5GTdmkLmW", "nX/cMmkPfa", "E8kJEmk9mq", "WOmym/cCGjnI", 'W7Oeo8kgfa', "yf7cT2G", "W4GumCoCW5xcLwm", "rrnfW4G3", "W54ZW5qw", 'd3tcTMlcRG', "cCo7W6RdT8k0", "4BA0Y6tIGjtHTR3HTB0", "W6e3sCk+W6e", 'WQ9dhCo6W4W', "mZZcN8kjda", "dCo1W6/dKCo1", "WQKLWPyQW7i1W6pdNCoyWR4DdW", 'vxVdHYFcRa', 'E8ocqa', 'W50pWOLbFW', "cqbqW4WX", "CrFdOI7dQW", "WQbGpmobW44", "W4yXcSk+oq", "kJpdMSkpca", 'WPCxWOtcLmk2', 'WQ82qNNdSa', 'Y7xHTPlHT7JdVCMq', 'W586fa', "x37cLYhcOa", "o3bqWQ1e", "nSolr8oDkq", "WQ5AdCo3W50", "WOZdSru/WOO", "WOJdTcK6WR8", "W7pdSsuEWRK", "WODOWQCtWQK", "oX7cImoNsG", 'WOi8W5qDWRC', "WPTLWPCi", "W77dR2a", '4PM7t2FcVYS', "WPGvWPtdRSkn", "n2/cVhxcLW", 'DSoVWPq', "W5PtWQ5B8yQNPW", "WPiuFg/dIG", 'WP0dfSo9W54', "smoKWOHZuG", "oCkhz13cVa", "W4yTc8o9", 'mMadBCkQ', "W7JdObBdLrm", "4lwc4lAR4lw1nmoi", "gItcVhNcKW", '4lErW7hGT6JGTj8S', "4lwB4lA64lweWQpdMq", "AmomWPtcKSoM", "v3RcNG", "CbZdVaNdOq", 'vbXuW5e7', "W57cV8kOW54j", "WQvpBCoAEq", "WOm8W4OvWPS", "qVcAVOS", "W49kWOLxna", "W48RqCkVW4K", 'W6SsD8khW64', "WO/dOX01WOm", "WPy2W5yAWQu", "ounxWOL0", "bxy5E8oA", "WPGIWOZcKSo+", "pCkeFGWx", "EGj1n8kV", "WOq8hCk6kG", "W6CplCkAuW", "WO/cULH8pq", "pCozW6/cKwy", "WRKDWRldQmkD", "WO8miSkxna", "FSoIWOX/", "AGZdRW", "WRhdQ2GvWR0", "8jMiHHqdWPHV", "k8kl8yAxP8kfwW", 'uXxdGX7cLq', "WRxcIa8", "nmoMWQFdTCo3", "WPpcHbZHTQJHTA4", "W63dP2qsWQS", "WPNdSHi4WOO", "4QYktmoqW5Xr", "CmoRWOrN", "4BEAYQXz4BAFYlC", "W44giW", "W6NdPYuCWRO", 'WP8TWOpcMmkM', 'aw/cUwxcLW', "pCovW6xcJ2a", "4lwkW6FGTlNGTlNcLW", "W5ZdVuxdKqy", "fvRcI1u", "vCk14PsBW73dQq", "CH46WQD/", "ithcGSkufW", 'W4Hjs8kDcq', "W7VdP3eqWRy", 'k8oGzmoGaq', "awVcPhtcLa", "WPNdVXK4WQS", "WP8BWPVdM8ky", "mq9bqSou", "Cmoaw0pcTa", "WP8peSo4W5q", "WRpcVCkUW4ddGG", "xxxcJIFcQa", "jsTquCoK", 'WQH5nmoAW5e', "qs3dPCkhBa", 'WQu3W4ejWQy', "W6ShzSkJW4i", "4lwe4lEE4lE+4lAM4lsJ", "W4/cJ3KVlG", "W7BcLem2WPy", '4BED4BstYjpHTP/HTR8', "x2RcMComW7m", "WRrCu8oDha", "W4X6W5xcRZC", "pY1xvCkW", "WPjIWO0dWO4", 'x33dISopW60', "lxbtWQjx", "sdFIGBi3W5a", 'WRvIg8oHW4a', "8k6dHUkaPpcXG59t4Bwa4Bwa4Bww", "DbGeWRKD", "FZ9WWRPx", "k/c/N7q", "u3JcR2dcLa", "WPS8W50", "v8kOWQC", 'WRKtc8o+W4G', "WPu9WOqgWR4", "CmoVW5m", "W4HZWPddVG", "WPZcUKTJnq", "W4/dG3VdMGG", "W6n/WR7cSGO", "WO/dPq4ZWP0", 'W5OmoCktnG', "pNLiW64k", "d/cGS77IGy/WVlcsjUg2PEg0UW", "WOjUzCoWca", 'if7cI0tcRG', 'W57dR1WcWRO', "wHDZfCkG", "WOWCWPRdOSkl", "F8kzWOCkWRq", 'W74XW5v/WRm', "gLjgWQHx", '4lAtxEc2QEc0M+c3Pa', "W4ZdUWjmmq", 'qCkQW7SJoG', "th7cKYhcRa", "WReSshNcUq", "8ywJISoesSkPpq", 'Y6RHTixHT5e6W7e', "WOiMWPNcGW", "rmkqc8kNEG", "W4fan8ktkq", 'e8kMW6OIDq', "xCk/cd47", "WQKKaSo/W5C", "zfNcOJFcRq", 'WQGJrgC', 'WQ9shSo+WPG', 'WRCjf8o4W6i', "WPiSWPBcMCkY", "WPvhnComW60", "W5aZgSof", "W7FdTMGDWOa", "W4KKWOLwmW", 'swVdJmoxW7W', 'Ee/dKSoAW4W', "k3bhW64x", "WODvsa", "W44Pdmk2", 'dN48CSku', "W75JW4L7WQ8", 'lmkRW4q', "WQ9bfq", "4PMDmJniba", "zXNdOHVcVG", 'WRNcU8kVW58', "W7JdP3e", "YApjPEg1HKu", "4BAUY5tiJmQ94BwE", "W4NcSMj/WQi", "CGH5", 'WRu/WOH2WQS', 'W7ianCoRiG', 'eSo6WPlcUSkL', "W7vWW4P/W6G", 'WQD2W45UWQO', '4ls14lwQ4lEI4lA5Da', "YQ4EYjpHTRNHTQq", "WRtdSSkVW4hdIG", "WOaBf8k5pq", "4PsG4Pw94PwP4PEj4PsN", "A8kwbSkNFa", 'WOpcUqWZWP8', 'CCkagmkavW', "ymoOWOG", 'xtNdLX/cOW', "hSoZW53cS1W", "WOmzCmoxdG", '4Q2vWQhdJSk8W4W', "W6eRWP9ada", "rX/dGGdcIG", "feiaWOHNWP3cPmoXW6Ses2LrWOu", "kmopwq", 'AMNcOtZcMG', "W6RdO2mcWPO", 'imkTW74qiG', "bCkQW7OYjW", 'C8oTWPlcQCoN', "xxBcIW", 'saKEWPHI', "W4/cQh0rvq", "W4ClWO9rlq", "WO3XIjkX", "Bcf6W7j+", 'eY7cJCksnW', 'WRvCqSoada', 'W4WwpmkRdG', "W4ZdUXiO", "pmkYW4RdLSk+", "ymkgzIGC", 'iEc0Koc1VSoq4lwM', 'W5RdShCEWQ0', 'WQLWDNK', "W5qUfCowoq", "WO8Ab8oJW5W", 'W47cVKnIWQa', 'CbLVnCkQ', "W6tcQSoZ", "WQLBemo9W4W", "W4XTWOBcOt4", "W6iMymk3hq", "WPZcULX8mq", "W6a1g8ofia", "FIHaW40i", "ivW3B8kw", "jftcNeG", 'E8kgpbu2', "WOxdO1W6WOa", 'vw/dNCkoW5K', "WO0tvmoblq", "WOu/p8kvlW", "imoCw8owfG", '4Q6syGDpW7W', "W4mhWP9qeW", "omkUWRGYWRC", "t3ZcLtZcUq", "C2SCrmo1", "BmkgmGOr", '4lAv4lEeW5xdM1e', "W48tkCk4tW", "4P69WRCSmmkk", "W4abka", 'osbPvCo4', "4PIr4PIm4PQl4PU/4PMr", "W4LfW4LIWRC", 'W4eeamkZoG', "WOBdSLXMW48", "kSozr8ovcW", "qH/dGWy", "Y6C34Bwl4Bsq4BE+", 'jGJcJCkrla', 'BSoZWP0', "tCoaWPFcUCom", "WP44W4Ku", "vXpdTCkVrG", "4Q2ntsOdWQy", "WOrJWO7cLmk9", 'WOtcVLO', "W4OopSkFEq", "W57cTCk4W4Gw", "W6XJBgGf", "vZpdOCknAG", 'WPipc8o0', "4PEY8kMgSLhdVdW", "efZdNmoEW6u", "WR/cOUkxO1hdVW", '4BAN4BwqYj7iOUg1Ja', 'W4zUWPa', "YlpHTzpiKUg3JmUf", "lmoAua", "YlBHTixkN8oT4BwC", "ECoRWPLQ", "W69FW4PVWPi", "4lA84ls34lsRW5dGTiO", '4BsG4BwWsFgnGy/IGilWN5oxrG', 'W4KGhCkYka', "4Bwt4BwPW5FHTQGl", "WONcQfTPmW", "WOPYwa", 'W7BcUh59WO0', "W6XHAMWr", "WQtcP8kUW4ddGG", "WRqNtgJdRq", "ymoZWPdcMCow", "A01VjmkG", "yWzFx8o3", 'gMRdJmoCW6m', "rSkiWRNcNZ4", "BxFcGrtcQG", "W7XGDq", "WRnEhG", 'h3dcM+g1REg3Qq', "Bmkxnaah", "W74Nfg7cQW", "lYNdSYpdUG", "WP9BE8o8bW", "W5KpWPvwca", "WOPOuSktpW", 'W5pcTSk+WP0D', "WP/dGI0PWRu", "W6hcQmoHWOtdMW", "4lsY4lAOW4qjWO0", "CSk3nCkJyq", 'nSoaqmojfa', "W4JcRNa", "WPe+W4e", "wqLhWQrc", 'rWruW4G/', 'W6i3fColia', "frxdL1xcGq", "W7FcQmoKW4RdLG", "tSkmpYKs", "wmoxq3RcRa", "ESk+mmkIya", "W7RdI3WtWRO", 'qmkLW4tcVSo4', "qqzAW5i7", "8j+bGSk0WPZdINa", "gfZcM1NcQG", "n8kdWP4nWR4", 'aeDjWPyn', 'WQ4Nx2BdUa', "WO0zWPpdTa", "WQuLWPldUCkG", "WRiNssVcUa", 't3RcIthcHa', "fCkQW6CLEW", "W4ZcL8k2W5a", "W7ddRgbrWQ0", "cmkEWP4WWQO", "n+c0Koc1LUc3N+c2Iq", 'WOiQWO7cMCkT', "W73cTSoKWQ7dRG", "W7dcO3HEWQi", 'WOrUrCotbq', "qJNdO8kfsa", "gx9OWOrs", "jmoEtmol", '4QYrWO4dW7un', "W4/cQCk+", "Y57jS+g3TCUO6P+H", 'W7pdQ2SA', "FZhdU8kNuG", 'WP1Wva', 'WP/cVKzSgq', "nhbA", "WPGvWOBdUmkv", 'rInHkSkM', "c3yKCSkD", "WQ/XJQgN", "W417WOBcOW", "DX50jSkK", "WPSMW4hcLSo+", "W65IW4i", "EGX0iSkK", "WPlcU8k3W5hcHW", "zFc2UQVWS4UG8kgOKwa", "oJnyy8oF", "WP4aW6ivWPi", "rf0DWQyh", "WOevWOW", "gI7IGPVcJSkG", "CreAWQbS", "e8kNEKBdVq", 'WQaRW4SxWR8', "lSoKFSo5na", 'WPNdJ2BdUu8', "WRKdwCkPW7/dH3e", 'WOxcUe1MjW', "W4eTaq", "WPpdNKpdKG0", "d1dcKq", 'mSkfWPWEWRu', "iComx8oWiG", "4Psb4PAb4PEK4PEW4PwS", "FKZILjZcQbG", "WQmWWOtdLW", "a8ofzUkwIvu", "WQxdU1PTjq", 'WOCrWPZdOW', "WPvZzSoklq", "W4Pq4OoxWQ3dKW", "W5pcUwqraG", "ra/dNGhcGW", "EEkeS++7HtddKCkS", "eSoGW74", 'W6NcQ2m1cG', "ymkhnsWh", 'WOdcO09Hma', 'ztpcRCksya', "W5XjW6VXGQEmWP8", "W7GEySknW6O", "WRWnv23dJa", 'W5SapW', "WOmyos1w", "gCoeW6pdM3O", "e8kGW7TXna", 'uWGBWQWD', "W5OCka", "W4uZgW", "Cmodr13cVa", "W7T7D2Oc", 'WP7dOqG', 'eCoKW67cMge', "WQiLqSkUW48", "4lEw4ls34lApcEc1Pq", "WOjGWPajWPi", "WP3cKh9Njq", 'jhSfESkP', 'WRv+i8o3W7O', "W6PRAfWH", 'qNZdOSkhjq', "bNNcRW", "zI0tW7Dv", "W61ZBwW", "WPm4vupdNa", 'W4iuDmk1W4q', "mmkdWP4", "WPuabCo9W44", "W4vZWOSnW5i", 'B8oGWONcLCkl', "abmiWQrc", "xtxdO8kk", "mNXhWQDB", 'WR5sdCo+', "W4OABmoEWQW", "uJ3dUCkeyG", "W4PRW59rWRS", "WOiQWO7cMCo0", 'W6KhlCkzdG', "4BsuYiFIGklHTyRHT58", "8kgPVCoQ8jMAGpgdUjhWMQQ9", "bCovW7JcJYC", "WPHKWOuhWO8", "4PEg4Pwc4PsT4Psl4PAz", "4lwxEConaCo2", "asRdGsBcPG", 'W5tcVCkUW5WC', "W4VHTlhjUog1Oog3PG", 'WRZcTeDMeq', "WPC3W5aeWO4", "k8ooub3cUq", "Bmk1adOA", "W7rJW54", 'oYfuwCo/', 'sgVdISoBW6y', "WPhcQmk0W5ddRG", "ah/cQhtcLW", "W5q/bSomlq", "W5hcQCoXWODB", 'iCohxCoaxG', "WRHvomodW5u", "WO1DWRmlWP4", 'xCkJiSkTEa', "W4NdOuxcNW", "4lEj4lsP4lwv4lwt4lwn", "CmkviW", "EH3dQCktta", "rH/dNXhcQW", "W4uneSodjG", "WPigWRBcSmkn", "W4JcTgnJWR4", "bmoyW77cLMS", "nCopxConaq", 'ALjWiSkX', "u8okWO/cTSoD", "f8obq8oGca", "Cg/dSSoCW5K", 'cSoLcCoQma', "4PA94PsE4PE14PEa4Pwz", "FmoavudcSq", "h8oXWONcSmkZ", 'xSoSrN7cLq', 'c3pcOSkaDq', 'W4iEWO9cnG', "WPD/n8odW4O", "W7C1b8owkq", 'WOj+WOipWP8', "4ls24lEFrSkWWPe", "W4HYWPZcOsO", "mCkJW6WWjG", "kColsmokaq", 'Yk/HTAJHTyJdMSUa', "WPVdOHmOWOO", 'W50HfSkZ', "n0fTWP9a", "W48yW5Sszq", "W4zfr8k/iq", "W6G+W4PZWQy", "WQe+WOH7WRi", "W7xdP+c0H+c1Smkx", "nSkubSkwaW", "W6ldVCkQW5VdLW", "WP8gb8oL", "k8ofWOhcG8og", 'eSkfWOCgWQq', '8jklKCkrx8kJbG', "4lAr4ls44lsX4lAI4lw9", "jqVdPsFdVa", "w8o/WO3cUG", "DrmmWRfx", 'WRiGj8oCW74', 'cKDj', "rHqfWQXj", "4Q+rW6FcVmk+W54", 's8kIiSoS', "W4RdQ1JdLcW", 'WPX7ASokoW', "WPRcGLW2WOe", "q0ZdQ8oHW74", 'WPZdVHKRW48', 'W5GHcmkJmW', "W4Waomkknq", "8jMFTo+4JW", "tNZcJW", 'fSo0WO3cQCkG', "mHBcICoDFa", "W4PMDgKu", "8j6aLVc6RRNIGOpWTyk9W4fsldu", "sJ1Ynmkz", "WQxcP8kJW5JdJG", 'WQZcVSk0W4W', 'fmo1W7tdPSo/', 'WO9qWPVdRmku', "W7/cO8kHW44t", 'WOhdSGu', 'WRdcOmkGW4ddIa', "umo8dSkwwq", "WPjlwSkstW", "fSo9WPZcQq", "WQStWOhdMSkV", "x3ZcMCoaW6S", "W4H6W5xcKYW", "4lEP4lEO4lAoWPZGT6y", "FbvEW4q6", "4lEa4lsi4ls94lwDWR4", "W6BcPgevaW", "WP0CeSo4W4G", "trddJYBdRW", "W6neWQ3cLdO", "zx7ILjpdMLS", 'umoeW6lcKh0', "WPxcIeSEW78", "tb1UlCkm", 'Cmo0WOVcHmoa', "4ls74lEYwoc1QUc3Ra", "W4e1bSoplq", "W58ztCkIW6q", "W54Thmo3EW", "WOCrWPVdQq", 'WQpdO1W7WOy', "ASoWWRFcPCoN", 'bSovW7JdM2u', "4lE8W4RGTypGTRtGTjq", "W5xcO2K", 'WPTIWOSgWPq', 'W77dLMasWRC', 'W5a9W5edWR8', "gKvWWOLB", 'WO4bfmkXW5O', "WRJdKJSvWQa", "e8kSW6fXeW", "fwpcPNxcLq", "WO9/WPmoWPe", "kGxcLCoMbq", 'eSkQW6C1ga', "WO0Cg8ooia", 'WR9FWR4zWOu', "W7hdO2Gu", "W6zGya", 'zCoiw8owcq', "WOHqWPZdO8kF", "aSkqW6tcMgO", "8l2pQU+4Ja", 'cxDjW6NIL4e', "jCoaW4Hi", "WRlcSCkpW43dVW", 'j8kLWRa9WRK', 'jCkpWOOC', "bCo0WONcQCkS", "W70wCmkqWRW", "BSoZWP4", "WO9p4PARW5P5", "WOCZDgRdTW", 'aKZcGeBdLW', 'oSocW7tdSCou', "WQvlrSotgW", "WOKrWOhdPmkw", "shBcKZNcRa", "W48zW5e4tW", 'pLfNWQDx', "W4ZcUxa", 'wIJdOSkkjq', "WP/dPq45WOS", 'C8oYW4tdKmkf', "AmkwiWTv", "CxXeWR1c", 'AZhcMmkEgq', "uXxdNrNcIq", 'yq7dGrJdGW', "W4XUW4VdLW", '4lEr4lsBW4tdKCkp', "yJFIM7e3W5a", 'hM/cUwpcMG', "avxcV2lcLW", "WO4FWOldO8kv", "jSosWOVcJmkH", "d8o+W7hdI8oC", "AGrW", "8l6DNU+6Mq", "YBBHTypdJog3UUg3MW", 'mgDhWR0z', "W6tcQ8o9W4RcHG", "YkpHT5BkKoQCP8oY", 'k8kdWOi', "WRi7xw4", "W4NcOx94WQe", "udhcRCkuDG", "W5NcU8kVW5GC", "hCobWRpcJmk/", "WOTFgSo5W7i", "YlNHTORkQUg2T8UH", 'W6L3pCo4gq', "W7pdSxn3WRW", "fv3cVNxcRW", 'Ch7cItlcVa', 'vc7cOmkBCa', "WQhcT8k5W4a", "W6RcVhzYWOi", "Fu10kmoJ", 'uHeFWPbL', "B0xdI8okW6m", "WOuEWPdcRCkl", "W7JcOMSqWRi", "WOv3W4quWPu", "FmkxkG", "WOLQWPZcQY0", 'DSoAxuFcUG', "Emoauq", "WO4vWOBdRG", '4lAu4lEh4lEt4lsBcq', 'WORcSKrToG', 'WRVcK09rhq', "lsejea", 'W4uzWPjgkG', "W54dWPbbmq", "4Pwf4PwE4PE14PE64Pw7", "WRTuha", "CCkWiW", "lfiv4PwAFG", "WQuQth8", "W5hdR1JdLWa", 'W7THmZDw', "B8o+rCoCbq", 'W63cKSk4W5aS', 'W4tdRruS', 'Bmk9mCkvtG', 'xxZdMmodWQO', "xdxdQCklAG", "8ls/TU+5GG", "fG4hW4bT", "WObyrSoCgq", '4BAWYRVkKog0LSoY', "hmo/W6i", "kZ/cO8o6Aq", "W6RcTCoV", "W5/cQCkOW5WC", "W6NdGXBdUq8", 'W5OkpSkoDW', "Y6JHTjD94BsA4BE/", "4PQDzbL1W6i", "BCoRWP94rW", "WQHtlSoEWQy", "W4RcT+kwMNZdJW", "omoIWPJcTSkr", "4lA74lwtW4O", "mx7cK8ktfq", "dwC/n8kw", "BSkWhSk8FW", "4BsbYjxHT7BjOqi", "WPK3W5CfWRC", "AZldLmkoDW", 'WPNdULNcKau', "jYP7ESoP", "mmkyWPea", "mSoMW4VdHCol", "F8kF4PEP4PED4PEj", 'e8kQW7K9la', "W7TzxmoU4PE2", '4lE64lEi4lE64lsG4lEZ', "vrDBW5Gt", "WO5shSonW5K", "W581B8knW5y", "fmo5WPtcVmk6", "e8orW7/cNM4", "v27cOd7cHW", "yH168jQINSks", "ASk0nmk4", "W5NcUCkiW6Ks", "WRT8W4HSWQS", "amoWWO7cQCoN", "WQhcU8k1W5JdGG", "WQHwgmo4W4W", 'W64AB8kbW6G', "W6jHW79nWRy", 'W7BcS8kWW5Gi', "nJTmWR5t", 'rYBdPSk2yq', 'b0NcGKddLb/cL8otdsRcKa', "W5GTgCk0lG", "W57cTgn1", "qf7cRa", "E+c1KUc1LuJGTAG", "WPapWQVcNmk7", 'W48QwmkemW', "cCocW6lcMhO", 'ag/cPhtcTG', 'WONcPMar', 'WPGeW5xdRmkE', "WQJGT47GTRxGTkVcPG", "W5hdO2GuW6u", "vxZdUCkjBa", '4PEQWP12', "8l2bUUkaLpcCG41I4BsO4Bsy4Bsy", "wUg2Kog2I+g3SCMJ", "W5OxW4uCWRm", 'mq3cNG', "4lwC4lAJa+c0G+c3LW", "ydJcKthcQq", "oY1DvW", 'WQBcT8kVW5ddQG', "BCoiuaNdVa", "m8kwWQLR", "WPvnuCoBaq", "W6KEzG", 'WPmGWPxdJCo+', "4BwcYk7QNjJcKW", "tCk3iryB", '4lso4lsy4lAF4lA7W78', "4Q2UlSktW6RdRW", "WPxcOIxILPFdVW", "pdzF", "da3cJSoHvG", "WO9prSoCtW", "obVcOmo+sa", "WQ1qxVc3SBjG", "W7xdSSo7WPq", "WP94WOeo", "qCkUWQK4oW", "W7VdO8oYWOq", 'W4SWW47WPzM/8kM6Ka', 'zCoKWPFcKW', "W7pcOSoKWPNdNG", "8j+EGCkJWPxdI3y", "sWxdO8kKsq", "W7BdPMbrWRi", 'W5ddQHBdGGq', "W78eCSkoW7C", 'E8kRWPyfWRK', "WRNcS8k1", 'Bb9S', "nxdcMSkiha", "W5P7WPVcPbq", '4OYziSkaW6pcJq', 'eSoWWOK', 'W54AiSkopa', 'W44pWOHr', "WQSjy3VdJW", "WOX/WOShWPe", "sdFILRy3W5O", "WRRcMMjbbG", "W4i8dmkNkq", "W5KEWOLBkW", "WP/cVKL6nW", "p3dcM/cIGOnu", "WRr1W4zUWQm", 'WOWhdCo0W4i', 'CHpdHt3cKW', "uNRdJCoEW7K", "sq4z", "4lAZ4lwS4lsX4ls04lAv", "B1tdLCoAwW", "egVcUMtcKG", "W7pcV2z3WR4", "4BAJ4BECYPzb4BwR", "EYpdTmoQWOa", "WRXAfCo+W5y", 'YihcUmQx4BE/4BEv', "ASkemGah", "WOm7v3JdSq", "W5isWOm", "WRzwhSoPW5K", "YALJ4BELYBJjHW", "WRNcTu1Wja", 'WOjCumor', "kEkdH2zfoW", "WQ/dRGyVWOC", 'vt3dUCka', 'WPBdULNdNW0', "W5ZdT2G5WQC", "o8kTWRalWOu", "FSoFvutcRG", "rG7dUmknDa", "ccJcSCkUdq", "W4RdTXW8W48", "W6VcOKSqWRi", "W41WW41ZWRa", 'DCk0pG', "WOm6W5yyWQy", "zH3dOZddRW", 'vq8f', "4BsA4BAoYBhjV8Mi", "WOzXWPq", "4lsZ4lEiW5xdUCkq", "4lw74lEkW5xGTldGTy8", 'nX/dMSo9sW', "WO/cTZe9WOm", "W5a4WOqfWR8", '4BscxSIp4Bwn4BAv', "eMFcRW", 'lI97rCoa', 'WR9bwCo0W5y', "W4RdRutdMre", "WOxgHog1KEg3VEg1NG", "WRtcNw1Qma", "mWpcJmoHxq", "W4WNdCk5pG", "aSkUW700mG", "o1aMrSks", "fmkHW61/", "WRi1WRRdVSk6", "fmk8W6W", "mSklWOzgWQG", "WPvCuCoCdG", "r8kLk8kuDG", "eMBcPG", "W55kWP1BkW", "mCoDWQVcQ8km", "W6eChmkepq", "WO3cVmkKW4FdIq", "kmokC8oVhG", "WQGABMxdNq", "W4meWPa", 'pX7cMCoGga', 'WONdU3TTnq', "W7JdQ3esWRm", "AComqf3cUa", "fv/dRmoRW48", "WPNdOH42WOO", 'W44diq', "hXBcO8kCnq", 'W5pcRSkZWP0i', "qXiCWQDt", "aCo7W5ZcLhG", "BCk4ASk/Eq", 'xwFdJ8olWQO', "qqGnWQbi", "lapcImkOwq", 'bMFcQhxcIq', "W5T3WPBcS3K", "m8kfWOy", "aw/cQ3pcJW", "WP96sSoNBa", 'W5XvySovpG', 'c1P5WRDo', 'W5/dI0pdHGC', "wcJdUmkfya", "CSo4WPq", "W6X6WR/cRaO", "osTe", 'W64UimkfaG', "WQ5AeSoVW5C", "W6a8AMKu", "4PwZ4Psk4PEk4Psq4PE7", "CIRdGHBcRa", "FvRcOb/cGW", "wc/cRCkuDG", "WObqt8oxaq", 'CbZcTJFdVq', "W7ugbCk9dq", 'AwrvqSo/', "WOddUZa", 'Bmk+nCoSBq', "WQVcOmo5WOxdKa", "WO1CwG", "W7RdR2qyWRm", 'W4T7DJDC', "W4lcR3Oaca", "WPRcVSkUW48s", "BSoLWOhdNCoj", 'WQBcT8kGW4BdHa', "WOtdPbLM", "dWCaWRLf", "BmkyhSkJEa", "WP8tkSoEW7K", 'W4zFrSogda', "W7X0W6TZWQW", "4Bwf4BAJcFcXGiZIGB7WP5o7vG", "4lwruoc0TUc0UEc1GW", "4BAC4BsXY43HTj7HT4u", 'W44cka', "W499Dwez", 'W6BcIf1QpG', "u37cG3xcUG", 'AwtIL5uqWRa', "WRBcVCkSWPVdJG", "CHFdUcu", 'qHDgW58', 'W4RcSgjLWRC', "oJtcQ8ojvW", "WOmDWPi", 'nrJcLCoJga', "Ab/dUIC", 'vc7dNSobW6u', "4PUntsOcWRe", '4Bsg4BAfYBJkHmUp', "gYxcUxxcLG", "iIfk", "WRGWW54", "dGVcKSkxda", "egVcVNxcNa", "lqNcLmoSAa", "W7dcTCo6", "W6zI4PElk8k5", "W5tcRguigW", "WODWWPRcPJa", "mYHTjSkQ", 'tCkKWRFdS8kO', 'WPjvrSkytW', "q04z8joqNhG", "YlvO4Bw8YzJlGW", "ghbnWQTe", "W7ZdVetdNXm", 'ASk0p8k4', 'W63dP3uDWR4', "f8kaW4FHTkVHTki", "u23cJJdcUG", "W4Pq4PstWQ3dMq", "a8ovW6xcN0q", "WQLUAmoydq", "4Psj4PEL4Pwg4PwV4Pw1", "W4ZdUWGOFG", "W7GCCmol", "WOHexmkX", "WPKDfCoWW5W", 'W75YW481WQ4', "gCoDW6RcNgW", "imkoxCowra", "WPvPr8kxFIVcPSkAW4BcP8o8", "p8oHWRRcHCkf", "W4ubWOP6ea", "n8oDqmowcG", "dwe1n8kF", "W4WBlmkLla", "W44FpCkwma", "4PA54PAo4Ps24PAW4PwH", "qCkMW7LXDa", "W7JdUmoH", 'WPLoc8oWW5i', "jcvuvCkW", "uCkAWOhdSq", "z8krzGKC", 'W7lcOLiuWR0', "tG/dNsJdGG", 's+g3R+g2IEg1M8I/', 'WOmXWO0', "4lwe4lwOW6hGTiNGTje", "uaNdGHtcGq", "YRdkS+g1UCk74BA1", 'cmoHW4dcLg8', "vd7dUHtcHq", "qbhdSGhcJq", "fmoBz8kaBq", 'WOJcULXP', "uHGiWQPt", 'm0FcOc7dP8o5tCoTuq', "W6TWW5nUWQC", "ktFcM8kr", "4lwymoc0Poc2SUc0VG", "fmk9W6u", "W6NcN1bbvq", "8ywVQE+7UG", "W7WBzSoeW6G", "W55WWPdcSNK", "lsVcL8ouga", 'E8kGmSkPFW', "W7zWW450", "ESkWm8kT", 'gWZdUmkdAq', "WQ3cReL6ma", "jMrCvSkW", "ra7dI8kIrG", 'uXpdNrdcIa', "hSo0WORcP8kl", 'kNbqWROy', "W4m7amod", "W7SFASkhW6m", 'swVdMmoCW6K', "WPORp8oLW7y", "ArDguSoK", "W6e5m8k9fG", "D8kyWQFcSSk+", "W5RWQyIn", "WR9CBSoObq", "4P+FuYNcTmoQ", "W4Wgth/dVa", "WReRW5ayWQu", "WRhcS8k1W5u", 'W4JcThf1WQy', 'a8oeW6lcKh0', "W7OPWOn3bW", "lG3cJSo8xq", "W7OuW4ecWQu", "WRekF0JdMG", "W4/dGx00WP0", "ww/dJColW60", "tHPjWOH3", "WO/dJFc6SkdcLZu", "W4RcRvW", 'WP7dVHmYW4u', 'W51SWOZdUNq', "WQCUqq", 'WO/dNaOUWQ4', 'WPKXWPG', "iJVcMSov", "wCk6WQVdM+kxRW", "WOmWWOq", "s8oSgwtcMq", "s+g3L+g2HUg1Sog1KG", "W7WccSkFpq", 'x8ofWPhcUmkO', "WQiJCCklW6a", 'W54Hdmk7pW', "iCosWPdcKCor", "W4ZcU2rbWOm", "WOPk4PsDeMu", "WPpdI07dKqW", "vbFdLa", "W5a5wCk7WPG", 'W4jNALWu', "WO3cVatcIvu", "4lwg4ls6jrJcSq", "sCoFw03cQa", "qrDg", "uXGiWRTe", "eSoVW6y3Dq", "4lsp4lEE4lErW4tGTyu", '4BE5tSU/Yj7cMW', 'ymolkW4D', "WQmOoq", "W7hcR8oZWOq", "W6TWW4njWRy", "4PAQ4PwQ4PE74PsY4Pwf", "lmoaqSkZxG", "4lEfn+c3OEc3I+c0VG", "4lEf4lEFa+c1OEc3RW", 'uJH/DSkk', "WQ9re8oqW5C", "W5e/W4SbWO0", 'W6bnWQxdOgm', "tXbgWRTc", 'gSk1WPlcU8oP', "W5tdTfldMdu", "W5xdTNxdGZu", "frpdNWBcKG", 'uNBdKSoNW4a', "h8Ar4BAT4BwY4BEH", 'W5WaWO7cMSkU', "WRLsdCoYW5C", "8jkFLSoLhmksga", 'zKRcTaZcSa', "bSkIWPefWOC", 'W4VdG0K6WPO', "WP3cSgD7fG", "WOFcTwCsgW", "WPOrWOhdUCkC", 'W6S9EMiB', "tX9BW5aY", "WRBcJhHVhG", "ASoorKdcRq", "W5RdVfpdKru", "eCo7W6NdUq", "fvRcKvJdNa", 'W70pj8o7nq', "WO/dOsyMW6tcTbxcGZ0oWRxdMCkW", "vXVdUIFdRW", "W4OCpSkBpG", "WO3cT0m", "W7FcQ8oGWRpdTq", 'EwFcHJJcUq', "W5noWRdcOIa", "YiRjNUg2KCMQ6P6g", 'W74dqSkOW6i', "WOKDa8oJW5u", "t8k6W5lcVmk5", "WO9jv8oBaa", "wwhdL8oAW6m", "A8kIiG", 'W5ukjmk8hW', "W5FdGfFdNqq", "g0bkWODY", "p1KCwmk7", "4lEt4lEa4lA7z+c0Ga", "W75NW4i6WQC", '4PAT8ksLM8oACW4', "a8ozW7/cLhS", "W4dcUxO", 'aSkNW6GL', "ktVcKCoAda", '4PYQWRlcRCocW7i', "n8olsmoAea", "hmoIW67cVmo9", "gI7ILz/cJSkQ", "WR0GW50JWQu", "pq3cJSoTxW", '4lA14lwt4lsH4lsI4lst', "W7nLW5nQWRe", "W5yNWPtcHCk3", "kCkrku8g", "vCk1W4FdVq", "nWlcKCkcaG", "8k2cHXmA", "W5SklSksDG", "W5LrAgGs", "W4zbkSktlq", 'ag/dQNFcKG', "oKZcJSoNga", "W4mzpmoTcG", "WOpdU1TTnq", 'WRxdGxCuWR4', 'WQ/XJQwS', "C8kWlSkI", "WOPIkSkIna", "tMZdJw/dQq", 'WRDxi8onW4i', 'WQqRqG', "4Psb4PAb4PEK4PEW4PAL", "fCkMW709ma", "W7SwySkwW6u", "WOvrqSog", "W6qwi8ojWQy", 't33dNa', "gmovW6RcN2W", "W5xdIh/dTby", "mcLkxSo8", "8lwTHtVcUc/dGa", 'exZcT8ob', "W7iqemomia", 'fSoKWPtcK8kH', "WQdINkFIMztILllILyu", "wY/dOSkp", 'WP04WQFdJSk6', "n8kfWOadWQm", 'WPFdQvNdNWy', "m8oRuuZcSq", "k101C8o6W5ddK8oTdqJcHmk9WPCD", "W7P8W4i", "cxdcHelcKa", "W54pWOng", "W6JcQeu2oG", "h8ocW7i", "WOVdOr0OWO4", "wJFdQXNcPa", "xrPwcmkN", 'ECoVWP5O', "W4ikBEc1JUc2IW", "xHhdL8knrW", "WPRcM8klW7rv", "kX1KACo8", "W5WkeSkEoa", "4lEw4lE34lA7z+c1UW", "pdvrWQTg", 'uXGhWQ1Q', 'eSknW5aHpq', 'W4RcR8k5W5es', "iCoSWQRcMCkX", "bNy9CG", 'W4uJwmkIkq', "nZlcG8kJoq", "WOuMWO/cK8kt", "W7hcQmoAWOxdLa", "kdbauCoG", 'W6dcNvWkWOO', 'W6XMEgqA', 'WPNdTa41WP8', "WPbfW5rgia", "WOpdPWG1WOa", "m1CG", "rCkmkarv", 'kX7cLG', "WO8dWOBdRmkE", "4lEVwUc0REc2PUc1IW", "WQFdRGuoWPW", "W4VcUwGscG", 'yH3ILytILjFIL7O', "4PsD4PAk4PET4Psl4PsI", "W49IwmoTEG", 'W4KPdmk0mG', "W4ZdTGG", "W4NcV8k6W48y", "FGHZ", "WQWCd8oYW54", "zYDCxCk/", 'W5pcVxu5W6y', 'ic3cHSkBha', "8jMcQ1iIWQ/cGa", 'W58zW5TrkG', "WOvKWOesW50", 'w8o1WQ/cUSoZ', "aYv4qSod", 'WOxdPqu', 'shBcJchcPG', 'hCovW7JcIgG', 'WQlcPCkWW57dLG', "W7VcSCkPW5hdHa", "W5PtW7S", 'W5mZamookq', "fCoCW5tdLgq", "W4VcPhL1WRK", "4PAj4Pss4Psz4Psn4Pw2", 'WQpcJgzegW', "kSkYjSkToq", 'WQ7dUZO1WQ4', 'ertcLCoeAa', 'gmoGW7xdVCoS', "psFcG0RcRG", "Bmk/jSkHAq", 'fCknW67cLq', 'WPdcISkPW5in', "W6H0W4L+WO8", "W5/dP1xdLq", "W6S/W4L/WRy", "4lwT4lwX4lAYqEc2Ra", "FmoEr0JcUG", "hSowW6pcNhG", 'WOjti+kuGSkM', "ASkKi8kPnG", "gYtcS8kK"];
  _0x2484 = function () {
    return _0x4955fc;
  };
  return _0x2484();
}
const _0x34b71a = {
  'pattern': "ringtone",
  'react': '🔖',
  'desc': "to download ringtone"
};
function _0x58f4b8(_0x2e0a19, _0x150e30, _0x398057, _0x34e03a, _0x2dcc3e) {
  return _0x27ab(_0x150e30 + 0x175, _0x2dcc3e);
}
_0x34b71a.category = "download";
_0x34b71a.use = '.ringtone';
_0x34b71a.filename = __filename;
cmd(_0x34b71a, async (_0x36ffc9, _0x11e734, _0x4d47ae, {
  from: _0x2a92ab,
  l: _0x1bdcfd,
  quoted: _0x483a8,
  prefix: _0x3d21de,
  body: _0x507a77,
  isCmd: _0x46cffd,
  command: _0x5448dc,
  args: _0x1b5d85,
  q: _0x4cc896,
  isGroup: _0x259c95,
  sender: _0x4bfe32,
  senderNumber: _0x19216b,
  botNumber2: _0x5b14a0,
  botNumber: _0x2a3e7d,
  pushname: _0x25270d,
  isMe: _0x3c17cc,
  isOwner: _0x25150e,
  groupMetadata: _0x36c894,
  groupName: _0x293814,
  participants: _0x5cac55,
  groupAdmins: _0x43e07b,
  isBotAdmins: _0x14d377,
  isAdmins: _0x3540a6,
  reply: _0x199de7
}) => {
  try {
    if (!_0x4cc896) {
      _0x199de7`${Lang.EXAMPLE}\n : ${_0x3d21de + _0x5448dc} black rover`;
    }
    let {
      ringtone: _0x1e0eff
    } = require("../lib/scraper");
    let _0x4cc77e = await _0x1e0eff(_0x4cc896);
    let _0x3c29c6 = _0x4cc77e[Math.floor(Math.random() * _0x4cc77e.length)];
    const _0x2cb11c = {
      'url': _0x3c29c6.audio
    };
    _0x36ffc9.sendMessage(_0x11e734.chat, {
      'audio': _0x2cb11c,
      'fileName': _0x3c29c6.title + ".mp3",
      'mimetype': "audio/mpeg"
    }, {
      'quoted': _0x11e734
    });
    const _0x114a20 = {
      'text': '✅',
      'key': _0x11e734.key
    };
    const _0x53ed86 = {
      'react': _0x114a20
    };
    await _0x36ffc9.sendMessage(_0x2a92ab, _0x53ed86);
  } catch (_0x48caae) {
    _0x199de7();
    _0x1bdcfd(_0x48caae);
  }
});
const _0x2c7e00 = {
  'pattern': "couplepp",
  'react': '🔖',
  'desc': "couple pic download",
  'category': "download",
  'use': ".couplepp",
  'filename': __filename
};
cmd(_0x2c7e00, async (_0x36b10e, _0x41a65e, _0x181900, {
  from: _0x44992d,
  l: _0x389aa2,
  quoted: _0x2df203,
  body: _0x4fa60b,
  isCmd: _0x58a6e6,
  command: _0x43658e,
  args: _0x1f3a57,
  q: _0x4fe320,
  isGroup: _0x3f6b99,
  sender: _0x1893e7,
  senderNumber: _0x21592c,
  botNumber2: _0x33c59b,
  botNumber: _0x4c3d7e,
  pushname: _0x3392db,
  isMe: _0x37efad,
  isOwner: _0x215d47,
  groupMetadata: _0x261328,
  groupName: _0x5deb8f,
  participants: _0x58eefb,
  groupAdmins: _0x2bdb5f,
  isBotAdmins: _0x178319,
  isAdmins: _0x1e6acc,
  reply: _0x428beb
}) => {
  try {
    const _0x3cfa6a = {
      'text': '💏',
      'key': _0x41a65e.key
    };
    const _0x39ce93 = {
      'react': _0x3cfa6a
    };
    await _0x36b10e.sendMessage(_0x44992d, _0x39ce93);
    let _0x2384cf = await fetchJson("https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json");
    let _0x201d5a = _0x2384cf[Math.floor(Math.random() * _0x2384cf.length)];
    const _0x188ce1 = {
      'url': _0x201d5a.male
    };
    const _0xeaaa07 = {
      'image': _0x188ce1,
      'caption': "Couple Male"
    };
    _0x36b10e.sendMessage(_0x41a65e.chat, _0xeaaa07, {
      'quoted': _0x41a65e
    });
    const _0x4eaef2 = {
      'url': _0x201d5a.female
    };
    const _0x1b8391 = {
      'image': _0x4eaef2,
      'caption': "Couple Female"
    };
    _0x36b10e.sendMessage(_0x41a65e.chat, _0x1b8391, {
      'quoted': _0x41a65e
    });
    const _0x22b5d2 = {
      'text': '✅',
      'key': _0x41a65e.key
    };
    const _0x58997e = {
      'react': _0x22b5d2
    };
    await _0x36b10e.sendMessage(_0x44992d, _0x58997e);
  } catch (_0x6f82d5) {
    _0x428beb();
    _0x389aa2(_0x6f82d5);
  }
});
const _0x38ec94 = {
  'pattern': "slsub",
  'react': '📃',
  'alias': ["srisub"],
  'desc': "Search Sinhala Subtitles  from Web Site",
  'category': 'download',
  'use': '.slsub'
};
function _0x526fb3(_0x5906e4, _0x3a9c9d, _0x372e52, _0x4d4113, _0x4d7cae) {
  return _0x27ab(_0x4d7cae + 0x114, _0x372e52);
}
_0x38ec94.filename = __filename;
cmd(_0x38ec94, async (_0x5a3316, _0x4283c8, _0x5d2f57, {
  from: _0x2da09e,
  l: _0x2538dd,
  quoted: _0x5de340,
  body: _0x1e4652,
  isCmd: _0x311e38,
  command: _0x3f7c9b,
  args: _0x4a720b,
  q: _0x205857,
  isGroup: _0x475f2c,
  sender: _0x4c46b7,
  senderNumber: _0x344768,
  botNumber2: _0xe797b4,
  botNumber: _0x59675b,
  pushname: _0x5144a8,
  isMe: _0x5ad860,
  isOwner: _0x77ee6b,
  groupMetadata: _0x3e34f0,
  groupName: _0x57a564,
  participants: _0x20d55a,
  groupAdmins: _0x35c24a,
  isBotAdmins: _0x3d5600,
  isCreator: _0x179d8d,
  isDev: _0x2b131f,
  isAdmins: _0x431f49,
  reply: _0x27d08e
}) => {
  try {
    if (!_0x205857) {
      return _0x27d08e("❗ *Please enter movie name to download Subtitles*");
    }
    const _0x4c64af = await subsearch(_0x205857);
    const _0x38e375 = await subdl(_0x4c64af.results[0x0].link);
    const _0x196a04 = "*HUNCHO-MD SUB DOWNLOADER*\n\n📊 *Movie Title - " + _0x38e375.results.title + "*\n\n🔒 Creator - " + _0x38e375.results.creater + "\n\n🖇️ _Link_ - " + _0x4c64af.results[0x0].link + "\n\n";
    const _0x33f6d2 = {
      'url': _0x38e375.results.img
    };
    const _0x3e0083 = {
      'quoted': _0x4283c8
    };
    await _0x5a3316.sendMessage(_0x2da09e, {
      'image': _0x33f6d2,
      'caption': _0x196a04 + "*HUNCHO-MD ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ keithkeizzah*"
    }, _0x3e0083);
    const _0x5da3b1 = {
      'url': _0x38e375.results.dl_link
    };
    const _0x3d4f47 = {
      'document': _0x5da3b1,
      'caption': _0x38e375.results.title,
      'mimetype': 'application/zip',
      'fileName': _0x38e375.results.title + ".zip"
    };
    const _0x39ab91 = {
      'quoted': _0x4283c8
    };
    await _0x5a3316.sendMessage(_0x2da09e, _0x3d4f47, _0x39ab91);
  } catch (_0x3d2e0c) {
    _0x27d08e("🚫 *Error Accurated !!*\n\n" + _0x3d2e0c);
    _0x2538dd(_0x3d2e0c);
  }
});
const _0x26db37 = {
  'pattern': "subdlfromlink",
  'react': '📃',
  'desc': "Download subtitles from Web Sites",
  'category': "download",
  'use': ".subdlfromlink",
  'filename': __filename
};
cmd(_0x26db37, async (_0x5daf31, _0x366170, _0x52f6e5, {
  from: _0x2b0edc,
  l: _0x193afc,
  quoted: _0x5e2197,
  body: _0x3632db,
  isCmd: _0x18f585,
  command: _0x35d14e,
  args: _0x462a0c,
  q: _0x672b23,
  isGroup: _0x2f7a32,
  sender: _0x4bf0a5,
  senderNumber: _0x5170a5,
  botNumber2: _0x3f1fa7,
  botNumber: _0x103697,
  pushname: _0x515545,
  isMe: _0x1d014a,
  isOwner: _0x195646,
  groupMetadata: _0x4e261f,
  groupName: _0x24e69c,
  participants: _0x3ad7df,
  groupAdmins: _0x2dc84d,
  isBotAdmins: _0x333811,
  isCreator: _0x4783ac,
  isDev: _0x43e072,
  isAdmins: _0x512675,
  reply: _0x605ae3
}) => {
  try {
    if (!_0x672b23) {
      return _0x605ae3("❗ Please enter movie Link to download Subtitles*");
    }
    if (!_0x672b23.includes("baiscope")) {
      return _0x605ae3("🚫 *Please enter Valid Movie url*");
    }
    const _0x598782 = await subdl(_0x672b23);
    const _0x36f651 = "*HUNCHO-MD SL SUBTITLES DOWNLOADER*\n\n📊 *Movie title - " + _0x598782.results.title + "*\n\n🔒 Creator - " + _0x598782.results.creater + "\n\n🖇️ _Link_ - " + _0x672b23 + "\n\n*HUNCHO-MD*\n*ᴀʟʟ ʀɪɢʜᴛ ʀᴇꜱᴇʀᴠᴇᴅ - ʙʏ keithkeizzah*";
    const _0x39d56d = {
      'text': _0x36f651
    };
    const _0x4858fa = {
      'quoted': _0x366170
    };
    await _0x5daf31.sendMessage(_0x2b0edc, _0x39d56d, _0x4858fa);
    const _0x400ce4 = {
      'url': _0x598782.results.dl_link
    };
    const _0x16d3db = {
      'document': _0x400ce4,
      'caption': _0x598782.results.title,
      'mimetype': "application/zip",
      'fileName': _0x598782.results.title + ".zip"
    };
    const _0x3ee577 = {
      'quoted': _0x366170
    };
    await _0x5daf31.sendMessage(_0x2b0edc, _0x16d3db, _0x3ee577);
  } catch (_0x4eedc9) {
    _0x605ae3("🚫 *Error Accurated !!*\n\n" + _0x4eedc9);
    _0x193afc(_0x4eedc9);
  }
});
