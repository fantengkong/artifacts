module.exports = {
  rules: [
    {
      pattern: /\/api\/L-indexTop\.php\?type=more\&pageNo=1/,
      respondwith: './L-indexTop.json'
    },
    {
      pattern: /\/api\/k-list\.php\?type=more\&pageNo=2/,
      respondwith: './k-list.json'
    }
  ]
};
