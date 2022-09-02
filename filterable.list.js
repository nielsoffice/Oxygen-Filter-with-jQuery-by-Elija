jQuery.expr[":"].CIcontains = jQuery.expr.createPseudo( function (arg) {
	return function (elem) {
		return jQuery(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
	};
});

jQuery('#filter').keyup(function() {
	var curr_text = jQuery(this).val();
	filterResults(curr_text);
})

jQuery('.fast-filter input[type="checkbox"]').change( function() {
	
	var thisID = jQuery(this).attr('id');
	
	jQuery('.fast-filter input[type="checkbox"]').each( function() {
		if( jQuery(this).attr('id') != thisID) {
			jQuery(this).prop('checked', false);
		}
	})
	
	if( jQuery(this).is(':checked') ) {
		var curr_text = jQuery(this).data('search-term');
		filterResults(curr_text);
	} else {
		filterResults('');
	}
	
	
})

function filterResults(curr_text) {
	jQuery('.card').hide();
	jQuery('.card:CIcontains("' + curr_text + '")').show();
}