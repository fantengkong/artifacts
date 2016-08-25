
var detailTpl = require('../tpls/k-detail.string');

// 定义视图
SPA.defineView('k-detail', {
	// 装载模板
	html: detailTpl,
	
	init:{
		getItem:function(id,res){
			for(var i=0;i<res.data.listproducrs.length;i++){
				if(res.data.listproducrs[i].id==id){
					return res.data.listproducrs[i];
				}
			}
		}
	},
	
	plugins: [
		'delegated',{
			name:'avalon',
			options:function(vm){
				vm.detail = {};
			}
		}
	],
	bindActions: {
		'back': function() {
			this.hide();
		}
	},
	bindEvents: {
		'show': function() {
			var vm = this.getVM();
			var that = this;
			$.ajax({
				url:"/api/k-list.php",
				
				
				type:"get",
				data:{
					type:'more',
					pageNo:2
				},
				
				success:function(res){
//					console.log(res.data.listproducrs)
					vm.detail = that.getItem(that.param.id,res);
					
				}
			});
		}
	}
	


});