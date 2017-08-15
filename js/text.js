
	$(function(){
		var i=0;
		$('.page_2 .texts_all .texts:eq(0)').clone().appendTo(".page_2 .Hide").hide();
		$('.page_2 .Button_down').on('click',function(){ 			
//			alert($('#texts_all .texts').length);
			if($('.page_2 .texts_all .texts').length<5){
				i++;
				$('.page_2 .Hide .texts .editor').text('');				
				$('.page_2 .Hide .texts ').clone().appendTo('.page_2 .texts_all').show();
				$('.page_2 .text_all li').eq(i).show().siblings('.cla').hide();
				$('.page_2 .texts_all .texts').eq(i).show().siblings().hide();
//				console.log(i);
			}
			else{
				if(i<4){
				i++;}
				$('.page_2 .text_all li').eq(i).show().siblings('.cla').hide();
				$('.page_2 .texts_all .texts').eq(i).show().siblings('.texts').hide();
			}
		});
		$('.page_2 .Button_on').on('click',function(){
			i--;
			if(i<0){
				i=0;
			}
			if(i>=0){
			$('.page_2 .text_all li').eq(i).show().siblings('.cla').hide();
			$('.page_2 .texts_all .texts').eq(i).show().siblings('.texts').hide();
			}
			
		})
	})