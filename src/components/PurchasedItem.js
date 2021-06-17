import React from "react";
import PropTypes from "prop-types";
const PurchasedProductListItem = (
	({ product }) => (

		<div class="media mb-2">
			<img src={product.image} class="align-self-center mr-3" alt="..."  style={{maxHeight:60+"px"}}/>
			<div class="media-body">
				<h5 class="mt-0">{product.price}$</h5>
			</div>
		</div>
	)
);

PurchasedProductListItem.propTypes = {
	product: PropTypes.shape({
		image: PropTypes.string.isRequired
	}).isRequired
};

export default PurchasedProductListItem;
