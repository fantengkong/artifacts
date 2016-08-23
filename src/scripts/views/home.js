var indexHome = require('../tpls/home.string');

SPA.defineView('home',{
	html:indexHome,
	plugins: [
	    'delegated', {
	      name: 'avalon',
	      options: function (vm) {
	        vm.livelist = [];
	        vm.isShowLoading = true;
	      }
	    }
	],
	bindEvents:{
		'show':function(){
			var mySwiper = new Swiper('.swiper-container',{
				autoplay: 5000,
			    pagination : '.swiper-pagination',
			    loop:'true'
			});
								// 获得vm
			  var vm = this.getVM();
			
			  // ajax拉取数据
			  $.ajax({
			    url: '/api/L-indexTop.php',
			    type: 'get',
			    data: {
			      type: 'more',
			      pageNo: 1
			    },
			    success: function (res) {
			      setTimeout(function () {
			        vm.livelist = res.data.banerImgList;
			        vm.isShowLoading = false;
			      }, 5000);
			    }
			  });
			
		}
	}
	
});