var indexLogin = require('../tpls/k-login.string');

SPA.defineView('k-login',{
	html:indexLogin,
	plugins:[
		'delegated'
	],
	bindActions:{
		'back':function(){
			this.hide();
		}
	},
	bindEvents:{
		'show':function(){
			var res=/^\w+@[a-zA-Z0-9]+\.[a-z]+$/;
			var res1=/^1\d{6,10}$/;
			var res2=/^\w+$/;
			var col=$('section').css('color');
			$('section input').on('blur',function(){
				var str=$(this).val();
				if(res.test(str)||res1.test(str)||res2.test(str)){	
					$(this).css({color:'#999',fontWeight:100}).siblings().css('color',col);
				}else{
					$(this).css({color:'red',fontWeight:'bold'}).siblings().css('color','red');
				}
			});
			
			$(".k-loginbtn").on("tap",function(){
				var str1=$('.k-user input').val();
				var str2=$('.k-psd input').val();
				
				if(!res2.test(str1) || !res2.test(str2)){	
					return;
				}
				$.ajax({
          url:"http://datainfo.duapp.com/shopdata/userinfo.php",
          data:{
              status:"login",
              userID:str1,
              password:str2
          },
          success:function(date){
              var data=JSON.parse(date);
              if(data.code){
                  alert("欢迎"+data.userID+"回来");
                  if(confirm("是否保存用户名和密码")){
                  	localStorage.user=data.userID;
                  	localStorage.psd=data.password;
                  }else{
                  	sessionStorage.user=data.userID;
                  	sessionStorage.psd=data.password;
                  }
                  SPA.open('k-register');
              }else if(data==0){
                  alert("用户名不存在");
              }else if(data==2){
                  alert("密码不正确")
              }
          },
          error:function(data){
              console.log(data)
          }
        })
				
				
			})
		}
	}

	
});

