/**
 * Quick Shop
 * 
 * @since 7.2.0
 */

( function( $ ) {

	$( document ).on( 'click', '.product-col.product-type-variable .add_to_cart_button', function ( e ) {

		var $this = $( this ),
			$product = $this.closest( '.product-col' ),
			$variations = $product.find( 'form' );

		if ( ! $variations.hasClass( 'quick-shop' ) ) { // Disable quick shop
			return;
		}
		if ( $product.data( 'variation-id' ) ) {
			let data = {
				action: "porto_add_to_cart",
				product_id: $product.data( 'variation-id' ),
				quantity: 1
			};
			let variation_array = $variations.serializeArray();
			if ( variation_array.length ) {
				variation_array.forEach( function( _arr ) {
					if ( _arr.name && _arr.value ) {
						data[_arr.name] = _arr.value;
					}
				} );
			}

			$.ajax( {
				type: 'POST',
				dataType: 'json',
				url: js_porto_vars.ajax_url,
				data: data,
				success: function ( response ) {
					$( 'body' ).trigger( 'added_to_cart', [response.fragments, response.cart_hash, $this] );
				}
			});
			e.preventDefault();
		}
	} ).on( 'reset_data', function( event ) {
		var $form = $( event.target ).closest( 'form' );
		var $loop = $form.closest( '.product-col' );
		if ( ! $form.hasClass( 'quick-shop' ) ) { // Disable quick shop
			return;
		}
		if ( $loop.length && $loop.data( 'raw-price' ) ) {
			$loop.find( '.tb-woo-price' ).html( $loop.data( 'raw-price' ) );
			let $cart_button = $loop.find( '.add_to_cart_button' ); // can have 2 or 3 add to cart buttons for product loop
			$cart_button.each( function() {
				let $bt = $( this );
				if ( $bt.data( 'raw-variable-html' ) ) {
					// Replace
					$bt.html( $bt.data( 'raw-variable-html' ) );
				}
				$bt.addClass( 'product_type_variable' ).removeClass( 'product_type_simple' );
			} );
			$loop.data( 'variation-id', '' );
			$loop.data( 'raw-price', '' );
		}
	} ).on( 'found_variation.wc-variation-form', function( event, variation ) {
		var $form = $( event.target );
		var $loop = $form.closest( '.product-col' );
		if ( ! $form.hasClass( 'quick-shop' ) ) { // Disable quick shop
			return;
		}
		if ( $loop.length ) {
			// Enable or disable the add to cart button
			if ( ! variation.is_purchasable || ! variation.is_in_stock || ! variation.variation_is_visible ) {
				$loop.data( 'variation-id', '' );
				if ( ! $loop.data( 'raw-price' ) ) {
					$loop.data( 'raw-price', $loop.find( '.tb-woo-price' ).html().trim() );
				}
				if ( variation.price_html ) {
					$loop.find( '.tb-woo-price' ).html( variation.price_html );
				}

				let $cart_button = $loop.find( '.add_to_cart_button' ); // can have 2 or 3 add to cart buttons for product loop
				$cart_button.each( function() {
					let $bt = $( this );
					if ( ! $bt.data( 'raw-variable-html' ) ) {
						$bt.data( 'raw-variable-html', $bt.html().trim() );
					}
					// Replace
					$bt.html( $bt.data( 'raw-variable-html' ) );
					$bt.addClass( 'product_type_variable' ).removeClass( 'product_type_simple' );
				} );

				// can't purchase
				return false;
			}

			$loop.data( 'variation-id', variation.variation_id );
			if ( ! $loop.data( 'raw-price' ) ) {
				$loop.data( 'raw-price', $loop.find( '.tb-woo-price' ).html().trim() );
			}

			if ( variation.price_html ) {
				$loop.find( '.tb-woo-price' ).html( variation.price_html );
			}

			let $cart_button = $loop.find( '.add_to_cart_button' ); // can have 2 or 3 add to cart buttons for product loop
			$cart_button.each( function() {
				let $bt = $( this );
				if ( ! $bt.data( 'raw-variable-html' ) ) {
					$bt.data( 'raw-variable-html', $bt.html().trim() );
				}
				// Replace
				$bt.html( $bt.data( 'cart-html' ) );
				$bt.removeClass( 'product_type_variable' ).addClass( 'product_type_simple' );
			} );
		}
	} ).on( 'click', '.more-swatch', function( e ) {
		let $this = $( this );
		$this.closest( 'tbody' ).find( 'tr.d-none' ).removeClass( 'd-none' );
		$this.closest( '.owl-carousel' ).trigger( 'refresh.owl.carousel' );
		$this.hide();
		e.preventDefault();
	} );

} ) ( window.jQuery );