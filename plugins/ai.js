(function (_0x4ad67f, _0xa45f7b) {
  const _0x312582 = _0x4ad67f();
  while (true) {
    try {
      const _0x1eaed4 = parseInt(_0x391d(0x2b0, "eKWU")) / 0x1 * (parseInt(_0x391d(0x456, 'EKb0')) / 0x2) + -parseInt(_0x391d(0x436, 'vFN1')) / 0x3 * (-parseInt(_0x391d(0x3c7, 'g[Jx')) / 0x4) + parseInt(_0x391d(0x2ea, "iKvA")) / 0x5 + parseInt(_0x391d(0x205, ")A9C")) / 0x6 + -parseInt(_0x391d(0x18c, "[RpR")) / 0x7 + -parseInt(_0x391d(0x2c6, "jKEd")) / 0x8 + parseInt(_0x391d(0x344, "g[Jx")) / 0x9;
      if (_0x1eaed4 === _0xa45f7b) {
        break;
      } else {
        _0x312582.push(_0x312582.shift());
      }
    } catch (_0x3be17c) {
      _0x312582.push(_0x312582.shift());
    }
  }
})(_0x201d, 0x97129);
const config = require("../settings");
const {
  cmd,
  commands
} = require("../lib/command");
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
const axios = require('axios');
async function logo(_0x2566bb) {
  try {
    const {
      data: _0x16e106
    } = await axios.post('https://boredhumans.com/apis/boredagi_api.php', 'prompt=' + _0x2566bb.replace(/\s+/g, "%2520") + "&uid=lwle4nyomx5t0w6quo8&sesh_id=6a55e5df-19f2-4043-b295-a8955f9d528c&get_tool=false&tool_num=44", {
      'headers': {
        'User-Agent': "Googlebot-News",
        'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8"
      }
    });
    const _0x1dd5e0 = _0x16e106.output.match(/src="([^"]+)"/)[0x1];
    return _0x1dd5e0;
  } catch (_0x12cf15) {
    return _0x12cf15;
  }
}
function _0x391d(_0x4b8eef, _0x5b2a45) {
  const _0x5b2a3a = _0x201d();
  _0x391d = function (_0x594c38, _0x4f8742) {
    _0x594c38 = _0x594c38 - 0xdd;
    let _0x5a6771 = _0x5b2a3a[_0x594c38];
    if (_0x391d.FtnQcF === undefined) {
      var _0x5933c8 = function (_0x6fb9ad) {
        let _0x4683f4 = '';
        let _0x4fa372 = '';
        let _0x27130d = 0x0;
        let _0x143dfa;
        let _0x549acd;
        for (let _0x15fde7 = 0x0; _0x549acd = _0x6fb9ad.charAt(_0x15fde7++); ~_0x549acd && (_0x143dfa = _0x27130d % 0x4 ? _0x143dfa * 0x40 + _0x549acd : _0x549acd, _0x27130d++ % 0x4) ? _0x4683f4 += String.fromCharCode(0xff & _0x143dfa >> (-0x2 * _0x27130d & 0x6)) : 0x0) {
          _0x549acd = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0x549acd);
        }
        let _0x25f8a1 = 0x0;
        for (let _0x21afd7 = _0x4683f4.length; _0x25f8a1 < _0x21afd7; _0x25f8a1++) {
          _0x4fa372 += '%' + ('00' + _0x4683f4.charCodeAt(_0x25f8a1).toString(0x10)).slice(-0x2);
        }
        return decodeURIComponent(_0x4fa372);
      };
      const _0x5050cd = function (_0x3692ca, _0x556d9b) {
        let _0xda768c = [];
        let _0x2e9dd0 = 0x0;
        let _0x56be73;
        let _0x501c9a = '';
        _0x3692ca = _0x5933c8(_0x3692ca);
        let _0x47865;
        for (_0x47865 = 0x0; _0x47865 < 0x100; _0x47865++) {
          _0xda768c[_0x47865] = _0x47865;
        }
        for (_0x47865 = 0x0; _0x47865 < 0x100; _0x47865++) {
          _0x2e9dd0 = (_0x2e9dd0 + _0xda768c[_0x47865] + _0x556d9b.charCodeAt(_0x47865 % _0x556d9b.length)) % 0x100;
          _0x56be73 = _0xda768c[_0x47865];
          _0xda768c[_0x47865] = _0xda768c[_0x2e9dd0];
          _0xda768c[_0x2e9dd0] = _0x56be73;
        }
        _0x47865 = 0x0;
        _0x2e9dd0 = 0x0;
        for (let _0x1f4abe = 0x0; _0x1f4abe < _0x3692ca.length; _0x1f4abe++) {
          _0x47865 = (_0x47865 + 0x1) % 0x100;
          _0x2e9dd0 = (_0x2e9dd0 + _0xda768c[_0x47865]) % 0x100;
          _0x56be73 = _0xda768c[_0x47865];
          _0xda768c[_0x47865] = _0xda768c[_0x2e9dd0];
          _0xda768c[_0x2e9dd0] = _0x56be73;
          _0x501c9a += String.fromCharCode(_0x3692ca.charCodeAt(_0x1f4abe) ^ _0xda768c[(_0xda768c[_0x47865] + _0xda768c[_0x2e9dd0]) % 0x100]);
        }
        return _0x501c9a;
      };
      _0x391d.mTAXmu = _0x5050cd;
      _0x4b8eef = arguments;
      _0x391d.FtnQcF = true;
    }
    const _0x5c604b = _0x5b2a3a[0x0];
    const _0x18d830 = _0x594c38 + _0x5c604b;
    const _0x4e5101 = _0x4b8eef[_0x18d830];
    if (!_0x4e5101) {
      if (_0x391d.RFOWgm === undefined) {
        _0x391d.RFOWgm = true;
      }
      _0x5a6771 = _0x391d.mTAXmu(_0x5a6771, _0x4f8742);
      _0x4b8eef[_0x18d830] = _0x5a6771;
    } else {
      _0x5a6771 = _0x4e5101;
    }
    return _0x5a6771;
  };
  return _0x391d(_0x4b8eef, _0x5b2a45);
}
const _0x49d246 = {
  'pattern': 'ailogo',
  'alias': ["logoai", "ail", "gptlogo"],
  'react': '🤖',
  'desc': "It creates ai logos.",
  'category': 'other',
  'use': ".ailogo  woman,hair cut collor red,full body,bokeh",
  'filename': __filename
};
cmd(_0x49d246, async (_0x2c7033, _0x529d53, _0xb9b62c, {
  from: _0x1e0dac,
  l: _0x492ad7,
  prefix: _0x4cfbe3,
  quoted: _0x5c0351,
  body: _0x29fb11,
  isCmd: _0x16bf89,
  command: _0x146cab,
  args: _0x297226,
  q: _0x3fc321,
  isGroup: _0x126608,
  sender: _0x524f7b,
  senderNumber: _0x254580,
  botNumber2: _0x56d6ba,
  botNumber: _0x54967a,
  pushname: _0x245e04,
  isMe: _0x12b687,
  isOwner: _0x4da5d0,
  groupMetadata: _0x3db6b5,
  groupName: _0x4fb36f,
  participants: _0x52356c,
  groupAdmins: _0x5cec03,
  isBotAdmins: _0x3b38d8,
  isAdmins: _0x18899c,
  reply: _0xe1feab
}) => {
  try {
    if (!_0x3fc321) {
      return _0xe1feab("Please enter a query");
    }
    let _0x50e38c = await logo(_0x3fc321);
    const _0x59e72a = {
      'url': _0x50e38c
    };
    const _0x4a30d1 = {
      'image': _0x59e72a,
      'caption': "𝗚𝗘𝗡𝗘𝗥𝗔𝗧𝗘𝗗 𝗕𝗬 𝗛𝗨𝗡𝗖𝗛𝗢"
    };
    const _0x171dbb = {
      'quoted': _0x529d53
    };
    _0x2c7033.sendMessage(_0x1e0dac, _0x4a30d1, _0x171dbb);
  } catch (_0x5a495a) {
    _0xe1feab("I cant create that logo");
    _0x492ad7(_0x5a495a);
  }
});
const _0x500bb8 = {
  'pattern': "mathsgpt",
  'react': '👾',
  'desc': "It search on chatgpt ai for what you provided.",
  'category': 'other'
};
function _0x32bfc0(_0x213201, _0x4a9e96, _0x2db493, _0x45b2d9, _0x3b0a12) {
  return _0x391d(_0x4a9e96 + 0x113, _0x3b0a12);
}
_0x500bb8.use = ".gptmaths 2-3";
_0x500bb8.filename = __filename;
cmd(_0x500bb8, async (_0x5856ef, _0x4e4f1e, _0x312e1d, {
  from: _0x6d369e,
  l: _0x8f20fe,
  prefix: _0x33d9a3,
  quoted: _0x504d13,
  body: _0xe6d0b9,
  isCmd: _0x282e00,
  command: _0x4accff,
  args: _0x4cbaf2,
  q: _0xba08b2,
  isGroup: _0x4127bd,
  sender: _0x5ad5fa,
  senderNumber: _0x357dd4,
  botNumber2: _0x13878a,
  botNumber: _0x232990,
  pushname: _0x2fec2d,
  isMe: _0x1472cf,
  isOwner: _0xf46087,
  groupMetadata: _0x58277,
  groupName: _0x2e234d,
  participants: _0x2d12ac,
  groupAdmins: _0x49d803,
  isBotAdmins: _0xe8f843,
  isAdmins: _0x51f79e,
  reply: _0x5c56fa
}) => {
  try {
    if (!_0xba08b2) {
      return _0x5c56fa("*Please give me words to search on chatgpt ai !*");
    }
  } catch (_0xe9bbe5) {
    _0x5c56fa("*Server is busy. Try again later.!*");
    _0x8f20fe(_0xe9bbe5);
  }
});
const _0x26e734 = {
  'pattern': "chatgpt",
  'alias': ['ai', "gpt", "openai", "chat"],
  'react': '👾',
  'desc': "It search on chatgpt ai for what you provided.",
  'category': "other",
  'use': ".chatgpt hi",
  'filename': __filename
};
cmd(_0x26e734, async (_0x47faa2, _0x1df6ef, _0x400e87, {
  from: _0x4b7e4e,
  l: _0x931f8,
  prefix: _0x3a9294,
  quoted: _0x18ef18,
  body: _0x393380,
  isCmd: _0x1e1558,
  command: _0x21aed8,
  args: _0x4e4936,
  q: _0x3bd168,
  isGroup: _0x390d62,
  sender: _0x1a268e,
  senderNumber: _0x38af60,
  botNumber2: _0x486e62,
  botNumber: _0x7aaa23,
  pushname: _0x3993b6,
  isMe: _0x17efe9,
  isOwner: _0x72cc12,
  groupMetadata: _0x2dfc63,
  groupName: _0x2f3607,
  participants: _0x48b146,
  groupAdmins: _0x202d5c,
  isBotAdmins: _0x496d50,
  isAdmins: _0x47b7e5,
  reply: _0x55a2d1
}) => {
  try {
    if (!_0x3bd168) {
      return _0x55a2d1("*Please give me words to search on chatgpt ai !*");
    }
    let _0x19e668 = await fetchJson("https://hercai.onrender.com/v3/hercai?question=" + _0x3bd168);
    return await _0x55a2d1(_0x19e668.reply);
  } catch (_0xd41f63) {
    _0x55a2d1("*Server is busy. Try again later.!*");
    _0x931f8(_0xd41f63);
  }
});
const _0x3456a4 = {
  'pattern': "gpt2",
  'alias': ["ai2", "chatgpt2", "openai2", "chat2"],
  'react': '👾',
  'desc': "It search on chatgpt ai for what you provided.",
  'category': "other",
  'use': ".ai2 hi",
  'filename': __filename
};
cmd(_0x3456a4, async (_0x54acaf, _0x2aa616, _0x3359c2, {
  from: _0x21fd52,
  l: _0x253f39,
  prefix: _0x3c7634,
  quoted: _0x5cb3c6,
  body: _0x40f387,
  isCmd: _0x3071d4,
  command: _0xdf159e,
  args: _0x4179a3,
  q: _0x5d2b5f,
  isGroup: _0x491724,
  sender: _0x5cf46a,
  senderNumber: _0x463adb,
  botNumber2: _0xe5a475,
  botNumber: _0x558ebd,
  pushname: _0x7a70ab,
  isMe: _0x1f69b9,
  isOwner: _0xe9c928,
  groupMetadata: _0x7a6374,
  groupName: _0x551026,
  participants: _0x165005,
  groupAdmins: _0x408d62,
  isBotAdmins: _0x5994d8,
  isAdmins: _0x27bab2,
  reply: _0x3850af
}) => {
  try {
    if (!_0x5d2b5f) {
      return _0x3850af("*Please give me words to search on chatgpt ai !*");
    }
    let _0x5ac3b2 = await fetchJson("https://hercai.onrender.com/v3-32k/hercai?question=" + _0x5d2b5f);
    return await _0x3850af(_0x5ac3b2.reply);
  } catch (_0x2c609d) {
    _0x3850af("*Server is busy. Try again later.!*");
    _0x253f39(_0x2c609d);
  }
});
const _0x2274e0 = {
  'pattern': 'turbo',
  'alias': ["ai3", "gpt3", "openai3", "chat3"],
  'react': '👾',
  'desc': "It search on chatgpt ai for what you provided.",
  'category': 'other',
  'use': ".chatgpt hi",
  'filename': __filename
};
cmd(_0x2274e0, async (_0x9f4b2f, _0x30fb5d, _0x13649a, {
  from: _0x424424,
  l: _0x159b75,
  prefix: _0x513098,
  quoted: _0x258693,
  body: _0x5dcfca,
  isCmd: _0x54e6d6,
  command: _0x15fb2a,
  args: _0x379b0c,
  q: _0x56f93c,
  isGroup: _0x1f2ca1,
  sender: _0x2d7bef,
  senderNumber: _0x71b770,
  botNumber2: _0xfc92c2,
  botNumber: _0x4bfb88,
  pushname: _0x3a9244,
  isMe: _0x3259af,
  isOwner: _0x262b8e,
  groupMetadata: _0x187e0f,
  groupName: _0x213fec,
  participants: _0x2bb280,
  groupAdmins: _0x1a23b2,
  isBotAdmins: _0x274555,
  isAdmins: _0x4523cb,
  reply: _0x28640e
}) => {
  try {
    if (!_0x56f93c) {
      return _0x28640e("*Please give me words to search on chatgpt ai !*");
    }
    let _0x4b1161 = await fetchJson("https://hercai.onrender.com/turbo/hercai?question=" + _0x56f93c);
    return await _0x28640e(_0x4b1161.reply);
  } catch (_0x6d7a7d) {
    _0x28640e("*Server is busy. Try again later.!*");
    _0x159b75(_0x6d7a7d);
  }
});
const _0x20ce10 = {
  'pattern': "gpt4",
  'alias': ["ai4", "turbo2", "openai4", 'chat4'],
  'react': '👾',
  'desc': "It search on chatgpt ai for what you provided."
};
function _0x2eafd5(_0x296c6c, _0x21019a, _0x4c95d2, _0x115683, _0x2ee734) {
  return _0x391d(_0x4c95d2 - 0x25a, _0x21019a);
}
_0x20ce10.category = "other";
_0x20ce10.use = ".chatgpt hi";
_0x20ce10.filename = __filename;
cmd(_0x20ce10, async (_0x3a8ba7, _0x2b8a8d, _0x1f485d, {
  from: _0x2604b3,
  l: _0xa71390,
  prefix: _0x2d1bd6,
  quoted: _0x4e4f47,
  body: _0x3d3c8f,
  isCmd: _0x314093,
  command: _0x54c2b7,
  args: _0x4e8e78,
  q: _0xe748d,
  isGroup: _0x439dcc,
  sender: _0xa4a631,
  senderNumber: _0x4e737a,
  botNumber2: _0x30f43d,
  botNumber: _0x1ad4f2,
  pushname: _0xe995e7,
  isMe: _0x2a10b7,
  isOwner: _0xdc9cd3,
  groupMetadata: _0x10c1e3,
  groupName: _0x14eeca,
  participants: _0x3746fd,
  groupAdmins: _0x4463f2,
  isBotAdmins: _0x3e277d,
  isAdmins: _0x23c35f,
  reply: _0x1b124f
}) => {
  try {
    if (!_0xe748d) {
      return _0x1b124f("*Please give me words to search on chatgpt ai !*");
    }
    let _0x3b5fbc = await fetchJson("https://hercai.onrender.com/turbo-16k/hercai?question=" + _0xe748d);
    return await _0x1b124f(_0x3b5fbc.reply);
  } catch (_0x5e8a17) {
    _0x1b124f("*Server is busy. Try again later.!*");
    _0xa71390(_0x5e8a17);
  }
});
const _0x35736d = {
  'pattern': 'gemini',
  'alias': ["ai5", "gpt5", "openai5", "chat5"],
  'react': '👾',
  'desc': "It search on chatgpt ai for what you provided.",
  'category': "other",
  'use': ".chatgpt hi",
  'filename': __filename
};
cmd(_0x35736d, async (_0x518d7d, _0x13989c, _0x38cc38, {
  from: _0x2bc5fc,
  l: _0x388648,
  prefix: _0x5ddf00,
  quoted: _0x5e19f4,
  body: _0x3e10fc,
  isCmd: _0x3cbb7d,
  command: _0x38f20a,
  args: _0x35089e,
  q: _0xffb0e5,
  isGroup: _0x4a1b05,
  sender: _0x517272,
  senderNumber: _0x5b1e49,
  botNumber2: _0x390866,
  botNumber: _0x262e9b,
  pushname: _0x3c82cc,
  isMe: _0x8fe244,
  isOwner: _0xfcd81d,
  groupMetadata: _0x411385,
  groupName: _0x519e45,
  participants: _0x572beb,
  groupAdmins: _0x58c939,
  isBotAdmins: _0x368431,
  isAdmins: _0x4fa312,
  reply: _0x30a34a
}) => {
  try {
    if (!_0xffb0e5) {
      return _0x30a34a("*Please give me words to search on chatgpt ai !*");
    }
    let _0x3e37f3 = await fetchJson("https://hercai.onrender.com/gemini/hercai?question=" + _0xffb0e5);
    return await _0x30a34a(_0x3e37f3.reply);
  } catch (_0x2a45e3) {
    _0x30a34a("*Server is busy. Try again later.!*");
    _0x388648(_0x2a45e3);
  }
});
const _0xebe1f4 = {
  'pattern': "aipic",
  'react': '👾',
  'desc': "It search on chatgpt ai for what you provided.",
  'category': 'other',
  'use': ".aipic hi",
  'filename': __filename
};
cmd(_0xebe1f4, async (_0x3e599a, _0x225835, _0x135a89, {
  from: _0x117fce,
  l: _0xa2a1cd,
  prefix: _0x1fc6c9,
  quoted: _0x5c44d5,
  body: _0x33cd81,
  isCmd: _0x2710c5,
  command: _0x52b91e,
  args: _0x39ebd4,
  q: _0x1a0068,
  isGroup: _0x85220f,
  sender: _0x33dc5f,
  senderNumber: _0x36204c,
  botNumber2: _0x54d18e,
  botNumber: _0x599268,
  pushname: _0x595c4c,
  isMe: _0xe4da5c,
  isOwner: _0x22b012,
  groupMetadata: _0x4e7cf2,
  groupName: _0x5dd746,
  participants: _0x21179f,
  groupAdmins: _0x4c91de,
  isBotAdmins: _0x5f2595,
  isAdmins: _0x357c0e,
  reply: _0x175251
}) => {
  try {
    if (!_0x1a0068) {
      return _0x175251("*Please give me words to search on chatgpt ai !*");
    }
    let _0x3959f6 = await fetchJson("https://api.maher-zubair.tech/ai/photoleap?q=" + _0x1a0068);
    const _0x47b05d = {
      'url': await _0x3959f6.result
    };
    const _0x5a5120 = {
      'image': _0x47b05d,
      'caption': "𝗚𝗘𝗡𝗘𝗥𝗔𝗧𝗘𝗗 𝗕𝗬 𝗛𝗨𝗡𝗖𝗛𝗢"
    };
    const _0x5662cc = {
      'quoted': _0x225835
    };
    await _0x3e599a.sendMessage(_0x117fce, _0x5a5120, _0x5662cc);
  } catch (_0x106325) {
    _0x175251("*Server is busy. Try again later.!*");
    _0xa2a1cd(_0x106325);
  }
});
function _0x158ffa(_0xf6ba7d, _0x227f74, _0x2f03e0, _0x714f44, _0xc5606f) {
  return _0x391d(_0x2f03e0 + 0x1b, _0xf6ba7d);
}
const _0x5a6730 = {
  'on': "body"
};
function _0x4245c0(_0x50d4d1, _0x22597f, _0x3fa12f, _0x2f6cd7, _0x34cc6b) {
  return _0x391d(_0x50d4d1 - 0x9e, _0x3fa12f);
}
cmd(_0x5a6730, async (_0x2ebcdf, _0x371b0e, _0x16263a, {
  from: _0x37d942,
  l: _0x36e4e1,
  prefix: _0x2de5a8,
  quoted: _0x23afa7,
  body: _0x249a3a,
  isCmd: _0x31ab4c,
  command: _0x4a6a0d,
  args: _0x523d1,
  q: _0x55f4e5,
  isGroup: _0x218f6c,
  sender: _0x2211d8,
  senderNumber: _0x6ee4af,
  botNumber2: _0x5aaaf2,
  botNumber: _0xdb1613,
  pushname: _0x578a36,
  isMe: _0x1c0705,
  isOwner: _0x419ae7,
  groupMetadata: _0x258b8b,
  groupName: _0x5bbc0b,
  participants: _0x5e8ff3,
  groupAdmins: _0x485000,
  isBotAdmins: _0x4faa54,
  isAdmins: _0x2db1d7,
  reply: _0x27a852
}) => {
  if (config.AI_CHATBOT === "true") {
    if (_0x371b0e.key.fromMe) {
      return;
    }
    let _0x559897 = await fetchJson("https://hercai.onrender.com/gemini/hercai?question=" + _0x55f4e5);
    return await _0x27a852(_0x559897.reply);
  }
});
const _0x2e197e = {};
function _0x201d() {
  const _0x1f0488 = ["E8kMCsm0", "bCkLxmkCW7m", "W6mFW7FcNSof", 'WRpcNCkTW4Tr', "W5G5vLOA", "W4JdUrOQW6a", "FWBcNHGY", "W4nlW4a", 'W7RcT8k4WRf4', 'WPzqW4W', "W4JdHSkVW5hdTa", "jh3cT0ldGW", "W5ZcUmofWQzq", 'rmk3zNtcLa', 'cSoIeMrh', "W4O9WPFcVmkZ", 'WPOod3ddLW', "ce5+W5xcGq", "oSkSWQVcS8kE", "4lww4lwP4lsIWPJGTji", "EmowW4m", 'CwCQ', 'WQRcKeyAzW', "W6zPxqVdRW", "W6SUaedcTa", "emk2rCkbW6u", "WRBcN0a6W4q", 'W7DqWQJdRL4', "4lE84lsR4lEB4lAA4lAv", "WQ8/ham", "W6dcQh1AWQS", "WP98WQbitG", "WPtcJ8kWW7jv", "zSkJWRxcO17dPSkAW4FdMmkuC8oP", "W404W4S7jG", 'wGFdLa', "WO3cN8kWWQNcIa", "rGxdLCo+wa", 'qbpdNG', "kmoOWQVcV8o2", "jvm4kq", "W4RdIMe", "A8oonZC+", "dSoduN4h", 'n8opW5/dO8oM', "wCkHzNpcQG", 'jc9Q', "F8oMnq", "WPlcRuX6WPi", 'xuddNW', "EaBcGG0Z", 'xH/dSubf', 'c19MWO0', "o8o9W7/cU8o4", "z8oyExOJ", "WPZcUhDsW44", "W77dV8oBW6RdLG", "W5LYWOaaW4m", '4lEi4lwMAbBGTRW', "WPXRe389", "W5tdPmk9tZu", "x3C9cvC", 'WR/cGtRcQWC', "WQq0hqxcRG", "W6qgWQZcMmkf", "WQqOfG", "fmogkvTf", "omomjWhcTa", "mmo9n8kmDW", "W78hW6fQaW", "W5BdG8kgxGi", "WOe5WPuevG", "W5mPWP8Mma", "h0xcTLzs", "W7yuW6STaW", "Foc1Roc1S+c1Hoc0NG", "WRZcOuZcSSo6", "WQ9CW4ldI3m", "W4X9W4VcHCk1", "W6C5tq4", 'W7eAW6L3ba', 'WODlWQHAFW', "ywhcRCoOla", 'xmoTemofCG', "WPKSWPuaqa", "du9ZW4tdNq", "ACogW4tcHSog", "WQ/dP8okWR3cQW", "CmkDW5FcUmoQ", 'WRxcJc/dQaa', "W7efW6aKaW", "oCodW43dGqG", "EmoWmCodlq", "WOFcNmkMWQBcJG", 'uaLlxSoG', "Amo6nmoz", "WOpcGSkW", "WQGvW6BdRu4", "WRlcMttcPaK", "nCkZWQ7cG8kq", "yui+kCke", 'AtRcGGKN', "eSoVocu", "leG1nH4", "pCkFW7W", "puuNk8kA", 'ubpdJ8oZEG', 'WQzzW6BdTf8', "cCk6umksW6u", "uCoZmSk5rW", "W40TW4T2", "avvR", "4lAmWRnzW4K8", "ys3dRCoUEq", 'hGpdVfDu', "WORcM8kHWRFcMG", "mmknCtqI", "m8kaCsD/", "fCkubf9M", "W6qjWRlcTaS", "W7WtWQZcNmkt", 'E8k6FNpcTW', "oINcLWzh", "WO3cJmkrW5iL", 'WQqfrKeF', "WOmCcrlcOq", '4lEu4lAYW7dGTRhGTja', "jJLQWQJdLW", "yCoAWRRcQmoN", 'jCoWoadcTa', 'W7JcTeKDmW', "W73dJcycW5i", 'WOuUW4O4la', 'W70DW6q+uq', "W5/GTiZGTQhGT6FGTi0", "WPFcKCkzWP0X", "D8oKW6RcNSoK", "iSoKWR7cVCo0", "WRFcKKGkpq", "aCk+xq", "pmo+W7lcVmo+", "W5KwW5qpoW", "W5DrWORcOCkU", "WO1IhW", 'W6tdJ8oEWOBcGG', "pSkvCdaJ", "eCoCj0i", "W74DWRtcJq", 'WPicWQGXCG', "FCohW5tdO8oS", 'DsRcKbbD', "WPVcV28sFW", "W6RcM0HRWPa", "rqhdJ8oUCa", "BSkJq0lcLG", "WQDsW6VdO1u", 's8oAW5hcQSoR', "pLlcOG85", "kSktWQBdLCkK", "WPBcOdNcVWy", "WPZcImkfW4jb", "dmkUq8ktW5m", "WPtcHCkAW5mR", "WP8SWOqErW", 'y8kUWRdcRGhcM8kvW4JdJ8kW', "WO4/lvFdRW", "F8kVuG", "fqBdLmoOnq", "WPHXgtiQ", "W5yAW54Bjq", 'WRhcQSkEW41F', "xmowj0rS", "cmoxux4c", "8k+GOUkaLpgnGiVcR+g0OEg2K+g1Ka", "WQ3dJrfUW5m", 'n23cO1xdIq', "W7G0B0yE", 'W6pdS8ooW7dcVG', "W6SIhMy9", "WOLVhZ4P", "WPP4x8kHfa", "WORcPx0CyG", "bSkhxbmv", "WOzsWR1nAq", "WPnJW6pdVNy", "W4RcV8ogWPn0", "4lsb4lEO4ls/4lsHgW", "l8oSWQZcUq", 'Bd58WRhdHa', 'aLiqsCo6', "B8o0iSodmq", "WPhcJhWdW4q", "DCohW4JcQSo7", "4lAX4lwG4lAgfUc2Uq", "W7VcN11TWOm", "W7JcSSoHWPH9", 'uSoBkbzQ', "WOu4W5bRiq", "lSoQnSkxqq", "ASoBW5xcUCoQ", "W4q4W5PRiq", 'W77cVmo2WQr+', "imkuDYe0", 'WPhcGCkyW5bJ', "a8knsWW4", "W59XWPXnW6y", "W6D4tLib", 'WOxdGdSkW5u', "W68KrWWk", "W587WO4Dha", 'lLa+Amkb', "W6WnW5ephq", "W5LMWRGNW4m", "gCo4mG", 'xmkAAvPH', 'WOfUet4Z', "W4RdGCovW4ldKa", 'oCo3jCkbgG', "pcJcIXah", 'W6RcM1LKWP0', "D8kVvLhcLG", 'oLmYnq', "W68DWRBcNmkt", "WOPdWRPE", "WQ7cMtlcPWi", "WOFcUmk0hZ8", "CmoSnCo2ka", "wSohuNSn", 'WP4DaW3cIa', "W7eyWQO+fW", "e8ohiXzV", "wXP+ySoG", "B0e+z8kp", 'kmo6n8kaqG', "v0/dNCoVEW", 'WPtcHNpdK8oK', "f8o+lMBcSG", "W53dVCk0rdO", 'WPddPgmo', 'W6WwW6qJta', "DXXjwSo3", 'WQpcLCkKWOtcKa', "W5xdT3zFWOy", 'WRtcHmk7WOJcRq', "e8oaiW", 'W5BdPSoCW6W', "jmoNWQ3cV8o/", "ke84imkp", 'W7/cJL07', "WOCAWPGOyW", "W6DPuKym", "uGpdUffq", 'W7G/r1yn', 'pmo2kmkqqa', "lcC2WQ7dLq", "dCkhWPZcKSkL", "gGDXW4lcIG", "pgNcLqTz", "W6ldOmoyWRZcRG", "xmoVemogEW", "g8oyc1X9", "W4BcOYGaWP5tW4hcI8khlK7dJIu", "W5DrWPy", "WPfXw8oQbq", "WRxcMs/cUb8", "W4BdOSoXwd4", "fmoBm1HS", "ECosfCk6wG", 'm8k/iSkAxa', 'WQbwW6i', "h8opltdcVW", "W4mXWOWxha", "W5VdL8obWOxcHG", "W7fTWOq1W7a", 'WPlcQmktWOJcOW', "dmkOt8oru3L4jNpcNq", "B0CYkCkg", "WRtcUYVcRay", '4lsQW7dcT8o3ma', "W4ZdLSomW4mJ", 'm8oFmwbf', '4ls14ls24lARe+c0MW', "WOT1W5FdN0K", 'h8ovmL57', "WPG2leddOq", "W4JdIZizW5i", "WRXXW5hdSCk1", "WPLTwq", "W5uWWPWdW68", 'W6K4DKSL', "mJFcKvy", "WRJdPw9KW5e", "W5DrWPRcOmkZ", "aSoLjcRcPa", "Fmo+nmkCzq", "pSore8kbDW", '4ls84lAE4lEYe+c0Hq', "lSoEcCkTzG", "sCoVdmkn", 'aCk+hSkyW6e', "ldHG", "W6XnW7tcK8kH", "kqS9jWq", "WRDoqCokgW", "wheW", "WOvKfZy", "AauHnq4", "W6NcNu3dH8ocEdG", "vgGApN4", "gmkpqcWl", "ymowWPy", "vCo8emkAnG", "rmohthay", "qWtdTfvd", "W6aDWR/cH8kx", "W7pdM8oJ", 'WP3dOM5dW5u', "W7WgW6KpmW", "W5hGT6xGTzFGTR8t", "WRZcVHW", "B8k3uKxcHW", "lmk1W6NdSKm", "W6PFW6NdKCkq", 'iCoyeJ7cQa', "WPZcNNBdM8oh", 'zCoNkq', 'eCovmLnV', "F8kLuKxdKW", "W74UxXFdTG", 'qqRdRvfs', "b8kYvSkjzG", "W5PSWQ1OuSkgW5q", "aCkNDXWb", "vwxcRmo+ka", "W5NdHCoE", "W7/dJtuGW5a", "WPRcHCkeW5rS", "lSktWQNcLSkG", "EmkWW6FdQmkK", "WPaTWOyxvG", "vGhdJ8o/CG", "WRNcNNVcVam", "W5vmW4ZcVSkO", "deHQWPdcJG", "A8oOWRBdUSkW", 'WP3dS2HqW4C', 'vWLxs8oH', "nmkcWRZcHCkN", 'WOLUeW', "W7hdHSo9W5W", "WOm9WOatrW", "omkmEti0", "avn6W5xcNq", "fH5xt8oN", "W7/cKqKOWPm", "W6mFWRNcHSoA", "YPVlMog3OvdHTl4", "jCoVWRi", "uGxdJ8ofyq", "cCkyWQNcL8k4", "W43dHSoMW7pdNW", "pLZdMreP", 'jhZcT1xdKG', "WPK9WPmtuG", "WR/cGIm", "nMhcV0VcHG", "WQG7gWNcRW", "WO9kWQbCAq", "WPXSWPqgWQS", 'FCosm8oykq', "W4KPW5eOoG", "weBcJG", 'xbHnamoW', 'W51AW4RcQCoM', "WOVcMCkWWQNdIq", "4lw14ls/4lEK4lA24lEx", "bJz/qghdVq7cMWxdGq", "W5uiW606aq", "bsyadIq", "tSo4cSkasq", "nY96WQhcNW", 'W5RdUCkLwIG', "veVdVeTd", "EYdcLrDe", "WOSgWR5sAa", 'DmodW5lcPCo8', "WPtcLmkaWP4", "W6NdJrnnkSopWRL2WPpdMSo4xa", "WRr5dfSm", "WRVcIdNcRf0", "fGpcVbbV", 'WP18wCoQea', "t8o8f8kmEq", 'mc9RWQRdNW', "peu5i8kU", "WR3cLfmCya", "WOm7WOazhq", "oqRcIcfH", "i8o+W67cTHW", "oSkAWQFcMSkM", "fCoRpYpcNa", "jSo+W6hdPa8", "ibmGnGq", "WQ4kb1ldUG", "vq7dQWTu", "jSoOWRJcV8oI", "Dq94jSkt", "WOu/W5OQjW", "iCodf2nI", "4lAe4lst4lwKW7RGTkK", 'WPWYjHpdOq', "lrv04lEx4lET", "rSoqz0ev", 'W6e4uvyh', "emkzxJm2", 'WPqQW4WkrG', 'W47dGtWFWOW', 'W44AWRLpDq', "W4/dH8oxW4hdGW", "W5NdHIaEW40", "W5ZcMCotWRjd", "W5LSW5hGT7pGTj0", "kYFcULBdIq", "zHVcNHWU", 'cCo3uSkDW6e', "WOTVqq", "vW1AqmoY", "W7VcLKH8WOm", "W6S8abldOa", "W5fzW5ZcPCo2", 'yHRdT8oODG', "W7GxWRVcGmoz", "lmo5WQVdQa", "gSkREYuY", "B1JcG8onda", "iSkWArCy", "WR3cHWOdzG", "W7tcQSo/WRnO", "aIbFWRddKG", "WORcOCkHWPtcNG", "W6D4wLih", 'W6SPaaZcTG', "q8oNgSoHkG", "k24am8k6", "W5ZdOmoeWOJcGa", "WP9tWQzjFW", "W4TSW5mQiq", 'W6iJW5aSoq', 'nb/cVrrt', 'W5iSwt4Q', "WPniW57dTvO", 'W5NcT3zlWQW', "WQJcNJ7cUH8", "n8kuDdLX", "dmo0W7xcTG0", "xHrts8o9", "g8kAfYjEWPhcJIHIW43cVCku", 'sLhcJ8ohcq', "ctmwcsm", "omoSWRhcVSoC", 'W5T3WPCB', 'xehcJCkwqq', "WOvBpJK4", "WPZcPeGFEG", "W4VcMSoMWRjp", "4lwH4lAdWP8Pna", "CCkWtG", "WRZcGtlcQr8", 'FXFcIqzi', "WR4OaW", 'WOvQeJu', "a8knEmk0W4e", "W4yJiI0J", "W7ebW60Vea", "W71wWR00W7y", "W4VcL8oIWRPk", "W67dQCocWQ7cVa", "WOZcHvJdTmo+", 'WOHkW6ddTxe', "imkuFsCO", "W7tdI8oGWPxcQa", "r8omaNqe", 'oCo+mmkCqq', 'W7HRv1ldSalcRCkIW4ldG8ovW7Hf', "ECoWpSoefa", "d05rW5FcHa", 'W5ddRmkJtG', 'lSkvWQNcNmo6', "W4O+W4y", "wahdLCo+", "jhJdR1tcMW", 'aSolbH7cSW', 'WOTXdCoIfG', "WRNdG1v1W60", 'W6TOW6ldTe0', "wHtdLmo2Ca", 'W7FcKfTTWOO', "kmkoBxu1", "W7pcU8oLWRv7", "mCkxWRZcLSk8", "WPfOwCo/aG", "aCoal1LM", "W6G5vL0n", 'W4BcPCoiWQ7cOq', 'WP5sW6LjDq', "xqPWWOldLG", 'rwyOgLa', "W4pdHNmmW4G", "WOJcKCkBW5rG", 'WRTqfqur', "mSoRW7tcTGq", "w8o2W77cRmo7", "WQbpW6lcPK8", "W7SgW7yRbq", 'W6GxWQVcIW', 'WP/cMMfsWPDSg2FdPmk9d38', "tCo8dCkCCW", "WPddM8kfW5vG", "cmkOh8orCG", "bwCH", "4lwy4lsk4lwxW7BGTQS", 'WOxdPhvfW48', "FrVcMbrV", "WPfVva", "prqX", "BSoogSkYxq", "d0P3", 'wXjrwSo2', "W4jUW6NcHSkP", 'BSkqBtaI', 'iSkoy8kGW40', 'WQbxW67dP0G', "W7xcICo7W5FcUq", 'tKz1W5hcHG', 'CCk2x1pcGq', "f8o6oYRcKG", "W7ZcM1PR", "WP1lE8oDdW", "WQuQF1ddVa", "jgtcUutdLq", "jMPTWQBcKa", "4lAV4lwTWOBGTAlGTzy", "aCk6va", "nmo3W7pdS0O", "W5njWRmkW70", 'kNRcTuhdHW', "rWpdMSoZoW", "yqaokmkw", "x1hcG8oneW", "WONcHCkaW5rG", "pGSWmse", 'WOCiWQrCCG', "o0GYz8ke", "4lwN4lwH4lET4lwg4ls3", "4lE64lwbWQdGTzxGT58", "WRDcpW", "g1r3", "ubJdSSoFuq", "WOJcLCk3WQ3cIa", "WPJcKmkrWObS", "omoWl8kqrG", "WQ/cIcVcPbu", "W6lcHSoUW4JdSa", "o8ogaSkSqW", 'md7dMa', 'saFdRf0', 'umo/iIldHG', "n8kiDda/", "WR7cNeSCFq", "u2y6gG", "pSomeSk7Aq", "gCk4CYud", "iw3cO0y", 'WQqBW7pdQrS', 'W6ldMGGrDG', "vmoRhmoiEW", "g8kvWPNcSmkn", "W5FcPMHjWRi", "W4xcGZ8kW5u", "W6TvW7u4dq", "sColea", "WQ/cSLNdVSoZ", 'WRJcJLTNWOK', 'vSoZe8kAta', "WPdcJmk0WQ7dLG", 'WP8QCvtdPW', 'W58KW6KMmW', "nmktns8K", "W6JcPCoQWOy", 'WOxdGt8kW4i', "sH5Er8k9", "AmoAfCkfxG", "WPtdJtJcQqi", "chDJW6lcLG", "CCkqBtaI", "WPZcJxaqzq", 'W67dTCkuWR7dSG', "WPzzW4lcSmkV", "a8ojnCkJsG", 'ErvNF8kormoQaCoQWPO', 'WPmVjWFcGq', "kCoGWRhcVCo4", "b8obmZxcOG", "pqhcQtPW", "m8kKzCkqASkWW5yKWPlcKCkSWPG", 'bCkKqSkuW6C', "W6W4WP84ma", "fSosiWq5", "eSkYumkwW7q", "kSoXWRBcTCoI", "WRpcHmoUWOdcOa", "ESoNp8onkq", 'CSk0uGNcGG', "c8kOh8oEDW", "WRZcVGBdV8oR", 'kJLyWRVdGG', "lmoSWRhcV8oJ", "W7RcSSoKWRK6", "uGtdT1fs", 'C8kRwv/dNa', "zSo0m8oloW", 'W4ddQmkHrIi', "WPpcL8kBW44", 'tCoqddzg', "xmo4o8oAia", "tmomW4FcR8oJ", "c8kusrC2", "mI5AxmoL", 'jmoAespcIG', "lr8DaZm", 'DmokW5pcLmol', "WPruW4BdO1q", "rmomAuy9", "4lw/W5vfgge", 'WQpdVxDbW4e', "WRizlJJcHq", "W5xdVCkL", "oNJcPHeL", "bCoJWO/cLCoF", "oCoMWRlcQSoL", "WOLpWPzCAG", 'W603u0Ca', "tq5A", "CCodW5ldRCoJ", "4ls14lwxWOxdR+c1UW", 'W6ZdPmoFWQRcQa', 'WPX0q8oOwG', 'iSkvAJW/', "ESoxW5ldRCoS", "W4XAW4RcPCk8", "cKj2WP4", "yw3cOCo7eW", 'BSoWiSkooG', "WRtcGdRcRWK", "W5zXCfldVG", "W7KfW7fQcG", "aLiqt8oJ", "j0uwnSkx", "wSohuNSv", 'k3hcV0JdNG', "tCoqaNzm", "nYBcJbeh", "pa47kfK", 'xrZdTuad', "jgxcTq", "4lwk4lAea+c3Soc2Sa", "AColW5xdOSoT", "FSo9i8kakG", "eGSIkay", "W4CJW5SY", 'WRe4abtcUG', "WOFdJ8kHWQJdIq", 'a19yW6RcHW', 'WO3cGSo6WRhdMG', 'WOZcJmkBW6DF', 'WPj9WPKdW7m', "W7WZueyf", "gmkQjYFcJW", "kmkdWRRcL8k7", '4lE64lwp4lsX4lwCta', "W63dPmocWR3dOq", "wCo8dCkj", "sCoos3yF", "FNZcMSozcq", 'W7T3WRqTW6a', "WP4SWOKvqq", "e8oTdSk0xq", 'W5jDW5FdV8kL', "iNJcPaxdJG", "tmoWW7hcNCoE", "WQainZxcTW", "hSoVAYhcKG", "bSorjv4N", "teBcGCogrW", 'W4JdPSo6WORcLG', "WP1sWQbsDa", "zSohr3nm", "mSkjodO/", "W6CCWRlcMSkS", "BCkcW4xcV8oQ", "WPXPWPKdW7m", "WOb3aI8P", "W6hdU8odW5ldQq", 'xa17xSoq', "W4a+WPiXia", "W6ZdSmoeWOpcGW", "FCkNrN/cOq", "fCoIkJlcNa", 'eIehiti', "tCkcvN8j", "rwy6deG", "zSonaN4b", "W5vOWPqmWQC", "W6qDzwSX", "W55VWOusuq", "qb7dVfzd", "WQbdWR5o", "WQ40vKaq", 'WOtcHSk5WQlcHW', "yum/jSkx", "WO9fySo/pG", 'CSowWPZcH8kT', "WROVabtcPq", "eWZcRdPK", "qmk2wmovW6y", "WPRdHmkCW4K", "nmoVW6xcTGu", "ybpcGGKL", 'WO9ZaN8Y', 'mmktWQBcKSkG', "xq8Fr8oG", "W6tdR8o5W7RdRW", "W7dcSL5DWOu", "ESodW5lcQmoO", 'WP47o1VdUW', "WOW/aqxcSG", 'W6STablcPa', "W6maW7JcN8kE", "WPhdHmkBW44L", "WQNcGmk8WOZcRW", 'W7GaWQ3cJq', 'nCkeFg5X', 'W43dIJ8oW48', "W7W1qLPh", 'lmkxWRZcGCkX', "lSo7WRZcU8o4", "W5nZW54wW7i", "WO1hWRLjCW", "WPuKd3ZdNW", "4BAP4BAjW7hHTlhHTzW", "imowbeXh", "iWiT", 'W6pdKCogW73dNq', 'oCoNdIZcSW', "WP1dWQHpEq", "kCkfWQ0", 'WOOSfta3', "hEc0H+c3GUc1MEc3Na", "DSomW5ldRCoN", 'f+c2MEc2HUc3GUc3RG', "rqpdReDc", "j8oAj1rK", "smkBAvD4", "W5LuW4NcVSk0", "qW7dQLbB", "C8kQqM/cTW", "B0eWjSkk", 'WOfNs2K7', "WOrPgbac", "lSoRlCkBsq", 'W4ZdKYChW44', "WPHSbsS", "kMxdV0ldGW", "WRZcOaBdS8o6", "jMFcVLhdGW", 'gCkAfInvWPZcQGT3W4pcRSkR', 'BCkNf1hcMG', "WO/cJSkYWQlcMG", "WOLjWQzADG", "xdJdJv9H", "m8koFcX9", 'WOHuWQzqvW', "e8oziW", "W6FdHmoQ", "W7ehW7W", "W5pdVCkHrJi", "W6BdO8k3ysO", "xqqcwmo6", "4lws4lES4lAz4lEHrW", "vgSOdre", "CGpdQSoFta", 'WOP1xSo8ga', "W6WqW7y/dG", "WRGPWOydEq", "bSk+xCkqW64", "WQhdQmosW6hcPG", 'W6NdKCkWW4NdRa', 'W50tW7SoiSoKWQiGWQz4duJdVG', 'WOnMdW', "Ewu2WQhdLq", '4Bwi4BwQDpcUSj/IGQRXJ4g5', "eCkfWR3cOSkJ", "W7OKvLy", "W5hdPCk+qZG", 'pmk1W7NdTWi', 'bLnMW4dcNa', "W7OqW7yP", "kg3cK3xdJa", "A8kXuG", "W4jPW5Lca3ueimkEw8oNW5ZdMG", "WRZcMxVcSqm", "W4JdOr4nW4C", "lK0Y", "a8kcESkTW48", "dubtW7ZcNa", "WQK3d0RdJW", "WPjkzCokaG", "mJFcKvC", "WPiYWQOiEG", "kmoWkmkq", "b8ohiW", "WODqWO1Tva", "W47dNmoHW7ZdLG", "WPldS3rwW5q", "qez7W4dcHG", "WRnAW7pdOXS", "W7fBW7tcLmkF", 'Ab47m1C', "WOVcVmkVWR7cRG", 'uSoVaa', "W70DW6aVea", "iMPYWQZdIq", "4lwS4lsN4lEQW6Hn", "gq3dKmkxuqzunaVcVHz4", "wmoqtxOC", "WRK+tYhcIq", "WQHxW67dTru", "W5pdUCk5wxS", 'd05IW5NcJa', 'WP1WeW', 'zEc2Soc1VqxGTAu', "yHFdLHXG", "wxeml10", "W603v1yo", "AY3dIKjY", "WPPUwYOO", "WQvwW4ldONK", "l8oSiq", "W5FcMNbUWQa", 'EmopW4m', 'WPHVqSoIoG', "C8kJufpcGa", "eqBdVavw", "W6OZufa", "WR5kWQXCAq", "oCoRWRddTCo5", "W6nwW4tcS8kQ", "mmk6F8oipa", "iIn1WQBdLW", "WQhcPeOSCG", 'W57dKCojWQtcOG', "WPlcUJtcQI8", 'WPO8W40Koa', "WOPSeIy", "jCkiDZTS", "WPO9BmogvW", "WR3cHWCqya", "4Bwqz8M8Y6Wj", "W68tWQZcJCkr", "WRK/dGpcTa", "WPeVpIlcPW", "WPZdHmkaW48L", "WR7cJcVcVau", "4lwe4lAR4lEP4lwB4lEk", "FL3cJLa3", "WO3cImk6", "h8ornuvP", "wmoVv8oj", "xmo6hmkBnG", "WQ/cNJ/cSIC", "x08+leu", "vbldN8kLyq", 'AMNcUqRdHa', "m8oZaW", "WRJcPqFcSW", 'WRldTuT2W78', "m8kcWQdcKmkM", "vG7dT0bf", "WQJdImoMW5tdTG", "q8ohwW"];
  _0x201d = function () {
    return _0x1f0488;
  };
  return _0x201d();
}
_0x2e197e.on = "body";
cmd(_0x2e197e, async (_0x4f3e75, _0x1af8ae, _0x4ed135, {
  from: _0x4020f9,
  l: _0x26cb7d,
  prefix: _0x902b20,
  quoted: _0x17e5d6,
  body: _0x501533,
  isCmd: _0x5cc83e,
  command: _0x113e42,
  args: _0x465b02,
  q: _0x5e81b6,
  isGroup: _0x2ee0fe,
  sender: _0x4e971b,
  senderNumber: _0x51e115,
  botNumber2: _0x3148f4,
  botNumber: _0x22a861,
  pushname: _0x34fd05,
  isMe: _0x463fd5,
  isOwner: _0x178865,
  groupMetadata: _0x33772f,
  groupName: _0x5941b4,
  participants: _0x34f67f,
  groupAdmins: _0x4729ed,
  isBotAdmins: _0x12b5d3,
  isAdmins: _0x403f07,
  reply: _0x5760a9
}) => {
  if (config.AI_IMAGE === 'true') {
    if (_0x1af8ae.key.fromMe) {
      return;
    }
    let _0x1c3e72 = await fetchJson("https://api.maher-zubair.tech/ai/photoleap?q=" + _0x5e81b6);
    const _0x234b28 = {
      'url': await _0x1c3e72.result
    };
    const _0x42a784 = {
      'image': _0x234b28,
      'caption': "𝗚𝗘𝗡𝗘𝗥𝗔𝗧𝗘𝗗 𝗕𝗬 𝗛𝗨𝗡𝗖𝗛𝗢"
    };
    const _0x41a5cc = {
      'quoted': _0x1af8ae
    };
    await _0x4f3e75.sendMessage(_0x4020f9, _0x42a784, _0x41a5cc);
  }
});
const _0x3c6995 = {
  'on': "body"
};
cmd(_0x3c6995, async (_0x376960, _0x18e9df, _0x315291, {
  from: _0x24452a,
  l: _0x2d1c8e,
  prefix: _0x2104d1,
  quoted: _0x4bf470,
  body: _0x30eb51,
  isCmd: _0x3cee5f,
  command: _0x56c018,
  args: _0x3c5b35,
  q: _0x4a8eb7,
  isGroup: _0x48475a,
  sender: _0x2980de,
  senderNumber: _0x252a00,
  botNumber2: _0x525f5a,
  botNumber: _0x489ff2,
  pushname: _0x48faf1,
  isMe: _0x2fe1b6,
  isOwner: _0x52a595,
  groupMetadata: _0xabdde0,
  groupName: _0x2b7aba,
  participants: _0x5889d2,
  groupAdmins: _0x36ba3a,
  isBotAdmins: _0x139a39,
  isAdmins: _0x3c2cb0,
  reply: _0x4cf431
}) => {
  if (config.MATHS_AI === "true") {
    if (_0x18e9df.key.fromMe) {
      return;
    }
    var _0x46dafa = (await fetchJson("https://api.maher-zubair.tech/ai/mathssolve?q=" + _0x4a8eb7)).data;
    return await _0x4cf431(_0x46dafa);
  }
});
const _0x2cd47c = {
  'pattern': "blackbox",
  'alias': ['bb'],
  'react': '👾',
  'desc': "Blackbox ai chat",
  'category': "other",
  'use': ".blackbox hi",
  'filename': __filename
};
cmd(_0x2cd47c, async (_0x5d4594, _0x6ea130, _0x3c1586, {
  from: _0x4f69fe,
  l: _0x1b167c,
  prefix: _0x21ffac,
  quoted: _0x1ae806,
  body: _0x125cd9,
  isCmd: _0x3c2a14,
  command: _0x26c2a1,
  args: _0x74e0c0,
  q: _0x291e4a,
  isGroup: _0x312e2d,
  sender: _0x5e6b1e,
  senderNumber: _0x133329,
  botNumber2: _0x152414,
  botNumber: _0x2bd968,
  pushname: _0x30f8f5,
  isMe: _0x33cc36,
  isOwner: _0x26b629,
  groupMetadata: _0x1de5d2,
  groupName: _0x200916,
  participants: _0x4bb3ce,
  groupAdmins: _0x354aa9,
  isBotAdmins: _0x2ed061,
  isAdmins: _0x263080,
  reply: _0x55958
}) => {
  try {
    if (!_0x291e4a) {
      return _0x55958("Need a keyword");
    }
    var _0x323290 = (await fetchJson("https://api.yanzbotz.my.id/api/ai/blackbox?query=" + _0x291e4a)).result;
    return await _0x55958(_0x323290);
  } catch (_0x4a3ad7) {
    _0x55958("Unable to generate");
    _0x1b167c(_0x4a3ad7);
  }
});
const _0x14e10a = {
  'pattern': "bingimgai",
  'alias': ["midj"],
  'react': '📷',
  'desc': "Generate Images using Bing AI",
  'category': "other",
  'use': ".bingimgai <prompt>",
  'filename': __filename
};
function _0x19547a(_0x2787d9, _0x5f429f, _0x2987e3, _0x206867, _0x274261) {
  return _0x391d(_0x274261 + 0x16a, _0x206867);
}
cmd(_0x14e10a, async (_0x30a7ab, _0x1a5120, _0x3add21, {
  from: _0x10cc9b,
  l: _0xcb3082,
  quoted: _0x31b433,
  body: _0x8d1d8a,
  isCmd: _0x27080b,
  command: _0x4405bf,
  args: _0x5176ae,
  q: _0x5e1c9b,
  isGroup: _0x561b86,
  sender: _0x31873d,
  senderNumber: _0x4142d2,
  botNumber2: _0x22c925,
  botNumber: _0x46f8fb,
  pushname: _0x3218b9,
  isMe: _0x4654de,
  isOwner: _0x9a3c15,
  groupMetadata: _0x4a4818,
  groupName: _0x2ccfee,
  participants: _0x337767,
  groupAdmins: _0x3eece2,
  isBotAdmins: _0x1e4c2f,
  isAdmins: _0x2228d1,
  reply: _0x4f36f6
}) => {
  try {
    if (!_0x5e1c9b) {
      return await _0x4f36f6("*Give me a prompt to generate images*");
    }
    let _0x2f8d13 = await fetchJson("https://api.yanzbotz.my.id/api/text2img/bing-image?prompt=" + _0x5e1c9b + "&apiKey=vihangayt0");
    if (_0x2f8d13 && _0x2f8d13.result && Array.isArray(_0x2f8d13.result) && _0x2f8d13.result.length > 0x0) {
      for (let _0x502031 = 0x0; _0x502031 < _0x2f8d13.result.length; _0x502031++) {
        const _0x243dcb = {
          'url': _0x2f8d13.result[_0x502031]
        };
        const _0xa64841 = {
          'image': _0x243dcb,
          'caption': config.FOOTER
        };
        const _0x2928e8 = {
          'quoted': _0x1a5120
        };
        await _0x30a7ab.sendMessage(_0x10cc9b, _0xa64841, _0x2928e8);
      }
    } else {
      _0x4f36f6("No images found for the given prompt");
    }
  } catch (_0x5c5c9e) {
    _0x4f36f6("Unable to generate images to the given prompt");
    _0xcb3082(_0x5c5c9e);
  }
});
