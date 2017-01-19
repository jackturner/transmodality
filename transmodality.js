$( function() {

	var $links = $( '#introduction a, #media a' )

	$links.on( 'mouseenter', function() {

		var href_we_looking_for = $( this).attr( 'href' )

		$links.each( function() {

			if( $( this ).attr( 'href' ) == href_we_looking_for )
				$( this ).addClass( 'hover' )

		} )

	} ).on( 'mouseleave', function() {

		$links.removeClass('hover')

	})

} )