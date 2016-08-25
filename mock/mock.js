module.exports = {
  rules: [
    {
      pattern: /\/api\/goodslist\.php\?type=more\&pageNo=1/,
      respondwith: './goodslist.json'
    },
    ]
 }