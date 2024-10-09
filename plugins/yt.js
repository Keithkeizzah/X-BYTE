(function (_0x3d6483, _0x2ed406) {
  const _0x5168a8 = _0x3d6483();
  while (true) {
    try {
      const _0x22ef37 = parseInt(_0x46de(0x54e, "Q]nD")) / 0x1 + parseInt(_0x46de(0x4fd, "&0Uu")) / 0x2 * (parseInt(_0x46de(0x4f0, "^[nA")) / 0x3) + -parseInt(_0x46de(0x298, "xMKl")) / 0x4 + -parseInt(_0x46de(0x77c, "cwlM")) / 0x5 + parseInt(_0x46de(0x6cc, "PdRh")) / 0x6 * (-parseInt(_0x46de(0x238, "ZhXi")) / 0x7) + parseInt(_0x46de(0x832, "doe$")) / 0x8 + parseInt(_0x46de(0x1f5, "oufM")) / 0x9;
      if (_0x22ef37 === _0x2ed406) {
        break;
      } else {
        _0x5168a8.push(_0x5168a8.shift());
      }
    } catch (_0x2f3181) {
      _0x5168a8.push(_0x5168a8.shift());
    }
  }
})(_0x2551, 0x49521);
const config = require("../settings");
const puppeteer = require("puppeteer");
const dl = require("@bochilteam/scraper");
const yts = require("yt-search");
const ytdl = require("@distube/ytdl-core");
const l = console.log;
const fs = require("fs-extra");
const fg = require('api-dylux');
function ytreg(_0x1bf30d) {
  return /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.test(_0x1bf30d);
}
const {
  smsg,
  getBuffer,
  getGroupAdmins,
  getRandom,
  getsize,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  fetchJson
} = require("../lib/functions");
const {
  cmd,
  commands
} = require("../lib/command");
function formatUploadDate(_0x4b4f4b) {
  const _0x34f2dd = new Date(_0x4b4f4b);
  return _0x34f2dd.getFullYear() + '-' + (_0x34f2dd.getMonth() + 0x1) + '-' + _0x34f2dd.getDate();
}
async function youtube720(_0xafd56c) {
  try {
    const _0x25ee6d = await puppeteer.launch();
    const _0x4b4aa5 = await _0x25ee6d.newPage();
    await _0x4b4aa5.goto("https://en.y2mate.is/");
    await _0x4b4aa5.waitForSelector("#txtUrl");
    await _0x4b4aa5.type("#txtUrl", _0xafd56c);
    await _0x4b4aa5.click("#btnSubmit");
    await _0x4b4aa5.waitForSelector("#tabVideo .tableVideo");
    await _0x4b4aa5.click("#tabVideo tr:nth-child(2) td .btn");
    await _0x4b4aa5.waitForSelector("#tabVideo tr:nth-child(2) td .btn a");
    const _0x115e3f = await _0x4b4aa5.$eval("#tabVideo tr:nth-child(2) td .btn a", _0x2e9a11 => _0x2e9a11.href);
    await _0x25ee6d.close();
    return _0x115e3f;
  } catch (_0x577be4) {
    console.error("Error occurred:", _0x577be4);
    return null;
  }
}
function _0x46de(_0x26fe77, _0x4cee2e) {
  const _0x499521 = _0x2551();
  _0x46de = function (_0x6587f, _0xdb2624) {
    _0x6587f = _0x6587f - 0x1e9;
    let _0x19f56e = _0x499521[_0x6587f];
    if (_0x46de.ExBHUB === undefined) {
      var _0x19c925 = function (_0x4cd51e) {
        let _0x5d9f82 = '';
        let _0x1eaa5c = '';
        let _0x1dd6eb = 0x0;
        let _0x28f60d;
        let _0x2e61fa;
        for (let _0x3d8eb7 = 0x0; _0x2e61fa = _0x4cd51e.charAt(_0x3d8eb7++); ~_0x2e61fa && (_0x28f60d = _0x1dd6eb % 0x4 ? _0x28f60d * 0x40 + _0x2e61fa : _0x2e61fa, _0x1dd6eb++ % 0x4) ? _0x5d9f82 += String.fromCharCode(0xff & _0x28f60d >> (-0x2 * _0x1dd6eb & 0x6)) : 0x0) {
          _0x2e61fa = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0x2e61fa);
        }
        let _0x27865b = 0x0;
        for (let _0x2f8b55 = _0x5d9f82.length; _0x27865b < _0x2f8b55; _0x27865b++) {
          _0x1eaa5c += '%' + ('00' + _0x5d9f82.charCodeAt(_0x27865b).toString(0x10)).slice(-0x2);
        }
        return decodeURIComponent(_0x1eaa5c);
      };
      const _0xa70b15 = function (_0x553cdd, _0x2a4d9b) {
        let _0x3e40c4 = [];
        let _0x3c7b14 = 0x0;
        let _0x26b0c7;
        let _0x5327cc = '';
        _0x553cdd = _0x19c925(_0x553cdd);
        let _0x78d3d;
        for (_0x78d3d = 0x0; _0x78d3d < 0x100; _0x78d3d++) {
          _0x3e40c4[_0x78d3d] = _0x78d3d;
        }
        for (_0x78d3d = 0x0; _0x78d3d < 0x100; _0x78d3d++) {
          _0x3c7b14 = (_0x3c7b14 + _0x3e40c4[_0x78d3d] + _0x2a4d9b.charCodeAt(_0x78d3d % _0x2a4d9b.length)) % 0x100;
          _0x26b0c7 = _0x3e40c4[_0x78d3d];
          _0x3e40c4[_0x78d3d] = _0x3e40c4[_0x3c7b14];
          _0x3e40c4[_0x3c7b14] = _0x26b0c7;
        }
        _0x78d3d = 0x0;
        _0x3c7b14 = 0x0;
        for (let _0x31579b = 0x0; _0x31579b < _0x553cdd.length; _0x31579b++) {
          _0x78d3d = (_0x78d3d + 0x1) % 0x100;
          _0x3c7b14 = (_0x3c7b14 + _0x3e40c4[_0x78d3d]) % 0x100;
          _0x26b0c7 = _0x3e40c4[_0x78d3d];
          _0x3e40c4[_0x78d3d] = _0x3e40c4[_0x3c7b14];
          _0x3e40c4[_0x3c7b14] = _0x26b0c7;
          _0x5327cc += String.fromCharCode(_0x553cdd.charCodeAt(_0x31579b) ^ _0x3e40c4[(_0x3e40c4[_0x78d3d] + _0x3e40c4[_0x3c7b14]) % 0x100]);
        }
        return _0x5327cc;
      };
      _0x46de.gFqoll = _0xa70b15;
      _0x26fe77 = arguments;
      _0x46de.ExBHUB = true;
    }
    const _0x37b46e = _0x499521[0x0];
    const _0x23ebf8 = _0x6587f + _0x37b46e;
    const _0x23771f = _0x26fe77[_0x23ebf8];
    if (!_0x23771f) {
      if (_0x46de.Jsepsq === undefined) {
        _0x46de.Jsepsq = true;
      }
      _0x19f56e = _0x46de.gFqoll(_0x19f56e, _0xdb2624);
      _0x26fe77[_0x23ebf8] = _0x19f56e;
    } else {
      _0x19f56e = _0x23771f;
    }
    return _0x19f56e;
  };
  return _0x46de(_0x26fe77, _0x4cee2e);
}
var descv = '';
if (config.LANG === "URDU") {
  descv = "Iss command say ap youtube say videos download ker sakty hain.";
} else {
  descv = "Download videos from Youtube.";
}
var descs = '';
if (config.LANG === 'URDU') {
  descs = "Iss command say ap youtube say songs download ker sakty hain.";
} else {
  descs = "Download songs from Youtube.";
}
var descyt = '';
if (config.LANG === "URDU") {
  descyt = "Iss command say ap youtube say videos aur songs download ker sakty hain..";
} else {
  descyt = "Download videos and songs from Youtube.";
}
var descsh = '';
if (config.LANG === "URDU") {
  descsh = "Iss command say ap youtube pe search aur details ley sakty hain";
} else {
  descsh = "Search and get details from youtube.";
}
var N_FOUND = '';
if (config.LANG === "URDU") {
  N_FOUND = "*Mujhe kuch nahi mila, dosri quailty select ker ke dhekein :(*";
} else {
  N_FOUND = "*I couldn't find anything :(*";
}
var urlneed = '';
if (config.LANG === 'URDU') {
  urlneed = "*Please YouTube URL dyein*";
} else {
  urlneed = "*Please give me youtube url..*";
}
var urlneed1 = '';
if (config.LANG === "URDU") {
  urlneed1 = "Iss command say ap Soundcloud say songs download ker sakty hain.";
} else {
  urlneed1 = "It downloads songs from soundcloud.";
}
var imgmsg = '';
if (config.LANG === "URDU") {
  imgmsg = "```Kuch likhein please!```";
} else {
  imgmsg = "```Please write a few words!```";
}
var sizetoo = '';
function _0x3c3971(_0x5870dc, _0x541a85, _0x3b71df, _0x231785, _0x2ab567) {
  return _0x46de(_0x3b71df - 0x127, _0x231785);
}
if (config.LANG === 'URDU') {
  sizetoo = "_File ka size boht ziyada hai.._ Ya phir jis platform pe main chal raha hun \n usski bandwidth boht kamm hai, iss liye file upload nahi ho saki..*";
} else {
  sizetoo = "_This file size is too big_\n​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ *The bandwidth of the platform where this bot is hosted is not enough to upload this file!*";
}
var sizetoo = '';
function _0x3c3971(_0x59844c, _0x23687e, _0x327fa7, _0x4e0831, _0x15517c) {
  return _0x46de(_0x327fa7 - 0x127, _0x4e0831);
}
function _0x2551() {
  const _0x2a47c4 = ["W4C3W4ddMCoN", 'xtG3WQZcQa', 'WPX6nH7cLq', 'WRFdSmkPnCkP', "WPdcOCoPfmk7", "W53dHmkEmxi", "tmk4WQvgzW", "WPGHiIe", 'oCopr8oUDG', "p8ojwq", "tgFdJSkx", "W5VdM8kci3a", "WRmNefm", "WOxcIg/cU8o4", 'W5DRoeldLW', "WOddICkJgCkO", 'WQVdHSkvdCkH', "pCogdokCJmk2", "cCo9dq", "WRNcJmo2WRS", "whVdRCkTiW", "w1VcG3xcRW", "WQ5+WRC", "DmohBa", "W4OrW6nzW5C", "WPpdRSkiW5GM", "WRmWWPq", "mvvIc8o2", "gqNdRvpdKa", "W4utW7BdQq", "sSo1W6dcU8kK", "tCkib8kmjG", "W6xcHmoNW6ZdGa", "W5b3m1pdNq", "WOidWQ4QWQG", "WRFcJSoLW6ZdGq", "W5BdQ8kqn3u", "WRpdVvhcLSoz", "xmkPWQ9a", '4lEz4lAu4lwba8kt', "WQDbpbdcSa", "oCoGkKhdOG", 'jdeOW6re', 'pL0rWReM', "WQiTWO89WOe", "gLqhWR8", "W5pcQCoBqCoQ", "AgbGoGC", 'oSoAqCoZFq', "EmomgCoAW7O", "dwddNSkvfq", "dHdcPmoYWPi", "WRJcGCkFWPyd", "WQWuWP4NWPK", "WQ3cGCkkWRGy", "t0/dVmkIW4tcMSkyW7rsAMxcLSki", "WOWhWPiCWQS", 'WQ7cLmkPzcq', 'WPZINAZdPmodkW', "W5FcQGNdG8km", "W5ldPSoRW743", 'W51+DYBdNa', "WROtWQTdW6y", "W6ZdGCo/mbK", "wmkBWQnwzW", "h8oxxmo9Aq", "WPZcMCoQW4JdJG", "ymo5leHg", "fSozsSoEEmklD0zPcc42", "W7tcPGVdKmku", "W5tdGNJcICoZ", '4Oc94Okz4OcI4OcD4Ogh', "sgjjcbG", "kmoFW4m+WQe", 'WQfroCkIoq', "4OcI4Ogm4OcK4OoI4OgX", "WOdcUSoUdSkD", "WPtcSmoEW4ddLa", "j0SZWRGV", "EwHLkY8", "WQZcKSoIW7/dTq", "W5VcO8o3va", "WQJcJSo8W7i", "b8oIo2ldNa", 'jmkSBvPh', "wmoZj3fH", "y8oPiL9x", "WP3cOmo1dmox", 'WP3dH07cSSo4', '4lsH4lsU4lsA4lsIWPq', "W4LWdhW0", 'AmkfhSofW6a', 'vmkPWQ9DiG', "eSouW73cQSkM", 'xSkCamkb', 'WOnIhKFdRq', "4lws4lEk4lsQg+c0GG", "W4GcWQpdRSou", "W5vefMddSq", "e39Gi8oY", "dmo/bNpdSq", "dmkgWPG", 'WOxcP8kXW6yR', "mmoIlu7dKG", "vrivW7pcLq", "WOZdKw/cMmkP", "omoFW5C+", 'W6ygz8k1AG', 'EmkGn8kSdG', "W5pcKdu", "vmo3txO", "wCkPWOLDBW", "W43dRCkrW4WM", "W7egFSk8Dq", 'W4vTmLpdUq', "xwFdHmkFcW", "otS8l0K", 'W5BcLYRdGa', "v8kgbSkDna", 'WRGhjMNcKq', "A8ohBCoB", "wGWkW5xcQa", "4Ooc4Ocq4Ooq4OcN4Ocf", "avaB", "W44SgwG9", '4PYfWR0RW53cQW', "W4O9yCk7AG", "WQZcJCkqWPWe", "WRRcV8khW6mw", "sdOuWONcSa", "WO7cGSkhWRip", "za9FW6eK", "tb0j", "WQ08a1/cGG", 'jCoCtmozW6m', "ASonxmoJFq", "WO/dQSkHjmkp", 'W4bLbx7dRq', "lUc3IEc2Roc3RKK", "kL4iWQuO", "kdWWW7Lf", "WRaNfutcIG", "W6CmAmkXBq", "W5CXW4ldLSo0", 'n1S5WRmS', "hmozu8kyna", 'W7lcGSoYW6ddHG', 'W5tGTB/GTzFGT43dMG', "oaKVW7Lf", 'WOHWW5OrWP8', "dCkIWQm", 'WPRdJxxcPSof', "h8kDWPGsxq", "W47dVaVcImkQ", 'W6tcHmoOW6VdUq', "xmkUWOjesq", "i302WQeW", 'WOuqWQaxWRu', "WRxcUCo+nSkT", "esy/W4b5", "z2DVmXW", "xgJcOhpcNG", "W7BcRs/dQ8kC", "W5LGW5GlW68", "W4/cKs0", "WR8TgW", 'WQOsWQPnW4O', "W6FcLmo1W6C", "jCkPW7VdV1C", "uSo+DMm+", "fCkCnCkftG", "W4JdQSkn", "WQ10WRvytW", 'hZlcMSomCmoOW6jqmSoJW7O', "tmkCWOfcAW", "W47dVCkpW5Go", "4OkG4Ogu4OgH4Occ4Ogr", "D8kgbSkDna", "W5dcVa0", "W6hcOb/dJSku", "W6NcJcRdGSk5", "W43dJCkqmhq", 'W7JdKSkLe2y', "8lAWN++5LG", 'FNRcJLpcUq', "BZeYWR/cPa", "W694zt/dGW", 'WRPNWQCxEG', "WPRcR8oUda", "WQ3cNCkOyq0", "W6ONlMic", "WQu7W6a4", "W4qcW7RdSSoF", "gNu9WPOd", "cCk+WRKawa", "oc0UW7fw", "W4xdRrBdRmkj", "ivvQc8o3", "WPpcI8klWOec", "WOmpeM/cSG", "cHhcHmo9WP8", "cCkvWOadvG", "tGafW5/cRW", "WQ3dHSkDfq", '4lwz4lsC4ls24lAQW5O', "WOJcJCk/WOqI", "WOldJwi", "W4SKWPHpW6O", 'smoJax3dLq', "Bmohyq", 'ymkvWPW3WQ4', "iKL/dmoC", 'cL4iWQuO', 'lCksnCoEwW', "W6hcQdldQmkX", "oI/dN1K", 'WOrDWPWDzG', "W5hdKmkPW64H", "df1uWPZcQG", "W7G7h0CT", "pdm4", "W4S/cLK2", "W7bPn3xdUG", 'W4exW7RdQCou', "aSoju8ofsG", "4Ok24Okt4OoQ4Ok34Ogi", "hCoYbgddQG", "otJdMf3cKq", "zq8IW4tcSW", "dLeu", "qgeaWOFcHW", "vCoZxxmR", 'W5NdVCksW58', "gmkAWOaOrG", "WQ8SWPS/WPG", "W7RdH8kglhS", 'Fwb2oG', 'WQJcHCkYyGW', "8yQsTE+5Rq", "WQa6wetcKG", 'pSkSW6ddV1C', 'wCkfc8kAfa', "WP/cQ8kwqIu", "W5tGTBpGTlhGTQ/dMG", "WPa0AHtcJCkMe8oEcmkvnuldJG", 'y33cNW', "8lEbOo+5Oa", "bvqg", 'W40zW59yW4S', "W4yEW6VdR8ou", "WOiTWO89WOe", "ogRcGr/cKq", "W5pdMmof", "W5icW6/dGSoe", "uCoofw9Q", "W6maBCk3DG", 'W5Wld14J', "W4hcGd3dLSkr", "y2HIoYu", 'WQZcKSo7W7BdOW', "WPv3svhdRG", 'WRyrdu/cOq', "WP9MfapcKW", "nSkgWP4nsG", "tretWP/cOa", "WR3dOwVcP8oP", "WPlcP8oRbCku", "W5BcOthdMSkv", 'xCkXW7NdVW', "W4aGASkcCW", 'W5WAiga0', "hf59kZ8", "WQD6WQfvEq", "r8ovlNTy", 'dmkwWPfysG', "WRvd8j2fOo+4LG", "rCoqyhWU", 'WRdcNmkVW7GP', "WPBdUvJdKmoy", "wMFdMCkp", "W7BdLCkGW6NdOW", "dmk4WOWXAW", "z8kaoSoLW4e", "gsFcSmoTWQO", 'lfL/', "xSoDa2W", 'WQ4bWPKMWO8', "uf4lWOlcHq", "W6eaFCk+Fa", "o8kTW64", 'ASoqEq', "C33cIulcRq", "4OgJ4OkB4OgJ4Ocm4Ok7", 'WQPGWQeuEa', 'W7NdGmkefCkL', "W6KVWOHN", 'WP3dJwpcTG', "W7q8cKpcLq", "8ycqTE+7IW", "WQ8MWQPiW6C", "WRe7qLZcJW", '4OgY4Oo/4Oo/4Og8eW', "W6z8uNRdHG", "ta0oWORcHG", "wJnDWOau", "WOxcG8kcsqS", "W4ZdT8kTW5OG", "fefG", 'd1nuW4W', 'kI/dMLBdHq', 'WOLXoqBcRq', "zSo5nv8", "p8ozW4DYWQe", "WRpcKmkFWOat", "ySo9ov9x", "pJxcJmo1WOO", "WQJcGCkAWPK", "FNX/nW", "dSkofSkDyq", "B3RcIuBcQW", "yMVcGLC", "WP9/WRCuBa", "cr/cVmoYWPm", "mbNcKSoOWPi", "bSkbW5pdK2W", 'WPNcNSkKDqq', 'WRy3WOS7', "W5FdM8kf", "DrfeW5JcTa", "WO/cSSkmEda", "is3cO8omWPm", "WR1cWPLTrG", "W5xcUoc1Soc0PMm", "gSoIW73cQ8kK", "WPNcQSkoW548", 'W7lcVCoMW7BdOW', "W50FW5rjW4e", "oCoEw8oJvq", "WP3dHxFcTSoq", "W4xdGCkNWQ7cNG", "y2HIoW", "r8knfSkgyq", "wSkOWR5/Bq", "WQldHeRcRSoF", "iK91d8o+", 'WPhGTRBGTzFGTkZcKq', 'FSkcymoDqG', "wgVdJSkEkq", "qSo3uwi", "dSoNW4RcSmkS", "jKHVaCo3", "WPzOacpcSq", 'jmoEqSoxEq', 'W6tdT8kuW4G2', 'bdyqWRldIq', 'WO5+WOGLDG', "zwX1", "W5/dVCob4lw84lAA", "W6pcGmoRW7/dHW", "W4/dJIpdVmkW", "WPLVhGNdUq", "cmkbWPSdvG", "ymkJWQNdV8oH", "W4ZcQW3dJ8oy", "W6yfCCkqqq", "WO4Dkh7cTW", "W4hcQYVdJ8kv", "W5mtWQ7GTz3GTAG", "WPafWRrnW5C", "WPJcRCkRW6e", "W4a6eW", "qhJdJCk6ma", "4OcD4Ocf4OoX4OcO4Oob", 'ew5UcCo6', "hmkhWOCwva", "W7aXBSkgCa", "W5qyW7RcVCof", "oCk7W6m", "hfqpWQCL", "WQ3dKSkKnCkg", 'nx4RW7Lv', 'gZzCWRldIq', "WQe6dG", "W5H2mvFcJa", 'WQ7cL8oFWPux', "DmkrbSkyka", "v8oJBvaU", 'kSkxiCkFfKtcJdNcHCoBWOFdQq', "4lsm4lwp4lEE4lwIW7K", 'WPefW6FdP8ou', "WO3cVCkRW6y7", "wHStWO/cRa", "WQu9dv7cGW", "WQ1Plb/cMW", "mmo8W6yaWO0", '4OoN4Oci4OgX4OgS4Oov', 'w+c3Poc0MUc0Ooc0RW', 'DmkdaG', 'mI3dMNldIq', 'o8okW5yG', "mCkmo8kf", "D8oNFuaV", 'W7FcUmoNyWy', "W4XQcuFcQG", "oSkoW4ldHg4", "E8oVoq", "WOasWRjnW5q", "w8kMwhC", 'wMFdKSkp', "F8o9i09+", 'W4ZdJCkqjLe', "WRtcLmoO", 'W4VcGZFdJmkv', 'WR10WRv+qG', 'W5tGTi3GTynaWOK', "AsvaWOOs", 'y19ikt4', "WQ1/WPHdyW", "WOncW74", "W5/cLM7cMSoP", "cSkrWPOtFG", "WQjBEq", 'BmonE8oi', 'W5ddVCoF', 'DaO2pSk5', "WR7cGCkgWOe", 'W6NdGmoZovevFbDxarjiW4W', "W5CFW6ldUmoF", "W6Xpbv/dGG", "yCo/Bx4H", 'W4hINlLpW6ZcRa', 'W6NdUIxdHmkG', "EGGTWQpcSq", "lhm1WR0X", "W4LYDJ0", "W6qCzSkMFa", "zgVcM0dcVG", "W5qfW73dVmow", 'w8kog8ojnq', "W5ldUahdJmku", "W5m0igic", "WQNdJ8keeSkL", "4Oon4Ogj4OoZ4Ogy4OoM", "rmo3shu4", 'WOeNWPf0W7e', "W77cGq/dQ8ko", "WOZcSJxdJCk4", "WQ3cHmk0Aa", "lZS8W7nf", "fmkvWPOtFW", "W7JdTYNdKmkX", "dLD6oWS", "xmkmeSkknq", 'WQWYlLlcLq', '4OkQ4Ocj4Ogx4OcS4OkZ', "tHCbW5JdOq", "W4PNjq", "fZJdKu/dIa", "wryxW53cVa", "A8oSkaTe", "WOqYgMW9", "WONcGCk/WPC1", "W6PVWRPowa", "CWOxWQ3cLa", 'WPiMigFdI8opWRTlW6Gu', "jComw8oRDW", "W6H7WRTm", "dSoIb2RcKa", "AmkcamobW7G", 'W5qeW7ZdSSod', 'WPzlWQurrW', "W7ldQCk/bq", "WOBXH6++", 'sSoRW6BcRmk1', '4Oka4OgD4OkB4Och4Okf', "WQVcNSoHW77dIW", "W4hcUHRdGCkm", "WPVcR8oJ", "sCkKWR5EzW", "CmoDzKij", "cbC+W4bB", "vZ9zWRNdJa", 'WOhcQSkWWP0o', "zmkBWOjwra", "ymo1umoIFa", 'uCocu2ep', "l8ouW587WQ4", "WRPVWQLfya", "rCoMw38I", "ACoWF8o7xq", "Fx1TkZO", "WQuAWPeuWQK", "t8kzWO5Cvq", "WOxdQmkRW6b+", 'WPxcVmkWtaW', 'W60/W7XPW6a', "WQJcN8kJyWu", "W7mPpNeW", "WO3dQSkhnCkJ", "p8k6W4tdS08", 'WQiHbK/cIq', 'lCopW6hcHSkW', "WOLWcqBcUq", 'ACkjfmoC', "aCoMW7a", "dSkWhmkCnq", "WQddK8k2W78", "8kMXH++6Va", 'n0TGfdu', 'W4NcGXRdR8k8', 'W69EDchdMG', "4lA04lEyWORcMsC", "kKW1", "cCo9dsFcKq", "pGNcM8oiWRC", "W4bUnvpdGq", "lJSZW7r8", "yCoMrwe5", "zxPFmau", "W47dRZZdJCk1", "W4XJmKpdTa", "W7vlpNpdMW", "pmkAW4C6WQu", "4Ogw4Ogv4Ogw4OkB4Oc6", 'W6/cIGldR8k+', "WQ8MWP08WP4", 'hdzj', "W5ixW7RdUmow", "ceb4", "wCkigSkDbW", "EConESoBsW", "g3z3WQqsWOlcLSkd", "WP1ZWR4mBa", "drFcRmo+WPm", "W7SLeH4", 'WP3cOSolWPW', "W5ZdQmkiWPeN", "zwVcLeFcHW", "W6q4W7D/WQ4", 'dmkwWPfz', "WQ5+WQ9QEW", "WRdcNSoUW77dOW", "WPpcQCkGWRjP", "WP9NwLL6", "W4DMnNpdKq", 'yCo4WQ/cPLm', "xvrMmcS", "WQ4FWQ9VW7O", "mIWK", "4Oc34OgU4OgV4Ok34Ooq", 'pdrHWPVdVq', "fsW7W5jJ", "W4RcRGW", "W7pcRSotW7NdNq", "px5NWROr", 'bxmrW7BcJq', 'ASocwSoYBa', "W47dUSkJW6Og", "h0qqWR8H", 'W78Ej3ec', "wrCwW5pcQq", "W7jhpKJdJa", "xGOaW4u", "W5ldHmkOj3y", "WPalWRWwWQi", "mSomW5NcSCkL", "hXhcV8o1WPa", "wmkaf8kmlG", 'WOZdM2JcO8oV', "W5tdSmkTW74j", "EaaqW53cSG", "WPGLWPnt", 'WPpcP8oHgq', "WQ/cL8knWPqq", 'kXNcUmoHWQK', 'WOmBWRmMWO8', "eZXEWQpdPG", 'WPZdMNC', 'zbSoWPJcGa', 'v3VcNKRcPq', "W6BdLWNdRCk9", "yxT1", "4OoF4Ogd4OgP4OcH4OoT", "D2lcK1FcSW", "gsDy", "WR8Sw8kavG", 'W4ZcImoqyZ0', "WR7dJmkrdG", "WP41W4bwW5O", "WR0Sb0xcLq", "W5FdJ8kzW6uL", "DSkGlCofW7S", "WRaRWPW2WOi", 'WOTMdG', "dH/cPmoYWOG", "iJBcIGm", "WP7dNSkyjNi", 'WOmdWPLvW5W', 'cbVcPSo/WRe', "tsnSWOyx", "W7BcJmoJ", 'wGWiW5NcTq', "W74mCa", '4OkG4OcC4Ocz4OgA4OkK', "WRuUWOixWPu", "W6W4tCkRqW", "8locI++6Gq", "nstcPSolWRO", "xmoSuCoEFa", "W6WDlLar", "W6RcOXFdRW", "av8yWRHK", "WOBdMhhcGG", "WOSSa3m/", "oIqRW4jq", 'C8oUlKm', "W4tcOG0", "W6lcVtNdQCkD", "4Og24Oc54OcF4Ogu4Ogn", "W6VcL8oveCoG", "WQPIWOWQWP0", "WPFdNCkZW64m", 'WR07qKtcIq', "W51+DJtdGa", "WOqqkxRcVG", "WRe6WQzdW5C", "WOVcNSoUW6JdPq", "WPnRuJbRdmoKfe/cHhVdOa", "aZGuWOFcHa", "4lEJ4lsM4lsW4lAL4lAh", "W4qeW6i", "W6RcLCklWPaf", "FwXIoYq", 'mSkbhmkC', "jCkQW7lcTLy", "W78KWQPIW7O", 'j31xmGC', "FCkmdoc0SUc0Rq", "lCk9WOqsuG", "W63dKSk0W58o", "W47dVaS", 't3VdTCkpiW', "c8krWPuurW", 'wCoMcxaJ', "WQH2WR4", "rXKoW4VcHW", "ASoDxmoRFq", "WPajnfpcOW", "W6jbp3FdOG", "8y+0SpgcTklWOkAk8ls0JCkc", "W7GZW75OW4m", 'Dmk9c8kRkq', 'W4iShG', 'tdrCWOGD', "W5tdRWm", "WQr6WRviqG", "rJvk", "W4NdM8kryI0", "i8kSDvSs", "WPhcVCo0aCkD", "W48wlL0E", 'wIjB', "wK/cTgq", "WRX2WRWruG", "W5/dUSkfjhm", "mCoFW4O", 'W4ddLr7dPSku', 'vSkUkSoFW7G', "WP/cQ8o+", "4lwNW4tGTAtGTy7GT40", "W7JdKmooWOu", "a1arWQ8i", 'crVcQCo4WOG', "4Ocf4Occ4Och4Ogu4OgI", 'cbldSgxdQq', "W5BdPtNdSSkk", "rIzl", "lKro", "qmo7txmJ", 'WRNcLSoQ', "WOBdMNBdOUc0Mq", "W7dcGSo1W6hdNW", "lHlcOCoHWO0", 'WPGJhWNcSq', "W7pcJSoOW7VdTq", "WPtdUmkDj3y", 'osBdKLtdGG', "W7ZcMsddHmk+", "BWHGWR0/", "cvqlWO8L", "W5tcUGNdJmkr", 'zeHNdmop', "pSoEr8kNEq", "W6RcG8kxWOms", "tbaxW5q", "wCoTwSo7AW", 't8kefG', "WRxcPmorgmk/", "DgXSF1m", "zmkydq", "WR99WQuWzG", "mmoqW6lcImkU", "BCkMWQnAAa", "jSocW4FcMa", "tSkOWQrwtW", 'wtePW77cSq', "WQq9eui", "Cmo0ALKP", "W6BdRsNdGmk/", "WQHSgrlcSW", "W43dSHRdJmo3", "nrhcUSo2WP0", "WOVcOHJcLa", "ASosrSkNBa", "eLnWF3C", 'sSkJWOpdLCo/', 'cfGtWR8H', "W77cISobW7xdUa", "WPtdQSkHnmkc", "W75WovFdLa", "dLD1lsu", 'wtjCWOe', '4OcL4Ocj4OkH4OoW4Ogn', "4OgY4Oo/4Oo/4Og84Oc4", "hCk8WR9tBG", "k8oxxmoZyq", "E8ogvSoaqW", 'sZjBWP0v', "WR7dISkdga", "z8oqnw1Q", "evHEoY8", "wXZcP8oVW5W", "W4ddHmoEW5vx", "iSoCz8o1EW", "WO97kftcMa", "wHuoWPZcRW", "WQBcI8kz", "W45JoaFcJa", "hLalWR8H", "pcxdLuhdSa", "4lEl4lsX4lAF4lAA4lE4", "acfzWQpdGG", "WOf2WRaSWQ4", 'CwVcJMRcPa', "W5RdJmkYlxO", 'W4f7zJRdNG', "cCo9W6PdDW", "WQpcKSkMWPSt", "z8ozx1mR", "ptNdIftdLG", "sGWaW5NcTa", "WQHmW5JIGB7IGjq", "WR3dJmksd8kS", "w8oZr3ia", "ymkX8jkgKdG", "W5KeW6VdUW", "WQNcJCkAWPqy", 'ECo5na', "W6tcHmkMW6JdNq", "WO10WQXcyG", 'W4/dKmkxl0m', 'xcvkW4NGTR4', "e8k+WQufwa", "wCkKWRLcBG", "W6JcK8oDeCoG", "sezdcYW", "WQhcJ8oRW7xdPq", "8yUuRpc+PylWVlwzhVcZP6S", "8jA0G/cHPiJWRywK8joxSVcvLQq", "WOPQfGlcSa", "WR7cJCkkWPKs", "aZziWQm", "W4FdTapdJCk3", "przAWPJdOq", "E15CW4RdIW", "krOFW4f2", 'W70/W7rPW6e', "W4/cUmoaWP1P", "WQKJWPW", "W41OfKpdKq", "BCkngmoCW7m", 'hCkrW6hdMMW', "8jc1S/cxH4XS8j6vRVggLPm", 'FSolzSoJyW', "WPNcHSk5WR4t", 'W5G6bg0x', "dmo7W7KBWPi", "W5mmW5tdQCoh", "qeiqWQuJ", 'BmohE8olyW', "4OgB4Ood4OkC4OkD4OcO", "WO7cRCkLW7eQ", 'zX5SWPS4', 'xsjxWP0', 'W79/xWpdMG', "nc0P", 'W5ZcRSk2W70Z', "c1TWoIK", 'fSkvWPbxaq', "v3m6W6NcHW", "W605W6jHWQ4", "kCoFW502WO0", "Ew/cNG", "WP3dTCkeWPWT", 'W5tdQ8kv', "d3KoWOuj", "WRJcJ8ojjW", "wCkIWR0ZDG", "W43dUCkvW4GM", "WRXQeWhcTW", "v3NWK5wL77QO", 'WPxcO8oI', "W4JcSrxdVmkW", "W7pcTSoHW77dLW", 'W7dcSdhdJ8k6', "wmk+WRLtzq", "W57dTmkiW58O", 'mwuxWQi3', "WOrSWPb9va", "W6GEW752W50", 'tCk4WRLA', "rMmiWQC", "xSkPhSo9W6m", 'W74lleGP', 'W7HLFZVdNG', "v23dN8kpmW", "WOdcQ8o/fa", "W5tcQmoUdmkF", "WRRcLCkjBYS", "WRNcV8oMW7JdLW", 'WQS3WRb1W6e', 't8kHaSkNda', "WQ8SWP0H", 'bN5rj8oa', "vmoormodEq", "ka7cU8ooWPm", "faVdTxi", "hfqEWQGW", "eqjfWRtdPG", "4Ogm4Oc34Ocn4OgL4Oks", "WPVdHdxdRmkI", "WPpdR2ZcH8oy", "hCkBWOmzxW", "WP3cQSoId8kj", "W4vJEG", "sSkgbmkhlq", "hSo5dgldNW", "sMX4pGa", 'WPNcNSkWBGu', "vreiW5NcUW", "WQZcHmkODaW", 'hSkrWOa', "WPSZW7ZdR8oE", "WPxcPr/cIa", "WRL6WRyqCa", 'eSkCW5NdG3e', "W4X2caVdVW", "W7mUrCkzxa", 'WRuNWPy3WQa', 'd8oOW78YW6a', 'FSkzWO1+tG', "nJRdN2xdQa", "WQT8WQuBCW", "WRz8WQCbAG", "WRG7WQTvW7O", 'W5RdH8kFnLy', 'WRxcNCogW5BdRa', "jWVcO8oYzG", 'oZCXW7vF', "WP7dRvhcQ8oM", 'xEc2O+c2JUc3HEc2Ja', 'emkhWOa', "h8oHW43cUCky", "xSkSWR5xzq", 'FgpcTuJcKW', 'W5tcHZJdI8kT', 'sSoLW7VcSmkS', "cvGzWRi", 'C8kNWPPGAq', "W6dcQSkBWPat", 'W4ZdJCkqiwm', "WR/cH8kjW58F", "tW4xW4VcLq", "tI4hWPZcOG", "pCkBWOmzxW", "vmoJFxCQ", 'W6hcLZRdT8kb', "WRFcKmoZW6RdHG", "WRldQCkobCkQ", "hGZdQCkX", "CgFcLKBcPa", 'lSkBvmoPyq', "ltJdLW", 'W5ZdTmkiW4G6', "gfGBWQ4R", "WOBdHZVcOmoH", "AMWTWRa", "i1qmWRGL", "W5fRlei", "WOhcVmoR", "W7VdLmogW4uN", "aWjDWPSv", "gSkPW7tdVNq", 'pWtcH8o3WO0', "WQ/dISkbbmkV", 'DSoZi19Z', "WOlcP8oJbCkv", 'k8opW5OXWQS', "WOz0pY7cJG", "WRmHbfm", 'WQmXWOSYWOO', 'xXCzWO7cJG', 'iwRdJ1RcKq', 'WRPHWR4', "E8kcWOvMrW", "WOFcQ8oPbmk3", "WQVcNSoHW77dHa", "xaWr", "W5jNmKpdTq", "WOm1WPK", "WQSVW795W7O", 'wqyqW5pcQq', "W4tdRHZdICk+", "WPFcHmkfW78Z", "W5hdH8orih4", "d8oOBmoJqq", "nsZdSNNdMW", "hmo6eKtdTW", "gNeFWPLA", 'gtmqW63cJq', "c8krWPutDq", "t8kfgSkDoa", "emkqWPeyqa", "W6K5W7r1", "W4jJFJtdJW", "WQT2WQew", "fISbW5NcVW", 'W6CYWRG+WQC', "dGRcVmo0WPi", "W4NdRXZdMCki", "W5FcLZBdNmk8", "WRlcJmoaoSku", "jSktj8kzsG/cUbxcP8on", "4Ogm4Oc34OcntSkZ", "F33cJG", 'WQCfWPa4WOa', "pCoEW709WOi", "W55oqtFdNW", 'W45Wjq', "WOakWPi2WQi", "WQXOWQHnAq", "4Oot4OoW4Oke4Okr4Okn", "WPLIfG7cQG", "g8kW4lEE4lEi4lsS", "4Ocu4OkP4OcE4OkK4OcL", "pCo5bgNdKG", 'imoQW7abWO0', "isxdJKhdHa", "WQjYWQi", 'FIpcMuVcOW', "WQNcLCkRlqO", 'EaOtW5lcTW', "B8odyCoBsW", "W6Dne3pdVq", 'pSooW5TYWQ8', 'v8oAW5SBwG', "W5/cMdVcS8o9", "jcO5W79s", "l8oirSoMFW", 'W6aZW6K', 'EwhdMKhcOW', "WPBcR1/dMmo5", "WO7cNSoem8k3", "WRxcKmk0", "tCklnmo9W4C", "gc7dKKBdHq", "W4BdUSk3ea", "W5tcOCoKa8kp", "4lA74lEC4lwl4lEPW6O", "W5rWma", "W4m7W7SmlG", "ASopuCkNnG", "W7FIN4FcPVc+PzlWP4Az", "WRdcQSkOWPG9", '4Oo/4Oof4Okm4OgR4OoX', "pSovW4q8WQW", "4OcI4Og14Og24OoG4OoQ", "CMhcJu3cPG", "WRe6eexcLa", 'Cmk7W77dRey', 'k8kAjCo/dG', "m1nthSoP", "WRPXWRDB", "WRBcJCkUW50y", 'cCoZW6RcKSki', "BMGT", "dCo/gYFdLG", "4OcL4OoI4Og44OoI4Ogk", "W6nwWQ/cVmkB", "W6C6W4LPW68", 'WOO1WOrx', "oCkjgSojW7O", 'hKqmWQm', "pc7dUfRdNa", "oCoHW6hcHCkK", "4OgW4Og14Ood4Okq4Oo3", "mK5Q", "nfb8kSoH", 'wCo/cw8J', "4lsl4lwx4lw94lsryW", "W5NdVCkvW50Q", "WP3dH3xcKmoe", "WP3dJwJcTG", "W7FGTAVGTBZGT5tGT4i", "rmkIWR9gDW", 'W4zgkdxcKq', 'nvLNdCoT', "ggfGlsm", "zNVcIuS", "AComcSobW7G", "aw/dMSop", 'veufW5lcVW', "WO0JWPnAW5G", "W7xcUmo+W7NdOG", "zwVdMKBcPa", '4OoI4OkJ4Ocq4Ooj4Okd', "W5lcTZ7dUSkR", "WRbVWQG", "c8oUW6W", "vZiqWQ7dIa", "mCkLW7i", "A3P/pG4", "ExVdR8k9iW", 'ySoBs0iV', "C8oPkujD", 'Ca42hG', "WRxdH8onu8oP", "W4tcLJFcImk4", "WP7dSCkEn2m", 'W6emCCkM', "axnjoSoC", 'W6lcJs7dHSk1', "g8o2W6BcQ8kK", "W5hcQHddLa", "WO85WOzc", 'W4lcJs7dHSk1', 'i8kTW7NdSM4', 'WPFcRCk9', 'dSkAgSktja', "WP12frpcUW", 'W685W6DIW6i', "WODMaW", "WPxcU8kW", "W5GZW7f+W60", 'FKFdR8kIcG', "mNb+kmob", 'W6yDBmk2oq', "W5xdJCki", "WP/dGx/cP8oN", 'pCkAbComW7m', "oCoDq8oeAq", "jSkKFvS", "s8oni3Py", "WPJdICkZgCkf", "4lsziJ5iW4W", 'W5VdSCknW5KT', "WRhcGSk/AqS", 'WQhdJ0/cLSob', 'CSknca', "W7BcJ8oUW7JdQG", "BCkHgCorW7e", "otOEW79C", 'W60hW6vVW48', "8jYZTo+4GW", "iSkTW7BdTvC", "W54TbG", "ghCAWR42WQZcJmk4na", "ageYWP4c", "wCkcWP0tvG", "4OgL4Oc64Og04Ooa4Ogp", "W5hdVbVdNmk8", 'W5lcKdG', "waK7W4NcQq", 'gdju', 'WRyTbKy', "dmo0ESotxq", "CYDVW71q", 'WRuRkLZcRq', 'rmkNkSo4W5a', 'tSomE8ozsq', "txKq", "tmkmu8kAja", 'WQNcLmoPArO', "CWq2hSk5", "A1hdS8kFhW", "WRTjWOC2Ea", "k8o2W53cICkI", "xCkXWRNcJ8oH", "WPFcMCofW4RdHW", "B8kjWPHktW", "WQVGT6dGTz/GTPdGTkm", "W5SXW4HzW58", "lHJdRwddVa", "BCohDmomwG", "WOtcR8oZfmkF", "nga1WQCC", "W59YAIu", 'nmoPW78gWQK', "C3ZcUulcUq", "W7hdJtNdVSkT", "gcWVW79d", "WRGPf0tcHq", 'kY/dLvhdVa', 'W6RdVmkrW4K2', "WRZdKmkwamkN", "W6uhW79GW40", 'uqqkW5JcLW', "WOieWPnqW5m", "W6pcHmo+W7S", "BmonE8oixq", "WOCLWOqB4lw/", "W4xdUsZdH8k0", '4P+FxSkEW7lcMq', "cCkbWOCF", "WOe9WOfCW5O", "8yQePVgmP5JWP4EazokDTq", "W780cx8t", "emoVW5/cKSkw", "W5FdHmkuyZ0", "W5ZcNSknW5yB", "W6e6W6rNW78", "WRSPbG", "vCkQWPHayq", "WQPXWPG5Fq", "W5WeW7FdU8oM", "W4CSsM8O", "4lE+4lwX4Oc44ls84lAG4lA74lsE", "CCo3ywiE", "W494FcxdRG", "dvnGkYm", "pcxdJfVdNq", "omozp1LD", 'WR7dQmkigCkv', "WO1ThHdcTW", "jCk6W7S", 'sUc0KUc0K8o/WRq', 'WPFdKMhcMmkP', "ELfigcW", "zM/cJLFcRW", "W6D2WQSy", "4lEb4lwYWRFdPuW", "wGKXWQNcKa", "kf1ItSoV", "l8ouW5DYWRa", "dGZcPa", "W7qHEmkCva", "i8opvmoG", 'pmkTWR8cuq', "ESoBWPm0WQu", "mSo4W6eKWQS", '8k2XHU+4UG', "W6aMW4RdJ8oY", "dJXfWQpdKG", 'WOtcU8o0ca', "a8o1eq", "4Ok14OkJ4Oo64Ogj4OcC", "4OkE4OgI4Occ4Ooz4Ocs", 'gebxpJu', "odaPWRbf", "nmkSW5tdUu4", "W7JcJ8oRWRRcQa", "W7WLWQjv", "4Ogr4OkX4Ok44Ogz4Ool", 'W5xcTCkcW5qQ', 'vSoiBmooFa', 'W6FcGmoYW7VdKq', "hXhcPSoVWR0", "hCkKWRKsDG", "4lAr4lEGd+c1KEc2OW", "rCo3r3io", 'eSkNWO0zua', "W58MsUc2Moc3Ga", "WO/cTCkvEcq", "d8oGW73cSmkZ", '4OoJ4OgB4OoR4OcW4Ok0', "vCoSc0nu", "W4hcQGFdKW", "W7bSmLhdNW", 'DmkbdCopW7m', 'xdvd', "W6eFW6RdRCoc", "rSoZxwiP", '4lArrEc3VUc0H+c1Oq', "W5m9bxei", "WRddH27cTSo9", 'WRlcP8k2W78/', 'wCkhh8kgia', "w8o6r8o4vW", "WRRcKCknWP0", "W5tcVSoRaCko", "lmoigmoIya", "kbXZhSo1", "FmowFmoaqa", "W6ZdH8oXm1WrDd9BhbfZW7i", "WO3cLCoGW6NdQW", "WO8pW6OB4Ok0", "p8ojW4aZWQC", "WRZcLmoHW67dHW", "zmo1ku5D", "W4OBa2Sl", 'nIf0WP3dIa', "4Oc24Oog4Oob4Oc54Ocj", "kSoBW4CMWQu", 'wvFcOhBcOG', 'F8kzWOrNua', "WPe7WR0vWOG", "W5nNputdJa", "WPVcR8oJqmol", "WRyZWQqCEW", "W4FdOaVdJ8kv", "t8kOWQTrDG", "kcBdMKhdLW", 'WRRcUSkQEdW', 'm8ojWPm6WQ8', "W7OTWQSm", "WO7cVmk7WQiA", 'W74O4P+gcSkY', "AxRcJMldVCoXC8oura", "xY5lWOWv", "WR7cKmkZzq4", 'dZWjW559', 'smkghmkDja', 'atPuWRldIa', "WOFcP8o9bq", "B8omtCkjWRW", "WOnhWRKFAa", "W50sW7T/W7S", "W4NcGZ3cImoR", 'W4dcRHVdHCoy', "W43dUGNdICkF", "W7GRW6SBomo4DXK8yCkM", "WROeECoM", "D31T", "ySkAvIFcMG", "oI/cLq", 'v2KAW7C', "gJzcWRtdJW", "Cg/cKNpcVG", "oYVdJ1ddLG", "W5fJkfpdNq", "WQ3cGCkkWRWz", '4Ogt4Ogb4OkW4Oc+4Ok6', "W58MgMW", "WOVcMCoNW4ddOW", "W7qeW7ZdSSod", "W4NdNwNcRSkP", "jCoAuq", "WPWwWQT+W7G", "EmkojSoKW7q", 'vYvzWRpdGG', "kf1I", 'WQGrWRqhWOq', "kZ7dIvZdNW", "4OkT4OoP4Ogs4OkJ4Oos", "WP7cMCo/oCkC", "WPVcR8oJqmko", "zsKJW5lcKW", "wCoZtq", "jLbVgSoG", "W5pdI8kTW6GQ", "DYNGTP3GT4xGT7m", "W4ZdRCkoW4GM", "l8oyW5y", "BmolE8oiqG", "WQD6WRja", "bmkVgSkfja", "FCo+EhOB", 'jdf3WPZdGW', 'dSkXWR4Exq', 'EmkFh8ojW7e', "W4RdRWtdHCku", "WRZdJmkw", 'W5yzW73dTmoc', "bmoqW4xcI8kO", "CCkdcW", "W5OQc2uZ", "bCoIW60", "W7lcVSoDW4JdIq", "eXVcQCo/WPK", "qHSe", 'C8kjWPvMwW', "W78wpwiJ", "w8kBhW", "W7hcImoQW6RdMG", "4lEC4lAZ4lA94lAv4lEy", "eIbdWRBdGa", "he/GT5ZGTAxGTAm", "eSo7k0ddQa", 'WPJdU17cRSoQ', "umoghgL+", 'qSkA8kwuKmkq', "W4pdQqe", "hXVcUW", 'W43dRCksW5q', "8y2WME+7Sq", "p8ooFmobrq", "yComkNHq", "hc3dUg3dOW", 'E8onySobqG', 'W5H2pq', "4lse4lEo4lAJ4lAB4lsE", 'W4pcJdG', 'WOvVhZtcPW', 'A8kfcmonW7K', 'W5/dJ8kOg0i', "WPSroh/cJG", "lSoFDSoODq", "WRXPWRC", "4lAN4lw24lwW4lEGla", 'sHetWP/cGa', "W5BdVCky", 'saCGB359gb5Fl8k6WQu', "W4BdUbS", "4Ooe4Ocy4Ooz4Og+4Ocu", "WQhcP8oRdSky", '4Oo34Ood4Oop4Okz4Ogv', "W5/dHSkEnN8", "W5ldRX/dJ8kk", 'WPRdJw8', 'WRpcQmo2W7tdPq', "nfLY", "WQbYWRzvka", '4Ogb4OkW4Oc+4Okm4Oct', "WPO/WO0BW4W", "su/cKmowWPtdVCoiW4K", 'WQiiWQzyW74', "4lsM4lAm4lsR4lEyWQ4", "WOJdJvFcO8oS", 'WOurWRjXW7y', 'WP4XfMhcLq', 'WRb3WQ5u', 'W6ddI8kVW6VdSW', 'WP/cNCo+dSkz', 'm8odW5GEWQC', "WP7dPCkZ", "dCopg2ldNa", 'W6yXWPC9WOO', "W4ddSqBdNmkG", "WQeDlhhcHq", 'W4zJ4P+Er8kk', 'dcBdMu/dPG', "eJf6WPVdHq", "WR7cKSoJW7/dQa", 'fmkNW6ddUe8', "WO0IWPjuW40", 'WPZdPv3cJSoW', '4lwVWRJGTBxGTiPJ', "W4VcQeJdJSkz", "W7pdPSkxe8kV", "cvn0a8o4", "W7Giz8k2vq", "WQFcHCkqWPe7", "iSoTW4CNWQC", "4lEp4lspnCkoba", "z8oUiq", "W43cHYa", "hmkCW7ZdVfq", "WOfIfapcKG", "W5OtW7C", "WPhdV0JdKCkn", 'dmo9W7icCG', "ASkOjCkqba", "4OkU4Ooe4OgJ4OkR4OoZ", '4Og84Ogy4Oc74OoC4OkS', "WRZcJCkAWPay", "sSknmmkgla", 'xaOiWONcHa', "g3mFWRLA", "dmoQW6xcUSkV", 'dYS0W7rc', "WQjJWOanBa", "oI/cM+c3TEc1Qa", "WORdHhlcOCoJ", "W4FcUc/dSmkG", "EmkBcCo0DW", "W4aNW4xdRCoy", "qCoaW4XoaITyw8kGWRJcLCom", 'gmoMW6JcVmk1', "W5NdT8kwW5iV", "BreEWP7cJa", "WQD8WQCuzq", "wYHcW4Kd", "WOBdIx/dOSk8", "W5PVDdZdUW", "wt5aW6m", "4lsq4lwx4lEEWOJdOW", "WQhcGCkh", "WOBcTCkhWO8f", "W4VdSCkfW5KS", "WQ5JW5i", "WRT+WRPpEG", "pGy0W5D1", "W6X4wX3dN3VcJColuCkdlgq", "yCosl09W", "u8oJw8oO", 'ebW0W4jl', 'WPJdOmkZb8kH', "4Oow4Oo64Oom4Ocl4OgI", 'W5mEsSkJuq', "pvDfkCob", 'qdrB', "u8oktKiL", "WPS1WO5FW7i", "WRLUWQHe", "W7ahFCoY8jMbJa", 'W6WDW710W5S', "k3TqgGK", "kxWTWPmc", "WQ0NWOe", "v8o+qgi1", "yLBdGCkrmq", "fvnN", "4lAq4lwL4lwDWRBGTPi", 'ytCoWOtcKa', "4Ocw4OoN4OgN4OkJ4OkD", "BrGeWQZcMq", "jgfzmY8", 'xmkGWQ8', "WPO1WOfyW4S", "WRNcGSoNCWy", "Ae3dPCkVaW", "W6RcJCknW5ud", "WPRdULpcHmol", 'W7W7W5FdPCol', "pCkBWPK", "4lAA4lwJ4lscCSkX", "W7BdU8ksW6Sa", "itRdNHxdHW", 'fSovAW', "WOCIWPK", "WOT8WQuBCW", 'WRuLbW', "CCkjdCoBW7m", 'gImd', 'W43cRXJdSSkp', "orHMWOpdLG", 'hLnZgSoS', "m8oZW78JWO4", "W4hcOb/dJSku", "WOhGTPJGT6FGTP3GTAO", "WQiMWRS8WOa", "W443yttdGW", "sWqnW4JcNq", 'W7/cRH7dHSkr', "vmouj059", "WQ12WRyz", "8jA0I/cHPipWRywA8joxJ/cvLPi", "dumAWQOW", 'buiSWQqO', '4PYphNFdI8ob', "A3OSkqa", 'WOxcUqhdHmkD', "W6JdOCk1b1G", "oCk+W4/dUeC", "xwNdMCkmca", "m1L+gG", "zSoZgfTc", "wCk0kCo/W7S", 'eSkrWO0', "W5xdTbVdHmk8", 'W6NdICo3Ca', "4OkQ4Okw4OgK4OkJ4Oos", "W4JdSmo0W6i", "W5HhzHxdJG", "4OkC4OoQ4Okn4Oke4Ok/", "WQRdHSklbCkn", "W6BcLmoPW7VdKq", "W6KWW4pdHCo3", "W7GHW6if", "rmoUW7NdQW", "W6tdOIxdPa", "WR3dJmklfCkb", "sryb", "eCo+cW", 'u8k6WPesvW', "rMmiW6FdLW", "oSoorSoV", "Cmo5kuC", "W47dNCkckG", "WRZcKSoGWRRdOG", "W4ldRKi", "D8oVpKPv", "uL9KAW", "WO3dJfJcRCoL", "WPBdHSktfSkV", "a8oVW73cUSkG", "W54xW6O", "xCo3ua", 'dSkihCknyq', 'F2BcL1hcUa', "tqiMrmo5", "W4zNkgpdMq", "WRBcLmk+", "WOv3a0FcSa", "WOJcOmkXW788", 'WOVdP8k3gCkn', "i8oO4lsH4lwz4lA/", "W5ldJ8kxi1e", "wWaqW7RcRG", "vGifW7VcOW", "4lAXxUc1PEc1HUc1HW", 'kUkCNXxdLhe', "bCo2W6FcU8kI", "4Ocz4Okx4Ogg4OcG4Oc5", 'WR/cLCkxWRiq', "md8ZW7r9", 'xmoKBCoFFa', 'dtiZW6Pt', "AdCqWOhcPq", "W57cNSoRbCkB", "ESknW6xdPeW", "WP45WOrEW5a", "WPxcN8krW4mV", "W785W75EW4i", 'WR12WRmwAW', "rGWe", 'WPpcUCkczsO', "WQaTb1G", 'W6yTy8kRqa', "xuzMjMy", "CSkncmkiW6a", "pc/dIa", 'WR9YWR9jyq', "W4qWsMSZ", "rCkmcG", "B8kEcComWQW", 'W5xdI8kYW5qi', "W5L0EG", "nfLOcSou", 'WPHQdGVcUW', "4Oos4OkO4OoU4OgQ4Ool", 'oUkENmkt8kM0QFgkLOi', 'W67cJSoZW7VdGq', "eWGuW5NcVa", "WOBcPCk3WO84", "WO9IWRnCza", 'WQL6WR4qCq', "W7S3W6r4W6S", "WR99WPDjxW", "4Ok64Og94Okf4Okw4Ok6", "WQa5i37cOa", "WOrIcq", "uWqaWPZdQa", "jCojta", "m8kbhmkC", 'WORcOCkGW7CX', "Fmkbcq", "WPH0iH7cPa", 'nCk1WROW', "W5tcHYNdHmk4", "t0xdGSkqkW", "zcClWQFcRG", "FsTnWPmT", "F3XJkWW", "WPi0BhFcMa", "fb/cRmk7WOO", 'iCk9W7JdOKy', "d8o5W7PciG", "jwHjkCos", 'W4/dVCkaW583', "W6WgFmkMBa", "osRcHG", "jCofevhdLq", "rMFcK0xcOW", "CmoxyCoAta", "WQiXWOntW6G", "WOJcRCk2WRi/", "W5TIytK", "xmozkxjB", "WQrVmIVcMa", "W6jhlNldJq", "p2GQWRSj", "sa9EWQC3", "wYjoWOOo", 'W6ZdS8kkW64b', "WRyTqKVcKW", 'W4KLW77dMSoi', "WQvnWQH8tW", 'yCo5i09/', 'WOBcQ8oMa8ko', "W7hcQbVdVSkH", "keLYg8o7", "hHLuWQ7dSq", '4OgH4Oki4Okc4Oou4Ook', "4P2mCmk1ACoZ", 'W64LW6nTW6K', "W6/dNmkZW4qo", "AMz7mqu", 'mJ85', "W6ebymk8FG", "haWxWPZcRW", "uWqa", 'rmkIoSkXoW', "W6zozb3dOa", "WPS7W7Onja", "W7WAFq", 'n8k1a8oDW6i', "W4yuW7LEW7q", "WRiQWO0+WO8", "WOqaWOzxW6S", "i8oFumoOAW", "w8khh8kalW", "tComWOq", 'WPhdRSoXcCkE', "WPHMaHm", "WOKLWOrsW5a", 'WQq0WQHpFa', "wSkghCk7dq", "bgzeh8ow", "xgFdMSkxjW", "WOhcRmoRb8kG", 'W4FcJJddICkQ', "g3nF", "nmkNW7NdOMi", '4Oob4OoV4Oo14Oo+4Og8', "vSkyiYHS", 'wCksWP0BvG', "dvqyWQm8", 'hJRcMSoBnW', "W5PKW5bl", "mSoQje9x", 'cf5mpSoy', "lmoCW783WPe", "4lEc4lEX4lsb4lENWP8", "4lAJ4lE44lE/4lwn4lsC"];
  _0x2551 = function () {
    return _0x2a47c4;
  };
  return _0x2551();
}
if (config.LANG === "URDU") {
  sizetoo = "_File ka size boht ziyada hai.._ Ya phir jis platform pe main chal raha hun \n usski bandwidth boht kamm hai, iss liye file upload nahi ho saki..*";
} else {
  sizetoo = "_This file size is too big_\n *The bandwidth of the platform where this bot is hosted is not enough to upload this file!*";
}
const _0x43c8d7 = {
  'pattern': "yts",
  'alias': ['ytsearch'],
  'use': ".yts lelena",
  'react': '🔎',
  'desc': "Search videos from youtube",
  'category': "search",
  'filename': __filename
};
cmd(_0x43c8d7, async (_0x49fd36, _0x2a1034, _0x499ba7, {
  from: _0x3f0d00,
  q: _0x129dc6,
  reply: _0x5bf9d4
}) => {
  try {
    if (!_0x129dc6) {
      return await _0x5bf9d4("*Please enter a query to search!*");
    }
    var _0x47673b = await yts(_0x129dc6);
    var _0x220186 = '';
    _0x47673b.videos.map(_0x358055 => {
      _0x220186 += " *🖲️" + _0x358055.title + "*\n🔗 " + _0x358055.url + "\n\n";
    });
    const _0x24cf6b = {
      'text': _0x220186
    };
    const _0x40dc10 = {
      'quoted': _0x2a1034
    };
    await _0x49fd36.sendMessage(_0x3f0d00, _0x24cf6b, _0x40dc10);
  } catch (_0x53de70) {
    _0x5bf9d4("*Error !!*");
    l(_0x53de70);
  }
});
if (config.COMMAND_TYPE === "button") {
  const _0x1c4a95 = {
    'pattern': "song",
    'alias': ['play'],
    'category': "download",
    'react': '🎧',
    'use': ".song2 <song name>",
    'desc': "youtube audio downloader",
    'filename': __filename
  };
  cmd(_0x1c4a95, async (_0x1eb185, _0x2ca636, _0x1c62c7, {
    reply: _0x4e5381,
    from: _0x1a16ff,
    q: _0x5be190,
    prefix: _0x4730a8
  }) => {
    try {
      if (!_0x5be190) {
        return await _0x4e5381("plase give me name !");
      }
      const _0x5430d2 = await yts(_0x5be190);
      const _0x5bff47 = _0x5430d2.videos[0x0];
      const _0x28a75b = _0x5bff47.url;
      let _0x4b358e = await fg.yta(_0x28a75b);
      const _0x49e75b = "*𝗛𝗨𝗡𝗖𝗛𝗢-𝗠𝗗* \n\n < 𝗦𝗢𝗡𝗚 -- 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 <\n\n *`✞: Title` :* " + _0x5bff47.title + "\n\n *`✞: Size` :* " + _0x5bff47.size + "\n\n *`✞: Duration` :* " + _0x5bff47.timestamps + "\n\n *`✞: Quality` :* " + _0x4b358e.quality + "\t\t\t\t   \n\n *`✞: URL` :* " + _0x5bff47.url + "\n";
      let _0x38413d = [{
        'name': "quick_reply",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Audio 🎧",
          'id': _0x4730a8 + "ytaud " + _0x5bff47.url
        })
      }, {
        'name': "quick_reply",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Document 📁",
          'id': _0x4730a8 + "ytdoc " + _0x5bff47.url
        })
      }];
      const _0x4d57d5 = {
        'image': _0x5bff47.thumbnail,
        'header': '',
        'footer': config.FOOTER,
        'body': _0x49e75b
      };
      return _0x1eb185.sendButtonMessage(_0x1a16ff, _0x38413d, _0x1c62c7, _0x4d57d5);
      const _0x1ffd97 = {
        'text': '✅',
        'key': _0x2ca636.key
      };
      const _0x55730 = {
        'react': _0x1ffd97
      };
      await _0x1eb185.sendMessage(_0x1a16ff, _0x55730);
    } catch (_0x328b03) {
      _0x4e5381("*Error !!*");
      console.log(_0x328b03);
    }
  });
  const _0xc77745 = {
    'pattern': "video",
    'alias': ["ytmp4"],
    'use': ".video lelena",
    'react': '🎥',
    'desc': "Download videos from youtube",
    'category': 'download',
    'filename': __filename
  };
  cmd(_0xc77745, async (_0x3fe280, _0xb7519, _0x13111a, {
    from: _0x480cb4,
    q: _0x2660bc,
    prefix: _0x3fa79d,
    reply: _0x158808
  }) => {
    try {
      if (!_0x2660bc) {
        return await _0x158808("*Please enter a query or a url!*");
      }
      const _0x5651d8 = _0x2660bc.replace(/\?si=[^&]*/, '');
      var _0x10fbd8 = await yts(_0x5651d8);
      var _0x13e748 = _0x10fbd8.videos[0x0];
      const _0x2f21f6 = "*𝗛𝗨𝗡𝗖𝗛𝗢-𝗠𝗗* \n\n < 𝗩𝗜𝗗𝗘𝗢 -- 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 >\n    \n *`✞: Title` :* " + _0x13e748.title + "\n    \n *`✞: Views` :* " + _0x13e748.views + "\n    \n *`✞: Duration` :* " + _0x13e748.duration + "\n    \n *`✞: URL` :* " + _0x13e748.url + "\n    ";
      const _0x2cd4ce = [];
      const _0x548501 = new Map();
      for (let _0x2a93ed = 0x0; _0x2a93ed < 0x1; _0x2a93ed++) {
        const _0x58fa11 = commands[_0x2a93ed];
        if (!_0x58fa11.dontAddCommandList && _0x58fa11.pattern !== undefined) {
          const _0x574ba8 = _0x58fa11.category.toUpperCase();
          if (!_0x548501.has(_0x574ba8)) {
            _0x2cd4ce.push(_0x574ba8);
            _0x548501.set(_0x574ba8, []);
          }
          _0x548501.get(_0x574ba8).push(_0x58fa11.pattern);
        }
      }
      const _0x4f3622 = [];
      for (const _0x47b4fe of _0x2cd4ce) {
        _0x4f3622.push({
          'header': '',
          'title': "360P VIDEO",
          'description': "Download 360 quality video",
          'id': _0x3fa79d + "360p " + _0x13e748.url
        });
        _0x4f3622.push({
          'header': '',
          'title': "480P VIDEO",
          'description': "Download 480 quality video",
          'id': _0x3fa79d + "480p " + _0x13e748.url
        });
        _0x4f3622.push({
          'header': '',
          'title': "720P VIDEO",
          'description': "Download 720 quality video",
          'id': _0x3fa79d + "720p " + _0x13e748.url
        });
        _0x4f3622.push({
          'header': '',
          'title': "1080P VIDEO",
          'description': "Download 1080 quality video",
          'id': _0x3fa79d + "1080p " + _0x13e748.url
        });
      }
      const _0x485f5f = [];
      for (const _0x1c07c0 of _0x2cd4ce) {
        _0x485f5f.push({
          'header': "Document type videos",
          'title': "240P VIDEO",
          'description': "Download 240 quality video",
          'id': _0x3fa79d + "24p" + _0x13e748.url
        });
        _0x485f5f.push({
          'header': '',
          'title': "360P VIDEO",
          'description': "Download 360 quality video",
          'id': _0x3fa79d + "36p " + _0x13e748.url
        });
        _0x485f5f.push({
          'header': '',
          'title': "480P VIDEO",
          'description': "Download 480 quality video",
          'id': _0x3fa79d + "48p " + _0x13e748.url
        });
        _0x485f5f.push({
          'header': '',
          'title': "720P VIDEO",
          'description': "Download 720 quality video",
          'id': _0x3fa79d + "72p " + _0x13e748.url
        });
        _0x485f5f.push({
          'header': '',
          'title': "1080P VIDEO",
          'description': "Download 1080 quality video",
          'id': _0x3fa79d + "108p " + _0x13e748.url
        });
      }
      const _0x42201a = {
        'display_text': config.BTN,
        'url': config.BTNURL,
        'merchant_url': config.BTNURL
      };
      let _0x561da9 = [{
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify(_0x42201a)
      }, {
        'name': "single_select",
        'buttonParamsJson': JSON.stringify({
          'title': "Normal type videos",
          'sections': [{
            'title': "Please select a category",
            'highlight_label': '𝗛𝗨𝗡𝗖𝗛𝗢-𝗠𝗗',
            'rows': _0x4f3622
          }]
        })
      }, {
        'name': 'single_select',
        'buttonParamsJson': JSON.stringify({
          'title': "Document type videos",
          'sections': [{
            'title': "Please select a category",
            'highlight_label': "𝗛𝗨𝗡𝗖𝗛𝗢-𝗠𝗗",
            'rows': _0x485f5f
          }]
        })
      }];
      const _0x575dab = {
        'image': _0x13e748.thumbnail,
        'header': '',
        'footer': config.FOOTER,
        'body': _0x2f21f6
      };
      return await _0x3fe280.sendButtonMessage(_0x480cb4, _0x561da9, _0xb7519, _0x575dab);
    } catch (_0x322caf) {
      _0x158808("*Error !!*");
      l(_0x322caf);
    }
  });
}
const _0x34243c = {
  'pattern': "yt360",
  'react': '🎥',
  'dontAddCommandList': true,
  'filename': __filename
};
cmd(_0x34243c, async (_0x2ba661, _0x8cc924, _0xcb2beb, {
  from: _0x3174d8,
  q: _0x5267de,
  reply: _0x2d2a92
}) => {
  function _0x43d2e5(_0x3401a4, _0x3fae75, _0x1400c8, _0x44ccc6, _0xe21a9d) {
    return _0x46de(_0x3401a4 + 0x7c - 0x127, _0x1400c8);
  }
  function _0x3e8934(_0x3cee25, _0x23ffe5, _0x1083e5, _0x481992, _0x3ba0df) {
    return _0x46de(_0x3ba0df + 0x409 - 0x11f, _0x481992);
  }
  function _0x909165(_0x146a9e, _0x18b5b4, _0x58ef5a, _0x1e63cc, _0x5f224d) {
    return _0x46de(_0x58ef5a + 0xa7 + 0x16d, _0x5f224d);
  }
  const _0x2b8bb1 = {
    'wEJin': function (_0x5e4cf9, _0x3f3971) {
      return _0x5e4cf9(_0x3f3971);
    },
    'GpFhf': "*File size is too big!*",
    'dOUvi': function (_0x5b805c, _0xaf0b3d) {
      return _0x5b805c(_0xaf0b3d);
    },
    'YQnQj': "*ERROR !!*",
    'qxfmT': function (_0x1c7148, _0x2cdd87) {
      return _0x1c7148 !== _0x2cdd87;
    },
    'PEEYL': "ihLBJ",
    'CZBqO': "uYSfp",
    'yQDyZ': "error",
    'vRjTs': "finish",
    'jKIXz': "Error occurred:",
    'KgQLZ': " MB",
    'KcsWC': "Document type videos",
    'RCKxY': "240P VIDEO",
    'ObJPA': "Download 240 quality video",
    'JytKs': function (_0x15d9a7, _0x467161) {
      return _0x15d9a7 + _0x467161;
    },
    'zlVMW': "360P VIDEO",
    'fQucA': "Download 360 quality video",
    'ksSol': "480P VIDEO",
    'YLGnH': "Download 480 quality video",
    'DIfpu': function (_0x48a9b0, _0x1a09dd) {
      return _0x48a9b0 + _0x1a09dd;
    },
    'HrfBR': "720P VIDEO",
    'Qnnvg': "Download 720 quality video",
    'TIbTc': function (_0x163758, _0x85b488) {
      return _0x163758 + _0x85b488;
    },
    'Piifi': "1080P VIDEO",
    'zkCGX': "Download 1080 quality video",
    'SpsUo': "Normal types videos",
    'hgRrc': function (_0x324438, _0x4eaa5f) {
      return _0x324438 + _0x4eaa5f;
    },
    'Pkihj': function (_0x5f07b6, _0x1402af) {
      return _0x5f07b6 + _0x1402af;
    },
    'SbGKd': function (_0x124576, _0x2383fb) {
      return _0x124576(_0x2383fb);
    },
    'DXEWm': function (_0x25150e, _0x13d44b) {
      return _0x25150e === _0x13d44b;
    },
    'ZTxBh': "tFKEG",
    'gzvRa': "ArDJo",
    'CNDqR': "*Need a youtube url!*",
    'EKDnv': function (_0x544ce6, _0x478f92) {
      return _0x544ce6(_0x478f92);
    },
    'slzDx': '.mp4',
    'Ruids': function (_0x57e5de, _0x5c7321, _0x594587) {
      return _0x57e5de(_0x5c7321, _0x594587);
    },
    'nzgAv': "*360p quality not found please try another!*",
    'pnwEy': function (_0x14be4a, _0x521753) {
      return _0x14be4a / _0x521753;
    },
    'DzOlq': function (_0x404527, _0x16897a) {
      return _0x404527 * _0x16897a;
    },
    'MMYxz': function (_0x1a39ac, _0x5d6504) {
      return _0x1a39ac <= _0x5d6504;
    },
    'PPVVt': function (_0xdfcc46, _0x3cfd47) {
      return _0xdfcc46 === _0x3cfd47;
    },
    'Zxuqi': 'LxbPH',
    'YXwdX': "JfZPT",
    'lsxib': function (_0x16cc89, _0x5a28e5) {
      return _0x16cc89 === _0x5a28e5;
    },
    'QpBFR': "UTFAs",
    'XOPnd': "eTMBj",
    'NZnPF': function (_0x7c3072, _0x51e211) {
      return _0x7c3072 === _0x51e211;
    },
    'JachW': "ZOCmA",
    'TkcvI': "video/mp4",
    'sfvCq': function (_0x40a7a4, _0x4586e9) {
      return _0x40a7a4 + _0x4586e9;
    },
    'XvTxj': "TAMxX",
    'Oevwo': 'uMFLx',
    'sBIjb': function (_0x57471c, _0x33c3c4) {
      return _0x57471c(_0x33c3c4);
    },
    'TCfMk': "wTeWy",
    'LKQZR': "sPtDa",
    'xSpGy': "*Error !!*",
    'rTDnW': function (_0x4a5629, _0x5aed3e) {
      return _0x4a5629(_0x5aed3e);
    }
  };
  function _0x138c18(_0x54119b, _0x5ea4a9, _0x43622d, _0x329cbb, _0x378ffb) {
    return _0x46de(_0x378ffb - 0x215 + 0x16d, _0x54119b);
  }
  function _0x20159f(_0x280200, _0x1b0d44, _0x25d87b, _0x5f2c9c, _0x18639c) {
    return _0x46de(_0x25d87b + 0x31 - 0x3ba, _0x18639c);
  }
  try {
    if (!_0x5267de) {
      return await _0x2d2a92("*Need a youtube url!*");
    }
    let _0x552b38 = await ytdl.getInfo(_0x5267de);
    let _0xaf8978 = _0x552b38.videoDetails.title;
    let _0xd6f156 = getRandom(".mp4");
    const _0x5ab5d2 = {
      'filter': _0x256fa1 => _0x256fa1.container == "mp4" && _0x256fa1.itag == '18'
    };
    const _0x59029f = ytdl(_0x5267de, _0x5ab5d2).pipe(fs.createWriteStream('./' + _0xd6f156));
    await new Promise((_0x560bb2, _0x509b70) => {
      function _0x4948bc(_0x179af8, _0x47e529, _0xf4e153, _0x380eed, _0x5d30bf) {
        return _0x46de(_0x380eed + 0x16b + 0x31 - 0x3ba, _0x47e529);
      }
      function _0x467db6(_0x1ec915, _0xf89d63, _0x393b36, _0x36e776, _0x4bf9fe) {
        return _0x46de(_0x1ec915 + 0x34e - 0x215 + 0x16d, _0x36e776);
      }
      function _0xbbe3ba(_0x7f94, _0x54ca5d, _0x4d12ad, _0x2ccad1, _0x2efbaf) {
        return _0x46de(_0x4d12ad - 0x2 - 0x215 + 0x16d, _0x54ca5d);
      }
      function _0x2e1394(_0x224f68, _0x5e427a, _0xec342d, _0x4a9629, _0x5b93ae) {
        return _0x46de(_0x5b93ae + 0x59 + 0xa7 + 0x16d, _0xec342d);
      }
      const _0x4bf13d = {
        'GvJsX': function (_0x106f0a, _0x5d876b) {
          function _0x4c30a9(_0x2174b6, _0x42f0d4, _0x466c6d, _0x58ebb2, _0x5b2c73) {
            return _0x46de(_0x5b2c73 + 0x3c0, _0x42f0d4);
          }
          return _0x106f0a(_0x5d876b);
        },
        'fdjTi': "*ERROR !!*",
        'kMAZV': function (_0x38e7dd, _0x43b31c) {
          function _0x24ff5d(_0x401585, _0x32ed12, _0x2df199, _0x3053f6, _0x767e09) {
            return _0x46de(_0x32ed12 - 0x2a8 + 0x136 + 0xa7 + 0x16d, _0x3053f6);
          }
          return _0x38e7dd(_0x43b31c);
        }
      };
      function _0x5768b1(_0x196d45, _0x3c9145, _0x2119df, _0x48978a, _0x18f579) {
        return _0x46de(_0x196d45 + 0x136 + 0xa7 + 0x16d, _0x48978a);
      }
      _0x59029f.on("error", _0x509b70);
      _0x59029f.on("finish", _0x560bb2);
    });
    if (!_0x59029f) {
      return _0x2d2a92("*360p quality not found please try another!*");
    }
    let _0x3ea164 = fs.statSync('./' + _0xd6f156);
    let _0x2f05bb = _0x3ea164.size / 0x100000;
    if (_0x2f05bb <= 0x400) {
      if (_0x2f05bb <= 0x64) {
        const _0x33d30a = {
          'quoted': _0x8cc924
        };
        const _0x41f6ff = await _0x2ba661.sendMessage(_0x3174d8, {
          'video': fs.readFileSync('./' + _0xd6f156)
        }, _0x33d30a);
        const _0x3e84df = {
          'text': '🎼',
          'key': _0x41f6ff.key
        };
        const _0x1e2b83 = {
          'react': _0x3e84df
        };
        await _0x2ba661.sendMessage(_0x3174d8, _0x1e2b83);
        const _0x4325c4 = {
          'text': '✅',
          'key': _0x8cc924.key
        };
        const _0xf39683 = {
          'react': _0x4325c4
        };
        await _0x2ba661.sendMessage(_0x3174d8, _0xf39683);
        return fs.unlinkSync('./' + _0xd6f156);
      } else {
        const _0x22f507 = {
          'quoted': _0x8cc924
        };
        const _0x3dcff5 = await _0x2ba661.sendMessage(_0x3174d8, {
          'document': fs.readFileSync('./' + _0xd6f156),
          'mimetype': "video/mp4",
          'fileName': _0xaf8978 + ".mp4"
        }, _0x22f507);
        const _0x10d529 = {
          'text': '🎼',
          'key': _0x3dcff5.key
        };
        const _0x4ef5be = {
          'react': _0x10d529
        };
        await _0x2ba661.sendMessage(_0x3174d8, _0x4ef5be);
        const _0x27293e = {
          'text': '✅',
          'key': _0x8cc924.key
        };
        const _0x5026f0 = {
          'react': _0x27293e
        };
        await _0x2ba661.sendMessage(_0x3174d8, _0x5026f0);
        return fs.unlinkSync('./' + _0xd6f156);
      }
    } else {
      fs.unlinkSync('./' + _0xd6f156);
      return _0x2d2a92("*File size is too big!*");
    }
  } catch (_0x28c0e3) {
    _0x2d2a92("*Error !!*");
    l(_0x28c0e3);
  }
});
const _0x42a994 = {
  'pattern': "yt720",
  'react': '🎥',
  'dontAddCommandList': true,
  'filename': __filename
};
cmd(_0x42a994, async (_0x252188, _0x2038bb, _0x1b62c2, {
  from: _0x489147,
  q: _0x18f65e,
  reply: _0x598237
}) => {
  function _0xe698c5(_0x56cdf9, _0x213f90, _0x2f6e13, _0x21c3b9, _0x38308c) {
    return _0x46de(_0x21c3b9 + 0x115 - 0x23c, _0x2f6e13);
  }
  function _0x24d729(_0x16a9cf, _0x3db3ef, _0x5a15bc, _0x52eaf3, _0x4ce0b6) {
    return _0x46de(_0x52eaf3 + 0x25d - 0x23c, _0x4ce0b6);
  }
  const _0x45bcb6 = {
    'Ulizq': function (_0x4e6d88, _0x257d07) {
      return _0x4e6d88 * _0x257d07;
    },
    'XrEIb': " GB",
    'nSLTi': function (_0x5b225b, _0x4c1eb8) {
      return _0x5b225b(_0x4c1eb8);
    },
    'CRXDX': function (_0x4d907f, _0x4761d1) {
      return _0x4d907f !== _0x4761d1;
    },
    'LTkjw': "*Error !!*",
    'lLrOD': function (_0x32fed5, _0x547ee0) {
      return _0x32fed5(_0x547ee0);
    },
    'MUyVe': function (_0x295b9f, _0x18035b) {
      return _0x295b9f(_0x18035b);
    },
    'hBRvk': function (_0x46bae4, _0x175497) {
      return _0x46bae4 + _0x175497;
    },
    'ebJLb': function (_0x19457f, _0x436a58) {
      return _0x19457f === _0x436a58;
    },
    'cXiGD': 'MwKQZ',
    'ikGzL': function (_0x1bb33a, _0x1a5a18) {
      return _0x1bb33a(_0x1a5a18);
    },
    'nQolC': "*Need a youtube url!*",
    'ZQJlX': function (_0x4c16f1, _0xd391ae) {
      return _0x4c16f1(_0xd391ae);
    },
    'RbTNL': "aRtfd",
    'cpcMI': "AImjD",
    'mpRxs': " MB",
    'QPDRC': function (_0x116650, _0x555940) {
      return _0x116650 !== _0x555940;
    },
    'eXgTi': 'dIDTD',
    'ESYdY': function (_0x250c48, _0x3d5189) {
      return _0x250c48 <= _0x3d5189;
    },
    'WmDhm': 'HIsoq',
    'iILqN': 'YSMli',
    'IzLsk': function (_0x553cc1, _0x110dee) {
      return _0x553cc1 !== _0x110dee;
    },
    'gPzwC': "xUTvh",
    'wlxsU': "Wdpuu",
    'jTskl': "EwSSK",
    'dpyDP': "video/mp4",
    'HgTTI': ".mp4",
    'zNVmJ': function (_0x288814, _0x57f210) {
      return _0x288814 !== _0x57f210;
    },
    'Uilnb': 'GMRXF',
    'pMuyg': "*File size is too big!*",
    'jgaGx': 'tjzCG',
    'VDksu': function (_0x12b066, _0x1963d4) {
      return _0x12b066(_0x1963d4);
    }
  };
  function _0x4b06f6(_0x11233d, _0x290ca3, _0x588a3d, _0x202f5a, _0x7371a0) {
    return _0x46de(_0x202f5a + 0x48f - 0x11f, _0x588a3d);
  }
  function _0x2f149c(_0x5cd2b2, _0x4368ba, _0x56ea28, _0x366647, _0x4b413a) {
    return _0x46de(_0x5cd2b2 - 0x1b5 - 0x11f, _0x4368ba);
  }
  function _0x4b426f(_0x3d196a, _0x1c8380, _0x414787, _0x6f991f, _0x5271d3) {
    return _0x46de(_0x1c8380 - 0x2b9 - 0x127, _0x3d196a);
  }
  try {
    if (!_0x18f65e) {
      return await _0x598237("*Need a youtube url!*");
    }
    let _0x5eb7f0 = await ytdl.getInfo(_0x18f65e);
    let _0x51cf44 = _0x5eb7f0.videoDetails.title;
    const _0x1334c2 = await youtube720(_0x18f65e);
    let _0x3ede76 = await getsize(_0x1334c2);
    if (_0x3ede76.includes('MB')) {
      _0x3ede76 = _0x3ede76.replace(" MB", '');
    } else if (_0x3ede76.includes('GB')) {
      _0x3ede76 = _0x3ede76.replace(" GB", '') * 0x400;
    }
    if (_0x3ede76 <= 0x400) {
      if (_0x3ede76 <= 0x64) {
        const _0x3552ee = {
          'url': _0x1334c2
        };
        const _0x4dc02f = {
          'video': _0x3552ee
        };
        const _0x4af577 = {
          'quoted': _0x2038bb
        };
        const _0x1b1b0a = await _0x252188.sendMessage(_0x489147, _0x4dc02f, _0x4af577);
        const _0xe7f046 = {
          'text': '🎼',
          'key': _0x1b1b0a.key
        };
        const _0x5caed9 = {
          'react': _0xe7f046
        };
        await _0x252188.sendMessage(_0x489147, _0x5caed9);
        const _0x5a88ff = {
          'text': '✅',
          'key': _0x2038bb.key
        };
        const _0x719659 = {
          'react': _0x5a88ff
        };
        await _0x252188.sendMessage(_0x489147, _0x719659);
      } else {
        const _0x332aae = {
          'url': _0x1334c2
        };
        const _0x5a132b = {
          'quoted': _0x2038bb
        };
        const _0x4f2feb = await _0x252188.sendMessage(_0x489147, {
          'document': _0x332aae,
          'mimetype': "video/mp4",
          'fileName': _0x51cf44 + ".mp4"
        }, _0x5a132b);
        const _0x25ae2e = {
          'text': '🎼',
          'key': _0x4f2feb.key
        };
        const _0x25fdf6 = {
          'react': _0x25ae2e
        };
        await _0x252188.sendMessage(_0x489147, _0x25fdf6);
        const _0x7780dd = {
          'text': '✅',
          'key': _0x2038bb.key
        };
        const _0x36fe38 = {
          'react': _0x7780dd
        };
        await _0x252188.sendMessage(_0x489147, _0x36fe38);
      }
    } else {
      _0x598237("*File size is too big!*");
    }
  } catch (_0x4ceb38) {
    _0x598237("*Error !!*");
    l(_0x4ceb38);
  }
});
const _0x4d683a = {
  'pattern': "240p",
  'react': '🎥',
  'dontAddCommandList': true,
  'filename': __filename
};
cmd(_0x4d683a, async (_0x37e861, _0x46c480, _0x31b99f, {
  from: _0x3ff1c2,
  q: _0x33aba1,
  reply: _0x961e69
}) => {
  function _0x56480d(_0x3a02ed, _0x3a5d4a, _0x202688, _0x2adb36, _0x55b556) {
    return _0x46de(_0x2adb36 + 0x70 - 0x11f, _0x202688);
  }
  const _0x1dc767 = {
    'uLxFX': function (_0x2fdc44, _0x5d4207) {
      return _0x2fdc44 + _0x5d4207;
    },
    'CCcPZ': function (_0x28276c, _0x52f185) {
      return _0x28276c + _0x52f185;
    },
    'HMwLe': " *🖲️",
    'FzTQq': "*\n🔗 ",
    'lPflT': function (_0x45d53b, _0x2f7ca5) {
      return _0x45d53b !== _0x2f7ca5;
    },
    'VRhgc': "slxBX",
    'PgpzU': function (_0x3fd9f6, _0x5dd3d0) {
      return _0x3fd9f6(_0x5dd3d0);
    },
    'AjVxE': function (_0x41f796, _0x49cfc9) {
      return _0x41f796(_0x49cfc9);
    },
    'jltkq': "240p",
    'NYCrB': function (_0x4dabb1, _0x4f24fa) {
      return _0x4dabb1 !== _0x4f24fa;
    },
    'YVHdF': 'cHnzS',
    'aeLad': function (_0x2c9521, _0x592188) {
      return _0x2c9521(_0x592188);
    }
  };
  function _0x3c64b5(_0x18d31d, _0x81645a, _0x2ffb7d, _0x1eaf53, _0x3b219e) {
    return _0x46de(_0x81645a - 0x278 - 0x127, _0x1eaf53);
  }
  function _0x276858(_0x27a6af, _0x2e7bfe, _0x4e38ed, _0x104c5a, _0x120b1a) {
    return _0x46de(_0x2e7bfe + 0x107 - 0x127, _0x120b1a);
  }
  function _0x1689f2(_0x296966, _0x11fdd1, _0x39855f, _0x2a5217, _0xa86bdf) {
    return _0x46de(_0x11fdd1 + 0x334 - 0x23c, _0x296966);
  }
  function _0x508464(_0x3e5696, _0x5ef927, _0x354f5c, _0x29a7e0, _0x4aeb17) {
    return _0x46de(_0x3e5696 - 0x1ab - 0x127, _0x4aeb17);
  }
  try {
    if (!/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.test(_0x33aba1)) {
      return await _0x961e69(urlneed);
    }
    const _0x42ba05 = await dl.youtubedl(_0x33aba1);
    let _0x481c5b = await getsize(await _0x42ba05.video["240p"].download());
    const _0x21f512 = {
      'quoted': _0x31b99f
    };
    let _0x14c84e = await _0x37e861.sendMessage(_0x3ff1c2, {
      'video': {
        'url': await _0x42ba05.video["240p"].download()
      },
      'caption': config.FOOTER
    }, _0x21f512);
    const _0x412894 = {
      'text': '🎥',
      'key': _0x14c84e.key
    };
    const _0x144db3 = {
      'react': _0x412894
    };
    await _0x37e861.sendMessage(_0x3ff1c2, _0x144db3);
  } catch (_0x274588) {
    _0x961e69(N_FOUND);
    l(_0x274588);
  }
});
const _0x20fc8e = {
  'pattern': "360p"
};
function _0x1bf856(_0x4d9c49, _0x446006, _0x3f6320, _0x1d9b97, _0xa4eabf) {
  return _0x46de(_0x1d9b97 - 0x23c, _0x446006);
}
_0x20fc8e.react = "📽️";
_0x20fc8e.dontAddCommandList = true;
_0x20fc8e.filename = __filename;
cmd(_0x20fc8e, async (_0x13d31c, _0x466cdf, _0x112030, {
  from: _0x43067c,
  q: _0x56c542,
  reply: _0x335512
}) => {
  function _0x3d75e8(_0x4ce6bf, _0x148245, _0x304f4e, _0xb3c0c9, _0x24df82) {
    return _0x46de(_0x148245 - 0x3d3 + 0x16d, _0x24df82);
  }
  function _0x4a396f(_0x312eb6, _0x59f5c1, _0x267cb7, _0x405ce7, _0x2cf922) {
    return _0x46de(_0x59f5c1 - 0x135 - 0x11f, _0x312eb6);
  }
  function _0x10ea08(_0x4e6f1e, _0x245af1, _0x48b84e, _0x17fc0d, _0x501ceb) {
    return _0x46de(_0x17fc0d + 0x25e - 0x3ba, _0x4e6f1e);
  }
  function _0x43e111(_0x267ed9, _0x119802, _0x47c5af, _0x3dd383, _0x485e93) {
    return _0x46de(_0x485e93 + 0x1b3 - 0x23c, _0x119802);
  }
  const _0x1d282e = {
    'LCBbA': function (_0x1c071c, _0x296e7f) {
      return _0x1c071c(_0x296e7f);
    },
    'acHvK': function (_0x395139, _0x40d6e5) {
      return _0x395139(_0x40d6e5);
    },
    'lgfaF': function (_0x4453de, _0x328223) {
      return _0x4453de(_0x328223);
    },
    'AuTVc': "360p"
  };
  function _0x4e4e2e(_0x46bf77, _0x2b3b2d, _0xe48f46, _0x5e55ea, _0x17a716) {
    return _0x46de(_0xe48f46 + 0x116 - 0x23c, _0x46bf77);
  }
  try {
    if (!/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.test(_0x56c542)) {
      return await _0x335512(urlneed);
    }
    const _0x5e4187 = await dl.youtubedl(_0x56c542);
    let _0x38a84c = await getsize(await _0x5e4187.video['360p'].download());
    const _0x182621 = {
      'quoted': _0x112030
    };
    let _0x5c3e5f = await _0x13d31c.sendMessage(_0x43067c, {
      'video': {
        'url': await _0x5e4187.video["360p"].download()
      },
      'caption': config.FOOTER
    }, _0x182621);
    const _0x560182 = {
      'text': '🎥',
      'key': _0x5c3e5f.key
    };
    const _0x46fb90 = {
      'react': _0x560182
    };
    await _0x13d31c.sendMessage(_0x43067c, _0x46fb90);
  } catch (_0x42b7bb) {
    _0x335512(N_FOUND);
    l(_0x42b7bb);
  }
});
const _0x35024a = {
  'pattern': "480p",
  'react': "📽️"
};
function _0x46e766(_0x3f806d, _0x5dcb25, _0x4186ce, _0x30fc16, _0x13ea7b) {
  return _0x46de(_0x13ea7b - 0x11f, _0x4186ce);
}
_0x35024a.dontAddCommandList = true;
_0x35024a.filename = __filename;
cmd(_0x35024a, async (_0x3ea4e0, _0x429e1a, _0x56485a, {
  from: _0x16d5cb,
  q: _0x598a27,
  reply: _0x4fed9a
}) => {
  function _0x564556(_0xd68039, _0x408aa3, _0x278fdf, _0x3da8bc, _0x2beae3) {
    return _0x46de(_0x278fdf + 0x457 - 0x11f, _0x408aa3);
  }
  function _0xa1a0cf(_0x26187, _0x51b070, _0x23c756, _0xd4b89b, _0x3a42ad) {
    return _0x46de(_0xd4b89b - 0x3e7 + 0x16d, _0x23c756);
  }
  function _0x69c19b(_0x3b05f7, _0x401edd, _0x29b8b2, _0x596679, _0x2bd4bd) {
    return _0x46de(_0x2bd4bd + 0x49e - 0x23c, _0x29b8b2);
  }
  function _0x4995fb(_0x467fbd, _0x299df6, _0x1343c6, _0x13cf1a, _0x1237fc) {
    return _0x46de(_0x467fbd + 0xd1 - 0x127, _0x1237fc);
  }
  const _0xc79767 = {
    'GLhYq': function (_0x1673b9, _0x11a4b4) {
      return _0x1673b9(_0x11a4b4);
    },
    'XFMXF': function (_0x3a7505, _0x4f34af) {
      return _0x3a7505(_0x4f34af);
    },
    'MLIjt': function (_0xd82ef5, _0x3495dc) {
      return _0xd82ef5(_0x3495dc);
    },
    'tqATF': "480p",
    'FBGZn': function (_0x29d1bf, _0xa8bb4a) {
      return _0x29d1bf(_0xa8bb4a);
    },
    'bzZtv': function (_0x84c79, _0x25f88b) {
      return _0x84c79(_0x25f88b);
    }
  };
  function _0x8cfc36(_0xbccc7d, _0x24680c, _0x913342, _0x1a87b0, _0x3bd430) {
    return _0x46de(_0x913342 + 0x679 - 0x3ba, _0xbccc7d);
  }
  try {
    if (!/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.test(_0x598a27)) {
      return await _0x4fed9a(urlneed);
    }
    const _0x1767ce = await dl.youtubedl(_0x598a27);
    let _0x553a1a = await getsize(await _0x1767ce.video['480p'].download());
    const _0x4ac3b1 = {
      'quoted': _0x56485a
    };
    let _0x52c52b = await _0x3ea4e0.sendMessage(_0x16d5cb, {
      'video': {
        'url': await _0x1767ce.video["480p"].download()
      },
      'caption': config.FOOTER
    }, _0x4ac3b1);
    const _0x2dc562 = {
      'text': '🎥',
      'key': _0x52c52b.key
    };
    const _0x4624a2 = {
      'react': _0x2dc562
    };
    await _0x3ea4e0.sendMessage(_0x16d5cb, _0x4624a2);
  } catch (_0x670fe4) {
    _0x4fed9a(N_FOUND);
    l(_0x670fe4);
  }
});
const _0x1d06c3 = {
  'pattern': "720p",
  'react': "📽️",
  'dontAddCommandList': true,
  'filename': __filename
};
cmd(_0x1d06c3, async (_0x380131, _0x8d8c91, _0x277711, {
  from: _0x1ce5c7,
  q: _0x1d2c2c,
  reply: _0x1c4d71
}) => {
  const _0x3a60ca = {
    'KlQlW': function (_0x28c71c, _0x4e9881) {
      return _0x28c71c(_0x4e9881);
    },
    'qoLfc': '720p',
    'iWUQq': function (_0xb4cda9, _0x1ffcb4) {
      return _0xb4cda9(_0x1ffcb4);
    },
    'BiAqU': function (_0x2a4dae, _0x455737) {
      return _0x2a4dae(_0x455737);
    }
  };
  function _0x24a7e5(_0x350980, _0x43a68e, _0x119122, _0x193f39, _0x2fba33) {
    return _0x46de(_0x350980 + 0x37c - 0x23c, _0x193f39);
  }
  function _0x2aca14(_0x3e9fda, _0x5c9c3c, _0xeed2b5, _0x5e7ca7, _0x2d7e6b) {
    return _0x46de(_0x2d7e6b + 0x40 - 0x3ba, _0xeed2b5);
  }
  function _0x374192(_0x284324, _0x4a5ab3, _0x4d59b8, _0x563e08, _0x218859) {
    return _0x46de(_0x4a5ab3 + 0x472 - 0x127, _0x284324);
  }
  function _0x40ce35(_0x5c9834, _0x4023c2, _0x3d27e4, _0x413b6a, _0x1d1376) {
    return _0x46de(_0x1d1376 - 0xf0 - 0x11f, _0x3d27e4);
  }
  function _0x2af007(_0x3c4aaa, _0x328583, _0x4f7c4e, _0x5dc725, _0x59839a) {
    return _0x46de(_0x59839a + 0x3c0 - 0x3ba, _0x328583);
  }
  try {
    if (!/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.test(_0x1d2c2c)) {
      return await _0x1c4d71(urlneed);
    }
    const _0x29e129 = await dl.youtubedl(_0x1d2c2c);
    let _0x3dc882 = await getsize(await _0x29e129.video['720p'].download());
    const _0x3d4836 = {
      'quoted': _0x277711
    };
    let _0x158cf4 = await _0x380131.sendMessage(_0x1ce5c7, {
      'video': {
        'url': await _0x29e129.video['720p'].download()
      },
      'caption': config.FOOTER
    }, _0x3d4836);
    const _0x3f693d = {
      'text': '🎥',
      'key': _0x158cf4.key
    };
    const _0x32585b = {
      'react': _0x3f693d
    };
    await _0x380131.sendMessage(_0x1ce5c7, _0x32585b);
  } catch (_0x2e40d7) {
    _0x1c4d71(N_FOUND);
    l(_0x2e40d7);
  }
});
const _0x4ed29c = {
  'pattern': "1080p",
  'react': "📽️",
  'dontAddCommandList': true,
  'filename': __filename
};
cmd(_0x4ed29c, async (_0x32563f, _0x4e8799, _0x5673da, {
  from: _0x37d8e0,
  q: _0x3b1c20,
  reply: _0x367d4f
}) => {
  const _0x39f2b8 = {
    'MIDUB': function (_0x1c8dc6, _0x2a652b) {
      return _0x1c8dc6(_0x2a652b);
    },
    'bYoeG': function (_0x14ffed, _0x7b003) {
      return _0x14ffed(_0x7b003);
    },
    'cidao': function (_0x32f425, _0x3877ce) {
      return _0x32f425(_0x3877ce);
    },
    'agYYU': "1080p",
    'jJQrk': function (_0x4a1b5c, _0x3061c1) {
      return _0x4a1b5c(_0x3061c1);
    },
    'sDjyY': function (_0x5c573c, _0x19baac) {
      return _0x5c573c(_0x19baac);
    }
  };
  function _0x302deb(_0x2b7a71, _0x2ba695, _0x197a61, _0x5eade0, _0x483ccf) {
    return _0x46de(_0x5eade0 + 0x593 - 0x23c, _0x483ccf);
  }
  function _0x4a5ed1(_0x5b426d, _0x58b3e4, _0x4cd00d, _0x51b98a, _0x3bf119) {
    return _0x46de(_0x4cd00d - 0x39 + 0x16d, _0x58b3e4);
  }
  function _0x54dd99(_0x514190, _0x117d94, _0x3c5ea9, _0x1eda6f, _0xc8c8e) {
    return _0x46de(_0x117d94 + 0x4ae - 0x11f, _0x1eda6f);
  }
  function _0x5ac5fe(_0x3de99f, _0x4da16e, _0x5e6726, _0x37518a, _0x46afb6) {
    return _0x46de(_0x3de99f + 0x118 - 0x11f, _0x5e6726);
  }
  function _0x52b560(_0x10c8e4, _0x30058a, _0x4a8f43, _0x4a7584, _0x2c455a) {
    return _0x46de(_0x4a7584 + 0x17d - 0x3ba, _0x2c455a);
  }
  try {
    if (!/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.test(_0x3b1c20)) {
      return await _0x367d4f(urlneed);
    }
    const _0x2270e5 = await dl.youtubedl(_0x3b1c20);
    let _0xb7fba3 = await getsize(await _0x2270e5.video["1080p"].download());
    const _0x3f8deb = {
      'quoted': _0x5673da
    };
    let _0x2376c5 = await _0x32563f.sendMessage(_0x37d8e0, {
      'video': {
        'url': await _0x2270e5.video["1080p"].download()
      },
      'caption': config.FOOTER
    }, _0x3f8deb);
    const _0xfc12f = {
      'text': '🎥',
      'key': _0x2376c5.key
    };
    const _0x3b6d23 = {
      'react': _0xfc12f
    };
    await _0x32563f.sendMessage(_0x37d8e0, _0x3b6d23);
  } catch (_0xf6029c) {
    _0x367d4f(N_FOUND);
    l(_0xf6029c);
  }
});
const _0x287acf = {
  'pattern': "24p",
  'react': "📽️"
};
function _0x629b43(_0x400240, _0x42c238, _0x1717dc, _0x5b0a37, _0x1d42ee) {
  return _0x46de(_0x1d42ee - 0x3ba, _0x400240);
}
_0x287acf.dontAddCommandList = true;
_0x287acf.filename = __filename;
cmd(_0x287acf, async (_0xccf410, _0x2b1828, _0x28f05b, {
  from: _0x50eb71,
  q: _0x37d393,
  reply: _0x499ee5
}) => {
  const _0x165c65 = {
    'aHqNM': function (_0x295bd6, _0x3cbd4e) {
      return _0x295bd6(_0x3cbd4e);
    },
    'TlbzW': "240p",
    'tXDGE': "video.mp4",
    'qSElb': 'video/mp4'
  };
  function _0x3bd9b1(_0x2656de, _0x28b897, _0x5092fa, _0x5796bd, _0x21c0c1) {
    return _0x46de(_0x2656de + 0x69 - 0x127, _0x5796bd);
  }
  function _0x3013b0(_0x1fa44b, _0x3a3665, _0x15a2ed, _0x575665, _0x16d877) {
    return _0x46de(_0x1fa44b + 0x3e2 - 0x3ba, _0x15a2ed);
  }
  function _0x38f19a(_0x2dd3e4, _0x5de4c3, _0x30b846, _0x1bf750, _0x3219d9) {
    return _0x46de(_0x30b846 + 0x51 - 0x127, _0x3219d9);
  }
  function _0x5659a6(_0x5ef76c, _0x13fa46, _0x365ea5, _0x1b67f4, _0x48f03b) {
    return _0x46de(_0x365ea5 - 0x3b7 + 0x16d, _0x13fa46);
  }
  function _0x1bebc7(_0x627ab3, _0x216ebd, _0x39ff57, _0x4bc7d3, _0x309c1a) {
    return _0x46de(_0x309c1a - 0x12a - 0x127, _0x39ff57);
  }
  try {
    if (!/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.test(_0x37d393)) {
      return await _0x499ee5(urlneed);
    }
    const _0x2053d5 = await dl.youtubedl(_0x37d393);
    let _0x42e249 = await getsize(await _0x2053d5.video["240p"].download());
    const _0x51857d = {
      'quoted': _0x28f05b
    };
    let _0x128ae4 = await _0xccf410.sendMessage(_0x50eb71, {
      'document': {
        'url': await _0x2053d5.video["240p"].download()
      },
      'fileName': "video.mp4",
      'mimetype': "video/mp4",
      'caption': config.FOOTER
    }, _0x51857d);
    const _0x13068c = {
      'text': '🎥',
      'key': _0x128ae4.key
    };
    const _0x4c2dbc = {
      'react': _0x13068c
    };
    await _0xccf410.sendMessage(_0x50eb71, _0x4c2dbc);
  } catch (_0x399fe0) {
    _0x499ee5(N_FOUND);
    l(_0x399fe0);
  }
});
function _0xc00bb0(_0xafc1fe, _0x4f4dc8, _0x542435, _0x3deea4, _0x3d0499) {
  return _0x46de(_0x4f4dc8 + 0x16d, _0x542435);
}
const _0xa33ead = {
  'pattern': "36p",
  'react': "📽️",
  'dontAddCommandList': true,
  'filename': __filename
};
cmd(_0xa33ead, async (_0x3adeb, _0x1ebc95, _0x3ca133, {
  from: _0x275e34,
  q: _0x118760,
  reply: _0x3458bf
}) => {
  function _0x176c04(_0x8b1eff, _0x5d237e, _0x4e41ed, _0x57cb5e, _0x3c91ab) {
    return _0x46de(_0x8b1eff - 0x77 - 0x11f, _0x5d237e);
  }
  function _0x3c78ee(_0xb5f9a, _0x199ea7, _0x4e3e7c, _0x21a8b0, _0x530331) {
    return _0x46de(_0xb5f9a - 0x25 - 0x3ba, _0x21a8b0);
  }
  const _0x58ca7c = {
    'UIcPj': function (_0x712aca, _0x8b7076) {
      return _0x712aca(_0x8b7076);
    },
    'KBFwn': '360p',
    'mARJI': "video.mp4",
    'NKVTq': "video/mp4",
    'HgJly': function (_0x96a1b1, _0x2e3064) {
      return _0x96a1b1(_0x2e3064);
    }
  };
  function _0x10c8e5(_0x2a512a, _0x2b8c47, _0x218574, _0x46a422, _0x12a2cc) {
    return _0x46de(_0x46a422 + 0x14e + 0x16d, _0x218574);
  }
  function _0x473ee7(_0x4c3c04, _0x20a73f, _0x443bff, _0x4179b4, _0x24302f) {
    return _0x46de(_0x20a73f + 0x18c - 0x23c, _0x4c3c04);
  }
  function _0x1cf903(_0x35886e, _0x7f2235, _0xbfaa53, _0x5d3f02, _0x2f2efb) {
    return _0x46de(_0x7f2235 + 0x169 + 0x16d, _0x2f2efb);
  }
  try {
    if (!/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.test(_0x118760)) {
      return await _0x3458bf(urlneed);
    }
    const _0x2c79f1 = await dl.youtubedl(_0x118760);
    let _0xe371eb = await getsize(await _0x2c79f1.video['360p'].download());
    const _0xc72dc = {
      'quoted': _0x3ca133
    };
    let _0x4a5233 = await _0x3adeb.sendMessage(_0x275e34, {
      'document': {
        'url': await _0x2c79f1.video["360p"].download()
      },
      'fileName': "video.mp4",
      'mimetype': "video/mp4",
      'caption': config.FOOTER
    }, _0xc72dc);
    const _0x1d3876 = {
      'text': '🎥',
      'key': _0x4a5233.key
    };
    const _0x51f323 = {
      'react': _0x1d3876
    };
    await _0x3adeb.sendMessage(_0x275e34, _0x51f323);
  } catch (_0x533f7e) {
    _0x3458bf(N_FOUND);
    l(_0x533f7e);
  }
});
const _0x1d1d71 = {
  'pattern': "48p",
  'react': "📽️",
  'dontAddCommandList': true,
  'filename': __filename
};
cmd(_0x1d1d71, async (_0x1f29c3, _0x2155ae, _0x11dcbb, {
  from: _0x1f27db,
  q: _0x51d227,
  reply: _0x1f416a
}) => {
  function _0x32f0dc(_0x4e24d7, _0x3bb11c, _0x2d6208, _0x1c1606, _0x346710) {
    return _0x46de(_0x4e24d7 - 0xb4 - 0x23c, _0x2d6208);
  }
  function _0x4eea18(_0x27c5ca, _0x46d5a7, _0x5912b0, _0x3d1a20, _0x5cde17) {
    return _0x46de(_0x5cde17 - 0x262 + 0x16d, _0x5912b0);
  }
  function _0x22b315(_0x1d024d, _0xd4724f, _0x2359d7, _0x3ef86a, _0x43effe) {
    return _0x46de(_0xd4724f - 0x122 - 0x11f, _0x3ef86a);
  }
  function _0x1ad8e5(_0x415bb3, _0x151499, _0x5821bd, _0x526e95, _0x51f99f) {
    return _0x46de(_0x151499 - 0x3a3 + 0x16d, _0x5821bd);
  }
  const _0x4e9beb = {
    'YjFxh': function (_0x545c76, _0x33cf52) {
      return _0x545c76(_0x33cf52);
    },
    'EYKub': "480p",
    'gcsnk': "video.mp4",
    'KgZsn': 'video/mp4'
  };
  function _0x19d656(_0x2de699, _0x1652ac, _0x57a301, _0x2d2efa, _0x1530b0) {
    return _0x46de(_0x1530b0 + 0x18a - 0x127, _0x57a301);
  }
  try {
    if (!/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.test(_0x51d227)) {
      return await _0x1f416a(urlneed);
    }
    const _0x339f31 = await dl.youtubedl(_0x51d227);
    let _0x5ac3c1 = await getsize(await _0x339f31.video['480p'].download());
    const _0x230f69 = {
      'quoted': _0x11dcbb
    };
    let _0x289abc = await _0x1f29c3.sendMessage(_0x1f27db, {
      'document': {
        'url': await _0x339f31.video["480p"].download()
      },
      'fileName': "video.mp4",
      'mimetype': "video/mp4",
      'caption': config.FOOTER
    }, _0x230f69);
    const _0x18c98f = {
      'text': '🎥',
      'key': _0x289abc.key
    };
    const _0x51981f = {
      'react': _0x18c98f
    };
    await _0x1f29c3.sendMessage(_0x1f27db, _0x51981f);
  } catch (_0x3704d2) {
    _0x1f416a(N_FOUND);
    l(_0x3704d2);
  }
});
const _0x11f60e = {
  'pattern': '72p',
  'react': "📽️",
  'dontAddCommandList': true,
  'filename': __filename
};
cmd(_0x11f60e, async (_0x168301, _0x14e3ce, _0x47237b, {
  from: _0x19f770,
  q: _0x338cab,
  reply: _0x1b848c
}) => {
  function _0x1656d9(_0x48cc5d, _0x2bb439, _0x2a43ba, _0xd7cf44, _0xdd02e8) {
    return _0x46de(_0x48cc5d - 0x356 + 0x16d, _0xd7cf44);
  }
  function _0x2631a7(_0x57eaab, _0x208df5, _0x1aaf75, _0x1f6f83, _0x1de97a) {
    return _0x46de(_0x1aaf75 + 0x52 - 0x3ba, _0x57eaab);
  }
  function _0x5f4e70(_0x1d1463, _0x1983dd, _0x49f05d, _0x4b4472, _0x254b92) {
    return _0x46de(_0x4b4472 + 0x481 - 0x127, _0x49f05d);
  }
  const _0xb62416 = {
    'MYvLO': function (_0x2d5e4b, _0x4f1b41) {
      return _0x2d5e4b(_0x4f1b41);
    },
    'tYBAH': function (_0x383df6, _0x1491a3) {
      return _0x383df6(_0x1491a3);
    },
    'ZSkWo': "720p",
    'snYzm': "video.mp4",
    'bqTaf': 'video/mp4',
    'AwyVW': function (_0x501f55, _0x74a140) {
      return _0x501f55(_0x74a140);
    }
  };
  function _0x459355(_0xabc817, _0x47c8c1, _0x431f71, _0x41d4c1, _0x46b284) {
    return _0x46de(_0x41d4c1 - 0x4db + 0x16d, _0x431f71);
  }
  function _0x12b08c(_0x167a33, _0x105481, _0x384cda, _0x2f1fe8, _0x114cb3) {
    return _0x46de(_0x384cda + 0x30b - 0x11f, _0x167a33);
  }
  try {
    if (!/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.test(_0x338cab)) {
      return await _0x1b848c(urlneed);
    }
    const _0x2da958 = await dl.youtubedl(_0x338cab);
    let _0x51a96a = await getsize(await _0x2da958.video["720p"].download());
    const _0x358b9c = {
      'quoted': _0x47237b
    };
    let _0x3617a6 = await _0x168301.sendMessage(_0x19f770, {
      'document': {
        'url': await _0x2da958.video["720p"].download()
      },
      'fileName': "video.mp4",
      'mimetype': "video/mp4",
      'caption': config.FOOTER
    }, _0x358b9c);
    const _0x2ddc84 = {
      'text': '🎥',
      'key': _0x3617a6.key
    };
    const _0x139cfe = {
      'react': _0x2ddc84
    };
    await _0x168301.sendMessage(_0x19f770, _0x139cfe);
  } catch (_0x236ae1) {
    _0x1b848c(N_FOUND);
    l(_0x236ae1);
  }
});
const _0xc4b17 = {
  'pattern': "108p",
  'react': "📽️",
  'dontAddCommandList': true,
  'filename': __filename
};
cmd(_0xc4b17, async (_0x5e7e52, _0xf3b25d, _0x28e100, {
  from: _0x25689d,
  q: _0x3d0a8d,
  reply: _0x230354
}) => {
  function _0x33db60(_0x110a46, _0x1c19a3, _0x1bd10a, _0x42eaee, _0x140c67) {
    return _0x46de(_0x140c67 + 0x3f3 - 0x127, _0x1c19a3);
  }
  const _0xce00fc = {
    'GrQIe': function (_0x19de5b, _0x8a82b2) {
      return _0x19de5b(_0x8a82b2);
    },
    'IjyaR': function (_0x39bf99, _0x50bf03) {
      return _0x39bf99(_0x50bf03);
    },
    'twXyz': function (_0x2ab2e4, _0x44bb8a) {
      return _0x2ab2e4(_0x44bb8a);
    },
    'mfILj': '1080p',
    'PJUcM': "video.mp4",
    'mVDvW': "video/mp4",
    'Plnzb': function (_0x672614, _0x23fa99) {
      return _0x672614(_0x23fa99);
    }
  };
  function _0x1b6a51(_0x3016b7, _0xd805e3, _0x5744b5, _0x164cf1, _0x48f8f4) {
    return _0x46de(_0x164cf1 - 0x259 - 0x11f, _0x48f8f4);
  }
  function _0x1811d3(_0x5008e0, _0x4c5dec, _0x146d4a, _0x39a420, _0x4a28c2) {
    return _0x46de(_0x146d4a + 0x730 - 0x3ba, _0x39a420);
  }
  function _0x45337e(_0x32212c, _0x150d03, _0x1e2f7a, _0x3b84c5, _0x5f5ad2) {
    return _0x46de(_0x5f5ad2 + 0x331 - 0x127, _0x32212c);
  }
  function _0xe021ec(_0x340e07, _0x84869e, _0x2b85dc, _0x1e9c32, _0x4ff649) {
    return _0x46de(_0x1e9c32 + 0x567 - 0x3ba, _0x340e07);
  }
  try {
    if (!/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.test(_0x3d0a8d)) {
      return await _0x230354(urlneed);
    }
    const _0xc96329 = await dl.youtubedl(_0x3d0a8d);
    let _0x3a511b = await getsize(await _0xc96329.video["1080p"].download());
    const _0x41cea9 = {
      'quoted': _0x28e100
    };
    let _0x80263a = await _0x5e7e52.sendMessage(_0x25689d, {
      'document': {
        'url': await _0xc96329.video["1080p"].download()
      },
      'fileName': "video.mp4",
      'mimetype': "video/mp4",
      'caption': config.FOOTER
    }, _0x41cea9);
    const _0x3ed33b = {
      'text': '🎥',
      'key': _0x80263a.key
    };
    const _0x5ddc2a = {
      'react': _0x3ed33b
    };
    await _0x5e7e52.sendMessage(_0x25689d, _0x5ddc2a);
  } catch (_0x46b23c) {
    _0x230354(N_FOUND);
    l(_0x46b23c);
  }
});
const _0x188310 = {
  'pattern': "ytaud",
  'dontAddCommandList': true,
  'filename': __filename
};
cmd(_0x188310, async (_0x3c870b, _0x38972a, _0x3fec67, {
  from: _0x12a9e9,
  q: _0x11217e,
  reply: _0x379c83
}) => {
  function _0x5851fb(_0x7e26c9, _0x10ecd6, _0x52fbb1, _0x54f908, _0x54115c) {
    return _0x46de(_0x54115c - 0x4aa + 0x16d, _0x7e26c9);
  }
  function _0x45103d(_0x1318ec, _0x1e608c, _0x5b9f55, _0x340c8f, _0x2e18db) {
    return _0x46de(_0x1e608c + 0x153 + 0x16d, _0x340c8f);
  }
  function _0xc05347(_0x6195ce, _0xd462ab, _0x4f5209, _0x151c04, _0xcae24) {
    return _0x46de(_0xcae24 - 0x49e + 0x16d, _0x6195ce);
  }
  function _0x5a1e45(_0x23e3db, _0x1bc5b9, _0x3be143, _0x5d6ba2, _0x40b72b) {
    return _0x46de(_0x3be143 + 0x21 - 0x11f, _0x1bc5b9);
  }
  const _0x407dc9 = {
    'CeAbB': "*Need link...*",
    'LAIzO': "audio/mpeg",
    'Srmjq': function (_0x69662c, _0x21dcc1) {
      return _0x69662c + _0x21dcc1;
    },
    'sbBVE': function (_0x548743, _0x5d16b4) {
      return _0x548743 + _0x5d16b4;
    },
    'AxDkX': 'mp3',
    'gdNoB': function (_0x3d11b5, _0x5c5f4d) {
      return _0x3d11b5(_0x5c5f4d);
    },
    'tZUCg': "*ERROR !!*"
  };
  function _0x28bc77(_0x584f5b, _0x5c7c25, _0x576c43, _0x226bb9, _0x29c33a) {
    return _0x46de(_0x5c7c25 + 0x5ff - 0x3ba, _0x584f5b);
  }
  try {
    const _0x52a3cb = {
      'text': '📥',
      'key': _0x38972a.key
    };
    const _0x3ea6f8 = {
      'react': _0x52a3cb
    };
    await _0x3c870b.sendMessage(_0x12a9e9, _0x3ea6f8);
    const _0x19266b = {
      'text': "*Need link...*"
    };
    const _0x5c2b6c = {
      'quoted': _0x38972a
    };
    if (!_0x11217e) {
      return await _0x3c870b.sendMessage(_0x12a9e9, _0x19266b, _0x5c2b6c);
    }
    let _0x37def5 = await fg.yta(_0x11217e);
    const _0x5b6543 = {
      'url': _0x37def5.dl_url
    };
    const _0x5b8fb6 = {
      'quoted': _0x38972a
    };
    let _0x7e9a90 = await _0x3c870b.sendMessage(_0x12a9e9, {
      'audio': _0x5b6543,
      'mimetype': "audio/mpeg",
      'fileName': _0x37def5.title + '.' + 'mp3'
    }, _0x5b8fb6);
    const _0x5b832f = {
      'text': '📁',
      'key': _0x7e9a90.key
    };
    const _0x2f4ecd = {
      'react': _0x5b832f
    };
    await _0x3c870b.sendMessage(_0x12a9e9, _0x2f4ecd);
    const _0x5665ae = {
      'text': '✔',
      'key': _0x38972a.key
    };
    const _0x421735 = {
      'react': _0x5665ae
    };
    await _0x3c870b.sendMessage(_0x12a9e9, _0x421735);
  } catch (_0x240623) {
    _0x379c83("*ERROR !!*");
    l(_0x240623);
  }
});
const _0x3cad7d = {
  'pattern': "ytdoc",
  'dontAddCommandList': true,
  'filename': __filename
};
cmd(_0x3cad7d, async (_0x525922, _0x289bbd, _0x4599d7, {
  from: _0x373a00,
  q: _0x40b0eb,
  reply: _0x4e7447
}) => {
  const _0x277006 = {
    'jmOkY': "*Need link...*",
    'AGsUY': "audio/mpeg",
    'fGLKE': function (_0x1dfd6e, _0x225b96) {
      return _0x1dfd6e + _0x225b96;
    },
    'GeHtR': 'mp3',
    'BZQBL': function (_0x5c65f1, _0x2d0ada) {
      return _0x5c65f1(_0x2d0ada);
    },
    'ceghx': "*ERROR !!*"
  };
  function _0x30f2b7(_0xfd3d20, _0x37b9dc, _0x361e01, _0x313761, _0x54810f) {
    return _0x46de(_0x313761 + 0x64d - 0x3ba, _0xfd3d20);
  }
  function _0x421190(_0xcfc40f, _0x269bc2, _0x3a8b1c, _0x1a680d, _0x1a4c35) {
    return _0x46de(_0x1a680d + 0x368 - 0x3ba, _0x269bc2);
  }
  function _0xb318dc(_0x11334a, _0x4760ab, _0x231fc4, _0x37dd60, _0x2b8a84) {
    return _0x46de(_0x2b8a84 + 0x376 - 0x11f, _0x37dd60);
  }
  function _0xd95032(_0xd74af9, _0x5a399f, _0x527a6e, _0x68e8fd, _0x5e0143) {
    return _0x46de(_0xd74af9 + 0x4db - 0x3ba, _0x68e8fd);
  }
  function _0x3294f3(_0x4dff2f, _0x3150f8, _0xd4c106, _0x32d26d, _0x4c3093) {
    return _0x46de(_0x4dff2f + 0x4c2 - 0x127, _0x4c3093);
  }
  try {
    const _0x1b6065 = {
      'text': '📥',
      'key': _0x289bbd.key
    };
    const _0x537518 = {
      'react': _0x1b6065
    };
    await _0x525922.sendMessage(_0x373a00, _0x537518);
    const _0x1ee91f = {
      'text': "*Need link...*"
    };
    const _0x38652c = {
      'quoted': _0x289bbd
    };
    if (!_0x40b0eb) {
      return await _0x525922.sendMessage(_0x373a00, _0x1ee91f, _0x38652c);
    }
    let _0x4f7c10 = await fg.yta(_0x40b0eb);
    const _0x29f392 = {
      'url': _0x4f7c10.dl_url
    };
    const _0x38e9ab = {
      'quoted': _0x289bbd
    };
    let _0x511ef2 = await _0x525922.sendMessage(_0x373a00, {
      'document': _0x29f392,
      'mimetype': "audio/mpeg",
      'fileName': _0x4f7c10.title + '.' + "mp3"
    }, _0x38e9ab);
    const _0x4302f5 = {
      'text': '📁',
      'key': _0x511ef2.key
    };
    const _0x38a505 = {
      'react': _0x4302f5
    };
    await _0x525922.sendMessage(_0x373a00, _0x38a505);
    const _0x149a32 = {
      'text': '✔',
      'key': _0x289bbd.key
    };
    const _0x3e883c = {
      'react': _0x149a32
    };
    await _0x525922.sendMessage(_0x373a00, _0x3e883c);
  } catch (_0x289c92) {
    _0x4e7447("*ERROR !!*");
    l(_0x289c92);
  }
});
