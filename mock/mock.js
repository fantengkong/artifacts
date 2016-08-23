module.exports = {
  rules: [
    {
      pattern: /\/api\/L-indexTop.json\.php\?type=more\&pageNo=1/,
      respondwith: './L-indexTop.json.json'
    }
//  {
//    pattern: /\/api\/livelist\.php\?type=more\&pageNo=2/,
//    respondwith: './livelist-more.json'
//  },
//  {
//    pattern: /\/api\/livelist\.php\?type=refresh/,
//    respondwith: './livelist-refresh.json'
//  },
//  {
//    pattern: /\/api\/getDetail\.php\?id=\d+/,
//    respondwith: './detail.json'
//  }
  ]
};
