var loginTpl = require('../tpls/login.string');

// 定义视图
SPA.defineView('login', {
	// 装载模板
	html: loginTpl,
	styles:{
		'background-color':'transparent!important'
	}
});