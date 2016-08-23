var indexMy = require('../tpls/k-my.string');

SPA.defineView('k-my',{
	html:indexMy,
	plugins: ['delegated'],
	bindEvents: {
		'show': function() {
			$(".k-m-main").on('tap',function(){
				$('.k-m-nav').toggle();
			})
		}
	}
});