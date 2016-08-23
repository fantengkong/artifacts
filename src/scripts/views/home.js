var indexHome = require('../tpls/home.string');

SPA.defineView('home',{
	html:indexHome,
		bindEvents:{
		'show':function(){
			var mySwiper = new Swiper('.swiper-container',{
				  autoplay: 5000,
			    pagination : '.swiper-pagination',
			    loop:'true'
			});
		}
	}
});