module.exports = {
	rules: [
		{
			pattern: /\/api\/livelist\.php\?type=more\&pageNo=1/,
			respondwith: './livelist.json'
		},
		{
			pattern: /\/api\/livelist\.php\?type=more\&pageNo=2/,
			respondwith: './livelist-more.json'
		},
    {
			pattern: /\/api\/livelist\.php\?type=refresh/,
			respondwith: './livelist-refresh.json'
		},
		{
			pattern: /\/api\/getDetail\.php\?id=\d/,
			respondwith: './detail.json'
		} 
	]
};

