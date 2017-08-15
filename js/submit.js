	
		$(function(){
			var i=1,j=1;
			$('.page_2 .button_add').bind('click',function(){	//增加方法				
				$('.page_2 .team_all .judge').each(function(){					
					if(($(this).val().length>0)&&$(this).hasClass('judge_1')){	
						
							if($(".page_2 .teamr .input_2 .judge_1").val().length!=10){
							
								layer.msg('学号输错了吗', {
									  offset: 't',
									  anim: 6
								});															
							}
							else{
								j++;
								$(this).removeClass('judge');
							}
					}
					else if(($(this).val().length>0)&&($(this).not('.judge_1'))){
						j++;
						$(this).removeClass('judge');
					}
					else{
						
					layer.msg('请注意将所有内容填写完整');				
					}
					
				})
				console.log(j);
				if(j==5){
					i++;
					$(".page_2 .team_all .team_1").hide();
					$(".page_2 .team_clone .team_1").clone().appendTo(".page_2 .teamr");					
					$('.page_2 .team_nav').find('input:eq('+(i-1)+')').show();
					
					if(i==5){
					$('.page_2 .button_add').hide(); 
					}
					j=1;
				}
				
			})
			 $('.page_2 .team_nav .buttons').bind('click',function(){			 	
			 	var num=$(this).index();
			 	$(".page_2 .team_all .team_1").each(function(){
			 		if($(this).index()==num){
			 			$(this).show().siblings().hide();
			 		}
			 	})
			 }) 
			 $('.page_2 .delete').bind('click',function(){
			 	$('.page_2 .button_add').show();
			 	if(i>=2){
			 	$('.page_2 .team_nav').find('input:eq('+(i-1)+')').hide();
			 	$('.page_2 .teamr').find('.team_1:eq('+(i-1)+')').remove();
			 	$('.page_2 .teamr').find('.team_1:eq('+(i-2)+')').show().find('input').each(function(){
			 		$(this).addClass('judge');
			 		
			 	})
			 	i--;
			 	}
			 	
			 })
		})