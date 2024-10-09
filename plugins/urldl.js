(function (_0x85ecae, _0x128fa8) {
  const _0x4f89b0 = _0x85ecae();
  while (true) {
    try {
      const _0x314c0a = parseInt(_0x1a27(0x1f9, "2]^s")) / 0x1 + parseInt(_0x1a27(0x494, "2TM2")) / 0x2 + parseInt(_0x1a27(0x2cf, "Ghev")) / 0x3 * (-parseInt(_0x1a27(0x2f7, "!kKw")) / 0x4) + -parseInt(_0x1a27(0x2e1, 'mgHi')) / 0x5 + parseInt(_0x1a27(0x3ac, "6]Et")) / 0x6 + parseInt(_0x1a27(0x43a, "dgOj")) / 0x7 * (-parseInt(_0x1a27(0x374, "hSVw")) / 0x8) + -parseInt(_0x1a27(0x479, "D3It")) / 0x9;
      if (_0x314c0a === _0x128fa8) {
        break;
      } else {
        _0x4f89b0.push(_0x4f89b0.shift());
      }
    } catch (_0x3686c0) {
      _0x4f89b0.push(_0x4f89b0.shift());
    }
  }
})(_0x26bb, 0x24cd0);
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
const {
  Download
} = require('nima-threads-dl-api');
const axios = require("axios");
const fg = require("api-dylux");
function _0x2f1ec0(_0x564c3e, _0x3e844c, _0x2e41ab, _0x276188, _0x1f9bd8) {
  return _0x1a27(_0x3e844c + 0x396, _0x2e41ab);
}
function _0x1a27(_0x48e6be, _0x549667) {
  const _0x16ea83 = _0x26bb();
  _0x1a27 = function (_0x5754e0, _0x3fbf57) {
    _0x5754e0 = _0x5754e0 - 0x1b9;
    let _0x46869d = _0x16ea83[_0x5754e0];
    if (_0x1a27.AVlYhV === undefined) {
      var _0x5d01c2 = function (_0x5ba210) {
        let _0x52f0c6 = '';
        let _0x20deec = '';
        let _0x2d7a1a = 0x0;
        let _0x209564;
        let _0x715884;
        for (let _0x591b07 = 0x0; _0x715884 = _0x5ba210.charAt(_0x591b07++); ~_0x715884 && (_0x209564 = _0x2d7a1a % 0x4 ? _0x209564 * 0x40 + _0x715884 : _0x715884, _0x2d7a1a++ % 0x4) ? _0x52f0c6 += String.fromCharCode(0xff & _0x209564 >> (-0x2 * _0x2d7a1a & 0x6)) : 0x0) {
          _0x715884 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(_0x715884);
        }
        let _0x1e07d2 = 0x0;
        for (let _0x312c23 = _0x52f0c6.length; _0x1e07d2 < _0x312c23; _0x1e07d2++) {
          _0x20deec += '%' + ('00' + _0x52f0c6.charCodeAt(_0x1e07d2).toString(0x10)).slice(-0x2);
        }
        return decodeURIComponent(_0x20deec);
      };
      const _0x303bf0 = function (_0x17b692, _0x300893) {
        let _0x54abe3 = [];
        let _0x1b5382 = 0x0;
        let _0x42fbd4;
        let _0x5a6f45 = '';
        _0x17b692 = _0x5d01c2(_0x17b692);
        let _0xd6c3ac;
        for (_0xd6c3ac = 0x0; _0xd6c3ac < 0x100; _0xd6c3ac++) {
          _0x54abe3[_0xd6c3ac] = _0xd6c3ac;
        }
        for (_0xd6c3ac = 0x0; _0xd6c3ac < 0x100; _0xd6c3ac++) {
          _0x1b5382 = (_0x1b5382 + _0x54abe3[_0xd6c3ac] + _0x300893.charCodeAt(_0xd6c3ac % _0x300893.length)) % 0x100;
          _0x42fbd4 = _0x54abe3[_0xd6c3ac];
          _0x54abe3[_0xd6c3ac] = _0x54abe3[_0x1b5382];
          _0x54abe3[_0x1b5382] = _0x42fbd4;
        }
        _0xd6c3ac = 0x0;
        _0x1b5382 = 0x0;
        for (let _0x2baaf1 = 0x0; _0x2baaf1 < _0x17b692.length; _0x2baaf1++) {
          _0xd6c3ac = (_0xd6c3ac + 0x1) % 0x100;
          _0x1b5382 = (_0x1b5382 + _0x54abe3[_0xd6c3ac]) % 0x100;
          _0x42fbd4 = _0x54abe3[_0xd6c3ac];
          _0x54abe3[_0xd6c3ac] = _0x54abe3[_0x1b5382];
          _0x54abe3[_0x1b5382] = _0x42fbd4;
          _0x5a6f45 += String.fromCharCode(_0x17b692.charCodeAt(_0x2baaf1) ^ _0x54abe3[(_0x54abe3[_0xd6c3ac] + _0x54abe3[_0x1b5382]) % 0x100]);
        }
        return _0x5a6f45;
      };
      _0x1a27.wXyHtR = _0x303bf0;
      _0x48e6be = arguments;
      _0x1a27.AVlYhV = true;
    }
    const _0x15db15 = _0x16ea83[0x0];
    const _0x554774 = _0x5754e0 + _0x15db15;
    const _0x52c391 = _0x48e6be[_0x554774];
    if (!_0x52c391) {
      if (_0x1a27.AtQADt === undefined) {
        _0x1a27.AtQADt = true;
      }
      _0x46869d = _0x1a27.wXyHtR(_0x46869d, _0x3fbf57);
      _0x48e6be[_0x554774] = _0x46869d;
    } else {
      _0x46869d = _0x52c391;
    }
    return _0x46869d;
  };
  return _0x1a27(_0x48e6be, _0x549667);
}
const {
  mediafireDl
} = require("mfiredlcore-vihangayt");
const {
  lyrics,
  lyricsv2
} = require("@bochilteam/scraper");
const _twitterapi = _0x4b9dea => "https://info.tweeload.site/status/" + _0x4b9dea + ".json";
const getAuthorization = async () => {
  const {
    data: _0x4ad577
  } = await axios["default"].get("https://pastebin.com/raw/SnCfd4ru");
  return _0x4ad577;
};
function _0x323a37(_0x156f23, _0x2c3aa4, _0x4da793, _0x2c7bc7, _0x1a03ce) {
  return _0x1a27(_0x4da793 - 0xf5, _0x156f23);
}
const TwitterDL = async _0x5cfbfe => {
  return new Promise(async (_0x564106, _0x122a7a) => {
    const _0xc7db8c = _0x5cfbfe.match(/\/([\d]+)/);
    if (!_0xc7db8c) {
      return _0x564106({
        'status': "error",
        'message': tradutor.texto4
      });
    }
    const _0x370a23 = await axios["default"]("https://info.tweeload.site/status/" + _0xc7db8c[0x1] + ".json", {
      'method': "GET",
      'headers': {
        'Authorization': await getAuthorization(),
        'user-agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36"
      }
    });
    if (_0x370a23.data.code !== 0xc8) {
      return _0x564106({
        'status': 'error',
        'message': tradutor.texto5
      });
    }
    const _0xb1988e = {
      'id': _0x370a23.data.tweet.author.id,
      'name': _0x370a23.data.tweet.author.name,
      'username': _0x370a23.data.tweet.author.screen_name,
      'avatar_url': _0x370a23.data.tweet.author.avatar_url,
      'banner_url': _0x370a23.data.tweet.author.banner_url
    };
    let _0x1a7e19 = [];
    let _0x532bb3;
    if (_0x370a23.data.tweet?.['media']?.["videos"]) {
      _0x532bb3 = 'video';
      _0x370a23.data.tweet.media.videos.forEach(_0x150f04 => {
        const _0x364543 = [];
        _0x150f04.video_urls.forEach(_0x4752e1 => {
          _0x364543.push({
            'bitrate': _0x4752e1.bitrate,
            'content_type': _0x4752e1.content_type,
            'resolution': _0x4752e1.url.match(/([\d ]{2,5}[x][\d ]{2,5})/)[0x0],
            'url': _0x4752e1.url
          });
        });
        if (_0x364543.length !== 0x0) {
          _0x1a7e19.push({
            'type': _0x150f04.type,
            'duration': _0x150f04.duration,
            'thumbnail_url': _0x150f04.thumbnail_url,
            'result': _0x150f04.type === "video" ? _0x364543 : _0x150f04.url
          });
        }
      });
    } else {
      _0x532bb3 = "photo";
      _0x370a23.data.tweet.media.photos.forEach(_0xdd1a48 => {
        _0x1a7e19.push(_0xdd1a48);
      });
    }
    _0x564106({
      'status': "success",
      'result': {
        'id': _0x370a23.data.tweet.id,
        'caption': _0x370a23.data.tweet.text,
        'created_at': _0x370a23.data.tweet.created_at,
        'created_timestamp': _0x370a23.data.tweet.created_timestamp,
        'replies': _0x370a23.data.tweet.replies,
        'retweets': _0x370a23.data.tweet.retweets,
        'likes': _0x370a23.data.tweet.likes,
        'url': _0x370a23.data.tweet.url,
        'possibly_sensitive': _0x370a23.data.tweet.possibly_sensitive,
        'author': _0xb1988e,
        'type': _0x532bb3,
        'media': _0x1a7e19.length !== 0x0 ? _0x1a7e19 : null
      }
    });
  });
};
const _0x4f5392 = {
  'pattern': "gdrive",
  'alias': ["googledrive'"],
  'react': '📑',
  'desc': "Download googledrive files.",
  'category': "download",
  'use': ".gdrive <googledrive link>",
  'filename': __filename
};
cmd(_0x4f5392, async (_0x373374, _0x2f9880, _0x11fe8b, {
  from: _0xa3347d,
  l: _0x47e00f,
  quoted: _0x533451,
  body: _0x2d9fe6,
  isCmd: _0x15533a,
  command: _0x55ca27,
  args: _0x5759a0,
  q: _0x556cdc,
  isGroup: _0x4a1076,
  sender: _0x495566,
  senderNumber: _0x3622b9,
  botNumber2: _0x1067fc,
  botNumber: _0x35b77f,
  pushname: _0x44f1c3,
  isMe: _0x19257a,
  isOwner: _0x5aa0e6,
  groupMetadata: _0x211cd5,
  groupName: _0x511be2,
  participants: _0x3337f8,
  groupAdmins: _0x3548a8,
  isBotAdmins: _0x26b76a,
  isAdmins: _0x459757,
  reply: _0x4a3dc8
}) => {
  try {
    if (!_0x556cdc) {
      return await _0x4a3dc8("*Please give me googledrive url !!*");
    }
    let _0x226fd1 = await fg.GDriveDl(_0x556cdc);
    _0x4a3dc8("*📃 File name:*  " + _0x226fd1.fileName + "\n*💈 File Size:* " + _0x226fd1.fileSize + "\n*🕹️ File type:* " + _0x226fd1.mimetype);
    const _0x84dd59 = {
      'url': _0x226fd1.downloadUrl
    };
    const _0x5a4b13 = {
      'document': _0x84dd59,
      'fileName': _0x226fd1.fileName,
      'mimetype': _0x226fd1.mimetype
    };
    const _0x3fca57 = {
      'quoted': _0x2f9880
    };
    _0x373374.sendMessage(_0xa3347d, _0x5a4b13, _0x3fca57);
  } catch (_0x1f9a2f) {
    _0x4a3dc8("*Error !!*");
    _0x47e00f(_0x1f9a2f);
  }
});
function _0x549ad2(_0x33a43d, _0x3840f3, _0x1268fd, _0x523bb0, _0x103b97) {
  return _0x1a27(_0x523bb0 - 0x15a, _0x33a43d);
}
const _0x2063e1 = {};
function _0x18719d(_0x3c9003, _0x2fdb3c, _0x4f864d, _0x2d5359, _0x8834b7) {
  return _0x1a27(_0x2fdb3c + 0x2dd, _0x3c9003);
}
_0x2063e1.pattern = 'twitter';
_0x2063e1.react = '💫';
_0x2063e1.desc = "Download fb videos";
_0x2063e1.category = "download";
_0x2063e1.use = ".twitter <facebook video link>";
function _0x1ac2f4(_0x28c065, _0x2c7583, _0x2da715, _0x504bdb, _0x2dc560) {
  return _0x1a27(_0x28c065 + 0x317, _0x2c7583);
}
_0x2063e1.filename = __filename;
cmd(_0x2063e1, async (_0x2b88c5, _0x9c58b8, _0x5512d3, {
  from: _0x27e5b9,
  l: _0x1f3e7d,
  quoted: _0x22e188,
  body: _0x25de38,
  isCmd: _0x3bed63,
  command: _0x1e2719,
  args: _0x5d0561,
  q: _0x400e0e,
  isGroup: _0x57277d,
  sender: _0x59ac9a,
  senderNumber: _0x4893ad,
  botNumber2: _0x57925f,
  botNumber: _0x4b105c,
  pushname: _0x4b0b41,
  isMe: _0x2e659b,
  isOwner: _0x254851,
  groupMetadata: _0x83a8ae,
  groupName: _0x5e5ce3,
  participants: _0x372c17,
  groupAdmins: _0x5f0549,
  isBotAdmins: _0x5e7662,
  isAdmins: _0x3d3ba4,
  reply: _0x5a7e21
}) => {
  try {
    if (!_0x400e0e) {
      return await _0x5a7e21("*Please give me x url !!");
    }
    const _0x414c43 = await TwitterDL(_0x400e0e);
    if (_0x414c43.result.type == "video") {
      for (let _0x5938f1 = 0x0; _0x5938f1 < _0x414c43.result.media.length; _0x5938f1++) {
        const _0x28fd52 = {
          'url': _0x414c43.result.media[_0x5938f1].result[0x0].url
        };
        const _0x5a916d = {
          'video': _0x28fd52,
          'caption': "𝗚𝗘𝗡𝗘𝗥𝗔𝗧𝗘𝗗 𝗕𝗬 𝗛𝗨𝗡𝗖𝗛𝗢"
        };
        const _0x210280 = {
          'quoted': _0x9c58b8
        };
        await _0x2b88c5.sendMessage(_0x27e5b9, _0x5a916d, _0x210280);
      }
      ;
    } else {
      if (_0x414c43.result.type == 'photo') {
        for (let _0x14c39f = 0x0; _0x14c39f < _0x414c43.result.media.length; _0x14c39f++) {
          const _0x5c4d34 = {
            'url': _0x414c43.result.media[_0x14c39f].url
          };
          const _0xc507c3 = {
            'image': _0x5c4d34,
            'caption': "POWERED BY TALKDROVE"
          };
          const _0x1df086 = {
            'quoted': _0x9c58b8
          };
          await _0x2b88c5.sendMessage(_0x27e5b9, _0xc507c3, _0x1df086);
        }
      }
    }
  } catch (_0x1d599b) {
    console.log(_0x1d599b);
  }
});
function _0x26bb() {
  const _0x5252e7 = ['WOSjuK7dQG', "C0ueWPGB", "WRW5DI5E", "yX14amoZ", "gIZdJhBcIq", 'WQG1DJnS', 'oSkBWR8', "W7rgdeNdMG", "WQXAWONdRrO", "W58eW7pdLrm", "WRVdOJK", "WRrFW4Ch", "DSoAWO1VAG", 'vgetnCoC', "tg3dRmkGWOW", "WQ3dRxC", "zNKRnmou", "lNG8W6a", '4BEv4BwjoUg1REg0Ra', "CSoFW60BnmotlSk/W7jgzc0E", "WR5JErLg", "WQzVef/dKW", "WR138yIvLU+6R8kDjW", "WORdMXj+W58", "WRaxffup", 'jmkYfSoyuq', 'WQb3f2hdRa', 'Ex7dQCkoWRy', "WQ3dSHzDW48", "xMSpf8oj", "hGJdL3RcNa", "WQbffGi", "umk7g8kwWQVcIbjbhJRcNhBcIa", "jSoQxa0", "tmkrW7VcS8on", 'Aq8Qw8kV', "W50uW7ldHtS", "WR7dQhCEtW", "W7jtk8ocpa", "lXldHmkobW", 'mxFdL8ktW7i', "WO3dOCkszua", "W4dcHSkDamko", "W5lcShhdMfK", "cmoJr8kfW7G", "mhFcHmkbW7C", "W7tcR8ofW4JcVq", "4lwe4lsF4lss4lAk4lEE", "m8o+sq", "W7Pzc17dIW", "iM08W7ez", 'WRPhW7ddSmkp', "AXm0x8k1", "FCoju8knlW", "WQmAl0qj", 'WOqzwCoDWQ4', "osRdNCoyWP8", 'WRNdOq0Jva', "Ae0eWPWk", "W7SEW5BcR0NdNCovmIpcUmkXWQq", "hG1PcYO", 'kmo9W6X+dG', "W7vbW7S", "WR1BW4asWRO", "D8k5W4u", "WPVdRqdcIYS", "W7LaoSkkDW", "nKdcGmkUW74", "nMxcKSkrW68", 'qaRdJexcMa', "WOekxq", "AY3dIxpcJG", 'W5tcNg0MfG', "kSkDWR8mBq", "tK/dJ8kHWQC", "dCoKtCoo", "ug8phSoy", 'tCkrW6BcOSoS', 'nSkyWR8', 'WPOgWRRcR8kt', "WQldIY4IAa", "WRqElG", "i8k2pCoXFG", 'pCoYsa', "gCovW6S", 'WR1BWOLmW7S', 'B8oCxSoVwa', "WRLsW5zgWQ8", "cb/cPSksW54", "W6vocSoulW", 'W4tcMCkvrCkx', 'W4C1WRnBW48', "W7hdISk6EqK", "WOm5WR7cVq", "a8kzC8oxWQ4", "WRtdVWfBWRS", "W5G8WRGpW4y", 'r0fHvgq', "kCopBge", "cbtdOSkvW5G", "dCkaWReSWPW", 'yfaaWOK', "ud3dIhW", "W4pdMSkqDW4", "smoADmkabG", "lCoeW5jmbG", "mCk6kCoGxW", "W7P1luaD", "gH/dVmopWPa", "WRHaWO/dRXa", "qc/dNNRcIq", "W6NcUmkKaCkY", "WRNcRCooW47cUW", "xmofDCkjla", 'uSkvW6hcTmoO', 'ESkJW6y', "s1ytfCo5", "WPFcNmkAmGC", '8jYlK3GqWPjC', 'iSkNW4bQWRm', 'uSoMW4TGWP4', 'lSkcWRDjDa', "cCo+WOONW4S", "ymkJW7m", "W6mSAH8", 'W4ldLhuRoa', "d8kfWR4MWOa", 'igFcOmkJW7m', "E1qzimoW", 'DHZdNmolWPC', 'nmoYtW1G', "W6pcQMOWpq", "W6NcQ8ovW5xcUq", 'WOvblf3dMW', 'FSkCofnK', "ESk/W5JdGM8", "dt3dOSoVWPS", "BHSOtSkY", "lq4Wu8kO", 'iCobFW', "bSkIvmkTW4y", 'WQDjWOtcUXG', "xcZdJ2/cJG", "4lE/WRpGTP3GTRtGT4y", "g8oEW7hdPmox", "WRjzcuJdKq", "W4lcL3C", "cCoIv8okW6O", "kCovW4TXEa", "WQRdOIXgWPC", "WQ3cThHFWOe", "phaSW6qf", "b8ocW74", "WQRcThXk", 'emoKnXif', 'W54eW67dHdi', "cmoRW6LFkW", "FCkqW5FcMmoZ", "eCoRsCoiW4m", "WQBdOGHmW5S", "WRZcShTEWOq", 'aX/cTSkqW5C', 'Er8GtG', "WQjFm3xdQW", "W5VcHSkuamkv", "lsZdGConWP0", "W4ddLCkyyIW", "b8kXWP0QW4O", "g8kbWRi9WP0", 'WR9keL8', "WQ8GFW", "zSkQW51L", "W4tcMhCNnW", "A8k0W7NdPG", "W7hcI8kYvNG", "W5dcVuhdKG", "nSoFW6xdPSoo", "c8kpF8kCW70", "bmoIua", "ptFdMSkzWP4", 'y8k7W4aPWRW', 'WQldSZ1bW5K', "WRZdRd4wyG", "FX8OvSkY", "wCoTW45+WPPexLOZhSkjWQm", "FSkFWObOEa", 'aXhcTCkF', "rSkyW6H3WOK", "EXm8x8k0", "WROslW", "W5/dGmkzaSof", 'WQ7dPZ1kW54', "E33dN8kaWQa", "nWbnWRaN", 'umkoWQTGEa', "hSkly8kqW6W", "4lAC4lsO4lwd4lE7tW", 'kSkXWO8nWQS', "imolFgLK", "WOBdJtzFW70", 'f1jpF3q', "WRtdPcuF", 'WRxdUqG', 'FCondCooFq', "WR9FW5DgWRy", "vmo/C8kkdW", "kSo3W61y", "vSoUkHSb", "W7dcPvqhWQy", "k8k8WPmTW4C", "8yQrMokbQpcuGiqc4BA54BsC4Bwz", "WOpcVhLTWR8", "aMm6W7iV", 'A8kNW4XrWQO', "v0S7aZa", "y8kaW59VWPK", 'CCoErSkAjG', "WQvmW58", "C8ohsCkAiG", "W4lcVw8", "pYlcLSkPW7m", 't2ZdUSkUWP8', "WRPmW7BdSCkd", "WQSQDwZdHq", "yNtcNSkAW78", "bb/cRmorW5O", "m8oJASoJW7i", "zmoFqSklmW", "lSobDq", "WQjBW4CrWR4", 'p0iZySkydc3dTq', "kCobB25P", "W79oW6ZdTSkC", "WQZdS8k0tKC", "WPLbmfZdVa", 'DvCaWP4B', 'd8ozBSoDW7S', "xmkEWR3dPmol", "D8kFWPC", "WQycEfNdHa", "y8kNW4bLWQS", 'uSkrWRm', "WPJcIJ5Wya", 'cSkfWRqOWOe', "xCojx8otyW", "jSk6i8o9DG", "WQRdScWjW4m", "WQ7dKCk1sq", "W5GyWPn3W6u", 'bhJcK1lcNa', "l2S6W64y", "bmkcE8ky", "D8kvWPnVDq", "f8oPlHi", "hwFcHCkyW6G", "EghdN8kAWQ4", "z8kLW50", 'DuuDWO8', 'WP9rW4q1WOW', "W6a2W6ZdGHi", "icxcImkBW4e", "W4mQWRLkW5q", 'WPHtWQRcHwW', 'W7ddKmkUu3q', 'W7Oxjfyi', "sCkDW7hcSSoV", "WP0jx2/dPq", 'WQJdJCkIrh4', "W5dcRXxdN3q", 'W4pcM8kVeCkd', 'iCkWjSo6xa', "WRbCnSoCoa", "WOePWQZcTSkM", 'WQRcUMTEWOu', "WOKktvBdRa", 'lCo9W6TxcW', 'oColyhrQ', "BCkKW45OWR0", "oeLVfmoO", "eG9G", "zCkUW50", 'y0elWPuk', "yCkFWPD0Dq", "jMdcNSkcW74", "iSo3W7bCgW", 'WPJdIG4GCq', "WO8Et8oqW6K", "W4q4WRjlW60", "amoVW6FdUSoo", "krFdTCkjgq", "W5/cG8oq4lE04lwG", "W51UW5pdLSkS", "W7ldQZ4uwq", 'WPSmxL3dRW', "WRtdVafmW6e", "W4tdV/cDKQpdImkp", "4lsg4lw44lwtmK4", "WQrnW4anWQS", "W45oW77dNJm", "WRFdOmklux4", "WP/dMCoijSkcWQ5Tvda", "W4DYdmoZhG", "WRFdISk1vxa", "rfOMiCoK", 'mtZdISoqWPK', "B3RdHmkgWR8", "WOqbx1FcOq", 'W5KtW7e', 'W7pcOKrOW6u', "W5m4WQ9m", "8jYyLa7dKHhdNW", "xSkqW6BdT8o1", "tmksW7NcM8oO", 'lmkSwCkPW4S', "CYRdH8ocWQ9AmKeHq8oO", "kdhdM8ouWPO", "n8koWR1pyG", "W7qoW7ZdSmkf", "vSkyW7dcPmkU", "W5/cSmkff8kw", "ybm1x8kV", "r3Wn", 'E8kMW6/dOf4', "W7WWW5BdTc0", "w8kvW6hcTG", 'WR7cS2jgWRi', 'gSkRWPm6W4O', "ACk7WRzjyq", "WPa4WQtcUSk8", "WRbreuW", "WQmjxKddJW", 'ntZdTmknoG', 'btVcQmkkWPq', 'W5xcQLtdH3W', "W67cI04Acq", "bbrIrw8", 'bt7dVSk4mW', 'e8ksWPfhrG', "e8k7zmkyW4O", 'F8kWW77dSu8', "xxWy", "WRZcISkUrgm", "W6JdH8kqFHW", "x8kDDSk7aa", "WRhdVGTDW7a", "y8ojFhjS", "dCoOr8oxW7a", 'W5xcNha3pa', "bSovW6RdVmon", "cCoUkrO+", "WOC0mMOP", 'WRWOAqnh', "Ab80vCk6", 'W5NcUvhdMNW', 'W57cJmkcamkF', 'WP8OCqnf', "WRC9FW", 'ECkSWRzgvG', 'W6lWLAsyWRSXWOW', 'j8koWQK', "WR5iW5GqWQW", "W4dcJSkebSks", 'nCkQiSo8', "ESopCSkNcG", "eXv5xgi", "WPKnsf3dOq", "W7TnW7O", "jSk0WQ8UjG", "W4LoW67dHt8", "i8o0W7DjcG", "emoKjIiw", 'sMu1pmo1', "ArSSwW", "l8kcWRfjCW", "WRFdVIqBwG", "E8ktWPCHBW", "W5VcISoqcmkF", "bhuSW7KL", 'v2OieCoB', "4lsIaoc1N+c1Joc1Gq", "WQjFW55gWQ0", "emoLiHab", "vh3dJSkhWOq", 'WOqmvCoDW5e', "n8k6iSoHxa", 'nspdIW', "mxNcNmkKW5a", 'W4dcQ1ddLMK', 'y8oCsSk7Ea', 'ESkBWOjOAW', "Ax3dImklWQO", "mSkEWRvyzq", "uw8rbmou", "zfmwWPOi", "dCoXmXi", "pCkYW6HscW", "W5GwW7JdLcO", "W63cVCoeW4tcQa", "DCozW61IySkjtCkCW7q", "WResp0a", "WRxdO2KvW5e", "bNFcRSkEW5O", "cL15q2W", "yMayaCoS", "iCk6iSo3", '4lEd4lwGW4ulua', 'W4aoW7O', "W7fjoSkqoG", "bbhcTCkBW5W", 'W6vimW', "d8kiWQKO", "WRPxW4ehW7y", "z08xWR4o", "W4tdMCkjqIq", "qsRdLW", 'x8kOW5JdS0C', 'bwZcJcJdIxRdU8ofbSkcWR4SW7a', 'e8kyWO9iwG', "yCoysSoYua", "qsVdNM3cKW", "WQTjWPtdVHG", "vMGjaCof", "hSkBWRe", 'WQFdOY9iW4m', 'g8kPWRmMW5u', "v3Os", "W7SppmoFna", "AXuQF8k6", 'WPj6W7KeWOi', "l8o1W6XAaG", 'AbK9w8oO', "WRpdSZPb", "WQChj3Kt", "lSopBgvI", "WRTcha", 'WOiFwCoqW6O', "W4upW7NcKsO", "ACooxCo6vG", "WQGwWQFdNmkqWRisiZK", "ymkWW67cPv4", "WRpdHCk2", '4lspFEc0Noc3Voc0Iq', 'W7NdNSkgAIa', "WRXoW6KFWPW", 'B8kUW41TWRK', "hmoefWe9", 'jh3dMCkaW6W', "WPKgv8oHW4u", "W53cMSkddq", "odBdMCoxWPq", "BSkUW4DJWQW", "vemci8ox", "W5xcLsK", 'WPtcV1tdNwK', "m8kmWO1LFa", "FghdH8knWPW", "D8kEWQ1uxW", "zmkIW4vHWPy", 'W5xcKSo2W4lcVW', "W5/cUuW", "WP1rW4KpWRC", 'bSkgEmkAW7O', "WRBdTsW", "WQldQYW", "aSkZWPLKWO8", 'kGTAExy', 'fSoeEaXk', "WP0ksuVdQq", "lmoLWOzOWRe", "WRBdUcuBsq", "WRfyW5OuWR4", "zmorv8kl", 'bmkVWQHfDG', "gCk7WP0TW5S", 'hCocW6S', "xmkvW6hcSSoN", 'WQnBf3VdPW', "W5hcVvhdGd0", 'WOtcGWtcHKi', "eWL8qJO", 'eGlcRq', 'W7LbW6/dQ8kb', "WQhdPW1iW6y", "aCovWRldR8ol", "vY4vgmop", "WRKwjuys", "W7uhi1md", 'pZBdGmonWP0', "WQZcQ0uiWR8", "W71Fo8ozpa", "W4lcJSkha8k2", "ACoWBCkBja", 'WQuMrSoPW5W', "WR/cVSkCWPlcRW", 'vtZdId/dGq', "BeubWPio", 'WOy+WQe', "WRKAhmoylW", "W5VcVve", "4lA9WOJGTPBGTllGTOm", "WQ7dRYrm", "jmkhWPqfW6C", "WRrlW4ehWQ8", "pmo3W61oaW", "cXxcR8kzW48", "W7T+lvGy", "huGbW4up", 'pJpdTmkhka', "WRzxW58dWRu", 'hCkKDmkCW4u', "WQtdPaDCW7G", 'ndddNCkzWO4', "i3CSWQeE", 'WQNcUMDmWOq', 'W4JcLgzTAa', "CSkOWQjRxa", "4lA64lw5n8o3W4C", "jN3cGmkAW7C", "WRTnWO7dVZi", "ACkNW7nDWRe", "lmkBtSkwW6G", "WPCJWRRcU8k+", "c8knCCkCW7C", "4lsr4lwr4lET4lA14lAH", 'fv0TecO', 'E8kWW63dT0S', "WQdcOvDFWPe", "CSkBW5RcNmoH", "DeNdOCkGWRS", "zmoxW6Xjaa", 'o8oHsuHK', "DdittCkj", "WPK3twldPq", "k3C8WQem", "BCoiwSoZxG", "WRXrWPddVG", "CSkjWOeHFG", "smk0W6NdRKu", "cXX1hNm", "WRFcQCooW4ZdSW", "bH3cPa", "eWr8va", "W5VdUSksyai", "eWFcPmkBW48", 'ASkIW7NdPe0', "W5SuWQ9RW6S", 'omoDFq', "WQJcUNPUWOK", "p2SK", "iCk6n8o1rq", 'WOBdRWFcGYJcJmkfrmkCDSkvoq', 'W5WuW67dMq', "E3ddGSkhWRW", "WPn1mq", 'wmo+F8ojva', "W5W+WQZcOSo9", "8jcPNCk/WOFdRh8", "W5K8WRvdW78", "WQ/dUmkwW6/cVSk7WOZcP24", "ySonvmkBkW", "4lE84lsO4lsV4lsy4lsC", "pCo4wqLY", 'obpdO8kncG', "WOzLW6WzWPtdNdrYA8kuWQa", "wd3dLxJcIq", "WRS/DG", 'bmkSWOu', 'fCoNja', 'nCkoW7Pbzq', 'WQrSWPJdQG8', 'W5tcKtHIgq', "WQNdPrDDW7q", "n8oGxWLL", "W5iYWQ8aW5a", "W4lcShddH3m", "YiViJEg0O8kf4BAu", 'arhcS8kxWPq', "W4hcUmoYW4/cNq", 'F2/dISkqWOe', "W5FcMhC2nq", '4lE94lA3loc2NUc3Mq', "iSopFa", "B8osqmoVva", "ngxdJSkmWQy", "pmkhi8oXDa", 'WRVcP2q', 'AmoCwSo6', "FSkDd8k6gW", "W4rde8ocW6S", 'FCoiqCoVva', "umkvW7e", "uJhdIxRdKW", "WQalFqrO", 'bCoSv8oe', "W4/cJxCYiW", "l8kYW6VdQ14", 'jSo4xmoPxG', 'WRhdOYHkW4i', "WOZcM2vYWPi", "W7tcRmoiW5pcUq", 'bmkXWPDUW5K', "WR/dRdKE", "W5FcS1VdH3G", '4lsg4lAk4lA44lETWP8', "WQ5bWOZdVJe", "jqRdPCkecW", "qdddIxRcNa", "pCoNnbKi", "mxFcMCkqW5y", 'BSk8W68', "ksNcT8kjW7y", "WO3dLWzpW58", "E8kOW7RdOa", "WRFdSsbDW4i", "F8ojs8o5wa", "rComyCkkW7K", "hSkAzSky", "ESkmWOe", "WR3cMpghS5HplG", "DmoRzCkIamojdCotWQTIq8o0W7i", "fCo6rSoaW60", "xv/dRSkxW5u", 'W6ZcUmon', 'W43cRfa', "WRLrW50", 'aCo0Fvra', 'jSobwZjN', 'WQlcPvjsWQ8', "WRBdVNOEuq", "W5NdHSk9zHy", "WOXhWPFdTrm", 'Bw/cLSkkW4PwWQGAWQhcJY7cOv8', "YjJiSog2KSkO4BAV", '8kIBSmkeW6NcLaq', 'W4RcNgCRmq', "W6hcV1e0oa", "WQ4WB3xdJq", "h8krEG", "jmkYna", "WQaIWO7cS8k2", "pWhdQmkmmW", "dHtcPmkrW4G", 'WQmOFH9k', 'W7XBCmkfCW', 'zSkpW5HGWRC', "WQRdOIXgWPy", 'lmoNW4LSbW', "WQy4F8o3W6G", "8k6jTNhdNrdcNG", "WQ0SAGjc", 'h8kNWOWR', "d2ekW48d", "y8k4W4WKWR8", "W6bplmoy", 'WRddRq5eW48', '4BEfWQVlVCQMWRu', "WRVdHYaaFa", 'WP4TWRNcTSk6', "WQrhhvJdTW", "FghdH8knWQe", "WORdKCktEx4", "oxaYW6q", "h8kqCW", "xSoXuCkzcG", "ECopqG", 'ia3dQmkdqa', "W6BcQ1tdV1C", 'nxxcJCkeW5G', "FX8Rt8k3", "WOHfqHJdTq", "C8k+W4zWWR0", "C0XfW5Po", "W65xW7RdUSkC", "W6lWLzcJWRS5WOq", "dmoKtSoaW60", "WQZdOG9mWRu", "WQZcUxf0WPS", 'yCoAW4uGmW', "lhpcMSkr", "WQtdQHbi", 'kSk+nCobqG', "WP0qsva", 'qmkFW7HQWRO', 'mCkOnmoXra', "W5u0WQHDW4e", "h8oNmtif", "bCoIvmolW7u", "kSo7W5zqla", '4BEQ4BwGhpcZG6BIG6NWMigF', "W7xdTSkOCdy", "cCoXWPO7W4e", "W7ddJCkHas0", "DmkvqmoCCq", "iCoZW7O", "WQzBWPtdUHG", "W5rvkmoEmq", '4lE94lEgloc2IEc2PW', "CvuwWPm", 'W7uAm8ozmW', 'WQRdQsC', "WQ7dOGLiWRG", "iSo1rGvy", "f8oKr8oaW7y", "yCkoWOHzBa", "aSorW6BdVmoh", "n1v3tmk6", "WPvvdv3dIa", "u3Svgmos", "BtddTNtcUq", "WQJdGCoMvgm", '4BA34BwqW7ZWLkoi4OkW8kEcGa', 'WRVdUZjAua', "4lA54lAhrEc1G+c2TG", "8j+bIokbQpgbO5rw4Bsz4BEt4BEa", "WQFdRXzaW6m", "W4mPWRvbW4C", 'qgSae8oj', "W69sW7m", "g8ocrCo0W7q", 'WPiHWQG', 'jqhdPmomWPS', 'ErSSt8kO', "B8kBW5RcHCoW", 'gmkmWRmTWRq', "ksVdGSkzW5K", "n8o+W6Td", "eCkNWPiHWPu", "WPqvxW", "WOOuWOFcOmkX", 'W4dcMmk4pmkD', "WQvmW59BWRm", "W5L6WQGpW4y", "pJVdS8kAeG", "dSonzCkuW7O", "WQusp1ud", "W4tcUL/dNKC", 'ocZdNmoyWOW', 'vwFdNmk7WPG', "4BEj4BAjD+g1OEg0UG", "E2KgWRKP", "W6RcMgbIhW", 'ss0mxSkt', "x8kBWQG", 'rNRcKCksW54', 'FgFdMCkTWQ4', "WO3cGfPNWR0", "z8kFWPyHjq", 'mtddG8oC', 'W5FcRLddKMK', "WQuBjfuj", "jZy7W6iy", "xMFdNmkgWQm", 'W5tcJVgoTzJVUj4EW4a', 'mIddMSorWPe', "eCoFW7BdRq", "f8ouW43dQCow", "WQvtcmoPda", "kuFcH8kmW58", "jNXOW68l", 'h8kbWQGKWPa', "EmojxSoOcW", "WOxcISkjsIWnW5xcOq", 'pSolDMri', 'ASk1W7JdRfW', "W7r/W7hdVSkf", "oSoLW7TEgW", "EwNdM8kCWQy", 'W4LLW4VdM8k5', "qJhdN3RcKG", "DSk8W4XHWQW", 'cmkBWRGOWOy', "uCoUu8kFiW", 'WP8BDcvQ', "WQrnWO7dVaS", 'WRrkW6ZdSmkg', "y8kNgf4YW7/dULhcS8oVW686oG", "WQvAW5u0WQG", 'W6pdSIfaW4u', "kSoZW6PA", "qCkgWQtcVmkuWO/dKLK9W7ZdPwG", "omkdWQS7WP8", "nmo2uNvM", "W5SzWQrEW5a", "WPtdGdP2zG", '4BwpoCUrYi5k', "W5KsW7G", "lmoECs03", "WQVdLSkQ", 'DSkYW5LH', 'WPOfeMmH', "zb0RuSkY", "W4tcG8kvrCkP"];
  _0x26bb = function () {
    return _0x5252e7;
  };
  return _0x26bb();
}
const _0x203c9c = {
  'pattern': 'threads',
  'alias': ["thread"],
  'react': '🧵',
  'desc': "Download threads videos/photos.",
  'category': 'download',
  'use': ".threads <threads link>",
  'filename': __filename
};
cmd(_0x203c9c, async (_0x48e2da, _0x155b10, _0x4fcfb1, {
  from: _0x48cb43,
  l: _0x41ef08,
  quoted: _0xc23597,
  body: _0x7101d2,
  isCmd: _0x461867,
  command: _0x5952d3,
  args: _0x188e18,
  q: _0x4236aa,
  isGroup: _0x1a7fcf,
  sender: _0x266548,
  senderNumber: _0xfc5027,
  botNumber2: _0x2ce556,
  botNumber: _0x1c8883,
  pushname: _0x1fea13,
  isMe: _0x3a824e,
  isOwner: _0x4decd0,
  groupMetadata: _0x2eef1e,
  groupName: _0x94a776,
  participants: _0x2e3fb3,
  groupAdmins: _0x365f64,
  isBotAdmins: _0x491efe,
  isAdmins: _0x2d10f5,
  reply: _0x4f7700
}) => {
  try {
    if (!_0x4236aa) {
      return await _0x4f7700("Please give me threads url !!");
    }
    let _0x298e78 = await Download(_0x4236aa);
    for (let _0x50b68b = 0x0; _0x50b68b < _0x298e78.download.length; _0x50b68b++) {
      const _0x593378 = {
        'quoted': _0x155b10
      };
      const _0x2c04dc = {
        'quoted': _0x155b10
      };
      if (_0x298e78.download[_0x50b68b].type === "image") {
        await _0x48e2da.sendMessage(_0x48cb43, {
          'image': {
            'url': _0x298e78.download[_0x50b68b].url
          },
          'caption': config.FOOTER
        }, _0x593378);
      } else {
        await _0x48e2da.sendMessage(_0x48cb43, {
          'video': {
            'url': _0x298e78.download[_0x50b68b].url
          },
          'caption': config.FOOTER
        }, _0x2c04dc);
      }
    }
  } catch (_0x12aa4f) {
    _0x4f7700("I can't find this video!");
    _0x41ef08(_0x12aa4f);
  }
});
const _0x2e7766 = {
  'pattern': 'ig',
  'alias': ["insta"],
  'react': '💫',
  'desc': "Download Instagram videos",
  'category': "download",
  'use': ".ig <insta link>",
  'filename': __filename
};
cmd(_0x2e7766, async (_0xf0d523, _0x3e9686, _0x3d97c7, {
  from: _0x3363fb,
  l: _0x311dcf,
  quoted: _0x2e4700,
  body: _0x1face5,
  isCmd: _0x4627ba,
  command: _0x41ac9f,
  args: _0x31ab82,
  q: _0x28dc02,
  isGroup: _0x1ef86a,
  sender: _0xaea3d9,
  senderNumber: _0x1247f2,
  botNumber2: _0x216dd8,
  botNumber: _0x21f6d3,
  pushname: _0x2a635a,
  isMe: _0x2cb244,
  isOwner: _0x4fa824,
  groupMetadata: _0x201b69,
  groupName: _0xbbd49d,
  participants: _0x120584,
  groupAdmins: _0x219158,
  isBotAdmins: _0x19e60a,
  isAdmins: _0x3849b6,
  reply: _0x14ad09
}) => {
  try {
    if (!_0x28dc02) {
      return await _0x14ad09("*Please give me instagram url !!");
    }
    let _0x343117 = await fetchJson("https://widipe.com/download/igdl?url=" + _0x28dc02);
    const _0x355118 = {
      'quoted': _0x3e9686
    };
    if (_0x343117.length < 0x1) {
      return await _0xf0d523.sendMessage(_0x3363fb, {
        'text': " *I couldn't find anything :(*"
      }, _0x355118);
    }
    _0x343117.result.map(_0x5d1dc8 => {
      _0xf0d523.sendFileUrl(_0x3363fb, _0x5d1dc8.url, "𝗚𝗘𝗡𝗘𝗥𝗔𝗧𝗘𝗗 𝗕𝗬 𝗛𝗨𝗡𝗖𝗛𝗢", _0x3e9686);
    });
  } catch (_0x545a99) {
    _0x14ad09(" I cant find this video!");
    console.log(_0x545a99);
  }
});
const _0x14c67b = {
  'pattern': "mediafire",
  'alias': ['mfire'],
  'react': '📁',
  'desc': "Download mediafire files.",
  'category': "download",
  'use': ".mediafire <mediafire link>",
  'filename': __filename
};
cmd(_0x14c67b, async (_0x45a262, _0x1d891f, _0x4d4ae8, {
  from: _0x4a6755,
  l: _0x3aca84,
  quoted: _0x38be5f,
  body: _0x1330ad,
  isCmd: _0x14d658,
  command: _0x2d9069,
  args: _0x222b70,
  q: _0x3121b9,
  isGroup: _0x373e49,
  sender: _0x5757c9,
  senderNumber: _0xcd42c5,
  botNumber2: _0x445ca1,
  botNumber: _0x4d4ac5,
  pushname: _0x181ef0,
  isMe: _0x5cef0d,
  isOwner: _0x46a4fb,
  groupMetadata: _0x3f9244,
  groupName: _0xe837ba,
  participants: _0x3fa695,
  groupAdmins: _0x58ab49,
  isBotAdmins: _0xf21aae,
  isAdmins: _0x2fb8e7,
  reply: _0x58019c
}) => {
  try {
    if (!_0x3121b9) {
      return await _0x58019c("*Please give me google drive url*");
    }
    if (!_0x3121b9.includes("mediafire.com")) {
      return await _0x58019c("*Please give me google drive url*");
    }
    if (!_0x3121b9.includes("/file")) {
      return await _0x58019c("*Please give me google drive url*");
    }
    const _0x4696cb = await mediafireDl(_0x3121b9);
    const _0x35ec0e = {
      'url': _0x4696cb.link
    };
    const _0x21a5b4 = {
      'document': _0x35ec0e,
      'fileName': _0x4696cb.name,
      'mimetype': _0x4696cb.mime,
      'caption': "*🧸 Name* : " + _0x4696cb.name + "\n*📊 Size* : " + _0x4696cb.size + "\n*🕹️ Mime* : " + _0x4696cb.mime
    };
    const _0x3b3f69 = {
      'quoted': _0x1d891f
    };
    const _0x41d024 = _0x45a262.sendMessage(_0x4a6755, _0x21a5b4, _0x3b3f69);
    const _0xeab55d = {
      'text': '📁',
      'key': _0x41d024.key
    };
    const _0x3a9fb2 = {
      'react': _0xeab55d
    };
    await _0x45a262.sendMessage(_0x4a6755, _0x3a9fb2);
  } catch (_0x236640) {
    _0x58019c("*Error !!*");
    _0x3aca84(_0x236640);
  }
});l
