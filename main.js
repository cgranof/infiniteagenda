$(document).on('ready', function() {
  
  $('.day').on('click', function() {
  		var altMarker = $(<input type="text">)
  		$('.day').append($(this));
  	});

  	//$(document).on('click', '.glyphicon', function(event) {
		//$(this).remove();
		//event.stopPropagation();


});