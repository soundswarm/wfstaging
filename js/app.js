$(document).ready(function() {      
   //check if age ID cookie exists
   if($.cookie('warflagbeer.com')) {
   	$('#ID').hide();
   } else {
   	//check user age
   	$('#content').hide();
   	$('#ID').fadeIn();
   	
   	//if user clicks yes, display content
   	$('.yes').on('click', function() {
   		//set cookie
   		$.cookie('warflagbeer.com','0',{expires: 30});
   		//display content
   		$('#ID').hide();
   		$('#content').fadeIn();
   	});

   	//if user click no, do nothing
   };

   
   //photo carousel
   $('.carousel').carousel({
    pause: true,
    interval: false
	});
   


});