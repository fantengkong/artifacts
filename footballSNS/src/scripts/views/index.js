var indexTpl = require('../tpls/index.string');

// 定义视图
SPA.defineView('index', {
	// 装载模板
	html: indexTpl,
	plugins: ['delegated'],
	modules: [{
		name: 'content',
		container: '#m-container',
		views: ['home', 'search', 'my'],
		defaultTag: 'home'
	}],
	bindActions: {
		'switch': function(el, data) {
			this.modules.content.launch(data.name);
			$('#index-nav li').eq($(el.el).index()).addClass('active').siblings().removeClass('active');
		},
		'login': function() {
			SPA.open('login', {
				ani: {
					name: 'dialog',
					width: 280,
					height: 180

				}
				//				ani:{
				//					name:'actionSheet',
				//					distance:200
				//				}
			})
		}
	}

});