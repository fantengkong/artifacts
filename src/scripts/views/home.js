//var indexHome = require('../tpls/home.string');
//
//SPA.defineView('home',{
//	html:indexHome,
//		bindEvents:{
//		'show':function(){
//			var mySwiper = new Swiper('.swiper-container',{
//				  autoplay: 5000,
//			    pagination : '.swiper-pagination',
//			    loop:'true'
//			});
//		}
//	}
//});
var indexHome = require('../tpls/home.string');

SPA.defineView('home',{
	html:indexHome,
	plugins: [
	    'delegated', {
	      name: 'avalon',
	      options: function (vm) {
	        vm.bannerlist = [];
	        vm.bannerlists = [];
	        vm.list = [];
	        vm.hot1 = [];
	        vm.hot2 = [];
	        vm.hot3 = [];
	        vm.hot4 = [];
	        vm.hot5 = [];
	        vm.text1 = [];
	        vm.text2 = [];
	        vm.text3 = [];
	        vm.text4 = [];
	        vm.text5 = [];
//	        vm.isShowLoading = true;
	      }
	    }
	],
	bindActions: {
		'goto.list': function() {
			SPA.open('k-list');
		},

	},
	bindEvents:{
		'show':function(){
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
			        console.log(res.data.bannerOtherList1)
			        vm.bannerlist = res.data.banerImgList;
                    vm.bannerlists = res.data.bannerOtherList1[0].bannerImageList;
                    vm.list = res.data.listFl;
                    vm.hot1 = res.data.list_product1;
                    vm.hot2 = res.data.list_product2;
                    vm.hot3 = res.data.list_product3;
                    vm.hot4 = res.data.list_product4;
                    vm.hot5 = res.data.list_product5;
                    vm.text1 = res.data.bannerOtherList2[0].bannerImageList;
                    vm.text2 = res.data.bannerOtherList2[1].bannerImageList;
                    vm.text3 = res.data.bannerOtherList2[2].bannerImageList;
                    vm.text4 = res.data.bannerOtherList2[3].bannerImageList;
                    vm.text5 = res.data.bannerOtherList2[4].bannerImageList;
                    
                    var mySwiper = new Swiper('.swiper-container',{
						autoplay: 5000,
					    pagination : '.swiper-pagination',
					    loop:'true'
					});
			    }
			  });
			
				
			
		}
	}
	
});