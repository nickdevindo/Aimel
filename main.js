const axios = require('axios');

module.exports = chatamelia = async (message, bahasanya) => {
  const kodebhs = [
    'vn', 'en', 'he', 'zh', 'ch', 'id', 'ko', 'ph', 'ru', 'ar', 'ms', 'es', 'pt',
    'de', 'th', 'ja', 'fr', 'sv', 'tr', 'da', 'nb', 'it', 'nl', 'fi', 'ml', 'hi',
    'kh', 'ca', 'ta', 'rs', 'mn', 'fa', 'pa', 'cy', 'hr', 'el', 'az', 'sw', 'te',
    'pl', 'ro', 'si', 'fy', 'kk', 'cs', 'hu', 'lt', 'be', 'br', 'af', 'bg', 'is',
    'uk', 'jv', 'eu', 'rw', 'or', 'al', 'bn', 'gn', 'kn', 'my', 'sk', 'gl', 'gu',
    'ps', 'ka', 'et', 'tg', 'as', 'mr', 'ne', 'ur', 'uz', 'cx', 'hy', 'lv', 'sl',
    'ku', 'mk', 'bs', 'ig', 'lb', 'mg', 'ny', 'sn', 'tt', 'yo', 'co', 'eo', 'ga',
    'hm', 'hw', 'lo', 'mi', 'so', 'ug', 'am', 'gd'
  ];

  if (typeof message !== 'string') {
    let nomsg = { status: false, creator: "@nickdev", result: "Masukkan messagenya" };
    throw nomsg;
  } else if (!kodebhs.includes(bahasanya)) {
    let nobhs = { status: false, creator: "@nickdev", result: "Kode Bahasa Tidak Di Dukung", kodebahasa: kodebhs };
    throw nobhs;
  }

  const options = new URLSearchParams();
  options.append('text', message);
  options.append('lc', bahasanya);

  try {
    const response = await axios.post('https://api.simsimi.vn/v2/simtalk', options);
    let res = await response.data;
    let jsn = { status: true, creator: "@nickdev", result: res.message };
    return jsn;
  } catch (error) {
    let jstn = { status: false, creator: "@nickdev", result: "Maaf Saya Tidak Mengerti Apa Yang Kamu Katakan" };
    throw jstn;
  }
};
