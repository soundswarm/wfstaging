$(document).ready(function() {      
   //check if age ID cookie exists
   if($.cookie('warflagbeer.com')) {
      $('#ID').hide();
   } else {
      //check user age
      $('#content').hide();
      
      //the ID form html is served through jquery so it doesn't get included in search engine crawlers which have JS turned off.
      $('#ID').html('<header>\
            <div class="container">\
                <div class="intro-text">\
                    <div class="intro-heading">WAR FLAG</div>\
                    <div class="intro-lead-in">ALES & LAGERS</div>\
                    <div class="idForm">\
                        Are you at least 21 years old or of legal drinking age in your country of residence?\
                        <div class="btn-group" role="group" aria-label="...">\
                            <button type="button" class="btn btn-default yes">YES</button>\
                            <button type="button" class="btn btn-default no">NO</button>\
                        </div>\
                    </div>\
                </div>\
            </div>\
         </header>').show();
      
      //if user clicks yes, display content
      $('.yes').on('click', function() {
         //set cookie
         $.cookie('warflagbeer.com','0',{expires: 30});
         //display content
         
         $('#ID').hide();
         $('#content').show();
         $('.google-maps').html('<iframe src="https://www.google.com/maps/d/embed?mid=z1AgUqVx4gRo.kt_HDdj9rA1w" width="640" height="480"></iframe>').css('display', 'block');
         
      });

      //if user click no, do nothing
   };

   
   //photo carousel
   $('.carousel').carousel({
    pause: true,
    interval: false
	});
   


});