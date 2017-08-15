
	$(function(){
		var i=0;
		$('.page_4 .texts_all .texts:eq(0)').clone().appendTo(".Hide").hide();
		$('.page_4 .Button_down').on('click',function(){ 
			console.log(i);
//			alert($('#texts_all .texts').length);
			if($('.page_4 .texts_all .texts').length<5){
				i++;
//				alert('傻子');
				$('.Hide .texts .editor').text('');				
				$('.Hide .texts ').clone().appendTo('.page_4 .texts_all').show();
				$('.page_4 .text_all li').eq(i).show().siblings('.cla').hide();
				$('.page_4 .texts_all .texts').eq(i).show().siblings().hide();
//				console.log(i);
			}
			else{
				if(i<4){
				i++;}
				$('.page_4 .text_all li').eq(i).show().siblings('.cla').hide();
				$('.page_4 .texts_all .texts').eq(i).show().siblings('.texts').hide();
			}
		});
		$('.page_4 .Button_on').on('click',function(){
			i--;
			if(i<0){
				i=0;
			}
			if(i>=0){
			$('.page_4 .text_all li').eq(i).show().siblings('.cla').hide();
			$('.page_4 .texts_all .texts').eq(i).show().siblings('.texts').hide();
			}
		})
	})